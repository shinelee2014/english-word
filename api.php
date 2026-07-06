<?php
// =========================================================
// English Word App - NAS Backend API
// Stores learner profiles, progress and bookmarks as JSON
// files in the ./data/ directory on the QNAP server.
// =========================================================

header('Content-Type: application/json; charset=utf-8');
// Same-origin on NAS, no CORS header needed. Added for dev convenience.
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// --- Data directory setup ---
$dataDir = __DIR__ . '/data';
if (!file_exists($dataDir)) {
    if (!mkdir($dataDir, 0755, true)) {
        http_response_code(500);
        echo json_encode(['error' => 'Cannot create data directory']);
        exit;
    }
}

$kidsListFile = $dataDir . '/kids_list.json';

// --- Helper: safe filename for kid name ---
function kidFile($dataDir, $kidName) {
    // Sanitize: allow unicode letters/digits, replace anything else with _
    $safe = preg_replace('/[^\p{L}\p{N}_\-]/u', '_', $kidName);
    if (empty($safe)) $safe = 'default';
    return $dataDir . '/' . $safe . '.json';
}

// --- Helper: read JSON file ---
function readJson($path, $default = []) {
    if (!file_exists($path)) return $default;
    $content = file_get_contents($path);
    $decoded = json_decode($content, true);
    return ($decoded !== null) ? $decoded : $default;
}

// --- Helper: write JSON file atomically ---
function writeJson($path, $data) {
    $tmp = $path . '.tmp';
    if (file_put_contents($tmp, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)) !== false) {
        rename($tmp, $path);
        return true;
    }
    return false;
}

// --- Router ---
$action = $_GET['action'] ?? '';

switch ($action) {

    // GET /api.php?action=list
    // Returns { kids: [...], active: "name" }
    case 'list':
        $data = readJson($kidsListFile, ['kids' => ['默认小朋友'], 'active' => '默认小朋友']);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        break;

    // POST /api.php?action=setActive
    // Body: { "kid": "name" }
    case 'setActive':
        $body = json_decode(file_get_contents('php://input'), true) ?? [];
        $kid  = trim($body['kid'] ?? '');
        if (empty($kid)) { http_response_code(400); echo json_encode(['error' => 'Missing kid']); break; }
        $data = readJson($kidsListFile, ['kids' => ['默认小朋友'], 'active' => '默认小朋友']);
        if (in_array($kid, $data['kids'])) {
            $data['active'] = $kid;
            writeJson($kidsListFile, $data);
        }
        echo json_encode(['success' => true], JSON_UNESCAPED_UNICODE);
        break;

    // POST /api.php?action=addKid
    // Body: { "kid": "name" }
    case 'addKid':
        $body = json_decode(file_get_contents('php://input'), true) ?? [];
        $kid  = trim($body['kid'] ?? '');
        if (empty($kid)) { http_response_code(400); echo json_encode(['error' => 'Missing kid']); break; }
        $data = readJson($kidsListFile, ['kids' => ['默认小朋友'], 'active' => '默认小朋友']);
        if (in_array($kid, $data['kids'])) {
            echo json_encode(['error' => 'exists'], JSON_UNESCAPED_UNICODE);
            break;
        }
        $data['kids'][] = $kid;
        $data['active']  = $kid;
        writeJson($kidsListFile, $data);
        // Initialize empty profile file for the new kid
        $pf = kidFile($dataDir, $kid);
        if (!file_exists($pf)) {
            writeJson($pf, ['progress' => [], 'bookmarks' => []]);
        }
        echo json_encode(['success' => true], JSON_UNESCAPED_UNICODE);
        break;

    // GET /api.php?action=load&kid=name
    // Returns { progress: {...}, bookmarks: [...] }
    case 'load':
        $kid = trim($_GET['kid'] ?? '');
        if (empty($kid)) { http_response_code(400); echo json_encode(['error' => 'Missing kid']); break; }
        $data = readJson(kidFile($dataDir, $kid), ['progress' => [], 'bookmarks' => []]);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        break;

    // POST /api.php?action=save&kid=name
    // Body: { progress: {...}, bookmarks: [...] }
    case 'save':
        $kid  = trim($_GET['kid'] ?? '');
        if (empty($kid)) { http_response_code(400); echo json_encode(['error' => 'Missing kid']); break; }
        $body = json_decode(file_get_contents('php://input'), true) ?? [];
        $stored = readJson(kidFile($dataDir, $kid), ['progress' => [], 'bookmarks' => []]);
        if (isset($body['progress']))  $stored['progress']  = $body['progress'];
        if (isset($body['bookmarks'])) $stored['bookmarks'] = $body['bookmarks'];
        writeJson(kidFile($dataDir, $kid), $stored);
        // Also ensure this kid is in the list
        $listData = readJson($kidsListFile, ['kids' => ['默认小朋友'], 'active' => '默认小朋友']);
        if (!in_array($kid, $listData['kids'])) {
            $listData['kids'][] = $kid;
            writeJson($kidsListFile, $listData);
        }
        echo json_encode(['success' => true], JSON_UNESCAPED_UNICODE);
        break;

    default:
        http_response_code(400);
        echo json_encode(['error' => 'Unknown action']);
}
?>

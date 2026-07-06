const WORDS_DATA = {
  "G1_S1": {
    "name": "一年级上册",
    "units": {
      "Unit 1 Hello": [
        { "word": "hello", "translation": "你好", "phonetic": "/həˈləʊ/" },
        { "word": "hi", "translation": "你好", "phonetic": "/haɪ/" },
        { "word": "good morning", "translation": "早上好", "phonetic": "/ɡʊd ˈmɔːnɪŋ/" },
        { "word": "good afternoon", "translation": "下午好", "phonetic": "/ɡʊd ˌɑːftəˈnuːn/" }
      ],
      "Unit 2 My school bag": [
        { "word": "book", "translation": "书", "phonetic": "/bʊk/" },
        { "word": "ruler", "translation": "尺子", "phonetic": "/ˈruːlə/" },
        { "word": "pencil", "translation": "铅笔", "phonetic": "/ˈpensl/" },
        { "word": "rubber", "translation": "橡皮", "phonetic": "/ˈrʌbə/" }
      ],
      "Unit 3 My face": [
        { "word": "eye", "translation": "眼睛", "phonetic": "/aɪ/" },
        { "word": "ear", "translation": "耳朵", "phonetic": "/ɪə/" },
        { "word": "nose", "translation": "鼻子", "phonetic": "/nəʊz/" },
        { "word": "mouth", "translation": "嘴巴", "phonetic": "/maʊθ/" },
        { "word": "face", "translation": "脸", "phonetic": "/feɪs/" }
      ],
      "Unit 4 Colors": [
        { "word": "red", "translation": "红色", "phonetic": "/red/" },
        { "word": "yellow", "translation": "黄色", "phonetic": "/ˈjeləʊ/" },
        { "word": "blue", "translation": "蓝色", "phonetic": "/bluː/" },
        { "word": "green", "translation": "绿色", "phonetic": "/ɡriːn/" }
      ]
    }
  },
  "G1_S2": {
    "name": "一年级下册",
    "units": {
      "Unit 1 Toys": [
        { "word": "ball", "translation": "球", "phonetic": "/bɔːl/" },
        { "word": "doll", "translation": "玩偶", "phonetic": "/dɒl/" },
        { "word": "train", "translation": "火车", "phonetic": "/treɪn/" },
        { "word": "car", "translation": "小汽车", "phonetic": "/kɑː/" }
      ]
    }
  },
  "G2_S1": {
    "name": "二年级上册",
    "units": {
      "Unit 1 Family": [
        { "word": "father", "translation": "父亲", "phonetic": "/ˈfɑːðə/" },
        { "word": "mother", "translation": "母亲", "phonetic": "/ˈmʌðə/" },
        { "word": "brother", "translation": "兄弟", "phonetic": "/ˈbrʌðə/" },
        { "word": "sister", "translation": "姐妹", "phonetic": "/ˈsɪstə/" }
      ],
      "Unit 2 Actions": [
        { "word": "run", "translation": "跑", "phonetic": "/rʌn/" },
        { "word": "jump", "translation": "跳", "phonetic": "/dʒʌmp/" },
        { "word": "swim", "translation": "游泳", "phonetic": "/swɪm/" },
        { "word": "fly", "translation": "飞", "phonetic": "/flaɪ/" }
      ]
    }
  },
  "G2_S2": {
    "name": "二年级下册",
    "units": {
      "Unit 1 Fruits": [
        { "word": "apple", "translation": "苹果", "phonetic": "/ˈæpl/" },
        { "word": "banana", "translation": "香蕉", "phonetic": "/bəˈnɑːnə/" },
        { "word": "pear", "translation": "梨", "phonetic": "/peə/" },
        { "word": "peach", "translation": "桃子", "phonetic": "/piːtʃ/" }
      ]
    }
  },
  "G3_S1": {
    "name": "三年级上册",
    "units": {
      "Unit 1 Where's my book?": [
        { "word": "Where's", "translation": "在哪里", "phonetic": "/weəz/" },
        { "word": "isn't", "translation": "不是", "phonetic": "/ˈɪznt/" },
        { "word": "on", "translation": "在……上面", "phonetic": "/ɒn/" },
        { "word": "sofa", "translation": "沙发", "phonetic": "/ˈsəʊfə/" },
        { "word": "under", "translation": "在……下面", "phonetic": "/ˈʌndə/" },
        { "word": "behind", "translation": "在……后面", "phonetic": "/bɪˈhaɪnd/" },
        { "word": "vase", "translation": "花瓶", "phonetic": "/vɑːz/" },
        { "word": "basket", "translation": "篮子", "phonetic": "/ˈbɑːskɪt/" },
        { "word": "miaow", "translation": "喵", "phonetic": "/miˈaʊ/" },
        { "word": "How nice", "translation": "太好了！", "phonetic": "/haʊ naɪs/" }
      ],
      "Unit 2 What's for dinner?": [
        { "word": "dinner", "translation": "晚餐，正餐", "phonetic": "/ˈdɪnə/" },
        { "word": "ready", "translation": "准备好的", "phonetic": "/ˈredi/" },
        { "word": "for", "translation": "给、对、供", "phonetic": "/fɔː/" },
        { "word": "rice", "translation": "米饭", "phonetic": "/raɪs/" },
        { "word": "broccoli", "translation": "西兰花", "phonetic": "/ˈbrɒkəli/" },
        { "word": "fish", "translation": "鱼；鱼肉", "phonetic": "/fɪʃ/" },
        { "word": "soup", "translation": "汤；羹", "phonetic": "/suːp/" },
        { "word": "meat", "translation": "肉类", "phonetic": "/miːt/" },
        { "word": "noodles", "translation": "面条", "phonetic": "/ˈnuːdlz/" }
      ],
      "Unit 3 My school subjects": [
        { "word": "PE", "translation": "体育课", "phonetic": "/ˌpiː ˈiː/" },
        { "word": "Maths", "translation": "数学课", "phonetic": "/mæθs/" },
        { "word": "Chinese", "translation": "语文课", "phonetic": "/ˌtʃaɪˈniːz/" },
        { "word": "English", "translation": "英语课", "phonetic": "/ˈɪŋɡlɪʃ/" },
        { "word": "today", "translation": "今天", "phonetic": "/təˈdeɪ/" },
        { "word": "fun", "translation": "有趣的", "phonetic": "/fʌn/" },
        { "word": "easy", "translation": "简单的", "phonetic": "/ˈiːzi/" },
        { "word": "Art", "translation": "美术课", "phonetic": "/ɑːt/" },
        { "word": "Music", "translation": "音乐课", "phonetic": "/ˈmjuːzɪk/" }
      ],
      "Unit 4 My body parts": [
        { "word": "eye", "translation": "眼睛", "phonetic": "/aɪ/" },
        { "word": "nose", "translation": "鼻子", "phonetic": "/nəʊz/" },
        { "word": "mouth", "translation": "嘴巴", "phonetic": "/maʊθ/" },
        { "word": "hair", "translation": "头发", "phonetic": "/heə/" },
        { "word": "ear", "translation": "耳朵", "phonetic": "/ɪə/" },
        { "word": "face", "translation": "脸；面孔", "phonetic": "/feɪs/" }
      ],
      "Unit 5 Can you ride a bike?": [
        { "word": "Can you", "translation": "你会吗？", "phonetic": "/kæn juː/" },
        { "word": "skip", "translation": "跳绳", "phonetic": "/skɪp/" },
        { "word": "skate", "translation": "滑冰", "phonetic": "/skeɪt/" },
        { "word": "play", "translation": "玩耍；游戏", "phonetic": "/pleɪ/" },
        { "word": "can't", "translation": "不能；不会", "phonetic": "/kɑːnt/" },
        { "word": "ride a bike", "translation": "骑自行车", "phonetic": "/raɪd ə baɪk/" },
        { "word": "swim", "translation": "游泳", "phonetic": "/swɪm/" }
      ],
      "Unit 6 Let's go shopping": [
        { "word": "go shopping", "translation": "购物", "phonetic": "/ɡəʊ ˈʃɒpɪŋ/" },
        { "word": "Hooray", "translation": "好极了！", "phonetic": "/hʊˈreɪ/" },
        { "word": "dress", "translation": "连衣裙", "phonetic": "/dres/" },
        { "word": "shorts", "translation": "短裤", "phonetic": "/ʃɔːts/" },
        { "word": "T-shirt", "translation": "T恤衫", "phonetic": "/ˈtiː ʃɜːt/" },
        { "word": "blouse", "translation": "女式短上衣，衬衫", "phonetic": "/blaʊz/" },
        { "word": "hat", "translation": "帽子", "phonetic": "/hæt/" },
        { "word": "skirt", "translation": "短裙", "phonetic": "/skɜːt/" }
      ],
      "Unit 7 Summer fun": [
        { "word": "summer", "translation": "夏天；夏季", "phonetic": "/ˈsʌmə/" },
        { "word": "beach", "translation": "海滩；沙滩", "phonetic": "/biːtʃ/" },
        { "word": "pool", "translation": "游泳池", "phonetic": "/puːl/" },
        { "word": "eat", "translation": "吃", "phonetic": "/iːt/" },
        { "word": "drink", "translation": "喝；饮", "phonetic": "/drɪŋk/" },
        { "word": "ice cream", "translation": "冰淇淋", "phonetic": "/ˌaɪs ˈkriːm/" },
        { "word": "orange juice", "translation": "橙汁", "phonetic": "/ˈɒrɪndʒ dʒuːs/" },
        { "word": "watermelon", "translation": "西瓜", "phonetic": "/ˈwɔːtəmelən/" }
      ],
      "Unit 8 At the park": [
        { "word": "push", "translation": "推动（人或物）", "phonetic": "/pʊʃ/" },
        { "word": "don't", "translation": "不，不要", "phonetic": "/dəʊnt/" },
        { "word": "queue up", "translation": "排队等候", "phonetic": "/kjuː ʌp/" },
        { "word": "talk", "translation": "说话；讲话", "phonetic": "/tɔːk/" },
        { "word": "How about", "translation": "……怎么样？", "phonetic": "/haʊ əˈbaʊt/" },
        { "word": "Sorry", "translation": "对不起", "phonetic": "/ˈsɒri/" },
        { "word": "shout", "translation": "大声说；喊叫", "phonetic": "/ʃaʊt/" }
      ]
    }
  },
  "G3_S2": {
    "name": "三年级下册",
    "units": {
      "Unit 1 In class": [
        { "word": "please", "translation": "请", "phonetic": "/pliːz/" },
        { "word": "open", "translation": "打开", "phonetic": "/ˈəʊpən/" },
        { "word": "close", "translation": "关上", "phonetic": "/kləʊz/" },
        { "word": "blackboard", "translation": "黑板", "phonetic": "/ˈblækbɔːd/" }
      ]
    }
  },
  "G4_S1": {
    "name": "四年级上册",
    "units": {
      "Unit 1 I like dogs": [
        { "word": "dog", "translation": "狗", "phonetic": "/dɒɡ/" },
        { "word": "cat", "translation": "猫", "phonetic": "/kæt/" },
        { "word": "panda", "translation": "熊猫", "phonetic": "/ˈpændə/" },
        { "word": "tiger", "translation": "老虎", "phonetic": "/ˈtaɪɡə/" },
        { "word": "monkey", "translation": "猴子", "phonetic": "/ˈmʌŋki/" },
        { "word": "lion", "translation": "狮子", "phonetic": "/ˈlaɪən/" }
      ]
    }
  },
  "G4_S2": {
    "name": "四年级下册",
    "units": {
      "Unit 1 Our school subjects": [
        { "word": "school", "translation": "学校", "phonetic": "/skuːl/" },
        { "word": "subject", "translation": "科目", "phonetic": "/ˈsʌbdʒɪkt/" },
        { "word": "English", "translation": "英语", "phonetic": "/ˈɪŋɡlɪʃ/" },
        { "word": "Chinese", "translation": "语文", "phonetic": "/ˌtʃaɪˈniːz/" },
        { "word": "Maths", "translation": "数学", "phonetic": "/mæθs/" }
      ]
    }
  },
  "G5_S1": {
    "name": "五年级上册",
    "units": {
      "Unit 1 Goldilocks in the forest": [
        { "word": "forest", "translation": "森林", "phonetic": "/ˈfɒrɪst/" },
        { "word": "house", "translation": "房子", "phonetic": "/haʊs/" },
        { "word": "soup", "translation": "汤", "phonetic": "/suːp/" },
        { "word": "hard", "translation": "硬的", "phonetic": "/hɑːd/" },
        { "word": "soft", "translation": "软的", "phonetic": "/sɒft/" }
      ]
    }
  },
  "G5_S2": {
    "name": "五年级下册",
    "units": {
      "Unit 1 Cinderella": [
        { "word": "prince", "translation": "王子", "phonetic": "/prɪns/" },
        { "word": "fairy", "translation": "仙女", "phonetic": "/ˈfeəri/" },
        { "word": "mushroom", "translation": "蘑菇", "phonetic": "/ˈmʌʃrʊm/" },
        { "word": "fit", "translation": "合适", "phonetic": "/fɪt/" }
      ]
    }
  },
  "G6_S1": {
    "name": "六年级上册",
    "units": {
      "Unit 1 The king's new clothes": [
        { "word": "try one's best", "translation": "尽某人最大的努力", "phonetic": "/traɪ wʌnz best/" },
        { "word": "act", "translation": "扮演，演出", "phonetic": "/ækt/" },
        { "word": "play", "translation": "戏剧；扮演", "phonetic": "/pleɪ/" },
        { "word": "poster", "translation": "海报，招贴画", "phonetic": "/ˈpəʊstə/" },
        { "word": "last", "translation": "上一个的，最近的", "phonetic": "/lɑːst/" },
        { "word": "take part", "translation": "参与", "phonetic": "/teɪk pɑːt/" },
        { "word": "practise", "translation": "练习，训练", "phonetic": "/ˈpræktɪs/" },
        { "word": "afraid", "translation": "害怕，畏惧", "phonetic": "/əˈfreɪd/" },
        { "word": "calm down", "translation": "平静，安静", "phonetic": "/kɑːm daʊn/" },
        { "word": "begin", "translation": "开始", "phonetic": "/bɪˈɡɪn/" },
        { "word": "forget", "translation": "忘记，遗忘", "phonetic": "/fəˈɡet/" },
        { "word": "the words", "translation": "歌词", "phonetic": "/ðə wɜːdz/" },
        { "word": "remember", "translation": "记起；记住", "phonetic": "/rɪˈmembə/" },
        { "word": "finish", "translation": "完成，做好", "phonetic": "/ˈfɪnɪʃ/" },
        { "word": "keep", "translation": "继续，重复", "phonetic": "/kiːp/" },
        { "word": "ago", "translation": "以前", "phonetic": "/əˈɡəʊ/" },
        { "word": "movement", "translation": "运动，动作", "phonetic": "/ˈmuːvmənt/" },
        { "word": "skill", "translation": "技能，技术", "phonetic": "/skɪl/" },
        { "word": "in front of", "translation": "在……前面", "phonetic": "/ɪn frʌnt ɒv/" },
        { "word": "ready", "translation": "准备好的", "phonetic": "/ˈredi/" },
        { "word": "long ago", "translation": "很久以前", "phonetic": "/lɒŋ əˈɡəʊ/" },
        { "word": "snail", "translation": "蜗牛", "phonetic": "/sneɪl/" },
        { "word": "top", "translation": "顶端，顶部", "phonetic": "/tɒp/" }
      ],
      "Unit 2 What a day!": [
        { "word": "honesty", "translation": "诚实", "phonetic": "/ˈɒnɪsti/" },
        { "word": "storybook", "translation": "儿童故事书", "phonetic": "/ˈstɔːribʊk/" },
        { "word": "lie", "translation": "谎言，说话", "phonetic": "/laɪ/" },
        { "word": "break", "translation": "弄坏，损坏", "phonetic": "/breɪk/" },
        { "word": "yesterday", "translation": "在昨天；昨天", "phonetic": "/ˈjestədeɪ/" },
        { "word": "repair", "translation": "修理，修补", "phonetic": "/rɪˈpeə/" },
        { "word": "say", "translation": "说，讲", "phonetic": "/seɪ/" },
        { "word": "poor", "translation": "贫穷的", "phonetic": "/pɔː/" },
        { "word": "man", "translation": "男人", "phonetic": "/mæn/" },
        { "word": "old", "translation": "老的，年纪大的", "phonetic": "/əʊld/" },
        { "word": "ox", "translation": "牛", "phonetic": "/ɒks/" },
        { "word": "away from home", "translation": "离开家", "phonetic": "/əˈweɪ frɒm həʊm/" },
        { "word": "nephew", "translation": "侄子，外甥", "phonetic": "/ˈnefjuː/" },
        { "word": "sell", "translation": "卖，出售", "phonetic": "/sel/" },
        { "word": "buyer", "translation": "买主，买方", "phonetic": "/ˈbaɪə/" },
        { "word": "get back", "translation": "重新获得", "phonetic": "/ɡet bæk/" },
        { "word": "name", "translation": "名声，名誉", "phonetic": "/neɪm/" },
        { "word": "watch", "translation": "照看，看护", "phonetic": "/wɒtʃ/" },
        { "word": "wolf", "translation": "狼", "phonetic": "/wʊlf/" },
        { "word": "answer", "translation": "答复，回答", "phonetic": "/ˈɑːnsə/" },
        { "word": "cry", "translation": "哭，哭泣", "phonetic": "/kraɪ/" }
      ],
      "Unit 3 Holiday fun": [
        { "word": "hero", "translation": "崇拜的对象", "phonetic": "/ˈhɪərəʊ/" },
        { "word": "famous", "translation": "著名的，出名的", "phonetic": "/ˈfeɪməs/" },
        { "word": "scientist", "translation": "科学家", "phonetic": "/ˈsaɪəntɪst/" },
        { "word": "inventor", "translation": "发明家，发明者", "phonetic": "/ɪnˈventə/" },
        { "word": "hybrid rice", "translation": "杂交水稻", "phonetic": "/ˈhaɪbrɪd raɪs/" },
        { "word": "dream", "translation": "梦想，愿望", "phonetic": "/driːm/" },
        { "word": "cool", "translation": "凉快，凉爽", "phonetic": "/kuːl/" },
        { "word": "all over the world", "translation": "世界各地，全世界", "phonetic": "/ɔːl ˈəʊvə ðə wɜːld/" },
        { "word": "be born", "translation": "出生，诞生", "phonetic": "/bi bɔːn/" },
        { "word": "pass away", "translation": "去世", "phonetic": "/pɑːs əˈweɪ/" },
        { "word": "study", "translation": "研究，调查", "phonetic": "/ˈstʌdi/" },
        { "word": "call", "translation": "称呼，把……叫作", "phonetic": "/kɔːl/" },
        { "word": "come true", "translation": "实现，成为现实", "phonetic": "/kʌm truː/" },
        { "word": "farming", "translation": "务农", "phonetic": "/ˈfɑːmɪŋ/" },
        { "word": "age", "translation": "年龄，年纪", "phonetic": "/eɪdʒ/" },
        { "word": "grow up", "translation": "长大，成长", "phonetic": "/ɡrəʊ ʌp/" },
        { "word": "work on", "translation": "从事，致力于", "phonetic": "/wɜːk ɒn/" },
        { "word": "difficult", "translation": "困难的", "phonetic": "/ˈdɪfɪkəlt/" },
        { "word": "develop", "translation": "开发，研制", "phonetic": "/dɪˈveləp/" },
        { "word": "bamboo", "translation": "竹，竹子", "phonetic": "/bæmˈbuː/" },
        { "word": "silk", "translation": "丝绸", "phonetic": "/sɪlk/" },
        { "word": "dear", "translation": "昂贵的，价格高的", "phonetic": "/dɪə/" },
        { "word": "paper", "translation": "纸，纸张", "phonetic": "/ˈpeɪpə/" },
        { "word": "at first", "translation": "起初，起先", "phonetic": "/æt fɜːst/" }
      ],
      "Unit 4 Then and now": [
        { "word": "ninth", "translation": "第九", "phonetic": "/naɪnθ/" },
        { "word": "lunar month", "translation": "农历，阴历", "phonetic": "/ˈluːnə mʌnθ/" },
        { "word": "show", "translation": "表示", "phonetic": "/ʃəʊ/" },
        { "word": "love", "translation": "爱，关爱", "phonetic": "/lʌv/" },
        { "word": "smartphone", "translation": "智能手机", "phonetic": "/ˈsmɑːtfəʊn/" },
        { "word": "wish", "translation": "祝，祝愿", "phonetic": "/wɪʃ/" },
        { "word": "a long life", "translation": "长寿", "phonetic": "/ə lɒŋ laɪf/" },
        { "word": "blow out", "translation": "吹灭，熄灭", "phonetic": "/bləʊ aʊt/" },
        { "word": "candle", "translation": "蜡烛", "phonetic": "/ˈkændl/" },
        { "word": "photo", "translation": "照片", "phonetic": "/ˈfəʊtəʊ/" },
        { "word": "time flies", "translation": "时光飞逝，光阴似箭", "phonetic": "/taɪm flaɪz/" },
        { "word": "kid", "translation": "小孩", "phonetic": "/kɪd/" },
        { "word": "March", "translation": "三月", "phonetic": "/mɑːtʃ/" },
        { "word": "April", "translation": "四月", "phonetic": "/ˈeɪprəl/" },
        { "word": "July", "translation": "七月", "phonetic": "/dʒuˈlaɪ/" },
        { "word": "August", "translation": "八月", "phonetic": "/ˈɔːɡəst/" },
        { "word": "November", "translation": "十一月", "phonetic": "/nəʊˈvembə/" }
      ],
      "Unit 5 Signs": [
        { "word": "rubbish bin", "translation": "垃圾桶", "phonetic": "/ˈrʌbɪʃ bɪn/" },
        { "word": "ground", "translation": "地，地面", "phonetic": "/ɡraʊnd/" },
        { "word": "skin", "translation": "（某些水果和蔬菜的）皮，壳", "phonetic": "/skɪn/" },
        { "word": "pick up", "translation": "捡起", "phonetic": "/pɪk ʌp/" },
        { "word": "throw", "translation": "抛，扔", "phonetic": "/θrəʊ/" },
        { "word": "will", "translation": "将，将要", "phonetic": "/wɪl/" },
        { "word": "fall", "translation": "突然倒下，跌倒", "phonetic": "/fɔːl/" },
        { "word": "go plogging", "translation": "去拾荒慢跑", "phonetic": "/ɡəʊ ˈplɒɡɪŋ/" },
        { "word": "jogging", "translation": "慢跑锻炼", "phonetic": "/ˈdʒɒɡɪŋ/" },
        { "word": "at the same time", "translation": "同时，一起", "phonetic": "/æt ðə seɪm taɪm/" },
        { "word": "gate", "translation": "大门", "phonetic": "/ɡeɪt/" },
        { "word": "on time", "translation": "准时，按时", "phonetic": "/ɒn taɪm/" },
        { "word": "cleaning", "translation": "打扫，清洁", "phonetic": "/ˈkliːnɪŋ/" },
        { "word": "group", "translation": "组，群", "phonetic": "/ɡruːp/" },
        { "word": "start", "translation": "发起", "phonetic": "/stɑːt/" }
      ],
      "Unit 6 Keep our city clean": [
        { "word": "go green", "translation": "践行绿色环保的生活方式", "phonetic": "/ɡəʊ ɡriːn/" },
        { "word": "turn off", "translation": "关掉", "phonetic": "/tɜːn ɒf/" },
        { "word": "tap", "translation": "水龙头", "phonetic": "/tæp/" },
        { "word": "light", "translation": "电灯", "phonetic": "/laɪt/" },
        { "word": "both", "translation": "两个，两个都", "phonetic": "/bəʊθ/" },
        { "word": "side", "translation": "一面", "phonetic": "/saɪd/" },
        { "word": "eat up", "translation": "吃完，吃光", "phonetic": "/iːt ʌp/" },
        { "word": "project", "translation": "项目", "phonetic": "/ˈprɒdʒekt/" },
        { "word": "the Earth", "translation": "地球", "phonetic": "/ði ɜːθ/" },
        { "word": "colour", "translation": "为……着色", "phonetic": "/ˈkʌlə/" },
        { "word": "hour", "translation": "小时", "phonetic": "/ˈaʊə/" },
        { "word": "save", "translation": "节省，节约", "phonetic": "/seɪv/" },
        { "word": "electricity", "translation": "电，电能", "phonetic": "/ɪˌlekˈtrɪsəti/" },
        { "word": "last", "translation": "持续", "phonetic": "/lɑːst/" },
        { "word": "brush", "translation": "刷净", "phonetic": "/brʌʃ/" },
        { "word": "tooth", "translation": "牙，齿", "phonetic": "/tuːθ/" },
        { "word": "waste", "translation": "浪费", "phonetic": "/weɪst/" },
        { "word": "vegetable", "translation": "蔬菜", "phonetic": "/ˈvedʒtəbl/" },
        { "word": "plastic", "translation": "塑料的", "phonetic": "/ˈplæstɪk/" }
      ],
      "Unit 7 Protect our Earth": [
        { "word": "glass", "translation": "玻璃", "phonetic": "/ɡlɑːs/" },
        { "word": "bottle", "translation": "瓶子", "phonetic": "/ˈbɒtl/" },
        { "word": "cardboard", "translation": "硬纸板，卡纸板", "phonetic": "/ˈkɑːdbɔːd/" },
        { "word": "box", "translation": "盒，箱", "phonetic": "/bɒks/" },
        { "word": "be made of", "translation": "用……做的", "phonetic": "/bi meɪd ɒv/" },
        { "word": "button", "translation": "纽扣，扣子", "phonetic": "/ˈbʌtn/" },
        { "word": "happen", "translation": "发生，出现", "phonetic": "/ˈhæpən/" },
        { "word": "hat", "translation": "帽子", "phonetic": "/hæt/" },
        { "word": "do with", "translation": "处理", "phonetic": "/du wɪð/" },
        { "word": "throw away", "translation": "扔掉，丢弃", "phonetic": "/θrəʊ əˈweɪ/" },
        { "word": "recycling bin", "translation": "废物回收箱", "phonetic": "/ˌriːˈsaɪklɪŋ bɪn/" },
        { "word": "truck", "translation": "卡车，货运汽车", "phonetic": "/trʌk/" },
        { "word": "make friends with", "translation": "和……交朋友", "phonetic": "/meɪk frendz wɪð/" }
      ],
      "Unit 8 Chinese New Year": [
        { "word": "high-speed train", "translation": "高速列车", "phonetic": "/haɪ spiːd treɪn/" },
        { "word": "e-book", "translation": "电子书", "phonetic": "/iː bʊk/" },
        { "word": "meeting", "translation": "会议，集会", "phonetic": "/ˈmiːtɪŋ/" },
        { "word": "shop", "translation": "商店，店铺", "phonetic": "/ʃɒp/" },
        { "word": "smart", "translation": "智能的", "phonetic": "/smɑːt/" },
        { "word": "win", "translation": "获胜，赢", "phonetic": "/wɪn/" },
        { "word": "surprise", "translation": "意想不到的事，令人惊奇的事", "phonetic": "/səˈpraɪz/" },
        { "word": "wrong", "translation": "有问题的", "phonetic": "/rɒŋ/" },
        { "word": "change", "translation": "变化；改变", "phonetic": "/tʃeɪndʒ/" },
        { "word": "life", "translation": "生活", "phonetic": "/laɪf/" },
        { "word": "in the past", "translation": "在过去", "phonetic": "/ɪn ðə pɑːst/" },
        { "word": "travel", "translation": "行进", "phonetic": "/ˈtrævl/" },
        { "word": "office", "translation": "办公室，办公楼", "phonetic": "/ˈɒfɪs/" },
        { "word": "these days", "translation": "如今，而今", "phonetic": "/ðiːz deɪz/" },
        { "word": "work from home", "translation": "居家办公", "phonetic": "/wɜːk frɒm həʊm/" },
        { "word": "pay", "translation": "付钱，支付", "phonetic": "/peɪ/" },
        { "word": "cash", "translation": "现金", "phonetic": "/kæʃ/" },
        { "word": "helper", "translation": "帮手，助手", "phonetic": "/ˈhelpə/" },
        { "word": "fifty", "translation": "五十", "phonetic": "/ˈfɪfti/" },
        { "word": "email", "translation": "电子邮件", "phonetic": "/ˈiːmeɪl/" },
        { "word": "technology", "translation": "科技", "phonetic": "/tekˈnɒlədʒi/" }
      ]
    }
  },
  "G6_S2": {
    "name": "六年级下册",
    "units": {
      "Unit 1 The lion and the mouse": [
        { "word": "large", "translation": "巨大的", "phonetic": "/lɑːdʒ/" },
        { "word": "strong", "translation": "强壮的", "phonetic": "/strong/" },
        { "word": "sharp", "translation": "锋利的", "phonetic": "/ʃɑːp/" },
        { "word": "weak", "translation": "虚弱的", "phonetic": "/wiːk/" },
        { "word": "tiny", "translation": "微小的", "phonetic": "/ˈtaɪni/" }
      ]
    }
  }
};

const TEXTS_DATA = {
  "G3_S1": {
    "Unit 1 Where's my book?": {
      title: "Where's my book?",
      sentences: [
        { en: "Where's my book?", cn: "我的书在哪里？" },
        { en: "Is it on the sofa?", cn: "它在沙发上吗？" },
        { en: "No, it isn't.", cn: "不，它不在。" },
        { en: "Is it under the vase?", cn: "它在花瓶下面吗？" },
        { en: "No, it isn't.", cn: "不，它不在。" },
        { en: "Look! It's behind the basket.", cn: "看！它在篮子后面。" },
        { en: "How nice!", cn: "太好了！" },
        { en: "Miaow!", cn: "喵！" }
      ]
    },
    "Unit 2 What's for dinner?": {
      title: "What's for dinner?",
      sentences: [
        { en: "Dad: Dinner is ready!", cn: "爸爸：晚饭准备好了！" },
        { en: "Tim: What's for dinner, Dad?", cn: "蒂姆：爸爸，晚饭吃什么？" },
        { en: "Dad: Rice, broccoli, fish and soup.", cn: "爸爸：米饭、西兰花、鱼和汤。" },
        { en: "Tim: Great! I like fish. Mmm, yummy!", cn: "蒂姆：太好了！我喜欢鱼。嗯，真好吃！" },
        { en: "Helen: Do you want some meat and noodles?", cn: "海伦：你想吃点肉和面条吗？" },
        { en: "Tim: No, thanks.", cn: "蒂姆：不要了，谢谢。" }
      ]
    },
    "Unit 3 My school subjects": {
      title: "My school subjects",
      sentences: [
        { en: "Tim: What classes do you have today?", cn: "蒂姆：今天你有什么课？" },
        { en: "Helen: We have Chinese, English and Maths.", cn: "海伦：我们有语文课、英语课和数学课。" },
        { en: "Tim: I have PE and Art today.", cn: "蒂姆：今天我有体育课和美术课。" },
        { en: "Helen: PE is fun.", cn: "海伦：体育课很有趣。" },
        { en: "Tim: Yes, and Maths is easy.", cn: "蒂姆：是的，而且数学很简单。" },
        { en: "Helen: I have Music today too.", cn: "海伦：今天我也有音乐课。" }
      ]
    },
    "Unit 4 My body parts": {
      title: "My body parts",
      sentences: [
        { en: "Look at my robot.", cn: "看我的机器人。" },
        { en: "It has big eyes and a small nose.", cn: "它有大大的眼睛和一只小小的鼻子。" },
        { en: "Look! This is its mouth.", cn: "看！这是它的嘴巴。" },
        { en: "It has no hair, but it has two big ears.", cn: "它没有头发，但它有两只大耳朵。" },
        { en: "What a funny face!", cn: "多么有趣的一张脸啊！" }
      ]
    },
    "Unit 5 Can you ride a bike?": {
      title: "Can you ride a bike?",
      sentences: [
        { en: "Helen: Can you ride a bike, Tim?", cn: "海伦：蒂姆，你会骑自行车吗？" },
        { en: "Tim: Yes, I can. I can skate too.", cn: "蒂姆：是的，我会。我也会滑冰。" },
        { en: "Helen: Can you swim?", cn: "海伦：你会游泳吗？" },
        { en: "Tim: No, I can't. I want to play in the pool.", cn: "蒂姆：不，我不会。我想在泳池里玩耍。" },
        { en: "Helen: Let's skip together.", cn: "海伦：让我们一起跳绳吧。" }
      ]
    },
    "Unit 6 Let's go shopping": {
      title: "Let's go shopping",
      sentences: [
        { en: "Helen: Let's go shopping, Mum.", cn: "海伦：妈妈，我们去购物吧。" },
        { en: "Mum: OK. Look at this beautiful dress.", cn: "妈妈：好的。看这条漂亮的连衣裙。" },
        { en: "Helen: Hooray! I like this skirt and hat.", cn: "海伦：好极了！我喜欢这条短裙和帽子。" },
        { en: "Mum: Do you want this T-shirt or blouse?", cn: "妈妈：你想要这件T恤衫还是衬衫？" },
        { en: "Helen: I want the T-shirt. What about shorts for Tim?", cn: "海伦：我想要T恤衫。给蒂姆买条短裤怎么样？" },
        { en: "Mum: Yes, let's buy them.", cn: "妈妈：好的，我们买吧。" }
      ]
    },
    "Unit 7 Summer fun": {
      title: "Summer fun",
      sentences: [
        { en: "It is summer now. The weather is hot.", cn: "现在是夏天。天气很热。" },
        { en: "We can go to the beach and swim in the pool.", cn: "我们可以去海滩，在泳池里游泳。" },
        { en: "Let's eat some ice cream and watermelon.", cn: "让我们吃些冰淇淋和西瓜。" },
        { en: "I like drinking cold orange juice.", cn: "我喜欢喝冰凉的橙汁。" },
        { en: "Summer fun is great!", cn: "夏天的乐趣太棒了！" }
      ]
    },
    "Unit 8 At the park": {
      title: "At the park",
      sentences: [
        { en: "Teacher: We are at the park now.", cn: "老师：我们现在在公园里。" },
        { en: "Tim: Please don't push! We should queue up.", cn: "蒂姆：请不要推！我们应该排队。" },
        { en: "Helen: Don't talk or shout here.", cn: "海伦：不要在这里说话或大喊大叫。" },
        { en: "Tim: How about a game?", cn: "蒂姆：玩个游戏怎么样？" },
        { en: "Teacher: Sorry, you can't run on the grass.", cn: "老师：对不起，你们不能在草地上奔跑。" }
      ]
    }
  },
  "G6_S1": {
    "Unit 1 The king's new clothes": {
      title: "The king's new clothes",
      sentences: [
        { en: "Long long ago, there was a king.", cn: "很久很久以前，有一位国王。" },
        { en: "He liked new clothes.", cn: "他喜欢新衣服。" },
        { en: "One day, two men visited the king.", cn: "一天，两个男人拜访了国王。" },
        { en: "“My king, we can make new clothes for you.”", cn: "“我的国王，我们可以为您制作新衣服。”" },
        { en: "The king was happy.", cn: "国王很高兴。" },
        { en: "The two men showed the king his new clothes.", cn: "这两个男人给国王展示了他的新衣服。" },
        { en: "“My king, please try on these magic clothes.”", cn: "“我的国王，请试穿这些神奇的衣服。”" },
        { en: "“Clever people can see them. Foolish people can't see them.”", cn: "“聪明的人能看见它们。愚蠢的人看不见它们。”" },
        { en: "The king walked through the city in his new clothes.", cn: "国王穿着他的新衣服走过城市。" },
        { en: "There were a lot of people in the street.", cn: "街上有很多人。" },
        { en: "They looked at the king and shouted, “What beautiful clothes!”", cn: "他们看着国王并大喊：“多么漂亮的衣服啊！”" },
        { en: "A little boy pointed at the king and laughed, “Ha! Ha! The king isn't wearing any clothes!”", cn: "一个小男孩指着国王并嘲笑道：“哈哈！国王没有穿任何衣服！”" }
      ]
    },
    "Unit 2 What a day!": {
      title: "What a day!",
      sentences: [
        { en: "Sunday, 20th September", cn: "9月20日，星期日" },
        { en: "It was sunny in the morning.", cn: "早上天气晴朗。" },
        { en: "Su Hai, Mike, Liu Tao and I went to the park by bike.", cn: "苏海、迈克、刘涛和我骑自行车去了公园。" },
        { en: "There was a parrot show in the park.", cn: "公园里有一场鹦鹉表演。" },
        { en: "We saw some interesting parrots.", cn: "我们看了一些有趣的鹦鹉。" },
        { en: "Then, the weather became windy and cloudy.", cn: "然后，天气变得有风且多云。" },
        { en: "We flew kites high in the sky.", cn: "我们把风筝放得高高的。" },
        { en: "It was time for lunch.", cn: "该吃午饭了。" },
        { en: "We brought some dumplings, some bread and honey and some drinks.", cn: "我们带了一些饺子、一些面包和蜂蜜，以及一些饮料。" },
        { en: "We saw some ants on the bread and honey.", cn: "我们在面包和蜂蜜上看到了一些蚂蚁。" },
        { en: "There were some bees too.", cn: "也有一些蜜蜂。" },
        { en: "We could not eat our lunch!", cn: "我们没能吃成午饭！" },
        { en: "In the afternoon, there were black clouds in the sky.", cn: "下午，天空中有乌云。" },
        { en: "It rained.", cn: "下雨了。" },
        { en: "We were hungry and wet.", cn: "我们又饿又湿。" },
        { en: "What a day!", cn: "多么糟糕的一天啊！" }
      ]
    },
    "Unit 3 Holiday fun": {
      title: "Holiday fun",
      sentences: [
        { en: "Mike: Hi, Liu Tao. Did you have a good time last holiday?", cn: "迈克：嗨，刘涛。上个假期你玩得开心吗？" },
        { en: "Liu Tao: Yes, I did. I went to the Bund with my family. It was fun.", cn: "刘涛：是的，我玩得很开心。我和我的家人去了外滩。很有趣。" },
        { en: "Mike: What did you do there?", cn: "迈克：你在那里做了什么？" },
        { en: "Liu Tao: We took many pictures.", cn: "刘涛：我们拍了许多照片。" },
        { en: "Mike: Hello, Su Hai. Did you go anywhere interesting?", cn: "迈克：你好，苏海。你去什么有趣的地方了吗？" },
        { en: "Su Hai: Yes, I went to Beijing. I visited the Great Wall.", cn: "苏海：是的，我去了北京。我游览了长城。" },
        { en: "Mike: Did you go with your parents?", cn: "迈克：你是和你的父母一起去的吗？" },
        { en: "Su Hai: No, I went with my cousin. We saw a lot of interesting things there.", cn: "苏海：没有，我是和我的表哥/表姐一起去的。我们在那里看到了很多有趣的东西。" },
        { en: "Mike: What about you, Wang Bing? Where did you go?", cn: "迈克：你呢，王兵？你去哪儿了？" },
        { en: "Wang Bing: I went to a farm.", cn: "王兵：我去了农场。" },
        { en: "Mike: Did you pick any fruit?", cn: "迈克：你摘水果了吗？" },
        { en: "Wang Bing: Yes, I did. I picked some apples and oranges. They were very sweet.", cn: "王兵：是的，我摘了。我摘了一些苹果和橙子。它们非常甜。" },
        { en: "Mike: How about you, Helen?", cn: "迈克：你呢，海伦？" },
        { en: "Helen: I didn't go anywhere. I stayed at home and read books. I learned a lot.", cn: "海伦：我哪儿也没去。我待在家里看书。我学到了很多东西。" },
        { en: "Mike: That sounds like a quiet holiday.", cn: "迈克：那听起来像是一个安静的假期。" }
      ]
    },
    "Unit 4 Then and now": {
      title: "Then and now",
      sentences: [
        { en: "Six years ago, Mike could read and draw, but he could not write. Now he can do many things.", cn: "六年前，迈克会读书和画画，但他不会写字。现在他能做很多事情。" },
        { en: "Twenty years ago, Mr Brown wrote letters to his friends.", cn: "二十年前，布朗先生给他的朋友们写信。" },
        { en: "He used the telephone at home and in the office to call people.", cn: "他在家里和办公室使用电话给人们打电话。" },
        { en: "Now he has a mobile phone and he can call people anywhere. He also writes emails.", cn: "现在他有一部手机，他可以随时随地给人们打电话。他还写电子邮件。" },
        { en: "Thirty years ago, Mike's grandpa listened to the radio and read newspapers for news.", cn: "三十年前，迈克的爷爷通过听广播和读报纸来获取新闻。" },
        { en: "Now he can read and watch news on the Internet. He reads e-books too.", cn: "现在他可以在网上阅读和观看新闻。他也阅读电子书。" },
        { en: "Twenty years ago, Mrs Brown made friends at school. She bought things from shops.", cn: "二十年前，布朗夫人在学校里交朋友。她从商店里买东西。" },
        { en: "Now she has e-friends from all over the world. She does shopping on the Internet too.", cn: "现在她有来自世界各地的网友。她也在网上购物。" }
      ]
    },
    "Unit 5 Signs": {
      title: "Signs",
      sentences: [
        { en: "Mike, Helen and Tim are at a shopping centre.", cn: "迈克、海伦和蒂姆在一个购物中心。" },
        { en: "Mike: Be careful, Tim!", cn: "迈克：当心，蒂姆！" },
        { en: "Helen: Can you see the sign?", cn: "海伦：你能看见那个标志吗？" },
        { en: "Tim: What does it mean?", cn: "蒂姆：它是什么意思？" },
        { en: "Helen: It means the floor is wet.", cn: "海伦：它的意思是地面是湿的。" },
        { en: "Then, they see a juice shop.", cn: "然后，他们看到了一家果汁店。" },
        { en: "Helen: Do you want some juice?", cn: "海伦：你们想喝点果汁吗？" },
        { en: "Mike & Tim: Yes, please.", cn: "迈克和蒂姆：是的，谢谢。" },
        { en: "Tim: Here's a sign. What does it mean, Mike?", cn: "蒂姆：这儿有一个标志。迈克，它是什么意思？" },
        { en: "Mike: It means you can't litter here. No littering.", cn: "迈克：它的意思是你不可以在这里扔垃圾。禁止扔垃圾。" },
        { en: "There is a bookshop. Helen wants to go in.", cn: "有一家书店。海伦想要进去。" },
        { en: "Mike: You can't take your juice into the shop, Helen.", cn: "迈克：你不能把你的果汁带进店里，海伦。" },
        { en: "Tim: Can you see that sign? It means you can't eat or drink there.", cn: "蒂姆：你能看见那个标志吗？它的意思是你不可以在那里吃东西或喝饮料。" },
        { en: "Helen: I'm sorry.", cn: "海伦：对不起。" },
        { en: "Now they are eating some noodles in a restaurant.", cn: "现在他们正在一家餐馆里吃面条。" },
        { en: "Helen: Is someone smoking? I can smell it.", cn: "海伦：有人在吸烟吗？我闻到味道了。" },
        { en: "Tim: Please don't smoke here. Can you see that sign? It means you can't smoke here.", cn: "蒂姆：请不要在这里吸烟。你能看见那个标志吗？它的意思是你不可以在这里吸烟。" },
        { en: "Man: OK. Sorry!", cn: "男士：好的。对不起！" }
      ]
    },
    "Unit 6 Keep our city clean": {
      title: "Keep our city clean",
      sentences: [
        { en: "Miss Li: Look at these pictures of our city. Is our city clean?", cn: "李老师：看这些我们城市的图片。我们的城市干净吗？" },
        { en: "Students: No, it isn't.", cn: "学生们：不，它不干净。" },
        { en: "Miss Li: What makes our city dirty?", cn: "李老师：什么使我们的城市变脏的？" },
        { en: "Su Hai: Smoke from cars makes the air dirty.", cn: "苏海：汽车排放的废气使空气变脏。" },
        { en: "Wang Bing: Black smoke from factories makes the air dirty too.", cn: "王兵：工厂排放的黑烟也使空气变脏。" },
        { en: "Liu Tao: Rubbish makes the streets messy and dirty.", cn: "刘涛：垃圾使街道变得又乱又脏。" },
        { en: "Su Hai: The river is dirty. There's rubbish in the water and the fish are dead.", cn: "苏海：这条河很脏。水里有垃圾，鱼都死了。" },
        { en: "Miss Li: What can we do to keep our city clean?", cn: "李老师：我们可以做些什么来保持我们的城市干净？" },
        { en: "Su Hai: We can take the bus and the metro to school.", cn: "苏海：我们可以坐公交车和地铁上学。" },
        { en: "Nancy: We can walk to school too.", cn: "南希：我们也可以步行上学。" },
        { en: "Wang Bing: We can move some factories away from our city. We can put rubbish in the bin.", cn: "王兵：我们可以把一些工厂搬离我们的城市。我们可以把垃圾放进垃圾桶里。" },
        { en: "Liu Tao: We can plant more trees. They help keep the air clean.", cn: "刘涛：我们可以种植更多的树木。它们有助于保持空气干净。" },
        { en: "Miss Li: Your ideas are great. Well done, class!", cn: "李老师：你们的主意太棒了。做得好，同学们！" }
      ]
    },
    "Unit 7 Protect the Earth": {
      title: "Protect the Earth",
      sentences: [
        { en: "Save water.", cn: "节约用水。" },
        { en: "Water is useful. We drink water and use water to clean things every day.", cn: "水是有用的。我们每天喝水并用水来清洗东西。" },
        { en: "In many places, there is not much water. We should not waste water. We should reuse and save it.", cn: "在许多地方，水并不多。我们不应该浪费水。我们应该循环使用并节约它。" },
        { en: "Save energy.", cn: "节约能源。" },
        { en: "Most of our energy comes from coal and oil. There is not much coal or oil on Earth. We should save energy.", cn: "我们的大部分能源来自煤炭和石油。地球上的煤炭和石油并不多。我们应该节约能源。" },
        { en: "We should not drive so much because cars use a lot of energy.", cn: "我们不应该开那么多车，因为汽车消耗大量能源。" },
        { en: "Save trees.", cn: "保护树木。" },
        { en: "Wood comes from trees.", cn: "木头来自树木。" },
        { en: "We use wood to make tables, chairs and many other things.", cn: "我们用木头制作桌子、椅子和许多其他东西。" },
        { en: "We should not cut down too many trees because trees help keep the air clean.", cn: "我们不应该砍伐太多的树木，因为树木有助于保持空气干净。" },
        { en: "Don't use too much plastic.", cn: "不要使用太多的塑料制品。" },
        { en: "We use plastic to make bags and bottles, but too much plastic is bad for the Earth.", cn: "我们用塑料制作袋子和瓶子，但是太多的塑料对地球有害。" },
        { en: "We should not use too many plastic bags or bottles. We should use paper bags and glass bottles.", cn: "我们不应该使用太多的塑料袋或塑料瓶。我们应该使用纸袋和玻璃瓶。" }
      ]
    },
    "Unit 8 Chinese New Year": {
      title: "Chinese New Year",
      sentences: [
        { en: "Dear Su Hai,", cn: "亲爱的苏海：" },
        { en: "How are you? It’s going to be Chinese New Year next week. I’m very excited!", cn: "你好吗？下周就是春节了。我非常激动！" },
        { en: "Tomorrow, my family and I are going to buy some new clothes and food.", cn: "明天，我和我的家人打算去买一些新衣服和食物。" },
        { en: "Then, in the evening, we’re going to make some cakes and tangyuan.", cn: "然后，在晚上，我们打算做一些糕点和汤圆。" },
        { en: "On Chinese New Year’s Eve, we’re going to have dinner with my grandparents, my aunt and uncle and my cousin.", cn: "除夕夜，我们打算和我的爷爷奶奶、叔叔阿姨以及我的堂兄弟姐妹一起吃年夜饭。" },
        { en: "Then, we’re going to buy some flowers.", cn: "然后，我们打算去买一些花。" },
        { en: "On Chinese New Year’s Day, my parents are going to give me red packets.", cn: "大年初一，我的父母打算给我红包。" },
        { en: "Then, we’re going to watch a lion dance in the afternoon.", cn: "然后，我们打算在下午观看舞狮表演。" },
        { en: "On the second day of Chinese New Year, we’re going to watch fireworks in the evening.", cn: "大年初二，我们打算在晚上观看烟花表演。" },
        { en: "What are you going to do at Chinese New Year?", cn: "在春节你打算做什么？" },
        { en: "Love, Anna", cn: "爱你的，安娜" }
      ]
    }
  }
};


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
      "Unit 1 Hello!": [
        { "word": "morning", "translation": "早上", "phonetic": "/ˈmɔːnɪŋ/" },
        { "word": "afternoon", "translation": "下午", "phonetic": "/ˌɑːftəˈnuːn/" },
        { "word": "class", "translation": "同学们", "phonetic": "/klɑːs/" },
        { "word": "I", "translation": "我", "phonetic": "/aɪ/" },
        { "word": "am", "translation": "是", "phonetic": "/æm/" }
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

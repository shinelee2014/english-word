const WORDS_DATA = {
  "G1_S1": {
    "name": "一年级上册",
    "units": {
      "Unit 1 Hello": [
        {
          "word": "mum",
          "translation": "妈妈",
          "phonetic": "/mʌm/"
        },
        {
          "word": "dad",
          "translation": "爸爸",
          "phonetic": "/dæd/"
        },
        {
          "word": "Hello",
          "translation": "你好",
          "phonetic": "/həˈləʊ/"
        },
        {
          "word": "this",
          "translation": "这，这个",
          "phonetic": "/ðɪs/"
        },
        {
          "word": "I'm",
          "translation": "我是",
          "phonetic": "/aɪm/"
        },
        {
          "word": "is",
          "translation": "是",
          "phonetic": "/ɪz/"
        },
        {
          "word": "Hi",
          "translation": "你好",
          "phonetic": "/haɪ/"
        },
        {
          "word": "This is",
          "translation": "这是",
          "phonetic": "/ðɪs ɪz/"
        },
        {
          "word": "Goodbye",
          "translation": "再见",
          "phonetic": "/ˌɡʊdˈbaɪ/"
        },
        {
          "word": "Mr",
          "translation": "先生",
          "phonetic": "/ˈmɪstə/"
        }
      ],
      "Unit 2 Good morning": [
        {
          "word": "Mr Green",
          "translation": "格林先生",
          "phonetic": "/ˈmɪstə ɡriːn/"
        },
        {
          "word": "Good morning",
          "translation": "早上好",
          "phonetic": "/ɡʊd ˈmɔːnɪŋ/"
        },
        {
          "word": "Good afternoon",
          "translation": "下午好",
          "phonetic": "/ɡʊd ˌɑːftəˈnuːn/"
        },
        {
          "word": "Good evening",
          "translation": "晚上好",
          "phonetic": "/ɡʊd ˈiːvnɪŋ/"
        },
        {
          "word": "Woof",
          "translation": "汪（狗叫声）",
          "phonetic": "/wʊf/"
        }
      ],
      "Unit 3 This is my mum": [
        {
          "word": "no",
          "translation": "不，不是",
          "phonetic": "/nəʊ/"
        },
        {
          "word": "puppy",
          "translation": "小狗",
          "phonetic": "/ˈpʌpi/"
        },
        {
          "word": "Miss",
          "translation": "小姐",
          "phonetic": "/mɪs/"
        },
        {
          "word": "Miss Li",
          "translation": "李小姐，李老师",
          "phonetic": "/mɪs liː/"
        }
      ],
      "Unit 4 Good night": [
        {
          "word": "Good night",
          "translation": "晚安",
          "phonetic": "/ɡʊd naɪt/"
        },
        {
          "word": "Is this",
          "translation": "这是……吗",
          "phonetic": "/ɪz ðɪs/"
        },
        {
          "word": "morning",
          "translation": "早上，上午",
          "phonetic": "/ˈmɔːnɪŋ/"
        },
        {
          "word": "a",
          "translation": "一个",
          "phonetic": "/ə/"
        },
        {
          "word": "afternoon",
          "translation": "下午",
          "phonetic": "/ˌɑːftəˈnuːn/"
        },
        {
          "word": "teddy",
          "translation": "泰迪熊",
          "phonetic": "/ˈtedi/"
        },
        {
          "word": "evening",
          "translation": "晚上，傍晚",
          "phonetic": "/ˈiːvnɪŋ/"
        },
        {
          "word": "box",
          "translation": "盒子，箱子",
          "phonetic": "/bɒks/"
        },
        {
          "word": "night",
          "translation": "夜，夜晚",
          "phonetic": "/naɪt/"
        },
        {
          "word": "yes",
          "translation": "是，对",
          "phonetic": "/jes/"
        },
        {
          "word": "bag",
          "translation": "包，袋",
          "phonetic": "/bæɡ/"
        }
      ],
      "Unit 5 I like bananas": [
        {
          "word": "cherry",
          "translation": "樱桃",
          "phonetic": "/ˈtʃeri/"
        },
        {
          "word": "please",
          "translation": "请",
          "phonetic": "/pliːz/"
        },
        {
          "word": "banana",
          "translation": "香蕉",
          "phonetic": "/bəˈnɑːnə/"
        },
        {
          "word": "peach",
          "translation": "桃子",
          "phonetic": "/piːtʃ/"
        },
        {
          "word": "grape",
          "translation": "葡萄",
          "phonetic": "/ɡreɪp/"
        },
        {
          "word": "OK",
          "translation": "好的，行",
          "phonetic": "/ˌəʊˈkeɪ/"
        },
        {
          "word": "Thank you",
          "translation": "谢谢你",
          "phonetic": "/θæŋk juː/"
        },
        {
          "word": "Look",
          "translation": "看",
          "phonetic": "/lʊk/"
        },
        {
          "word": "Great",
          "translation": "太好了",
          "phonetic": "/ɡreɪt/"
        },
        {
          "word": "Wow",
          "translation": "哇",
          "phonetic": "/waʊ/"
        }
      ],
      "Unit 6 Look at my balloon": [
        {
          "word": "look at",
          "translation": "看",
          "phonetic": "/lʊk æt/"
        },
        {
          "word": "my",
          "translation": "我的",
          "phonetic": "/maɪ/"
        },
        {
          "word": "balloon",
          "translation": "气球",
          "phonetic": "/bəˈluːn/"
        },
        {
          "word": "pink",
          "translation": "粉色的",
          "phonetic": "/pɪŋk/"
        },
        {
          "word": "it's",
          "translation": "它是",
          "phonetic": "/ɪts/"
        },
        {
          "word": "nice",
          "translation": "好的，漂亮的",
          "phonetic": "/naɪs/"
        },
        {
          "word": "oh",
          "translation": "哦，啊",
          "phonetic": "/əʊ/"
        },
        {
          "word": "red",
          "translation": "红色的",
          "phonetic": "/red/"
        },
        {
          "word": "blue",
          "translation": "蓝色的",
          "phonetic": "/bluː/"
        },
        {
          "word": "green",
          "translation": "绿色的",
          "phonetic": "/ɡriːn/"
        }
      ],
      "Unit 7 I can sing": [
        {
          "word": "I",
          "translation": "我",
          "phonetic": "/aɪ/"
        },
        {
          "word": "can",
          "translation": "能，会",
          "phonetic": "/kæn/"
        },
        {
          "word": "dance",
          "translation": "跳舞",
          "phonetic": "/dɑːns/"
        },
        {
          "word": "robot",
          "translation": "机器人",
          "phonetic": "/ˈrəʊbɒt/"
        },
        {
          "word": "sing",
          "translation": "唱歌",
          "phonetic": "/sɪŋ/"
        },
        {
          "word": "draw",
          "translation": "画画",
          "phonetic": "/drɔː/"
        },
        {
          "word": "cook",
          "translation": "做饭",
          "phonetic": "/kʊk/"
        }
      ],
      "Unit 8 Put on your coat": [
        {
          "word": "put on",
          "translation": "穿上，戴上",
          "phonetic": "/pʊt ɒn/"
        },
        {
          "word": "your",
          "translation": "你的，你们的",
          "phonetic": "/jɔː/"
        },
        {
          "word": "coat",
          "translation": "外套",
          "phonetic": "/kəʊt/"
        },
        {
          "word": "cold",
          "translation": "冷的",
          "phonetic": "/kəʊld/"
        },
        {
          "word": "scarf",
          "translation": "围巾",
          "phonetic": "/skɑːf/"
        },
        {
          "word": "beanie",
          "translation": "小便帽",
          "phonetic": "/ˈbiːni/"
        },
        {
          "word": "sweater",
          "translation": "毛衣",
          "phonetic": "/ˈswetə/"
        }
      ]
    }
  },
  "G1_S2": {
    "name": "一年级下册",
    "units": {
      "Unit 1 In the classroom": [
        {
          "word": "ruler",
          "translation": "直尺",
          "phonetic": "/ˈruːlə/"
        },
        {
          "word": "rubber",
          "translation": "橡皮",
          "phonetic": "/ˈrʌbə/"
        },
        {
          "word": "let's",
          "translation": "让我们",
          "phonetic": "/lets/"
        },
        {
          "word": "count",
          "translation": "数数",
          "phonetic": "/kaʊnt/"
        },
        {
          "word": "Cool",
          "translation": "酷",
          "phonetic": "/kuːl/"
        },
        {
          "word": "yellow",
          "translation": "黄色的",
          "phonetic": "/ˈjeləʊ/"
        },
        {
          "word": "one",
          "translation": "一",
          "phonetic": "/wʌn/"
        },
        {
          "word": "two",
          "translation": "二",
          "phonetic": "/tuː/"
        },
        {
          "word": "three",
          "translation": "三",
          "phonetic": "/θriː/"
        },
        {
          "word": "four",
          "translation": "四",
          "phonetic": "/fɔː/"
        },
        {
          "word": "five",
          "translation": "五",
          "phonetic": "/faɪv/"
        }
      ],
      "Unit 2 In the library": [
        {
          "word": "pencil",
          "translation": "铅笔",
          "phonetic": "/ˈpensl/"
        },
        {
          "word": "book",
          "translation": "书",
          "phonetic": "/bʊk/"
        },
        {
          "word": "the",
          "translation": "这，那个",
          "phonetic": "/ðə/"
        },
        {
          "word": "sorry",
          "translation": "对不起",
          "phonetic": "/ˈsɒri/"
        },
        {
          "word": "Ouch",
          "translation": "哎哟",
          "phonetic": "/aʊtʃ/"
        }
      ],
      "Unit 3 I like carrots": [
        {
          "word": "how many",
          "translation": "几个，多少",
          "phonetic": "/haʊ ˈmeni/"
        },
        {
          "word": "like",
          "translation": "喜欢",
          "phonetic": "/laɪk/"
        },
        {
          "word": "marble",
          "translation": "玻璃球",
          "phonetic": "/ˈmɑːbl/"
        },
        {
          "word": "carrot",
          "translation": "胡萝卜",
          "phonetic": "/ˈkærət/"
        },
        {
          "word": "onion",
          "translation": "洋葱",
          "phonetic": "/ˈʌnjən/"
        },
        {
          "word": "pea",
          "translation": "豌豆",
          "phonetic": "/piː/"
        },
        {
          "word": "pepper",
          "translation": "甜椒",
          "phonetic": "/ˈpepə/"
        }
      ],
      "Unit 4 Spring": [
        {
          "word": "spring",
          "translation": "春天",
          "phonetic": "/sprɪŋ/"
        },
        {
          "word": "tree",
          "translation": "树",
          "phonetic": "/triː/"
        },
        {
          "word": "flower",
          "translation": "花",
          "phonetic": "/ˈflaʊə/"
        },
        {
          "word": "beautiful",
          "translation": "美丽的",
          "phonetic": "/ˈbjuːtɪfl/"
        },
        {
          "word": "bird",
          "translation": "鸟",
          "phonetic": "/bɜːd/"
        },
        {
          "word": "kite",
          "translation": "风筝",
          "phonetic": "/kaɪt/"
        },
        {
          "word": "colourful",
          "translation": "五彩缤纷的",
          "phonetic": "/ˈkʌləfl/"
        }
      ],
      "Unit 5 Insects": [
        {
          "word": "What's",
          "translation": "是什么",
          "phonetic": "/wɒts/"
        },
        {
          "word": "ladybird",
          "translation": "瓢虫",
          "phonetic": "/ˈleɪdibɜːd/"
        },
        {
          "word": "cute",
          "translation": "可爱的",
          "phonetic": "/kjuːt/"
        },
        {
          "word": "cicada",
          "translation": "蝉",
          "phonetic": "/sɪˈkɑːdə/"
        },
        {
          "word": "butterfly",
          "translation": "蝴蝶",
          "phonetic": "/ˈbʌtəflaɪ/"
        },
        {
          "word": "dragonfly",
          "translation": "蜻蜓",
          "phonetic": "/ˈdræɡənflaɪ/"
        }
      ],
      "Unit 6 Let's play": [
        {
          "word": "run",
          "translation": "跑",
          "phonetic": "/rʌn/"
        },
        {
          "word": "sticker",
          "translation": "贴纸",
          "phonetic": "/ˈstɪkə/"
        },
        {
          "word": "yo-yo",
          "translation": "溜溜球",
          "phonetic": "/ˈjəʊ jəʊ/"
        }
      ],
      "Unit 7 Action": [
        {
          "word": "jump",
          "translation": "跳",
          "phonetic": "/dʒʌmp/"
        },
        {
          "word": "hop",
          "translation": "单脚跳",
          "phonetic": "/hɒp/"
        },
        {
          "word": "walk",
          "translation": "走",
          "phonetic": "/wɔːk/"
        },
        {
          "word": "happy",
          "translation": "快乐的",
          "phonetic": "/ˈhæpi/"
        }
      ],
      "Unit 8 Animals on the farm": [
        {
          "word": "pig",
          "translation": "猪",
          "phonetic": "/pɪɡ/"
        },
        {
          "word": "lamb",
          "translation": "羊羔",
          "phonetic": "/læm/"
        },
        {
          "word": "duck",
          "translation": "鸭子",
          "phonetic": "/dʌk/"
        },
        {
          "word": "cow",
          "translation": "奶牛",
          "phonetic": "/kaʊ/"
        },
        {
          "word": "in",
          "translation": "在……里面",
          "phonetic": "/ɪn/"
        },
        {
          "word": "bottle",
          "translation": "瓶子",
          "phonetic": "/ˈbɒtl/"
        },
        {
          "word": "hankie",
          "translation": "手帕",
          "phonetic": "/ˈhæŋki/"
        }
      ]
    }
  },
  "G2_S1": {
    "name": "二年级上册",
    "units": {
      "Unit 1 She's my aunt": [
        {
          "word": "brown",
          "translation": "棕色的",
          "phonetic": "/braʊn/"
        },
        {
          "word": "big",
          "translation": "大的",
          "phonetic": "/bɪɡ/"
        },
        {
          "word": "she's",
          "translation": "她是",
          "phonetic": "/ʃiːz/"
        },
        {
          "word": "hamster",
          "translation": "仓鼠",
          "phonetic": "/ˈhæmstə(r)/"
        },
        {
          "word": "aunt",
          "translation": "姑妈；姨妈；伯母；婶婶；舅妈",
          "phonetic": "/ɑːnt/"
        },
        {
          "word": "too",
          "translation": "也",
          "phonetic": "/tuː/"
        },
        {
          "word": "cat",
          "translation": "猫",
          "phonetic": "/kæt/"
        },
        {
          "word": "cousin",
          "translation": "表兄弟，表姐妹；堂兄弟，堂姐妹",
          "phonetic": "/ˈkʌzn/"
        },
        {
          "word": "uncle",
          "translation": "叔叔；伯伯；舅舅；姑父；姨父",
          "phonetic": "/ˈʌŋkl/"
        },
        {
          "word": "he's",
          "translation": "他是",
          "phonetic": "/hiːz/"
        },
        {
          "word": "Mrs",
          "translation": "太太，夫人",
          "phonetic": "/ˈmɪsɪz/"
        },
        {
          "word": "short",
          "translation": "矮的",
          "phonetic": "/ʃɔːt/"
        }
      ],
      "Unit 2 I have a rabbit": [
        {
          "word": "have",
          "translation": "有",
          "phonetic": "/hæv/"
        },
        {
          "word": "rabbit",
          "translation": "兔子",
          "phonetic": "/ˈræbɪt/"
        },
        {
          "word": "white",
          "translation": "白色的",
          "phonetic": "/waɪt/"
        },
        {
          "word": "small",
          "translation": "小的",
          "phonetic": "/smɔːl/"
        },
        {
          "word": "dog",
          "translation": "狗",
          "phonetic": "/dɒɡ/"
        }
      ],
      "Unit 3 It has a short tail": [
        {
          "word": "it",
          "translation": "它",
          "phonetic": "/ɪt/"
        },
        {
          "word": "has",
          "translation": "有（第三人称单数）",
          "phonetic": "/hæz/"
        },
        {
          "word": "tall",
          "translation": "高的",
          "phonetic": "/tɔːl/"
        },
        {
          "word": "short",
          "translation": "短的",
          "phonetic": "/ʃɔːt/"
        },
        {
          "word": "tail",
          "translation": "尾巴",
          "phonetic": "/teɪl/"
        },
        {
          "word": "bear",
          "translation": "熊",
          "phonetic": "/beə(r)/"
        },
        {
          "word": "giraffe",
          "translation": "长颈鹿",
          "phonetic": "/dʒəˈrɑːf/"
        },
        {
          "word": "long",
          "translation": "长的",
          "phonetic": "/lɒŋ/"
        },
        {
          "word": "neck",
          "translation": "脖子",
          "phonetic": "/nek/"
        },
        {
          "word": "monkey",
          "translation": "猴子",
          "phonetic": "/ˈmʌŋki/"
        },
        {
          "word": "Oh no!",
          "translation": "哦，不！",
          "phonetic": "/əʊ nəʊ/"
        },
        {
          "word": "tiger",
          "translation": "老虎",
          "phonetic": "/ˈtaɪɡə(r)/"
        }
      ],
      "Unit 4 Autumn": [
        {
          "word": "autumn",
          "translation": "秋天",
          "phonetic": "/ˈɔːtəm/"
        },
        {
          "word": "cool",
          "translation": "凉的，凉爽的",
          "phonetic": "/kuːl/"
        },
        {
          "word": "these",
          "translation": "这些",
          "phonetic": "/ðiːz/"
        },
        {
          "word": "are",
          "translation": "是",
          "phonetic": "/ɑː(r)/"
        },
        {
          "word": "those",
          "translation": "那些",
          "phonetic": "/ðəʊz/"
        },
        {
          "word": "pear",
          "translation": "梨",
          "phonetic": "/peə(r)/"
        },
        {
          "word": "what",
          "translation": "什么",
          "phonetic": "/wɒt/"
        },
        {
          "word": "pumpkin",
          "translation": "南瓜",
          "phonetic": "/ˈpʌmpkɪn/"
        },
        {
          "word": "so",
          "translation": "这么，如此",
          "phonetic": "/səʊ/"
        },
        {
          "word": "orange",
          "translation": "橙子",
          "phonetic": "/ˈɒrɪndʒ/"
        },
        {
          "word": "potato",
          "translation": "马铃薯，土豆",
          "phonetic": "/pəˈteɪtəʊ/"
        },
        {
          "word": "apple",
          "translation": "苹果",
          "phonetic": "/ˈæpl/"
        }
      ],
      "Unit 5 Have some juice, please!": [
        {
          "word": "have",
          "translation": "吃；喝；有",
          "phonetic": "/hæv/"
        },
        {
          "word": "some",
          "translation": "一些",
          "phonetic": "/sʌm/"
        },
        {
          "word": "juice",
          "translation": "果汁",
          "phonetic": "/dʒuːs/"
        },
        {
          "word": "yogurt",
          "translation": "酸奶",
          "phonetic": "/ˈjɒɡət/"
        },
        {
          "word": "snack",
          "translation": "点心，小吃",
          "phonetic": "/snæk/"
        },
        {
          "word": "mmm",
          "translation": "恩（表示思考或喜欢等发出的声音）",
          "phonetic": "/m/"
        },
        {
          "word": "sandwich",
          "translation": "三明治",
          "phonetic": "/ˈsænwɪdʒ/"
        },
        {
          "word": "yummy",
          "translation": "好吃的，美味的",
          "phonetic": "/ˈjʌmi/"
        },
        {
          "word": "tart",
          "translation": "蛋挞，水果挞",
          "phonetic": "/tɑːt/"
        },
        {
          "word": "cupcake",
          "translation": "纸杯蛋糕",
          "phonetic": "/ˈkʌpkeɪk/"
        }
      ],
      "Unit 6 We like our school": [
        {
          "word": "our",
          "translation": "我们的",
          "phonetic": "/aʊə(r)/"
        },
        {
          "word": "school",
          "translation": "学校",
          "phonetic": "/skuːl/"
        },
        {
          "word": "go to school",
          "translation": "上学",
          "phonetic": "/ɡəʊ tuː skuːl/"
        },
        {
          "word": "every day",
          "translation": "每天",
          "phonetic": "/ˈevri deɪ/"
        },
        {
          "word": "read",
          "translation": "识字，读书",
          "phonetic": "/riːd/"
        },
        {
          "word": "write",
          "translation": "写字",
          "phonetic": "/raɪ/"
        },
        {
          "word": "play games",
          "translation": "做游戏",
          "phonetic": "/pleɪ ɡeɪmz/"
        },
        {
          "word": "have fun",
          "translation": "玩得开心",
          "phonetic": "/hæv fʌn/"
        },
        {
          "word": "at school",
          "translation": "在学校",
          "phonetic": "/æt skuːl/"
        }
      ],
      "Unit 7 Let's clean up!": [
        {
          "word": "How about you?",
          "translation": "你呢？",
          "phonetic": "/haʊ əˈbaʊt juː/"
        },
        {
          "word": "clean up",
          "translation": "打扫，扫除",
          "phonetic": "/kliːn ʌp/"
        },
        {
          "word": "clean",
          "translation": "使……干净",
          "phonetic": "/kliːn/"
        },
        {
          "word": "table",
          "translation": "桌子",
          "phonetic": "/ˈteɪbl/"
        },
        {
          "word": "chair",
          "translation": "椅子",
          "phonetic": "/tʃeə(r)/"
        },
        {
          "word": "desk",
          "translation": "书桌",
          "phonetic": "/desk/"
        },
        {
          "word": "door",
          "translation": "门",
          "phonetic": "/dɔː(r)/"
        },
        {
          "word": "window",
          "translation": "窗户",
          "phonetic": "/ˈwɪndəʊ/"
        },
        {
          "word": "phew",
          "translation": "唷，哦（表示热、累或宽慰）",
          "phonetic": "/fjuː/"
        }
      ],
      "Unit 8 My dad is a doctor": [
        {
          "word": "cook",
          "translation": "厨师",
          "phonetic": "/kʊk/"
        },
        {
          "word": "teacher",
          "translation": "教师，老师",
          "phonetic": "/ˈtiːtʃə(r)/"
        },
        {
          "word": "nurse",
          "translation": "护士",
          "phonetic": "/nɜːs/"
        },
        {
          "word": "farmer",
          "translation": "农民，农场主",
          "phonetic": "/ˈfɑːmə(r)/"
        },
        {
          "word": "worker",
          "translation": "工人",
          "phonetic": "/ˈwɜːkə(r)/"
        },
        {
          "word": "doctor",
          "translation": "医生",
          "phonetic": "/ˈdɒktə(r)/"
        }
      ]
    }
  },
  "G2_S2": {
    "name": "二年级下册",
    "units": {
      "Unit 1 What can you see?": [
        {
          "word": "tree",
          "translation": "树",
          "phonetic": "/triː/"
        },
        {
          "word": "flower",
          "translation": "花",
          "phonetic": "/ˈflaʊə/"
        },
        {
          "word": "bird",
          "translation": "鸟",
          "phonetic": "/bɜːd/"
        },
        {
          "word": "butterfly",
          "translation": "蝴蝶",
          "phonetic": "/ˈbʌtəflaɪ/"
        },
        {
          "word": "beautiful",
          "translation": "美丽的",
          "phonetic": "/ˈbjuːtɪfl/"
        }
      ],
      "Unit 2 I can swim": [
        {
          "word": "swim",
          "translation": "游泳",
          "phonetic": "/swɪm/"
        },
        {
          "word": "skate",
          "translation": "滑冰",
          "phonetic": "/skeɪt/"
        },
        {
          "word": "fly",
          "translation": "飞",
          "phonetic": "/flaɪ/"
        },
        {
          "word": "sport",
          "translation": "运动",
          "phonetic": "/spɔːt/"
        }
      ],
      "Unit 3 I like my school": [
        {
          "word": "school",
          "translation": "学校",
          "phonetic": "/skuːl/"
        },
        {
          "word": "classroom",
          "translation": "教室",
          "phonetic": "/ˈklɑːsruːm/"
        },
        {
          "word": "library",
          "translation": "图书馆",
          "phonetic": "/ˈlaɪbrəri/"
        },
        {
          "word": "playground",
          "translation": "操场",
          "phonetic": "/ˈpleɪɡraʊnd/"
        }
      ],
      "Unit 4 How is the weather?": [
        {
          "word": "sunny",
          "translation": "晴朗的",
          "phonetic": "/ˈsʌni/"
        },
        {
          "word": "rainy",
          "translation": "下雨的",
          "phonetic": "/ˈreɪni/"
        },
        {
          "word": "windy",
          "translation": "有风的",
          "phonetic": "/ˈwɪndi/"
        },
        {
          "word": "cloudy",
          "translation": "多云的",
          "phonetic": "/ˈklaʊdi/"
        },
        {
          "word": "snowy",
          "translation": "下雪的",
          "phonetic": "/ˈsnəʊi/"
        }
      ],
      "Unit 5 A busy day": [
        {
          "word": "morning",
          "translation": "早上",
          "phonetic": "/ˈmɔːnɪŋ/"
        },
        {
          "word": "afternoon",
          "translation": "下午",
          "phonetic": "/ˌɑːftəˈnuːn/"
        },
        {
          "word": "evening",
          "translation": "晚上",
          "phonetic": "/ˈiːvnɪŋ/"
        },
        {
          "word": "night",
          "translation": "夜晚",
          "phonetic": "/naɪt/"
        },
        {
          "word": "busy",
          "translation": "忙碌的",
          "phonetic": "/ˈbɪzi/"
        }
      ],
      "Unit 6 I like my town": [
        {
          "word": "town",
          "translation": "城镇",
          "phonetic": "/taʊn/"
        },
        {
          "word": "shop",
          "translation": "商店",
          "phonetic": "/ʃɒp/"
        },
        {
          "word": "zoo",
          "translation": "动物园",
          "phonetic": "/zuː/"
        },
        {
          "word": "street",
          "translation": "街道",
          "phonetic": "/striːt/"
        }
      ],
      "Unit 7 At the zoo": [
        {
          "word": "tiger",
          "translation": "老虎",
          "phonetic": "/ˈtaɪɡə/"
        },
        {
          "word": "lion",
          "translation": "狮子",
          "phonetic": "/ˈlaɪən/"
        },
        {
          "word": "panda",
          "translation": "熊猫",
          "phonetic": "/ˈpændə/"
        },
        {
          "word": "elephant",
          "translation": "大象",
          "phonetic": "/ˈelɪfənt/"
        },
        {
          "word": "monkey",
          "translation": "猴子",
          "phonetic": "/ˈmʌŋki/"
        }
      ],
      "Unit 8 What's the time?": [
        {
          "word": "time",
          "translation": "时间",
          "phonetic": "/tiːm/"
        },
        {
          "word": "clock",
          "translation": "钟",
          "phonetic": "/klɒk/"
        },
        {
          "word": "o'clock",
          "translation": "点钟",
          "phonetic": "/əˈklɒk/"
        }
      ]
    }
  },
  "G3_S1": {
    "name": "三年级上册",
    "units": {
      "Unit 1 Hello!": [
        {
          "word": "hello",
          "translation": "你好",
          "phonetic": "/həˈləʊ/"
        },
        {
          "word": "hi",
          "translation": "你好",
          "phonetic": "/haɪ/"
        },
        {
          "word": "Miss",
          "translation": "小姐，女士（用于对女教师的称呼）",
          "phonetic": "/mɪs/"
        },
        {
          "word": "class",
          "translation": "同学们，班级",
          "phonetic": "/klɑːs/"
        },
        {
          "word": "good",
          "translation": "好的",
          "phonetic": "/ɡʊd/"
        },
        {
          "word": "morning",
          "translation": "早上，上午",
          "phonetic": "/ˈmɔːnɪŋ/"
        },
        {
          "word": "good morning",
          "translation": "早上好",
          "phonetic": "/ˌɡʊd ˈmɔːnɪŋ/"
        },
        {
          "word": "afternoon",
          "translation": "下午",
          "phonetic": "/ˌɑːftəˈnuːn/"
        },
        {
          "word": "good afternoon",
          "translation": "下午好",
          "phonetic": "/ˌɡʊd ˌɑːftəˈnuːn/"
        },
        {
          "word": "goodbye",
          "translation": "再见",
          "phonetic": "/ˌɡʊdˈbaɪ/"
        },
        {
          "word": "bye",
          "translation": "再见",
          "phonetic": "/baɪ/"
        },
        {
          "word": "I",
          "translation": "我",
          "phonetic": "/aɪ/"
        },
        {
          "word": "am",
          "translation": "是",
          "phonetic": "/æm/"
        },
        {
          "word": "I'm",
          "translation": "我是",
          "phonetic": "/aɪm/"
        }
      ],
      "Unit 2 I'm Liu Tao": [
        {
          "word": "are",
          "translation": "是",
          "phonetic": "/ɑː(r)/"
        },
        {
          "word": "you",
          "translation": "你，你们",
          "phonetic": "/juː/"
        },
        {
          "word": "are you",
          "translation": "你是……吗",
          "phonetic": "/ɑː(r) juː/"
        },
        {
          "word": "yes",
          "translation": "是，对",
          "phonetic": "/jes/"
        },
        {
          "word": "no",
          "translation": "不，不是",
          "phonetic": "/nəʊ/"
        },
        {
          "word": "not",
          "translation": "不，没有",
          "phonetic": "/nɒt/"
        },
        {
          "word": "you're",
          "translation": "你是",
          "phonetic": "/jɔː(r)/"
        },
        {
          "word": "am not",
          "translation": "不是",
          "phonetic": "/æm nɒt/"
        },
        {
          "word": "I'm not",
          "translation": "我不是",
          "phonetic": "/aɪm nɒt/"
        }
      ],
      "Unit 3 My friends": [
        {
          "word": "my",
          "translation": "我的",
          "phonetic": "/maɪ/"
        },
        {
          "word": "friend",
          "translation": "朋友",
          "phonetic": "/frend/"
        },
        {
          "word": "he",
          "translation": "他",
          "phonetic": "/hiː/"
        },
        {
          "word": "she",
          "translation": "她",
          "phonetic": "/ʃiː/"
        },
        {
          "word": "he's",
          "translation": "他是",
          "phonetic": "/hiːz/"
        },
        {
          "word": "she's",
          "translation": "她是",
          "phonetic": "/ʃiːz/"
        },
        {
          "word": "too",
          "translation": "也",
          "phonetic": "/tuː/"
        },
        {
          "word": "this",
          "translation": "这，这个",
          "phonetic": "/ðɪs/"
        },
        {
          "word": "is",
          "translation": "是",
          "phonetic": "/ɪz/"
        },
        {
          "word": "this is",
          "translation": "这是",
          "phonetic": "/ðɪs ɪz/"
        }
      ],
      "Unit 4 My family": [
        {
          "word": "family",
          "translation": "家庭，家人",
          "phonetic": "/ˈfæməli/"
        },
        {
          "word": "father",
          "translation": "父亲，爸爸",
          "phonetic": "/ˈfɑːðə(r)/"
        },
        {
          "word": "mother",
          "translation": "母亲，妈妈",
          "phonetic": "/ˈmʌðə(r)/"
        },
        {
          "word": "brother",
          "translation": "哥哥，弟弟",
          "phonetic": "/ˈbrʌðə(r)/"
        },
        {
          "word": "sister",
          "translation": "姐姐，妹妹",
          "phonetic": "/ˈsɪstə(r)/"
        },
        {
          "word": "grandpa",
          "translation": "祖父，外祖父，爷爷，外公",
          "phonetic": "/ˈɡrænpɑː/"
        },
        {
          "word": "grandma",
          "translation": "祖母，外祖母，奶奶，外婆",
          "phonetic": "/ˈɡrænmɑː/"
        },
        {
          "word": "me",
          "translation": "我（宾格）",
          "phonetic": "/miː/"
        },
        {
          "word": "dad",
          "translation": "爸爸",
          "phonetic": "/dæd/"
        },
        {
          "word": "mum",
          "translation": "妈妈",
          "phonetic": "/mʌm/"
        }
      ],
      "Unit 5 Look at me!": [
        {
          "word": "look",
          "translation": "看，瞧",
          "phonetic": "/lʊk/"
        },
        {
          "word": "at",
          "translation": "在...处",
          "phonetic": "/æt/"
        },
        {
          "word": "look at",
          "translation": "看，瞧",
          "phonetic": "/lʊk æt/"
        },
        {
          "word": "T-shirt",
          "translation": "T恤衫",
          "phonetic": "/ˈtiː ʃɜːt/"
        },
        {
          "word": "skirt",
          "translation": "裙子",
          "phonetic": "/skɜːt/"
        },
        {
          "word": "cap",
          "translation": "帽子",
          "phonetic": "/kæp/"
        },
        {
          "word": "jacket",
          "translation": "夹克衫",
          "phonetic": "/ˈdʒækɪt/"
        },
        {
          "word": "nice",
          "translation": "好看的，好的",
          "phonetic": "/naɪs/"
        },
        {
          "word": "great",
          "translation": "太棒了，伟大的",
          "phonetic": "/ɡreɪt/"
        },
        {
          "word": "how",
          "translation": "多么，怎么样",
          "phonetic": "/haʊ/"
        },
        {
          "word": "it's",
          "translation": "它是",
          "phonetic": "/ɪts/"
        },
        {
          "word": "it is",
          "translation": "它是",
          "phonetic": "/ɪt ɪz/"
        }
      ],
      "Unit 6 Colours": [
        {
          "word": "colour",
          "translation": "颜色",
          "phonetic": "/ˈkʌlə(r)/"
        },
        {
          "word": "red",
          "translation": "红色的",
          "phonetic": "/red/"
        },
        {
          "word": "yellow",
          "translation": "黄色的",
          "phonetic": "/ˈjeləʊ/"
        },
        {
          "word": "green",
          "translation": "绿色的",
          "phonetic": "/ɡriːn/"
        },
        {
          "word": "blue",
          "translation": "蓝色的",
          "phonetic": "/bluː/"
        },
        {
          "word": "brown",
          "translation": "棕色的",
          "phonetic": "/braʊn/"
        },
        {
          "word": "white",
          "translation": "白色的",
          "phonetic": "/waɪt/"
        },
        {
          "word": "black",
          "translation": "黑色的",
          "phonetic": "/blæk/"
        },
        {
          "word": "orange",
          "translation": "橙色的",
          "phonetic": "/ˈɒrɪndʒ/"
        },
        {
          "word": "now",
          "translation": "现在",
          "phonetic": "/naʊ/"
        },
        {
          "word": "what",
          "translation": "什么",
          "phonetic": "/wɒt/"
        },
        {
          "word": "what's",
          "translation": "是什么",
          "phonetic": "/wɒts/"
        },
        {
          "word": "what colour",
          "translation": "什么颜色",
          "phonetic": "/wɒt ˈkʌlə(r)/"
        }
      ],
      "Unit 7 Would you like a pie?": [
        {
          "word": "would",
          "translation": "想要",
          "phonetic": "/wʊd/"
        },
        {
          "word": "like",
          "translation": "喜欢",
          "phonetic": "/laɪ/"
        },
        {
          "word": "would like",
          "translation": "想要",
          "phonetic": "/wʊd laɪ/"
        },
        {
          "word": "pie",
          "translation": "派，包装馅饼",
          "phonetic": "/paɪ/"
        },
        {
          "word": "cake",
          "translation": "蛋糕",
          "phonetic": "/keɪk/"
        },
        {
          "word": "sweet",
          "translation": "糖果",
          "phonetic": "/swiːt/"
        },
        {
          "word": "ice cream",
          "translation": "冰淇淋",
          "phonetic": "/ˌaɪs ˈkriːm/"
        },
        {
          "word": "what about",
          "translation": "……怎么样",
          "phonetic": "/wɒt əˈbaʊt/"
        },
        {
          "word": "please",
          "translation": "请",
          "phonetic": "/pliːz/"
        },
        {
          "word": "yes please",
          "translation": "好的，谢谢",
          "phonetic": "/jes pliːz/"
        },
        {
          "word": "thank you",
          "translation": "谢谢你",
          "phonetic": "/θæŋk juː/"
        },
        {
          "word": "no thank you",
          "translation": "不，谢谢你",
          "phonetic": "/nəʊ θæŋk juː/"
        },
        {
          "word": "a",
          "translation": "一个",
          "phonetic": "/ə/"
        },
        {
          "word": "an",
          "translation": "一个",
          "phonetic": "/ən/"
        }
      ],
      "Unit 8 Happy New Year!": [
        {
          "word": "happy",
          "translation": "快乐的",
          "phonetic": "/ˈhæpi/"
        },
        {
          "word": "New Year",
          "translation": "新年",
          "phonetic": "/njuː jɪə(r)/"
        },
        {
          "word": "Happy New Year",
          "translation": "新年快乐",
          "phonetic": "/ˈhæpi njuː jɪə(r)/"
        },
        {
          "word": "doll",
          "translation": "玩具娃娃",
          "phonetic": "/dɒl/"
        },
        {
          "word": "robot",
          "translation": "机器人",
          "phonetic": "/ˈrəʊbɒt/"
        },
        {
          "word": "ball",
          "translation": "球",
          "phonetic": "/bɔːl/"
        },
        {
          "word": "car",
          "translation": "小汽车",
          "phonetic": "/kɑː(r)/"
        },
        {
          "word": "CD",
          "translation": "光盘",
          "phonetic": "/ˌsiː ˈdiː/"
        },
        {
          "word": "for",
          "translation": "给，为",
          "phonetic": "/fɔː(r)/"
        },
        {
          "word": "for you",
          "translation": "给你的",
          "phonetic": "/fɔː(r) juː/"
        },
        {
          "word": "this is",
          "translation": "这是",
          "phonetic": "/ðɪs ɪz/"
        },
        {
          "word": "thank you",
          "translation": "谢谢你",
          "phonetic": "/θæŋk juː/"
        },
        {
          "word": "what's this",
          "translation": "这是什么",
          "phonetic": "/wɒts ðɪs/"
        }
      ]
    }
  },
  "G3_S2": {
    "name": "三年级下册",
    "units": {
      "Unit 1 In class": [
        {
          "word": "stand up",
          "translation": "起立",
          "phonetic": "/stænd ʌp/"
        },
        {
          "word": "sit down",
          "translation": "坐下",
          "phonetic": "/sɪt daʊn/"
        },
        {
          "word": "open",
          "translation": "打开",
          "phonetic": "/ˈəʊpən/"
        },
        {
          "word": "close",
          "translation": "关上",
          "phonetic": "/kləʊz/"
        },
        {
          "word": "book",
          "translation": "书",
          "phonetic": "/bʊk/"
        },
        {
          "word": "blackboard",
          "translation": "黑板",
          "phonetic": "/ˈblækbɔːd/"
        },
        {
          "word": "window",
          "translation": "窗",
          "phonetic": "/ˈwɪndəʊ/"
        },
        {
          "word": "door",
          "translation": "门",
          "phonetic": "/dɔː/"
        }
      ],
      "Unit 2 In the library": [
        {
          "word": "shout",
          "translation": "喊叫",
          "phonetic": "/ʃaʊt/"
        },
        {
          "word": "run",
          "translation": "跑",
          "phonetic": "/rʌn/"
        },
        {
          "word": "eat",
          "translation": "吃",
          "phonetic": "/iːt/"
        },
        {
          "word": "talk",
          "translation": "谈话",
          "phonetic": "/tɔːk/"
        },
        {
          "word": "library",
          "translation": "图书馆",
          "phonetic": "/ˈlaɪbrəri/"
        },
        {
          "word": "sleep",
          "translation": "睡觉",
          "phonetic": "/sliːp/"
        },
        {
          "word": "drink",
          "translation": "喝",
          "phonetic": "/drɪŋk/"
        }
      ],
      "Unit 3 Is this your pencil?": [
        {
          "word": "pencil",
          "translation": "铅笔",
          "phonetic": "/ˈpensl/"
        },
        {
          "word": "pen",
          "translation": "钢笔",
          "phonetic": "/pen/"
        },
        {
          "word": "ruler",
          "translation": "直尺",
          "phonetic": "/ˈruːlə/"
        },
        {
          "word": "rubber",
          "translation": "橡皮",
          "phonetic": "/ˈrʌbə/"
        },
        {
          "word": "pencilcase",
          "translation": "铅笔盒",
          "phonetic": "/ˈpensl keɪs/"
        },
        {
          "word": "crayon",
          "translation": "蜡笔",
          "phonetic": "/ˈkreɪən/"
        },
        {
          "word": "schoolbag",
          "translation": "书包",
          "phonetic": "/ˈskuːlbæɡ/"
        }
      ],
      "Unit 4 Where's the bird?": [
        {
          "word": "desk",
          "translation": "书桌",
          "phonetic": "/desk/"
        },
        {
          "word": "chair",
          "translation": "椅子",
          "phonetic": "/tʃeə/"
        },
        {
          "word": "in",
          "translation": "在……里",
          "phonetic": "/ɪn/"
        },
        {
          "word": "on",
          "translation": "在……上",
          "phonetic": "/ɒn/"
        },
        {
          "word": "under",
          "translation": "在……下",
          "phonetic": "/ˈʌndə/"
        },
        {
          "word": "behind",
          "translation": "在……后",
          "phonetic": "/bɪˈhaɪnd/"
        },
        {
          "word": "near",
          "translation": "在……附近",
          "phonetic": "/nɪə/"
        }
      ],
      "Unit 5 How old are you?": [
        {
          "word": "one",
          "translation": "一",
          "phonetic": "/wʌn/"
        },
        {
          "word": "two",
          "translation": "二",
          "phonetic": "/tuː/"
        },
        {
          "word": "three",
          "translation": "三",
          "phonetic": "/θriː/"
        },
        {
          "word": "four",
          "translation": "四",
          "phonetic": "/fɔː/"
        },
        {
          "word": "five",
          "translation": "五",
          "phonetic": "/faɪv/"
        },
        {
          "word": "six",
          "translation": "六",
          "phonetic": "/sɪks/"
        },
        {
          "word": "seven",
          "translation": "七",
          "phonetic": "/ˈsevn/"
        },
        {
          "word": "eight",
          "translation": "八",
          "phonetic": "/eɪt/"
        },
        {
          "word": "nine",
          "translation": "九",
          "phonetic": "/naɪn/"
        },
        {
          "word": "ten",
          "translation": "十",
          "phonetic": "/ten/"
        }
      ],
      "Unit 6 What time is it?": [
        {
          "word": "time",
          "translation": "时间",
          "phonetic": "/taɪm/"
        },
        {
          "word": "breakfast",
          "translation": "早餐",
          "phonetic": "/ˈbrekfəst/"
        },
        {
          "word": "lunch",
          "translation": "午餐",
          "phonetic": "/lʌntʃ/"
        },
        {
          "word": "dinner",
          "translation": "晚餐",
          "phonetic": "/ˈdɪnə/"
        },
        {
          "word": "bed",
          "translation": "床",
          "phonetic": "/bed/"
        },
        {
          "word": "clock",
          "translation": "钟",
          "phonetic": "/klɒk/"
        }
      ],
      "Unit 7 On the farm": [
        {
          "word": "pig",
          "translation": "猪",
          "phonetic": "/pɪɡ/"
        },
        {
          "word": "cow",
          "translation": "奶牛",
          "phonetic": "/kaʊ/"
        },
        {
          "word": "duck",
          "translation": "鸭子",
          "phonetic": "/dʌk/"
        },
        {
          "word": "chicken",
          "translation": "鸡",
          "phonetic": "/ˈtʃɪkɪn/"
        },
        {
          "word": "sheep",
          "translation": "羊",
          "phonetic": "/ʃiːp/"
        },
        {
          "word": "horse",
          "translation": "马",
          "phonetic": "/hɔːs/"
        }
      ],
      "Unit 8 We're twins!": [
        {
          "word": "man",
          "translation": "男人",
          "phonetic": "/mæn/"
        },
        {
          "word": "woman",
          "translation": "女人",
          "phonetic": "/ˈwʊmən/"
        },
        {
          "word": "boy",
          "translation": "男孩",
          "phonetic": "/bɔɪ/"
        },
        {
          "word": "girl",
          "translation": "女孩",
          "phonetic": "/ɡɜːl/"
        },
        {
          "word": "baby",
          "translation": "婴儿",
          "phonetic": "/ˈbeɪbi/"
        },
        {
          "word": "twin",
          "translation": "双胞胎之一",
          "phonetic": "/twɪn/"
        }
      ]
    }
  },
  "G4_S1": {
    "name": "四年级上册",
    "units": {
      "Unit 1 I like dogs": [
        {
          "word": "like",
          "translation": "喜欢",
          "phonetic": "/laɪk/"
        },
        {
          "word": "dog",
          "translation": "狗",
          "phonetic": "/dɒɡ/"
        },
        {
          "word": "animal",
          "translation": "动物",
          "phonetic": "/ˈænɪml/"
        },
        {
          "word": "cat",
          "translation": "猫",
          "phonetic": "/kæt/"
        },
        {
          "word": "panda",
          "translation": "熊猫",
          "phonetic": "/ˈpændə/"
        },
        {
          "word": "fat",
          "translation": "胖的",
          "phonetic": "/fæt/"
        },
        {
          "word": "elephant",
          "translation": "大象",
          "phonetic": "/ˈelɪfənt/"
        },
        {
          "word": "horse",
          "translation": "马",
          "phonetic": "/hɔːs/"
        },
        {
          "word": "lion",
          "translation": "狮子",
          "phonetic": "/ˈlaɪən/"
        },
        {
          "word": "monkey",
          "translation": "猴子",
          "phonetic": "/ˈmʌŋki/"
        },
        {
          "word": "tiger",
          "translation": "老虎",
          "phonetic": "/ˈtaɪɡə/"
        }
      ],
      "Unit 2 Let's make a fruit salad": [
        {
          "word": "make",
          "translation": "制作",
          "phonetic": "/meɪk/"
        },
        {
          "word": "fruit",
          "translation": "水果",
          "phonetic": "/fruːt/"
        },
        {
          "word": "salad",
          "translation": "色拉",
          "phonetic": "/ˈsæləd/"
        },
        {
          "word": "pineapple",
          "translation": "菠萝",
          "phonetic": "/ˈpaɪnæpl/"
        },
        {
          "word": "mango",
          "translation": "芒果",
          "phonetic": "/ˈmæŋɡəʊ/"
        },
        {
          "word": "banana",
          "translation": "香蕉",
          "phonetic": "/bəˈnɑːnə/"
        },
        {
          "word": "grape",
          "translation": "葡萄",
          "phonetic": "/ɡreɪp/"
        },
        {
          "word": "some",
          "translation": "一些",
          "phonetic": "/sʌm/"
        },
        {
          "word": "any",
          "translation": "任何的",
          "phonetic": "/ˈeni/"
        },
        {
          "word": "here you are",
          "translation": "给你",
          "phonetic": "/hɪə juː ɑː/"
        }
      ],
      "Unit 3 How many?": [
        {
          "word": "how many",
          "translation": "多少",
          "phonetic": "/haʊ ˈmeni/"
        },
        {
          "word": "number",
          "translation": "数字",
          "phonetic": "/ˈnʌmbə/"
        },
        {
          "word": "thirteen",
          "translation": "十三",
          "phonetic": "/ˌθɜːˈtiːn/"
        },
        {
          "word": "fourteen",
          "translation": "十四",
          "phonetic": "/ˌfɔːˈtiːn/"
        },
        {
          "word": "fifteen",
          "translation": "十五",
          "phonetic": "/ˌfɪfˈtiːn/"
        },
        {
          "word": "sixteen",
          "translation": "十六",
          "phonetic": "/ˌsɪksˈtiːn/"
        },
        {
          "word": "seventeen",
          "translation": "十七",
          "phonetic": "/ˌsevnˈtiːn/"
        },
        {
          "word": "eighteen",
          "translation": "十八",
          "phonetic": "/ˌeɪˈtiːn/"
        },
        {
          "word": "nineteen",
          "translation": "十九",
          "phonetic": "/ˌnaɪnˈtiːn/"
        },
        {
          "word": "twenty",
          "translation": "二十",
          "phonetic": "/ˈtwenti/"
        },
        {
          "word": "sticker",
          "translation": "贴纸",
          "phonetic": "/ˈstɪkə/"
        }
      ],
      "Unit 4 I can play basketball": [
        {
          "word": "basketball",
          "translation": "篮球",
          "phonetic": "/ˈbɑːskɪtbɔːl/"
        },
        {
          "word": "football",
          "translation": "足球",
          "phonetic": "/ˈfʊtbɔːl/"
        },
        {
          "word": "jump",
          "translation": "跳",
          "phonetic": "/dʒʌmp/"
        },
        {
          "word": "run",
          "translation": "跑",
          "phonetic": "/rʌn/"
        },
        {
          "word": "fly",
          "translation": "飞",
          "phonetic": "/flaɪ/"
        },
        {
          "word": "skate",
          "translation": "滑冰",
          "phonetic": "/skeɪt/"
        },
        {
          "word": "swim",
          "translation": "游泳",
          "phonetic": "/swɪm/"
        },
        {
          "word": "well",
          "translation": "好",
          "phonetic": "/wel/"
        },
        {
          "word": "sad",
          "translation": "难过的",
          "phonetic": "/sæd/"
        }
      ],
      "Unit 5 Our new home": [
        {
          "word": "home",
          "translation": "家",
          "phonetic": "/həʊm/"
        },
        {
          "word": "bedroom",
          "translation": "卧室",
          "phonetic": "/ˈbedruːm/"
        },
        {
          "word": "living room",
          "translation": "客厅",
          "phonetic": "/ˈlɪvɪŋ ruːm/"
        },
        {
          "word": "kitchen",
          "translation": "厨房",
          "phonetic": "/ˈkɪtʃɪn/"
        },
        {
          "word": "bathroom",
          "translation": "浴室",
          "phonetic": "/ˈbɑːθruːm/"
        },
        {
          "word": "sofa",
          "translation": "沙发",
          "phonetic": "/ˈsəʊfə/"
        },
        {
          "word": "fridge",
          "translation": "冰箱",
          "phonetic": "/frɪdʒ/"
        },
        {
          "word": "table",
          "translation": "桌子",
          "phonetic": "/ˈteɪbl/"
        },
        {
          "word": "bed",
          "translation": "床",
          "phonetic": "/bed/"
        },
        {
          "word": "phone",
          "translation": "电话",
          "phonetic": "/fəʊn/"
        }
      ],
      "Unit 6 At the snack bar": [
        {
          "word": "snack bar",
          "translation": "小吃店",
          "phonetic": "/snæk bɑː/"
        },
        {
          "word": "hamburger",
          "translation": "汉堡包",
          "phonetic": "/ˈhæmbɜːɡə/"
        },
        {
          "word": "sandwich",
          "translation": "三明治",
          "phonetic": "/ˈsænwɪdʒ/"
        },
        {
          "word": "chips",
          "translation": "薯条",
          "phonetic": "/tʃɪps/"
        },
        {
          "word": "noodles",
          "translation": "面条",
          "phonetic": "/ˈnuːdlz/"
        },
        {
          "word": "coffee",
          "translation": "咖啡",
          "phonetic": "/ˈkɒfi/"
        },
        {
          "word": "juice",
          "translation": "果汁",
          "phonetic": "/dʒuːs/"
        },
        {
          "word": "tea",
          "translation": "茶",
          "phonetic": "/tiː/"
        },
        {
          "word": "milk",
          "translation": "牛奶",
          "phonetic": "/mɪlk/"
        }
      ],
      "Unit 7 How much is it?": [
        {
          "word": "how much",
          "translation": "多少钱",
          "phonetic": "/haʊ mʌtʃ/"
        },
        {
          "word": "shoes",
          "translation": "鞋子",
          "phonetic": "/ʃuːz/"
        },
        {
          "word": "socks",
          "translation": "袜子",
          "phonetic": "/sɒks/"
        },
        {
          "word": "umbrella",
          "translation": "雨伞",
          "phonetic": "/ʌmˈbrelə/"
        },
        {
          "word": "fan",
          "translation": "扇子",
          "phonetic": "/fæn/"
        },
        {
          "word": "ninety",
          "translation": "九十",
          "phonetic": "/ˈnaɪnti/"
        },
        {
          "word": "hundred",
          "translation": "百",
          "phonetic": "/ˈhʌndrəd/"
        },
        {
          "word": "cheap",
          "translation": "便宜的",
          "phonetic": "/tʃiːp/"
        },
        {
          "word": "expensive",
          "translation": "昂贵的",
          "phonetic": "/ɪkˈspensɪv/"
        }
      ],
      "Unit 8 Dolls": [
        {
          "word": "doll",
          "translation": "洋娃娃",
          "phonetic": "/dɒl/"
        },
        {
          "word": "hair",
          "translation": "头发",
          "phonetic": "/heə/"
        },
        {
          "word": "eye",
          "translation": "眼睛",
          "phonetic": "/aɪ/"
        },
        {
          "word": "nose",
          "translation": "鼻子",
          "phonetic": "/nəʊz/"
        },
        {
          "word": "mouth",
          "translation": "嘴巴",
          "phonetic": "/maʊθ/"
        },
        {
          "word": "ear",
          "translation": "耳朵",
          "phonetic": "/ɪə/"
        },
        {
          "word": "head",
          "translation": "头部",
          "phonetic": "/hed/"
        },
        {
          "word": "body",
          "translation": "身体",
          "phonetic": "/ˈbɒdi/"
        },
        {
          "word": "hand",
          "translation": "手",
          "phonetic": "/hænd/"
        },
        {
          "word": "foot",
          "translation": "脚",
          "phonetic": "/fʊt/"
        }
      ]
    }
  },
  "G4_S2": {
    "name": "四年级下册",
    "units": {
      "Unit 1 Our school subjects": [
        {
          "word": "Chinese",
          "translation": "语文",
          "phonetic": "/ˌtʃaɪˈniːz/"
        },
        {
          "word": "Maths",
          "translation": "数学",
          "phonetic": "/mæθs/"
        },
        {
          "word": "English",
          "translation": "英语",
          "phonetic": "/ˈɪŋɡlɪʃ/"
        },
        {
          "word": "PE",
          "translation": "体育",
          "phonetic": "/ˌpiː ˈiː/"
        },
        {
          "word": "Music",
          "translation": "音乐",
          "phonetic": "/ˈmjuːzɪk/"
        },
        {
          "word": "Art",
          "translation": "美术",
          "phonetic": "/ɑːt/"
        },
        {
          "word": "subject",
          "translation": "科目",
          "phonetic": "/ˈsʌbdʒɪkt/"
        },
        {
          "word": "school",
          "translation": "学校",
          "phonetic": "/skuːl/"
        },
        {
          "word": "timetable",
          "translation": "课程表",
          "phonetic": "/ˈtaɪmteɪbl/"
        }
      ],
      "Unit 2 After school": [
        {
          "word": "Monday",
          "translation": "星期一",
          "phonetic": "/ˈmʌndeɪ/"
        },
        {
          "word": "Tuesday",
          "translation": "星期二",
          "phonetic": "/ˈtjuːzdeɪ/"
        },
        {
          "word": "Wednesday",
          "translation": "星期三",
          "phonetic": "/ˈwenzdeɪ/"
        },
        {
          "word": "Thursday",
          "translation": "星期四",
          "phonetic": "/ˈθɜːzdeɪ/"
        },
        {
          "word": "Friday",
          "translation": "星期五",
          "phonetic": "/ˈfraɪdeɪ/"
        },
        {
          "word": "Saturday",
          "translation": "星期六",
          "phonetic": "/ˈsætədeɪ/"
        },
        {
          "word": "Sunday",
          "translation": "星期日",
          "phonetic": "/ˈsʌndeɪ/"
        },
        {
          "word": "match",
          "translation": "比赛",
          "phonetic": "/mætʃ/"
        },
        {
          "word": "table tennis",
          "translation": "乒乓球",
          "phonetic": "/ˈteɪbl tenis/"
        }
      ],
      "Unit 3 My day": [
        {
          "word": "go to school",
          "translation": "上学",
          "phonetic": "/ɡəʊ tuː skuːl/"
        },
        {
          "word": "have lunch",
          "translation": "吃午餐",
          "phonetic": "/hæv lʌntʃ/"
        },
        {
          "word": "go home",
          "translation": "回家",
          "phonetic": "/ɡəʊ həʊm/"
        },
        {
          "word": "do homework",
          "translation": "做作业",
          "phonetic": "/duː ˈhəʊmwɜːk/"
        },
        {
          "word": "watch TV",
          "translation": "看电视",
          "phonetic": "/wɒtʃ ˌtiːˈviː/"
        },
        {
          "word": "go to bed",
          "translation": "上床睡觉",
          "phonetic": "/ɡəʊ tuː bed/"
        },
        {
          "word": "usually",
          "translation": "通常",
          "phonetic": "/ˈjuːʒuəli/"
        }
      ],
      "Unit 4 Drawing in the park": [
        {
          "word": "draw",
          "translation": "画画",
          "phonetic": "/drɔː/"
        },
        {
          "word": "flower",
          "translation": "花",
          "phonetic": "/ˈflaʊə/"
        },
        {
          "word": "river",
          "translation": "河流",
          "phonetic": "/ˈrɪvə/"
        },
        {
          "word": "boat",
          "translation": "小船",
          "phonetic": "/bəʊt/"
        },
        {
          "word": "hill",
          "translation": "小山",
          "phonetic": "/hɪl/"
        },
        {
          "word": "lake",
          "translation": "湖泊",
          "phonetic": "/leɪk/"
        },
        {
          "word": "park",
          "translation": "公园",
          "phonetic": "/pɑːk/"
        },
        {
          "word": "sky",
          "translation": "天空",
          "phonetic": "/skaɪ/"
        }
      ],
      "Unit 5 Seasons": [
        {
          "word": "spring",
          "translation": "春天",
          "phonetic": "/sprɪŋ/"
        },
        {
          "word": "summer",
          "translation": "夏天",
          "phonetic": "/ˈsʌmə/"
        },
        {
          "word": "autumn",
          "translation": "秋天",
          "phonetic": "/ˈɔːtəm/"
        },
        {
          "word": "winter",
          "translation": "冬天",
          "phonetic": "/ˈwɪntə/"
        },
        {
          "word": "hot",
          "translation": "热的",
          "phonetic": "/hɒt/"
        },
        {
          "word": "warm",
          "translation": "温暖的",
          "phonetic": "/wɔːm/"
        },
        {
          "word": "cool",
          "translation": "凉爽的",
          "phonetic": "/kuːl/"
        },
        {
          "word": "cold",
          "translation": "寒冷的",
          "phonetic": "/kəʊld/"
        },
        {
          "word": "picnic",
          "translation": "野餐",
          "phonetic": "/ˈpɪknɪk/"
        }
      ],
      "Unit 6 Whose dress is this?": [
        {
          "word": "dress",
          "translation": "连衣裙",
          "phonetic": "/dres/"
        },
        {
          "word": "skirt",
          "translation": "短裙",
          "phonetic": "/skɜːt/"
        },
        {
          "word": "trousers",
          "translation": "裤子",
          "phonetic": "/ˈtraʊzəz/"
        },
        {
          "word": "gloves",
          "translation": "手套",
          "phonetic": "/ɡlʌvz/"
        },
        {
          "word": "coat",
          "translation": "外套",
          "phonetic": "/kəʊt/"
        },
        {
          "word": "sweater",
          "translation": "毛衣",
          "phonetic": "/ˈswetə/"
        },
        {
          "word": "whose",
          "translation": "谁的",
          "phonetic": "/huːz/"
        }
      ],
      "Unit 7 What's the matter?": [
        {
          "word": "thirsty",
          "translation": "口渴的",
          "phonetic": "/ˈθɜːsti/"
        },
        {
          "word": "hungry",
          "translation": "饥饿的",
          "phonetic": "/ˈhʌŋɡri/"
        },
        {
          "word": "tired",
          "translation": "疲劳的",
          "phonetic": "/ˈtaɪəd/"
        },
        {
          "word": "ill",
          "translation": "有病的",
          "phonetic": "/ɪl/"
        },
        {
          "word": "happy",
          "translation": "高兴的",
          "phonetic": "/ˈhæpi/"
        },
        {
          "word": "sad",
          "translation": "难过的",
          "phonetic": "/sæd/"
        },
        {
          "word": "water",
          "translation": "水",
          "phonetic": "/ˈwɔːtə/"
        }
      ],
      "Unit 8 How are you?": [
        {
          "word": "cough",
          "translation": "咳嗽",
          "phonetic": "/kɒf/"
        },
        {
          "word": "headache",
          "translation": "头痛",
          "phonetic": "/ˈhedeɪk/"
        },
        {
          "word": "fever",
          "translation": "发烧",
          "phonetic": "/ˈfiːvə/"
        },
        {
          "word": "fine",
          "translation": "好的",
          "phonetic": "/faɪn/"
        },
        {
          "word": "doctor",
          "translation": "医生",
          "phonetic": "/ˈdɒktə/"
        },
        {
          "word": "hear",
          "translation": "听到",
          "phonetic": "/hɪə/"
        },
        {
          "word": "phone",
          "translation": "电话",
          "phonetic": "/fəʊn/"
        }
      ]
    }
  },
  "G5_S1": {
    "name": "五年级上册",
    "units": {
      "Unit 1 Goldilocks and the three bears": [
        {
          "word": "bear",
          "translation": "熊",
          "phonetic": "/beə/"
        },
        {
          "word": "forest",
          "translation": "森林",
          "phonetic": "/ˈfɒrɪst/"
        },
        {
          "word": "there",
          "translation": "引导词（与be连用表示有）",
          "phonetic": "/ðeə/"
        },
        {
          "word": "house",
          "translation": "房子",
          "phonetic": "/haʊs/"
        },
        {
          "word": "soup",
          "translation": "汤",
          "phonetic": "/suːp/"
        },
        {
          "word": "just right",
          "translation": "正合适",
          "phonetic": "/dʒʌst raɪt/"
        },
        {
          "word": "room",
          "translation": "房间",
          "phonetic": "/ruːm/"
        },
        {
          "word": "hard",
          "translation": "硬的",
          "phonetic": "/hɑːd/"
        },
        {
          "word": "soft",
          "translation": "软的",
          "phonetic": "/sɒft/"
        },
        {
          "word": "afraid",
          "translation": "害怕的",
          "phonetic": "/əˈfreɪd/"
        }
      ],
      "Unit 2 A new student": [
        {
          "word": "student",
          "translation": "学生",
          "phonetic": "/ˈstjuːdnt/"
        },
        {
          "word": "swing",
          "translation": "秋千",
          "phonetic": "/swɪŋ/"
        },
        {
          "word": "classroom",
          "translation": "教室",
          "phonetic": "/ˈklɑːsruːm/"
        },
        {
          "word": "push",
          "translation": "推",
          "phonetic": "/pʊʃ/"
        },
        {
          "word": "second",
          "translation": "第二",
          "phonetic": "/ˈsekənd/"
        },
        {
          "word": "heavy",
          "translation": "重的",
          "phonetic": "/ˈhevi/"
        },
        {
          "word": "floor",
          "translation": "楼层",
          "phonetic": "/flɔː/"
        },
        {
          "word": "stop",
          "translation": "停止",
          "phonetic": "/stɒp/"
        },
        {
          "word": "computer",
          "translation": "计算机",
          "phonetic": "/kəmˈpjuːtə/"
        },
        {
          "word": "high",
          "translation": "高的",
          "phonetic": "/haɪ/"
        },
        {
          "word": "third",
          "translation": "第三",
          "phonetic": "/θɜːd/"
        },
        {
          "word": "first",
          "translation": "第一",
          "phonetic": "/fɜːst/"
        }
      ],
      "Unit 3 Our animal friends": [
        {
          "word": "body",
          "translation": "身体",
          "phonetic": "/ˈbɒdi/"
        },
        {
          "word": "wing",
          "translation": "翅膀",
          "phonetic": "/wɪŋ/"
        },
        {
          "word": "foot",
          "translation": "脚",
          "phonetic": "/fʊt/"
        },
        {
          "word": "leg",
          "translation": "腿",
          "phonetic": "/leɡ/"
        },
        {
          "word": "rabbit",
          "translation": "兔子",
          "phonetic": "/ˈræbɪt/"
        },
        {
          "word": "give",
          "translation": "给",
          "phonetic": "/ɡɪv/"
        },
        {
          "word": "arm",
          "translation": "手臂",
          "phonetic": "/ɑːm/"
        },
        {
          "word": "finger",
          "translation": "手指",
          "phonetic": "/ˈfɪŋɡə/"
        },
        {
          "word": "tail",
          "translation": "尾巴",
          "phonetic": "/teɪl/"
        }
      ],
      "Unit 4 Hobbies": [
        {
          "word": "hobby",
          "translation": "兴趣爱好",
          "phonetic": "/ˈhɒbi/"
        },
        {
          "word": "read",
          "translation": "阅读",
          "phonetic": "/riːd/"
        },
        {
          "word": "write",
          "translation": "写字",
          "phonetic": "/raɪt/"
        },
        {
          "word": "play",
          "translation": "玩",
          "phonetic": "/pleɪ/"
        },
        {
          "word": "collect",
          "translation": "收集",
          "phonetic": "/kəˈlekt/"
        },
        {
          "word": "dance",
          "translation": "跳舞",
          "phonetic": "/dɑːns/"
        },
        {
          "word": "sing",
          "translation": "唱歌",
          "phonetic": "/sɪŋ/"
        },
        {
          "word": "draw",
          "translation": "画画",
          "phonetic": "/drɔː/"
        }
      ],
      "Unit 5 What do they do?": [
        {
          "word": "writer",
          "translation": "作家",
          "phonetic": "/ˈraɪtə/"
        },
        {
          "word": "doctor",
          "translation": "医生",
          "phonetic": "/ˈdɒktə/"
        },
        {
          "word": "nurse",
          "translation": "护士",
          "phonetic": "/nɜːs/"
        },
        {
          "word": "cook",
          "translation": "厨师",
          "phonetic": "/kʊk/"
        },
        {
          "word": "teacher",
          "translation": "老师",
          "phonetic": "/ˈtiːtʃə/"
        },
        {
          "word": "driver",
          "translation": "司机",
          "phonetic": "/ˈdraɪvə/"
        },
        {
          "word": "farmer",
          "translation": "农民",
          "phonetic": "/ˈfɑːmə/"
        },
        {
          "word": "worker",
          "translation": "工人",
          "phonetic": "/ˈwɜːkə/"
        }
      ],
      "Unit 6 My e-friend": [
        {
          "word": "e-friend",
          "translation": "网友",
          "phonetic": "/ˈiː frend/"
        },
        {
          "word": "internet",
          "translation": "互联网",
          "phonetic": "/ˈɪntənet/"
        },
        {
          "word": "country",
          "translation": "国家",
          "phonetic": "/ˈkʌntri/"
        },
        {
          "word": "speak",
          "translation": "说话，语言",
          "phonetic": "/spiːk/"
        },
        {
          "word": "write",
          "translation": "写，书写",
          "phonetic": "/raɪt/"
        },
        {
          "word": "study",
          "translation": "学习",
          "phonetic": "/ˈstʌdi/"
        },
        {
          "word": "English",
          "translation": "英语",
          "phonetic": "/ˈɪŋɡlɪʃ/"
        },
        {
          "word": "Chinese",
          "translation": "中文",
          "phonetic": "/ˌtʃaɪˈniːz/"
        }
      ],
      "Unit 7 At weekends": [
        {
          "word": "weekend",
          "translation": "周末",
          "phonetic": "/ˌwiːkˈend/"
        },
        {
          "word": "picnic",
          "translation": "野餐",
          "phonetic": "/ˈpɪknɪk/"
        },
        {
          "word": "visit",
          "translation": "拜访，参观",
          "phonetic": "/ˈvɪzɪt/"
        },
        {
          "word": "play",
          "translation": "玩，游戏",
          "phonetic": "/pleɪ/"
        },
        {
          "word": "watch",
          "translation": "观看",
          "phonetic": "/wɒtʃ/"
        },
        {
          "word": "read",
          "translation": "读，阅读",
          "phonetic": "/riːd/"
        },
        {
          "word": "go",
          "translation": "去，出发",
          "phonetic": "/ɡəʊ/"
        }
      ],
      "Unit 8 At Christmas": [
        {
          "word": "Christmas",
          "translation": "圣诞节",
          "phonetic": "/ˈkrɪsməs/"
        },
        {
          "word": "tree",
          "translation": "树",
          "phonetic": "/triː/"
        },
        {
          "word": "present",
          "translation": "礼物",
          "phonetic": "/ˈpreznt/"
        },
        {
          "word": "card",
          "translation": "卡片",
          "phonetic": "/kɑːd/"
        },
        {
          "word": "grandfather",
          "translation": "爷爷/外公",
          "phonetic": "/ˈɡrændfɑːðə/"
        },
        {
          "word": "grandmother",
          "translation": "奶奶/外婆",
          "phonetic": "/ˈɡrændmʌðə/"
        },
        {
          "word": "parents",
          "translation": "父母",
          "phonetic": "/ˈpeərənts/"
        },
        {
          "word": "family",
          "translation": "家庭",
          "phonetic": "/ˈfæməli/"
        }
      ]
    }
  },
  "G5_S2": {
    "name": "五年级下册",
    "units": {
      "Unit 1 Cinderella": [
        {
          "word": "Cinderella",
          "translation": "灰姑娘",
          "phonetic": "/ˌsɪndəˈrelə/"
        },
        {
          "word": "prince",
          "translation": "王子",
          "phonetic": "/prɪns/"
        },
        {
          "word": "fairy",
          "translation": "仙女",
          "phonetic": "/ˈfeəri/"
        },
        {
          "word": "party",
          "translation": "聚会，晚会",
          "phonetic": "/ˈpɑːti/"
        },
        {
          "word": "carriage",
          "translation": "马车",
          "phonetic": "/ˈkærɪdʒ/"
        },
        {
          "word": "slipper",
          "translation": "拖鞋，水晶鞋",
          "phonetic": "/ˈslɪpə/"
        },
        {
          "word": "fit",
          "translation": "合适",
          "phonetic": "/fɪt/"
        },
        {
          "word": "marry",
          "translation": "结婚，娶，嫁",
          "phonetic": "/ˈmæri/"
        }
      ],
      "Unit 2 How do you come to school?": [
        {
          "word": "metro",
          "translation": "地铁",
          "phonetic": "/ˈmetrəʊ/"
        },
        {
          "word": "taxi",
          "translation": "出租车",
          "phonetic": "/ˈtæksi/"
        },
        {
          "word": "bus",
          "translation": "公共汽车",
          "phonetic": "/bʌs/"
        },
        {
          "word": "bike",
          "translation": "自行车",
          "phonetic": "/baɪk/"
        },
        {
          "word": "walk",
          "translation": "步行",
          "phonetic": "/wɔːk/"
        },
        {
          "word": "far",
          "translation": "远的",
          "phonetic": "/fɑː/"
        },
        {
          "word": "near",
          "translation": "近的",
          "phonetic": "/nɪə/"
        },
        {
          "word": "street",
          "translation": "街道",
          "phonetic": "/striːt/"
        }
      ],
      "Unit 3 Asking the way": [
        {
          "word": "ask",
          "translation": "问，询问",
          "phonetic": "/ɑːsk/"
        },
        {
          "word": "way",
          "translation": "路线，路",
          "phonetic": "/weɪ/"
        },
        {
          "word": "left",
          "translation": "左边",
          "phonetic": "/left/"
        },
        {
          "word": "right",
          "translation": "右边",
          "phonetic": "/raɪt/"
        },
        {
          "word": "straight",
          "translation": "直的",
          "phonetic": "/streɪt/"
        },
        {
          "word": "turn",
          "translation": "转弯",
          "phonetic": "/tɜːn/"
        },
        {
          "word": "cross",
          "translation": "穿过",
          "phonetic": "/krɒs/"
        },
        {
          "word": "station",
          "translation": "车站",
          "phonetic": "/ˈsteɪʃn/"
        }
      ],
      "Unit 4 Seeing the doctor": [
        {
          "word": "fever",
          "translation": "发烧",
          "phonetic": "/ˈfiːvə/"
        },
        {
          "word": "headache",
          "translation": "头痛",
          "phonetic": "/ˈhedeɪk/"
        },
        {
          "word": "cold",
          "translation": "感冒",
          "phonetic": "/kəʊld/"
        },
        {
          "word": "toothache",
          "translation": "牙痛",
          "phonetic": "/ˈtuːθeɪk/"
        },
        {
          "word": "medicine",
          "translation": "药",
          "phonetic": "/ˈmedsn/"
        },
        {
          "word": "rest",
          "translation": "休息",
          "phonetic": "/rest/"
        },
        {
          "word": "water",
          "translation": "水",
          "phonetic": "/ˈwɔːtə/"
        },
        {
          "word": "check",
          "translation": "检查",
          "phonetic": "/tʃek/"
        }
      ],
      "Unit 5 Helping our parents": [
        {
          "word": "clean",
          "translation": "清洁",
          "phonetic": "/kliːn/"
        },
        {
          "word": "cook",
          "translation": "做饭",
          "phonetic": "/kʊk/"
        },
        {
          "word": "wash",
          "translation": "洗",
          "phonetic": "/wɒʃ/"
        },
        {
          "word": "sweep",
          "translation": "扫",
          "phonetic": "/swiːp/"
        },
        {
          "word": "busy",
          "translation": "忙碌的",
          "phonetic": "/ˈbɪzi/"
        },
        {
          "word": "parent",
          "translation": "父母",
          "phonetic": "/ˈpeərənt/"
        },
        {
          "word": "help",
          "translation": "帮助",
          "phonetic": "/help/"
        },
        {
          "word": "tidy",
          "translation": "整洁的",
          "phonetic": "/ˈtaɪdi/"
        }
      ],
      "Unit 6 In the kitchen": [
        {
          "word": "kitchen",
          "translation": "厨房",
          "phonetic": "/ˈkɪtʃɪn/"
        },
        {
          "word": "tomato",
          "translation": "西红柿",
          "phonetic": "/təˈmɑːtəʊ/"
        },
        {
          "word": "potato",
          "translation": "马铃薯",
          "phonetic": "/pəˈteɪtə/"
        },
        {
          "word": "meat",
          "translation": "肉",
          "phonetic": "/miːt/"
        },
        {
          "word": "fish",
          "translation": "鱼",
          "phonetic": "/fɪʃ/"
        },
        {
          "word": "bread",
          "translation": "面包",
          "phonetic": "/bred/"
        },
        {
          "word": "milk",
          "translation": "牛奶",
          "phonetic": "/mɪlk/"
        },
        {
          "word": "egg",
          "translation": "鸡蛋",
          "phonetic": "/eɡ/"
        }
      ],
      "Unit 7 Chinese festivals": [
        {
          "word": "Spring Festival",
          "translation": "春节",
          "phonetic": "/sprɪŋ ˈfestɪvl/"
        },
        {
          "word": "Dragon Boat Festival",
          "translation": "端午节",
          "phonetic": "/ˈdræɡən bəʊt ˈfestɪvl/"
        },
        {
          "word": "Mid-Autumn Festival",
          "translation": "中秋节",
          "phonetic": "/mɪd ˈɔːtəm ˈfestɪvl/"
        },
        {
          "word": "Double Ninth Festival",
          "translation": "重阳节",
          "phonetic": "/ˈdʌbl naɪnθ ˈfestɪvl/"
        },
        {
          "word": "rice cake",
          "translation": "米糕",
          "phonetic": "/raɪs keɪk/"
        },
        {
          "word": "moon cake",
          "translation": "月饼",
          "phonetic": "/muːn keɪk/"
        },
        {
          "word": "dragon boat",
          "translation": "龙舟",
          "phonetic": "/ˈdræɡən bəʊt/"
        }
      ],
      "Unit 8 Birthdays": [
        {
          "word": "birthday",
          "translation": "生日",
          "phonetic": "/ˈbɜːθdeɪ/"
        },
        {
          "word": "party",
          "translation": "聚会",
          "phonetic": "/ˈpɑːti/"
        },
        {
          "word": "cake",
          "translation": "蛋糕",
          "phonetic": "/keɪk/"
        },
        {
          "word": "present",
          "translation": "礼物",
          "phonetic": "/ˈpreznt/"
        },
        {
          "word": "card",
          "translation": "卡片",
          "phonetic": "/kɑːd/"
        },
        {
          "word": "month",
          "translation": "月份",
          "phonetic": "/mʌnθ/"
        },
        {
          "word": "date",
          "translation": "日期",
          "phonetic": "/deɪt/"
        },
        {
          "word": "candle",
          "translation": "蜡烛",
          "phonetic": "/ˈkændl/"
        }
      ]
    }
  },
  "G6_S1": {
    "name": "六年级上册",
    "units": {
      "Unit 1 The king's new clothes": [
        {
          "word": "try one's best",
          "translation": "尽某人最大的努力",
          "phonetic": "/traɪ wʌnz best/"
        },
        {
          "word": "act",
          "translation": "扮演，演出",
          "phonetic": "/ækt/"
        },
        {
          "word": "play",
          "translation": "戏剧；扮演",
          "phonetic": "/pleɪ/"
        },
        {
          "word": "poster",
          "translation": "海报，招贴画",
          "phonetic": "/ˈpəʊstə/"
        },
        {
          "word": "last",
          "translation": "上一个的，最近的",
          "phonetic": "/lɑːst/"
        },
        {
          "word": "take part",
          "translation": "参与",
          "phonetic": "/teɪk pɑːt/"
        },
        {
          "word": "practise",
          "translation": "练习，训练",
          "phonetic": "/ˈpræktɪs/"
        },
        {
          "word": "afraid",
          "translation": "害怕，畏惧",
          "phonetic": "/əˈfreɪd/"
        },
        {
          "word": "calm down",
          "translation": "平静，安静",
          "phonetic": "/kɑːm daʊn/"
        },
        {
          "word": "begin",
          "translation": "开始",
          "phonetic": "/bɪˈɡɪn/"
        },
        {
          "word": "forget",
          "translation": "忘记，遗忘",
          "phonetic": "/fəˈɡet/"
        },
        {
          "word": "the words",
          "translation": "歌词",
          "phonetic": "/ðə wɜːdz/"
        },
        {
          "word": "remember",
          "translation": "记起；记住",
          "phonetic": "/rɪˈmembə/"
        },
        {
          "word": "finish",
          "translation": "完成，做好",
          "phonetic": "/ˈfɪnɪʃ/"
        },
        {
          "word": "keep",
          "translation": "继续，重复",
          "phonetic": "/kiːp/"
        },
        {
          "word": "ago",
          "translation": "以前",
          "phonetic": "/əˈɡəʊ/"
        },
        {
          "word": "movement",
          "translation": "运动，动作",
          "phonetic": "/ˈmuːvmənt/"
        },
        {
          "word": "skill",
          "translation": "技能，技术",
          "phonetic": "/skɪl/"
        },
        {
          "word": "in front of",
          "translation": "在……前面",
          "phonetic": "/ɪn frʌnt ɒv/"
        },
        {
          "word": "ready",
          "translation": "准备好的",
          "phonetic": "/ˈredi/"
        },
        {
          "word": "long ago",
          "translation": "很久以前",
          "phonetic": "/lɒŋ əˈɡəʊ/"
        },
        {
          "word": "snail",
          "translation": "蜗牛",
          "phonetic": "/sneɪl/"
        },
        {
          "word": "top",
          "translation": "顶端，顶部",
          "phonetic": "/tɒp/"
        }
      ],
      "Unit 2 What a day!": [
        {
          "word": "honesty",
          "translation": "诚实",
          "phonetic": "/ˈɒnɪsti/"
        },
        {
          "word": "storybook",
          "translation": "儿童故事书",
          "phonetic": "/ˈstɔːribʊk/"
        },
        {
          "word": "lie",
          "translation": "谎言，说话",
          "phonetic": "/laɪ/"
        },
        {
          "word": "break",
          "translation": "弄坏，损坏",
          "phonetic": "/breɪk/"
        },
        {
          "word": "yesterday",
          "translation": "在昨天；昨天",
          "phonetic": "/ˈjestədeɪ/"
        },
        {
          "word": "repair",
          "translation": "修理，修补",
          "phonetic": "/rɪˈpeə/"
        },
        {
          "word": "say",
          "translation": "说，讲",
          "phonetic": "/seɪ/"
        },
        {
          "word": "poor",
          "translation": "贫穷的",
          "phonetic": "/pɔː/"
        },
        {
          "word": "man",
          "translation": "男人",
          "phonetic": "/mæn/"
        },
        {
          "word": "old",
          "translation": "老的，年纪大的",
          "phonetic": "/əʊld/"
        },
        {
          "word": "ox",
          "translation": "牛",
          "phonetic": "/ɒks/"
        },
        {
          "word": "away from home",
          "translation": "离开家",
          "phonetic": "/əˈweɪ frɒm həʊm/"
        },
        {
          "word": "nephew",
          "translation": "侄子，外甥",
          "phonetic": "/ˈnefjuː/"
        },
        {
          "word": "sell",
          "translation": "卖，出售",
          "phonetic": "/sel/"
        },
        {
          "word": "buyer",
          "translation": "买主，买方",
          "phonetic": "/ˈbaɪə/"
        },
        {
          "word": "get back",
          "translation": "重新获得",
          "phonetic": "/ɡet bæk/"
        },
        {
          "word": "name",
          "translation": "名声，名誉",
          "phonetic": "/neɪm/"
        },
        {
          "word": "watch",
          "translation": "照看，看护",
          "phonetic": "/wɒtʃ/"
        },
        {
          "word": "wolf",
          "translation": "狼",
          "phonetic": "/wʊlf/"
        },
        {
          "word": "answer",
          "translation": "答复，回答",
          "phonetic": "/ˈɑːnsə/"
        },
        {
          "word": "cry",
          "translation": "哭，哭泣",
          "phonetic": "/kraɪ/"
        }
      ],
      "Unit 3 Holiday fun": [
        {
          "word": "hero",
          "translation": "崇拜的对象",
          "phonetic": "/ˈhɪərəʊ/"
        },
        {
          "word": "famous",
          "translation": "著名的，出名的",
          "phonetic": "/ˈfeɪməs/"
        },
        {
          "word": "scientist",
          "translation": "科学家",
          "phonetic": "/ˈsaɪəntɪst/"
        },
        {
          "word": "inventor",
          "translation": "发明家，发明者",
          "phonetic": "/ɪnˈventə/"
        },
        {
          "word": "hybrid rice",
          "translation": "杂交水稻",
          "phonetic": "/ˈhaɪbrɪd raɪs/"
        },
        {
          "word": "dream",
          "translation": "梦想，愿望",
          "phonetic": "/driːm/"
        },
        {
          "word": "cool",
          "translation": "凉快，凉爽",
          "phonetic": "/kuːl/"
        },
        {
          "word": "all over the world",
          "translation": "世界各地，全世界",
          "phonetic": "/ɔːl ˈəʊvə ðə wɜːld/"
        },
        {
          "word": "be born",
          "translation": "出生，诞生",
          "phonetic": "/bi bɔːn/"
        },
        {
          "word": "pass away",
          "translation": "去世",
          "phonetic": "/pɑːs əˈweɪ/"
        },
        {
          "word": "study",
          "translation": "研究，调查",
          "phonetic": "/ˈstʌdi/"
        },
        {
          "word": "call",
          "translation": "称呼，把……叫作",
          "phonetic": "/kɔːl/"
        },
        {
          "word": "come true",
          "translation": "实现，成为现实",
          "phonetic": "/kʌm truː/"
        },
        {
          "word": "farming",
          "translation": "务农",
          "phonetic": "/ˈfɑːmɪŋ/"
        },
        {
          "word": "age",
          "translation": "年龄，年纪",
          "phonetic": "/eɪdʒ/"
        },
        {
          "word": "grow up",
          "translation": "长大，成长",
          "phonetic": "/ɡrəʊ ʌp/"
        },
        {
          "word": "work on",
          "translation": "从事，致力于",
          "phonetic": "/wɜːk ɒn/"
        },
        {
          "word": "difficult",
          "translation": "困难的",
          "phonetic": "/ˈdɪfɪkəlt/"
        },
        {
          "word": "develop",
          "translation": "开发，研制",
          "phonetic": "/dɪˈveləp/"
        },
        {
          "word": "bamboo",
          "translation": "竹，竹子",
          "phonetic": "/bæmˈbuː/"
        },
        {
          "word": "silk",
          "translation": "丝绸",
          "phonetic": "/sɪlk/"
        },
        {
          "word": "dear",
          "translation": "昂贵的，价格高的",
          "phonetic": "/dɪə/"
        },
        {
          "word": "paper",
          "translation": "纸，纸张",
          "phonetic": "/ˈpeɪpə/"
        },
        {
          "word": "at first",
          "translation": "起初，起先",
          "phonetic": "/æt fɜːst/"
        }
      ],
      "Unit 4 Then and now": [
        {
          "word": "ninth",
          "translation": "第九",
          "phonetic": "/naɪnθ/"
        },
        {
          "word": "lunar month",
          "translation": "农历，阴历",
          "phonetic": "/ˈluːnə mʌnθ/"
        },
        {
          "word": "show",
          "translation": "表示",
          "phonetic": "/ʃəʊ/"
        },
        {
          "word": "love",
          "translation": "爱，关爱",
          "phonetic": "/lʌv/"
        },
        {
          "word": "smartphone",
          "translation": "智能手机",
          "phonetic": "/ˈsmɑːtfəʊn/"
        },
        {
          "word": "wish",
          "translation": "祝，祝愿",
          "phonetic": "/wɪʃ/"
        },
        {
          "word": "a long life",
          "translation": "长寿",
          "phonetic": "/ə lɒŋ laɪf/"
        },
        {
          "word": "blow out",
          "translation": "吹灭，熄灭",
          "phonetic": "/bləʊ aʊt/"
        },
        {
          "word": "candle",
          "translation": "蜡烛",
          "phonetic": "/ˈkændl/"
        },
        {
          "word": "photo",
          "translation": "照片",
          "phonetic": "/ˈfəʊtəʊ/"
        },
        {
          "word": "time flies",
          "translation": "时光飞逝，光阴似箭",
          "phonetic": "/taɪm flaɪz/"
        },
        {
          "word": "kid",
          "translation": "小孩",
          "phonetic": "/kɪd/"
        },
        {
          "word": "March",
          "translation": "三月",
          "phonetic": "/mɑːtʃ/"
        },
        {
          "word": "April",
          "translation": "四月",
          "phonetic": "/ˈeɪprəl/"
        },
        {
          "word": "July",
          "translation": "七月",
          "phonetic": "/dʒuˈlaɪ/"
        },
        {
          "word": "August",
          "translation": "八月",
          "phonetic": "/ˈɔːɡəst/"
        },
        {
          "word": "November",
          "translation": "十一月",
          "phonetic": "/nəʊˈvembə/"
        }
      ],
      "Unit 5 Signs": [
        {
          "word": "rubbish bin",
          "translation": "垃圾桶",
          "phonetic": "/ˈrʌbɪʃ bɪn/"
        },
        {
          "word": "ground",
          "translation": "地，地面",
          "phonetic": "/ɡraʊnd/"
        },
        {
          "word": "skin",
          "translation": "（某些水果和蔬菜的）皮，壳",
          "phonetic": "/skɪn/"
        },
        {
          "word": "pick up",
          "translation": "捡起",
          "phonetic": "/pɪk ʌp/"
        },
        {
          "word": "throw",
          "translation": "抛，扔",
          "phonetic": "/θrəʊ/"
        },
        {
          "word": "will",
          "translation": "将，将要",
          "phonetic": "/wɪl/"
        },
        {
          "word": "fall",
          "translation": "突然倒下，跌倒",
          "phonetic": "/fɔːl/"
        },
        {
          "word": "go plogging",
          "translation": "去拾荒慢跑",
          "phonetic": "/ɡəʊ ˈplɒɡɪŋ/"
        },
        {
          "word": "jogging",
          "translation": "慢跑锻炼",
          "phonetic": "/ˈdʒɒɡɪŋ/"
        },
        {
          "word": "at the same time",
          "translation": "同时，一起",
          "phonetic": "/æt ðə seɪm taɪm/"
        },
        {
          "word": "gate",
          "translation": "大门",
          "phonetic": "/ɡeɪt/"
        },
        {
          "word": "on time",
          "translation": "准时，按时",
          "phonetic": "/ɒn taɪm/"
        },
        {
          "word": "cleaning",
          "translation": "打扫，清洁",
          "phonetic": "/ˈkliːnɪŋ/"
        },
        {
          "word": "group",
          "translation": "组，群",
          "phonetic": "/ɡruːp/"
        },
        {
          "word": "start",
          "translation": "发起",
          "phonetic": "/stɑːt/"
        }
      ],
      "Unit 6 Keep our city clean": [
        {
          "word": "go green",
          "translation": "践行绿色环保的生活方式",
          "phonetic": "/ɡəʊ ɡriːn/"
        },
        {
          "word": "turn off",
          "translation": "关掉",
          "phonetic": "/tɜːn ɒf/"
        },
        {
          "word": "tap",
          "translation": "水龙头",
          "phonetic": "/tæp/"
        },
        {
          "word": "light",
          "translation": "电灯",
          "phonetic": "/laɪt/"
        },
        {
          "word": "both",
          "translation": "两个，两个都",
          "phonetic": "/bəʊθ/"
        },
        {
          "word": "side",
          "translation": "一面",
          "phonetic": "/saɪd/"
        },
        {
          "word": "eat up",
          "translation": "吃完，吃光",
          "phonetic": "/iːt ʌp/"
        },
        {
          "word": "project",
          "translation": "项目",
          "phonetic": "/ˈprɒdʒekt/"
        },
        {
          "word": "the Earth",
          "translation": "地球",
          "phonetic": "/ði ɜːθ/"
        },
        {
          "word": "colour",
          "translation": "为……着色",
          "phonetic": "/ˈkʌlə/"
        },
        {
          "word": "hour",
          "translation": "小时",
          "phonetic": "/ˈaʊə/"
        },
        {
          "word": "save",
          "translation": "节省，节约",
          "phonetic": "/seɪv/"
        },
        {
          "word": "electricity",
          "translation": "电，电能",
          "phonetic": "/ɪˌlekˈtrɪsəti/"
        },
        {
          "word": "last",
          "translation": "持续",
          "phonetic": "/lɑːst/"
        },
        {
          "word": "brush",
          "translation": "刷净",
          "phonetic": "/brʌʃ/"
        },
        {
          "word": "tooth",
          "translation": "牙，齿",
          "phonetic": "/tuːθ/"
        },
        {
          "word": "waste",
          "translation": "浪费",
          "phonetic": "/weɪst/"
        },
        {
          "word": "vegetable",
          "translation": "蔬菜",
          "phonetic": "/ˈvedʒtəbl/"
        },
        {
          "word": "plastic",
          "translation": "塑料的",
          "phonetic": "/ˈplæstɪk/"
        }
      ],
      "Unit 7 Protect the Earth": [
        {
          "word": "protect",
          "translation": "保护",
          "phonetic": "/prəˈtekt/"
        },
        {
          "word": "Earth",
          "translation": "地球",
          "phonetic": "/ɜːθ/"
        },
        {
          "word": "save",
          "translation": "节约；挽救",
          "phonetic": "/seɪv/"
        },
        {
          "word": "water",
          "translation": "水",
          "phonetic": "/ˈwɔːtə(r)/"
        },
        {
          "word": "useful",
          "translation": "有用的",
          "phonetic": "/ˈjuːsfl/"
        },
        {
          "word": "waste",
          "translation": "浪费；垃圾",
          "phonetic": "/weɪst/"
        },
        {
          "word": "energy",
          "translation": "能源",
          "phonetic": "/ˈenədʒi/"
        },
        {
          "word": "coal",
          "translation": "煤；煤炭",
          "phonetic": "/kəʊl/"
        },
        {
          "word": "oil",
          "translation": "石油",
          "phonetic": "/ɔɪl/"
        },
        {
          "word": "drive",
          "translation": "驾驶；驱动",
          "phonetic": "/draɪv/"
        },
        {
          "word": "most",
          "translation": "最多，大部分",
          "phonetic": "/məʊst/"
        },
        {
          "word": "plastic",
          "translation": "塑料",
          "phonetic": "/ˈplæstɪk/"
        },
        {
          "word": "wood",
          "translation": "木头；木材",
          "phonetic": "/wʊd/"
        },
        {
          "word": "cut down",
          "translation": "砍倒",
          "phonetic": "/kʌt daʊn/"
        },
        {
          "word": "too many",
          "translation": "太多",
          "phonetic": "/tuː ˈmeni/"
        },
        {
          "word": "glass",
          "translation": "玻璃",
          "phonetic": "/ɡlɑːs/"
        },
        {
          "word": "bottle",
          "translation": "瓶子",
          "phonetic": "/ˈbɒtl/"
        },
        {
          "word": "paper",
          "translation": "纸",
          "phonetic": "/ˈpeɪpə(r)/"
        },
        {
          "word": "project",
          "translation": "项目；课题",
          "phonetic": "/ˈprɒdʒekt/"
        },
        {
          "word": "poster",
          "translation": "海报",
          "phonetic": "/ˈpəʊstə(r)/"
        }
      ],
      "Unit 8 Chinese New Year": [
        {
          "word": "high-speed train",
          "translation": "高速列车",
          "phonetic": "/haɪ spiːd treɪn/"
        },
        {
          "word": "e-book",
          "translation": "电子书",
          "phonetic": "/iː bʊk/"
        },
        {
          "word": "meeting",
          "translation": "会议，集会",
          "phonetic": "/ˈmiːtɪŋ/"
        },
        {
          "word": "shop",
          "translation": "商店，店铺",
          "phonetic": "/ʃɒp/"
        },
        {
          "word": "smart",
          "translation": "智能的",
          "phonetic": "/smɑːt/"
        },
        {
          "word": "win",
          "translation": "获胜，赢",
          "phonetic": "/wɪn/"
        },
        {
          "word": "surprise",
          "translation": "意想不到的事，令人惊奇的事",
          "phonetic": "/səˈpraɪz/"
        },
        {
          "word": "wrong",
          "translation": "有问题的",
          "phonetic": "/rɒŋ/"
        },
        {
          "word": "change",
          "translation": "变化；改变",
          "phonetic": "/tʃeɪndʒ/"
        },
        {
          "word": "life",
          "translation": "生活",
          "phonetic": "/laɪf/"
        },
        {
          "word": "in the past",
          "translation": "在过去",
          "phonetic": "/ɪn ðə pɑːst/"
        },
        {
          "word": "travel",
          "translation": "行进",
          "phonetic": "/ˈtrævl/"
        },
        {
          "word": "office",
          "translation": "办公室，办公楼",
          "phonetic": "/ˈɒfɪs/"
        },
        {
          "word": "these days",
          "translation": "如今，而今",
          "phonetic": "/ðiːz deɪz/"
        },
        {
          "word": "work from home",
          "translation": "居家办公",
          "phonetic": "/wɜːk frɒm həʊm/"
        },
        {
          "word": "pay",
          "translation": "付钱，支付",
          "phonetic": "/peɪ/"
        },
        {
          "word": "cash",
          "translation": "现金",
          "phonetic": "/kæʃ/"
        },
        {
          "word": "helper",
          "translation": "帮手，助手",
          "phonetic": "/ˈhelpə/"
        },
        {
          "word": "fifty",
          "translation": "五十",
          "phonetic": "/ˈfɪfti/"
        },
        {
          "word": "email",
          "translation": "电子邮件",
          "phonetic": "/ˈiːmeɪl/"
        },
        {
          "word": "technology",
          "translation": "科技",
          "phonetic": "/tekˈnɒlədʒi/"
        }
      ]
    }
  },
  "G6_S2": {
    "name": "六年级下册",
    "units": {
      "Unit 1 The lion and the mouse": [
        {
          "word": "large",
          "translation": "巨大的，大的",
          "phonetic": "/lɑːdʒ/"
        },
        {
          "word": "strong",
          "translation": "强壮的，强烈的",
          "phonetic": "/strɒŋ/"
        },
        {
          "word": "weak",
          "translation": "虚弱的",
          "phonetic": "/wiːk/"
        },
        {
          "word": "loud",
          "translation": "大声的，响亮的",
          "phonetic": "/laʊd/"
        },
        {
          "word": "bite",
          "translation": "咬",
          "phonetic": "/baɪt/"
        },
        {
          "word": "sharp",
          "translation": "锋利的，尖锐的",
          "phonetic": "/ʃɑːp/"
        },
        {
          "word": "net",
          "translation": "网",
          "phonetic": "/net/"
        }
      ],
      "Unit 2 Good habits": [
        {
          "word": "habit",
          "translation": "习惯",
          "phonetic": "/ˈhæbɪt/"
        },
        {
          "word": "never",
          "translation": "从不",
          "phonetic": "/ˈnevə/"
        },
        {
          "word": "late",
          "translation": "迟的，晚的",
          "phonetic": "/leɪt/"
        },
        {
          "word": "tidy",
          "translation": "整洁的",
          "phonetic": "/ˈtaɪdi/"
        },
        {
          "word": "bad",
          "translation": "坏的",
          "phonetic": "/bæd/"
        },
        {
          "word": "early",
          "translation": "早的",
          "phonetic": "/ˈɜːli/"
        },
        {
          "word": "brush",
          "translation": "刷，刷净",
          "phonetic": "/brʌʃ/"
        },
        {
          "word": "teeth",
          "translation": "牙齿",
          "phonetic": "/tiːθ/"
        }
      ],
      "Unit 3 A healthy diet": [
        {
          "word": "diet",
          "translation": "饮食",
          "phonetic": "/ˈdaɪət/"
        },
        {
          "word": "health",
          "translation": "健康",
          "phonetic": "/helθ/"
        },
        {
          "word": "sweet",
          "translation": "甜的；糖果",
          "phonetic": "/swiːt/"
        },
        {
          "word": "food",
          "translation": "食物",
          "phonetic": "/fuːd/"
        },
        {
          "word": "cola",
          "translation": "可乐",
          "phonetic": "/ˈkəʊlə/"
        },
        {
          "word": "little",
          "translation": "少许的，微小的",
          "phonetic": "/ˈlɪtl/"
        },
        {
          "word": "meat",
          "translation": "肉",
          "phonetic": "/miːt/"
        }
      ],
      "Unit 4 Road safety": [
        {
          "word": "safety",
          "translation": "安全",
          "phonetic": "/ˈseɪfti/"
        },
        {
          "word": "road",
          "translation": "路，道路",
          "phonetic": "/rəʊd/"
        },
        {
          "word": "rule",
          "translation": "规则",
          "phonetic": "/ruːl/"
        },
        {
          "word": "light",
          "translation": "灯，光",
          "phonetic": "/laɪt/"
        },
        {
          "word": "cross",
          "translation": "穿过",
          "phonetic": "/krɒs/"
        },
        {
          "word": "safe",
          "translation": "安全的",
          "phonetic": "/seɪf/"
        },
        {
          "word": "danger",
          "translation": "危险",
          "phonetic": "/ˈdeɪndʒə/"
        }
      ],
      "Unit 5 A summer holiday": [
        {
          "word": "holiday",
          "translation": "假日，假期",
          "phonetic": "/ˈhɒlədeɪ/"
        },
        {
          "word": "travel",
          "translation": "旅行，传播",
          "phonetic": "/ˈtrævl/"
        },
        {
          "word": "trip",
          "translation": "出行，旅游",
          "phonetic": "/trɪp/"
        },
        {
          "word": "plan",
          "translation": "计划",
          "phonetic": "/plæn/"
        },
        {
          "word": "London",
          "translation": "伦敦",
          "phonetic": "/ˈlʌndən/"
        }
      ],
      "Unit 6 Planning for the weekend": [
        {
          "word": "weekend",
          "translation": "周末",
          "phonetic": "/ˌwiːkˈend/"
        },
        {
          "word": "concert",
          "translation": "音乐会",
          "phonetic": "/ˈkɒnsət/"
        },
        {
          "word": "play",
          "translation": "戏剧，表演",
          "phonetic": "/pleɪ/"
        },
        {
          "word": "show",
          "translation": "演出，展示",
          "phonetic": "/ʃəʊ/"
        },
        {
          "word": "weather",
          "translation": "天气",
          "phonetic": "/ˈweðə/"
        }
      ],
      "Unit 7 Summer holiday plans": [
        {
          "word": "plans",
          "translation": "计划（复数）",
          "phonetic": "/plænz/"
        },
        {
          "word": "future",
          "translation": "未来",
          "phonetic": "/ˈfjuːtʃə/"
        },
        {
          "word": "will",
          "translation": "将要",
          "phonetic": "/wɪl/"
        },
        {
          "word": "stay",
          "translation": "逗留，保持",
          "phonetic": "/steɪ/"
        }
      ],
      "Unit 8 Our dreams": [
        {
          "word": "dream",
          "translation": "梦想，梦",
          "phonetic": "/driːm/"
        },
        {
          "word": "dentist",
          "translation": "牙医",
          "phonetic": "/ˈdentɪst/"
        },
        {
          "word": "artist",
          "translation": "艺术家",
          "phonetic": "/ˈɑːtɪst/"
        },
        {
          "word": "writer",
          "translation": "作家",
          "phonetic": "/ˈraɪtə/"
        },
        {
          "word": "player",
          "translation": "选手，演员",
          "phonetic": "/ˈpleɪə/"
        },
        {
          "word": "astronaut",
          "translation": "宇航员",
          "phonetic": "/ˈæstrənɔːt/"
        }
      ]
    }
  },
  "G6_XSC": {
    "name": "小升初单词",
    "units": {
        "Unit 1 不规则动词变形": [
            {
                "word": "bring",
                "translation": "带来 (过去式: brought, 过去分词: brought)",
                "phonetic": "/brɪŋ/"
            },
            {
                "word": "buy",
                "translation": "买 (过去式: bought, 过去分词: bought)",
                "phonetic": "/baɪ/"
            },
            {
                "word": "catch",
                "translation": "抓住，赶上 (过去式: caught, 过去分词: caught)",
                "phonetic": "/kætʃ/"
            },
            {
                "word": "fight",
                "translation": "打架，战斗 (过去式: fought, 过去分词: fought)",
                "phonetic": "/faɪt/"
            },
            {
                "word": "think",
                "translation": "认为，思考 (过去式: thought, 过去分词: thought)",
                "phonetic": "/θɪŋk/"
            },
            {
                "word": "keep",
                "translation": "保持，保留 (过去式: kept, 过去分词: kept)",
                "phonetic": "/kiːp/"
            },
            {
                "word": "sleep",
                "translation": "睡觉 (过去式: slept, 过去分词: slept)",
                "phonetic": "/sliːp/"
            },
            {
                "word": "sweep",
                "translation": "扫，打扫 (过去式: swept, 过去分词: swept)",
                "phonetic": "/swiːp/"
            },
            {
                "word": "feel",
                "translation": "感觉 (过去式: felt, 过去分词: felt)",
                "phonetic": "/fiːl/"
            },
            {
                "word": "leave",
                "translation": "离开，落下 (过去式: left, 过去分词: left)",
                "phonetic": "/liːv/"
            },
            {
                "word": "meet",
                "translation": "遇见，会面 (过去式: met, 过去分词: met)",
                "phonetic": "/miːt/"
            },
            {
                "word": "teach",
                "translation": "教，教学 (过去式: taught, 过去分词: taught)",
                "phonetic": "/tiːtʃ/"
            },
            {
                "word": "find",
                "translation": "找到，发现 (过去式: found, 过去分词: found)",
                "phonetic": "/faɪnd/"
            },
            {
                "word": "spend",
                "translation": "花费(时间/金钱) (过去式: spent, 过去分词: spent)",
                "phonetic": "/spend/"
            },
            {
                "word": "build",
                "translation": "建造，构建 (过去式: built, 过去分词: built)",
                "phonetic": "/bɪld/"
            },
            {
                "word": "mean",
                "translation": "意思是，意味着 (过去式: meant, 过去分词: meant)",
                "phonetic": "/miːn/"
            },
            {
                "word": "become",
                "translation": "变成，成为 (过去式: became, 过去分词: become)",
                "phonetic": "/bɪˈkʌm/"
            },
            {
                "word": "come",
                "translation": "来 (过去式: came, 过去分词: come)",
                "phonetic": "/kʌm/"
            },
            {
                "word": "run",
                "translation": "跑 (过去式: ran, 过去分词: run)",
                "phonetic": "/rʌn/"
            },
            {
                "word": "begin",
                "translation": "开始 (过去式: began, 过去分词: begun)",
                "phonetic": "/bɪˈɡɪn/"
            },
            {
                "word": "draw",
                "translation": "画，拉 (过去式: drew, 过去分词: drawn)",
                "phonetic": "/drɔː/"
            },
            {
                "word": "drink",
                "translation": "喝 (过去式: drank, 过去分词: drunk)",
                "phonetic": "/drɪŋk/"
            },
            {
                "word": "sing",
                "translation": "唱歌 (过去式: sang, 过去分词: sung)",
                "phonetic": "/sɪŋ/"
            },
            {
                "word": "swim",
                "translation": "游泳 (过去式: swam, 过去分词: swum)",
                "phonetic": "/swɪm/"
            },
            {
                "word": "fly",
                "translation": "飞，放(风筝) (过去式: flew, 过去分词: flown)",
                "phonetic": "/flaɪ/"
            },
            {
                "word": "grow",
                "translation": "生长，种植 (过去式: grew, 过去分词: grown)",
                "phonetic": "/ɡrəʊ/"
            },
            {
                "word": "know",
                "translation": "知道，认识 (过去式: knew, 过去分词: known)",
                "phonetic": "/nəʊ/"
            },
            {
                "word": "throw",
                "translation": "扔，投掷 (过去式: threw, 过去分词: thrown)",
                "phonetic": "/θrəʊ/"
            },
            {
                "word": "ride",
                "translation": "骑(马/车) (过去式: rode, 过去分词: ridden)",
                "phonetic": "/raɪd/"
            },
            {
                "word": "write",
                "translation": "写 (过去式: wrote, 过去分词: written)",
                "phonetic": "/raɪt/"
            },
            {
                "word": "speak",
                "translation": "说(语言) (过去式: spoke, 过去分词: spoken)",
                "phonetic": "/spiːk/"
            },
            {
                "word": "choose",
                "translation": "选择 (过去式: chose, 过去分词: chosen)",
                "phonetic": "/tʃuːz/"
            },
            {
                "word": "eat",
                "translation": "吃 (过去式: ate, 过去分词: eaten)",
                "phonetic": "/iːt/"
            },
            {
                "word": "give",
                "translation": "给，付出 (过去式: gave, 过去分词: given)",
                "phonetic": "/ɡɪv/"
            },
            {
                "word": "see",
                "translation": "看见 (过去式: saw, 过去分词: seen)",
                "phonetic": "/siː/"
            },
            {
                "word": "take",
                "translation": "拿走，花费 (过去式: took, 过去分词: taken)",
                "phonetic": "/teɪk/"
            },
            {
                "word": "let",
                "translation": "让 (过去式: let, 过去分词: let)",
                "phonetic": "/let/"
            },
            {
                "word": "put",
                "translation": "放，置 (过去式: put, 过去分词: put)",
                "phonetic": "/pʊt/"
            },
            {
                "word": "read",
                "translation": "读 (过去式: read, 过去分词: read)",
                "phonetic": "/riːd/"
            },
            {
                "word": "hurt",
                "translation": "伤害，疼 (过去式: hurt, 过去分词: hurt)",
                "phonetic": "/hɜːt/"
            },
            {
                "word": "cut",
                "translation": "剪，切 (过去式: cut, 过去分词: cut)",
                "phonetic": "/kʌt/"
            }
        ],
        "Unit 2 比较级与最高级": [
            {
                "word": "good / well",
                "translation": "好的/好地 (比较级: better, 最高级: best)",
                "phonetic": "/ɡʊd / wel/"
            },
            {
                "word": "bad / badly / ill",
                "translation": "坏的/糟糕地 (比较级: worse, 最高级: worst)",
                "phonetic": "/bæd / ˈbædli / ɪl/"
            },
            {
                "word": "many / much",
                "translation": "多的 (比较级: more, 最高级: most)",
                "phonetic": "/ˈmeni / mʌtʃ/"
            },
            {
                "word": "little",
                "translation": "少的 (比较级: less, 最高级: least)",
                "phonetic": "/ˈlɪtl/"
            },
            {
                "word": "far",
                "translation": "远的 (比较级: farther / further, 最高级: farthest/furthest)",
                "phonetic": "/fɑː/"
            }
        ],
        "Unit 3 易混淆词对": [
            {
                "word": "quiet",
                "translation": "安静的",
                "phonetic": "/ˈkwaɪət/"
            },
            {
                "word": "quite",
                "translation": "非常，十分",
                "phonetic": "/kwaɪt/"
            },
            {
                "word": "weather",
                "translation": "天气",
                "phonetic": "/ˈweðə/"
            },
            {
                "word": "whether",
                "translation": "是否",
                "phonetic": "/ˈweðə/"
            },
            {
                "word": "their",
                "translation": "他们的",
                "phonetic": "/ðeə/"
            },
            {
                "word": "there",
                "translation": "那里",
                "phonetic": "/ðeə/"
            },
            {
                "word": "through",
                "translation": "穿过，穿透",
                "phonetic": "/θruː/"
            },
            {
                "word": "threw",
                "translation": "扔，throw的过去式",
                "phonetic": "/θruː/"
            },
            {
                "word": "whose",
                "translation": "谁的",
                "phonetic": "/huːz/"
            },
            {
                "word": "who's",
                "translation": "who is 的缩写",
                "phonetic": "/huːz/"
            },
            {
                "word": "hear",
                "translation": "听见",
                "phonetic": "/hɪə/"
            },
            {
                "word": "here",
                "translation": "这里",
                "phonetic": "/hɪə/"
            },
            {
                "word": "present",
                "translation": "礼物，现在的",
                "phonetic": "/ˈpreznt/"
            },
            {
                "word": "parent",
                "translation": "家长，父亲或母亲",
                "phonetic": "/ˈpeərənt/"
            },
            {
                "word": "excited",
                "translation": "感到兴奋的，主语是人",
                "phonetic": "/ɪkˈsaɪtɪd/"
            },
            {
                "word": "exciting",
                "translation": "令人兴奋的，主语是物/事",
                "phonetic": "/ɪkˈsaɪtɪŋ/"
            }
        ],
        "Unit 4 写作提分副词": [
            {
                "word": "suddenly",
                "translation": " (adv.)",
                "phonetic": "/ˈsʌdənli/"
            },
            {
                "word": "excitedly",
                "translation": " (adv.)",
                "phonetic": "/ɪkˈsaɪtɪdli/"
            },
            {
                "word": "carefully",
                "translation": " (adv.)",
                "phonetic": "/ˈkeəfəli/"
            },
            {
                "word": "happily",
                "translation": " (adv.)",
                "phonetic": "/ˈhæpɪli/"
            },
            {
                "word": "sadly",
                "translation": " (adv.)",
                "phonetic": "/ˈsædli/"
            },
            {
                "word": "firstly",
                "translation": "首先 (adv.)",
                "phonetic": "/ˈfɜːstli/"
            },
            {
                "word": "secondly",
                "translation": "其次 (adv.)",
                "phonetic": "/ˈsekəndli/"
            },
            {
                "word": "finally",
                "translation": "最后 (adv.)",
                "phonetic": "/ˈfaɪnəli/"
            }
        ],
        "Unit 5 公共场所词汇": [
            {
                "word": "museum",
                "translation": "博物馆",
                "phonetic": "/mjuːˈziːəm/"
            },
            {
                "word": "library",
                "translation": "图书馆",
                "phonetic": "/ˈlaɪbrəri/"
            },
            {
                "word": "cinema",
                "translation": "电影院",
                "phonetic": "/ˈsɪnəmə/"
            },
            {
                "word": "theater",
                "translation": "剧院，戏院",
                "phonetic": "/ˈθɪətə/"
            },
            {
                "word": "stadium",
                "translation": "体育场，运动场",
                "phonetic": "/ˈsteɪdiəm/"
            },
            {
                "word": "hospital",
                "translation": "医院",
                "phonetic": "/ˈhɒspɪtl/"
            },
            {
                "word": "restaurant",
                "translation": "饭馆，餐厅",
                "phonetic": "/ˈrestrɒnt/"
            },
            {
                "word": "airport",
                "translation": "机场",
                "phonetic": "/ˈeəpɔːt/"
            },
            {
                "word": "station",
                "translation": "车站，站台",
                "phonetic": "/ˈsteɪʃn/"
            }
        ],
        "Unit 6 学科与学习生活": [
            {
                "word": "Chinese",
                "translation": "* 语文，中文；汉语 (n.)",
                "phonetic": "/ˌtʃaɪˈniːz/"
            },
            {
                "word": "maths",
                "translation": "数学 (n.)",
                "phonetic": "/mæθs/"
            },
            {
                "word": "English",
                "translation": "* 英语 (n.)",
                "phonetic": "/ˈɪŋɡlɪʃ/"
            },
            {
                "word": "science",
                "translation": "* 科学 (n.)",
                "phonetic": "/ˈsaɪəns/"
            },
            {
                "word": "art",
                "translation": "* 美术，艺术 (n.)",
                "phonetic": "/ɑːt/"
            },
            {
                "word": "music",
                "translation": "* 音乐 (n.)",
                "phonetic": "/ˈmjuːzɪk/"
            },
            {
                "word": "PE",
                "translation": "体育 (n.)",
                "phonetic": "/ˌpiː ˈiː/"
            },
            {
                "word": "computer",
                "translation": "计算机，信息技术 (n.)",
                "phonetic": "/kəmˈpjuːtə/"
            },
            {
                "word": "history",
                "translation": "* 历史 (n.)",
                "phonetic": "/ˈhɪstri/"
            },
            {
                "word": "geography",
                "translation": "* 地理 (n.)",
                "phonetic": "/dʒiˈɒɡrəfi/"
            },
            {
                "word": "information",
                "translation": "* 信息；资讯 (n.)",
                "phonetic": "/ˌɪnfəˈmeɪʃn/"
            }
        ]
    }
}
};

const TEXTS_DATA = {
  "G3_S1": {
    "Unit 1 Hello!": {
      "title": "Hello!",
      "sentences": [
        {
          "en": "Hello, I'm Miss Li.",
          "cn": "你好，我是李老师。"
        },
        {
          "en": "Hello, Miss Li.",
          "cn": "您好，李老师。"
        },
        {
          "en": "Hi, I'm Mike.",
          "cn": "你好，我是迈克。"
        },
        {
          "en": "Hi, I'm Wang Bing.",
          "cn": "你好，我是王兵。"
        },
        {
          "en": "Hi, I'm Liu Tao.",
          "cn": "你好，我是刘涛。"
        },
        {
          "en": "Hi, I'm Yang Ling.",
          "cn": "你好，我是杨玲。"
        },
        {
          "en": "Good morning, class.",
          "cn": "早上好，同学们。"
        },
        {
          "en": "Good morning, Miss Li.",
          "cn": "早上好，李老师。"
        },
        {
          "en": "Good afternoon, class.",
          "cn": "下午好，同学们。"
        },
        {
          "en": "Good afternoon, Miss Li.",
          "cn": "下午好，李老师。"
        }
      ]
    },
    "Unit 2 I'm Liu Tao": {
      "title": "I'm Liu Tao",
      "sentences": [
        {
          "en": "Are you Wang Bing? Yes, I am.",
          "cn": "你是王兵吗？是的，我是。"
        },
        {
          "en": "Are you John? No, I'm not. I'm Liu Tao.",
          "cn": "你是约翰吗？不，我不是。我是刘涛。"
        },
        {
          "en": "Goodbye, class.",
          "cn": "再见，同学们。"
        },
        {
          "en": "Goodbye, Miss Li.",
          "cn": "再见，李老师。"
        },
        {
          "en": "Bye, Yang Ling. Bye, Mike.",
          "cn": "再见，杨玲。再见，迈克。"
        }
      ]
    },
    "Unit 3 My friends": {
      "title": "My friends",
      "sentences": [
        {
          "en": "Goodbye, Mum. Goodbye, Mike.",
          "cn": "再见，妈妈。再见，迈克。"
        },
        {
          "en": "He's my friend. He is Mike.",
          "cn": "他是我的朋友。他是迈克。"
        },
        {
          "en": "She's my friend. She is Yang Ling.",
          "cn": "她是我的朋友。她是杨玲。"
        },
        {
          "en": "This is Tina. She's my sister. Hello, Tina. Hello.",
          "cn": "这是蒂娜。她是我的妹妹。你好，蒂娜。你好。"
        }
      ]
    },
    "Unit 4 My family": {
      "title": "My family",
      "sentences": [
        {
          "en": "This is my family.",
          "cn": "这是我的家庭。"
        },
        {
          "en": "This is my father. This is my mother.",
          "cn": "这是我的爸爸。这是我的妈妈。"
        },
        {
          "en": "This is my grandpa. This is my grandma.",
          "cn": "这是我的爷爷。这是我的奶奶。"
        },
        {
          "en": "This is my brother. This is my sister.",
          "cn": "这是我的哥哥。这是我的妹妹。"
        },
        {
          "en": "This is me.",
          "cn": "这是我。"
        }
      ]
    },
    "Unit 5 Look at me!": {
      "title": "Look at me!",
      "sentences": [
        {
          "en": "Look at my T-shirt. It's nice.",
          "cn": "看我的T恤衫。它真好看。"
        },
        {
          "en": "Look at my skirt. How nice!",
          "cn": "看我的裙子。多么好看啊！"
        },
        {
          "en": "Look at my cap. Great!",
          "cn": "看我的帽子。太棒了！"
        },
        {
          "en": "Look at my jacket. It's great!",
          "cn": "看我的夹克衫。它太棒了！"
        }
      ]
    },
    "Unit 6 Colours": {
      "title": "Colours",
      "sentences": [
        {
          "en": "What colour is my skirt? It's green.",
          "cn": "我的裙子是什么颜色的？它是绿色的。"
        },
        {
          "en": "What colour is my cap? It's red.",
          "cn": "我的帽子是什么颜色的？它是红色的。"
        },
        {
          "en": "What colour is it now? It's orange.",
          "cn": "现在它是什么颜色的？它是橙色的。"
        },
        {
          "en": "What colour is it now? It's green and red.",
          "cn": "现在它是什么颜色的？它是绿红相间的。"
        }
      ]
    },
    "Unit 7 Would you like a pie?": {
      "title": "Would you like a pie?",
      "sentences": [
        {
          "en": "Would you like a pie? Yes, please.",
          "cn": "你想吃个派吗？好的，谢谢。"
        },
        {
          "en": "Would you like a sweet? No, thank you.",
          "cn": "你想吃颗糖吗？不，谢谢你。"
        },
        {
          "en": "What about a cake? Yes, please.",
          "cn": "来块蛋糕怎么样？好的，谢谢。"
        },
        {
          "en": "Would you like an ice cream? No, thank you.",
          "cn": "你想吃个冰淇淋吗？不，谢谢你。"
        }
      ]
    },
    "Unit 8 Happy New Year!": {
      "title": "Happy New Year!",
      "sentences": [
        {
          "en": "Happy New Year, Uncle John! Happy New Year!",
          "cn": "新年快乐，约翰叔叔！新年快乐。"
        },
        {
          "en": "This is for you, Helen. Thank you.",
          "cn": "这是给你的，海伦。谢谢。"
        },
        {
          "en": "What's this? It's a doll.",
          "cn": "这是什么？它是一个玩具娃娃。"
        },
        {
          "en": "This is for you, Mike. Thank you. It's a robot.",
          "cn": "这是给你的，迈克。谢谢。它是一个机器人。"
        },
        {
          "en": "This is for you, Tim. Thank you. It's a CD.",
          "cn": "这是给你的，蒂姆。谢谢。它是一个光盘。"
        }
      ]
    }
  },
  "G6_S1": {
    "Unit 1 The king's new clothes": {
      "title": "The king's new clothes",
      "sentences": [
        {
          "en": "Long long ago, there was a king.",
          "cn": "很久很久以前，有一位国王。"
        },
        {
          "en": "He liked new clothes.",
          "cn": "他喜欢新衣服。"
        },
        {
          "en": "One day, two men visited the king.",
          "cn": "一天，两个男人拜访了国王。"
        },
        {
          "en": "“My king, we can make new clothes for you.”",
          "cn": "“我的国王，我们可以为您制作新衣服。”"
        },
        {
          "en": "The king was happy.",
          "cn": "国王很高兴。"
        },
        {
          "en": "The two men showed the king his new clothes.",
          "cn": "这两个男人给国王展示了他的新衣服。"
        },
        {
          "en": "“My king, please try on these magic clothes.”",
          "cn": "“我的国王，请试穿这些神奇的衣服。”"
        },
        {
          "en": "“Clever people can see them. Foolish people can't see them.”",
          "cn": "“聪明的人能看见它们。愚蠢的人看不见它们。”"
        },
        {
          "en": "The king walked through the city in his new clothes.",
          "cn": "国王穿着他的新衣服走过城市。"
        },
        {
          "en": "There were a lot of people in the street.",
          "cn": "街上有很多人。"
        },
        {
          "en": "They looked at the king and shouted, “What beautiful clothes!”",
          "cn": "他们看着国王并大喊：“多么漂亮的衣服啊！”"
        },
        {
          "en": "A little boy pointed at the king and laughed, “Ha! Ha! The king isn't wearing any clothes!”",
          "cn": "一个小男孩指着国王并嘲笑道：“哈哈！国王没有穿任何衣服！”"
        }
      ]
    },
    "Unit 2 What a day!": {
      "title": "What a day!",
      "sentences": [
        {
          "en": "Sunday, 20th September",
          "cn": "9月20日，星期日"
        },
        {
          "en": "It was sunny in the morning.",
          "cn": "早上天气晴朗。"
        },
        {
          "en": "Su Hai, Mike, Liu Tao and I went to the park by bike.",
          "cn": "苏海、迈克、刘涛和我骑自行车去了公园。"
        },
        {
          "en": "There was a parrot show in the park.",
          "cn": "公园里有一场鹦鹉表演。"
        },
        {
          "en": "We saw some interesting parrots.",
          "cn": "我们看了一些有趣的鹦鹉。"
        },
        {
          "en": "Then, the weather became windy and cloudy.",
          "cn": "然后，天气变得有风且多云。"
        },
        {
          "en": "We flew kites high in the sky.",
          "cn": "我们把风筝放得高高的。"
        },
        {
          "en": "It was time for lunch.",
          "cn": "该吃午饭了。"
        },
        {
          "en": "We brought some dumplings, some bread and honey and some drinks.",
          "cn": "我们带了一些饺子、一些面包和蜂蜜，以及一些饮料。"
        },
        {
          "en": "We saw some ants on the bread and honey.",
          "cn": "我们在面包和蜂蜜上看到了一些蚂蚁。"
        },
        {
          "en": "There were some bees too.",
          "cn": "也有一些蜜蜂。"
        },
        {
          "en": "We could not eat our lunch!",
          "cn": "我们没能吃成午饭！"
        },
        {
          "en": "In the afternoon, there were black clouds in the sky.",
          "cn": "下午，天空中有乌云。"
        },
        {
          "en": "It rained.",
          "cn": "下雨了。"
        },
        {
          "en": "We were hungry and wet.",
          "cn": "我们又饿又湿。"
        },
        {
          "en": "What a day!",
          "cn": "多么糟糕的一天啊！"
        }
      ]
    },
    "Unit 3 Holiday fun": {
      "title": "Holiday fun",
      "sentences": [
        {
          "en": "Mike: Hello, Liu Tao! Where did you go for the holiday? I called you, but you weren’t at home.",
          "cn": "迈克：你好，刘涛！假期你到哪里去了？我给你打电话了，但你不在家。"
        },
        {
          "en": "Liu Tao: I went to Shanghai and visited my aunt.",
          "cn": "刘涛：我去了上海，拜访了我阿姨。"
        },
        {
          "en": "Mike: What did you do there?",
          "cn": "迈克：你在那里做了什么？"
        },
        {
          "en": "Liu Tao: We went to the Bund and visited the Shanghai Museum. I saw many interesting things. How was your holiday, Mike?",
          "cn": "刘涛：我们去了外滩并参观了上海博物馆。我看到了许多有趣的东西。迈克，你的假期过得怎么样？"
        },
        {
          "en": "Mike: It was great fun. Our family went to a farm near Star Lake. We picked some oranges and went fishing.",
          "cn": "迈克：非常有趣。我们全家去了星湖附近的一个农场。我们摘了一些橙子并去钓了鱼。"
        },
        {
          "en": "Liu Tao: Did you catch any fish?",
          "cn": "刘涛：你钓到鱼了吗？"
        },
        {
          "en": "Mike: Yes, I did. I caught a big fish!",
          "cn": "迈克：是的，我钓到了。我钓到了一条大鱼！"
        },
        {
          "en": "Liu Tao: That’s great. Why did you call me?",
          "cn": "刘涛：太棒了。你为什么给我打电话？"
        },
        {
          "en": "Mike: Because I wanted to give you the fish.",
          "cn": "迈克：因为我想把那条鱼送给你。"
        },
        {
          "en": "Liu Tao: Where’s the fish now?",
          "cn": "刘涛：那现在那条鱼在哪儿呢？"
        },
        {
          "en": "Mike: I ate it!",
          "cn": "迈克：我把它吃掉了！"
        }
      ]
    },
    "Unit 4 Then and now": {
      "title": "Then and now",
      "sentences": [
        {
          "en": "Six years ago, Mike could read and draw, but he could not write. Now he can do many things.",
          "cn": "六年前，迈克会读书和画画，但他不会写字。现在他能做很多事情。"
        },
        {
          "en": "Twenty years ago, Mr Brown wrote letters to his friends.",
          "cn": "二十年前，布朗先生给他的朋友们写信。"
        },
        {
          "en": "He used the telephone at home and in the office to call people.",
          "cn": "他在家里和办公室使用电话给人们打电话。"
        },
        {
          "en": "Now he has a mobile phone and he can call people anywhere. He also writes emails.",
          "cn": "现在他有一部手机，他可以随时随地给人们打电话。他还写电子邮件。"
        },
        {
          "en": "Thirty years ago, Mike's grandpa listened to the radio and read newspapers for news.",
          "cn": "三十年前，迈克的爷爷通过听广播和读报纸来获取新闻。"
        },
        {
          "en": "Now he can read and watch news on the Internet. He reads e-books too.",
          "cn": "现在他可以在网上阅读和观看新闻。他也阅读电子书。"
        },
        {
          "en": "Twenty years ago, Mrs Brown made friends at school. She bought things from shops.",
          "cn": "二十年前，布朗夫人在学校里交朋友。她从商店里买东西。"
        },
        {
          "en": "Now she has e-friends from all over the world. She does shopping on the Internet too.",
          "cn": "现在她有来自世界各地的网友。她也在网上购物。"
        }
      ]
    },
    "Unit 5 Signs": {
      "title": "Signs",
      "sentences": [
        {
          "en": "Mike, Helen and Tim are at a shopping centre.",
          "cn": "迈克、海伦和蒂姆在一个购物中心。"
        },
        {
          "en": "Mike: Be careful, Tim!",
          "cn": "迈克：当心，蒂姆！"
        },
        {
          "en": "Helen: Can you see the sign?",
          "cn": "海伦：你能看见那个标志吗？"
        },
        {
          "en": "Tim: What does it mean?",
          "cn": "蒂姆：它是什么意思？"
        },
        {
          "en": "Helen: It means the floor is wet.",
          "cn": "海伦：它的意思是地面是湿的。"
        },
        {
          "en": "Then, they see a juice shop.",
          "cn": "然后，他们看到了一家果汁店。"
        },
        {
          "en": "Helen: Do you want some juice?",
          "cn": "海伦：你们想喝点果汁吗？"
        },
        {
          "en": "Mike & Tim: Yes, please.",
          "cn": "迈克和蒂姆：是的，谢谢。"
        },
        {
          "en": "Tim: Here's a sign. What does it mean, Mike?",
          "cn": "蒂姆：这儿有一个标志。迈克，它是什么意思？"
        },
        {
          "en": "Mike: It means you can't litter here. No littering.",
          "cn": "迈克：它的意思是你不可以在这里扔垃圾。禁止扔垃圾。"
        },
        {
          "en": "There is a bookshop. Helen wants to go in.",
          "cn": "有一家书店。海伦想要进去。"
        },
        {
          "en": "Mike: You can't take your juice into the shop, Helen.",
          "cn": "迈克：你不能把你的果汁带进店里，海伦。"
        },
        {
          "en": "Tim: Can you see that sign? It means you can't eat or drink there.",
          "cn": "蒂姆：你能看见那个标志吗？它的意思是你不可以在那里吃东西或喝饮料。"
        },
        {
          "en": "Helen: I'm sorry.",
          "cn": "海伦：对不起。"
        },
        {
          "en": "Now they are eating some noodles in a restaurant.",
          "cn": "现在他们正在一家餐馆里吃面条。"
        },
        {
          "en": "Helen: Is someone smoking? I can smell it.",
          "cn": "海伦：有人在吸烟吗？我闻到味道了。"
        },
        {
          "en": "Tim: Please don't smoke here. Can you see that sign? It means you can't smoke here.",
          "cn": "蒂姆：请不要在这里吸烟。你能看见那个标志吗？它的意思是你不可以在这里吸烟。"
        },
        {
          "en": "Man: OK. Sorry!",
          "cn": "男士：好的。对不起！"
        }
      ]
    },
    "Unit 6 Keep our city clean": {
      "title": "Keep our city clean",
      "sentences": [
        {
          "en": "Miss Li: Look at these pictures of our city. Is our city clean?",
          "cn": "李老师：看这些我们城市的图片。我们的城市干净吗？"
        },
        {
          "en": "Students: No, it isn't.",
          "cn": "学生们：不，它不干净。"
        },
        {
          "en": "Miss Li: What makes our city dirty?",
          "cn": "李老师：什么使我们的城市变脏的？"
        },
        {
          "en": "Su Hai: Smoke from cars makes the air dirty.",
          "cn": "苏海：汽车排放的废气使空气变脏。"
        },
        {
          "en": "Wang Bing: Black smoke from factories makes the air dirty too.",
          "cn": "王兵：工厂排放的黑烟也使空气变脏。"
        },
        {
          "en": "Liu Tao: Rubbish makes the streets messy and dirty.",
          "cn": "刘涛：垃圾使街道变得又乱又脏。"
        },
        {
          "en": "Su Hai: The river is dirty. There's rubbish in the water and the fish are dead.",
          "cn": "苏海：这条河很脏。水里有垃圾，鱼都死了。"
        },
        {
          "en": "Miss Li: What can we do to keep our city clean?",
          "cn": "李老师：我们可以做些什么来保持我们的城市干净？"
        },
        {
          "en": "Su Hai: We can take the bus and the metro to school.",
          "cn": "苏海：我们可以坐公交车和地铁上学。"
        },
        {
          "en": "Nancy: We can walk to school too.",
          "cn": "南希：我们也可以步行上学。"
        },
        {
          "en": "Wang Bing: We can move some factories away from our city. We can put rubbish in the bin.",
          "cn": "王兵：我们可以把一些工厂搬离我们的城市。我们可以把垃圾放进垃圾桶里。"
        },
        {
          "en": "Liu Tao: We can plant more trees. They help keep the air clean.",
          "cn": "刘涛：我们可以种植更多的树木。它们有助于保持空气干净。"
        },
        {
          "en": "Miss Li: Your ideas are great. Well done, class!",
          "cn": "李老师：你们的主意太棒了。做得好，同学们！"
        }
      ]
    },
    "Unit 7 Protect the Earth": {
      "title": "Protect the Earth",
      "sentences": [
        {
          "en": "Save water.",
          "cn": "节约用水。"
        },
        {
          "en": "Water is useful. We drink water and use water to clean things every day.",
          "cn": "水是有用的。我们每天喝水并用水来清洗东西。"
        },
        {
          "en": "In many places, there is not much water. We should not waste water. We should reuse and save it.",
          "cn": "在许多地方，水并不多。我们不应该浪费水。我们应该循环使用并节约它。"
        },
        {
          "en": "Save energy.",
          "cn": "节约能源。"
        },
        {
          "en": "Most of our energy comes from coal and oil. There is not much coal or oil on Earth. We should save energy.",
          "cn": "我们的大部分能源来自煤炭和石油。地球上的煤炭和石油并不多。我们应该节约能源。"
        },
        {
          "en": "We should not drive so much because cars use a lot of energy.",
          "cn": "我们不应该开那么多车，因为汽车消耗大量能源。"
        },
        {
          "en": "Save trees.",
          "cn": "保护树木。"
        },
        {
          "en": "Wood comes from trees.",
          "cn": "木头来自树木。"
        },
        {
          "en": "We use wood to make tables, chairs and many other things.",
          "cn": "我们用木头制作桌子、椅子和许多其他东西。"
        },
        {
          "en": "We should not cut down too many trees because trees help keep the air clean.",
          "cn": "我们不应该砍伐太多的树木，因为树木有助于保持空气干净。"
        },
        {
          "en": "Don't use too much plastic.",
          "cn": "不要使用太多的塑料制品。"
        },
        {
          "en": "We use plastic to make bags and bottles, but too much plastic is bad for the Earth.",
          "cn": "我们用塑料制作袋子和瓶子，但是太多的塑料对地球有害。"
        },
        {
          "en": "We should not use too many plastic bags or bottles. We should use paper bags and glass bottles.",
          "cn": "我们不应该使用太多的塑料袋或塑料瓶。我们应该使用纸袋和玻璃瓶。"
        }
      ]
    },
    "Unit 8 Chinese New Year": {
      "title": "Chinese New Year",
      "sentences": [
        {
          "en": "Dear Su Hai,",
          "cn": "亲爱的苏海："
        },
        {
          "en": "How are you? It’s going to be Chinese New Year next week. I’m very excited!",
          "cn": "你好吗？下周就是春节了。我非常激动！"
        },
        {
          "en": "Tomorrow, my family and I are going to buy some new clothes and food.",
          "cn": "明天，我和我的家人打算去买一些新衣服和食物。"
        },
        {
          "en": "Then, in the evening, we’re going to make some cakes and tangyuan.",
          "cn": "然后，在晚上，我们打算做一些糕点和汤圆。"
        },
        {
          "en": "On Chinese New Year’s Eve, we’re going to have dinner with my grandparents, my aunt and uncle and my cousin.",
          "cn": "除夕夜，我们打算和我的爷爷奶奶、叔叔阿姨以及我的堂兄弟姐妹一起吃年夜饭。"
        },
        {
          "en": "Then, we’re going to buy some flowers.",
          "cn": "然后，我们打算去买一些花。"
        },
        {
          "en": "On Chinese New Year’s Day, my parents are going to give me red packets.",
          "cn": "大年初一，我的父母打算给我红包。"
        },
        {
          "en": "Then, we’re going to watch a lion dance in the afternoon.",
          "cn": "然后，我们打算在下午观看舞狮表演。"
        },
        {
          "en": "On the second day of Chinese New Year, we’re going to watch fireworks in the evening.",
          "cn": "大年初二，我们打算在晚上观看烟花表演。"
        },
        {
          "en": "What are you going to do at Chinese New Year?",
          "cn": "在春节你打算做什么？"
        },
        {
          "en": "Love, Anna",
          "cn": "爱你的，安娜"
        }
      ]
    }
  },
  "G1_S1": {
    "Unit 1 Hello": {
      "title": "Hello",
      "sentences": [
        {
          "en": "Hello, I'm mum.",
          "cn": "你好，我是妈妈。"
        },
        {
          "en": "Hello, I'm dad.",
          "cn": "你好，我是爸爸。"
        },
        {
          "en": "This is Mr Green.",
          "cn": "这是格林先生。"
        },
        {
          "en": "Hi, Mr Green. Goodbye!",
          "cn": "你好，格林先生。再见！"
        }
      ]
    },
    "Unit 2 Good morning": {
      "title": "Good morning",
      "sentences": [
        {
          "en": "Good morning, Miss Li.",
          "cn": "早上好，李老师。"
        },
        {
          "en": "Good morning, class.",
          "cn": "早上好，同学们。"
        },
        {
          "en": "Good afternoon, Mr Green.",
          "cn": "下午好，格林先生。"
        },
        {
          "en": "Woof! Woof!",
          "cn": "汪！汪！"
        }
      ]
    },
    "Unit 3 This is my mum": {
      "title": "This is my mum",
      "sentences": [
        {
          "en": "This is my mum.",
          "cn": "这是我的妈妈。"
        },
        {
          "en": "This is my dad.",
          "cn": "这是我的爸爸。"
        },
        {
          "en": "This is Miss Li.",
          "cn": "这是李老师。"
        },
        {
          "en": "Hello, puppy!",
          "cn": "你好，小狗！"
        }
      ]
    },
    "Unit 4 Good night": {
      "title": "Good night",
      "sentences": [
        {
          "en": "Good evening, dad.",
          "cn": "晚上好，爸爸。"
        },
        {
          "en": "Is this a teddy?",
          "cn": "这是一个泰迪熊吗？"
        },
        {
          "en": "Yes, it is.",
          "cn": "是的，它是。"
        },
        {
          "en": "Good night, mum.",
          "cn": "晚安，妈妈。"
        }
      ]
    },
    "Unit 5 I like bananas": {
      "title": "I like bananas",
      "sentences": [
        {
          "en": "Look! Banana, cherry and peach.",
          "cn": "看！香蕉、樱桃和桃子。"
        },
        {
          "en": "Banana, please.",
          "cn": "请给我香蕉。"
        },
        {
          "en": "OK. Here you are.",
          "cn": "好的。给你。"
        },
        {
          "en": "Thank you. Great!",
          "cn": "谢谢你。太棒了！"
        }
      ]
    },
    "Unit 6 Look at my balloon": {
      "title": "Look at my balloon",
      "sentences": [
        {
          "en": "Look at my balloon.",
          "cn": "看我的气球。"
        },
        {
          "en": "Oh, it's nice. It is red.",
          "cn": "哦，它很漂亮。它是红色的。"
        },
        {
          "en": "It's blue and green.",
          "cn": "它是蓝色和绿色的。"
        },
        {
          "en": "Wow, look at my pink balloon!",
          "cn": "哇，看我的粉色气球！"
        }
      ]
    },
    "Unit 7 I can sing": {
      "title": "I can sing",
      "sentences": [
        {
          "en": "I can sing. Tra-la-la.",
          "cn": "我会唱歌。啦啦啦。"
        },
        {
          "en": "I can dance.",
          "cn": "我会跳舞。"
        },
        {
          "en": "Look at the robot. It can cook.",
          "cn": "看这个机器人。它会做饭。"
        },
        {
          "en": "I can draw a robot.",
          "cn": "我会画一个机器人。"
        }
      ]
    },
    "Unit 8 Put on your coat": {
      "title": "Put on your coat",
      "sentences": [
        {
          "en": "It is cold today.",
          "cn": "今天很冷。"
        },
        {
          "en": "Put on your coat.",
          "cn": "穿上你的外套。"
        },
        {
          "en": "Put on your scarf and beanie.",
          "cn": "戴上你的围巾和帽子。"
        },
        {
          "en": "Look at my new sweater.",
          "cn": "看我的新毛衣。"
        }
      ]
    }
  },
  "G1_S2": {
    "Unit 1 In the classroom": {
      "title": "In the classroom",
      "sentences": [
        {
          "en": "Let's count the rulers.",
          "cn": "让我们来数数直尺。"
        },
        {
          "en": "One, two, three, four, five.",
          "cn": "一，二，三，四，五。"
        },
        {
          "en": "Look! A yellow rubber.",
          "cn": "看！一块黄色的橡皮。"
        },
        {
          "en": "Cool!",
          "cn": "酷！"
        }
      ]
    },
    "Unit 2 In the library": {
      "title": "In the library",
      "sentences": [
        {
          "en": "Is this your pencil?",
          "cn": "这是你的铅笔吗？"
        },
        {
          "en": "No. It's a book.",
          "cn": "不。这是一本书。"
        },
        {
          "en": "Ouch! My book!",
          "cn": "哎哟！我的书！"
        },
        {
          "en": "I'm sorry. That's OK.",
          "cn": "对不起。没关系。"
        }
      ]
    },
    "Unit 3 I like carrots": {
      "title": "I like carrots",
      "sentences": [
        {
          "en": "How many marbles?",
          "cn": "有几个玻璃球？"
        },
        {
          "en": "Three marbles.",
          "cn": "三个玻璃球。"
        },
        {
          "en": "I like carrots and onions.",
          "cn": "我喜欢胡萝卜和洋葱。"
        },
        {
          "en": "Would you like some peas? Yes, please.",
          "cn": "你想要点戏豆吗？好的，谢谢。"
        }
      ]
    },
    "Unit 4 Spring": {
      "title": "Spring",
      "sentences": [
        {
          "en": "Spring is beautiful.",
          "cn": "春天很美丽。"
        },
        {
          "en": "Look at the green tree and flowers.",
          "cn": "看绿色的树和花朵。"
        },
        {
          "en": "I can see a bird.",
          "cn": "我能看见一只鸟。"
        },
        {
          "en": "Let's fly a colourful kite.",
          "cn": "让我们放一个五彩缤纷的风筝吧。"
        }
      ]
    },
    "Unit 5 Insects": {
      "title": "Insects",
      "sentences": [
        {
          "en": "What's this?",
          "cn": "这是什么？"
        },
        {
          "en": "It is a ladybird. It is cute.",
          "cn": "它是一只瓢虫。它很可爱。"
        },
        {
          "en": "Look at the butterfly and dragonfly.",
          "cn": "看蝴蝶和蜻蜓。"
        },
        {
          "en": "I can hear a cicada.",
          "cn": "我能听到一只蝉叫。"
        }
      ]
    },
    "Unit 6 Let's play": {
      "title": "Let's play",
      "sentences": [
        {
          "en": "Are you ready? Let's play.",
          "cn": "准备好了吗？我们玩吧。"
        },
        {
          "en": "I have a yo-yo and some stickers.",
          "cn": "我有一个溜溜球和一些贴纸。"
        },
        {
          "en": "Let's run and play games.",
          "cn": "让我们跑起来玩游戏吧。"
        }
      ]
    },
    "Unit 7 Action": {
      "title": "Action",
      "sentences": [
        {
          "en": "Look! I can jump and hop.",
          "cn": "看！我会跳，也会单脚跳。"
        },
        {
          "en": "Let's walk together.",
          "cn": "让我们一起走走吧。"
        },
        {
          "en": "We are so happy!",
          "cn": "我们太高兴了！"
        }
      ]
    },
    "Unit 8 Animals on the farm": {
      "title": "Animals on the farm",
      "sentences": [
        {
          "en": "What's that?",
          "cn": "那是什么？"
        },
        {
          "en": "It is a pig. Baa! It is a lamb.",
          "cn": "它是一只猪。咩！它是一只小羊。"
        },
        {
          "en": "Look at the duck and cow on the farm.",
          "cn": "看农场里的鸭子和奶牛。"
        },
        {
          "en": "My hankie is in the bottle.",
          "cn": "我的手帕在瓶子里。"
        }
      ]
    }
  },
  "G2_S1": {
    "Unit 1 She's my aunt": {
      "title": "She's my aunt",
      "sentences": [
        {
          "en": "This is my cousin. She's cute.",
          "cn": "这是我的表姐（妹）。她很可爱。"
        },
        {
          "en": "This is my aunt. She is beautiful.",
          "cn": "这是我的阿姨（姑姑）。她很漂亮。"
        },
        {
          "en": "This is my uncle. He is tall.",
          "cn": "这是我的叔叔（舅舅）。他很高。"
        },
        {
          "en": "Is this your uncle? Yes, he is.",
          "cn": "这是你的叔叔吗？是的，他是。"
        },
        {
          "en": "Is this your mum? No, she isn't. She's my aunt.",
          "cn": "这是你的妈妈吗？不，她不是。她是我的阿姨。"
        }
      ]
    },
    "Unit 2 I have a rabbit": {
      "title": "I have a rabbit",
      "sentences": [
        {
          "en": "I have a rabbit. It's white.",
          "cn": "我有一只兔子。它是白色的。"
        },
        {
          "en": "I have a dog. It's big and brown.",
          "cn": "我有一只狗。它又大又棕色。"
        },
        {
          "en": "I have a hamster. It's small.",
          "cn": "我有一只仓鼠。它很小。"
        },
        {
          "en": "Do you have a rabbit? Yes, I do.",
          "cn": "你有一只兔子吗？是的，我有。"
        }
      ]
    },
    "Unit 3 It has a short tail": {
      "title": "It has a short tail",
      "sentences": [
        {
          "en": "Look at the monkey. It has a long tail.",
          "cn": "看那只猴子。它有一条长尾巴。"
        },
        {
          "en": "Look at the bear. It has a short tail.",
          "cn": "看那只熊。它有一条短尾巴。"
        },
        {
          "en": "It has a long neck. It's a giraffe.",
          "cn": "它有一条长脖子。它是一只长颈鹿。"
        },
        {
          "en": "Look at the tiger. It has big eyes.",
          "cn": "看那只老虎。它有大眼睛。"
        }
      ]
    },
    "Unit 4 Autumn": {
      "title": "Autumn",
      "sentences": [
        {
          "en": "Autumn is cool. I like autumn.",
          "cn": "秋天很凉爽。我喜欢秋天。"
        },
        {
          "en": "Look at these apples. They are red.",
          "cn": "看这些苹果。它们是红色的。"
        },
        {
          "en": "Look at those pears. They are yellow.",
          "cn": "看那些梨。它们是黄色的。"
        },
        {
          "en": "These pumpkins are so big.",
          "cn": "这些南瓜真大。"
        }
      ]
    },
    "Unit 5 Have some juice, please!": {
      "title": "Have some juice, please!",
      "sentences": [
        {
          "en": "Have some juice, please! Thank you.",
          "cn": "请喝些果汁！谢谢。"
        },
        {
          "en": "Have a sandwich, please! Mmm, it's yummy.",
          "cn": "请吃个三明治！恩，美味。"
        },
        {
          "en": "Would you like a cupcake? Yes, please.",
          "cn": "你想吃个纸杯蛋糕吗？好的，谢谢。"
        },
        {
          "en": "Have some yogurt, Helen. No, thanks.",
          "cn": "海伦，喝点酸奶吧。不，谢谢。"
        }
      ]
    },
    "Unit 6 We like our school": {
      "title": "We like our school",
      "sentences": [
        {
          "en": "We like our school.",
          "cn": "我们喜欢我们的学校。"
        },
        {
          "en": "We go to school every day.",
          "cn": "我们每天去上学。"
        },
        {
          "en": "We read and write in the classroom.",
          "cn": "我们在教室里读和写。"
        },
        {
          "en": "We play games and have fun on the playground.",
          "cn": "我们在操场上玩游戏，玩得很开心。"
        }
      ]
    },
    "Unit 7 Let's clean up!": {
      "title": "Let's clean up!",
      "sentences": [
        {
          "en": "Let's clean up the classroom.",
          "cn": "让我们把教室打扫干净吧。"
        },
        {
          "en": "Clean the desk and the chair, please.",
          "cn": "请擦桌子和椅子。"
        },
        {
          "en": "Clean the door and the window, please.",
          "cn": "请擦门和窗户。"
        },
        {
          "en": "I clean the table. How about you?",
          "cn": "我擦桌子。你呢？"
        }
      ]
    },
    "Unit 8 My dad is a doctor": {
      "title": "My dad is a doctor",
      "sentences": [
        {
          "en": "My dad is a doctor.",
          "cn": "我爸爸是一名医生。"
        },
        {
          "en": "My mum is a teacher.",
          "cn": "我妈妈是一名教师。"
        },
        {
          "en": "He is a farmer. He has a big farm.",
          "cn": "他是一名农民。他有一个大农场。"
        },
        {
          "en": "She is a nurse. She is very kind.",
          "cn": "她是一名护士。她非常温和/善良。"
        }
      ]
    }
  },
  "G2_S2": {
    "Unit 1 What can you see?": {
      "title": "What can you see?",
      "sentences": [
        {
          "en": "What can you see in the park?",
          "cn": "在公园里你能看到什么？"
        },
        {
          "en": "I can see a green tree and a beautiful flower.",
          "cn": "我能看到一棵绿树和一朵美丽的花。"
        },
        {
          "en": "Look at the bird and butterfly. They are nice.",
          "cn": "看小鸟和蝴蝶。它们很漂亮。"
        }
      ]
    },
    "Unit 2 I can swim": {
      "title": "I can swim",
      "sentences": [
        {
          "en": "I can swim and skate. I like sports.",
          "cn": "我会游泳和滑冰。我喜欢运动。"
        },
        {
          "en": "Can you fly like a bird? No, I can't.",
          "cn": "你能像鸟一样飞吗？不，我不能。"
        },
        {
          "en": "I can jump and run very well.",
          "cn": "我会跳，也跑得很好。"
        }
      ]
    },
    "Unit 3 I like my school": {
      "title": "I like my school",
      "sentences": [
        {
          "en": "I like my school and my friends.",
          "cn": "我喜欢我的学校和我的朋友。"
        },
        {
          "en": "This is my classroom and that is the library.",
          "cn": "这是我的教室，那是图书馆。"
        },
        {
          "en": "Let's play on the playground with our teacher.",
          "cn": "让我们和老师一起在操场上玩吧。"
        }
      ]
    },
    "Unit 4 How is the weather?": {
      "title": "How is the weather?",
      "sentences": [
        {
          "en": "How is the weather today? It is sunny.",
          "cn": "今天天气怎么样？今天是晴天。"
        },
        {
          "en": "It is rainy and windy. I feel cold.",
          "cn": "今天又下雨又有风。我感觉冷。"
        },
        {
          "en": "Look! It is snowy and cloudy. Let's make a snowman.",
          "cn": "看！下雪了，而且多云。我们来堆雪人吧。"
        }
      ]
    },
    "Unit 5 A busy day": {
      "title": "A busy day",
      "sentences": [
        {
          "en": "I have a busy day.",
          "cn": "我度过了忙碌的一天。"
        },
        {
          "en": "I get up in the morning and go to school.",
          "cn": "我早上起床去上学。"
        },
        {
          "en": "In the afternoon I have lunch, and sleep at night.",
          "cn": "我下午吃午饭，晚上睡觉。"
        }
      ]
    },
    "Unit 6 I like my town": {
      "title": "I like my town",
      "sentences": [
        {
          "en": "I live in a clean town. I love it.",
          "cn": "我住在一个干净的城镇。我爱它。"
        },
        {
          "en": "There is a park, a shop and a school.",
          "cn": "这有一个公园、一个商店和一个学校。"
        },
        {
          "en": "Look at the zoo and the street.",
          "cn": "看这个动物园和街道。"
        }
      ]
    },
    "Unit 7 At the zoo": {
      "title": "At the zoo",
      "sentences": [
        {
          "en": "We are at the zoo now. Look at the animals.",
          "cn": "我们现在在动物园。看这些动物。"
        },
        {
          "en": "I can see a tiger, a lion and a bear.",
          "cn": "我能看到一只老虎、一只狮子和一只熊。"
        },
        {
          "en": "The panda is cute. The elephant is very tall.",
          "cn": "熊猫很可爱。大象非常高。"
        }
      ]
    },
    "Unit 8 What's the time?": {
      "title": "What's the time?",
      "sentences": [
        {
          "en": "What is the time? It is eight o'clock.",
          "cn": "几点了？现在是八点整。"
        },
        {
          "en": "Look at the clock on the wall. It is twelve.",
          "cn": "看墙上的钟。现在是十二点。"
        }
      ]
    }
  },
  "G3_S2": {
    "Unit 1 In class": {
      "title": "In class",
      "sentences": [
        {
          "en": "Stand up, please. Good morning, class.",
          "cn": "请起立。早上好，同学们。"
        },
        {
          "en": "Sit down, please. Open your books.",
          "cn": "请坐。打开你们的书。"
        },
        {
          "en": "Mike, close the window and open the door.",
          "cn": "迈克，关上窗户，打开门。"
        },
        {
          "en": "Look at the blackboard, please.",
          "cn": "请看黑板。"
        }
      ]
    },
    "Unit 2 In the library": {
      "title": "In the library",
      "sentences": [
        {
          "en": "Shh! Don't shout or talk in the library.",
          "cn": "嘘！不要在图书馆大喊大叫或说话。"
        },
        {
          "en": "Don't run or sleep here.",
          "cn": "不要在这里奔跑或睡觉。"
        },
        {
          "en": "Would you like to eat and drink? No, thank you.",
          "cn": "你想吃点喝点吗？不，谢谢。"
        }
      ]
    },
    "Unit 3 Is this your pencil?": {
      "title": "Is this your pencil?",
      "sentences": [
        {
          "en": "Is this your pencil? No, it's my pen.",
          "cn": "这是你的铅笔吗？不，这是我的钢笔。"
        },
        {
          "en": "Where is my rubber? It's in the pencilcase.",
          "cn": "我的橡皮在哪里？它在铅笔盒里。"
        },
        {
          "en": "Look at my new schoolbag and crayons.",
          "cn": "看我的新书包和蜡笔。"
        }
      ]
    },
    "Unit 4 Where's the bird?": {
      "title": "Where's the bird?",
      "sentences": [
        {
          "en": "Where is the bird? It's under the desk.",
          "cn": "鸟在哪里？它在课桌下面。"
        },
        {
          "en": "Is it on the chair? No, it is behind the chair.",
          "cn": "它在椅子上吗？不，它在椅子后面。"
        },
        {
          "en": "Look! It is in the box near the window.",
          "cn": "看！它在窗户附近的盒子里。"
        }
      ]
    },
    "Unit 5 How old are you?": {
      "title": "How old are you?",
      "sentences": [
        {
          "en": "How old are you? I'm nine.",
          "cn": "你多大了？我九岁了。"
        },
        {
          "en": "I'm ten. Look at the candles on the cake.",
          "cn": "我十岁了。看蛋糕上的蜡烛。"
        },
        {
          "en": "Let's count. One, two, three... seven, eight, nine, ten.",
          "cn": "让我们数一数。一、二、三……七、八、九、十。"
        }
      ]
    },
    "Unit 6 What time is it?": {
      "title": "What time is it?",
      "sentences": [
        {
          "en": "Wake up, Taotao! What time is it? It's seven.",
          "cn": "醒醒，涛涛！几点了？七点了。"
        },
        {
          "en": "It's time for breakfast. Hurry up!",
          "cn": "该吃早饭了。快点！"
        },
        {
          "en": "It's twelve o'clock. Let's have lunch.",
          "cn": "十二点了。让我们吃午饭吧。"
        },
        {
          "en": "Time for dinner and bed. Good night.",
          "cn": "该吃晚饭和睡觉了。晚安。"
        }
      ]
    },
    "Unit 7 On the farm": {
      "title": "On the farm",
      "sentences": [
        {
          "en": "Welcome to my farm.",
          "cn": "欢迎来到我的农场。"
        },
        {
          "en": "What are they? They are pigs and cows.",
          "cn": "它们是什么？它们是猪和奶牛。"
        },
        {
          "en": "Are those ducks? Yes, they are.",
          "cn": "那些是鸭子吗？是的，它们是。"
        },
        {
          "en": "Look at these pears and apples.",
          "cn": "看这些梨和苹果。"
        }
      ]
    },
    "Unit 8 We're twins!": {
      "title": "We're twins!",
      "sentences": [
        {
          "en": "What is his name? His name is Tim.",
          "cn": "他的名字是什么？他的名字叫蒂姆。"
        },
        {
          "en": "Who is that girl? She is a baby.",
          "cn": "那个女孩是谁？她是个婴儿。"
        }
      ]
    }
  },
  "G4_S1": {
    "Unit 1 I like dogs": {
      "title": "I like dogs",
      "sentences": [
        {
          "en": "Look at these animals.",
          "cn": "看这些动物。"
        },
        {
          "en": "I like dogs. They are cute.",
          "cn": "我喜欢狗。它们很可爱。"
        },
        {
          "en": "Look at this cat. It is fat.",
          "cn": "看这只猫。它胖胖的。"
        },
        {
          "en": "I like elephants and lions.",
          "cn": "我喜欢大象和狮子。"
        },
        {
          "en": "Don't like tigers. They are scary.",
          "cn": "不喜欢老虎。它们很可怕。"
        }
      ]
    },
    "Unit 2 Let's make a fruit salad": {
      "title": "Let's make a fruit salad",
      "sentences": [
        {
          "en": "Let's make a fruit salad.",
          "cn": "让我们来做水果沙拉吧。"
        },
        {
          "en": "I have a pineapple and a mango.",
          "cn": "我有一个菠萝和一个芒果。"
        },
        {
          "en": "Do you have any grapes or bananas?",
          "cn": "你有葡萄或香蕉吗？"
        },
        {
          "en": "Yes, I have some grapes. Here you are.",
          "cn": "是的，我有一些葡萄。给你。"
        },
        {
          "en": "Thank you! Our fruit salad is nice.",
          "cn": "谢谢你！我们的水果沙拉很棒。"
        }
      ]
    },
    "Unit 3 How many?": {
      "title": "How many?",
      "sentences": [
        {
          "en": "Look! I have many stickers.",
          "cn": "看！我有许多贴纸。"
        },
        {
          "en": "How many stickers do you have?",
          "cn": "你有多少张贴纸？"
        },
        {
          "en": "Let's count. Thirteen, fourteen, fifteen... fifteen stickers.",
          "cn": "让我们数数。十三、十四、十五……十五张贴纸。"
        },
        {
          "en": "I have twenty. What a big number!",
          "cn": "我有二十张。真是一个大数字！"
        }
      ]
    },
    "Unit 4 I can play basketball": {
      "title": "I can play basketball",
      "sentences": [
        {
          "en": "Can you play basketball?",
          "cn": "你会打篮球吗？"
        },
        {
          "en": "Yes, I can play basketball very well.",
          "cn": "是的，我篮球打得很好。"
        },
        {
          "en": "Can you play football? No, I can't.",
          "cn": "你会踢足球吗？不，我不会。"
        },
        {
          "en": "I can't fly, but I can jump and run. Don't be sad.",
          "cn": "我不会飞，但我会跳和跑。不要难过。"
        }
      ]
    },
    "Unit 5 Our new home": {
      "title": "Our new home",
      "sentences": [
        {
          "en": "Welcome to our new home.",
          "cn": "欢迎来到我们的新家。"
        },
        {
          "en": "This is the bedroom and that is the living room.",
          "cn": "这是卧室，那是客厅。"
        },
        {
          "en": "Where is the kitchen? It's next to the bathroom.",
          "cn": "厨房在哪里？它在浴室旁边。"
        },
        {
          "en": "Where is my phone? It's on the table near the sofa.",
          "cn": "我的电话在哪里？它在沙发旁的桌子上。"
        }
      ]
    },
    "Unit 6 At the snack bar": {
      "title": "At the snack bar",
      "sentences": [
        {
          "en": "What would you like at the snack bar?",
          "cn": "在小吃店你想吃点什么？"
        },
        {
          "en": "I'd like a hamburger and some chips.",
          "cn": "我想要一个汉堡包和一些薯条。"
        },
        {
          "en": "Would you like some noodles or a sandwich?",
          "cn": "你想要面条还是三明治？"
        },
        {
          "en": "I want a glass of milk and some tea, please.",
          "cn": "请给我一杯牛奶和一些茶。"
        }
      ]
    },
    "Unit 7 How much is it?": {
      "title": "How much is it?",
      "sentences": [
        {
          "en": "How much are these shoes?",
          "cn": "这些鞋子多少钱？"
        },
        {
          "en": "They are ninety yuan. They are cheap.",
          "cn": "它们九十元。挺便宜的。"
        },
        {
          "en": "How much is this umbrella? It is one hundred yuan.",
          "cn": "这把雨伞多少钱？它一百元。"
        },
        {
          "en": "Oh, that is expensive. I like this fan.",
          "cn": "噢，那太贵了。我喜欢这把扇子。"
        }
      ]
    },
    "Unit 8 Dolls": {
      "title": "Dolls",
      "sentences": [
        {
          "en": "Look at my doll. She is beautiful.",
          "cn": "看我的洋娃娃。她很漂亮。"
        },
        {
          "en": "Her hair is long. Her eyes and ears are big.",
          "cn": "她的头发很长。她的眼睛和耳朵很大。"
        },
        {
          "en": "She has a small nose and mouth.",
          "cn": "她有一个小鼻子和嘴巴。"
        },
        {
          "en": "Her head is big, but her hands and feet are small.",
          "cn": "她的头很大，但是她的手和脚很小。"
        }
      ]
    }
  },
  "G4_S2": {
    "Unit 1 Our school subjects": {
      "title": "Our school subjects",
      "sentences": [
        {
          "en": "What subjects do we have today?",
          "cn": "今天我们有什么科目？"
        },
        {
          "en": "We have Chinese, Maths and English.",
          "cn": "我们有语文、数学和英语。"
        },
        {
          "en": "I like PE and Music. What about you?",
          "cn": "我喜欢体育和音乐。你呢？"
        },
        {
          "en": "Look at our school timetable. We have Art today.",
          "cn": "看我们的学校课程表。今天我们有美术课。"
        }
      ]
    },
    "Unit 2 After school": {
      "title": "After school",
      "sentences": [
        {
          "en": "What day is today? It is Wednesday.",
          "cn": "今天星期几？今天星期三。"
        },
        {
          "en": "Do you have school on Saturday? No, we don't.",
          "cn": "你星期六上学吗？不，我们不上学。"
        },
        {
          "en": "We have a table tennis match on Friday afternoon.",
          "cn": "我们星期五下午有一场乒乓球比赛。"
        },
        {
          "en": "Let's play table tennis after school on Monday.",
          "cn": "让我们周一下学后打乒乓球吧。"
        }
      ]
    },
    "Unit 3 My day": {
      "title": "My day",
      "sentences": [
        {
          "en": "I usually get up at six in the morning.",
          "cn": "我通常在早上六点起床。"
        },
        {
          "en": "I go to school and have lunch at twelve.",
          "cn": "我上学，十二点吃午饭。"
        },
        {
          "en": "I go home, do my homework and watch TV.",
          "cn": "我回家，做家庭作业，然后看电视。"
        },
        {
          "en": "I go to bed at nine at night.",
          "cn": "I go to bed at nine at night."
        }
      ]
    },
    "Unit 4 Drawing in the park": {
      "title": "Drawing in the park",
      "sentences": [
        {
          "en": "Let's draw in the park today.",
          "cn": "让我们今天在公园里画画吧。"
        },
        {
          "en": "Look at the river and the red flowers on the hill.",
          "cn": "看河水和小山上的红花。"
        },
        {
          "en": "Can you draw a boat on the lake?",
          "cn": "你能在湖上画一只小船吗？"
        },
        {
          "en": "Yes, I can. Look! The birds are flying in the sky.",
          "cn": "是的，我会。看！鸟儿正在天空中飞翔。"
        }
      ]
    },
    "Unit 5 Seasons": {
      "title": "Seasons",
      "sentences": [
        {
          "en": "We have four seasons. Spring, summer, autumn and winter.",
          "cn": "我们有四个季节。春、夏、秋、冬。"
        },
        {
          "en": "Spring is warm. We can go for a picnic.",
          "cn": "春天很暖和。我们可以去野餐。"
        },
        {
          "en": "Summer is hot. Autumn is cool.",
          "cn": "夏天很热。秋天很凉爽。"
        },
        {
          "en": "Winter is cold. We can skate and play.",
          "cn": "冬天很冷。我们可以滑冰和玩耍。"
        }
      ]
    },
    "Unit 6 Whose dress is this?": {
      "title": "Whose dress is this?",
      "sentences": [
        {
          "en": "Whose dress is this? It's my sister's dress.",
          "cn": "这是谁的连衣裙？这是我妹妹的。"
        },
        {
          "en": "Whose trousers and gloves are those?",
          "cn": "那些是谁的裤子和手套？"
        },
        {
          "en": "They are mine. What about this coat and sweater?",
          "cn": "它们是我的。这件外套和毛衣呢？"
        },
        {
          "en": "They are yours.",
          "cn": "它们是你的。"
        }
      ]
    },
    "Unit 7 What's the matter?": {
      "title": "What's the matter?",
      "sentences": [
        {
          "en": "What's the matter? Are you tired?",
          "cn": "怎么了？你累了吗？"
        },
        {
          "en": "No, I'm thirsty and hungry.",
          "cn": "没有，我又渴又饿。"
        },
        {
          "en": "Here is some water and cake for you.",
          "cn": "这有些水 and 蛋糕给你。"
        },
        {
          "en": "Are you ill? Yes, I'm sad.",
          "cn": "你病了吗？是的，我很伤心。"
        }
      ]
    },
    "Unit 8 How are you?": {
      "title": "How are you?",
      "sentences": [
        {
          "en": "Hello, how are you? I'm not fine.",
          "cn": "你好，你好吗？我不太好。"
        },
        {
          "en": "I have a cough and a fever.",
          "cn": "我咳嗽而且发烧。"
        },
        {
          "en": "Do you have a headache? Yes.",
          "cn": "你头疼吗？是的。"
        },
        {
          "en": "Let's see the doctor. I can hear you on the phone.",
          "cn": "让我们去看医生。我能在电话里听到你说话。"
        }
      ]
    }
  },
  "G5_S1": {
    "Unit 1 Goldilocks and the three bears": {
      "title": "Goldilocks and the three bears",
      "sentences": [
        {
          "en": "There is a house in the forest.",
          "cn": "森林里有一座房子。"
        },
        {
          "en": "Goldilocks is in the house.",
          "cn": "金发女孩在房子里。"
        },
        {
          "en": "She eats the bear's soup. It is just right.",
          "cn": "她吃了熊的汤。正合适。"
        },
        {
          "en": "She sleeps in the bed. It is very soft.",
          "cn": "她在床上睡觉。床很软。"
        },
        {
          "en": "The three bears come home. Goldilocks is afraid.",
          "cn": "三只熊回家了。金发女孩很害怕。"
        }
      ]
    },
    "Unit 2 A new student": {
      "title": "A new student",
      "sentences": [
        {
          "en": "This is our new student, Nancy.",
          "cn": "这是我们的新学生，南希。"
        },
        {
          "en": "Our classroom is on the second floor.",
          "cn": "我们的教室在二楼。"
        },
        {
          "en": "There is a computer room on the third floor.",
          "cn": "三楼有一个计算机室。"
        },
        {
          "en": "Let's play on the swing. Push me, Nancy!",
          "cn": "我们玩秋千吧。推我，南希！"
        }
      ]
    },
    "Unit 3 Our animal friends": {
      "title": "Our animal friends",
      "sentences": [
        {
          "en": "I have two animal friends.",
          "cn": "我有两个动物朋友。"
        },
        {
          "en": "One is a rabbit. It has long ears and a short tail.",
          "cn": "一个是兔子。它有长耳朵和短尾巴。"
        },
        {
          "en": "The other has big eyes, but no arms or legs.",
          "cn": "另一个有大眼睛，但是没有手臂或腿。"
        },
        {
          "en": "Give it some fish food. It can swim.",
          "cn": "给它一些鱼食。它会游泳。"
        }
      ]
    },
    "Unit 4 Hobbies": {
      "title": "Hobbies",
      "sentences": [
        {
          "en": "What's your hobby?",
          "cn": "你的兴趣爱好是什么？"
        },
        {
          "en": "I like to read and write stories.",
          "cn": "我喜欢阅读和写故事。"
        },
        {
          "en": "We like to collect stickers and play football.",
          "cn": "我们喜欢收集贴纸和踢足球。"
        },
        {
          "en": "He likes to dance, sing and draw pictures.",
          "cn": "他喜欢跳舞、唱歌和画画。"
        }
      ]
    },
    "Unit 5 What do they do?": {
      "title": "What do they do?",
      "sentences": [
        {
          "en": "My father is a writer. My mother is a doctor.",
          "cn": "我的爸爸是作家。我的妈妈是医生。"
        },
        {
          "en": "Is your brother a nurse? No, he is a cook.",
          "cn": "你的哥哥是护士吗？不，他是厨师。"
        },
        {
          "en": "He is a driver. He drives a big bus.",
          "cn": "他是司机。他开一辆大公共汽车。"
        },
        {
          "en": "My uncle is a farmer. He works on the farm.",
          "cn": "我的叔叔是农民。他在农场工作。"
        }
      ]
    },
    "Unit 6 My e-friend": {
      "title": "My e-friend",
      "sentences": [
        {
          "en": "I have an e-friend on the internet.",
          "cn": "我在互联网上有一个网友。"
        },
        {
          "en": "He lives in another country.",
          "cn": "他住在另一个国家。"
        },
        {
          "en": "He can speak English and write in Chinese.",
          "cn": "He can speak English and write in Chinese."
        },
        {
          "en": "We study English together by email.",
          "cn": "我们通过电子邮件一起学习英语。"
        }
      ]
    },
    "Unit 7 At weekends": {
      "title": "At weekends",
      "sentences": [
        {
          "en": "What do you do at weekends?",
          "cn": "你周末都做什么？"
        },
        {
          "en": "I usually go for a picnic with my family.",
          "cn": "我通常和家人一起去野餐。"
        },
        {
          "en": "Sometimes I visit my grandparents and watch TV.",
          "cn": "有时我拜访我爷爷奶奶并看电视。"
        },
        {
          "en": "We always have fun at weekends.",
          "cn": "我们周末总是玩得很开心。"
        }
      ]
    },
    "Unit 8 At Christmas": {
      "title": "At Christmas",
      "sentences": [
        {
          "en": "Merry Christmas, family!",
          "cn": "圣诞快乐，家人！"
        },
        {
          "en": "Look at our beautiful Christmas tree.",
          "cn": "看我们的漂亮圣诞树。"
        },
        {
          "en": "We put presents under the tree.",
          "cn": "我们把礼物放在树下。"
        },
        {
          "en": "Here are cards for my grandfather and grandmother.",
          "cn": "这是给爷爷和奶奶的卡片。"
        }
      ]
    }
  },
  "G5_S2": {
    "Unit 1 Cinderella": {
      "title": "Cinderella",
      "sentences": [
        {
          "en": "Cinderella wants to go to the party.",
          "cn": "灰姑娘想去参加聚会。"
        },
        {
          "en": "A fairy comes and makes a carriage.",
          "cn": "一个仙女走来，做了一辆马车。"
        },
        {
          "en": "She wears slipper and fits very well.",
          "cn": "她穿着水晶鞋，非常合适。"
        },
        {
          "en": "She marries the prince. They are happy.",
          "cn": "她嫁给了王子。他们很幸福。"
        }
      ]
    },
    "Unit 2 How do you come to school?": {
      "title": "How do you come to school?",
      "sentences": [
        {
          "en": "How do you come to school, Tim?",
          "cn": "蒂姆，你怎样来上学？"
        },
        {
          "en": "I come by metro. It is fast.",
          "cn": "我坐地铁来。这很快。"
        },
        {
          "en": "Sometimes I take a taxi or a bus.",
          "cn": "有时我打车或坐公交车。"
        },
        {
          "en": "I live near the street, so I walk.",
          "cn": "我住在街附近，所以我步行。"
        }
      ]
    },
    "Unit 3 Asking the way": {
      "title": "Asking the way",
      "sentences": [
        {
          "en": "Excuse me, I want to ask the way.",
          "cn": "打扰一下，我想问路。"
        },
        {
          "en": "Go straight and turn left at the corner.",
          "cn": "一直走，在拐角处向左转。"
        },
        {
          "en": "Turn right and cross the street.",
          "cn": "向右转并穿过街道。"
        },
        {
          "en": "You can see the station on your right.",
          "cn": "你可以在你的右边看到车站。"
        }
      ]
    },
    "Unit 4 Seeing the doctor": {
      "title": "Seeing the doctor",
      "sentences": [
        {
          "en": "I am not well. Let's see the doctor.",
          "cn": "我不舒服。让我们去看医生。"
        },
        {
          "en": "Do you have a fever, headache or cold?",
          "cn": "你发烧、头痛还是感冒了？"
        },
        {
          "en": "Yes, I have a toothache too.",
          "cn": "是的，我还牙痛。"
        },
        {
          "en": "Take some medicine and have a good rest. Drink water.",
          "cn": "吃点药，好好休息。多喝水。"
        }
      ]
    },
    "Unit 5 Helping our parents": {
      "title": "Helping our parents",
      "sentences": [
        {
          "en": "We helper our parents every day.",
          "cn": "我们每天帮助父母。"
        },
        {
          "en": "I clean the table and cook dinner.",
          "cn": "我擦桌子、做晚饭。"
        },
        {
          "en": "My sister washes the clothes and sweeps the floor.",
          "cn": "我姐姐洗衣服、扫地。"
        },
        {
          "en": "We are busy, but we make our rooms tidy.",
          "cn": "我们很忙，但是我们让房间保持整洁。"
        }
      ]
    },
    "Unit 6 In the kitchen": {
      "title": "In the kitchen",
      "sentences": [
        {
          "en": "Mum is cooking in the kitchen.",
          "cn": "妈妈正在厨房里做饭。"
        },
        {
          "en": "She washes tomatoes and potatoes.",
          "cn": "她清洗西红柿和土豆。"
        },
        {
          "en": "We have meat, fish, bread and eggs.",
          "cn": "我们有肉、鱼、面包和鸡蛋。"
        },
        {
          "en": "Drink some milk, please.",
          "cn": "请喝点牛奶。"
        }
      ]
    },
    "Unit 7 Chinese festivals": {
      "title": "Chinese festivals",
      "sentences": [
        {
          "en": "We have many Chinese festivals.",
          "cn": "我们有许多中国节日。"
        },
        {
          "en": "Spring Festival is popular. We eat rice cakes.",
          "cn": "春节很流行。我们吃年糕。"
        },
        {
          "en": "We eat moon cakes at Mid-Autumn Festival.",
          "cn": "我们在中秋节吃月饼。"
        },
        {
          "en": "We climb hills at Double Ninth Festival.",
          "cn": "我们在重阳节爬山。"
        }
      ]
    },
    "Unit 8 Birthdays": {
      "title": "Birthdays",
      "sentences": [
        {
          "en": "Happy birthday! Let's have a party.",
          "cn": "生日快乐！让我们开个派对。"
        },
        {
          "en": "Here is a big birthday cake and some cards.",
          "cn": "这是一块大生日蛋糕和一些卡片。"
        },
        {
          "en": "How many candles on the cake? Ten candles.",
          "cn": "蛋糕上有几根蜡烛？十根蜡烛。"
        }
      ]
    }
  },
  "G6_S2": {
    "Unit 1 The lion and the mouse": {
      "title": "The lion and the mouse",
      "sentences": [
        {
          "en": "There was a large lion in the forest.",
          "cn": "森林里有一只巨大的狮子。"
        },
        {
          "en": "A tiny mouse ran by and woke him up.",
          "cn": "一只微小的老鼠跑过，吵醒了他。"
        },
        {
          "en": "The lion caught the mouse with his strong paw.",
          "cn": "狮子用他强壮的爪子抓住了老鼠。"
        },
        {
          "en": "The mouse said “Please don't eat me, I can help you one day.”",
          "cn": "老鼠说：“请不要吃我，有一天我可以帮助你。”"
        },
        {
          "en": "The lion laughed. Later, the lion was caught in a net.",
          "cn": "狮子笑了。后来，狮子被网罩住了。"
        },
        {
          "en": "The mouse bit the net with his sharp teeth. The lion was free.",
          "cn": "老鼠用锋利的牙齿咬开网。狮子自由了。"
        }
      ]
    },
    "Unit 2 Good habits": {
      "title": "Good habits",
      "sentences": [
        {
          "en": "Wang Bing has many good habits.",
          "cn": "王兵有许多好习惯。"
        },
        {
          "en": "He gets up early and never goes to bed late.",
          "cn": "他起床很早，从不睡得很晚。"
        },
        {
          "en": "He keeps his room clean and tidy.",
          "cn": "他保持他的房间干净整洁。"
        },
        {
          "en": "He brushes his teeth in the morning and at night.",
          "cn": "他在早上和晚上刷牙。"
        }
      ]
    },
    "Unit 3 A healthy diet": {
      "title": "A healthy diet",
      "sentences": [
        {
          "en": "Mike has a healthy diet. He eats well.",
          "cn": "迈克有健康的饮食习惯。他吃得很好。"
        },
        {
          "en": "He has a lot of rice, some meat and fish.",
          "cn": "他吃许多米饭，一些肉和鱼。"
        },
        {
          "en": "He eats a lot of vegetables and fruit every day.",
          "cn": "他每天吃许多蔬菜和水果。"
        },
        {
          "en": "He drinks a little milk and a lot of water.",
          "cn": "他喝一点牛奶和许多水。"
        }
      ]
    },
    "Unit 4 Road safety": {
      "title": "Road safety",
      "sentences": [
        {
          "en": "How can we cross the road safely?",
          "cn": "我们怎么能安全地穿过马路？"
        },
        {
          "en": "We must look at the traffic lights first.",
          "cn": "我们必须先看红绿灯。"
        },
        {
          "en": "We must cross the street at the zebra crossing.",
          "cn": "我们必须在人行横道/斑马线穿过街道。"
        },
        {
          "en": "Look left and right to see if there is any danger.",
          "cn": "左右看，看看有没有危险。"
        }
      ]
    },
    "Unit 5 A summer holiday": {
      "title": "A summer holiday",
      "sentences": [
        {
          "en": "Where are you going for the summer holiday?",
          "cn": "你暑假打算去哪里？"
        },
        {
          "en": "I am going to London. I will travel by plane.",
          "cn": "我准备去伦敦。我将坐飞机去旅行。"
        },
        {
          "en": "I want to see the Big Ben and take many photos.",
          "cn": "我想去看大本钟并拍很多照片。"
        }
      ]
    },
    "Unit 6 Planning for the weekend": {
      "title": "Planning for the weekend",
      "sentences": [
        {
          "en": "What are you going to do this weekend?",
          "cn": "你这个周末打算做什么？"
        },
        {
          "en": "I am going to have a picnic and go to a concert.",
          "cn": "我准备去野餐并去听音乐会。"
        },
        {
          "en": "Let's watch the play and show together.",
          "cn": "让我们一起看这戏剧和表演吧。"
        },
        {
          "en": "The weather will be fine, so we will have fun.",
          "cn": "天气会很好，所以我们会玩得很开心。"
        }
      ]
    },
    "Unit 7 Summer holiday plans": {
      "title": "Summer holiday plans",
      "sentences": [
        {
          "en": "What will you do in the future?",
          "cn": "你未来打算做什么？"
        },
        {
          "en": "I will go to the sea for my summer holiday.",
          "cn": "我暑假准备去海边。"
        },
        {
          "en": "I will stay there for a week and play on the beach.",
          "cn": "我将在那待一周并在沙滩上玩耍。"
        }
      ]
    },
    "Unit 8 Our dreams": {
      "title": "Our dreams",
      "sentences": [
        {
          "en": "What is your dream? I want to be a dentist.",
          "cn": "你的梦想是什么？我想成为一名牙医。"
        },
        {
          "en": "I want to be an artist and paint beautiful pictures.",
          "cn": "我想成为一名艺术家，画美丽的画。"
        },
        {
          "en": "He wants to be an astronaut and fly into space.",
          "cn": "他想成为一名宇航员并飞入太空。"
        }
      ]
    }
  }
};

const XSC_SPECIAL_DATA = {
  "verbs": [
    {
      "word": "bring",
      "past": "brought",
      "past_p": "brought",
      "cn": "带来",
      "tip": "易与 buy 混淆，注意拼写中含有字母 r"
    },
    {
      "word": "buy",
      "past": "bought",
      "past_p": "bought",
      "cn": "买",
      "tip": "过去式无字母 r：b-o-u-g-h-t"
    },
    {
      "word": "catch",
      "past": "caught",
      "past_p": "caught",
      "cn": "抓住，赶上",
      "tip": "注意元音字母组合为 au：c-a-u-g-h-t"
    },
    {
      "word": "fight",
      "past": "fought",
      "past_p": "fought",
      "cn": "打架，战斗",
      "tip": "小升初阅读理解常见词汇"
    },
    {
      "word": "think",
      "past": "thought",
      "past_p": "thought",
      "cn": "认为，思考",
      "tip": "常考句型：I thought you were... (我原以为...)"
    },
    {
      "word": "keep",
      "past": "kept",
      "past_p": "kept",
      "cn": "保持，保留",
      "tip": "考查持续状态：keep healthy / keep quiet"
    },
    {
      "word": "sleep",
      "past": "slept",
      "past_p": "slept",
      "cn": "睡觉",
      "tip": "易错写为 sleeped"
    },
    {
      "word": "sweep",
      "past": "swept",
      "past_p": "swept",
      "cn": "扫，打扫",
      "tip": "常考家务场景：sweep the floor"
    },
    {
      "word": "feel",
      "past": "felt",
      "past_p": "felt",
      "cn": "感觉",
      "tip": "考查感官形容词前置：feel tired"
    },
    {
      "word": "leave",
      "past": "left",
      "past_p": "left",
      "cn": "离开，落下",
      "tip": "易考“把某物落在家中”：leave sth at home"
    },
    {
      "word": "meet",
      "past": "met",
      "past_p": "met",
      "cn": "遇见，会面",
      "tip": "双元音 e 变单元音 e"
    },
    {
      "word": "teach",
      "past": "taught",
      "past_p": "taught",
      "cn": "教，教学",
      "tip": "注意拼写为 au：t-a-u-g-h-t"
    },
    {
      "word": "find",
      "past": "found",
      "past_p": "found",
      "cn": "找到，发现",
      "tip": "过去式 found 易与 build 过去式 built 混淆"
    },
    {
      "word": "spend",
      "past": "spent",
      "past_p": "spent",
      "cn": "花费(时间/金钱)",
      "tip": "主语只能是人：sb spend time/money on sth"
    },
    {
      "word": "build",
      "past": "built",
      "past_p": "built",
      "cn": "建造，构建",
      "tip": "字母 d 变 t"
    },
    {
      "word": "mean",
      "past": "meant",
      "past_p": "meant",
      "cn": "意思是，意味着",
      "tip": "读音发生变化，meant 读音为 /ment/"
    },
    {
      "word": "become",
      "past": "became",
      "past_p": "become",
      "cn": "变成，成为",
      "tip": "过去式中间是 a"
    },
    {
      "word": "come",
      "past": "came",
      "past_p": "come",
      "cn": "来",
      "tip": "过去式中间是 a"
    },
    {
      "word": "run",
      "past": "ran",
      "past_p": "run",
      "cn": "跑",
      "tip": "过去式中间是 a"
    },
    {
      "word": "begin",
      "past": "began",
      "past_p": "begun",
      "cn": "开始",
      "tip": "区分时态：began (一般过去)，begun (现在完成)"
    },
    {
      "word": "draw",
      "past": "drew",
      "past_p": "drawn",
      "cn": "画，拉",
      "tip": "易错写为 drawed"
    },
    {
      "word": "drink",
      "past": "drank",
      "past_p": "drunk",
      "cn": "喝",
      "tip": "过去式 drank，过去分词 drunk"
    },
    {
      "word": "sing",
      "past": "sang",
      "past_p": "sung",
      "cn": "唱歌",
      "tip": "过去式 sang"
    },
    {
      "word": "swim",
      "past": "swam",
      "past_p": "swum",
      "cn": "游泳",
      "tip": "双写m规则不适用于过去式：s-w-a-m"
    },
    {
      "word": "fly",
      "past": "flew",
      "past_p": "flown",
      "cn": "飞，放(风筝)",
      "tip": "常考放风筝：fly a kite -> flew a kite"
    },
    {
      "word": "grow",
      "past": "grew",
      "past_p": "grown",
      "cn": "生长，种植",
      "tip": "过去式 grew"
    },
    {
      "word": "know",
      "past": "knew",
      "past_p": "known",
      "cn": "知道，认识",
      "tip": "过去式 knew"
    },
    {
      "word": "throw",
      "past": "threw",
      "past_p": "thrown",
      "cn": "扔，投掷",
      "tip": "过去式 threw"
    },
    {
      "word": "ride",
      "past": "rode",
      "past_p": "ridden",
      "cn": "骑(马/车)",
      "tip": "过去分词要双写 d：r-i-d-d-e-n"
    },
    {
      "word": "write",
      "past": "wrote",
      "past_p": "written",
      "cn": "写",
      "tip": "过去分词要双写 t：w-r-i-t-t-e-n"
    },
    {
      "word": "speak",
      "past": "spoke",
      "past_p": "spoken",
      "cn": "说(语言)",
      "tip": "过去式 spoke"
    },
    {
      "word": "choose",
      "past": "chose",
      "past_p": "chosen",
      "cn": "选择",
      "tip": "过去式少一个 o：c-h-o-s-e"
    },
    {
      "word": "eat",
      "past": "ate",
      "past_p": "eaten",
      "cn": "吃",
      "tip": "过去式 ate，字母颠倒：a-t-e"
    },
    {
      "word": "give",
      "past": "gave",
      "past_p": "given",
      "cn": "给，付出",
      "tip": "过去式 gave"
    },
    {
      "word": "see",
      "past": "saw",
      "past_p": "seen",
      "cn": "看见",
      "tip": "过去式 saw"
    },
    {
      "word": "take",
      "past": "took",
      "past_p": "taken",
      "cn": "拿走，花费",
      "tip": "主语可以是物：It takes sb time to do sth"
    },
    {
      "word": "let",
      "past": "let",
      "past_p": "let",
      "cn": "让",
      "tip": "过去式仍是 let"
    },
    {
      "word": "put",
      "past": "put",
      "past_p": "put",
      "cn": "放，置",
      "tip": "过去式仍是 put"
    },
    {
      "word": "read",
      "past": "read",
      "past_p": "read",
      "cn": "读",
      "tip": "拼写完全相同，但过去式读音变为 /red/"
    },
    {
      "word": "hurt",
      "past": "hurt",
      "past_p": "hurt",
      "cn": "伤害，疼",
      "tip": "过去式仍是 hurt"
    },
    {
      "word": "cut",
      "past": "cut",
      "past_p": "cut",
      "cn": "剪，切",
      "tip": "过去式仍是 cut"
    }
  ],
  "comparatives": [
    {
      "base": "good / well",
      "comp": "better",
      "sup": "best",
      "cn": "好的 / 好地",
      "sentence": "My English is better than before."
    },
    {
      "base": "bad / badly / ill",
      "comp": "worse",
      "sup": "worst",
      "cn": "坏的 / 糟糕地",
      "sentence": "The weather is getting worse."
    },
    {
      "base": "many / much",
      "comp": "more",
      "sup": "most",
      "cn": "多的",
      "sentence": "Who has more books, you or Tom?"
    },
    {
      "base": "little",
      "comp": "less",
      "sup": "least",
      "cn": "少的",
      "sentence": "We should drink less cola and more water."
    },
    {
      "base": "far",
      "comp": "farther / further",
      "sup": "farthest / furthest",
      "cn": "远的",
      "sentence": "He lives farther from school than I do."
    }
  ],
  "confusables": [
    {
      "sentence": "Be _____ , please! The baby is sleeping.",
      "answer": "quiet",
      "optionA": "quiet",
      "optionB": "quite",
      "transA": "安静的",
      "transB": "非常",
      "tip": "t在e后面就是“安静的”；e在t后面就是“非常”。"
    },
    {
      "sentence": "It is _____ hot today in summer.",
      "answer": "quite",
      "optionA": "quiet",
      "optionB": "quite",
      "transA": "安静的",
      "transB": "非常",
      "tip": "quite用来修饰形容词，表示“非常”。"
    },
    {
      "sentence": "What is the _____ like today?",
      "answer": "weather",
      "optionA": "weather",
      "optionB": "whether",
      "transA": "天气",
      "transB": "是否",
      "tip": "weather表示天气；whether表示“是否”。"
    },
    {
      "sentence": "I do not know _____ he will come tomorrow.",
      "answer": "whether",
      "optionA": "weather",
      "optionB": "whether",
      "transA": "天气",
      "transB": "是否",
      "tip": "whether引导宾语从句表示“是否”。"
    },
    {
      "sentence": "It is _____ school building.",
      "answer": "their",
      "optionA": "their",
      "optionB": "there",
      "transA": "他们的",
      "transB": "那里",
      "tip": "their是形容词性物主代词，后面加名词。"
    },
    {
      "sentence": "There is a cute puppy over _____.",
      "answer": "there",
      "optionA": "their",
      "optionB": "there",
      "transA": "他们的",
      "transB": "那里",
      "tip": "there表示地点“那里”。"
    },
    {
      "sentence": "We walked _____ the green forest.",
      "answer": "through",
      "optionA": "through",
      "optionB": "threw",
      "transA": "穿过",
      "transB": "扔(过去式)",
      "tip": "through是介词，表示从空间内部穿过。"
    },
    {
      "sentence": "He _____ the ball to me yesterday.",
      "answer": "threw",
      "optionA": "through",
      "optionB": "threw",
      "transA": "穿过",
      "transB": "扔(过去式)",
      "tip": "threw是动词throw的过去式。"
    },
    {
      "sentence": "_____ book is this on the desk?",
      "answer": "whose",
      "optionA": "whose",
      "optionB": "who's",
      "transA": "谁的",
      "transB": "谁是",
      "tip": "whose询问物品归属“谁的”。"
    },
    {
      "sentence": "_____ that tall boy over there?",
      "answer": "who's",
      "optionA": "whose",
      "optionB": "who's",
      "transA": "谁的",
      "transB": "谁是",
      "tip": "who's是“who is”的缩写，意为“谁是”。"
    },
    {
      "sentence": "I can _____ the beautiful music.",
      "answer": "hear",
      "optionA": "hear",
      "optionB": "here",
      "transA": "听见",
      "transB": "这里",
      "tip": "hear带有ear(耳朵)，意为用耳朵“听见”。"
    },
    {
      "sentence": "Please come _____ quickly.",
      "answer": "here",
      "optionA": "hear",
      "optionB": "here",
      "transA": "听见",
      "transB": "这里",
      "tip": "here表示“这里”。"
    },
    {
      "sentence": "I got many Christmas _____.",
      "answer": "present",
      "optionA": "present",
      "optionB": "parent",
      "transA": "礼物",
      "transB": "家长",
      "tip": "present表示“礼物”。"
    },
    {
      "sentence": "My _____ are both teachers.",
      "answer": "parent",
      "optionA": "present",
      "optionB": "parent",
      "transA": "礼物",
      "transB": "家长",
      "tip": "parent表示“父母，家长”。"
    },
    {
      "sentence": "We are very _____ about the trip.",
      "answer": "excited",
      "optionA": "excited",
      "optionB": "exciting",
      "transA": "感到兴奋的",
      "transB": "令人兴奋的",
      "tip": "excited主语通常是人；exciting主语通常是物/事。"
    },
    {
      "sentence": "The football match is very _____.",
      "answer": "exciting",
      "optionA": "excited",
      "optionB": "exciting",
      "transA": "感到兴奋的",
      "transB": "令人兴奋的",
      "tip": "exciting用来形容比赛、故事等物或事件。"
    }
  ],
  "essay_words": [
    {
      "word": "suddenly",
      "phonetic": "/ˈsʌdənli/",
      "cn": "突然地",
      "usage": "Suddenly, it began to rain. (记叙文事件突变)"
    },
    {
      "word": "excitedly",
      "phonetic": "/ɪkˈsaɪtɪdli/",
      "cn": "兴奋地",
      "usage": "They talked excitedly about the plan. (形容心情)"
    },
    {
      "word": "carefully",
      "phonetic": "/ˈkeəfəli/",
      "cn": "仔细地，认真地",
      "usage": "We should listen to our teachers carefully. (学习习惯)"
    },
    {
      "word": "happily",
      "phonetic": "/ˈhæpɪli/",
      "cn": "高兴地，幸福地",
      "usage": "They played games happily in the park. (游记与活动)"
    },
    {
      "word": "sadly",
      "phonetic": "/ˈsædli/",
      "cn": "伤心地，难过地",
      "usage": "He left the room sadly. (情感变化)"
    },
    {
      "word": "firstly",
      "phonetic": "/ˈfɜːstli/",
      "cn": "首先",
      "usage": "Firstly, we should protect our environment. (结构分明)"
    },
    {
      "word": "secondly",
      "phonetic": "/ˈsekəndli/",
      "cn": "其次",
      "usage": "Secondly, we need to save water. (论述要点)"
    },
    {
      "word": "finally",
      "phonetic": "/ˈfaɪnəli/",
      "cn": "最后",
      "usage": "Finally, we arrived at the top of the mountain. (文章结尾)"
    },
    {
      "word": "museum",
      "phonetic": "/mjuːˈziːəm/",
      "cn": "博物馆",
      "usage": "We visited the science museum last Sunday. (场所)"
    },
    {
      "word": "library",
      "phonetic": "/ˈlaɪbrəri/",
      "cn": "图书馆",
      "usage": "Keep quiet in the library. (规则与场所)"
    },
    {
      "word": "cinema",
      "phonetic": "/ˈsɪnəmə/",
      "cn": "电影院",
      "usage": "We go to the cinema on weekends. (娱乐活动)"
    },
    {
      "word": "theater",
      "phonetic": "/ˈθɪətə/",
      "cn": "剧院",
      "usage": "They watched an exciting play in the theater. (文化设施)"
    },
    {
      "word": "stadium",
      "phonetic": "/ˈsteɪdiəm/",
      "cn": "体育场",
      "usage": "The sports meeting was held in the stadium. (运动场景)"
    },
    {
      "word": "hospital",
      "phonetic": "/ˈhɒspɪtl/",
      "cn": "医院",
      "usage": "The doctor works in the hospital. (职业与地点)"
    },
    {
      "word": "restaurant",
      "phonetic": "/ˈrestrɒnt/",
      "cn": "餐厅，饭馆",
      "usage": "They had lunch in a Chinese restaurant. (饮食)"
    },
    {
      "word": "airport",
      "phonetic": "/ˈeəpɔːt/",
      "cn": "机场",
      "usage": "My father went to the airport by taxi. (交通出行)"
    },
    {
      "word": "station",
      "phonetic": "/ˈsteɪʃn/",
      "cn": "车站",
      "usage": "The subway station is near our school. (日常生活)"
    },
    {
      "word": "subject",
      "phonetic": "/ˈsʌbdʒɪkt/",
      "cn": "学科，科目",
      "usage": "What is your favorite subject? (学校生活)"
    },
    {
      "word": "Chinese",
      "phonetic": "/ˌtʃaɪˈniːz/",
      "cn": "语文，中文",
      "usage": "Chinese is a rich and meaningful language. (学科)"
    },
    {
      "word": "Maths",
      "phonetic": "/mæθs/",
      "cn": "数学",
      "usage": "Maths helps us develop logical thinking. (学科)"
    },
    {
      "word": "English",
      "phonetic": "/ˈɪŋɡlɪʃ/",
      "cn": "英语",
      "usage": "Learning English is fun and useful. (学科)"
    },
    {
      "word": "Science",
      "phonetic": "/ˈsaɪəns/",
      "cn": "科学",
      "usage": "We do experiments in Science class. (学科)"
    },
    {
      "word": "Art",
      "phonetic": "/ɑːt/",
      "cn": "美术，艺术",
      "usage": "She likes drawing in Art lessons. (兴趣特长)"
    },
    {
      "word": "Music",
      "phonetic": "/ˈmjuːzɪk/",
      "cn": "音乐",
      "usage": "Music brings us joy and relaxation. (兴趣特长)"
    },
    {
      "word": "PE",
      "phonetic": "/ˌpiː ˈiː/",
      "cn": "体育",
      "usage": "We play basketball in PE class. (运动与健康)"
    },
    {
      "word": "Computer",
      "phonetic": "/kəmˈpjuːtə/",
      "cn": "计算机，信息技术",
      "usage": "We learn coding in Computer class. (现代科技)"
    },
    {
      "word": "History",
      "phonetic": "/ˈhɪstri/",
      "cn": "历史",
      "usage": "History helps us understand the past. (初中衔接)"
    },
    {
      "word": "Geography",
      "phonetic": "/dʒiˈɒɡrəfi/",
      "cn": "地理",
      "usage": "We study maps in Geography class. (初中衔接)"
    },
    {
      "word": "Information",
      "phonetic": "/ˌɪnfəˈmeɪʃn/",
      "cn": "信息，资讯",
      "usage": "We search for useful information online. (综合素养)"
    }
  ]
};

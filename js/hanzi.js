//most commonly found 2633 characters apparently means 98% daily life comprehension
const measureWords = {
    "個": {
        "zhuyin": "ㄍㄜˋ",
        "english": "general measure word for people or things",
        "simplified": "个"
    },
    "位": {
        "zhuyin": "ㄨㄟˋ",
        "english": "respectful measure word for people",
        "simplified": ""
    },
    "名": {
        "zhuyin": "ㄇㄧㄥˊ",
        "english": "measure word for professionals, doctors",
        "simplified": ""
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "english": "measure word for dependents",
        "simplified": ""
    },
    "具": {
        "zhuyin": "ㄐㄩˋ",
        "english": "measure word for corpses",
        "simplified": ""
    },
    "戶": {
        "zhuyin": "ㄏㄨˋ",
        "english": "measure word for households",
        "simplified": "户"
    },
    "只": {
        "zhuyin": "ㄓ",
        "english": "measure word for birds and certain animals, one of a pair, some utensils, vessels etc",
        "simplified": ""
    },
    "頭": {
        "zhuyin": "ㄊㄡˊ",
        "english": "measure word for livestock, cows",
        "simplified": "头"
    },
    "匹": {
        "zhuyin": "ㄆㄧˇ",
        "english": "measure word for horses",
        "simplified": ""
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "english": "measure word for fish, snakes, ribbons, long thin things",
        "simplified": "条"
    },
    "棵": {
        "zhuyin": "ㄎㄜ",
        "english": "measure word for trees, cabbages",
        "simplified": ""
    },
    "株": {
        "zhuyin": "ㄓㄨ",
        "english": "measure word for plants, flowers still in the ground",
        "simplified": ""
    },
    "朵": {
        "zhuyin": "ㄉㄨㄛˇ",
        "english": "measure word for flower bulbs or stems or clouds",
        "simplified": ""
    },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "english": "measure word for handfuls or objects with a handle",
        "simplified": ""
    },
    "支": {
        "zhuyin": "ㄓ",
        "english": "measure word for long (and straight) things, pens",
        "simplified": ""
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "english": "measure word for long (and winding) things, rivers, roads",
        "simplified": "条"
    },
    "根": {
        "zhuyin": "ㄍㄣ",
        "english": "measure word for long (and thin) things, hair",
        "simplified": ""
    },
    "張": {
        "zhuyin": "ㄓㄤ",
        "english": "measure word for flat things, paper, a ticket",
        "simplified": "张"
    },
    "團": {
        "zhuyin": "ㄊㄨㄢˊ",
        "english": "measure word for piles",
        "simplified": "团"
    },
    "堆": {
        "zhuyin": "ㄉㄨㄟ",
        "english": "measure word for big piles",
        "simplified": ""
    },
    "顆": {
        "zhuyin": "ㄎㄜ",
        "english": "measure word for small, compact things, pearls, corn grains, teeth, hearts, satellites etc",
        "simplified": "颗"
    },
    "粒": {
        "zhuyin": "ㄌㄧˋ",
        "english": "measure word for small round things (peas, bullets, peanuts, pills, grains etc)",
        "simplified": ""
    },
    "扇": {
        "zhuyin": "ㄕㄢˋ",
        "english": "measure word for things that turns on a hinge, doors, windows",
        "simplified": ""
    },
    "包": {
        "zhuyin": "ㄅㄠ",
        "english": "measure word for packs",
        "simplified": ""
    },
    "卷": {
        "zhuyin": "ㄐㄩㄢˋ",
        "english": "measure word for rolls",
        "simplified": ""
    },
    "封": {
        "zhuyin": "ㄈㄥ",
        "english": "measure word for envelopes, letters",
        "simplified": ""
    },
    "桶": {
        "zhuyin": "ㄊㄨㄥˇ",
        "english": "measure word for tubes, buckets, paint",
        "simplified": ""
    },
    "盒": {
        "zhuyin": "ㄏㄜˊ",
        "english": "measure word for boxes of things",
        "simplified": ""
    },
    "束": {
        "zhuyin": "ㄕㄨˋ",
        "english": "measure word for boquets",
        "simplified": ""
    },
    "本": {
        "zhuyin": "ㄅㄣˇ",
        "english": "measure word for books",
        "simplified": ""
    },
    "份": {
        "zhuyin": "ㄈㄣˋ",
        "english": "measure word for newspapers",
        "simplified": ""
    },
    "件": {
        "zhuyin": "ㄐㄧㄢˋ",
        "english": "measure word for incidents, circumstances, 事s",
        "simplified": ""
    },
    "節": {
        "zhuyin": "ㄐㄧㄝˊ",
        "english": "measure word for events, episodes, one class from a series or course",
        "simplified": "节"
    },
    "門": {
        "zhuyin": "ㄇㄣˊ",
        "english": "measure word for subjects or series of classes",
        "simplified": "门"
    },
    "次": {
        "zhuyin": "ㄘˋ",
        "english": "measure word for times, occurrences",
        "simplified": ""
    },
    "場": {
        "zhuyin": "ㄔㄤˊ",
        "english": "measure word for large events",
        "simplified": "场"
    },
    "段": {
        "zhuyin": "ㄉㄨㄢˋ",
        "english": "measure word for a period of time",
        "simplified": ""
    },
    "陣": {
        "zhuyin": "ㄓㄣˋ",
        "english": "measure word for sudden, passing events",
        "simplified": "阵"
    },
    "刻": {
        "zhuyin": "ㄎㄜˋ",
        "english": "measure word for a moment, moments",
        "simplified": ""
    },
    "番": {
        "zhuyin": "ㄈㄢ",
        "english": "measure word for a long period of time, stretch, or an activity that requires significant effort",
        "simplified": ""
    },
    "趟": {
        "zhuyin": "ㄊㄤˋ",
        "english": "measure word for trips, tours",
        "simplified": ""
    },
    "間": {
        "zhuyin": "ㄐㄧㄢ",
        "english": "measure word for rooms, houses",
        "simplified": "间"
    },
    "棟": {
        "zhuyin": "ㄉㄨㄥˋ",
        "english": "measure word for tall buildings",
        "simplified": "栋"
    },
    "層": {
        "zhuyin": "ㄘㄥˊ",
        "english": "measure word for floors, stories(of building)",
        "simplified": "层"
    },
    "堵": {
        "zhuyin": "ㄉㄨˇ",
        "english": "measure word for walls",
        "simplified": ""
    },
    "面": {
        "zhuyin": "ㄇㄧㄢˋ",
        "english": "measure word for walls",
        "simplified": ""
    },
    "所": {
        "zhuyin": "ㄙㄨㄛˇ",
        "english": "measure word for multi building complex, hospitals",
        "simplified": ""
    },
    "場": {
        "zhuyin": "ㄔㄤˊ",
        "english": "measure word for fields, open public spaces",
        "simplified": "场"
    },
    "家": {
        "zhuyin": "ㄐㄧㄚ",
        "english": "measure word for places of work",
        "simplified": ""
    },
    "座": {
        "zhuyin": "ㄗㄨㄛˋ",
        "english": "measure word for large structures, bridges, mountains",
        "simplified": ""
    },
    "份": {
        "zhuyin": "ㄈㄣˋ",
        "english": "measure word for portions",
        "simplified": ""
    },
    "片": {
        "zhuyin": "ㄆㄧㄢˋ",
        "english": "measure word for pieces",
        "simplified": ""
    },
    "塊": {
        "zhuyin": "ㄎㄨㄞˋ",
        "english": "measure word for pieces, slices",
        "simplified": "块"
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "english": "measure word for sips, mouthfuls",
        "simplified": ""
    },
    "道": {
        "zhuyin": "ㄉㄠˋ",
        "english": "measure word for dishes",
        "simplified": ""
    },
    "頓": {
        "zhuyin": "ㄉㄨㄣˋ",
        "english": "measure word for meals",
        "simplified": "顿"
    },
    "碗": {
        "zhuyin": "ㄨㄢˇ",
        "english": "measure word for bowls of food",
        "simplified": ""
    },
    "盤": {
        "zhuyin": "ㄆㄢˊ",
        "english": "measure word for plates of food",
        "simplified": "盘"
    },
    "滴": {
        "zhuyin": "ㄉㄧ",
        "english": "measure word for drops",
        "simplified": ""
    },
    "杯": {
        "zhuyin": "ㄅㄟ",
        "english": "measure word for cups",
        "simplified": ""
    },
    "瓶": {
        "zhuyin": "ㄆㄧㄥˊ",
        "english": "measure word for bottles",
        "simplified": ""
    },
    "壺": {
        "zhuyin": "ㄏㄨˊ",
        "english": "measure word for teapots",
        "simplified": "壶"
    },
    "罐": {
        "zhuyin": "ㄍㄨㄢˋ",
        "english": "measure word for cans, jars",
        "simplified": ""
    },
    "股": {
        "zhuyin": "ㄍㄨˇ",
        "english": "measure word for whiffs, smells, aromas",
        "simplified": ""
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "english": "measure word for towels, tablecloths, blankets",
        "simplified": "条"
    },
    "盞": {
        "zhuyin": "ㄓㄢˇ",
        "english": "measure word for lamps",
        "simplified": "盏"
    },
    "幅": {
        "zhuyin": "ㄈㄨˊ",
        "english": "measure word for paintings or drawings",
        "simplified": ""
    },
    "幀": {
        "zhuyin": "ㄓㄣ",
        "english": "measure word for printed pictures",
        "simplified": "帧"
    },
    "件": {
        "zhuyin": "ㄐㄧㄢˋ",
        "english": "measure word for articles of clothing",
        "simplified": ""
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "english": "measure word for a long articles of clothing, neckties",
        "simplified": "条"
    },
    "套": {
        "zhuyin": "ㄊㄠˋ",
        "english": "measure word for costumes",
        "simplified": ""
    },
    "頂": {
        "zhuyin": "ㄉㄧㄥˇ",
        "english": "measure word for hats",
        "simplified": "顶"
    },
    "雙": {
        "zhuyin": "ㄕㄨㄤ",
        "english": "measure word for pairs of identical objects, eyes",
        "simplified": "双"
    },
    "副": {
        "zhuyin": "ㄈㄨˋ",
        "english": "measure word for pairs of complementary objects",
        "simplified": ""
    },
    "對": {
        "zhuyin": "ㄉㄨㄟˋ",
        "english": "measure word for married pairs",
        "simplified": "对"
    },
    "些": {
        "zhuyin": "ㄒㄧㄝ",
        "english": "measure word for few things",
        "simplified": ""
    },
    "種": {
        "zhuyin": "ㄓㄨㄥˇ",
        "english": "measure word for kinds, typess",
        "simplified": "种"
    },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
    // "": {
    //     "zhuyin": "",
    //     "english": "measure word for ",
    //     "simplified": ""
    // },
};
const hanzi1 = {
    "我": {
        "zhuyin": "ㄨㄛˇ",
        "pinyin": "wǒ ",
        "tone": 3,
        "english": "I, me",
        "simplified": "",
        "radicals": ["手", "戈"]
    },
    "的": {
        "zhuyin": "ㄉㄜ.",
        "pinyin": "de",
        "tone": 5,
        "english": "'s",
        "simplified": "",
        "radicals": ["白", "勺"]
    },
    "你": {
        "zhuyin": "ㄋ一ˇ",
        "pinyin": "nǐ",
        "tone": 3,
        "english": "you",
        "simplified": "",
        "radicals": ["亻", "尔"]
    },
    "是": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "is, to be",
        "simplified": "",
        "radicals": ["日", "一", "止"]
    },
    "了": {
        "zhuyin": "ㄌㄜ˙",
        "pinyin": "le",
        "tone": 5,
        "english": "-ed, (completed action p.)",
        "simplified": "",
        "radicals": [""]
    },
    "不": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "tone": 4,
        "english": "no, not",
        "simplified": "",
        "radicals": ["丆", "卜"]
    },
    "們": {
        "zhuyin": "ㄇㄣ˙",
        "pinyin": "men",
        "tone": 3,
        "english": "(plural p.)",
        "simplified": "们",
        "radicals": ["亻", "門"]
    },
    "這": {
        "zhuyin": "ㄓㄜˋ",
        "pinyin": "zhè",
        "tone": 4,
        "english": "this",
        "simplified": "这",
        "radicals": ["辶", "言"]
    },
    "一": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "one, a",
        "simplified": "",
        "radicals": ["一"]
    },
    "他": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "tā",
        "tone": 1,
        "english": "he",
        "simplified": "",
        "radicals": ["亻", "也"]
    },
    "麼": {
        "zhuyin": "ㄇㄜ˙",
        "pinyin": "me",
        "tone": 5,
        "english": "(interrogative p.)",
        "simplified": "么",
        "radicals": ["麻", "幺"]
    },
    "在": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "zài",
        "tone": 4,
        "english": "at",
        "simplified": "",
        "radicals": ["𠂇", "土"]
    },
    "有": {
        "zhuyin": "一ㄡˇ",
        "pinyin": "yǒu",
        "tone": 3,
        "english": "to have, there is",
        "simplified": "",
        "radicals": ["𠂇", "月"]
    },
    "個": {
        "zhuyin": "ㄍㄜˋ",
        "pinyin": "gè",
        "tone": 4,
        "english": "individual, (general measure word)",
        "simplified": "个",
        "radicals": ["亻", "固"]
    },
    "好": {
        "zhuyin": "ㄏㄠˇ",
        "pinyin": "hǎo",
        "tone": 3,
        "english": "good, well",
        "simplified": "",
        "radicals": ["女", "子"]
    },
    "來": {
        "zhuyin": "ㄌㄞˊ",
        "pinyin": "lái",
        "tone": 2,
        "english": "to come",
        "simplified": "来 ",
        "radicals": ["木", "从"]
    },
    "人": {
        "zhuyin": "ㄖㄣˊ",
        "pinyin": "rén",
        "tone": 2,
        "english": "person",
        "simplified": "",
        "radicals": [""]
    },
    "那": {
        "zhuyin": "ㄋㄚ ˋ",
        "pinyin": "nà",
        "tone": 4,
        "english": "that, those",
        "simplified": "",
        "radicals": ["二", "阝"]
    },
    "要": {
        "zhuyin": "一ㄠˋ",
        "pinyin": "yào",
        "tone": 4,
        "english": "to want, important",
        "simplified": "",
        "radicals": ["覀", "女"]
    },
    "會": {
        "zhuyin": "ㄏㄨㄟˋ",
        "pinyin": "huì",
        "tone": 4,
        "english": "meet, can, will, to know",
        "simplified": "会",
        "radicals": ["京", "尤"]
    },
    "就": {
        "zhuyin": "ㄐ一ㄡˋ",
        "pinyin": "jiù",
        "tone": 4,
        "english": "then, just, at once",
        "simplified": "",
        "radicals": ["京", "尤"]
    },
    "甚": {
        "zhuyin": "ㄕㄣˊ",
        "pinyin": "shén",
        "tone": 2,
        "english": "what",
        "simplified": "什",
        "radicals": ["亻", "十"]
    },
    "沒": {
        "zhuyin": "ㄇㄟˊ",
        "pinyin": "méi",
        "tone": 2,
        "english": "have not",
        "simplified": "没",
        "radicals": ["氵", "又"]
    },
    "到": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "dào",
        "tone": 4,
        "english": "to arrive",
        "simplified": "",
        "radicals": ["至", "刂"]
    },
    "說": {
        "zhuyin": "ㄕㄨㄛ",
        "pinyin": "shuō",
        "tone": 1,
        "english": "to speak",
        "simplified": "说",
        "radicals": ["言", "兌"]
    },
    "嗎": {
        "zhuyin": "ㄇㄚ˙",
        "pinyin": "ma",
        "tone": 5,
        "english": "yes or no ?",
        "simplified": "吗",
        "radicals": ["口", "馬"]
    },
    "為": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "because of",
        "simplified": "为",
        "radicals": ["丶", "灬"]
    },
    "想": {
        "zhuyin": "ㄒ一ㄤˇ",
        "pinyin": "xiǎng",
        "tone": 3,
        "english": "to think, to want",
        "simplified": "",
        "radicals": ["相", "心"]
    },
    "能": {
        "zhuyin": "ㄋㄥˊ",
        "pinyin": "néng",
        "tone": 2,
        "english": "to be able to",
        "simplified": "",
        "radicals": ["厶", "匕"]
    },
    "上": {
        "zhuyin": "ㄕㄤˋ",
        "pinyin": "shàng",
        "tone": 4,
        "english": "above",
        "simplified": "",
        "radicals": ["丨", "一"]
    },

    "去": {
        "zhuyin": "ㄑㄩˋ",
        "pinyin": "qù",
        "tone": 4,
        "english": "to go",
        "simplified": "",
        "radicals": ["土", "厶"]
    },
    "道": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "dào",
        "tone": 4,
        "english": "way, method",
        "simplified": "",
        "radicals": ["辶", "首"]
    },
    "她": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "tā",
        "tone": 1,
        "english": "she",
        "simplified": "",
        "radicals": ["女", "也"]
    },
    "很": {
        "zhuyin": "ㄏㄣˇ",
        "pinyin": "hěn",
        "tone": 3,
        "english": "very, is (Adj)",
        "simplified": "",
        "radicals": ["彳", "艮"]
    },
    "看": {
        "zhuyin": "ㄎㄢˋ",
        "pinyin": "kàn",
        "tone": 2,
        "english": "to see, look at",
        "simplified": "",
        "radicals": ["龵", "目"]
    },
    "可": {
        "zhuyin": "ㄎㄜˇ",
        "pinyin": "kě",
        "tone": 3,
        "english": "can able to",
        "simplified": "",
        "radicals": ["一", "口"]
    },
    "知": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "to know",
        "simplified": "",
        "radicals": ["矢", "口"]
    },
    "得": {
        "zhuyin": "ㄉㄜ",
        "pinyin": "de",
        "tone": 5,
        "english": "(V + 得 + Adverb) p. indicates effect, degree, possibility etc",
        "simplified": "",
        "radicals": ["彳", "寸"]
    },
    "過": {
        "zhuyin": "ㄍㄨㄛˋ",
        "pinyin": "guo",
        "tone": 5,
        "english": "(experienced action p.)",
        "simplified": "过",
        "radicals": ["辶", "口"]
    },
    "吧": {
        "zhuyin": "ㄅㄚ˙",
        "pinyin": "ba",
        "tone": 5,
        "english": "...right?",
        "simplified": "",
        "radicals": ["口", "匚"]
    },

    "還": {
        "zhuyin": "ㄏㄞˊ",
        "pinyin": "hái",
        "tone": 2,
        "english": "still, yet, to return",
        "simplified": "还",
        "radicals": ["辶", "口"]
    },
    "對": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "duì",
        "tone": 4,
        "english": "correct, opposite",
        "simplified": "对",
        "radicals": ["羊", "寸"]
    },
    "裡": {
        "zhuyin": "ㄌ一ˇ",
        "pinyin": "lǐ",
        "tone": 3,
        "english": "inside",
        "simplified": "里",
        "radicals": ["田", "土"]
    },
    "以": {
        "zhuyin": "一ˇ",
        "pinyin": "yǐ",
        "tone": 3,
        "english": "so as to, according to",
        "simplified": "",
        "radicals": ["丶", "人"]
    },
    "都": {
        "zhuyin": "ㄉㄡ",
        "pinyin": "dōu",
        "tone": 1,
        "english": "all, both",
        "simplified": "",
        "radicals": ["日", "阝"]
    },
    "事": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "thing, item, matter",
        "simplified": "",
        "radicals": ["中", "匚"]
    },
    "子": {
        "zhuyin": "ㄗ˙",
        "pinyin": "zi",
        "tone": 5,
        "english": "child, son",
        "simplified": "",
        "radicals": ["了", "一"]
    },
    "生": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "life, raw",
        "simplified": "",
        "radicals": ["龶", "㇒"]
    },
    "時": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "time",
        "simplified": "时",
        "radicals": ["日", "寸"]
    },
    "樣": {
        "zhuyin": "一ㄤˋ",
        "pinyin": "yàng",
        "tone": 4,
        "english": "manner, appearance",
        "simplified": "样",
        "radicals": ["木", "羊"]
    },
    "也": {
        "zhuyin": "一ㄝˇ",
        "pinyin": "yě",
        "tone": 3,
        "english": "also, too",
        "simplified": "",
        "radicals": ["丨"]
    },
    "和": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "tone": 2,
        "english": "and",
        "simplified": "",
        "radicals": ["禾", "口"]
    },
    "下": {
        "zhuyin": "ㄒ一ㄚˋ",
        "pinyin": "xià",
        "tone": 4,
        "english": "below, down",
        "simplified": "",
        "radicals": ["一", "卜"]
    },
    "真": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "zhēn",
        "tone": 1,
        "english": "really, truly",
        "simplified": "",
        "radicals": ["十", "目"]
    },
    "現": {
        "zhuyin": "ㄒ一ㄢˋ",
        "pinyin": "xiàn",
        "tone": 4,
        "english": "appear, present",
        "simplified": "现",
        "radicals": ["王", "目"]
    },
    "做": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "zuò",
        "tone": 4,
        "english": "make, to do",
        "simplified": "",
        "radicals": ["亻", "古"]
    },
    "大": {
        "zhuyin": "ㄉㄚˋ",
        "pinyin": "dà",
        "tone": 4,
        "english": "big",
        "simplified": "",
        "radicals": ["人", "一"]
    },
    "啊": {
        "zhuyin": "ㄚ˙",
        "pinyin": "a",
        "tone": 5,
        "english": "ah!",
        "simplified": "",
        "radicals": ["口", "阝", "可"]
    },
    "怎": {
        "zhuyin": "ㄗㄣˇ",
        "pinyin": "zěn",
        "tone": 3,
        "english": "how",
        "simplified": "",
        "radicals": ["丨", "心"]
    },
    "出": {
        "zhuyin": "ㄔㄨ",
        "pinyin": "chū",
        "tone": 1,
        "english": "exit, to go out",
        "simplified": "",
        "radicals": ["山"]
    },
    "點": {
        "zhuyin": "ㄉ一ㄢˇ",
        "pinyin": "diǎn",
        "tone": 3,
        "english": "dot",
        "simplified": "点",
        "radicals": ["黑", "口"]
    },
    "起": {
        "zhuyin": "ㄑ一ˇ",
        "pinyin": "qǐ",
        "tone": 3,
        "english": "rise",
        "simplified": "",
        "radicals": ["土", "止", "匚"]
    },
    "天": {
        "zhuyin": "ㄊ一ㄢ",
        "pinyin": "tiān",
        "tone": 1,
        "english": "sky, heavens",
        "simplified": "",
        "radicals": ["一", "大"]
    },
    "把": {
        "zhuyin": "ㄅㄚˇ",
        "pinyin": "bǎ",
        "tone": 3,
        "english": "(direct obj p.), to hold",
        "simplified": "",
        "radicals": ["扌", "巴"]
    },
    "開": {
        "zhuyin": "ㄎㄞ",
        "pinyin": "kāi",
        "tone": 1,
        "english": "to open, to start",
        "simplified": "开",
        "radicals": ["門", "一"]
    },
    "讓": {
        "zhuyin": "ㄖㄤˋ",
        "pinyin": "ràng",
        "tone": 4,
        "english": "yield, to allow, permit, by (passive p.)",
        "simplified": "让",
        "radicals": ["言", "口"]
    },
    "給": {
        "zhuyin": "ㄍㄟˇ",
        "pinyin": "gěi",
        "tone": 3,
        "english": "give, to, for",
        "simplified": "给",
        "radicals": ["糹", "口"]
    },
    "但": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "dàn",
        "tone": 4,
        "english": "but",
        "simplified": "",
        "radicals": ["亻", "日"]
    },
    "謝": {
        "zhuyin": "ㄒ一ㄝˋ",
        "pinyin": "xiè",
        "tone": 4,
        "english": "thanks",
        "simplified": "谢",
        "radicals": ["言", "身", "寸"]
    },
    "着": {
        "zhuyin": "ㄓㄜ˙",
        "pinyin": "zhe",
        "tone": 5,
        "english": "(action in progress p.)",
        "simplified": "",
        "radicals": ["羊", "目"]
    },
    "只": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "only",
        "simplified": "",
        "radicals": ["口", "八"]
    },
    "些": {
        "zhuyin": "ㄒ一ㄝ",
        "pinyin": "xiē",
        "tone": 1,
        "english": "some, few",
        "simplified": "",
        "radicals": ["止", "匕", "二"]
    },
    "如": {
        "zhuyin": "ㄖㄨˊ",
        "pinyin": "rú",
        "tone": 2,
        "english": "as, as if, such as",
        "simplified": "",
        "radicals": ["女", "口"]
    },
    "家": {
        "zhuyin": "ㄐ一ㄚ",
        "pinyin": "jiā",
        "tone": 1,
        "english": "home, family",
        "simplified": "",
        "radicals": ["宀", "一", "𧰨"]
    },
    "後": {
        "zhuyin": "ㄏㄡˋ",
        "pinyin": "hòu",
        "tone": 4,
        "english": "behind, after",
        "simplified": "后",
        "radicals": ["一", "口"]
    },
    "兒": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "son",
        "simplified": "儿",
        "radicals": ["彐", "儿"]
    },
    "多": {
        "zhuyin": "ㄉㄨㄛ",
        "pinyin": "duō",
        "tone": 1,
        "english": "many, much",
        "simplified": "",
        "radicals": ["夕"]
    },
    "意": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "idea, meaning",
        "simplified": "",
        "radicals": ["音", "心"]
    },
    "别": {
        "zhuyin": "ㄅ一ㄝˊ",
        "pinyin": "bié",
        "tone": 2,
        "english": "must not, other, don't",
        "simplified": "",
        "radicals": ["力", "刂"]
    },
    "所": {
        "zhuyin": "ㄙㄨㄛˇ",
        "pinyin": "suǒ",
        "tone": 3,
        "english": "place, actually",
        "simplified": "",
        "radicals": ["戶", "斤"]
    },
    "話": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "huà",
        "tone": 4,
        "english": "language, talk",
        "simplified": "话",
        "radicals": ["言", "舌"]
    },
    "小": {
        "zhuyin": "ㄒ一ㄠˇ",
        "pinyin": "xiǎo",
        "tone": 3,
        "english": "small",
        "simplified": "",
        "radicals": ["㇚", "八"]
    },
    "自": {
        "zhuyin": "ㄗˋ",
        "pinyin": "zì",
        "tone": 4,
        "english": "self",
        "simplified": "",
        "radicals": ["目", "丶"]
    },
    "回": {
        "zhuyin": "ㄏㄨㄟˊ",
        "pinyin": "huí",
        "tone": 2,
        "english": "to answer, to return",
        "simplified": "",
        "radicals": ["囗", "口"]
    },
    "然": {
        "zhuyin": "ㄖㄢˊ",
        "pinyin": "rán",
        "tone": 2,
        "english": "correct",
        "simplified": "",
        "radicals": ["⺼", "犬", "灬"]
    },
    "果": {
        "zhuyin": "ㄍㄨㄛˇ",
        "pinyin": "guǒ",
        "tone": 3,
        "english": "fruit",
        "simplified": "",
        "radicals": ["田", "木"]
    },
    "發": {
        "zhuyin": "ㄈㄚ",
        "pinyin": "fā",
        "tone": 1,
        "english": "to send, to develop",
        "simplified": "发",
        "radicals": ["癶", "弓", "殳"]
    },
    "見": {
        "zhuyin": "ㄐ一ㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "to see, to meet",
        "simplified": "见",
        "radicals": ["目", "儿"]
    },
    "心": {
        "zhuyin": "ㄒ一ㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "heart",
        "simplified": "",
        "radicals": ["丶"]
    },
    "走": {
        "zhuyin": "ㄗㄡˇ",
        "pinyin": "zǒu",
        "tone": 3,
        "english": "to walk, away",
        "simplified": "",
        "radicals": ["", ""]
    },
    "定": {
        "zhuyin": "ㄉ一ㄥˋ",
        "pinyin": "dìng",
        "tone": 4,
        "english": "to set, decide",
        "simplified": "",
        "radicals": ["宀", "一", "止"]
    },
    "聽": {
        "zhuyin": "ㄊ一ㄥ",
        "pinyin": "tīng",
        "tone": 1,
        "english": "to listen",
        "simplified": "听",
        "radicals": ["耳", "王", "十", "罒", "一", "心"]
    },
    "覺": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "jué",
        "tone": 2,
        "english": "to feel",
        "simplified": "觉",
        "radicals": ["臼", "爻", "冖", "見"]
    },
    "太": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "tài",
        "tone": 4,
        "english": "too (much)",
        "simplified": "",
        "radicals": ["大", "丶"]
    },
    "該": {
        "zhuyin": "ㄍㄞ",
        "pinyin": "gāi",
        "tone": 1,
        "english": "should",
        "simplified": "该",
        "radicals": ["言", "亠"]
    },
    "當": {
        "zhuyin": "ㄉㄤ",
        "pinyin": "dāng",
        "tone": 1,
        "english": "to be, just at",
        "simplified": "当",
        "radicals": ["冖", "口", "田"]
    },
    "經": {
        "zhuyin": "ㄐ一ㄥ",
        "pinyin": "jīng",
        "tone": 1,
        "english": "pass through",
        "simplified": "经",
        "radicals": ["糹", "巛", "工"]
    },
    "媽": {
        "zhuyin": "ㄇㄚ",
        "pinyin": "mā",
        "tone": 1,
        "english": "mom",
        "simplified": "妈",
        "radicals": ["女", "灬"]
    },
    "用": {
        "zhuyin": "ㄩㄥˋ",
        "pinyin": "yòng",
        "tone": 4,
        "english": "to use",
        "simplified": "",
        "radicals": ["丨", "二"]
    },
    "打": {
        "zhuyin": "ㄉㄚˇ",
        "pinyin": "dǎ",
        "tone": 3,
        "english": "to hit",
        "simplified": "",
        "radicals": ["扌", "一"]
    },


    "地": {
        "zhuyin": "ㄉㄜ˙",
        "pinyin": "de",
        "tone": 5,
        "english": "-ly, structural p.",
        "simplified": "",
        "radicals": ["土", "也"]
    },
    "再": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "zài",
        "tone": 4,
        "english": "again, then",
        "simplified": "",
        "radicals": ["一", "土"]
    },
    "因": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "yīn",
        "tone": 1,
        "english": "reason, cause",
        "simplified": "",
        "radicals": ["囗", "大"]
    },
    "呢": {
        "zhuyin": "ㄋㄜ˙",
        "pinyin": "ne",
        "tone": 5,
        "english": "how about...? (continuing p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "女": {
        "zhuyin": "ㄋㄩˇ",
        "pinyin": "nǚ",
        "tone": 3,
        "english": "woman",
        "simplified": "",
        "radicals": ["", ""]
    },
    "告": {
        "zhuyin": "ㄍㄠˋ",
        "pinyin": "gào",
        "tone": 4,
        "english": "to tell",
        "simplified": "",
        "radicals": ["⺧", "口"]
    },
    "最": {
        "zhuyin": "ㄗㄨㄟˋ",
        "pinyin": "zuì",
        "tone": 4,
        "english": "most, -est",
        "simplified": "",
        "radicals": ["日", ""]
    },
    "手": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "hand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "前": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "qián",
        "tone": 2,
        "english": "front",
        "simplified": "",
        "radicals": ["", ""]
    },
    "找": {
        "zhuyin": "ㄓㄠˇ",
        "pinyin": "zhǎo",
        "tone": 3,
        "english": "find, to look for",
        "simplified": "",
        "radicals": ["扌", "戈"]
    },
    "行": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "go, travel, walk, OK!",
        "simplified": "",
        "radicals": ["彳", "亍"]
    },
    "快": {
        "zhuyin": "ㄎㄨㄞˋ",
        "pinyin": "kuài",
        "tone": 4,
        "english": "quick, rapid, almost",
        "simplified": "",
        "radicals": ["忄", "人"]
    },
    "而": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "and, as well as",
        "simplified": "",
        "radicals": ["", ""]
    },
    "死": {
        "zhuyin": "ㄙˇ",
        "pinyin": "sǐ",
        "tone": 3,
        "english": "die",
        "simplified": "",
        "radicals": ["歹", "匕"]
    },
    "先": {
        "zhuyin": "ㄒㄧㄢ",
        "pinyin": "xiān",
        "tone": 1,
        "english": "first, former",
        "simplified": "",
        "radicals": ["⺧", "儿"]
    },
    "像": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "xiàng",
        "tone": 4,
        "english": "resemble, to be like, image",
        "simplified": "",
        "radicals": ["", ""]
    },
    "等": {
        "zhuyin": "ㄉㄥˇ",
        "pinyin": "děng",
        "tone": 3,
        "english": "rank, to wait for",
        "simplified": "",
        "radicals": ["", ""]
    },
    "被": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "(passive p.), quilt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "從": {
        "zhuyin": "ㄘㄨㄥˊ",
        "pinyin": "cóng",
        "tone": 2,
        "english": "from, via, to follow",
        "simplified": "从",
        "radicals": ["", ""]
    },
    "明": {
        "zhuyin": "ㄇㄧㄥˊ",
        "pinyin": "míng",
        "tone": 2,
        "english": "bright",
        "simplified": "",
        "radicals": ["日", "月"]
    },
    "中": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "zhōng",
        "tone": 1,
        "english": "middle, center",
        "simplified": "",
        "radicals": ["口", "丨"]
    },
    "哦": {
        "zhuyin": "ㄛˊ",
        "pinyin": "ó",
        "tone": 2,
        "english": "oh",
        "simplified": "",
        "radicals": ["口", "我"]
    },
    "情": {
        "zhuyin": "ㄑㄧㄥˊ",
        "pinyin": "qíng",
        "tone": 2,
        "english": "feeling, emotion",
        "simplified": "",
        "radicals": ["忄", "青"]
    },
    "作": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "zuò",
        "tone": 4,
        "english": "to do, grow, write",
        "simplified": "",
        "radicals": ["亻", "乍"]
    },
    "跟": {
        "zhuyin": "ㄍㄣ",
        "pinyin": "gēn",
        "tone": 1,
        "english": "with, to follow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "面": {
        "zhuyin": "ㄇㄧㄢˋ",
        "pinyin": "miàn",
        "tone": 4,
        "english": "face, surface, noodles, side, aspect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "訴": {
        "zhuyin": "ㄙㄨˋ",
        "pinyin": "sù",
        "tone": 4,
        "english": "complain, tell, accuse",
        "simplified": "诉",
        "radicals": ["", ""]
    },
    "愛": {
        "zhuyin": "ㄞˋ",
        "pinyin": "ài",
        "tone": 4,
        "english": "love",
        "simplified": "爱",
        "radicals": ["", ""]
    },
    "已": {
        "zhuyin": "ㄧˇ",
        "pinyin": "yǐ",
        "tone": 3,
        "english": "already",
        "simplified": "",
        "radicals": ["", ""]
    },
    "之": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "of, (possessive p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "問": {
        "zhuyin": "ㄨㄣˋ",
        "pinyin": "wèn",
        "tone": 4,
        "english": "ask",
        "simplified": "问",
        "radicals": ["門", "口"]
    },
    "錯": {
        "zhuyin": "ㄘㄨㄛˋ",
        "pinyin": "cuò",
        "tone": 4,
        "english": "mistake",
        "simplified": "错",
        "radicals": ["", ""]
    },
    "孩": {
        "zhuyin": "ㄏㄞˊ",
        "pinyin": "hái",
        "tone": 2,
        "english": "child",
        "simplified": "",
        "radicals": ["", ""]
    },
    "斯": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "this, (phonetic s)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "成": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "chéng",
        "tone": 2,
        "english": "to succeed, become",
        "simplified": "",
        "radicals": ["", ""]
    },
    "它": {
        "zhuyin": "ㄊㄚ",
        "pinyin": "tā",
        "tone": 1,
        "english": "it",
        "simplified": "",
        "radicals": ["宀", "匕"]
    },
    "感": {
        "zhuyin": "ㄍㄢˇ",
        "pinyin": "gǎn",
        "tone": 3,
        "english": "feel, emotion",
        "simplified": "",
        "radicals": ["咸", "心"]
    },
    "幹": {
        "zhuyin": "ㄍㄢˋ",
        "pinyin": "gàn",
        "tone": 4,
        "english": "do/work",
        "simplified": "干",
        "radicals": ["干", ""]
    },
    "法": {
        "zhuyin": "ㄈㄚˇ",
        "pinyin": "fǎ",
        "tone": 3,
        "english": "law, method, way",
        "simplified": "",
        "radicals": ["", ""]
    },
    "電": {
        "zhuyin": "ㄉㄧㄢˋ",
        "pinyin": "diàn",
        "tone": 4,
        "english": "electric",
        "simplified": "电",
        "radicals": ["雨", "电"]
    },
    "間": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "jiān",
        "tone": 1,
        "english": "between, among, room, space",
        "simplified": "间",
        "radicals": ["門", "日"]
    },
    "哪": {
        "zhuyin": "ㄋㄚˇ",
        "pinyin": "nǎ",
        "tone": 3,
        "english": "which",
        "simplified": "",
        "radicals": ["口", "那"]
    },
    "西": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "west",
        "simplified": "",
        "radicals": ["兀", "囗"]
    },
    "己": {
        "zhuyin": "ㄐㄧˇ",
        "pinyin": "jǐ",
        "tone": 3,
        "english": "self",
        "simplified": "",
        "radicals": ["", ""]
    },
    "候": {
        "zhuyin": "ㄏㄡˋ",
        "pinyin": "hòu",
        "tone": 4,
        "english": "to wait, season",
        "simplified": "",
        "radicals": ["", ""]
    },
    "次": {
        "zhuyin": "ㄘˋ",
        "pinyin": "cì",
        "tone": 4,
        "english": "once, time sequence, order",
        "simplified": "次",
        "radicals": ["", ""]
    },
    "信": {
        "zhuyin": "ㄒㄧㄣˋ",
        "pinyin": "xìn",
        "tone": 4,
        "english": "letter, to trust",
        "simplified": "",
        "radicals": ["", ""]
    },
    "歡": {
        "zhuyin": "ㄏㄨㄢ",
        "pinyin": "huān",
        "tone": 1,
        "english": "joyous, pleased",
        "simplified": "欢",
        "radicals": ["雚", "欠"]
    },
    "正": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "zhèng",
        "tone": 4,
        "english": "correct, just (right)",
        "simplified": "",
        "radicals": ["一", "止"]
    },
    "實": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "real, honest",
        "simplified": "实",
        "radicals": ["", ""]
    },
    "關": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "guān",
        "tone": 1,
        "english": "close, shut",
        "simplified": "关",
        "radicals": ["門", "幺"],
    },
    "進": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "jìn",
        "tone": 4,
        "english": "go forward, advance, enter",
        "simplified": "进",
        "radicals": ["", ""]
    },
    "車": {
        "zhuyin": "ㄔㄜ",
        "pinyin": "chē",
        "tone": 1,
        "english": "car, vehicle",
        "simplified": "车",
        "radicals": ["二", "日"]
    },
    "年": {
        "zhuyin": "ㄋㄧㄢˊ",
        "pinyin": "nián",
        "tone": 2,
        "english": "year",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喜": {
        "zhuyin": "ㄒㄧˇ",
        "pinyin": "xǐ",
        "tone": 3,
        "english": "fond of, to like",
        "simplified": "",
        "radicals": ["", ""]
    },
    "認": {
        "zhuyin": "ㄖㄣˋ",
        "pinyin": "rèn",
        "tone": 2,
        "english": "recognize",
        "simplified": "认",
        "radicals": ["", ""]
    },
    "克": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "kè",
        "tone": 4,
        "english": "gram",
        "simplified": "",
        "radicals": ["", ""]
    },
    "誰": {
        "zhuyin": "ㄕㄟˊ",
        "pinyin": "shéi",
        "tone": 2,
        "english": "who",
        "simplified": "谁",
        "radicals": ["", ""]
    },
    "冷": {
        "zhuyin": "ㄌㄥˇ",
        "pinyin": "lěng",
        "tone": 3,
        "english": "cold",
        "simplified": "",
        "radicals": ["冫", "厶"]
    },
    "熱": {
        "zhuyin": "ㄖㄜˋ",
        "pinyin": "rè",
        "tone": 4,
        "english": "hot",
        "simplified": "热",
        "radicals": ["土", "灬", "埶"]
    },
    "方": {
        "zhuyin": "ㄈㄤ",
        "pinyin": "fāng",
        "tone": 1,
        "english": "place, square",
        "simplified": "",
        "radicals": ["亠", "㇓", "㇆"]
    },
    "老": {
        "zhuyin": "ㄌㄠˇ",
        "pinyin": "	lǎo",
        "tone": 3,
        "english": "old (prefix)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "應": {
        "zhuyin": "ㄧㄥ",
        "pinyin": "yīng",
        "tone": 1,
        "english": "should, ought to",
        "simplified": "应",
        "radicals": ["广", "亻", "隹"]
    },
    "比": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "(comparison p.)",
        "simplified": "",
        "radicals": ["匕"]
    },
    "幫": {
        "zhuyin": "ㄅㄤ",
        "pinyin": "bāng",
        "tone": 1,
        "english": "help",
        "simplified": "帮",
        "radicals": ["", ""]
    },
    "無": {
        "zhuyin": "ㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "not to have, -less",
        "simplified": "无",
        "radicals": ["𠂉", "灬"]
    },
    "晚": {
        "zhuyin": "ㄨㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "evening, late, night",
        "simplified": "",
        "radicals": ["日", "⺈"]
    },
    "動": {
        "zhuyin": "ㄉㄨㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to move",
        "simplified": "动",
        "radicals": ["千", "力"]
    },
    "頭": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "head",
        "simplified": "头",
        "radicals": ["", ""]
    },
    "機": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "machine",
        "simplified": "机",
        "radicals": ["木", "戈", "幺"]
    },
    "分": {
        "zhuyin": "ㄈㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "to divide, fraction",
        "simplified": "",
        "radicals": ["八", "刀"]
    },
    "特": {
        "zhuyin": "ㄊㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "special, unique",
        "simplified": "",
        "radicals": ["牛", "寸"]
    },
    "相": {
        "zhuyin": "ㄒㄧㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "mutual, each other",
        "simplified": "",
        "radicals": ["", ""]
    },
    "全": {
        "zhuyin": "ㄑㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "all, whole",
        "simplified": "",
        "radicals": ["", ""]
    },
    "殺": {
        "zhuyin": "ㄕㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to kill",
        "simplified": "杀",
        "radicals": ["", ""]
    },
    "需": {
        "zhuyin": "ㄒㄩ",
        "pinyin": "",
        "tone": 1,
        "english": "to need, want",
        "simplified": "",
        "radicals": ["", ""]
    },
    "放": {
        "zhuyin": "ㄈㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to put",
        "simplified": "",
        "radicals": ["", ""]
    },
    "常": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "cháng",
        "tone": 2,
        "english": "always, general",
        "simplified": "",
        "radicals": ["", ""]
    },
    "直": {
        "zhuyin": "ㄓˊ",
        "pinyin": "zhí",
        "tone": 2,
        "english": "straight",
        "simplified": "",
        "radicals": ["", ""]
    },
    "才": {
        "zhuyin": "ㄘㄞˊ",
        "pinyin": "cái",
        "tone": 2,
        "english": "just now, ability",
        "simplified": "",
        "radicals": ["", ""]
    },
    "美": {
        "zhuyin": "ㄇㄟˇ",
        "pinyin": "měi",
        "tone": 3,
        "english": "beautiful",
        "simplified": "",
        "radicals": ["", ""]
    },
    "於": {
        "zhuyin": "ㄩˊ",
        "pinyin": "yú",
        "tone": 2,
        "english": "in, at, on",
        "simplified": "于",
        "radicals": ["", ""]
    },
    "帶": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "to bring, belt",
        "simplified": "带",
        "radicals": ["", ""]
    },
    "今": {
        "zhuyin": "ㄐㄧㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "now",
        "simplified": "",
        "radicals": ["", ""]
    },
    "力": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "	lì",
        "tone": 4,
        "english": "power",
        "simplified": "",
        "radicals": ["", ""]
    },
    "工": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "work",
        "simplified": "",
        "radicals": ["", ""]
    },
    "許": {
        "zhuyin": "ㄒㄩˇ",
        "pinyin": "xǔ",
        "tone": 3,
        "english": "to permit",
        "simplified": "许",
        "radicals": ["", ""]
    },
    "東": {
        "zhuyin": "ㄉㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "east",
        "simplified": "东",
        "radicals": ["", ""]
    },
    "名": {
        "zhuyin": "ㄇㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "name",
        "simplified": "",
        "radicals": ["", ""]
    },
    "同": {
        "zhuyin": "ㄊㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "same, similar",
        "simplified": "",
        "radicals": ["", ""]
    },
    "長": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "long, length",
        "simplified": "长",
        "radicals": ["", ""]
    },
    "親": {
        "zhuyin": "ㄑㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "parent, relative",
        "simplified": "亲",
        "radicals": ["", ""]
    },
    "種": {
        "zhuyin": "ㄓㄨㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "kind",
        "simplified": "种",
        "radicals": ["", ""]
    },
    "者": {
        "zhuyin": "ㄓㄜˇ",
        "pinyin": "",
        "tone": 3,
        "english": "one who (is)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "嘿": {
        "zhuyin": "ㄏㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "hey",
        "simplified": "",
        "radicals": ["", ""]
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "",
        "tone": 2,
        "english": "white, pure",
        "simplified": "",
        "radicals": ["", ""]
    },
    "學": {
        "zhuyin": "ㄒㄩㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "learn",
        "simplified": "学",
        "radicals": ["", ""]
    },
    "安": {
        "zhuyin": "ㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "safe, calm",
        "simplified": "",
        "radicals": ["", ""]
    },
    "爾": {
        "zhuyin": "ㄦˇ",
        "pinyin": "",
        "tone": 3,
        "english": "thus, thou",
        "simplified": "尔",
        "radicals": ["", ""]
    },
    "叫": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "call",
        "simplified": "",
        "radicals": ["", ""]
    },
    "理": {
        "zhuyin": "ㄌㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "essence, truth",
        "simplified": "",
        "radicals": ["", ""]
    },

    "本": {
        "zhuyin": "ㄅㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "measure w. for books",
        "simplified": "",
        "radicals": ["", ""]
    },
    "國": {
        "zhuyin": "ㄍㄨㄛˊ",
        "pinyin": "",
        "tone": 2,
        "english": "country",
        "simplified": "国",
        "radicals": ["", ""]
    },
    "第": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "ordinal #",
        "simplified": "",
        "radicals": ["", ""]
    },
    "友": {
        "zhuyin": "ㄧㄡˇ",
        "pinyin": "",
        "tone": 3,
        "english": "friend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "高": {
        "zhuyin": "ㄍㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "high, tall",
        "simplified": "",
        "radicals": ["", ""]
    },
    "兩": {
        "zhuyin": "ㄌㄧㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "two (used with measure w.)",
        "simplified": "两",
        "radicals": ["", ""]
    },
    "保": {
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "defend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "請": {
        "zhuyin": "ㄑㄧㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "invite",
        "simplified": "请",
        "radicals": ["", ""]
    },
    "非": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "not",
        "simplified": "",
        "radicals": ["", ""]
    },
    "重": {
        "zhuyin": "ㄓㄨㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "heavy, serious",
        "simplified": "",
        "radicals": ["", ""]
    },
    "公": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "public",
        "simplified": "",
        "radicals": ["", ""]
    },
    "記": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to record",
        "simplified": "记",
        "radicals": ["", ""]
    },
    "身": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "body",
        "simplified": "",
        "radicals": ["", ""]
    },
    "受": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to receive",
        "simplified": "",
        "radicals": ["", ""]
    },
    "住": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to live, reside",
        "simplified": "",
        "radicals": ["", ""]
    },
    "活": {
        "zhuyin": "ㄏㄨㄛˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to live",
        "simplified": "",
        "radicals": ["", ""]
    },
    "加": {
        "zhuyin": "ㄐㄧㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to add, plus",
        "simplified": "",
        "radicals": ["", ""]
    },
    "何": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "question word",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伙": {
        "zhuyin": "ㄏㄨㄛˇ",
        "pinyin": "",
        "tone": 3,
        "english": "companion, buddy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "題": {
        "zhuyin": "ㄊㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "topic, subject",
        "simplified": "题",
        "radicals": ["", ""]
    },
    "完": {
        "zhuyin": "ㄨㄢˊ ",
        "pinyin": "wán",
        "tone": 2,
        "english": "to finish, complete",
        "simplified": "",
        "radicals": ["", ""]
    },
    "接": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "	jiē",
        "tone": 1,
        "english": "to receive, join",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拿": {
        "zhuyin": "ㄋㄚˊ",
        "pinyin": "	ná",
        "tone": 2,
        "english": "to take",
        "simplified": "",
        "radicals": ["", ""]
    },
    "望": {
        "zhuyin": "ㄨㄤˋ",
        "pinyin": "wàng",
        "tone": 4,
        "english": "to gaze, hope",
        "simplified": "",
        "radicals": ["", ""]
    },
    "解": {
        "zhuyin": "ㄐㄧㄝˇ",
        "pinyin": "	jiě",
        "tone": 3,
        "english": "to divide, explain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "其": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "qí",
        "tone": 2,
        "english": "his, hers, its",
        "simplified": "",
        "radicals": ["", ""]
    },
    "離": {
        "zhuyin": "ㄌㄧˊ",
        "pinyin": "lí",
        "tone": 2,
        "english": "to leave, (distance) from",
        "simplified": "离",
        "radicals": ["", ""]
    },
    "談": {
        "zhuyin": "ㄊㄢˊ",
        "pinyin": "tán",
        "tone": 2,
        "english": "to chat",
        "simplified": "谈",
        "radicals": ["", ""]
    },
    "又": {
        "zhuyin": "ㄧㄡˋ",
        "pinyin": "yòu",
        "tone": 4,
        "english": "again, also",
        "simplified": "",
        "radicals": ["", ""]
    },
    "新": {
        "zhuyin": "ㄒㄧㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "new",
        "simplified": "",
        "radicals": ["", ""]
    },
    "更": {
        "zhuyin": "ㄍㄥ",
        "pinyin": "gèng",
        "tone": 4,
        "english": "more",
        "simplified": "",
        "radicals": ["", ""]
    },
    "錢": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "qián",
        "tone": 2,
        "english": "money",
        "simplified": "钱",
        "radicals": ["", ""]
    },
    "馬": {
        "zhuyin": "ㄇㄚˇ",
        "pinyin": "mǎ",
        "tone": 3,
        "english": "horse",
        "simplified": "马",
        "radicals": ["", ""]
    },
    "思": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "to think, consider",
        "simplified": "",
        "radicals": ["", ""]
    },
    "部": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "tone": 4,
        "english": "section, part",
        "simplified": "",
        "radicals": ["", ""]
    },
    "場": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "cháng",
        "tone": 2,
        "english": "open area",
        "simplified": "场",
        "radicals": ["", ""]
    },
    "嗯": {
        "zhuyin": "ㄣ˙",
        "pinyin": "en",
        "tone": 5,
        "english": "(approval interjection)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "計": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "to plan",
        "simplified": "计",
        "radicals": ["", ""]
    },
    "任": {
        "zhuyin": "ㄖㄣˋ",
        "pinyin": "rèn",
        "tone": 4,
        "english": "to appoint, office",
        "simplified": "",
        "radicals": ["", ""]
    },
    "確": {
        "zhuyin": "ㄑㄩㄝˋ",
        "pinyin": "què",
        "tone": 4,
        "english": "solid, real",
        "simplified": "确",
        "radicals": ["", ""]
    },
    "吃": {
        "zhuyin": "ㄔ",
        "pinyin": "chī",
        "tone": 1,
        "english": "to eat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "始": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "to begin",
        "simplified": "",
        "radicals": ["", ""]
    },
    "結": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "jiē",
        "tone": 1,
        "english": "to produce",
        "simplified": "结",
        "radicals": ["", ""]
    },
    "利": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "sharp, benefit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "朋": {
        "zhuyin": "ㄆㄥˊ",
        "pinyin": "péng",
        "tone": 2,
        "english": "friend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "警": {
        "zhuyin": "ㄐㄧㄥˇ",
        "pinyin": "jǐng",
        "tone": 1,
        "english": "police, to warn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "士": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "scholar, soldier",
        "simplified": "",
        "radicals": ["", ""]
    },
    "外": {
        "zhuyin": "ㄨㄞˋ",
        "pinyin": "wài",
        "tone": 4,
        "english": "outside, foreign",
        "simplified": "",
        "radicals": ["", ""]
    },
    "件": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "(measure w. for items)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "難": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "nán",
        "tone": 2,
        "english": "difficult",
        "simplified": "难",
        "radicals": ["", ""]
    },
    "位": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "(measure w. for people)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "表": {
        "zhuyin": "ㄅㄧㄠˇ",
        "pinyin": "biǎo",
        "tone": 3,
        "english": "exterior surface",
        "simplified": "",
        "radicals": ["", ""]
    },
    "剛": {
        "zhuyin": "ㄍㄤ",
        "pinyin": "gāng",
        "tone": 1,
        "english": "just(now), hard",
        "simplified": "刚",
        "radicals": ["", ""]
    },
    "希": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "hope",
        "simplified": "",
        "radicals": ["", ""]
    },
    "查": {
        "zhuyin": "ㄔㄚˊ",
        "pinyin": "chá",
        "tone": 2,
        "english": "to research",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拉": {
        "zhuyin": "ㄌㄚ",
        "pinyin": "lā",
        "tone": 1,
        "english": "to pull",
        "simplified": "",
        "radicals": ["", ""]
    },
    "邊": {
        "zhuyin": "ㄅㄧㄢ",
        "pinyin": "biān",
        "tone": 1,
        "english": "side, edge",
        "simplified": "边",
        "radicals": ["", ""]
    },
    "或": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "huò",
        "tone": 4,
        "english": "maybe, perhaps",
        "simplified": "",
        "radicals": ["", ""]
    },
    "將": {
        "zhuyin": "ㄐㄧㄤ",
        "pinyin": "jiāng",
        "tone": 1,
        "english": "will, shall",
        "simplified": "将",
        "radicals": ["", ""]
    },
    "男": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "nán",
        "tone": 2,
        "english": "male",
        "simplified": "",
        "radicals": ["", ""]
    },
    "准": {
        "zhuyin": "ㄓㄨㄣˇ",
        "pinyin": "zhǔn",
        "tone": 3,
        "english": "to allow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "變": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "biàn",
        "tone": 2,
        "english": "to change",
        "simplified": "变",
        "radicals": ["", ""]
    },
    "證": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "zhèng",
        "tone": 4,
        "english": "proof",
        "simplified": "证",
        "radicals": ["", ""]
    },
    "物": {
        "zhuyin": "ㄨˋ",
        "pinyin": "wù",
        "tone": 4,
        "english": "thing, object",
        "simplified": "",
        "radicals": ["", ""]
    },
    "員": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "yuán",
        "tone": 2,
        "english": "employee, member",
        "simplified": "员",
        "radicals": ["", ""]
    },
    "總": {
        "zhuyin": "ㄗㄨㄥˇ",
        "pinyin": "zǒng",
        "tone": 3,
        "english": "always",
        "simplified": "总",
        "radicals": ["", ""]
    },
    "噢": {
        "zhuyin": "ㄛ",
        "pinyin": "ō",
        "tone": 1,
        "english": "moan sound",
        "simplified": "",
        "radicals": ["", ""]
    },
    "系": {
        "zhuyin": "ㄒㄧˋ",
        "pinyin": "xì",
        "tone": 4,
        "english": "system, to connect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "幾": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "jǐ",
        "tone": 1,
        "english": "how many",
        "simplified": "几",
        "radicals": ["", ""]
    },
    "管": {
        "zhuyin": "ㄍㄨㄢˇ",
        "pinyin": "guǎn",
        "tone": 3,
        "english": "to control",
        "simplified": "",
        "radicals": ["", ""]
    },
    "玩": {
        "zhuyin": "ㄨㄢˊ",
        "pinyin": "wán",
        "tone": 2,
        "english": "play",
        "simplified": "",
        "radicals": ["", ""]
    },
    "處": {
        "zhuyin": "ㄔㄨˇ",
        "pinyin": "chù",
        "tone": 3,
        "english": "place, location",
        "simplified": "处",
        "radicals": ["", ""]
    },
    "辦": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "bàn",
        "tone": 4,
        "english": "to do, manage",
        "simplified": "办",
        "radicals": ["", ""]
    },
    "主": {
        "zhuyin": "ㄓㄨˇ",
        "pinyin": "zhǔ",
        "tone": 3,
        "english": "master, main",
        "simplified": "",
        "radicals": ["", ""]
    },
    "氣": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "air",
        "simplified": "气",
        "radicals": ["", ""]
    },
    "每": {
        "zhuyin": "ㄇㄟˇ",
        "pinyin": "měi",
        "tone": 3,
        "english": "each, every",
        "simplified": "",
        "radicals": ["", ""]
    },
    "少": {
        "zhuyin": "ㄕㄠˇ",
        "pinyin": "shǎo",
        "tone": 3,
        "english": "few, little",
        "simplified": "",
        "radicals": ["", ""]
    },
    "切": {
        "zhuyin": "ㄑㄧㄝ",
        "pinyin": "qiē",
        "tone": 1,
        "english": "to cut, slice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "失": {
        "zhuyin": "ㄕ",
        "pinyin": "shī",
        "tone": 1,
        "english": "to lose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "算": {
        "zhuyin": "ㄙㄨㄢˋ",
        "pinyin": "suàn",
        "tone": 4,
        "english": "to calculate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "性": {
        "zhuyin": "ㄒㄧㄥˋ",
        "pinyin": "xìng",
        "tone": 4,
        "english": "nature, gender",
        "simplified": "",
        "radicals": ["", ""]
    },
    "此": {
        "zhuyin": "ㄘˇ",
        "pinyin": "cǐ",
        "tone": 3,
        "english": "this, these",
        "simplified": "",
        "radicals": ["", ""]
    },
    "必": {
        "zhuyin": "ㄅㄧˋ",
        "pinyin": "bì",
        "tone": 4,
        "english": "must, will",
        "simplified": "",
        "radicals": ["", ""]
    },
    "備": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "get ready",
        "simplified": "备",
        "radicals": ["", ""]
    },
    "合": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "tone": 2,
        "english": "to close, together",
        "simplified": "",
        "radicals": ["", ""]
    },
    "德": {
        "zhuyin": "ㄉㄜˊ",
        "pinyin": "dé",
        "tone": 2,
        "english": "virtue, ethics",
        "simplified": "",
        "radicals": ["", ""]
    },
    "隊": {
        "zhuyin": "ㄉㄨㄟˋ",
        "pinyin": "duì",
        "tone": 4,
        "english": "team, group",
        "simplified": "队",
        "radicals": ["", ""]
    },
    "試": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to test, try",
        "simplified": "试",
        "radicals": ["", ""]
    },
    "抱": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "bào",
        "tone": 4,
        "english": "to carry in arms",
        "simplified": "",
        "radicals": ["", ""]
    },
    "醫": {
        "zhuyin": "ㄧ",
        "pinyin": "yī",
        "tone": 1,
        "english": "medical",
        "simplified": "医",
        "radicals": ["", ""]
    },
    "通": {
        "zhuyin": "ㄊㄨㄥ",
        "pinyin": "tōng",
        "tone": 1,
        "english": "to connect, open",
        "simplified": "",
        "radicals": ["", ""]
    },
    "體": {
        "zhuyin": "ㄊㄧˇ",
        "pinyin": "tǐ",
        "tone": 3,
        "english": "body, form",
        "simplified": "体",
        "radicals": ["", ""]
    },
    "樂": {
        "zhuyin": "ㄌㄜˋ",
        "pinyin": "lè",
        "tone": 4,
        "english": "happy",
        "simplified": "乐",
        "radicals": ["", ""]
    },
    "並": {
        "zhuyin": "ㄅㄧㄥˋ",
        "pinyin": "bìng",
        "tone": 4,
        "english": "(not) at all",
        "simplified": "并",
        "radicals": ["", ""]
    },
    "三": {
        "zhuyin": "ㄙㄢ",
        "pinyin": "sān",
        "tone": 1,
        "english": "three",
        "simplified": "",
        "radicals": ["", ""]
    },
    "早": {
        "zhuyin": "ㄗㄠˇ",
        "pinyin": "zǎo",
        "tone": 3,
        "english": "early, morning",
        "simplified": "",
        "radicals": ["", ""]
    },
    "門": {
        "zhuyin": "ㄇㄣˊ",
        "pinyin": "mén",
        "tone": 2,
        "english": "door, gate",
        "simplified": "门",
        "radicals": ["", ""]
    },
    "害": {
        "zhuyin": "ㄏㄞˋ",
        "pinyin": "hài",
        "tone": 4,
        "english": "harm",
        "simplified": "",
        "radicals": ["", ""]
    },
    "歉": {
        "zhuyin": "ㄑㄧㄢˋ",
        "pinyin": "qiàn",
        "tone": 4,
        "english": "to aplologize",
        "simplified": "",
        "radicals": ["", ""]
    },
    "選": {
        "zhuyin": "ㄒㄩㄢˇ",
        "pinyin": "xuǎn",
        "tone": 3,
        "english": "to choose",
        "simplified": "选",
        "radicals": ["", ""]
    },
    "嗨": {
        "zhuyin": "ㄏㄞ",
        "pinyin": "hāi",
        "tone": 1,
        "english": "oh, alas-(exclamation), hi, high-(loanwords)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "房": {
        "zhuyin": "ㄈㄤˊ",
        "pinyin": "fáng",
        "tone": 2,
        "english": "house, room",
        "simplified": "",
        "radicals": ["", ""]
    },
    "命": {
        "zhuyin": "ㄇㄧㄥˋ",
        "pinyin": "mìng",
        "tone": 4,
        "english": "life, fate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "且": {
        "zhuyin": "ㄑㄧㄝˇ",
        "pinyin": "qiě",
        "tone": 3,
        "english": "moreover, both",
        "simplified": "",
        "radicals": ["", ""]
    },
    "向": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "xiàng",
        "tone": 4,
        "english": "towards, direction",
        "simplified": "",
        "radicals": ["", ""]
    },
    "興": {
        "zhuyin": "ㄒㄧㄥ",
        "pinyin": "xīng",
        "tone": 1,
        "english": "to rise, flourish",
        "simplified": "兴",
        "radicals": ["", ""]
    },
    "球": {
        "zhuyin": "ㄑㄧㄡˊ",
        "pinyin": "qiú",
        "tone": 2,
        "english": "ball, sphere",
        "simplified": "",
        "radicals": ["", ""]
    },
    "服": {
        "zhuyin": "ㄈㄨˊ",
        "pinyin": "fú",
        "tone": 2,
        "english": "clothes, to serve",
        "simplified": "",
        "radicals": ["", ""]
    },
    "入": {
        "zhuyin": "ㄖㄨˋ",
        "pinyin": "rù",
        "tone": 4,
        "english": "to enter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "照": {
        "zhuyin": "ㄓㄠˋ",
        "pinyin": "zhào",
        "tone": 4,
        "english": "according to, to shine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "提": {
        "zhuyin": "ㄊㄧˊ",
        "pinyin": "tí",
        "tone": 2,
        "english": "to lift",
        "simplified": "",
        "radicals": ["", ""]
    },
    "掉": {
        "zhuyin": "ㄉㄧㄠˋ",
        "pinyin": "diào",
        "tone": 4,
        "english": "to fall, lose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "夫": {
        "zhuyin": "ㄈㄨ",
        "pinyin": "fū",
        "tone": 1,
        "english": "husband",
        "simplified": "",
        "radicals": ["", ""]
    },
    "路": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "lù",
        "tone": 4,
        "english": "road",
        "simplified": "",
        "radicals": ["", ""]
    },
    "演": {
        "zhuyin": "ㄧㄢˇ",
        "pinyin": "yǎn",
        "tone": 3,
        "english": "to act, develop",
        "simplified": "",
        "radicals": ["", ""]
    },
    "夠": {
        "zhuyin": "ㄍㄡˋ",
        "pinyin": "gòu",
        "tone": 4,
        "english": "to be enough",
        "simplified": "够",
        "radicals": ["", ""]
    },
    "日": {
        "zhuyin": "ㄖˋ",
        "pinyin": "rì",
        "tone": 4,
        "english": "sun, day",
        "simplified": "",
        "radicals": ["", ""]
    },
    "案": {
        "zhuyin": "ㄢˋ",
        "pinyin": "àn",
        "tone": 4,
        "english": "leagal case, record",
        "simplified": "",
        "radicals": ["", ""]
    },
    "舞": {
        "zhuyin": "ㄨˇ",
        "pinyin": "wǔ",
        "tone": 3,
        "english": "to dance",
        "simplified": "",
        "radicals": ["", ""]
    },
    "決": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "jué",
        "tone": 2,
        "english": "to decide",
        "simplified": "决",
        "radicals": ["", ""]
    },
    "求": {
        "zhuyin": "ㄑㄧㄡˊ",
        "pinyin": "qiú",
        "tone": 2,
        "english": "to look for, request",
        "simplified": "",
        "radicals": ["", ""]
    },
    "約": {
        "zhuyin": "ㄩㄝ",
        "pinyin": "yuē",
        "tone": 1,
        "english": "appointment, to invite",
        "simplified": "约",
        "radicals": ["", ""]
    },
    "字": {
        "zhuyin": "ㄗˋ",
        "pinyin": "zì",
        "tone": 4,
        "english": "word, character",
        "simplified": "",
        "radicals": ["", ""]
    },
    "呃": {
        "zhuyin": "ㄜˋ",
        "pinyin": "è",
        "tone": 4,
        "english": "belch, hiccup",
        "simplified": "",
        "radicals": ["", ""]
    },
    "肯": {
        "zhuyin": "ㄎㄣˇ",
        "pinyin": "kěn",
        "tone": 3,
        "english": "to agree",
        "simplified": "",
        "radicals": ["", ""]
    },
    "目": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "eye",
        "simplified": "",
        "radicals": ["", ""]
    },
    "笑": {
        "zhuyin": "ㄒㄧㄠˋ",
        "pinyin": "xiào",
        "tone": 4,
        "english": "to laugh",
        "simplified": "",
        "radicals": ["", ""]
    },
    "傷": {
        "zhuyin": "ㄕㄤ",
        "pinyin": "shāng",
        "tone": 1,
        "english": "wound",
        "simplified": "伤",
        "radicals": ["", ""]
    },
    "神": {
        "zhuyin": "ㄕㄣˊ",
        "pinyin": "shén",
        "tone": 2,
        "english": "deity, spirit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "父": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "father",
        "simplified": "",
        "radicals": ["", ""]
    },
    "指": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "finger, refer to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "報": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "bào",
        "tone": 4,
        "english": "to announce",
        "simplified": "报",
        "radicals": ["", ""]
    },
    "留": {
        "zhuyin": "ㄌㄧㄡˊ",
        "pinyin": "liú",
        "tone": 2,
        "english": "to stay, remain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "水": {
        "zhuyin": "ㄕㄨㄟˇ",
        "pinyin": "shuǐ",
        "tone": 3,
        "english": "water, liquid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "教": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "jiào",
        "tone": 4,
        "english": "to teach",
        "simplified": "",
        "radicals": ["", ""]
    },
    "槍": {
        "zhuyin": "ㄑㄧㄤ",
        "pinyin": "qiāng",
        "tone": 1,
        "english": "gun",
        "simplified": "枪",
        "radicals": ["", ""]
    },
    "清": {
        "zhuyin": "ㄑㄧㄥ",
        "pinyin": "qīng",
        "tone": 1,
        "english": "clear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "色": {
        "zhuyin": "ㄙㄜˋ",
        "pinyin": "sè",
        "tone": 4,
        "english": "color",
        "simplified": "",
        "radicals": ["", ""]
    },
    "號": {
        "zhuyin": "ㄏㄠˋ",
        "pinyin": "hào",
        "tone": 4,
        "english": "number",
        "simplified": "号",
        "radicals": ["", ""]
    },
    "世": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "life, age, world",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遠": {
        "zhuyin": "ㄩㄢˇ",
        "pinyin": "yuǎn",
        "tone": 3,
        "english": "far, distant",
        "simplified": "远",
        "radicals": ["", ""]
    },
    "片": {
        "zhuyin": "ㄆㄧㄢˋ",
        "pinyin": "piàn",
        "tone": 4,
        "english": "slice, thin piece",
        "simplified": "",
        "radicals": ["", ""]
    },
    "官": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "guān",
        "tone": 1,
        "english": "official",
        "simplified": "",
        "radicals": ["", ""]
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "pinyin": "kǒu",
        "tone": 3,
        "english": "mouth",
        "simplified": "",
        "radicals": ["", ""]
    },
    "師": {
        "zhuyin": "ㄕ",
        "pinyin": "shī",
        "tone": 1,
        "english": "teacher, master",
        "simplified": "师",
        "radicals": ["", ""]
    },
    "原": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "yuán",
        "tone": 2,
        "english": "original",
        "simplified": "",
        "radicals": ["", ""]
    },
    "酒": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "jiǔ",
        "tone": 3,
        "english": "wine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "周": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "zhōu",
        "tone": 1,
        "english": "circle, week",
        "simplified": "",
        "radicals": ["", ""]
    },
    "星": {
        "zhuyin": "ㄒㄧㄥ",
        "pinyin": "xīng",
        "tone": 1,
        "english": "star",
        "simplified": "",
        "radicals": ["", ""]
    },
    "識": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "to know",
        "simplified": "识",
        "radicals": ["", ""]
    },
    "賽": {
        "zhuyin": "ㄙㄞˋ",
        "pinyin": "sài",
        "tone": 4,
        "english": "competition",
        "simplified": "赛",
        "radicals": ["", ""]
    },
    "救": {
        "zhuyin": "ㄐㄧㄡˋ",
        "pinyin": "jiù",
        "tone": 4,
        "english": "to save",
        "simplified": "",
        "radicals": ["", ""]
    },
    "底": {
        "zhuyin": "ㄉㄧˇ",
        "pinyin": "dǐ",
        "tone": 3,
        "english": "bottom, end",
        "simplified": "",
        "radicals": ["", ""]
    },
    "棒": {
        "zhuyin": "ㄅㄤˋ",
        "pinyin": "bàng",
        "tone": 4,
        "english": "wonderful, stick",
        "simplified": "",
        "radicals": ["", ""]
    },
    "須": {
        "zhuyin": "ㄒㄩ",
        "pinyin": "xū",
        "tone": 1,
        "english": "must, beard",
        "simplified": "须",
        "radicals": ["", ""]
    },
    "收": {
        "zhuyin": "ㄕㄡ",
        "pinyin": "shōu",
        "tone": 1,
        "english": "to recieve",
        "simplified": "",
        "radicals": ["", ""]
    },
    "交": {
        "zhuyin": "ㄐㄧㄠ",
        "pinyin": "jiāo",
        "tone": 1,
        "english": "to deliver, to pay",
        "simplified": "",
        "radicals": ["", ""]
    },
    "坐": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "zuò",
        "tone": 4,
        "english": "to sit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "停": {
        "zhuyin": "ㄊㄧㄥˊ",
        "pinyin": "tíng",
        "tone": 2,
        "english": "to stop",
        "simplified": "",
        "radicals": ["", ""]
    },
    "卡": {
        "zhuyin": "ㄎㄚˇ",
        "pinyin": "kǎ",
        "tone": 3,
        "english": "card, to block",
        "simplified": "",
        "radicals": ["", ""]
    },
    "尼": {
        "zhuyin": "ㄋㄧˊ",
        "pinyin": "ní",
        "tone": 2,
        "english": "'ni' (phonetic for loanwords)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "婚": {
        "zhuyin": "ㄏㄨㄣ",
        "pinyin": "hūn",
        "tone": 1,
        "english": "to marry",
        "simplified": "",
        "radicals": ["", ""]
    },
    "格": {
        "zhuyin": "ㄍㄜˊ",
        "pinyin": "gé",
        "tone": 2,
        "english": "grid, pattern",
        "simplified": "",
        "radicals": ["", ""]
    },
    "眼": {
        "zhuyin": "ㄧㄢˇ",
        "pinyin": "yǎn",
        "tone": 3,
        "english": "eye",
        "simplified": "",
        "radicals": ["", ""]
    },
    "金": {
        "zhuyin": "ㄐㄧㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "gold",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蛋": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "dàn",
        "tone": 2,
        "english": "egg",
        "simplified": "",
        "radicals": ["", ""]
    },
    "息": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "breath, to rest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "室": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "room",
        "simplified": "",
        "radicals": ["", ""]
    },
    "內": {
        "zhuyin": "ㄋㄟˋ",
        "pinyin": "nèi",
        "tone": 4,
        "english": "inside, inner",
        "simplified": "",
        "radicals": ["", ""]
    },
    "運": {
        "zhuyin": "ㄩㄣˋ",
        "pinyin": "yùn",
        "tone": 4,
        "english": "to move, movement, fortune, luck",
        "simplified": "运",
        "radicals": ["", ""]
    },
    "根": {
        "zhuyin": "ㄍㄣ",
        "pinyin": "gēn",
        "tone": 1,
        "english": "root, basis",
        "simplified": "",
        "radicals": ["", ""]
    },
    "單": {
        "zhuyin": "ㄉㄢ",
        "pinyin": "dān",
        "tone": 1,
        "english": "single, list",
        "simplified": "单",
        "radicals": ["", ""]
    },
    "寶": {
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "bǎo",
        "tone": 3,
        "english": "jewel, treasure",
        "simplified": "宝",
        "radicals": ["", ""]
    },
    "哥": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "tone": 1,
        "english": "elder brother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "張": {
        "zhuyin": "ㄓㄤ",
        "pinyin": "zhāng",
        "tone": 1,
        "english": "(mw. for flat objects)",
        "simplified": "张",
        "radicals": ["", ""]
    },
    "搞": {
        "zhuyin": "ㄍㄠˇ",
        "pinyin": "gǎo",
        "tone": 3,
        "english": "to make, set up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戰": {
        "zhuyin": "ㄓㄢˋ",
        "pinyin": "zhàn",
        "tone": 4,
        "english": "to fight, war",
        "simplified": "战",
        "radicals": ["", ""]
    },
    "火": {
        "zhuyin": "ㄏㄨㄛˇ",
        "pinyin": "huǒ",
        "tone": 3,
        "english": "fire",
        "simplified": "",
        "radicals": ["", ""]
    },
    "羅": {
        "zhuyin": "ㄌㄨㄛˊ",
        "pinyin": "luó",
        "tone": 2,
        "english": "gauze, to gather",
        "simplified": "罗",
        "radicals": ["", ""]
    },
    "至": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "to arrive",
        "simplified": "",
        "radicals": ["", ""]
    },
    "萬": {
        "zhuyin": "ㄨㄢˋ",
        "pinyin": "wàn",
        "tone": 4,
        "english": "ten thousand",
        "simplified": "万",
        "radicals": ["", ""]
    },
    "聲": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "sound, voice",
        "simplified": "声",
        "radicals": ["", ""]
    },
    "布": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "tone": 4,
        "english": "cloth, to spread",
        "simplified": "",
        "radicals": ["", ""]
    },
    "音": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "yīn",
        "tone": 1,
        "english": "sound, noise",
        "simplified": "",
        "radicals": ["", ""]
    },
    "期": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "qī",
        "tone": 1,
        "english": "period of time",
        "simplified": "",
        "radicals": ["", ""]
    },
    "條": {
        "zhuyin": "ㄊㄧㄠˊ",
        "pinyin": "tiáo",
        "tone": 2,
        "english": "(mw. for long things)",
        "simplified": "条",
        "radicals": ["", ""]
    },
    "消": {
        "zhuyin": "ㄒㄧㄠ",
        "pinyin": "xiāo",
        "tone": 1,
        "english": "to vanish, disappear, need",
        "simplified": "",
        "radicals": ["", ""]
    },
    "買": {
        "zhuyin": "ㄇㄞˇ",
        "pinyin": "mǎi",
        "tone": 3,
        "english": "to buy",
        "simplified": "买",
        "radicals": ["", ""]
    },
    "病": {
        "zhuyin": "ㄅㄧㄥˋ",
        "pinyin": "bìng",
        "tone": 4,
        "english": "illness, disease",
        "simplified": "",
        "radicals": ["", ""]
    },
    "整": {
        "zhuyin": "ㄓㄥˇ",
        "pinyin": "zhěng",
        "tone": 3,
        "english": "exactly, entire, whole, in order",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奇": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "qí",
        "tone": 2,
        "english": "strange",
        "simplified": "",
        "radicals": ["", ""]
    },
    "弟": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "dì",
        "tone": 4,
        "english": "little brother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "犯": {
        "zhuyin": "ㄈㄢˋ",
        "pinyin": "fàn",
        "tone": 4,
        "english": "to violate, offend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "裝": {
        "zhuyin": "ㄓㄨㄤ",
        "pinyin": "zhuāng",
        "tone": 1,
        "english": "clothing, to pretend",
        "simplified": "装",
        "radicals": ["", ""]
    },
    "貝": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "shell",
        "simplified": "贝",
        "radicals": ["", ""]
    },
    "您": {
        "zhuyin": "ㄋㄧㄣˊ",
        "pinyin": "nín",
        "tone": 2,
        "english": "you (polite, formal)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "送": {
        "zhuyin": "ㄙㄨㄥˋ",
        "pinyin": "sòng",
        "tone": 4,
        "english": "to give, deliver",
        "simplified": "",
        "radicals": ["", ""]
    },
    "怕": {
        "zhuyin": "ㄆㄚˋ",
        "pinyin": "pà",
        "tone": 4,
        "english": "to fear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "護": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "hù",
        "tone": 4,
        "english": "to protect",
        "simplified": "护",
        "radicals": ["", ""]
    },
    "度": {
        "zhuyin": "ㄉㄨˋ",
        "pinyin": "dù",
        "tone": 4,
        "english": "degree, measure",
        "simplified": "",
        "radicals": ["", ""]
    },
    "花": {
        "zhuyin": "ㄏㄨㄚ",
        "pinyin": "huā",
        "tone": 1,
        "english": "flower, to spend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "節": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "jié",
        "tone": 2,
        "english": "festival",
        "simplified": "节",
        "radicals": ["", ""]
    },
    "近": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "jìn",
        "tone": 4,
        "english": "near",
        "simplified": "",
        "radicals": ["", ""]
    },
    "怪": {
        "zhuyin": "ㄍㄨㄞˋ",
        "pinyin": "guài",
        "tone": 4,
        "english": "odd, monster",
        "simplified": "",
        "radicals": ["", ""]
    },
    "持": {
        "zhuyin": "ㄔˊ",
        "pinyin": "chí",
        "tone": 2,
        "english": "to maintain, manage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "光": {
        "zhuyin": "ㄍㄨㄤ",
        "pinyin": "guāng",
        "tone": 1,
        "english": "bright, only",
        "simplified": "",
        "radicals": ["", ""]
    },
    "與": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "and, with",
        "simplified": "与",
        "radicals": ["", ""]
    },
    "穿": {
        "zhuyin": "ㄔㄨㄢ",
        "pinyin": "chuān",
        "tone": 1,
        "english": "to wear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "願": {
        "zhuyin": "ㄩㄢˋ",
        "pinyin": "yuàn",
        "tone": 4,
        "english": "to hope, willing",
        "simplified": "愿",
        "radicals": ["", ""]
    },
    "象": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "xiàng",
        "tone": 4,
        "english": "elephant, form",
        "simplified": "",
        "radicals": ["", ""]
    },
    "影": {
        "zhuyin": "ㄧㄥˇ",
        "pinyin": "yǐng",
        "tone": 3,
        "english": "image",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擊": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "to hit",
        "simplified": "击",
        "radicals": ["", ""]
    },
    "使": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "to cause",
        "simplified": "",
        "radicals": ["", ""]
    },
    "二": {
        "zhuyin": "ㄦˋ",
        "pinyin": "èr",
        "tone": 2,
        "english": "two",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喝": {
        "zhuyin": "ㄏㄜ",
        "pinyin": "hē",
        "tone": 1,
        "english": "to drink",
        "simplified": "",
        "radicals": ["", ""]
    },
    "月": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "yuè",
        "tone": 4,
        "english": "moon, month",
        "simplified": "",
        "radicals": ["", ""]
    },
    "器": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "device, tool",
        "simplified": "",
        "radicals": ["", ""]
    },
    "察": {
        "zhuyin": "ㄔㄚˊ",
        "pinyin": "chá",
        "tone": 2,
        "english": "to examine, observe",
        "simplified": "",
        "radicals": ["", ""]
    },
    "制": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "to manufacture",
        "simplified": "",
        "radicals": ["", ""]
    },
    "嘛": {
        "zhuyin": "ㄇㄚ˙",
        "pinyin": "ma",
        "tone": 5,
        "english": "(obvious p.), (pause p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "哈": {
        "zhuyin": "ㄏㄚ",
        "pinyin": "hā",
        "tone": 1,
        "english": "HA- laughter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "助": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "zhù",
        "tone": 4,
        "english": "to help",
        "simplified": "",
        "radicals": ["", ""]
    },
    "達": {
        "zhuyin": "ㄉㄚˊ",
        "pinyin": "dá",
        "tone": 2,
        "english": "to reach",
        "simplified": "达",
        "radicals": ["", ""]
    },
    "海": {
        "zhuyin": "ㄏㄞˇ",
        "pinyin": "hǎi",
        "tone": 3,
        "english": "ocean, sea",
        "simplified": "",
        "radicals": ["", ""]
    },
    "待": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "to wait, about to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "托": {
        "zhuyin": "ㄊㄨㄛ",
        "pinyin": "tuō",
        "tone": 1,
        "english": "support, to entrust",
        "simplified": "",
        "radicals": ["", ""]
    },
    "除": {
        "zhuyin": "ㄔㄨˊ",
        "pinyin": "chú",
        "tone": 2,
        "english": "to remove",
        "simplified": "",
        "radicals": ["", ""]
    },
    "寫": {
        "zhuyin": "ㄒㄧㄝˇ",
        "pinyin": "xiě",
        "tone": 3,
        "english": "to write",
        "simplified": "写",
        "radicals": ["", ""]
    },
    "絕": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "jué",
        "tone": 2,
        "english": "sever, absolutely",
        "simplified": "绝",
        "radicals": ["", ""]
    },
    "界": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "jiè",
        "tone": 4,
        "english": "boundary, scope",
        "simplified": "",
        "radicals": ["", ""]
    },
    "帝": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "dì",
        "tone": 4,
        "english": "emperor",
        "simplified": "",
        "radicals": ["", ""]
    },
    "姐": {
        "zhuyin": "ㄐㄧㄝˇ",
        "pinyin": "jiě",
        "tone": 3,
        "english": "older sister",
        "simplified": "",
        "radicals": ["", ""]
    },
    "反": {
        "zhuyin": "ㄈㄢˇ",
        "pinyin": "fǎn",
        "tone": 3,
        "english": "contrary, opposite",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擔": {
        "zhuyin": "ㄉㄢ",
        "pinyin": "dān",
        "tone": 1,
        "english": "to undertake",
        "simplified": "担",
        "radicals": ["", ""]
    },
    "司": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "to manage, department",
        "simplified": "",
        "radicals": ["", ""]
    },
    "強": {
        "zhuyin": "ㄑㄧㄤˊ",
        "pinyin": "qiáng",
        "tone": 2,
        "english": "strong, powerful",
        "simplified": "强",
        "radicals": ["", ""]
    },
    "由": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "yóu",
        "tone": 2,
        "english": "from, by",
        "simplified": "",
        "radicals": ["", ""]
    },
    "論": {
        "zhuyin": "ㄌㄨㄣˋ",
        "pinyin": "lùn",
        "tone": 4,
        "english": "opinion, theory",
        "simplified": "论",
        "radicals": ["", ""]
    },
    "飛": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi",
        "tone": 1,
        "english": "to fly",
        "simplified": "飞",
        "radicals": ["", ""]
    },
    "亞": {
        "zhuyin": "ㄧㄚˋ",
        "pinyin": "yà",
        "tone": 4,
        "english": "Asia",
        "simplified": "亚",
        "radicals": ["", ""]
    },
    "續": {
        "zhuyin": "ㄒㄩˋ",
        "pinyin": "xù",
        "tone": 4,
        "english": "to continue",
        "simplified": "续",
        "radicals": ["", ""]
    },
    "視": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to look at",
        "simplified": "视",
        "radicals": ["", ""]
    },
    "母": {
        "zhuyin": "ㄇㄨˇ",
        "pinyin": "mǔ",
        "tone": 3,
        "english": "mother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "空": {
        "zhuyin": "ㄎㄨㄥ",
        "pinyin": "kōng",
        "tone": 1,
        "english": "empty, air",
        "simplified": "",
        "radicals": ["", ""]
    },
    "軍": {
        "zhuyin": "ㄐㄩㄣ",
        "pinyin": "jūn",
        "tone": 1,
        "english": "army",
        "simplified": "军",
        "radicals": ["", ""]
    },
    "跑": {
        "zhuyin": "ㄆㄠˇ",
        "pinyin": "pǎo",
        "tone": 3,
        "english": "to run",
        "simplified": "",
        "radicals": ["", ""]
    },
    "阿": {
        "zhuyin": "ㄚ",
        "pinyin": "ā",
        "tone": 1,
        "english": "(prefix for names)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盡": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "jìn",
        "tone": 4,
        "english": "to greatest extent",
        "simplified": "尽",
        "radicals": ["", ""]
    },
    "注": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "zhù",
        "tone": 4,
        "english": "pay attention, to register",
        "simplified": "",
        "radicals": ["", ""]
    },
    "弄": {
        "zhuyin": "ㄋㄨㄥˋ",
        "pinyin": "nòng",
        "tone": 4,
        "english": "to do",
        "simplified": "",
        "radicals": ["", ""]
    },
    "密": {
        "zhuyin": "ㄇㄧˋ",
        "pinyin": "mì",
        "tone": 4,
        "english": "secret",
        "simplified": "",
        "radicals": ["", ""]
    },
    "線": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "xiàn",
        "tone": 4,
        "english": "thread",
        "simplified": "线",
        "radicals": ["", ""]
    },
    "代": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "to substitute, era",
        "simplified": "",
        "radicals": ["", ""]
    },
    "忙": {
        "zhuyin": "ㄇㄤˊ",
        "pinyin": "máng",
        "tone": 2,
        "english": "busy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "壞": {
        "zhuyin": "ㄏㄨㄞˋ",
        "pinyin": "huài",
        "tone": 4,
        "english": "bad, broken",
        "simplified": "坏",
        "radicals": ["", ""]
    },
    "久": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "jiǔ",
        "tone": 3,
        "english": "long (time)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "議": {
        "zhuyin": "ㄧˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "to discuss",
        "simplified": "议",
        "radicals": ["", ""]
    },
    "衣": {
        "zhuyin": "ㄧ",
        "pinyin": "yī",
        "tone": 1,
        "english": "clothes",
        "simplified": "",
        "radicals": ["", ""]
    },
    "血": {
        "zhuyin": "ㄒㄩㄝˋ",
        "pinyin": "xiě",
        "tone": 3,
        "english": "blood",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鍾": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "zhōng",
        "tone": 1,
        "english": "clock, o'clock",
        "simplified": "钟",
        "radicals": ["", ""]
    },
    "繼": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 2,
        "english": "to carry on",
        "simplified": "继",
        "radicals": ["", ""]
    },
    "禮": {
        "zhuyin": "ㄌㄧˇ",
        "pinyin": "lǐ",
        "tone": 1,
        "english": "gift, ceremony",
        "simplified": "礼",
        "radicals": ["", ""]
    },
    "數": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "number, figure",
        "simplified": "数",
        "radicals": ["", ""]
    },
    "份": {
        "zhuyin": "ㄈㄣˋ",
        "pinyin": "fèn",
        "tone": 4,
        "english": "(mw. for papers, sets)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "瘋": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "tone": 1,
        "english": "insane",
        "simplified": "疯",
        "radicals": ["", ""]
    },
    "平": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "píng",
        "tone": 2,
        "english": "flat, equal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "止": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "to prohibit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "十": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "ten",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拜": {
        "zhuyin": "ㄅㄞˋ",
        "pinyin": "bài",
        "tone": 4,
        "english": "to pay respect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鬼": {
        "zhuyin": "ㄍㄨㄟˇ",
        "pinyin": "guǐ",
        "tone": 3,
        "english": "ghost",
        "simplified": "",
        "radicals": ["", ""]
    },
    "睡": {
        "zhuyin": "ㄕㄨㄟˋ",
        "pinyin": "shuì",
        "tone": 4,
        "english": "sleep",
        "simplified": "",
        "radicals": ["", ""]
    },
    "啦": {
        "zhuyin": "ㄌㄚ˙",
        "pinyin": "la",
        "tone": 5,
        "english": "(exclamation p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "調": {
        "zhuyin": "ㄉㄧㄠˋ",
        "pinyin": "diào",
        "tone": 4,
        "english": "to transfer, tone",
        "simplified": "调",
        "radicals": ["", ""]
    },
    "巴": {
        "zhuyin": "ㄅㄚ",
        "pinyin": "bā",
        "tone": 1,
        "english": "to stick to, close to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "兄": {
        "zhuyin": "ㄒㄩㄥ",
        "pinyin": "xiōng",
        "tone": 1,
        "english": "elder brother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "緊": {
        "zhuyin": "ㄐㄧㄣˇ",
        "pinyin": "jǐn",
        "tone": 3,
        "english": "strict, tight",
        "simplified": "紧",
        "radicals": ["", ""]
    },
    "站": {
        "zhuyin": "ㄓㄢˋ",
        "pinyin": "zhàn",
        "tone": 4,
        "english": "to stop, station",
        "simplified": "",
        "radicals": ["", ""]
    },
    "品": {
        "zhuyin": "ㄆㄧㄣˇ",
        "pinyin": "pǐn",
        "tone": 3,
        "english": "goods, product",
        "simplified": "",
        "radicals": ["", ""]
    },
    "英": {
        "zhuyin": "ㄧㄥ",
        "pinyin": "yīng",
        "tone": 1,
        "english": "brave",
        "simplified": "",
        "radicals": ["", ""]
    },
    "罪": {
        "zhuyin": "ㄗㄨㄟˋ",
        "pinyin": "zuì",
        "tone": 4,
        "english": "guilt, crime",
        "simplified": "",
        "radicals": ["", ""]
    },
    "文": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "wén",
        "tone": 2,
        "english": "language, culture",
        "simplified": "",
        "radicals": ["", ""]
    },
    "亮": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "liàng",
        "tone": 4,
        "english": "bright, clear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "抓": {
        "zhuyin": "ㄓㄨㄚ",
        "pinyin": "zhuā",
        "tone": 1,
        "english": "to grab",
        "simplified": "",
        "radicals": ["", ""]
    },
    "跳": {
        "zhuyin": "ㄊㄧㄠˋ",
        "pinyin": "tiào",
        "tone": 4,
        "english": "to jump",
        "simplified": "",
        "radicals": ["", ""]
    },
    "聯": {
        "zhuyin": "ㄌㄧㄢˊ",
        "pinyin": "lián",
        "tone": 2,
        "english": "to unite, to join",
        "simplified": "联",
        "radicals": ["", ""]
    },
    "混": {
        "zhuyin": "ㄏㄨㄣˋ",
        "pinyin": "hùn",
        "tone": 4,
        "english": "to mix",
        "simplified": "",
        "radicals": ["", ""]
    },
    "便": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "biàn",
        "tone": 4,
        "english": "ordinary, convenient",
        "simplified": "",
        "radicals": ["", ""]
    },
    "狗": {
        "zhuyin": "ㄍㄡˇ",
        "pinyin": "gǒu",
        "tone": 3,
        "english": "dog",
        "simplified": "",
        "radicals": ["", ""]
    },
    "腦": {
        "zhuyin": "ㄋㄠˇ",
        "pinyin": "nǎo",
        "tone": 3,
        "english": "brain, mind",
        "simplified": "脑",
        "radicals": ["", ""]
    },
    "業": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "yè",
        "tone": 4,
        "english": "occupation",
        "simplified": "业",
        "radicals": ["", ""]
    },
    "歌": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "tone": 1,
        "english": "song",
        "simplified": "",
        "radicals": ["", ""]
    },
    "精": {
        "zhuyin": "ㄐㄧㄥ",
        "pinyin": "jīng",
        "tone": 1,
        "english": "essence, vitality",
        "simplified": "",
        "radicals": ["", ""]
    },
    "包": {
        "zhuyin": "ㄅㄠ",
        "pinyin": "bāo",
        "tone": 1,
        "english": "to wrap, bag",
        "simplified": "",
        "radicals": ["", ""]
    },
    "轉": {
        "zhuyin": "ㄓㄨㄢˇ",
        "pinyin": "zhuǎn",
        "tone": 3,
        "english": "to revolve, turn",
        "simplified": "转",
        "radicals": ["", ""]
    },
    "卻": {
        "zhuyin": "ㄑㄩㄝˋ",
        "pinyin": "què",
        "tone": 4,
        "english": "but, however",
        "simplified": "",
        "radicals": ["", ""]
    },
    "參": {
        "zhuyin": "ㄘㄢ",
        "pinyin": "cān",
        "tone": 1,
        "english": "to participate",
        "simplified": "参",
        "radicals": ["", ""]
    },
    "院": {
        "zhuyin": "ㄩㄢˋ",
        "pinyin": "yuàn",
        "tone": 4,
        "english": "courtyard, institution",
        "simplified": "",
        "radicals": ["", ""]
    },
    "務": {
        "zhuyin": "ㄨˋ",
        "pinyin": "wù",
        "tone": 4,
        "english": "affair, buisness",
        "simplified": "务",
        "radicals": ["", ""]
    },
    "基": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "jī",
        "tone": 1,
        "english": "base, foundation",
        "simplified": "",
        "radicals": ["", ""]
    },

}
const hanzi2 = {
    // count 500 ish   
    "臺": {
        "zhuyin": "ㄊㄞˊ",
        "pinyin": "tái",
        "tone": 2,
        "english": "platform",
        "simplified": "台",
        "radicals": ["", ""]
    },
    "另": {
        "zhuyin": "ㄌㄧㄥˋ",
        "pinyin": "lìng",
        "tone": 4,
        "english": "other, another",
        "simplified": "",
        "radicals": ["", ""]
    },
    "恩": {
        "zhuyin": "ㄣ",
        "pinyin": "ēn",
        "tone": 1,
        "english": "grace",
        "simplified": "",
        "radicals": ["", ""]
    },
    "書": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "book",
        "simplified": "书",
        "radicals": ["", ""]
    },
    "統": {
        "zhuyin": "ㄊㄨㄥˇ",
        "pinyin": "tǒng",
        "tone": 3,
        "english": "to unite",
        "simplified": "统",
        "radicals": ["", ""]
    },
    "風": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "tone": 1,
        "english": "wind",
        "simplified": "风",
        "radicals": ["", ""]
    },
    "況": {
        "zhuyin": "ㄎㄨㄤˋ",
        "pinyin": "kuàng",
        "tone": 4,
        "english": "situation, moreover",
        "simplified": "况",
        "radicals": ["", ""]
    },
    "四": {
        "zhuyin": "ㄙˋ",
        "pinyin": "sì",
        "tone": 4,
        "english": "four",
        "simplified": "",
        "radicals": ["", ""]
    },
    "黑": {
        "zhuyin": "ㄏㄟ",
        "pinyin": "hēi",
        "tone": 1,
        "english": "black",
        "simplified": "",
        "radicals": ["", ""]
    },
    "否": {
        "zhuyin": "ㄈㄡˇ",
        "pinyin": "fǒu",
        "tone": 3,
        "english": "to deny",
        "simplified": "",
        "radicals": ["", ""]
    },
    "險": {
        "zhuyin": "ㄒㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "danger",
        "simplified": "险",
        "radicals": ["", ""]
    },
    "言": {
        "zhuyin": "ㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "words, speech",
        "simplified": "",
        "radicals": ["", ""]
    },
    "米": {
        "zhuyin": "ㄇㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "傑": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "distinguished",
        "simplified": "杰",
        "radicals": ["", ""]
    },
    "校": {
        "zhuyin": "ㄒㄧㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "school",
        "simplified": "",
        "radicals": ["", ""]
    },
    "幸": {
        "zhuyin": "ㄒㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "fortunate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "傳": {
        "zhuyin": "ㄔㄨㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to transfer, send",
        "simplified": "传",
        "radicals": ["", ""]
    },
    "復": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to return, repeat",
        "simplified": "复",
        "radicals": ["", ""]
    },
    "量": {
        "zhuyin": "ㄌㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "quantity, amount",
        "simplified": "",
        "radicals": ["", ""]
    },
    "首": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "",
        "tone": 3,
        "english": "head, chief",
        "simplified": "",
        "radicals": ["", ""]
    },
    "改": {
        "zhuyin": "ㄍㄞˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to change",
        "simplified": "",
        "radicals": ["", ""]
    },
    "忘": {
        "zhuyin": "ㄨㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "forget",
        "simplified": "",
        "radicals": ["", ""]
    },
    "術": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "method, technique",
        "simplified": "术",
        "radicals": ["", ""]
    },
    "局": {
        "zhuyin": "ㄐㄩˊ",
        "pinyin": "jú",
        "tone": 2,
        "english": "office, narrow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "客": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "kè",
        "tone": 4,
        "english": "customer, guest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "假": {
        "zhuyin": "ㄐㄧㄚˇ",
        "pinyin": "jiǎ",
        "tone": 3,
        "english": "fake, to borrow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "永": {
        "zhuyin": "ㄩㄥˇ",
        "pinyin": "yǒng",
        "tone": 3,
        "english": "forever",
        "simplified": "",
        "radicals": ["", ""]
    },
    "維": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to maintain",
        "simplified": "维",
        "radicals": ["", ""]
    },
    "歲": {
        "zhuyin": "ㄙㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "years(of age)",
        "simplified": "岁",
        "radicals": ["", ""]
    },
    "據": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "according to, to seize",
        "simplified": "据",
        "radicals": ["", ""]
    },
    "派": {
        "zhuyin": "ㄆㄞˋ",
        "pinyin": "pài",
        "tone": 4,
        "english": "group, school of thought",
        "simplified": "",
        "radicals": ["", ""]
    },
    "票": {
        "zhuyin": "ㄆㄧㄠˋ",
        "pinyin": "piào",
        "tone": 4,
        "english": "ticket",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蘭": {
        "zhuyin": "ㄌㄢˊ",
        "pinyin": "lán",
        "tone": 2,
        "english": "orchid",
        "simplified": "兰",
        "radicals": ["", ""]
    },
    "惡": {
        "zhuyin": "ㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "evil, ugly",
        "simplified": "恶",
        "radicals": ["", ""]
    },
    "煩": {
        "zhuyin": "ㄈㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to trouble",
        "simplified": "烦",
        "radicals": ["", ""]
    },
    "取": {
        "zhuyin": "ㄑㄩˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to take",
        "simplified": "",
        "radicals": ["", ""]
    },
    "游": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to swim, travel",
        "simplified": "",
        "radicals": ["", ""]
    },
    "糟": {
        "zhuyin": "ㄗㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "ruined, bad, messy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "令": {
        "zhuyin": "ㄌㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "command, to order",
        "simplified": "",
        "radicals": ["", ""]
    },
    "隨": {
        "zhuyin": "ㄙㄨㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to follow, comply",
        "simplified": "随",
        "radicals": ["", ""]
    },
    "五": {
        "zhuyin": "ㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "five",
        "simplified": "",
        "radicals": ["", ""]
    },
    "聖": {
        "zhuyin": "ㄕㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "holy",
        "simplified": "圣",
        "radicals": ["", ""]
    },
    "式": {
        "zhuyin": "ㄕˋ",
        "pinyin": "",
        "tone": 4,
        "english": "type, style",
        "simplified": "",
        "radicals": ["", ""]
    },
    "探": {
        "zhuyin": "ㄊㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to explore",
        "simplified": "",
        "radicals": ["", ""]
    },
    "嘴": {
        "zhuyin": "ㄗㄨㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "mouth",
        "simplified": "",
        "radicals": ["", ""]
    },
    "毒": {
        "zhuyin": "ㄉㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "poison",
        "simplified": "",
        "radicals": ["", ""]
    },
    "越": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to exceed, climb over",
        "simplified": "",
        "radicals": ["", ""]
    },
    "律": {
        "zhuyin": "ㄌㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "law",
        "simplified": "",
        "radicals": ["", ""]
    },
    "費": {
        "zhuyin": "ㄈㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "expense",
        "simplified": "费",
        "radicals": ["", ""]
    },
    "科": {
        "zhuyin": "ㄎㄜ",
        "pinyin": "",
        "tone": 1,
        "english": "division",
        "simplified": "",
        "radicals": ["", ""]
    },
    "麻": {
        "zhuyin": "ㄇㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "hemp, rough",
        "simplified": "",
        "radicals": ["", ""]
    },
    "簡": {
        "zhuyin": "ㄐㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "simple",
        "simplified": "简",
        "radicals": ["", ""]
    },
    "易": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "easy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "流": {
        "zhuyin": "ㄌㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to flow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "治": {
        "zhuyin": "ㄓˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to govern, solve",
        "simplified": "",
        "radicals": ["", ""]
    },
    "唱": {
        "zhuyin": "ㄔㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to sing",
        "simplified": "",
        "radicals": ["", ""]
    },
    "答": {
        "zhuyin": "ㄉㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to reply, answer",
        "simplified": "",
        "radicals": ["", ""]
    },
    "倒": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "dǎo",
        "tone": 3,
        "english": "to invert, actually",
        "simplified": "",
        "radicals": ["", ""]
    },
    "划": {
        "zhuyin": "ㄏㄨㄚˊ",
        "pinyin": "huà",
        "tone": 4,
        "english": "to plan, row",
        "simplified": "",
        "radicals": ["", ""]
    },
    "控": {
        "zhuyin": "ㄎㄨㄥˋ",
        "pinyin": "kòng",
        "tone": 4,
        "english": "to accuse, manage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "味": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "taste, smell",
        "simplified": "",
        "radicals": ["", ""]
    },
    "區": {
        "zhuyin": "ㄑㄩ",
        "pinyin": "qū",
        "tone": 1,
        "english": "area",
        "simplified": "区",
        "radicals": ["", ""]
    },
    "漂": {
        "zhuyin": "ㄆㄧㄠ",
        "pinyin": "piāo",
        "tone": 1,
        "english": "to float",
        "simplified": "",
        "radicals": ["", ""]
    },
    "支": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "to support",
        "simplified": "",
        "radicals": ["", ""]
    },
    "乎": {
        "zhuyin": "ㄏㄨ",
        "pinyin": "hū",
        "tone": 1,
        "english": "in, at, from",
        "simplified": "",
        "radicals": ["", ""]
    },
    "錄": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "lù",
        "tone": 4,
        "english": "diary, record",
        "simplified": "录",
        "radicals": ["", ""]
    },
    "考": {
        "zhuyin": "ㄎㄠˇ",
        "pinyin": "kǎo",
        "tone": 3,
        "english": "to test",
        "simplified": "",
        "radicals": ["", ""]
    },
    "超": {
        "zhuyin": "ㄔㄠ",
        "pinyin": "chāo",
        "tone": 1,
        "english": "to exceed, super-",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拍": {
        "zhuyin": "ㄆㄞ",
        "pinyin": "pāi",
        "tone": 1,
        "english": "to clap, take(a photo)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "輕": {
        "zhuyin": "ㄑㄧㄥ",
        "pinyin": "qīng",
        "tone": 1,
        "english": "light, gentle",
        "simplified": "轻",
        "radicals": ["", ""]
    },
    "連": {
        "zhuyin": "ㄌㄧㄢˊ",
        "pinyin": "lián",
        "tone": 2,
        "english": "to link, connect, continuous",
        "simplified": "连",
        "radicals": ["", ""]
    },
    "往": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "wǎng",
        "tone": 3,
        "english": "towards",
        "simplified": "",
        "radicals": ["", ""]
    },
    "組": {
        "zhuyin": "ㄗㄨˇ",
        "pinyin": "zǔ",
        "tone": 3,
        "english": "to organize, group",
        "simplified": "组",
        "radicals": ["", ""]
    },
    "滿": {
        "zhuyin": "ㄇㄢˇ",
        "pinyin": "mǎn",
        "tone": 3,
        "english": "to fill, satisfied",
        "simplified": "满",
        "radicals": ["", ""]
    },
    "造": {
        "zhuyin": "ㄗㄠˋ",
        "pinyin": "zào",
        "tone": 4,
        "english": "to build, make",
        "simplified": "",
        "radicals": ["", ""]
    },
    "彈": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "dàn",
        "tone": 4,
        "english": "bullet",
        "simplified": "弹",
        "radicals": ["", ""]
    },
    "靜": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "jìng",
        "tone": 4,
        "english": "still, calm",
        "simplified": "静",
        "radicals": ["", ""]
    },
    "故": {
        "zhuyin": "ㄍㄨˋ",
        "pinyin": "gù",
        "tone": 4,
        "english": "old, happening",
        "simplified": "",
        "radicals": ["", ""]
    },
    "吸": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "breathe, inhale",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喂": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "call attention",
        "simplified": "",
        "radicals": ["", ""]
    },
    "集": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "to gather, collect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "極": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "extremely",
        "simplified": "极",
        "radicals": ["", ""]
    },
    "講": {
        "zhuyin": "ㄐㄧㄤˇ",
        "pinyin": "jiǎng",
        "tone": 3,
        "english": "to speak, lecture",
        "simplified": "讲",
        "radicals": ["", ""]
    },
    "塊": {
        "zhuyin": "ㄎㄨㄞˋ",
        "pinyin": "kuài",
        "tone": 4,
        "english": "money, lump",
        "simplified": "块",
        "radicals": ["", ""]
    },
    "趣": {
        "zhuyin": "ㄑㄩˋ",
        "pinyin": "qù",
        "tone": 4,
        "english": "interesting",
        "simplified": "",
        "radicals": ["", ""]
    },
    "類": {
        "zhuyin": "ㄌㄟˋ",
        "pinyin": "lèi",
        "tone": 4,
        "english": "kind, category",
        "simplified": "类",
        "radicals": ["", ""]
    },
    "呀": {
        "zhuyin": "ㄧㄚ",
        "pinyin": "yā",
        "tone": 1,
        "english": "(surprise p.)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戲": {
        "zhuyin": "ㄒㄧˋ",
        "pinyin": "xì",
        "tone": 4,
        "english": "drama, trick",
        "simplified": "戏",
        "radicals": ["", ""]
    },
    "曾": {
        "zhuyin": "ㄘㄥˊ",
        "pinyin": "céng",
        "tone": 2,
        "english": "once, already, former, previously",
        "simplified": "",
        "radicals": ["", ""]
    },
    "容": {
        "zhuyin": "ㄖㄨㄥˊ",
        "pinyin": "róng",
        "tone": 2,
        "english": "to contain, appearance",
        "simplified": "",
        "radicals": ["", ""]
    },
    "步": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "bù",
        "tone": 4,
        "english": "a step",
        "simplified": "",
        "radicals": ["", ""]
    },
    "投": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "tóu",
        "tone": 2,
        "english": "to cast",
        "simplified": "",
        "radicals": ["", ""]
    },
    "化": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "huà",
        "tone": 4,
        "english": "to change into",
        "simplified": "",
        "radicals": ["", ""]
    },
    "未": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "not, have not",
        "simplified": "",
        "radicals": ["", ""]
    },
    "束": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "to bind, bundle",
        "simplified": "",
        "radicals": ["", ""]
    },
    "醒": {
        "zhuyin": "ㄒㄧㄥˇ",
        "pinyin": "xǐng",
        "tone": 1,
        "english": "to wake up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "威": {
        "zhuyin": "ㄨㄟ",
        "pinyin": "wēi",
        "tone": 1,
        "english": "power",
        "simplified": "",
        "radicals": ["", ""]
    },
    "班": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "bān",
        "tone": 1,
        "english": "team, class",
        "simplified": "",
        "radicals": ["", ""]
    },
    "終": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "zhōng",
        "tone": 1,
        "english": "end, finish",
        "simplified": "终",
        "radicals": ["", ""]
    },
    "差": {
        "zhuyin": "ㄔㄚˋ",
        "pinyin": "chà",
        "tone": 4,
        "english": "inferior, bad",
        "simplified": "",
        "radicals": ["", ""]
    },
    "夢": {
        "zhuyin": "ㄇㄥˋ",
        "pinyin": "mèng",
        "tone": 4,
        "english": "dream",
        "simplified": "梦",
        "radicals": ["", ""]
    },
    "贏": {
        "zhuyin": "ㄧㄥˊ",
        "pinyin": "yíng",
        "tone": 2,
        "english": "to win",
        "simplified": "",
        "radicals": ["", ""]
    },
    "藥": {
        "zhuyin": "ㄧㄠˋ",
        "pinyin": "yào",
        "tone": 4,
        "english": "medicine",
        "simplified": "药",
        "radicals": ["", ""]
    },
    "迪": {
        "zhuyin": "ㄉㄧˊ",
        "pinyin": "dí",
        "tone": 2,
        "english": "to enlighten",
        "simplified": "",
        "radicals": ["", ""]
    },
    "店": {
        "zhuyin": "ㄉㄧㄢˋ",
        "pinyin": "diàn",
        "tone": 4,
        "english": "shop, inn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "麗": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "beautiful",
        "simplified": "丽",
        "radicals": ["", ""]
    },
    "賣": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "mài",
        "tone": 4,
        "english": "to sell",
        "simplified": "卖",
        "radicals": ["", ""]
    },
    "顯": {
        "zhuyin": "ㄒㄧㄢˇ",
        "pinyin": "xiǎn",
        "tone": 3,
        "english": "prominent, to show",
        "simplified": "显",
        "radicals": ["", ""]
    },
    "監": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "jiān",
        "tone": 1,
        "english": "to supervise",
        "simplified": "监",
        "radicals": ["", ""]
    },
    "圖": {
        "zhuyin": "ㄊㄨˊ",
        "pinyin": "tú",
        "tone": 2,
        "english": "diagram, map",
        "simplified": "图",
        "radicals": ["", ""]
    },
    "半": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "bàn",
        "tone": 4,
        "english": "half",
        "simplified": "",
        "radicals": ["", ""]
    },
    "語": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "language, speech",
        "simplified": "语",
        "radicals": ["", ""]
    },
    "付": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "to pay, hand over",
        "simplified": "",
        "radicals": ["", ""]
    },
    "熱": {
        "zhuyin": "ㄖㄜˋ",
        "pinyin": "rè",
        "tone": 4,
        "english": "hot",
        "simplified": "热",
        "radicals": ["", ""]
    },
    "排": {
        "zhuyin": "ㄆㄞˊ",
        "pinyin": "pái",
        "tone": 2,
        "english": "a row, to arrange",
        "simplified": "",
        "radicals": ["", ""]
    },
    "楚": {
        "zhuyin": "ㄔㄨˇ",
        "pinyin": "chǔ",
        "tone": 3,
        "english": "distinct, clear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "偷": {
        "zhuyin": "ㄊㄡ",
        "pinyin": "tōu",
        "tone": 1,
        "english": "to steal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "敢": {
        "zhuyin": "ㄍㄢˇ",
        "pinyin": "gǎn",
        "tone": 3,
        "english": "to dare",
        "simplified": "",
        "radicals": ["", ""]
    },
    "油": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "yóu",
        "tone": 2,
        "english": "oil",
        "simplified": "",
        "radicals": ["", ""]
    },
    "餐": {
        "zhuyin": "ㄘㄢ",
        "pinyin": "cān",
        "tone": 1,
        "english": "meal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "破": {
        "zhuyin": "ㄆㄛˋ",
        "pinyin": "pò",
        "tone": 4,
        "english": "broken, to destroy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "杯": {
        "zhuyin": "ㄅㄟ",
        "pinyin": "bēi",
        "tone": 1,
        "english": "cup",
        "simplified": "",
        "radicals": ["", ""]
    },
    "市": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "market, city",
        "simplified": "",
        "radicals": ["", ""]
    },
    "城": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "chéng",
        "tone": 2,
        "english": "city, town",
        "simplified": "",
        "radicals": ["", ""]
    },
    "哇": {
        "zhuyin": "ㄨㄚ",
        "pinyin": "wā",
        "tone": 1,
        "english": "child cry sound",
        "simplified": "",
        "radicals": ["", ""]
    },
    "權": {
        "zhuyin": "ㄑㄩㄢˊ",
        "pinyin": "quán",
        "tone": 2,
        "english": "authority, power",
        "simplified": "权",
        "radicals": ["", ""]
    },
    "某": {
        "zhuyin": "ㄇㄡˇ",
        "pinyin": "mǒu",
        "tone": 3,
        "english": "some, a certain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "激": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "jī",
        "tone": 1,
        "english": "to excite, fierce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "立": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "to stand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "程": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "chéng",
        "tone": 2,
        "english": "rule, order",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伊": {
        "zhuyin": "ㄧ",
        "pinyin": "yī",
        "tone": 1,
        "english": "(i or yi, phoenetic)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "討": {
        "zhuyin": "ㄊㄠˇ",
        "pinyin": "tǎo",
        "tone": 3,
        "english": "to invite, discuss",
        "simplified": "讨",
        "radicals": ["", ""]
    },
    "責": {
        "zhuyin": "ㄗㄜˊ",
        "pinyin": "zé",
        "tone": 2,
        "english": "duty",
        "simplified": "责",
        "radicals": ["", ""]
    },
    "昨": {
        "zhuyin": "ㄗㄨㄛˊ",
        "pinyin": "zuó",
        "tone": 2,
        "english": "yesterday",
        "simplified": "",
        "radicals": ["", ""]
    },
    "閉": {
        "zhuyin": "ㄅㄧˋ",
        "pinyin": "bì",
        "tone": 4,
        "english": "to close, shut",
        "simplified": "闭",
        "radicals": ["", ""]
    },
    "庭": {
        "zhuyin": "ㄊㄧㄥˊ",
        "pinyin": "tíng",
        "tone": 2,
        "english": "main hall, courtyard",
        "simplified": "",
        "radicals": ["", ""]
    },
    "落": {
        "zhuyin": "ㄌㄨㄛˋ",
        "pinyin": "luò",
        "tone": 4,
        "english": "to set, decline",
        "simplified": "",
        "radicals": ["", ""]
    },
    "飯": {
        "zhuyin": "ㄈㄢˋ",
        "pinyin": "fàn",
        "tone": 4,
        "english": "food, meal",
        "simplified": "饭",
        "radicals": ["", ""]
    },
    "林": {
        "zhuyin": "ㄌㄧㄣˊ",
        "pinyin": "lín",
        "tone": 2,
        "english": "forest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "換": {
        "zhuyin": "ㄏㄨㄢˋ",
        "pinyin": "huàn",
        "tone": 4,
        "english": "to change",
        "simplified": "换",
        "radicals": ["", ""]
    },
    "及": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to reach, up to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "船": {
        "zhuyin": "ㄔㄨㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "boat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "爭": {
        "zhuyin": "ㄓㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "to strive for",
        "simplified": "争",
        "radicals": ["", ""]
    },
    "猜": {
        "zhuyin": "ㄘㄞ",
        "pinyin": "",
        "tone": 1,
        "english": "to guess",
        "simplified": "",
        "radicals": ["", ""]
    },
    "級": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "level, rank",
        "simplified": "级",
        "radicals": ["", ""]
    },
    "姆": {
        "zhuyin": "ㄇㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "matron",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雷": {
        "zhuyin": "ㄌㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "thunder",
        "simplified": "",
        "radicals": ["", ""]
    },
    "刻": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "quarter(hour), to cut",
        "simplified": "",
        "radicals": ["", ""]
    },
    "建": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to establish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "團": {
        "zhuyin": "ㄊㄨㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "round",
        "simplified": "团",
        "radicals": ["", ""]
    },
    "王": {
        "zhuyin": "ㄨㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "king",
        "simplified": "",
        "radicals": ["", ""]
    },
    "驚": {
        "zhuyin": "ㄐㄧㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "frightened",
        "simplified": "惊",
        "radicals": ["", ""]
    },
    "迎": {
        "zhuyin": "ㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to welcome",
        "simplified": "",
        "radicals": ["", ""]
    },
    "段": {
        "zhuyin": "ㄉㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "section",
        "simplified": "",
        "radicals": ["", ""]
    },
    "標": {
        "zhuyin": "ㄅㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "sign, prize",
        "simplified": "标",
        "radicals": ["", ""]
    },
    "檢": {
        "zhuyin": "ㄐㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to check",
        "simplified": "检",
        "radicals": ["", ""]
    },
    "各": {
        "zhuyin": "ㄍㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "each, every",
        "simplified": "",
        "radicals": ["", ""]
    },
    "義": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "justice",
        "simplified": "义",
        "radicals": ["", ""]
    },
    "百": {
        "zhuyin": "ㄅㄞˇ",
        "pinyin": "bǎi",
        "tone": 3,
        "english": "hundred",
        "simplified": "",
        "radicals": ["", ""]
    },
    "民": {
        "zhuyin": "ㄇㄧㄣˊ",
        "pinyin": "mín",
        "tone": 2,
        "english": "the people",
        "simplified": "",
        "radicals": ["", ""]
    },
    "功": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "result, achievement",
        "simplified": "",
        "radicals": ["", ""]
    },
    "唯": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "wěi",
        "tone": 3,
        "english": "yes",
        "simplified": "",
        "radicals": ["", ""]
    },
    "夜": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "yè",
        "tone": 4,
        "english": "night",
        "simplified": "",
        "radicals": ["", ""]
    },
    "示": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to show",
        "simplified": "",
        "radicals": ["", ""]
    },
    "靠": {
        "zhuyin": "ㄎㄠˋ",
        "pinyin": "kào",
        "tone": 4,
        "english": "to lean on",
        "simplified": "",
        "radicals": ["", ""]
    },
    "釋": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to explain",
        "simplified": "释",
        "radicals": ["", ""]
    },
    "臉": {
        "zhuyin": "ㄌㄧㄢˇ",
        "pinyin": "liǎn",
        "tone": 3,
        "english": "face",
        "simplified": "脸",
        "radicals": ["", ""]
    },
    "引": {
        "zhuyin": "ㄧㄣˇ",
        "pinyin": "yǐn",
        "tone": 3,
        "english": "to pull, guide",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擇": {
        "zhuyin": "ㄗㄜˊ",
        "pinyin": "zé",
        "tone": 2,
        "english": "to select",
        "simplified": "择",
        "radicals": ["", ""]
    },
    "疑": {
        "zhuyin": "ㄧˊ",
        "pinyin": "yí",
        "tone": 2,
        "english": "to doubt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "趕": {
        "zhuyin": "ㄍㄢˇ",
        "pinyin": "gǎn",
        "tone": 3,
        "english": "to hurry",
        "simplified": "赶",
        "radicals": ["", ""]
    },
    "倆": {
        "zhuyin": "ㄌㄧㄚˇ",
        "pinyin": "liǎ",
        "tone": 3,
        "english": "two, both",
        "simplified": "俩",
        "radicals": ["", ""]
    },
    "獨": {
        "zhuyin": "ㄉㄨˊ",
        "pinyin": "dú",
        "tone": 2,
        "english": "alone",
        "simplified": "独",
        "radicals": ["", ""]
    },
    "冷": {
        "zhuyin": "ㄌㄥˇ",
        "pinyin": "lěng",
        "tone": 3,
        "english": "cold",
        "simplified": "",
        "radicals": ["", ""]
    },
    "妹": {
        "zhuyin": "ㄇㄟˋ",
        "pinyin": "mèi",
        "tone": 4,
        "english": "younger sister",
        "simplified": "",
        "radicals": ["", ""]
    },
    "樓": {
        "zhuyin": "ㄌㄡˊ",
        "pinyin": "lóu",
        "tone": 2,
        "english": "building, floor",
        "simplified": "楼",
        "radicals": ["", ""]
    },
    "皮": {
        "zhuyin": "ㄆㄧˊ",
        "pinyin": "pí",
        "tone": 2,
        "english": "leather, skin",
        "simplified": "",
        "radicals": ["", ""]
    },
    "存": {
        "zhuyin": "ㄘㄨㄣˊ",
        "pinyin": "cún",
        "tone": 2,
        "english": "to exist, to deposit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "練": {
        "zhuyin": "ㄌㄧㄢˋ",
        "pinyin": "liàn",
        "tone": 4,
        "english": "to practice",
        "simplified": "练",
        "radicals": ["", ""]
    },
    "娘": {
        "zhuyin": "ㄋㄧㄤˊ",
        "pinyin": "niáng",
        "tone": 2,
        "english": "mother, young lady",
        "simplified": "",
        "radicals": ["", ""]
    },
    "頓": {
        "zhuyin": "ㄉㄨㄣˋ",
        "pinyin": "dùn",
        "tone": 4,
        "english": "to pause, (mw. for meals)",
        "simplified": "顿",
        "radicals": ["", ""]
    },
    "斷": {
        "zhuyin": "ㄉㄨㄢˋ",
        "pinyin": "duàn",
        "tone": 4,
        "english": "to break, definitely, decidedly",
        "simplified": "断",
        "radicals": ["", ""]
    },
    "設": {
        "zhuyin": "ㄕㄜˋ",
        "pinyin": "shè",
        "tone": 4,
        "english": "to set up",
        "simplified": "设",
        "radicals": ["", ""]
    },
    "松": {
        "zhuyin": "ㄙㄨㄥ",
        "pinyin": "sōng",
        "tone": 1,
        "english": "loose, to relax",
        "simplified": "",
        "radicals": ["", ""]
    },
    "博": {
        "zhuyin": "ㄅㄛˊ",
        "pinyin": "bó",
        "tone": 2,
        "english": "rich, extensive",
        "simplified": "",
        "radicals": ["", ""]
    },
    "置": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "to install",
        "simplified": "",
        "radicals": ["", ""]
    },
    "逃": {
        "zhuyin": "ㄊㄠˊ",
        "pinyin": "táo",
        "tone": 2,
        "english": "to escape",
        "simplified": "",
        "radicals": ["", ""]
    },
    "觀": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "guān",
        "tone": 1,
        "english": "to watch",
        "simplified": "观",
        "radicals": ["", ""]
    },
    "痛": {
        "zhuyin": "ㄊㄨㄥˋ",
        "pinyin": "tòng",
        "tone": 4,
        "english": "ache, pain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "狂": {
        "zhuyin": "ㄎㄨㄤˊ",
        "pinyin": "kuáng",
        "tone": 2,
        "english": "mad, wild",
        "simplified": "",
        "radicals": ["", ""]
    },
    "足": {
        "zhuyin": "ㄗㄨˊ",
        "pinyin": "zú",
        "tone": 2,
        "english": "foot",
        "simplified": "",
        "radicals": ["", ""]
    },
    "碼": {
        "zhuyin": "ㄇㄚˇ",
        "pinyin": "mǎ",
        "tone": 3,
        "english": "number, code",
        "simplified": "码",
        "radicals": ["", ""]
    },
    "恐": {
        "zhuyin": "ㄎㄨㄥˇ",
        "pinyin": "kǒng",
        "tone": 3,
        "english": "afraid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "吉": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "lucky",
        "simplified": "",
        "radicals": ["", ""]
    },
    "歷": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "calendar, to experience",
        "simplified": "历",
        "radicals": ["", ""]
    },
    "慢": {
        "zhuyin": "ㄇㄢˋ",
        "pinyin": "màn",
        "tone": 4,
        "english": "slow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "妻": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "qī",
        "tone": 1,
        "english": "wife",
        "simplified": "",
        "radicals": ["", ""]
    },
    "山": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "shān",
        "tone": 1,
        "english": "mountain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "普": {
        "zhuyin": "ㄆㄨˇ",
        "pinyin": "pǔ",
        "tone": 3,
        "english": "general, popular",
        "simplified": "",
        "radicals": ["", ""]
    },
    "價": {
        "zhuyin": "ㄐㄧㄚˋ",
        "pinyin": "jià",
        "tone": 4,
        "english": "price, value",
        "simplified": "价",
        "radicals": ["", ""]
    },
    "元": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "yuán",
        "tone": 2,
        "english": "unit of money",
        "simplified": "",
        "radicals": ["", ""]
    },
    "角": {
        "zhuyin": "ㄐㄧㄠˇ",
        "pinyin": "jiǎo",
        "tone": 3,
        "english": "angle, 0.1元",
        "simplified": "",
        "radicals": ["", ""]
    },
    "懷": {
        "zhuyin": "ㄏㄨㄞˊ",
        "pinyin": "huái",
        "tone": 2,
        "english": "bosom, heart",
        "simplified": "怀",
        "radicals": ["", ""]
    },
    "床": {
        "zhuyin": "ㄔㄨㄤˊ",
        "pinyin": "chuáng",
        "tone": 2,
        "english": "bed",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奧": {
        "zhuyin": "ㄠˋ",
        "pinyin": "ào",
        "tone": 4,
        "english": "obscure",
        "simplified": "奥",
        "radicals": ["", ""]
    },
    "模": {
        "zhuyin": "ㄇㄛˊ",
        "pinyin": "mó",
        "tone": 2,
        "english": "to imitate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "驗": {
        "zhuyin": "ㄧㄢˋ",
        "pinyin": "yàn",
        "tone": 4,
        "english": "to examine",
        "simplified": "验",
        "radicals": ["", ""]
    },
    "索": {
        "zhuyin": "ㄙㄨㄛˇ",
        "pinyin": "suǒ",
        "tone": 3,
        "english": "to search, ask",
        "simplified": "",
        "radicals": ["", ""]
    },
    "街": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "jiē",
        "tone": 1,
        "english": "street",
        "simplified": "",
        "radicals": ["", ""]
    },
    "呼": {
        "zhuyin": "ㄏㄨ",
        "pinyin": "hū",
        "tone": 1,
        "english": "to call",
        "simplified": "",
        "radicals": ["", ""]
    },
    "祝": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "zhù",
        "tone": 4,
        "english": "to wish, pray",
        "simplified": "",
        "radicals": ["", ""]
    },
    "料": {
        "zhuyin": "ㄌㄧㄠˋ",
        "pinyin": "liào",
        "tone": 4,
        "english": "material, stuff",
        "simplified": "",
        "radicals": ["", ""]
    },
    "休": {
        "zhuyin": "ㄒㄧㄡ",
        "pinyin": "xiū",
        "tone": 1,
        "english": "to rest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "靈": {
        "zhuyin": "ㄌㄧㄥˊ",
        "pinyin": "líng",
        "tone": 2,
        "english": "quick, effective",
        "simplified": "灵",
        "radicals": ["", ""]
    },
    "獄": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù ",
        "tone": 4,
        "english": "prison, lawsuit",
        "simplified": "狱",
        "radicals": ["", ""]
    },
    "劇": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "jù",
        "tone": 4,
        "english": "drama, play",
        "simplified": "剧",
        "radicals": ["", ""]
    },
    "亂": {
        "zhuyin": "ㄌㄨㄢˋ",
        "pinyin": "luàn",
        "tone": 4,
        "english": "messy, disorder",
        "simplified": "乱",
        "radicals": ["", ""]
    },
    "展": {
        "zhuyin": "ㄓㄢˇ",
        "pinyin": "zhǎn",
        "tone": 3,
        "english": "to spread out",
        "simplified": "",
        "radicals": ["", ""]
    },
    "板": {
        "zhuyin": "ㄅㄢˇ",
        "pinyin": "bǎn",
        "tone": 3,
        "english": "board, plank",
        "simplified": "",
        "radicals": ["", ""]
    },
    "承": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "chéng",
        "tone": 2,
        "english": "to bear, carry",
        "simplified": "",
        "radicals": ["", ""]
    },
    "則": {
        "zhuyin": "ㄗㄜˊ",
        "pinyin": "zé",
        "tone": 2,
        "english": "in contrast, norm",
        "simplified": "则",
        "radicals": ["", ""]
    },
    "顧": {
        "zhuyin": "ㄍㄨˋ",
        "pinyin": "gù",
        "tone": 4,
        "english": "to look after",
        "simplified": "顾",
        "radicals": ["", ""]
    },
    "深": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "shēn",
        "tone": 1,
        "english": "deep, profound",
        "simplified": "",
        "radicals": ["", ""]
    },
    "產": {
        "zhuyin": "ㄔㄢˇ",
        "pinyin": "chǎn",
        "tone": 3,
        "english": "give birth to, produce",
        "simplified": "产",
        "radicals": ["", ""]
    },
    "洗": {
        "zhuyin": "ㄒㄧˇ",
        "pinyin": "xǐ",
        "tone": 3,
        "english": "to wash",
        "simplified": "",
        "radicals": ["", ""]
    },
    "政": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "zhèng",
        "tone": 4,
        "english": "political",
        "simplified": "",
        "radicals": ["", ""]
    },
    "迷": {
        "zhuyin": "ㄇㄧˊ",
        "pinyin": "mí",
        "tone": 2,
        "english": "fan (of)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "領": {
        "zhuyin": "ㄌㄧㄥˇ",
        "pinyin": "lǐng",
        "tone": 3,
        "english": "neck",
        "simplified": "领",
        "radicals": ["", ""]
    },
    "午": {
        "zhuyin": "ㄨˇ",
        "pinyin": "wǔ",
        "tone": 3,
        "english": "noon",
        "simplified": "",
        "radicals": ["", ""]
    },
    "納": {
        "zhuyin": "ㄋㄚˋ",
        "pinyin": "nà",
        "tone": 4,
        "english": "to recieve, bring in",
        "simplified": "纳",
        "radicals": ["", ""]
    },
    "謊": {
        "zhuyin": "ㄏㄨㄤˇ",
        "pinyin": "huǎng",
        "tone": 3,
        "english": "lie",
        "simplified": "谎",
        "radicals": ["", ""]
    },
    "具": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "jù",
        "tone": 4,
        "english": "tool, ability",
        "simplified": "",
        "radicals": ["", ""]
    },
    "退": {
        "zhuyin": "ㄊㄨㄟˋ",
        "pinyin": "tuì",
        "tone": 4,
        "english": "to retreat, to decline",
        "simplified": "",
        "radicals": ["", ""]
    },
    "福": {
        "zhuyin": "ㄈㄨˊ",
        "pinyin": "fú",
        "tone": 2,
        "english": "luck, fortune",
        "simplified": "",
        "radicals": ["", ""]
    },
    "習": {
        "zhuyin": "ㄒㄧˊ",
        "pinyin": "xí",
        "tone": 2,
        "english": "to study, habit",
        "simplified": "习",
        "radicals": ["", ""]
    },
    "秘": {
        "zhuyin": "ㄇㄧˋ",
        "pinyin": "mì",
        "tone": 4,
        "english": "secret",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奶": {
        "zhuyin": "ㄋㄞˇ",
        "pinyin": "nǎi",
        "tone": 3,
        "english": "milk, breast",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遇": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "to meet, encounter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "職": {
        "zhuyin": "ㄓˊ",
        "pinyin": "zhí",
        "tone": 2,
        "english": "office, duty",
        "simplified": "职",
        "radicals": ["", ""]
    },
    "架": {
        "zhuyin": "ㄐㄧㄚˋ",
        "pinyin": "jià",
        "tone": 4,
        "english": "to support, framework",
        "simplified": "",
        "radicals": ["", ""]
    },
    "即": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "namely, at once",
        "simplified": "",
        "radicals": ["", ""]
    },
    "挺": {
        "zhuyin": "ㄊㄧㄥˇ",
        "pinyin": "tǐng",
        "tone": 3,
        "english": "to stand upright",
        "simplified": "",
        "radicals": ["", ""]
    },
    "史": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "history",
        "simplified": "",
        "radicals": ["", ""]
    },
    "負": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "to bear",
        "simplified": "负",
        "radicals": ["", ""]
    },
    "千": {
        "zhuyin": "ㄑㄧㄢ",
        "pinyin": "qiān",
        "tone": 1,
        "english": "thousand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "脫": {
        "zhuyin": "ㄊㄨㄛ",
        "pinyin": "tuō",
        "tone": 1,
        "english": "to take off",
        "simplified": "脱",
        "radicals": ["", ""]
    },
    "瑞": {
        "zhuyin": "ㄖㄨㄟˋ",
        "pinyin": "ruì",
        "tone": 4,
        "english": "auspicious(conducive to success, favorable)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "背": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "back of object",
        "simplified": "",
        "radicals": ["", ""]
    },
    "僅": {
        "zhuyin": "ㄐㄧㄣˇ",
        "pinyin": "jǐn",
        "tone": 3,
        "english": "barely, merely",
        "simplified": "仅",
        "radicals": ["", ""]
    },
    "追": {
        "zhuyin": "ㄓㄨㄟ",
        "pinyin": "zhuī",
        "tone": 1,
        "english": "to chase",
        "simplified": "",
        "radicals": ["", ""]
    },
    "倫": {
        "zhuyin": "ㄌㄨㄣˊ",
        "pinyin": "lún",
        "tone": 2,
        "english": "relationship",
        "simplified": "伦",
        "radicals": ["", ""]
    },
    "炸": {
        "zhuyin": "ㄓㄚˋ",
        "pinyin": "zhá",
        "tone": 2,
        "english": "to fry in oil",
        "simplified": "",
        "radicals": ["", ""]
    },
    "資": {
        "zhuyin": "ㄗ",
        "pinyin": "zī",
        "tone": 1,
        "english": "property, wealth",
        "simplified": "资",
        "radicals": ["", ""]
    },
    "畫": {
        "zhuyin": "ㄏㄨㄚˋ",
        "pinyin": "huà",
        "tone": 4,
        "english": "to draw, picture",
        "simplified": "画",
        "radicals": ["", ""]
    },
    "蹤": {
        "zhuyin": "ㄗㄨㄥ",
        "pinyin": "zōng",
        "tone": 1,
        "english": "footprints, traces",
        "simplified": "踪",
        "radicals": ["", ""]
    },
    "射": {
        "zhuyin": "ㄕㄜˋ",
        "pinyin": "shè",
        "tone": 4,
        "english": "to shoot",
        "simplified": "",
        "radicals": ["", ""]
    },
    "棄": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "to abandon",
        "simplified": "弃",
        "radicals": ["", ""]
    },
    "傻": {
        "zhuyin": "ㄕㄚˇ",
        "pinyin": "shǎ",
        "tone": 3,
        "english": "foolish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "藏": {
        "zhuyin": "ㄘㄤˊ",
        "pinyin": "cáng",
        "tone": 2,
        "english": "to conceal, to store",
        "simplified": "",
        "radicals": ["", ""]
    },
    "屁": {
        "zhuyin": "ㄆㄧˋ",
        "pinyin": "pì",
        "tone": 4,
        "english": "fart, nonsense",
        "simplified": "",
        "radicals": ["", ""]
    },
    "瞧": {
        "zhuyin": "ㄑㄧㄠˊ",
        "pinyin": "qiáo ",
        "tone": 2,
        "english": "to glance at",
        "simplified": "",
        "radicals": ["", ""]
    },
    "修": {
        "zhuyin": "ㄒㄧㄡ",
        "pinyin": "xiū",
        "tone": 1,
        "english": "to repair",
        "simplified": "",
        "radicals": ["", ""]
    },
    "屍": {
        "zhuyin": "ㄕ",
        "pinyin": "shī",
        "tone": 1,
        "english": "corpse",
        "simplified": "尸",
        "radicals": ["", ""]
    },
    "聞": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "wén",
        "tone": 2,
        "english": "to hear, news",
        "simplified": "闻",
        "radicals": ["", ""]
    },
    "共": {
        "zhuyin": "ㄍㄨㄥˋ",
        "pinyin": "gòng",
        "tone": 4,
        "english": "common, general",
        "simplified": "",
        "radicals": ["", ""]
    },
    "懂": {
        "zhuyin": "ㄉㄨㄥˇ",
        "pinyin": "dǒng",
        "tone": 3,
        "english": "to understand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蒂": {
        "zhuyin": "ㄉㄧˋ",
        "pinyin": "dì",
        "tone": 4,
        "english": "stem of plant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "危": {
        "zhuyin": "ㄨㄟ",
        "pinyin": "wēi",
        "tone": 1,
        "english": "danger",
        "simplified": "",
        "radicals": ["", ""]
    },
    "專": {
        "zhuyin": "ㄓㄨㄢ",
        "pinyin": "zhuān",
        "tone": 1,
        "english": "specialized",
        "simplified": "专",
        "radicals": ["", ""]
    },
    "呆": {
        "zhuyin": "ㄉㄞ",
        "pinyin": "dái",
        "tone": 2,
        "english": "blank, stupid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "介": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "jiè",
        "tone": 4,
        "english": "to introduce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "薩": {
        "zhuyin": "ㄙㄚˋ",
        "pinyin": "sà",
        "tone": 4,
        "english": "Bodhisattva (Buddhism)",
        "simplified": "萨",
        "radicals": ["", ""]
    },
    "魔": {
        "zhuyin": "ㄇㄛˊ",
        "pinyin": "mó",
        "tone": 2,
        "english": "devil, magic",
        "simplified": "",
        "radicals": ["", ""]
    },
    "急": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "jí",
        "tone": 2,
        "english": "urgent, worried",
        "simplified": "",
        "radicals": ["", ""]
    },
    "碰": {
        "zhuyin": "ㄆㄥˋ",
        "pinyin": "pèng",
        "tone": 4,
        "english": "to bump",
        "simplified": "",
        "radicals": ["", ""]
    },
    "甚": {
        "zhuyin": "ㄕㄣˋ",
        "pinyin": "shén",
        "tone": 2,
        "english": "variant of 什",
        "simplified": "",
        "radicals": ["", ""]
    },
    "糕": {
        "zhuyin": "ㄍㄠ",
        "pinyin": "gāo ",
        "tone": 1,
        "english": "cake",
        "simplified": "",
        "radicals": ["", ""]
    },
    "苦": {
        "zhuyin": "ㄎㄨˇ",
        "pinyin": "kǔ",
        "tone": 3,
        "english": "bitter, pain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "念": {
        "zhuyin": "ㄋㄧㄢˋ",
        "pinyin": "niàn",
        "tone": 4,
        "english": "to miss (sb), thought",
        "simplified": "",
        "radicals": ["", ""]
    },
    "適": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "to fit, suitable",
        "simplified": "适",
        "radicals": ["", ""]
    },
    "華": {
        "zhuyin": "ㄏㄨㄚˊ",
        "pinyin": "huá",
        "tone": 2,
        "english": "splendid",
        "simplified": "华",
        "radicals": ["", ""]
    },
    "沖": {
        "zhuyin": "ㄔㄨㄥ",
        "pinyin": "chōng",
        "tone": 1,
        "english": "to clash, rinse",
        "simplified": "冲",
        "radicals": ["", ""]
    },
    "騙": {
        "zhuyin": "ㄆㄧㄢˋ",
        "pinyin": "piàn",
        "tone": 4,
        "english": "to cheat",
        "simplified": "骗",
        "radicals": ["", ""]
    },
    "厭": {
        "zhuyin": "ㄧㄢˋ",
        "pinyin": "yàn",
        "tone": 4,
        "english": "to loathe",
        "simplified": "厌",
        "radicals": ["", ""]
    },
    "型": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "model, type",
        "simplified": "",
        "radicals": ["", ""]
    },
    "麥": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "mài",
        "tone": 4,
        "english": "wheat, oats",
        "simplified": "麦",
        "radicals": ["", ""]
    },
    "似": {
        "zhuyin": "ㄙˋ",
        "pinyin": "sì",
        "tone": 4,
        "english": "-like, similar",
        "simplified": "",
        "radicals": ["", ""]
    },
    "紅": {
        "zhuyin": "ㄏㄨㄥˊ",
        "pinyin": "hóng",
        "tone": 2,
        "english": "red",
        "simplified": "红",
        "radicals": ["", ""]
    },
    "值": {
        "zhuyin": "ㄓˊ",
        "pinyin": "zhí",
        "tone": 2,
        "english": "value",
        "simplified": "",
        "radicals": ["", ""]
    },
    "腳": {
        "zhuyin": "ㄐㄧㄠˇ",
        "pinyin": "jiǎo",
        "tone": 3,
        "english": "foot",
        "simplified": "脚",
        "radicals": ["", ""]
    },
    "六": {
        "zhuyin": "ㄌㄧㄡˋ",
        "pinyin": "liù",
        "tone": 4,
        "english": "six",
        "simplified": "",
        "radicals": ["", ""]
    },
    "謀": {
        "zhuyin": "ㄇㄡˊ",
        "pinyin": "móu",
        "tone": 2,
        "english": "plan, scheme",
        "simplified": "谋",
        "radicals": ["", ""]
    },
    "套": {
        "zhuyin": "ㄊㄠˋ",
        "pinyin": "tào",
        "tone": 4,
        "english": "cover, (mw. for sets)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "凱": {
        "zhuyin": "ㄎㄞˇ",
        "pinyin": "kǎi",
        "tone": 3,
        "english": "triumphant",
        "simplified": "凯",
        "radicals": ["", ""]
    },
    "眾": {
        "zhuyin": "ㄓㄨㄥˋ",
        "pinyin": "zhòng",
        "tone": 4,
        "english": "many, crowd",
        "simplified": "众",
        "radicals": ["", ""]
    },
    "預": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "to advance, prepare",
        "simplified": "预",
        "radicals": ["", ""]
    },
    "際": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "border, between",
        "simplified": "际",
        "radicals": ["", ""]
    },
    "咱": {
        "zhuyin": "ㄗㄢˊ",
        "pinyin": "zá/zán",
        "tone": 2,
        "english": "we, us",
        "simplified": "",
        "radicals": ["", ""]
    },
    "波": {
        "zhuyin": "ㄅㄛ",
        "pinyin": "bō",
        "tone": 1,
        "english": "wave",
        "simplified": "",
        "radicals": ["", ""]
    },
    "衛": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "wèi",
        "tone": 4,
        "english": "to guard",
        "simplified": "卫",
        "radicals": ["", ""]
    },
    "聊": {
        "zhuyin": "ㄌㄧㄠˊ",
        "pinyin": "liáo",
        "tone": 2,
        "english": "to chat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "養": {
        "zhuyin": "ㄧㄤˇ",
        "pinyin": "yǎng",
        "tone": 3,
        "english": "to raise, bring up",
        "simplified": "养",
        "radicals": ["", ""]
    },
    "導": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "dǎo",
        "tone": 3,
        "english": "to guide",
        "simplified": "导",
        "radicals": ["", ""]
    },
    "慮": {
        "zhuyin": "ㄌㄩˋ",
        "pinyin": "lǜ",
        "tone": 4,
        "english": "to think over",
        "simplified": "虑",
        "radicals": ["", ""]
    },
    "私": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "private",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戴": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "to put on",
        "simplified": "",
        "radicals": ["", ""]
    },
    "毀": {
        "zhuyin": "ㄏㄨㄟˇ",
        "pinyin": "huǐ",
        "tone": 3,
        "english": "to destroy",
        "simplified": "毁",
        "radicals": ["", ""]
    },
    "魚": {
        "zhuyin": "ㄩˊ",
        "pinyin": "yú",
        "tone": 2,
        "english": "fish",
        "simplified": "鱼",
        "radicals": ["", ""]
    },
    "滾": {
        "zhuyin": "ㄍㄨㄣˇ",
        "pinyin": "gǔn",
        "tone": 3,
        "english": "to boil",
        "simplified": "滚",
        "radicals": ["", ""]
    },
    "志": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "sign, ambition",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雜": {
        "zhuyin": "ㄗㄚˊ",
        "pinyin": "zá",
        "tone": 2,
        "english": "mixed",
        "simplified": "杂",
        "radicals": ["", ""]
    },
    "居": {
        "zhuyin": "ㄐㄩ",
        "pinyin": "jū",
        "tone": 1,
        "english": "to reside, residence",
        "simplified": "",
        "radicals": ["", ""]
    },
    "詞": {
        "zhuyin": "ㄘˊ",
        "pinyin": "cí",
        "tone": 2,
        "english": "word",
        "simplified": "词",
        "radicals": ["", ""]
    },
    "食": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "food",
        "simplified": "",
        "radicals": ["", ""]
    },
    "諾": {
        "zhuyin": "ㄋㄨㄛˋ",
        "pinyin": "nuò",
        "tone": 4,
        "english": "promise",
        "simplified": "诺",
        "radicals": ["", ""]
    },
    "讀": {
        "zhuyin": "ㄉㄨˊ",
        "pinyin": "dú",
        "tone": 2,
        "english": "to read",
        "simplified": "读",
        "radicals": ["", ""]
    },
    "誤": {
        "zhuyin": "ㄨˋ",
        "pinyin": "wù",
        "tone": 4,
        "english": "mistake",
        "simplified": "误",
        "radicals": ["", ""]
    },
    "撒": {
        "zhuyin": "ㄙㄚ",
        "pinyin": "sā",
        "tone": 1,
        "english": "to release",
        "simplified": "",
        "radicals": ["", ""]
    },
    "突": {
        "zhuyin": "ㄊㄨ",
        "pinyin": "tū",
        "tone": 1,
        "english": "to dash, sudden",
        "simplified": "",
        "radicals": ["", ""]
    },
    "牛": {
        "zhuyin": "ㄋㄧㄡˊ",
        "pinyin": "niú",
        "tone": 2,
        "english": "cow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "館": {
        "zhuyin": "ㄍㄨㄢˇ",
        "pinyin": "guǎn",
        "tone": 3,
        "english": "building, shop",
        "simplified": "馆",
        "radicals": ["", ""]
    },
    "規": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "guī",
        "tone": 1,
        "english": "a rule, compass",
        "simplified": "规",
        "radicals": ["", ""]
    },
    "陪": {
        "zhuyin": "ㄆㄟˊ",
        "pinyin": "péi",
        "tone": 2,
        "english": "to accompany",
        "simplified": "",
        "radicals": ["", ""]
    },
    "州": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "zhōu",
        "tone": 1,
        "english": "a state",
        "simplified": "",
        "radicals": ["", ""]
    },
    "肉": {
        "zhuyin": "ㄖㄡˋ",
        "pinyin": "ròu",
        "tone": 4,
        "english": "meat, flesh",
        "simplified": "",
        "radicals": ["", ""]
    },
    "形": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "form, appear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "凶": {
        "zhuyin": "ㄒㄩㄥ",
        "pinyin": "xiōng",
        "tone": 1,
        "english": "culprit, scary",
        "simplified": "",
        "radicals": ["", ""]
    },
    "森": {
        "zhuyin": "ㄙㄣ",
        "pinyin": "sēn",
        "tone": 1,
        "english": "forest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "商": {
        "zhuyin": "ㄕㄤ",
        "pinyin": "shāng",
        "tone": 1,
        "english": "commerce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "紀": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "order, to dicipline",
        "simplified": "纪",
        "radicals": ["", ""]
    },
    "浪": {
        "zhuyin": "ㄌㄤˋ",
        "pinyin": "làng",
        "tone": 4,
        "english": "wave, unrestrained",
        "simplified": "",
        "radicals": ["", ""]
    },
    "石": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "stone",
        "simplified": "",
        "radicals": ["", ""]
    },
    "順": {
        "zhuyin": "ㄕㄨㄣˋ",
        "pinyin": "shùn",
        "tone": 4,
        "english": "to obey, along",
        "simplified": "顺",
        "radicals": ["", ""]
    },
    "舉": {
        "zhuyin": "ㄐㄩˇ",
        "pinyin": "jǔ",
        "tone": 3,
        "english": "to lift",
        "simplified": "举",
        "radicals": ["", ""]
    },
    "按": {
        "zhuyin": "ㄢˋ",
        "pinyin": "àn",
        "tone": 4,
        "english": "to press, retrain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "旅": {
        "zhuyin": "ㄌㄩˇ",
        "pinyin": "lǚ",
        "tone": 3,
        "english": "journey",
        "simplified": "",
        "radicals": ["", ""]
    },
    "努": {
        "zhuyin": "ㄋㄨˇ",
        "pinyin": "nǔ",
        "tone": 3,
        "english": "to exert",
        "simplified": "",
        "radicals": ["", ""]
    },
    "堅": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "jiān",
        "tone": 1,
        "english": "strong",
        "simplified": "坚",
        "radicals": ["", ""]
    },
    "測": {
        "zhuyin": "ㄘㄜˋ",
        "pinyin": "cè",
        "tone": 4,
        "english": "to measure",
        "simplified": "测",
        "radicals": ["", ""]
    },
    "免": {
        "zhuyin": "ㄇㄧㄢˇ",
        "pinyin": "miǎn",
        "tone": 3,
        "english": "to exempt, avoid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喔": {
        "zhuyin": "ㄛ",
        "pinyin": "ō",
        "tone": 1,
        "english": "I see, oh",
        "simplified": "",
        "radicals": ["", ""]
    },
    "絲": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "silk",
        "simplified": "丝",
        "radicals": ["", ""]
    },
    "輛": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "liàng",
        "tone": 4,
        "english": "(mw. for vehicles)",
        "simplified": "辆",
        "radicals": ["", ""]
    },
    "喬": {
        "zhuyin": "ㄑㄧㄠˊ",
        "pinyin": "qiáo",
        "tone": 2,
        "english": "tall, lofty",
        "simplified": "乔",
        "radicals": ["", ""]
    },
    "防": {
        "zhuyin": "ㄈㄤˊ",
        "pinyin": "fáng",
        "tone": 2,
        "english": "to protect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "句": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "jù",
        "tone": 4,
        "english": "sentence",
        "simplified": "",
        "radicals": ["", ""]
    },
    "印": {
        "zhuyin": "ㄧㄣˋ",
        "pinyin": "yìn",
        "tone": 4,
        "english": "to print, image",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戀": {
        "zhuyin": "ㄌㄧㄢˋ",
        "pinyin": "liàn",
        "tone": 4,
        "english": "to feel attached to",
        "simplified": "恋",
        "radicals": ["", ""]
    },
    "弗": {
        "zhuyin": "ㄈㄨˊ",
        "pinyin": "fú",
        "tone": 2,
        "english": "not, negative",
        "simplified": "",
        "radicals": ["", ""]
    },
    "季": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "season",
        "simplified": "",
        "radicals": ["", ""]
    },
    "嚴": {
        "zhuyin": "ㄧㄢˊ",
        "pinyin": "yán",
        "tone": 2,
        "english": "strict, tight",
        "simplified": "严",
        "radicals": ["", ""]
    },
    "推": {
        "zhuyin": "ㄊㄨㄟ",
        "pinyin": "tuī",
        "tone": 1,
        "english": "to push",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伯": {
        "zhuyin": "ㄅㄛˊ",
        "pinyin": "bó",
        "tone": 2,
        "english": "eldest uncle",
        "simplified": "",
        "radicals": ["", ""]
    },
    "莉": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "white jasmine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "武": {
        "zhuyin": "ㄨˇ",
        "pinyin": "wǔ",
        "tone": 3,
        "english": "martial",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勝": {
        "zhuyin": "ㄕㄥˋ",
        "pinyin": "shèng",
        "tone": 4,
        "english": "victory, better",
        "simplified": "胜",
        "radicals": ["", ""]
    },
    "毛": {
        "zhuyin": "ㄇㄠˊ",
        "pinyin": "máo",
        "tone": 2,
        "english": "hair, coarse",
        "simplified": "",
        "radicals": ["", ""]
    },
    "壓": {
        "zhuyin": "ㄧㄚ",
        "pinyin": "yā",
        "tone": 1,
        "english": "to push down",
        "simplified": "压",
        "radicals": ["", ""]
    },
    "敗": {
        "zhuyin": "ㄅㄞˋ",
        "pinyin": "bài",
        "tone": 4,
        "english": "to defeat",
        "simplified": "败",
        "radicals": ["", ""]
    },
    "究": {
        "zhuyin": "ㄐㄧㄡ",
        "pinyin": "jiū",
        "tone": 1,
        "english": "after all, to investigate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "評": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "píng",
        "tone": 2,
        "english": "to comment, critisize",
        "simplified": "评",
        "radicals": ["", ""]
    },
    "屋": {
        "zhuyin": "ㄨ",
        "pinyin": "wū",
        "tone": 1,
        "english": "house, room",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雙": {
        "zhuyin": "ㄕㄨㄤ",
        "pinyin": "shuāng",
        "tone": 1,
        "english": "pair, double",
        "simplified": "双",
        "radicals": ["", ""]
    },
    "牙": {
        "zhuyin": "ㄧㄚˊ",
        "pinyin": "yá",
        "tone": 2,
        "english": "tooth",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鬥": {
        "zhuyin": "ㄉㄡˇ",
        "pinyin": "dòu",
        "tone": 4,
        "english": "to fight",
        "simplified": "斗",
        "radicals": ["", ""]
    },
    "雞": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "jī",
        "tone": 1,
        "english": "chicken",
        "simplified": "鸡",
        "radicals": ["", ""]
    },
    "審": {
        "zhuyin": "ㄕㄣˇ",
        "pinyin": "shěn",
        "tone": 3,
        "english": "to examine",
        "simplified": "审",
        "radicals": ["", ""]
    },
    "南": {
        "zhuyin": "ㄋㄢˊ",
        "pinyin": "nán",
        "tone": 2,
        "english": "south",
        "simplified": "",
        "radicals": ["", ""]
    },
    "速": {
        "zhuyin": "ㄙㄨˋ",
        "pinyin": "sù",
        "tone": 4,
        "english": "fast, rapid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蠢": {
        "zhuyin": "ㄔㄨㄣˇ",
        "pinyin": "chǔn",
        "tone": 3,
        "english": "stupid, clumsy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "丈": {
        "zhuyin": "ㄓㄤˋ",
        "pinyin": "zhàng ",
        "tone": 4,
        "english": "husband",
        "simplified": "",
        "radicals": ["", ""]
    },
    "守": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "to guard",
        "simplified": "",
        "radicals": ["", ""]
    },
    "獲": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "huò",
        "tone": 4,
        "english": "to capture, reap",
        "simplified": "获",
        "radicals": ["", ""]
    },
    "八": {
        "zhuyin": "ㄅㄚ",
        "pinyin": "bā",
        "tone": 1,
        "english": "eight",
        "simplified": "",
        "radicals": ["", ""]
    },
    "致": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "fine, delicate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "細": {
        "zhuyin": "ㄒㄧˋ",
        "pinyin": "xì",
        "tone": 4,
        "english": "thin, fine",
        "simplified": "细",
        "radicals": ["", ""]
    },
    "勒": {
        "zhuyin": "ㄌㄜˋ",
        "pinyin": "lè",
        "tone": 4,
        "english": "to rein in, compel",
        "simplified": "",
        "radicals": ["", ""]
    },
    "稱": {
        "zhuyin": "ㄔㄥ",
        "pinyin": "chēng",
        "tone": 1,
        "english": "to weigh, name",
        "simplified": "称",
        "radicals": ["", ""]
    },
    "塔": {
        "zhuyin": "ㄊㄚˇ",
        "pinyin": "tǎ",
        "tone": 3,
        "english": "pagoda, tower",
        "simplified": "",
        "radicals": ["", ""]
    },
    "丟": {
        "zhuyin": "ㄉㄧㄡ",
        "pinyin": "diū",
        "tone": 1,
        "english": "to lose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "冰": {
        "zhuyin": "ㄅㄧㄥ",
        "pinyin": "bīng",
        "tone": 1,
        "english": "ice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "態": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "tài",
        "tone": 4,
        "english": "attitude",
        "simplified": "态",
        "radicals": ["", ""]
    },
    "嚇": {
        "zhuyin": "ㄒㄧㄚˋ",
        "pinyin": "xià",
        "tone": 4,
        "english": "to scare",
        "simplified": "吓",
        "radicals": ["", ""]
    },
    "古": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "ancient",
        "simplified": "",
        "radicals": ["", ""]
    },
    "亡": {
        "zhuyin": "ㄨㄤˊ",
        "pinyin": "wáng",
        "tone": 2,
        "english": "to die",
        "simplified": "",
        "radicals": ["", ""]
    },
    "狀": {
        "zhuyin": "ㄓㄨㄤˋ",
        "pinyin": "zhuàng",
        "tone": 4,
        "english": "suit, strong",
        "simplified": "状",
        "radicals": ["", ""]
    },
    "魯": {
        "zhuyin": "ㄌㄨˇ",
        "pinyin": "lǔ",
        "tone": 3,
        "english": "foolish, surname",
        "simplified": "鲁",
        "radicals": ["", ""]
    },
    "療": {
        "zhuyin": "ㄌㄧㄠˊ",
        "pinyin": "liáo",
        "tone": 2,
        "english": "to be healed",
        "simplified": "疗",
        "radicals": ["", ""]
    },
    "操": {
        "zhuyin": "ㄘㄠ",
        "pinyin": "cāo",
        "tone": 1,
        "english": "to operate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遺": {
        "zhuyin": "ㄧˊ",
        "pinyin": "yí",
        "tone": 2,
        "english": "to lose, omit",
        "simplified": "遗",
        "radicals": ["", ""]
    },
    "判": {
        "zhuyin": "ㄆㄢˋ",
        "pinyin": "pàn",
        "tone": 4,
        "english": "to judge",
        "simplified": "",
        "radicals": ["", ""]
    },
    "響": {
        "zhuyin": "ㄒㄧㄤˇ",
        "pinyin": "xiǎng",
        "tone": 3,
        "english": "sound, noise",
        "simplified": "响",
        "radicals": ["", ""]
    },
    "網": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "wǎng",
        "tone": 3,
        "english": "net, network",
        "simplified": "网",
        "radicals": ["", ""]
    },
    "箱": {
        "zhuyin": "ㄒㄧㄤ",
        "pinyin": "xiāng",
        "tone": 1,
        "english": "box, chest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "貨": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "huò",
        "tone": 4,
        "english": "goods",
        "simplified": "货",
        "radicals": ["", ""]
    },
    "圍": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "wéi",
        "tone": 2,
        "english": "to encircle",
        "simplified": "围",
        "radicals": ["", ""]
    },
    "簽": {
        "zhuyin": "ㄑㄧㄢ",
        "pinyin": "qiān",
        "tone": 1,
        "english": "to sign, label",
        "simplified": "签",
        "radicals": ["", ""]
    },
    "牌": {
        "zhuyin": "ㄆㄞˊ",
        "pinyin": "pái",
        "tone": 2,
        "english": "card, tablet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "戶": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "hù",
        "tone": 4,
        "english": "door, household",
        "simplified": "户",
        "radicals": ["", ""]
    },
    "尋": {
        "zhuyin": "ㄒㄩㄣˊ",
        "pinyin": "xún",
        "tone": 2,
        "english": "to search",
        "simplified": "寻",
        "radicals": ["", ""]
    },
    "質": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "character, quality",
        "simplified": "质",
        "radicals": ["", ""]
    },
    "供": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "to supply",
        "simplified": "",
        "radicals": ["", ""]
    },
    "獎": {
        "zhuyin": "ㄐㄧㄤˇ",
        "pinyin": "jiǎng",
        "tone": 3,
        "english": "prize",
        "simplified": "奖",
        "radicals": ["", ""]
    },
    "袋": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "dài",
        "tone": 4,
        "english": "pocket",
        "simplified": "",
        "radicals": ["", ""]
    },
    "胡": {
        "zhuyin": "ㄏㄨˊ",
        "pinyin": "hú",
        "tone": 2,
        "english": "beard, mustache",
        "simplified": "",
        "radicals": ["", ""]
    },
    "臟": {
        "zhuyin": "ㄗㄤˋ",
        "pinyin": "zāng ",
        "tone": 1,
        "english": "dirty",
        "simplified": "脏",
        "radicals": ["", ""]
    },
    "堂": {
        "zhuyin": "ㄊㄤˊ",
        "pinyin": "táng",
        "tone": 2,
        "english": "hall, (mw. for furniture sets)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "曼": {
        "zhuyin": "ㄇㄢˋ",
        "pinyin": "màn ",
        "tone": 4,
        "english": "extended",
        "simplified": "",
        "radicals": ["", ""]
    },
    "效": {
        "zhuyin": "ㄒㄧㄠˋ",
        "pinyin": "xiào",
        "tone": 4,
        "english": "effect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "露": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "lù",
        "tone": 4,
        "english": "dew, to reveal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "替": {
        "zhuyin": "ㄊㄧˋ",
        "pinyin": "tì",
        "tone": 4,
        "english": "on behalf",
        "simplified": "",
        "radicals": ["", ""]
    },
    "娜": {
        "zhuyin": "ㄋㄨㄛˊ",
        "pinyin": "nuó",
        "tone": 2,
        "english": "elegant, delicate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "座": {
        "zhuyin": "ㄗㄨㄛˋ",
        "pinyin": "zuò",
        "tone": 4,
        "english": "seat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "園": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "yuán",
        "tone": 2,
        "english": "park",
        "simplified": "园",
        "radicals": ["", ""]
    },
    "擁": {
        "zhuyin": "ㄩㄥ",
        "pinyin": "yǒng",
        "tone": 3,
        "english": "to embrace",
        "simplified": "拥",
        "radicals": ["", ""]
    },
    "睛": {
        "zhuyin": "ㄐㄧㄥ",
        "pinyin": "jīng",
        "tone": 1,
        "english": "eye, eyeball",
        "simplified": "",
        "radicals": ["", ""]
    },
    "冒": {
        "zhuyin": "ㄇㄠˋ",
        "pinyin": "mào",
        "tone": 4,
        "english": "to emit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "甜": {
        "zhuyin": "ㄊㄧㄢˊ",
        "pinyin": "tián",
        "tone": 2,
        "english": "sweet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "股": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "portion, thigh",
        "simplified": "",
        "radicals": ["", ""]
    },
    "香": {
        "zhuyin": "ㄒㄧㄤ",
        "pinyin": "xiāng",
        "tone": 1,
        "english": "fragrant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "筆": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "pen, brush",
        "simplified": "笔",
        "radicals": ["", ""]
    },
    "沙": {
        "zhuyin": "ㄕㄚ",
        "pinyin": "shā",
        "tone": 1,
        "english": "sand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擾": {
        "zhuyin": "ㄖㄠˇ",
        "pinyin": "rǎo",
        "tone": 3,
        "english": "to disturb",
        "simplified": "扰",
        "radicals": ["", ""]
    },
    "挑": {
        "zhuyin": "ㄊㄧㄠ",
        "pinyin": "tiāo",
        "tone": 1,
        "english": "to choose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "姑": {
        "zhuyin": "ㄍㄨ",
        "pinyin": "gū",
        "tone": 1,
        "english": "aunt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "爆": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "bào",
        "tone": 4,
        "english": "to explode",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鎮": {
        "zhuyin": "ㄓㄣˋ",
        "pinyin": "zhèn",
        "tone": 4,
        "english": "suppress, small town",
        "simplified": "镇",
        "radicals": ["", ""]
    },
    "暴": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "bào",
        "tone": 4,
        "english": "violent, cruel",
        "simplified": "",
        "radicals": ["", ""]
    },
    "困": {
        "zhuyin": "ㄎㄨㄣˋ",
        "pinyin": "kùn",
        "tone": 4,
        "english": "sleepy, difficult",
        "simplified": "",
        "radicals": ["", ""]
    },
    "項": {
        "zhuyin": "ㄒㄧㄤˋ",
        "pinyin": "xiàng",
        "tone": 4,
        "english": "item, back of the neck",
        "simplified": "项",
        "radicals": ["", ""]
    },
    "概": {
        "zhuyin": "ㄍㄞˋ",
        "pinyin": "gài",
        "tone": 4,
        "english": "approximate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "摩": {
        "zhuyin": "ㄇㄛˊ",
        "pinyin": "mó",
        "tone": 2,
        "english": "to rub",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雖": {
        "zhuyin": "ㄙㄨㄟ",
        "pinyin": "suī",
        "tone": 1,
        "english": "although",
        "simplified": "虽",
        "radicals": ["", ""]
    },
    "紐": {
        "zhuyin": "ㄋㄧㄡˇ",
        "pinyin": "niǔ",
        "tone": 3,
        "english": "knot, knob, button",
        "simplified": "纽",
        "radicals": ["", ""]
    },
    "享": {
        "zhuyin": "ㄒㄧㄤˇ",
        "pinyin": "xiǎng",
        "tone": 3,
        "english": "to enjoy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "配": {
        "zhuyin": "ㄆㄟˋ",
        "pinyin": "pèi",
        "tone": 4,
        "english": "to join, match",
        "simplified": "",
        "radicals": ["", ""]
    },
    "跡": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "traces",
        "simplified": "迹",
        "radicals": ["", ""]
    },
    "登": {
        "zhuyin": "ㄉㄥ",
        "pinyin": "dēng",
        "tone": 1,
        "english": "to ascend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "誕": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "dàn",
        "tone": 4,
        "english": "give birth",
        "simplified": "诞",
        "radicals": ["", ""]
    },
    "竟": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "jìng",
        "tone": 4,
        "english": "unexpectedly",
        "simplified": "",
        "radicals": ["", ""]
    },
    "叔": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "father's younger brother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "捕": {
        "zhuyin": "ㄅㄨˇ",
        "pinyin": "bǔ",
        "tone": 3,
        "english": "to arrest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賭": {
        "zhuyin": "ㄉㄨˇ",
        "pinyin": "dǔ ",
        "tone": 3,
        "english": "to gamble",
        "simplified": "赌",
        "radicals": ["", ""]
    },
    "阻": {
        "zhuyin": "ㄗㄨˇ",
        "pinyin": "zǔ",
        "tone": 3,
        "english": "to obstruct",
        "simplified": "",
        "radicals": ["", ""]
    },
    "彩": {
        "zhuyin": "ㄘㄞˇ",
        "pinyin": "cǎi",
        "tone": 3,
        "english": "color, variety",
        "simplified": "",
        "radicals": ["", ""]
    },
    "搬": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "bān",
        "tone": 1,
        "english": "to move(house)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "屬": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "shǔ",
        "tone": 3,
        "english": "category, affiliation",
        "simplified": "属",
        "radicals": ["", ""]
    },
    "招": {
        "zhuyin": "ㄓㄠ",
        "pinyin": "zhāo",
        "tone": 1,
        "english": "to recruit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "婆": {
        "zhuyin": "ㄆㄛˊ",
        "pinyin": "pó",
        "tone": 2,
        "english": "grandmother",
        "simplified": "",
        "radicals": ["", ""]
    },
    "巧": {
        "zhuyin": "ㄑㄧㄠˇ",
        "pinyin": "qiǎo",
        "tone": 3,
        "english": "timely, opportunely",
        "simplified": "",
        "radicals": ["", ""]
    },
    "骨": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "bone",
        "simplified": "",
        "radicals": ["", ""]
    },
    "塞": {
        "zhuyin": "ㄙㄞ",
        "pinyin": "sāi",
        "tone": 1,
        "english": "to stop up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "剩": {
        "zhuyin": "ㄕㄥˋ",
        "pinyin": "shèng",
        "tone": 4,
        "english": "to remain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "酷": {
        "zhuyin": "ㄎㄨˋ",
        "pinyin": "kù",
        "tone": 4,
        "english": "ruthless, cool",
        "simplified": "",
        "radicals": ["", ""]
    },
    "啡": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi ",
        "tone": 1,
        "english": "coffee, morphine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "課": {
        "zhuyin": "ㄎㄜˋ",
        "pinyin": "kè",
        "tone": 4,
        "english": "subject, lesson",
        "simplified": "课",
        "radicals": ["", ""]
    },
    "煙": {
        "zhuyin": "ㄧㄢ",
        "pinyin": "yān",
        "tone": 1,
        "english": "cigarette, smoke",
        "simplified": "烟",
        "radicals": ["", ""]
    },
    "攝": {
        "zhuyin": "ㄕㄜˋ",
        "pinyin": "shè",
        "tone": 4,
        "english": "to absorb",
        "simplified": "摄",
        "radicals": ["", ""]
    },
    "封": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "tone": 1,
        "english": "to grant, title",
        "simplified": "",
        "radicals": ["", ""]
    },
    "咖": {
        "zhuyin": "ㄎㄚ",
        "pinyin": "kā",
        "tone": 1,
        "english": "coffee, (phonetic ka)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "低": {
        "zhuyin": "ㄉㄧ",
        "pinyin": "dī",
        "tone": 1,
        "english": "low, beneath",
        "simplified": "",
        "radicals": ["", ""]
    },
    "技": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "skill",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遲": {
        "zhuyin": "ㄔˊ",
        "pinyin": "chí",
        "tone": 2,
        "english": "late, slow",
        "simplified": "迟",
        "radicals": ["", ""]
    },
    "紙": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 1,
        "english": "paper",
        "simplified": "纸",
        "radicals": ["", ""]
    },
    "燒": {
        "zhuyin": "ㄕㄠ",
        "pinyin": "shāo",
        "tone": 1,
        "english": "to cook, roast, bake",
        "simplified": "烧",
        "radicals": ["", ""]
    },
    "委": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "wěi",
        "tone": 3,
        "english": "to entrust",
        "simplified": "",
        "radicals": ["", ""]
    },
    "暗": {
        "zhuyin": "ㄢˋ",
        "pinyin": "àn",
        "tone": 4,
        "english": "dark, gloomy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "左": {
        "zhuyin": "ㄗㄨㄛˇ",
        "pinyin": "zuǒ",
        "tone": 3,
        "english": "left",
        "simplified": "",
        "radicals": ["", ""]
    },
    "輸": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "to lose",
        "simplified": "输",
        "radicals": ["", ""]
    },
    "曲": {
        "zhuyin": "ㄑㄩ",
        "pinyin": "qǔ",
        "tone": 3,
        "english": "song, tune",
        "simplified": "",
        "radicals": ["", ""]
    },
    "仍": {
        "zhuyin": "ㄖㄥˊ",
        "pinyin": "réng",
        "tone": 2,
        "english": "still, yet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "訓": {
        "zhuyin": "ㄒㄩㄣˋ",
        "pinyin": "xùn",
        "tone": 4,
        "english": "to tell, teach",
        "simplified": "训",
        "radicals": ["", ""]
    },
    "借": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "jiè",
        "tone": 4,
        "english": "to lend, borrow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "扔": {
        "zhuyin": "ㄖㄥ",
        "pinyin": "rēng",
        "tone": 1,
        "english": "to throw",
        "simplified": "",
        "radicals": ["", ""]
    },
    "善": {
        "zhuyin": "ㄕㄢˋ",
        "pinyin": "shàn",
        "tone": 4,
        "english": "virtuous, kind",
        "simplified": "",
        "radicals": ["", ""]
    },
    "社": {
        "zhuyin": "ㄕㄜˋ",
        "pinyin": "shè",
        "tone": 4,
        "english": "society",
        "simplified": "",
        "radicals": ["", ""]
    },
    "輪": {
        "zhuyin": "ㄌㄨㄣˊ",
        "pinyin": "lún",
        "tone": 2,
        "english": "wheel, by turns",
        "simplified": "轮",
        "radicals": ["", ""]
    },
    "頂": {
        "zhuyin": "ㄉㄧㄥˇ",
        "pinyin": "dǐng",
        "tone": 1,
        "english": "apex, to replace",
        "simplified": "顶",
        "radicals": ["", ""]
    },
    "聰": {
        "zhuyin": "ㄘㄨㄥ",
        "pinyin": "cōng",
        "tone": 1,
        "english": "intelligent",
        "simplified": "聪",
        "radicals": ["", ""]
    },
    "秀": {
        "zhuyin": "ㄒㄧㄡˋ",
        "pinyin": "xiù",
        "tone": 4,
        "english": "handsome, elegant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "刀": {
        "zhuyin": "ㄉㄠ",
        "pinyin": "dāo",
        "tone": 1,
        "english": "knife",
        "simplified": "",
        "radicals": ["", ""]
    },
    "莫": {
        "zhuyin": "ㄇㄛˋ",
        "pinyin": "mò",
        "tone": 4,
        "english": "do not",
        "simplified": "",
        "radicals": ["", ""]
    },
    "腿": {
        "zhuyin": "ㄊㄨㄟˇ",
        "pinyin": "tuǐ",
        "tone": 3,
        "english": "legs, thighs",
        "simplified": "",
        "radicals": ["", ""]
    },
    "族": {
        "zhuyin": "ㄗㄨˊ",
        "pinyin": "zú",
        "tone": 2,
        "english": "race, nationality",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鞋": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "xié",
        "tone": 2,
        "english": "shoes",
        "simplified": "",
        "radicals": ["", ""]
    },
    "兵": {
        "zhuyin": "ㄅㄧㄥ",
        "pinyin": "bīng",
        "tone": 1,
        "english": "soldiers",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鎖": {
        "zhuyin": "ㄙㄨㄛˇ",
        "pinyin": "suǒ",
        "tone": 3,
        "english": "lock",
        "simplified": "锁",
        "radicals": ["", ""]
    },
    "妮": {
        "zhuyin": "ㄋㄧ",
        "pinyin": "nī",
        "tone": 1,
        "english": "girl",
        "simplified": "",
        "radicals": ["", ""]
    },
    "異": {
        "zhuyin": "ㄧˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "different, other",
        "simplified": "异",
        "radicals": ["", ""]
    },
    "誓": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "swear, oath",
        "simplified": "",
        "radicals": ["", ""]
    },
    "樹": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "tree",
        "simplified": "树",
        "radicals": ["", ""]
    },
    "木": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "wood, tree",
        "simplified": "",
        "radicals": ["", ""]
    },
    "搶": {
        "zhuyin": "ㄑㄧㄤˇ",
        "pinyin": "qiǎng ",
        "tone": 3,
        "english": "to plunder",
        "simplified": "抢",
        "radicals": ["", ""]
    },
    "檔": {
        "zhuyin": "ㄉㄤˋ",
        "pinyin": "dǎng",
        "tone": 3,
        "english": "grade(of goods), shelves",
        "simplified": "档",
        "radicals": ["", ""]
    },
    "雇": {
        "zhuyin": "ㄍㄨˋ",
        "pinyin": "gù",
        "tone": 4,
        "english": "to employ",
        "simplified": "",
        "radicals": ["", ""]
    },
    "廣": {
        "zhuyin": "ㄍㄨㄤˇ",
        "pinyin": "guǎng",
        "tone": 3,
        "english": "wide",
        "simplified": "广",
        "radicals": ["", ""]
    },
    "丹": {
        "zhuyin": "ㄉㄢ",
        "pinyin": "dān",
        "tone": 1,
        "english": "pellet, powder, (phoenetic dan)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "銀": {
        "zhuyin": "ㄧㄣˊ",
        "pinyin": "yín",
        "tone": 2,
        "english": "silver",
        "simplified": "银",
        "radicals": ["", ""]
    },
    "鏡": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "jìng",
        "tone": 4,
        "english": "mirror",
        "simplified": "镜",
        "radicals": ["", ""]
    },
    "群": {
        "zhuyin": "ㄑㄩㄣˊ",
        "pinyin": "qún",
        "tone": 2,
        "english": "group",
        "simplified": "",
        "radicals": ["", ""]
    },

}
const hanzi3 = {
    "坦": {
        "zhuyin": "ㄊㄢˇ",
        "pinyin": "tǎn",
        "tone": 3,
        "english": "flat, smooth",
        "simplified": "",
        "radicals": ["", ""]
    },
    "漢": {
        "zhuyin": "ㄏㄢˋ",
        "pinyin": "hàn",
        "tone": 4,
        "english": "Han people",
        "simplified": "汉",
        "radicals": ["", ""]
    },
    "土": {
        "zhuyin": "ㄊㄨˇ",
        "pinyin": "tǔ",
        "tone": 3,
        "english": "earth",
        "simplified": "",
        "radicals": ["", ""]
    },
    "短": {
        "zhuyin": "ㄉㄨㄢˇ",
        "pinyin": "duǎn",
        "tone": 3,
        "english": "short, brief",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伴": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "bàn",
        "tone": 4,
        "english": "pertner",
        "simplified": "",
        "radicals": ["", ""]
    },
    "播": {
        "zhuyin": "ㄅㄛ",
        "pinyin": "bō",
        "tone": 1,
        "english": "to scatter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "環": {
        "zhuyin": "ㄏㄨㄢˊ",
        "pinyin": "huán",
        "tone": 2,
        "english": "ring, to circle",
        "simplified": "环",
        "radicals": ["", ""]
    },
    "恨": {
        "zhuyin": "ㄏㄣˋ",
        "pinyin": "hèn",
        "tone": 4,
        "english": "to hate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "移": {
        "zhuyin": "ㄧˊ",
        "pinyin": "yí",
        "tone": 2,
        "english": "to move, alter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "編": {
        "zhuyin": "ㄅㄧㄢ",
        "pinyin": "biān",
        "tone": 1,
        "english": "to organize, compile",
        "simplified": "编",
        "radicals": ["", ""]
    },
    "溫": {
        "zhuyin": "ㄨㄣ",
        "pinyin": "wēn",
        "tone": 1,
        "english": "warm",
        "simplified": "温",
        "radicals": ["", ""]
    },
    "刺": {
        "zhuyin": "ㄘˋ",
        "pinyin": "cì",
        "tone": 4,
        "english": "to stab, pierce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "毫": {
        "zhuyin": "ㄏㄠˊ",
        "pinyin": "háo",
        "tone": 2,
        "english": "fine hair",
        "simplified": "",
        "radicals": ["", ""]
    },
    "右": {
        "zhuyin": "ㄧㄡˋ",
        "pinyin": "yòu",
        "tone": 4,
        "english": "right",
        "simplified": "",
        "radicals": ["", ""]
    },
    "野": {
        "zhuyin": "ㄧㄝˇ",
        "pinyin": "yě",
        "tone": 3,
        "english": "field, wild",
        "simplified": "",
        "radicals": ["", ""]
    },
    "哭": {
        "zhuyin": "ㄎㄨ",
        "pinyin": "kū",
        "tone": 1,
        "english": "to cry",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遍": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "biàn",
        "tone": 4,
        "english": "everywhere",
        "simplified": "",
        "radicals": ["", ""]
    },
    "庫": {
        "zhuyin": "ㄎㄨˋ",
        "pinyin": "kù",
        "tone": 4,
        "english": "warehouse",
        "simplified": "库",
        "radicals": ["", ""]
    },
    "搭": {
        "zhuyin": "ㄉㄚ",
        "pinyin": "dā",
        "tone": 1,
        "english": "to put up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "康": {
        "zhuyin": "ㄎㄤ",
        "pinyin": "kāng",
        "tone": 1,
        "english": "healthy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "症": {
        "zhuyin": "ㄓㄥˋ",
        "pinyin": "zhèng",
        "tone": 4,
        "english": "disease, illness",
        "simplified": "",
        "radicals": ["", ""]
    },
    "榮": {
        "zhuyin": "ㄖㄨㄥˊ",
        "pinyin": "róng",
        "tone": 2,
        "english": "glory, honor",
        "simplified": "荣",
        "radicals": ["", ""]
    },
    "充": {
        "zhuyin": "ㄔㄨㄥ",
        "pinyin": "chōng",
        "tone": 1,
        "english": "to fill, satisfy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "創": {
        "zhuyin": "ㄔㄨㄤˋ",
        "pinyin": "chuāng",
        "tone": 1,
        "english": "a wound",
        "simplified": "创",
        "radicals": ["", ""]
    },
    "嘗": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "cháng",
        "tone": 2,
        "english": "taste, experience",
        "simplified": "尝",
        "radicals": ["", ""]
    },
    "列": {
        "zhuyin": "ㄌㄧㄝˋ",
        "pinyin": "liè",
        "tone": 4,
        "english": "to arrange, a list",
        "simplified": "",
        "radicals": ["", ""]
    },
    "畢": {
        "zhuyin": "ㄅㄧˋ",
        "pinyin": "bì",
        "tone": 4,
        "english": "the whole of, finish",
        "simplified": "毕",
        "radicals": ["", ""]
    },
    "般": {
        "zhuyin": "ㄅㄢ",
        "pinyin": "bān",
        "tone": 1,
        "english": "sort, kind",
        "simplified": "",
        "radicals": ["", ""]
    },
    "聚": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "jù",
        "tone": 4,
        "english": "to assemble",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勞": {
        "zhuyin": "ㄌㄠˊ",
        "pinyin": "láo",
        "tone": 2,
        "english": "to toil",
        "simplified": "劳",
        "radicals": ["", ""]
    },
    "攻": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "to attack",
        "simplified": "",
        "radicals": ["", ""]
    },
    "忍": {
        "zhuyin": "ㄖㄣˇ",
        "pinyin": "rěn",
        "tone": 3,
        "english": "to endure",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勢": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "power, potential",
        "simplified": "势",
        "radicals": ["", ""]
    },
    "尊": {
        "zhuyin": "ㄗㄨㄣ",
        "pinyin": "zūn",
        "tone": 1,
        "english": "senior, to honor",
        "simplified": "",
        "radicals": ["", ""]
    },
    "吻": {
        "zhuyin": "ㄨㄣˇ",
        "pinyin": "wěn ",
        "tone": 3,
        "english": "kiss, lips",
        "simplified": "",
        "radicals": ["", ""]
    },
    "湯": {
        "zhuyin": "ㄊㄤ",
        "pinyin": "tāng",
        "tone": 1,
        "english": "soup, hot water",
        "simplified": "汤",
        "radicals": ["", ""]
    },
    "優": {
        "zhuyin": "ㄧㄡ",
        "pinyin": "yōu",
        "tone": 1,
        "english": "excellent",
        "simplified": "优",
        "radicals": ["", ""]
    },
    "境": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "jìng",
        "tone": 4,
        "english": "border, place",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蒙": {
        "zhuyin": "ㄇㄥ",
        "pinyin": "méng",
        "tone": 2,
        "english": "cover, ignorant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "偶": {
        "zhuyin": "ㄡˇ",
        "pinyin": "ǒu",
        "tone": 3,
        "english": "accidental",
        "simplified": "",
        "radicals": ["", ""]
    },
    "熟": {
        "zhuyin": "ㄕㄨˊ",
        "pinyin": "shú",
        "tone": 2,
        "english": "cooked, ripe, familiar",
        "simplified": "",
        "radicals": ["", ""]
    },
    "營": {
        "zhuyin": "ㄧㄥˊ",
        "pinyin": "yíng",
        "tone": 2,
        "english": "camp, barracks",
        "simplified": "营",
        "radicals": ["", ""]
    },
    "蘇": {
        "zhuyin": "ㄙㄨ",
        "pinyin": "sū",
        "tone": 1,
        "english": "to revive",
        "simplified": "苏",
        "radicals": ["", ""]
    },
    "爺": {
        "zhuyin": "ㄧㄝˊ",
        "pinyin": "yé ",
        "tone": 2,
        "english": "father, grandfather",
        "simplified": "爷",
        "radicals": ["", ""]
    },
    "微": {
        "zhuyin": "ㄨㄟ",
        "pinyin": "wēi",
        "tone": 1,
        "english": "tiny",
        "simplified": "",
        "radicals": ["", ""]
    },
    "埃": {
        "zhuyin": "ㄞ",
        "pinyin": "āi ",
        "tone": 1,
        "english": "fine dust, dirt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "抽": {
        "zhuyin": "ㄔㄡ",
        "pinyin": "chōu",
        "tone": 1,
        "english": "to draw out",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蓋": {
        "zhuyin": "ㄍㄞˋ",
        "pinyin": "gài",
        "tone": 4,
        "english": "lid, cover",
        "simplified": "",
        "radicals": ["", ""]
    },
    "燈": {
        "zhuyin": "ㄉㄥ",
        "pinyin": "dēng",
        "tone": 1,
        "english": "light, lamp",
        "simplified": "",
        "radicals": ["", ""]
    },
    "莎": {
        "zhuyin": "ㄕㄚ",
        "pinyin": "shā",
        "tone": 1,
        "english": "sedge grass",
        "simplified": "",
        "radicals": ["", ""]
    },
    "府": {
        "zhuyin": "ㄈㄨˇ",
        "pinyin": "fǔ",
        "tone": 3,
        "english": "seat of power",
        "simplified": "",
        "radicals": ["", ""]
    },
    // 1050/2633 done
    "透": {
        "zhuyin": "ㄊㄡˋ",
        "pinyin": "tòu",
        "tone": 4,
        "english": "to penetrate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "魂": {
        "zhuyin": "ㄏㄨㄣˊ",
        "pinyin": "hún",
        "tone": 2,
        "english": "soul, spirit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "藝": {
        "zhuyin": "ㄧˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "skill, art",
        "simplified": "艺",
        "radicals": ["", ""]
    },
    "掌": {
        "zhuyin": "ㄓㄤˇ",
        "pinyin": "zhǎng",
        "tone": 3,
        "english": "palm of hand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "啥": {
        "zhuyin": "ㄕㄚˊ",
        "pinyin": "shà",
        "tone": 2,
        "english": "what?",
        "simplified": "",
        "radicals": ["", ""]
    },
    "升": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "to ascend, promote",
        "simplified": "",
        "radicals": ["", ""]
    },
    "褲": {
        "zhuyin": "ㄎㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "trousers",
        "simplified": "裤",
        "radicals": ["", ""]
    },
    "臨": {
        "zhuyin": "ㄌㄧㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to face",
        "simplified": "临",
        "radicals": ["", ""]
    },
    "智": {
        "zhuyin": "ㄓˋ",
        "pinyin": "",
        "tone": 4,
        "english": "wisdom",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盤": {
        "zhuyin": "ㄆㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "plate",
        "simplified": "盘",
        "radicals": ["", ""]
    },
    "研": {
        "zhuyin": "ㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "study, research",
        "simplified": "",
        "radicals": ["", ""]
    },
    "菲": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "fragrant, luxuriant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "歸": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "to return",
        "simplified": "归",
        "radicals": ["", ""]
    },
    "撞": {
        "zhuyin": "ㄓㄨㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to hit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "隱": {
        "zhuyin": "ㄧㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "secret",
        "simplified": "隐",
        "radicals": ["", ""]
    },
    "附": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to be close to, to add",
        "simplified": "",
        "radicals": ["", ""]
    },
    "搜": {
        "zhuyin": "ㄙㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "to seek",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擺": {
        "zhuyin": "ㄅㄞˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to arrange",
        "simplified": "摆",
        "radicals": ["", ""]
    },
    "散": {
        "zhuyin": "ㄙㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to scatter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "陽": {
        "zhuyin": "ㄧㄤˊ",
        "pinyin": "yáng",
        "tone": 2,
        "english": "male, sun",
        "simplified": "阳",
        "radicals": ["", ""]
    },
    "協": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "xié",
        "tone": 2,
        "english": "to cooperate",
        "simplified": "协",
        "radicals": ["", ""]
    },
    "租": {
        "zhuyin": "ㄗㄨ",
        "pinyin": "zū",
        "tone": 1,
        "english": "to hire",
        "simplified": "",
        "radicals": ["", ""]
    },
    "泰": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "tài",
        "tone": 4,
        "english": "safe, grand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "島": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "dǎo",
        "tone": 3,
        "english": "island",
        "simplified": "岛",
        "radicals": ["", ""]
    },
    "健": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "healthy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "餅": {
        "zhuyin": "ㄅㄧㄥˇ",
        "pinyin": "bǐng",
        "tone": 3,
        "english": "biscuits",
        "simplified": "饼",
        "radicals": ["", ""]
    },
    "較": {
        "zhuyin": "ㄐㄧㄠˋ",
        "pinyin": "jiào",
        "tone": 4,
        "english": "comparatively",
        "simplified": "较",
        "radicals": ["", ""]
    },
    "避": {
        "zhuyin": "ㄅㄧˋ",
        "pinyin": "bì",
        "tone": 4,
        "english": "to flee, avoid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "貓": {
        "zhuyin": "ㄇㄠ",
        "pinyin": "māo",
        "tone": 1,
        "english": "cat",
        "simplified": "猫",
        "radicals": ["", ""]
    },
    "七": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "qī",
        "tone": 1,
        "english": "seven",
        "simplified": "",
        "radicals": ["", ""]
    },
    "菜": {
        "zhuyin": "ㄘㄞˋ",
        "pinyin": "cài",
        "tone": 4,
        "english": "dish, cuisine, vegetable",
        "simplified": "",
        "radicals": ["", ""]
    },
    "糖": {
        "zhuyin": "ㄊㄤˊ",
        "pinyin": "táng",
        "tone": 2,
        "english": "sugar, sweets",
        "simplified": "",
        "radicals": ["", ""]
    },
    "痴": {
        "zhuyin": "ㄔ",
        "pinyin": "chī",
        "tone": 1,
        "english": "imbecile",
        "simplified": "",
        "radicals": ["", ""]
    },
    "富": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "rich, abundant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "降": {
        "zhuyin": "ㄐㄧㄤˋ",
        "pinyin": "jiàng",
        "tone": 4,
        "english": "to drop, descend",
        "simplified": "",
        "radicals": ["", ""]
    },
    "憐": {
        "zhuyin": "ㄌㄧㄢˊ",
        "pinyin": "lián",
        "tone": 2,
        "english": "to pity",
        "simplified": "怜",
        "radicals": ["", ""]
    },
    "既": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "already, both",
        "simplified": "",
        "radicals": ["", ""]
    },
    "織": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "to weave",
        "simplified": "织",
        "radicals": ["", ""]
    },
    "執": {
        "zhuyin": "ㄓˊ",
        "pinyin": "zhí",
        "tone": 2,
        "english": "to execute, grasp",
        "simplified": "执",
        "radicals": ["", ""]
    },
    "戒": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "jiè",
        "tone": 4,
        "english": "to warn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "佛": {
        "zhuyin": "ㄈㄛˊ",
        "pinyin": "fó",
        "tone": 2,
        "english": "Buddha",
        "simplified": "",
        "radicals": ["", ""]
    },
    "抗": {
        "zhuyin": "ㄎㄤˋ",
        "pinyin": "kàng",
        "tone": 4,
        "english": "to resist, anti-",
        "simplified": "",
        "radicals": ["", ""]
    },
    "笨": {
        "zhuyin": "ㄅㄣˋ",
        "pinyin": "bèn",
        "tone": 4,
        "english": "stupid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "航": {
        "zhuyin": "ㄏㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "boat, to sail",
        "simplified": "",
        "radicals": ["", ""]
    },
    "妙": {
        "zhuyin": "ㄇㄧㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "wonderful",
        "simplified": "",
        "radicals": ["", ""]
    },
    "邁": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to pass by",
        "simplified": "迈",
        "radicals": ["", ""]
    },
    "耳": {
        "zhuyin": "ㄦˇ",
        "pinyin": "",
        "tone": 3,
        "english": "ear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "匙": {
        "zhuyin": "ㄔˊ",
        "pinyin": "",
        "tone": 2,
        "english": "spoon",
        "simplified": "",
        "radicals": ["", ""]
    },
    "宣": {
        "zhuyin": "ㄒㄩㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to announce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "爛": {
        "zhuyin": "ㄌㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "soft, rotten",
        "simplified": "烂",
        "radicals": ["", ""]
    },
    "秒": {
        "zhuyin": "ㄇㄧㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "a second",
        "simplified": "",
        "radicals": ["", ""]
    },
    "掛": {
        "zhuyin": "ㄍㄨㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to hang, register",
        "simplified": "挂",
        "radicals": ["", ""]
    },
    "旁": {
        "zhuyin": "ㄆㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "beside, side",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勇": {
        "zhuyin": "ㄩㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "brave",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鑰": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "key, lock",
        "simplified": "钥",
        "radicals": ["", ""]
    },
    "悲": {
        "zhuyin": "ㄅㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "sorrow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "婦": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "married woman",
        "simplified": "妇",
        "radicals": ["", ""]
    },
    "圈": {
        "zhuyin": "ㄑㄩㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "ring, to cricle",
        "simplified": "",
        "radicals": ["", ""]
    },
    "敬": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to respect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "勁": {
        "zhuyin": "ㄐㄧㄣˋ",
        "pinyin": "",
        "tone": 4,
        "english": "strong, tough",
        "simplified": "劲",
        "radicals": ["", ""]
    },
    "帕": {
        "zhuyin": "ㄆㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "turban, veil",
        "simplified": "",
        "radicals": ["", ""]
    },
    "草": {
        "zhuyin": "ㄘㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "grass",
        "simplified": "",
        "radicals": ["", ""]
    },
    // 1112/2500 done
    "醉": {
        "zhuyin": "ㄗㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "intoxicated",
        "simplified": "",
        "radicals": ["", ""]
    },
    "綁": {
        "zhuyin": "ㄅㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to tie",
        "simplified": "绑",
        "radicals": ["", ""]
    },
    "層": {
        "zhuyin": "ㄘㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "layer, floor of building",
        "simplified": "层",
        "radicals": ["", ""]
    },
    "吵": {
        "zhuyin": "ㄔㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to quarrel",
        "simplified": "",
        "radicals": ["", ""]
    },
    "龍": {
        "zhuyin": "ㄌㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "dragon",
        "simplified": "龙",
        "radicals": ["", ""]
    },
    "揮": {
        "zhuyin": "ㄏㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "to wave, disperse",
        "simplified": "挥",
        "radicals": ["", ""]
    },
    "奮": {
        "zhuyin": "ㄈㄣˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to strive",
        "simplified": "奋",
        "radicals": ["", ""]
    },
    "憶": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to remember",
        "simplified": "忆",
        "radicals": ["", ""]
    },
    "折": {
        "zhuyin": "ㄓㄜ",
        "pinyin": "",
        "tone": 1,
        "english": "to break, turn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "彼": {
        "zhuyin": "ㄅㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "that, those",
        "simplified": "",
        "radicals": ["", ""]
    },
    "末": {
        "zhuyin": "ㄇㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "tip, final",
        "simplified": "",
        "radicals": ["", ""]
    },
    "北": {
        "zhuyin": "ㄅㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "north",
        "simplified": "",
        "radicals": ["", ""]
    },
    "景": {
        "zhuyin": "ㄐㄧㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "scenery",
        "simplified": "",
        "radicals": ["", ""]
    },
    "沃": {
        "zhuyin": "ㄨㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to trrigate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "廢": {
        "zhuyin": "ㄈㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to abolish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "副": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "secondary, vice-",
        "simplified": "",
        "radicals": ["", ""]
    },
    "默": {
        "zhuyin": "ㄇㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "silent",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鐵": {
        "zhuyin": "ㄊㄧㄝˇ",
        "pinyin": "",
        "tone": 3,
        "english": "iron",
        "simplified": "",
        "radicals": ["", ""]
    },
    "初": {
        "zhuyin": "ㄔㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "at first",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雪": {
        "zhuyin": "ㄒㄩㄝˇ",
        "pinyin": "",
        "tone": 3,
        "english": "snow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "瓦": {
        "zhuyin": "ㄨㄚˇ",
        "pinyin": "",
        "tone": 3,
        "english": "tile, pottery",
        "simplified": "",
        "radicals": ["", ""]
    },
    "素": {
        "zhuyin": "ㄙㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "raw, silk, nature",
        "simplified": "",
        "radicals": ["", ""]
    },
    "禁": {
        "zhuyin": "ㄐㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "to prohibit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "誠": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "honest, sincere",
        "simplified": "诚",
        "radicals": ["", ""]
    },
    "黃": {
        "zhuyin": "ㄏㄨㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "yellow",
        "simplified": "黄",
        "radicals": ["", ""]
    },
    "敵": {
        "zhuyin": "ㄉㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "enemy, to resist",
        "simplified": "敌",
        "radicals": ["", ""]
    },
    "夏": {
        "zhuyin": "ㄒㄧㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "summer",
        "simplified": "",
        "radicals": ["", ""]
    },
    "貴": {
        "zhuyin": "ㄍㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "expensive",
        "simplified": "贵",
        "radicals": ["", ""]
    },
    "歐": {
        "zhuyin": "ㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "Europe",
        "simplified": "欧",
        "radicals": ["", ""]
    },
    "旦": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "dawn",
        "simplified": "",
        "radicals": ["", ""]
    },
    "依": {
        "zhuyin": "ㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "to depend on",
        "simplified": "",
        "radicals": ["", ""]
    },
    "諒": {
        "zhuyin": "ㄌㄧㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to forgive",
        "simplified": "谅",
        "radicals": ["", ""]
    },
    "桌": {
        "zhuyin": "ㄓㄨㄛ",
        "pinyin": "",
        "tone": 1,
        "english": "table",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雄": {
        "zhuyin": "ㄒㄩㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "male, grand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "丁": {
        "zhuyin": "ㄉㄧㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "male adult, robust",
        "simplified": "",
        "radicals": ["", ""]
    },
    "舒": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "leisurely, to stretch",
        "simplified": "",
        "radicals": ["", ""]
    },
    "粉": {
        "zhuyin": "ㄈㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "powder",
        "simplified": "",
        "radicals": ["", ""]
    },
    "舊": {
        "zhuyin": "ㄐㄧㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "old",
        "simplified": "旧",
        "radicals": ["", ""]
    },
    "朝": {
        "zhuyin": "ㄓㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "dynasty",
        "simplified": "",
        "radicals": ["", ""]
    },
    "廳": {
        "zhuyin": "ㄊㄧㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "hall",
        "simplified": "厅",
        "radicals": ["", ""]
    },
    "恭": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "polite",
        "simplified": "",
        "radicals": ["", ""]
    },
    "汽": {
        "zhuyin": "ㄑㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "steam",
        "simplified": "",
        "radicals": ["", ""]
    },
    "補": {
        "zhuyin": "ㄅㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to make up for",
        "simplified": "补",
        "radicals": ["", ""]
    },
    "徒": {
        "zhuyin": "ㄊㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "apprentice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "稍": {
        "zhuyin": "ㄕㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "somewhat, a little",
        "simplified": "",
        "radicals": ["", ""]
    },
    "搖": {
        "zhuyin": "ㄧㄠˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to shake",
        "simplified": "摇",
        "radicals": ["", ""]
    },
    "躲": {
        "zhuyin": "ㄉㄨㄛˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to hide",
        "simplified": "",
        "radicals": ["", ""]
    },
    "窗": {
        "zhuyin": "ㄔㄨㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "window",
        "simplified": "",
        "radicals": ["", ""]
    },
    "源": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "source, origin",
        "simplified": "",
        "radicals": ["", ""]
    },
    "藍": {
        "zhuyin": "ㄌㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "blue",
        "simplified": "蓝",
        "radicals": ["", ""]
    },
    "章": {
        "zhuyin": "ㄓㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "chapter",
        "simplified": "",
        "radicals": ["", ""]
    },
    "滅": {
        "zhuyin": "ㄇㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to extinguish",
        "simplified": "灭",
        "radicals": ["", ""]
    },
    "疼": {
        "zhuyin": "ㄊㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "aches, pains",
        "simplified": "",
        "radicals": ["", ""]
    },
    "孤": {
        "zhuyin": "ㄍㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "lonely",
        "simplified": "",
        "radicals": ["", ""]
    },
    "滑": {
        "zhuyin": "ㄏㄨㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to slip, cunning",
        "simplified": "",
        "radicals": ["", ""]
    },
    "碎": {
        "zhuyin": "ㄙㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to break, broken",
        "simplified": "",
        "radicals": ["", ""]
    },
    "弱": {
        "zhuyin": "ㄖㄨㄛˋ",
        "pinyin": "",
        "tone": 2,
        "english": "weak",
        "simplified": "",
        "radicals": ["", ""]
    },
    "仔": {
        "zhuyin": "ㄗˇ",
        "pinyin": "",
        "tone": 3,
        "english": "meticulous, young",
        "simplified": "",
        "radicals": ["", ""]
    },
    "款": {
        "zhuyin": "ㄎㄨㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "section",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拒": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to resist",
        "simplified": "",
        "radicals": ["", ""]
    },
    "河": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "river",
        "simplified": "",
        "radicals": ["", ""]
    },
    "伍": {
        "zhuyin": "ㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to associate with",
        "simplified": "",
        "radicals": ["", ""]
    },
    "紋": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "line, streak",
        "simplified": "纹",
        "radicals": ["", ""]
    },
    "臭": {
        "zhuyin": "ㄔㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "smell, stink",
        "simplified": "",
        "radicals": ["", ""]
    },
    "幻": {
        "zhuyin": "ㄏㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "fantasy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "童": {
        "zhuyin": "ㄊㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "child",
        "simplified": "",
        "radicals": ["", ""]
    },
    "翰": {
        "zhuyin": "ㄏㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "writing brush",
        "simplified": "",
        "radicals": ["", ""]
    },
    "閃": {
        "zhuyin": "ㄕㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to dodge, flash",
        "simplified": "闪",
        "radicals": ["", ""]
    },
    "殘": {
        "zhuyin": "ㄘㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to injure, cruel",
        "simplified": "残",
        "radicals": ["", ""]
    },
    "鳥": {
        "zhuyin": "ㄋㄧㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "bird",
        "simplified": "鸟",
        "radicals": ["", ""]
    },
    "騎": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to ride",
        "simplified": "骑",
        "radicals": ["", ""]
    },
    "翻": {
        "zhuyin": "ㄈㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to translate, flip",
        "simplified": "",
        "radicals": ["", ""]
    },
    "洲": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "continent, island",
        "simplified": "",
        "radicals": ["", ""]
    },
    "沉": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to submerge, sink",
        "simplified": "",
        "radicals": ["", ""]
    },
    "餓": {
        "zhuyin": "ㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "hungry",
        "simplified": "饿",
        "radicals": ["", ""]
    },
    "砸": {
        "zhuyin": "ㄗㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to smash",
        "simplified": "",
        "radicals": ["", ""]
    },
    "互": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "mutual",
        "simplified": "",
        "radicals": ["", ""]
    },
    "卷": {
        "zhuyin": "ㄐㄩㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "roll, to roll up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拖": {
        "zhuyin": "ㄊㄨㄛ",
        "pinyin": "",
        "tone": 1,
        "english": "to drag",
        "simplified": "",
        "radicals": ["", ""]
    },
    "瓜": {
        "zhuyin": "ㄍㄨㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "melon",
        "simplified": "",
        "radicals": ["", ""]
    },
    "例": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "example, case",
        "simplified": "",
        "radicals": ["", ""]
    },
    "財": {
        "zhuyin": "ㄘㄞˊ",
        "pinyin": "",
        "tone": 2,
        "english": "money, wealth",
        "simplified": "财",
        "radicals": ["", ""]
    },
    "瓶": {
        "zhuyin": "ㄆㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "bottle, vase",
        "simplified": "",
        "radicals": ["", ""]
    },
    "牆": {
        "zhuyin": "ㄑㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "wall",
        "simplified": "墙",
        "radicals": ["", ""]
    },
    "拳": {
        "zhuyin": "ㄑㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "fist, boxing",
        "simplified": "",
        "radicals": ["", ""]
    },
    "牢": {
        "zhuyin": "ㄌㄠˊ",
        "pinyin": "",
        "tone": 2,
        "english": "prison, stable",
        "simplified": "",
        "radicals": ["", ""]
    },
    "典": {
        "zhuyin": "ㄉㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "dictionary, law",
        "simplified": "",
        "radicals": ["", ""]
    },
    "垃": {
        "zhuyin": "ㄌㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "waste",
        "simplified": "",
        "radicals": ["", ""]
    },
    "染": {
        "zhuyin": "ㄖㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to dye, acquire",
        "simplified": "",
        "radicals": ["", ""]
    },
    "漫": {
        "zhuyin": "ㄇㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "free, to inundate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "觸": {
        "zhuyin": "ㄔㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to touch",
        "simplified": "触",
        "radicals": ["", ""]
    },
    "脅": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "ribs, to threaten",
        "simplified": "胁",
        "radicals": ["", ""]
    },
    "圾": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "garbage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "施": {
        "zhuyin": "ㄕ",
        "pinyin": "",
        "tone": 1,
        "english": "to grant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "胸": {
        "zhuyin": "ㄒㄩㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "breast, chest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "陰": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "cloudy, female",
        "simplified": "阴",
        "radicals": ["", ""]
    },
    "孕": {
        "zhuyin": "ㄩㄣˋ",
        "pinyin": "",
        "tone": 4,
        "english": "be pregnant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "惹": {
        "zhuyin": "ㄖㄜˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to irritate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "硬": {
        "zhuyin": "ㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "hard",
        "simplified": "",
        "radicals": ["", ""]
    },
    "逮": {
        "zhuyin": "ㄉㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to seize",
        "simplified": "",
        "radicals": ["", ""]
    },
    "銷": {
        "zhuyin": "ㄒㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "to melt",
        "simplified": "销",
        "radicals": ["", ""]
    },
    "邦": {
        "zhuyin": "ㄅㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "country, nation",
        "simplified": "",
        "radicals": ["", ""]
    },
    "劫": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to take by force",
        "simplified": "",
        "radicals": ["", ""]
    },
    "襲": {
        "zhuyin": "ㄒㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to raid",
        "simplified": "袭",
        "radicals": ["", ""]
    },
    "育": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to bring up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蟲": {
        "zhuyin": "ㄔㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "insects",
        "simplified": "虫",
        "radicals": ["", ""]
    },
    "嫌": {
        "zhuyin": "ㄒㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to hate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "累": {
        "zhuyin": "ㄌㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "tired",
        "simplified": "",
        "radicals": ["", ""]
    },
    "怖": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "terror, fear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "握": {
        "zhuyin": "ㄨㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to grasp",
        "simplified": "",
        "radicals": ["", ""]
    },
    "雨": {
        "zhuyin": "ㄩˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "缺": {
        "zhuyin": "ㄑㄩㄝ",
        "pinyin": "",
        "tone": 1,
        "english": "lack",
        "simplified": "",
        "radicals": ["", ""]
    },
    "琳": {
        "zhuyin": "ㄌㄧㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "gem",
        "simplified": "",
        "radicals": ["", ""]
    },
    "墨": {
        "zhuyin": "ㄇㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "black, corrupt",
        "simplified": "",
        "radicals": ["", ""]
    },
    "迫": {
        "zhuyin": "ㄆㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to force",
        "simplified": "",
        "radicals": ["", ""]
    },
    "采": {
        "zhuyin": "ㄘㄞˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to select, looks",
        "simplified": "",
        "radicals": ["", ""]
    },
    "輩": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "generation",
        "simplified": "辈",
        "radicals": ["", ""]
    },
    "陷": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to submerge",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蹈": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to stamp feet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "限": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "limit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "巨": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "huge",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鮑": {
        "zhuyin": "ㄅㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "dried fish",
        "simplified": "鲍",
        "radicals": ["", ""]
    },
    "針": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "needle",
        "simplified": "针",
        "radicals": ["", ""]
    },
    "雅": {
        "zhuyin": "ㄧㄚˇ",
        "pinyin": "",
        "tone": 3,
        "english": "elegant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "茲": {
        "zhuyin": "ㄗ",
        "pinyin": "",
        "tone": 1,
        "english": "now, here, this",
        "simplified": "兹",
        "radicals": ["", ""]
    },
    "尾": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "tail",
        "simplified": "",
        "radicals": ["", ""]
    },
    "青": {
        "zhuyin": "ㄑㄧㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "green, blue, young",
        "simplified": "",
        "radicals": ["", ""]
    },
    "席": {
        "zhuyin": "ㄒㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "mat, banquet",
        "simplified": "",
        "radicals": ["", ""]
    },
    "逼": {
        "zhuyin": "ㄅㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "to pressure",
        "simplified": "",
        "radicals": ["", ""]
    },
    "猶": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "like, similar to",
        "simplified": "犹",
        "radicals": ["", ""]
    },
    "扮": {
        "zhuyin": "ㄅㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to dress up",
        "simplified": "",
        "radicals": ["", ""]
    },
    "贊": {
        "zhuyin": "ㄗㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to praise, support",
        "simplified": "赞",
        "radicals": ["", ""]
    },
    "邀": {
        "zhuyin": "ㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "to invite",
        "simplified": "",
        "radicals": ["", ""]
    },
    "凈": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "clean",
        "simplified": "净",
        "radicals": ["", ""]
    },
    "鬧": {
        "zhuyin": "ㄋㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "noisy",
        "simplified": "闹",
        "radicals": ["", ""]
    },
    "訪": {
        "zhuyin": "ㄈㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to call on, inquire",
        "simplified": "访",
        "radicals": ["", ""]
    },
    "良": {
        "zhuyin": "ㄌㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "good, very much",
        "simplified": "",
        "radicals": ["", ""]
    },
    "叛": {
        "zhuyin": "ㄆㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to rebel, rebellion",
        "simplified": "",
        "radicals": ["", ""]
    },
    "駕": {
        "zhuyin": "ㄐㄧㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to operate vehicle",
        "simplified": "驾",
        "radicals": ["", ""]
    },
    "范": {
        "zhuyin": "ㄈㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "pattern, model",
        "simplified": "",
        "radicals": ["", ""]
    },
    "俄": {
        "zhuyin": "ㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "suddenly, Russia",
        "simplified": "",
        "radicals": ["", ""]
    },
    "豬": {
        "zhuyin": "ㄓㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "pig",
        "simplified": "猪",
        "radicals": ["", ""]
    },
    "辛": {
        "zhuyin": "ㄒㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "hot taste, hard",
        "simplified": "",
        "radicals": ["", ""]
    },
    "杉": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "pine, fir tree",
        "simplified": "",
        "radicals": ["", ""]
    },
    "淘": {
        "zhuyin": "ㄊㄠˊ",
        "pinyin": "",
        "tone": 2,
        "english": "wash in sieve",
        "simplified": "",
        "radicals": ["", ""]
    },
    "洞": {
        "zhuyin": "ㄉㄨㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "cave, hole",
        "simplified": "",
        "radicals": ["", ""]
    },
    "冠": {
        "zhuyin": "ㄍㄨㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "hat, crown",
        "simplified": "",
        "radicals": ["", ""]
    },
    "偉": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "big, great",
        "simplified": "伟",
        "radicals": ["", ""]
    },
    "珍": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "precious",
        "simplified": "",
        "radicals": ["", ""]
    },
    "梅": {
        "zhuyin": "ㄇㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "plum",
        "simplified": "",
        "radicals": ["", ""]
    },
    "朗": {
        "zhuyin": "ㄌㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "clear, bright",
        "simplified": "",
        "radicals": ["", ""]
    },
    "欠": {
        "zhuyin": "ㄑㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "owe, lack",
        "simplified": "",
        "radicals": ["", ""]
    },
    "扯": {
        "zhuyin": "ㄔㄜˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rip up, haul",
        "simplified": "",
        "radicals": ["", ""]
    },
    "丑": {
        "zhuyin": "ㄔㄡˇ",
        "pinyin": "",
        "tone": 3,
        "english": "clown, ugly",
        "simplified": "",
        "radicals": ["", ""]
    },
    "競": {
        "zhuyin": "ㄐㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to compete",
        "simplified": "竞",
        "radicals": ["", ""]
    },
    "劑": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "liquid, solution",
        "simplified": "剂",
        "radicals": ["", ""]
    },
    "烈": {
        "zhuyin": "ㄌㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "fierce, intense",
        "simplified": "",
        "radicals": ["", ""]
    },
    "李": {
        "zhuyin": "ㄌㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "plum",
        "simplified": "",
        "radicals": ["", ""]
    },
    "村": {
        "zhuyin": "ㄘㄨㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "village",
        "simplified": "",
        "radicals": ["", ""]
    },
    "厲": {
        "zhuyin": "ㄌㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "strict",
        "simplified": "厉",
        "radicals": ["", ""]
    },
    "廚": {
        "zhuyin": "ㄔㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "kitchen",
        "simplified": "厨",
        "radicals": ["", ""]
    },
    "允": {
        "zhuyin": "ㄩㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to grant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "授": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to teach",
        "simplified": "",
        "radicals": ["", ""]
    },
    "堆": {
        "zhuyin": "ㄉㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "to pile up, heap",
        "simplified": "",
        "radicals": ["", ""]
    },
    "慶": {
        "zhuyin": "ㄑㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to celebrate",
        "simplified": "庆",
        "radicals": ["", ""]
    },
    "率": {
        "zhuyin": "ㄕㄨㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to lead, frank",
        "simplified": "",
        "radicals": ["", ""]
    },
    "怒": {
        "zhuyin": "ㄋㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "anger, rage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "寓": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "residence",
        "simplified": "",
        "radicals": ["", ""]
    },
    "液": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "sap, juice",
        "simplified": "",
        "radicals": ["", ""]
    },
    "謂": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to speak, meaning",
        "simplified": "谓",
        "radicals": ["", ""]
    },
    "估": {
        "zhuyin": "ㄍㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "to estimate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鮮": {
        "zhuyin": "ㄒㄧㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "fresh",
        "simplified": "鲜",
        "radicals": ["", ""]
    },
    "磨": {
        "zhuyin": "ㄇㄛˊ",
        "pinyin": "",
        "tone": 2,
        "english": "grind, rub",
        "simplified": "",
        "radicals": ["", ""]
    },
    "帥": {
        "zhuyin": "ㄕㄨㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "handsome",
        "simplified": "帅",
        "radicals": ["", ""]
    },
    "婊": {
        "zhuyin": "ㄅㄧㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "prostitute",
        "simplified": "",
        "radicals": ["", ""]
    },
    "尿": {
        "zhuyin": "ㄋㄧㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "urine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鍵": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "key(board)",
        "simplified": "键",
        "radicals": ["", ""]
    },
    "余": {
        "zhuyin": "ㄩˊ",
        "pinyin": "",
        "tone": 2,
        "english": "surplus",
        "simplified": "",
        "radicals": ["", ""]
    },
    "紹": {
        "zhuyin": "ㄕㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to continue",
        "simplified": "绍",
        "radicals": ["", ""]
    },
    "娃": {
        "zhuyin": "ㄨㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "baby, doll",
        "simplified": "",
        "radicals": ["", ""]
    },
    "刑": {
        "zhuyin": "ㄒㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to punish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "掃": {
        "zhuyin": "ㄙㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to sweep",
        "simplified": "扫",
        "radicals": ["", ""]
    },
    "核": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "seed",
        "simplified": "",
        "radicals": ["", ""]
    },
    "損": {
        "zhuyin": "ㄙㄨㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to decrease, damage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "辯": {
        "zhuyin": "ㄅㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to dispute",
        "simplified": "",
        "radicals": ["", ""]
    },
    "慣": {
        "zhuyin": "ㄍㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "accustomed to",
        "simplified": "",
        "radicals": ["", ""]
    },
    "傲": {
        "zhuyin": "ㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "proud",
        "simplified": "",
        "radicals": ["", ""]
    },
    "減": {
        "zhuyin": "ㄐㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to lower, reduce",
        "simplified": "",
        "radicals": ["", ""]
    },
    // 1300/1500 done
    "泡": {
        "zhuyin": "ㄆㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "bubble, to steep",
        "simplified": "",
        "radicals": ["", ""]
    },
    "摸": {
        "zhuyin": "ㄇㄛ",
        "pinyin": "",
        "tone": 1,
        "english": "feel with hand",
        "simplified": "",
        "radicals": ["", ""]
    },
    "著": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "manifest",
        "simplified": "",
        "radicals": ["", ""]
    },
    "途": {
        "zhuyin": "ㄊㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "way, route",
        "simplified": "",
        "radicals": ["", ""]
    },
    "磯": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "jetty",
        "simplified": "矶",
        "radicals": ["", ""]
    },
    "鼓": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "drum",
        "simplified": "",
        "radicals": ["", ""]
    },
    "堡": {
        "zhuyin": "ㄅㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "fortress",
        "simplified": "",
        "radicals": ["", ""]
    },
    "愚": {
        "zhuyin": "ㄩˊ",
        "pinyin": "",
        "tone": 2,
        "english": "stupid",
        "simplified": "",
        "radicals": ["", ""]
    },
    "敏": {
        "zhuyin": "ㄇㄧㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "quick",
        "simplified": "",
        "radicals": ["", ""]
    },
    "版": {
        "zhuyin": "ㄅㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "edition",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盒": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "small box",
        "simplified": "",
        "radicals": ["", ""]
    },
    "訂": {
        "zhuyin": "ㄉㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to agree",
        "simplified": "订",
        "radicals": ["", ""]
    },
    "寄": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to mail",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賺": {
        "zhuyin": "ㄓㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to earn",
        "simplified": "赚",
        "radicals": ["", ""]
    },
    "爵": {
        "zhuyin": "ㄐㄩㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "feudal title",
        "simplified": "",
        "radicals": ["", ""]
    },
    "材": {
        "zhuyin": "ㄘㄞˊ",
        "pinyin": "",
        "tone": 2,
        "english": "material",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盛": {
        "zhuyin": "ㄕㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to ladle",
        "simplified": "",
        "radicals": ["", ""]
    },
    "尤": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "especially",
        "simplified": "",
        "radicals": ["", ""]
    },
    "皇": {
        "zhuyin": "ㄏㄨㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "emperor",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奪": {
        "zhuyin": "ㄉㄨㄛˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to take by force",
        "simplified": "夺",
        "radicals": ["", ""]
    },
    "郵": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "post, mail",
        "simplified": "邮",
        "radicals": ["", ""]
    },
    "俱": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "all, together",
        "simplified": "",
        "radicals": ["", ""]
    },
    "九": {
        "zhuyin": "ㄐㄧㄡˇ",
        "pinyin": "",
        "tone": 3,
        "english": "nine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盜": {
        "zhuyin": "ㄉㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to steal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "尺": {
        "zhuyin": "ㄔˇ",
        "pinyin": "",
        "tone": 3,
        "english": "Chinese 'foot'",
        "simplified": "",
        "radicals": ["", ""]
    },
    "愉": {
        "zhuyin": "ㄩˊ",
        "pinyin": "",
        "tone": 2,
        "english": "pleasant",
        "simplified": "",
        "radicals": ["", ""]
    },
    "序": {
        "zhuyin": "ㄒㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "oder, sequence",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鼠": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "幕": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "curtain",
        "simplified": "",
        "radicals": ["", ""]
    },
    "踢": {
        "zhuyin": "ㄊㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "kick",
        "simplified": "",
        "radicals": ["", ""]
    },
    "憾": {
        "zhuyin": "ㄏㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to regret",
        "simplified": "",
        "radicals": ["", ""]
    },
    "汰": {
        "zhuyin": "ㄊㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "excessive",
        "simplified": "",
        "radicals": ["", ""]
    },
    "隔": {
        "zhuyin": "ㄍㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to partition",
        "simplified": "",
        "radicals": ["", ""]
    },
    "徹": {
        "zhuyin": "ㄔㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to penetrate",
        "simplified": "彻",
        "radicals": ["", ""]
    },
    "插": {
        "zhuyin": "ㄔㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to insert, pierce",
        "simplified": "",
        "radicals": ["", ""]
    },
    "獵": {
        "zhuyin": "ㄌㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to hunt",
        "simplified": "猎",
        "radicals": ["", ""]
    },
    "尚": {
        "zhuyin": "ㄕㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "still, yet, to value",
        "simplified": "",
        "radicals": ["", ""]
    },
    // 1337/1500 done
    "潛": {
        "zhuyin": "ㄑㄧㄢˊ",
        "pinyin": "qián",
        "tone": 2,
        "english": "to hide, hidden",
        "simplified": "潜",
        "radicals": ["", ""]
    },
    "構": {
        "zhuyin": "ㄍㄡˋ",
        "pinyin": "gòu",
        "tone": 4,
        "english": "to assign, faction",
        "simplified": "构",
        "radicals": ["", ""]
    },
    "烤": {
        "zhuyin": "ㄎㄠˇ",
        "pinyin": "kǎo",
        "tone": 3,
        "english": "bake, roast",
        "simplified": "",
        "radicals": ["", ""]
    },
    "霍": {
        "zhuyin": "ㄏㄨㄛˋ",
        "pinyin": "huò",
        "tone": 4,
        "english": "quickly",
        "simplified": "",
        "radicals": ["", ""]
    },
    "悔": {
        "zhuyin": "ㄏㄨㄟˇ",
        "pinyin": "huǐ",
        "tone": 3,
        "english": "to regret",
        "simplified": "",
        "radicals": ["", ""]
    },
    "暫": {
        "zhuyin": "ㄗㄢˋ",
        "pinyin": "zàn",
        "tone": 4,
        "english": "temporary",
        "simplified": "暂",
        "radicals": ["", ""]
    },
    "爽": {
        "zhuyin": "ㄕㄨㄤˇ",
        "pinyin": "shuǎng",
        "tone": 3,
        "english": "bright, crisp",
        "simplified": "",
        "radicals": ["", ""]
    },
    "扎": {
        "zhuyin": "ㄓㄚ",
        "pinyin": "zhā",
        "tone": 1,
        "english": "to pierce, prick",
        "simplified": "",
        "radicals": ["", ""]
    },
    "緒": {
        "zhuyin": "ㄒㄩˋ",
        "pinyin": "xù",
        "tone": 4,
        "english": "beginnings, thread",
        "simplified": "绪",
        "radicals": ["", ""]
    },
    "訊": {
        "zhuyin": "ㄒㄩㄣˋ",
        "pinyin": "xùn",
        "tone": 4,
        "english": "to question",
        "simplified": "讯",
        "radicals": ["", ""]
    },
    "吐": {
        "zhuyin": "ㄊㄨˋ",
        "pinyin": "tù ",
        "tone": 4,
        "english": "to vomit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "吹": {
        "zhuyin": "ㄔㄨㄟ",
        "pinyin": "chuī",
        "tone": 1,
        "english": "to blow",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賓": {
        "zhuyin": "ㄅㄧㄣ",
        "pinyin": "bīn ",
        "tone": 1,
        "english": "guest, visitor",
        "simplified": "宾",
        "radicals": ["", ""]
    },
    "偵": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "zhēn ",
        "tone": 1,
        "english": "spy",
        "simplified": "侦",
        "radicals": ["", ""]
    },
    "顆": {
        "zhuyin": "ㄎㄜ",
        "pinyin": "kē",
        "tone": 1,
        "english": "particle",
        "simplified": "颗",
        "radicals": ["", ""]
    },
    "寧": {
        "zhuyin": "ㄋㄧㄥˊ",
        "pinyin": "níng",
        "tone": 2,
        "english": "peaceful",
        "simplified": "宁",
        "radicals": ["", ""]
    },
    "罰": {
        "zhuyin": "ㄈㄚˊ",
        "pinyin": "fá ",
        "tone": 2,
        "english": "penalty",
        "simplified": "罚",
        "radicals": ["", ""]
    },
    "欲": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "to wish for, desire",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鄉": {
        "zhuyin": "ㄒㄧㄤ",
        "pinyin": "xiāng",
        "tone": 1,
        "english": "countryside",
        "simplified": "乡",
        "radicals": ["", ""]
    },
    "帽": {
        "zhuyin": "ㄇㄠˋ",
        "pinyin": "mào",
        "tone": 4,
        "english": "hat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "杜": {
        "zhuyin": "ㄉㄨˋ",
        "pinyin": "dù ",
        "tone": 4,
        "english": "to prevent",
        "simplified": "",
        "radicals": ["", ""]
    },
    "豪": {
        "zhuyin": "ㄏㄠˊ",
        "pinyin": "háo",
        "tone": 2,
        "english": "heroic",
        "simplified": "",
        "radicals": ["", ""]
    },
    "征": {
        "zhuyin": "ㄓㄥ",
        "pinyin": "zhēng",
        "tone": 1,
        "english": "to recruit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "括": {
        "zhuyin": "ㄎㄨㄛˋ",
        "pinyin": "kuò",
        "tone": 4,
        "english": "to enclose, include",
        "simplified": "",
        "radicals": ["", ""]
    },
    "盯": {
        "zhuyin": "ㄉㄧㄥ",
        "pinyin": "dīng ",
        "tone": 1,
        "english": "to keep eyes on",
        "simplified": "",
        "radicals": ["", ""]
    },
    "穩": {
        "zhuyin": "ㄨㄣˇ",
        "pinyin": "wěn",
        "tone": 3,
        "english": "steady, stable",
        "simplified": "稳",
        "radicals": ["", ""]
    },
    "膽": {
        "zhuyin": "ㄉㄢˇ",
        "pinyin": "dǎn ",
        "tone": 3,
        "english": "gall, bravery",
        "simplified": "胆",
        "radicals": ["", ""]
    },
    "甲": {
        "zhuyin": "ㄐㄧㄚˇ",
        "pinyin": "jiǎ",
        "tone": 3,
        "english": "first, shell",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賴": {
        "zhuyin": "ㄌㄞˋ",
        "pinyin": "lài",
        "tone": 4,
        "english": "to depend on, bad",
        "simplified": "赖",
        "radicals": ["", ""]
    },
    "啤": {
        "zhuyin": "ㄆㄧˊ",
        "pinyin": "pí ",
        "tone": 2,
        "english": "beer",
        "simplified": "",
        "radicals": ["", ""]
    },
    "佩": {
        "zhuyin": "ㄆㄟˋ",
        "pinyin": "pèi",
        "tone": 4,
        "english": "to respect, wear (belt)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "啟": {
        "zhuyin": "ㄑㄧˇ",
        "pinyin": "qǐ",
        "tone": 3,
        "english": "to start, open",
        "simplified": "启",
        "radicals": ["", ""]
    },
    "胎": {
        "zhuyin": "ㄊㄞ",
        "pinyin": "tāi ",
        "tone": 1,
        "english": "embryo, fetus",
        "simplified": "",
        "radicals": ["", ""]
    },
    "帳": {
        "zhuyin": "ㄓㄤˋ",
        "pinyin": "zhàng",
        "tone": 4,
        "english": "screen",
        "simplified": "帐",
        "radicals": ["", ""]
    },
    "賞": {
        "zhuyin": "ㄕㄤˇ",
        "pinyin": "shǎng",
        "tone": 3,
        "english": "to bestow",
        "simplified": "赏",
        "radicals": ["", ""]
    },
    "拋": {
        "zhuyin": "ㄆㄠ",
        "pinyin": "pāo ",
        "tone": 1,
        "english": "throw (away)",
        "simplified": "抛",
        "radicals": ["", ""]
    },
    "遭": {
        "zhuyin": "ㄗㄠ",
        "pinyin": "zāo",
        "tone": 1,
        "english": "meet by chance",
        "simplified": "",
        "radicals": ["", ""]
    },
    "若": {
        "zhuyin": "ㄖㄨㄛˋ",
        "pinyin": "ruò",
        "tone": 4,
        "english": "seem like",
        "simplified": "",
        "radicals": ["", ""]
    },
    "梯": {
        "zhuyin": "ㄊㄧ",
        "pinyin": "tī ",
        "tone": 1,
        "english": "ladder",
        "simplified": "",
        "radicals": ["", ""]
    },
    "震": {
        "zhuyin": "ㄓㄣˋ",
        "pinyin": "zhèn",
        "tone": 4,
        "english": "to shake",
        "simplified": "",
        "radicals": ["", ""]
    },
    "述": {
        "zhuyin": "ㄕㄨˋ",
        "pinyin": "shù",
        "tone": 4,
        "english": "to tell",
        "simplified": "",
        "radicals": ["", ""]
    },
    "陣": {
        "zhuyin": "ㄓㄣˋ",
        "pinyin": "zhèn",
        "tone": 4,
        "english": "short time",
        "simplified": "阵",
        "radicals": ["", ""]
    },
    "儀": {
        "zhuyin": "ㄧˊ",
        "pinyin": "yí",
        "tone": 2,
        "english": "ceremony",
        "simplified": "仪",
        "radicals": ["", ""]
    },
    "乖": {
        "zhuyin": "ㄍㄨㄞ",
        "pinyin": "guāi",
        "tone": 1,
        "english": "clever, shrewd",
        "simplified": "",
        "radicals": ["", ""]
    },
    "宮": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "palace",
        "simplified": "宫",
        "radicals": ["", ""]
    },
    "咬": {
        "zhuyin": "ㄧㄠˇ",
        "pinyin": "yǎo ",
        "tone": 3,
        "english": "bite, gnaw",
        "simplified": "",
        "radicals": ["", ""]
    },
    "禱": {
        "zhuyin": "ㄉㄠˇ",
        "pinyin": "dǎo ",
        "tone": 3,
        "english": "to pray",
        "simplified": "祷",
        "radicals": ["", ""]
    },
    "祖": {
        "zhuyin": "ㄗㄨˇ",
        "pinyin": "zǔ",
        "tone": 3,
        "english": "ancestor",
        "simplified": "",
        "radicals": ["", ""]
    },
    "蜜": {
        "zhuyin": "ㄇㄧˋ",
        "pinyin": "mì ",
        "tone": 4,
        "english": "honey",
        "simplified": "",
        "radicals": ["", ""]
    },
    "耍": {
        "zhuyin": "ㄕㄨㄚˇ",
        "pinyin": "shuǎ ",
        "tone": 3,
        "english": "to frolic",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拼": {
        "zhuyin": "ㄆㄧㄣ",
        "pinyin": "pīn",
        "tone": 1,
        "english": "to join together",
        "simplified": "",
        "radicals": ["", ""]
    },
    "惜": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "xī",
        "tone": 1,
        "english": "to cherish",
        "simplified": "",
        "radicals": ["", ""]
    },
    "忠": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "zhōng",
        "tone": 1,
        "english": "loyal",
        "simplified": "",
        "radicals": ["", ""]
    },
    "策": {
        "zhuyin": "ㄘㄜˋ",
        "pinyin": "cè",
        "tone": 4,
        "english": "policy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鼻": {
        "zhuyin": "ㄅㄧˊ",
        "pinyin": "bí ",
        "tone": 2,
        "english": "nose",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鑽": {
        "zhuyin": "ㄗㄨㄢ",
        "pinyin": "zuān",
        "tone": 1,
        "english": "to drill",
        "simplified": "钻",
        "radicals": ["", ""]
    },
    "池": {
        "zhuyin": "ㄔˊ",
        "pinyin": "chí",
        "tone": 2,
        "english": "pond, resevoir",
        "simplified": "",
        "radicals": ["", ""]
    },
    "虛": {
        "zhuyin": "ㄒㄩ",
        "pinyin": "xū",
        "tone": 1,
        "english": "emptiness, modest",
        "simplified": "虚",
        "radicals": ["", ""]
    },
    "桑": {
        "zhuyin": "ㄙㄤ",
        "pinyin": "sāng ",
        "tone": 1,
        "english": "mulberry tree",
        "simplified": "",
        "radicals": ["", ""]
    },
    "拾": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "to collect",
        "simplified": "",
        "radicals": ["", ""]
    },
    "泳": {
        "zhuyin": "ㄩㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to dive, swim",
        "simplified": "",
        "radicals": ["", ""]
    },
    "頻": {
        "zhuyin": "ㄆㄧㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "frequently",
        "simplified": "频",
        "radicals": ["", ""]
    },
    "尖": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "sharp, acute",
        "simplified": "",
        "radicals": ["", ""]
    },
    "申": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "to extend, to state",
        "simplified": "",
        "radicals": ["", ""]
    },
    "違": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to disobey",
        "simplified": "违",
        "radicals": ["", ""]
    },
    "零": {
        "zhuyin": "ㄌㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "zero",
        "simplified": "",
        "radicals": ["", ""]
    },
    "診": {
        "zhuyin": "ㄓㄣˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to diagnose",
        "simplified": "诊",
        "radicals": ["", ""]
    },
    "噓": {
        "zhuyin": "ㄒㄩ",
        "pinyin": "",
        "tone": 1,
        "english": "to exhale",
        "simplified": "嘘",
        "radicals": ["", ""]
    },
    "懼": {
        "zhuyin": "ㄐㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to fear",
        "simplified": "惧",
        "radicals": ["", ""]
    },
    "拯": {
        "zhuyin": "ㄓㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to help, to save",
        "simplified": "",
        "radicals": ["", ""]
    },
    "痕": {
        "zhuyin": "ㄏㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "scar",
        "simplified": "",
        "radicals": ["", ""]
    },
    "批": {
        "zhuyin": "ㄆㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "to criticize",
        "simplified": "",
        "radicals": ["", ""]
    },
    "綠": {
        "zhuyin": "ㄌㄩ",
        "pinyin": "",
        "tone": 1,
        "english": "green",
        "simplified": "绿",
        "radicals": ["", ""]
    },
    "乘": {
        "zhuyin": "ㄔㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to ride",
        "simplified": "",
        "radicals": ["", ""]
    },
    "佳": {
        "zhuyin": "ㄐㄧㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "beautiful",
        "simplified": "",
        "radicals": ["", ""]
    },
    "熊": {
        "zhuyin": "ㄒㄩㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "bear",
        "simplified": "",
        "radicals": ["", ""]
    },
    "辣": {
        "zhuyin": "ㄌㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "spicy, hot",
        "simplified": "",
        "radicals": ["", ""]
    },
    "躺": {
        "zhuyin": "ㄊㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to lie down",
        "simplified": "",
        "radicals": ["", ""]
    },
    "祈": {
        "zhuyin": "ㄑㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to pray",
        "simplified": "",
        "radicals": ["", ""]
    },
    "肥": {
        "zhuyin": "ㄈㄟˊ",
        "pinyin": "",
        "tone": 2,
        "english": "fat, plump",
        "simplified": "",
        "radicals": ["", ""]
    },
    "址": {
        "zhuyin": "ㄓˇ",
        "pinyin": "",
        "tone": 3,
        "english": "location",
        "simplified": "",
        "radicals": ["", ""]
    },
    "占": {
        "zhuyin": "ㄓㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to divine",
        "simplified": "",
        "radicals": ["", ""]
    },
    "絡": {
        "zhuyin": "ㄌㄨㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "net",
        "simplified": "络",
        "radicals": ["", ""]
    },
    "掩": {
        "zhuyin": "ㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to cover",
        "simplified": "",
        "radicals": ["", ""]
    },
    "省": {
        "zhuyin": "ㄕㄥˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to save, province",
        "simplified": "",
        "radicals": ["", ""]
    },
    "羊": {
        "zhuyin": "ㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "sheep",
        "simplified": "",
        "radicals": ["", ""]
    },
    "荒": {
        "zhuyin": "ㄏㄨㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "wasteland",
        "simplified": "",
        "radicals": ["", ""]
    },
    "督": {
        "zhuyin": "ㄉㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "to supervise",
        "simplified": "",
        "radicals": ["", ""]
    },
    "撤": {
        "zhuyin": "ㄔㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to omit",
        "simplified": "",
        "radicals": ["", ""]
    },
    "胖": {
        "zhuyin": "ㄆㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "fat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "辭": {
        "zhuyin": "ㄘˊ",
        "pinyin": "",
        "tone": 2,
        "english": "words",
        "simplified": "辞",
        "radicals": ["", ""]
    },
    "增": {
        "zhuyin": "ㄗㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "to increase, add",
        "simplified": "",
        "radicals": ["", ""]
    },
    "援": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to help",
        "simplified": "",
        "radicals": ["", ""]
    },
    "郎": {
        "zhuyin": "ㄌㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "young man",
        "simplified": "",
        "radicals": ["", ""]
    },
    "獻": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to offer",
        "simplified": "献",
        "radicals": ["", ""]
    },
    "擦": {
        "zhuyin": "ㄘㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to wipe",
        "simplified": "",
        "radicals": ["", ""]
    },
    "農": {
        "zhuyin": "ㄋㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "agriculture",
        "simplified": "农",
        "radicals": ["", ""]
    },
    "邪": {
        "zhuyin": "ㄒㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "demonic, evil",
        "simplified": "",
        "radicals": ["", ""]
    },
    "姻": {
        "zhuyin": "ㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "marriage",
        "simplified": "",
        "radicals": ["", ""]
    },
    "恢": {
        "zhuyin": "ㄏㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "to restore",
        "simplified": "",
        "radicals": ["", ""]
    },
    "描": {
        "zhuyin": "ㄇㄧㄠˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to copy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "匹": {
        "zhuyin": "ㄆㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "measure word for horses",
        "simplified": "",
        "radicals": ["", ""]
    },
    "軟": {
        "zhuyin": "ㄖㄨㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "soft, flexible",
        "simplified": "软",
        "radicals": ["", ""]
    },
    "埋": {
        "zhuyin": "ㄇㄞˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to bury",
        "simplified": "",
        "radicals": ["", ""]
    },
    "慘": {
        "zhuyin": "ㄘㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "miserable",
        "simplified": "惨",
        "radicals": ["", ""]
    },
    "洋": {
        "zhuyin": "ㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "ocean",
        "simplified": "",
        "radicals": ["", ""]
    },
    "純": {
        "zhuyin": "ㄔㄨㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "pure",
        "simplified": "纯",
        "radicals": ["", ""]
    },
    "浴": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to bathe",
        "simplified": "",
        "radicals": ["", ""]
    },
    "貼": {
        "zhuyin": "ㄊㄧㄝ",
        "pinyin": "",
        "tone": 1,
        "english": "to paste, post",
        "simplified": "贴",
        "radicals": ["", ""]
    },
    "尉": {
        "zhuyin": "ㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "officer",
        "simplified": "",
        "radicals": ["", ""]
    },
    "略": {
        "zhuyin": "ㄌㄩㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "summary, strategy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "符": {
        "zhuyin": "ㄈㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "symbol, charm",
        "simplified": "",
        "radicals": ["", ""]
    },
    "侵": {
        "zhuyin": "ㄑㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "to invade",
        "simplified": "",
        "radicals": ["", ""]
    },
    "陸": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "shore, land",
        "simplified": "陆",
        "radicals": ["", ""]
    },
    "載": {
        "zhuyin": "ㄗㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to carry",
        "simplified": "载",
        "radicals": ["", ""]
    },
    "爬": {
        "zhuyin": "ㄆㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to crawl",
        "simplified": "",
        "radicals": ["", ""]
    },
    "挖": {
        "zhuyin": "ㄨㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "to dig",
        "simplified": "",
        "radicals": ["", ""]
    },
    "驕": {
        "zhuyin": "ㄐㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "pride",
        "simplified": "骄",
        "radicals": ["", ""]
    },
    "獸": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "beast",
        "simplified": "兽",
        "radicals": ["", ""]
    },
    "嫁": {
        "zhuyin": "ㄐㄧㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to marry",
        "simplified": "",
        "radicals": ["", ""]
    },
    "潔": {
        "zhuyin": "ㄐㄧㄝˊ",
        "pinyin": "",
        "tone": 2,
        "english": "clean",
        "simplified": "洁",
        "radicals": ["", ""]
    },
    "晨": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "early morning",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喊": {
        "zhuyin": "ㄏㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to shout",
        "simplified": "",
        "radicals": ["", ""]
    },
    "奏": {
        "zhuyin": "ㄗㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to play music",
        "simplified": "",
        "radicals": ["", ""]
    },
    "灰": {
        "zhuyin": "ㄏㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "ashes",
        "simplified": "",
        "radicals": ["", ""]
    },
    "摔": {
        "zhuyin": "ㄕㄨㄞ",
        "pinyin": "",
        "tone": 1,
        "english": "to stumble",
        "simplified": "",
        "radicals": ["", ""]
    },
    "羞": {
        "zhuyin": "ㄒㄧㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "disgrace, shy",
        "simplified": "",
        "radicals": ["", ""]
    },
    "鄰": {
        "zhuyin": "ㄌㄧㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "neighbour",
        "simplified": "邻",
        "radicals": ["", ""]
    },
    "椅": {
        "zhuyin": "ㄧˇ",
        "pinyin": "",
        "tone": 3,
        "english": "chair",
        "simplified": "",
        "radicals": ["", ""]
    },
    "顏": {
        "zhuyin": "ㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "face",
        "simplified": "颜",
        "radicals": ["", ""]
    },
    "欺": {
        "zhuyin": "ㄑㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "cheat",
        "simplified": "",
        "radicals": ["", ""]
    },
    "端": {
        "zhuyin": "ㄉㄨㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to hold, end points",
        "simplified": "",
        "radicals": ["", ""]
    },
    "賀": {
        "zhuyin": "ㄏㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "congratulate",
        "simplified": "贺",
        "radicals": ["", ""]
    },
    "障": {
        "zhuyin": "ㄓㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to block",
        "simplified": "",
        "radicals": ["", ""]
    },
    "慈": {
        "zhuyin": "ㄘˊ",
        "pinyin": "",
        "tone": 2,
        "english": "kind, charitable",
        "simplified": "",
        "radicals": ["", ""]
    },
    "仇": {
        "zhuyin": "ㄔㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "enemy, hate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "廠": {
        "zhuyin": "ㄔㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "factory",
        "simplified": "厂",
        "radicals": ["", ""]
    },
    "怨": {
        "zhuyin": "ㄩㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to blame",
        "simplified": "",
        "radicals": ["", ""]
    },
    "遜": {
        "zhuyin": "ㄒㄩㄣˋ",
        "pinyin": "",
        "tone": 4,
        "english": "humble, worse",
        "simplified": "逊",
        "radicals": ["", ""]
    },
    "黎": {
        "zhuyin": "ㄌㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "dawn, black",
        "simplified": "",
        "radicals": ["", ""]
    },
    "剪": {
        "zhuyin": "ㄐㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "scissors",
        "simplified": "",
        "radicals": ["", ""]
    },
    "春": {
        "zhuyin": "ㄔㄨㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "spring",
        "simplified": "",
        "radicals": ["", ""]
    },
    "額": {
        "zhuyin": "ㄜˊ",
        "pinyin": "",
        "tone": 2,
        "english": "forehead",
        "simplified": "额",
        "radicals": ["", ""]
    },
    "豆": {
        "zhuyin": "ㄉㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "bean",
        "simplified": "",
        "radicals": ["", ""]
    },
    "罷": {
        "zhuyin": "ㄅㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to stop, suspend",
        "simplified": "罢",
        "radicals": ["", ""]
    },
    "裂": {
        "zhuyin": "ㄌㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "crack",
        "simplified": "",
        "radicals": ["", ""]
    },
    "擋": {
        "zhuyin": "ㄉㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to obstruct",
        "simplified": "挡",
        "radicals": ["", ""]
    },
    "偏": {
        "zhuyin": "ㄆㄧㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to lean, oblique",
        "simplified": "",
        "radicals": ["", ""]
    },
    "糊": {
        "zhuyin": "ㄏㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "paste",
        "simplified": "",
        "radicals": ["", ""]
    },
    "卧": {
        "zhuyin": "ㄨㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to crouch",
        "simplified": "",
        "radicals": ["", ""]
    },
    "敲": {
        "zhuyin": "ㄑㄧㄠ",
        "pinyin": "",
        "tone": 1,
        "english": "to strike",
        "simplified": "",
        "radicals": ["", ""]
    },
    "喪": {
        "zhuyin": "ㄙㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "to lose",
        "simplified": "丧",
        "radicals": ["", ""]
    },
    "烏": {
        "zhuyin": "ㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "crow",
        "simplified": "乌",
        "radicals": ["", ""]
    },
    "購": {
        "zhuyin": "ㄍㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to purchase",
        "simplified": "购",
        "radicals": ["", ""]
    },
    "域": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "field, region",
        "simplified": "",
        "radicals": ["", ""]
    },
    "閑": {
        "zhuyin": "ㄒㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "idle",
        "simplified": "闲",
        "radicals": ["", ""]
    },
    "宇": {
        "zhuyin": "ㄩˇ",
        "pinyin": "",
        "tone": 3,
        "english": "universe",
        "simplified": "",
        "radicals": ["", ""]
    },
    "姓": {
        "zhuyin": "ㄒㄧㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "surname",
        "simplified": "",
        "radicals": ["", ""]
    },
    "葬": {
        "zhuyin": "ㄗㄤˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to bury (dead)",
        "simplified": "",
        "radicals": ["", ""]
    },
    "黨": {
        "zhuyin": "ㄉㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "party, association",
        "simplified": "",
        "radicals": ["", ""]
    },
    "售": {
        "zhuyin": "ㄕㄡˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to sell",
        "simplified": "",
        "radicals": ["", ""]
    },
    "塗": {
        "zhuyin": "ㄊㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to apply (paint)",
        "simplified": "",
        "radicals": ["", ""]
    },

}
const hanzi4 = {
    //count 1500 ish
    "遊": {
        "zhuyin": "ㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to walk, tour, roam, travel",
        "simplified": "游",
        "radicals": ["", ""]
    },
    "碟": {
        "zhuyin": "ㄉㄧㄝˊ",
        "pinyin": "dié",
        "tone": 2,
        "english": "dish, plate",
        "simplified": "",
        "radicals": ["", ""]
    },
    "灣": {
        "zhuyin": "ㄨㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "bay, gulf",
        "simplified": "湾",
        "radicals": ["", ""]
    },
    "鳳": {
        "zhuyin": "ㄈㄥˋ",
        "pinyin": "",
        "tone": 4,
        "english": "phoenix",
        "simplified": "凤",
        "radicals": ["", ""]
    },
    "唉": {
        "zhuyin": "ㄞ",
        "pinyin": "āi",
        "tone": 1,
        "english": "sigh",
        "simplified": ""
    },
    "貞": {
        "zhuyin": "ㄓㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "chaste",
        "simplified": "贞"
    },
    "係": {
        "zhuyin": "ㄒㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "link",
        "simplified": "系"
    },
    "嗚": {
        "zhuyin": "ㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "humming or whimpering",
        "simplified": "呜"
    },
    "亦": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "likewise",
        "simplified": ""
    },
    "宜": {
        "zhuyin": "ㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "fitting, appropriate, suitable",
        "simplified": ""
    },
    "楊": {
        "zhuyin": "ㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "Yang",
        "simplified": "杨"
    },
    "灌": {
        "zhuyin": "ㄍㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "irrigate, pour, install (software)",
        "simplified": ""
    },
    "徵": {
        "zhuyin": "ㄓㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "invite, recruit, draft, evidence",
        "simplified": "征"
    },
    "隻": {
        "zhuyin": "ㄓ",
        "pinyin": "",
        "tone": 1,
        "english": "measure word for birds and animals, one of a pair, some utensils, vessels etc",
        "simplified": "只"
    },
    "君": {
        "zhuyin": "ㄐㄩㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "monarch, lord, ruler",
        "simplified": ""
    },
    "宿": {
        "zhuyin": "ㄙㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "Su",
        "simplified": ""
    },
    "江": {
        "zhuyin": "ㄐㄧㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "river, surname",
        "simplified": ""
    },
    "宗": {
        "zhuyin": "ㄗㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "school, sect, measure word for batches, surname",
        "simplified": ""
    },
    "壘": {
        "zhuyin": "ㄌㄟˇ",
        "pinyin": "",
        "tone": 3,
        "english": "rampart, base(in baseball), to build with stones",
        "simplified": "垒"
    },
    "緣": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "cause, reason, karma, fate, margin, hem, edge, along",
        "simplified": "缘"
    },
    "週": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "week",
        "simplified": "周"
    },
    "蠻": {
        "zhuyin": "ㄇㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "barbarian, bullying, rough, reckless",
        "simplified": "蛮"
    },
    "俊": {
        "zhuyin": "ㄐㄩㄣˋ",
        "pinyin": "",
        "tone": 4,
        "english": "smart, handsome, talented",
        "simplified": ""
    },
    "輯": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to gather up, collect, edit, compile",
        "simplified": "辑"
    },
    "趙": {
        "zhuyin": "ㄓㄠˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to surpass, surname Zhao",
        "simplified": "赵"
    },
    "仁": {
        "zhuyin": "ㄖㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "humane",
        "simplified": ""
    },
    "劍": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "double edged sword, measure word for blows of a sword",
        "simplified": "剑"
    },
    "劉": {
        "zhuyin": "ㄌㄧㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to kill, slaughter, surname Liu",
        "simplified": ""
    },
    "諸": {
        "zhuyin": "ㄓㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "all, various, surname Zhu",
        "simplified": "诸"
    },
    "琴": {
        "zhuyin": "ㄑㄧㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "musical instrument",
        "simplified": ""
    },
    "罵": {
        "zhuyin": "ㄇㄚˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to scold, abuse, curse",
        "simplified": "骂"
    },
    "益": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "benefit, advantage, all the more, surename Yi",
        "simplified": ""
    },
    "湖": {
        "zhuyin": "ㄏㄨˊ",
        "pinyin": "",
        "tone": 2,
        "english": "lake",
        "simplified": ""
    },
    "含": {
        "zhuyin": "ㄏㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to keep, contain, suck",
        "simplified": ""
    },
    "製": {
        "zhuyin": "ㄓˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to manufacture, make",
        "simplified": "制"
    },
    "扁": {
        "zhuyin": "ㄅㄧㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "small boat, surname Pian",
        "simplified": ""
    },
    "註": {
        "zhuyin": "ㄓㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to register, annotate, note, comment",
        "simplified": "注"
    },
    "虎": {
        "zhuyin": "ㄏㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "tiger",
        "simplified": ""
    },
    "皆": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "",
        "tone": 1,
        "english": "all, each and every, in all cases",
        "simplified": ""
    },
    "葉": {
        "zhuyin": "ㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "leaf, page, lobe, period, surname Ye",
        "simplified": "叶"
    },
    "銘": {
        "zhuyin": "ㄇㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to engrave, inscribed motto",
        "simplified": "铭"
    },
    "欣": {
        "zhuyin": "ㄒㄧㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "happy",
        "simplified": ""
    },
    "鐘": {
        "zhuyin": "ㄓㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "clock, o'clock",
        "simplified": "钟"
    },
    "囉": {
        "zhuyin": "ㄌㄩㄛ",
        "pinyin": "",
        "tone": 1,
        "english": "Luo",
        "simplified": "啰"
    },
    "磁": {
        "zhuyin": "ㄘˊ",
        "pinyin": "",
        "tone": 2,
        "english": "magnetic, magnetism, porcelain",
        "simplified": ""
    },
    "螢": {
        "zhuyin": "ㄧㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "firefly, glow-worm",
        "simplified": "萤"
    },
    "薦": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to recommend, offer sacrifice, grass, straw mat",
        "simplified": "荐"
    },
    "嘻": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "laugh, giggle, interjection of admiration or surprise",
        "simplified": ""
    },
    "均": {
        "zhuyin": "ㄐㄩㄣ",
        "pinyin": "",
        "tone": 1,
        "english": "equal, even, all, uniform",
        "simplified": ""
    },
    "濟": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "Ji river, cross a river, aid or relieve, be of help",
        "simplified": "济"
    },
    "劃": {
        "zhuyin": "ㄏㄨㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to cut, slash, scratch, strike(a match), transfer, assign, plan, draw(a line), stroke(of 漢字)",
        "simplified": "划"
    },
    "郭": {
        "zhuyin": "ㄍㄨㄛ",
        "pinyin": "",
        "tone": 1,
        "english": "",
        "simplified": ""
    },
    "慧": {
        "zhuyin": "ㄏㄨㄟˋ",
        "pinyin": "",
        "tone": 4,
        "english": "intelligent",
        "simplified": ""
    },
    "詳": {
        "zhuyin": "ㄒㄧㄤˊ",
        "pinyin": "",
        "tone": 2,
        "english": "detailed, comprehensive",
        "simplified": "详"
    },
    "逢": {
        "zhuyin": "ㄈㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to meet by chance, to come across, to fall on, to fawn upon",
        "simplified": ""
    },
    "冊": {
        "zhuyin": "ㄘㄜˋ",
        "pinyin": "",
        "tone": 4,
        "english": "book, booklet, measure word for books",
        "simplified": "册"
    },
    "衝": {
        "zhuyin": "ㄔㄨㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "thoroughfare, to go straight ahead, rush, clash",
        "simplified": "冲"
    },
    "乾": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "dry, clean, in vain, dried food, foster, adoptive, to ignore, surname Gan",
        "simplified": "干"
    },
    "鷹": {
        "zhuyin": "ㄧㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "eagle, falcon, hawk",
        "simplified": "鹰"
    },
    "縣": {
        "zhuyin": "ㄒㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "country",
        "simplified": "县"
    },
    "秋": {
        "zhuyin": "ㄑㄧㄡ",
        "pinyin": "",
        "tone": 1,
        "english": "fall, autumn, harvest time, surname Qiu",
        "simplified": ""
    },
    "淡": {
        "zhuyin": "ㄉㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "insipid, diluted, weak, mild, light in color, tasteless, indifferent",
        "simplified": ""
    },
    "詩": {
        "zhuyin": "ㄕ",
        "pinyin": "",
        "tone": 1,
        "english": "poem, poetry",
        "simplified": "诗"
    },
    "嘉": {
        "zhuyin": "ㄐㄧㄚ",
        "pinyin": "",
        "tone": 1,
        "english": "excellent, auspicious, to praise, comment, surname Jia",
        "simplified": ""
    },
    "曉": {
        "zhuyin": "ㄒㄧㄠˇ",
        "pinyin": "",
        "tone": 3,
        "english": "dawn, daybreak, to know, let sb know, to make explicit",
        "simplified": "晓"
    },
    "績": {
        "zhuyin": "ㄐㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to spin, merit, accomplishment",
        "simplified": "绩"
    },
    "獅": {
        "zhuyin": "ㄕ",
        "pinyin": "",
        "tone": 1,
        "english": "lion",
        "simplified": "狮"
    },
    "餘": {
        "zhuyin": "ㄩˊ",
        "pinyin": "",
        "tone": 2,
        "english": "extra, surplus, remaining, surname Yu",
        "simplified": "余, 馀"
    },
    "柔": {
        "zhuyin": "ㄖㄡˊ",
        "pinyin": "",
        "tone": 2,
        "english": "soft, flexible, supple",
        "simplified": ""
    },
    "範": {
        "zhuyin": "ㄈㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "pattern, model, example",
        "simplified": ""
    },
    "輝": {
        "zhuyin": "ㄏㄨㄟ",
        "pinyin": "",
        "tone": 1,
        "english": "splendor, to shine on",
        "simplified": "辉"
    },
    "譯": {
        "zhuyin": "ㄧˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to translate, interpret",
        "simplified": "译"
    },
    "積": {
        "zhuyin": "ㄐㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "to amass, accumulate, store, measured quantity, product",
        "simplified": "积"
    },
    "蔡": {
        "zhuyin": "ㄘㄞˋ",
        "pinyin": "",
        "tone": 4,
        "english": "surname Cai",
        "simplified": ""
    },
    "愈": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "the more..., to recover, to heal, better",
        "simplified": ""
    },
    "碩": {
        "zhuyin": "ㄕㄨㄛˋ",
        "pinyin": "",
        "tone": 4,
        "english": "large, big",
        "simplified": "硕"
    },
    "凡": {
        "zhuyin": "ㄈㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "ordinary, commonplace, mundane, temporal, note of chinese musical scale",
        "simplified": ""
    },
    "朱": {
        "zhuyin": "ㄓㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "vermillion, surname Zhu",
        "simplified": ""
    },
    "籃": {
        "zhuyin": "ㄌㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "basket, basket in basketball",
        "simplified": "篮"
    },
    "港": {
        "zhuyin": "ㄍㄤˇ",
        "pinyin": "",
        "tone": 3,
        "english": "harbor, port, Hong Kong, surname Gang",
        "simplified": ""
    },
    "宏": {
        "zhuyin": "ㄏㄨㄥˊ",
        "pinyin": "",
        "tone": 2,
        "english": "great, magnificent, macro-",
        "simplified": ""
    },
    "誌": {
        "zhuyin": "ㄓˋ",
        "pinyin": "",
        "tone": 4,
        "english": "sign, mark, to record, to write a footnote",
        "simplified": "志"
    },
    "圓": {
        "zhuyin": "ㄩㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "circle, round, circular, spherical",
        "simplified": "圆"
    },
    "俠": {
        "zhuyin": "ㄒㄧㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "hero, heroic, brave",
        "simplified": "侠"
    },
    "輔": {
        "zhuyin": "ㄈㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to assist",
        "simplified": "辅"
    },
    "玉": {
        "zhuyin": "ㄩˋ",
        "pinyin": "",
        "tone": 4,
        "english": "jade",
        "simplified": ""
    },
    "唸": {
        "zhuyin": "ㄋㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to read aloud",
        "simplified": "念"
    },
    "兮": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "(particle in old Chinese similar to 啊)",
        "simplified": ""
    },
    "採": {
        "zhuyin": "ㄘㄞˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to pick, pluck, collect, select, choose, gather ",
        "simplified": "采"
    },
    "屆": {
        "zhuyin": "ㄐㄧㄝˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to arrive at, period, to become due, measure word for events, meetings, elections",
        "simplified": "届"
    },
    "縮": {
        "zhuyin": "ㄙㄨㄛ",
        "pinyin": "",
        "tone": 1,
        "english": "to withdraw, pull back, contract, shrink, reduce",
        "simplified": "缩"
    },
    "咧": {
        "zhuyin": "ㄌㄧㄝˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to draw back the corners of one's mouth, (! particle)",
        "simplified": ""
    },
    "砍": {
        "zhuyin": "ㄎㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "to chop, cut down, to throw smth at somebody",
        "simplified": ""
    },
    "刊": {
        "zhuyin": "ㄎㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to print, publish, publication, periodical, to peel, carve, amend",
        "simplified": ""
    },
    "漸": {
        "zhuyin": "ㄐㄧㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "gradual, gradually",
        "simplified": "渐"
    },
    "漸": {
        "zhuyin": "ㄐㄧㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to imbue",
        "simplified": "渐"
    },
    "鋼": {
        "zhuyin": "ㄍㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "steel",
        "simplified": "钢"
    },
    "樞": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "",
        "tone": 1,
        "english": "hinge, pivot",
        "simplified": "枢"
    },
    "賢": {
        "zhuyin": "ㄒㄧㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "worthy or virtuous person, honorific for person of same or younger generation",
        "simplified": "贤"
    },
    "佈": {
        "zhuyin": "ㄅㄨˋ",
        "pinyin": "",
        "tone": 4,
        "english": "to announce, spread",
        "simplified": "布"
    },
    "仙": {
        "zhuyin": "ㄒㄧㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "immortal",
        "simplified": ""
    },
    "析": {
        "zhuyin": "ㄒㄧ",
        "pinyin": "",
        "tone": 1,
        "english": "to separate, divide, analyze",
        "simplified": ""
    },
    "蒼": {
        "zhuyin": "ㄘㄤ",
        "pinyin": "",
        "tone": 1,
        "english": "dark blue, deep green, ash grey, surname Cang",
        "simplified": "苍"
    },
    "籍": {
        "zhuyin": "ㄐㄧˊ",
        "pinyin": "",
        "tone": 2,
        "english": "book or record, registry, surname Ji",
        "simplified": ""
    },
    "懶": {
        "zhuyin": "ㄌㄢˇ",
        "pinyin": "",
        "tone": 3,
        "english": "lazy",
        "simplified": "懒"
    },
    "橋": {
        "zhuyin": "ㄑㄧㄠˊ",
        "pinyin": "",
        "tone": 2,
        "english": "bridge",
        "simplified": "桥"
    },
    "詢": {
        "zhuyin": "ㄒㄩㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "to ask about, inquire about",
        "simplified": "询"
    },
    "塵": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "",
        "tone": 2,
        "english": "dust, dirt, earth",
        "simplified": "尘"
    },
    "慣": {
        "zhuyin": "ㄍㄨㄢˋ",
        "pinyin": "",
        "tone": 4,
        "english": "used to, accustomed to, indulge",
        "simplified": "惯"
    },
    "佔": {
        "zhuyin": "ㄓㄢ",
        "pinyin": "",
        "tone": 1,
        "english": "to take possession of, occupy, take up",
        "simplified": "占"
    },
    "茶": {
        "zhuyin": "ㄔㄚˊ",
        "pinyin": "",
        "tone": 2,
        "english": "tea, tea plant",
        "simplified": ""
    },
    "階": {
        "zhuyin": "ㄐㄧㄝ",
        "pinyin": "",
        "tone": 1,
        "english": "rank or step, stairs",
        "simplified": "阶"
    },
    "豐": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "",
        "tone": 1,
        "english": "abundent, plentiful, fertile, plump, great, surname Feng",
        "simplified": "丰"
    },
    "暑": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "",
        "tone": 3,
        "english": "heat, hot weather, summer heat",
        "simplified": ""
    },
    "寒": {
        "zhuyin": "ㄏㄢˊ",
        "pinyin": "",
        "tone": 2,
        "english": "cold, poor, to tremble",
        "simplified": ""
    },
    // "械": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "爸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "予": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "振": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "乃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鄭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "洪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "芳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "峰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "惠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "浮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "狼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "椰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "忽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "複": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "莊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "企": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "揚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "癡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "喵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "霸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "倚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "距": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "隆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "延": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蕭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "覆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "憲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "耐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "愁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "沈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "髮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "龜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "眉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "閒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "映": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "託": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鴻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "媒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "擬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "憂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "藉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "井": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "徐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "川": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "奈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "倍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "橫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "齊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "譜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瞭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鬆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "孫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "潮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "役": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "冬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "桃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "乙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "迴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "崇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "惑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "溪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "眠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "巷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "溝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "俗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "宋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "飄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "麵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "艦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "榜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "縱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蓮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "耀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "旋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "閱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "紫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "妨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "洽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "填": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "踏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "跌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "藤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "闆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "殊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "姊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "憑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "岸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "芬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "葛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鋒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "函": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "驅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "裁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蟹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "革": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "臥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "孟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "遙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蠍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "齋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "仰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "旗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "厚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "丸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "宙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "裕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "兼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "飲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "赤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "閣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "庸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "啪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "砂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "丌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "穹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "儘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "欄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "菩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "闡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "幽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "擴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "污": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "祥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "証": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "番": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "狐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "衡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "擎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "汪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "籌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "誇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "邱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "稅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "浩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "紛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "漏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鬱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "砲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "柏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "窩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "傾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "羽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "渡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "廖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "齡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "培": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "甘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "酸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "邏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "豈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "涼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "谷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "孔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "徑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "玫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "晶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "胞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "煞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "脆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "抹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "築": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "呂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "噴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "截": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "幣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "串": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "伸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "弦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "泥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "繁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "忌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "億": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "叭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "恥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "捨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "怡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "玲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "唐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "窮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "朵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "摘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "喇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "醜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "躍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "繳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "泉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "澤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "碧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "韓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "猛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "緩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "坡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "召": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "幼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "艾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "恆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "割": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "么": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "辨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "軒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "巫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鑑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "坪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "薪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "刪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "珠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瑰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "植": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "礙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "敝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "亨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "濃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "洛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "乏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "釣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "暖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "曰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "捷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嘆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "玄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "滴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "扣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "抵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "奔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蹟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "惱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "恰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "滄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蔣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "焦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "勉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "萊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "抄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "涯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "箭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "穌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "涉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "稿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "署": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "礎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "僑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "涵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "霧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "屠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "犧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "唷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "繞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "騷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "氏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "云": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "肚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "梁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "咪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "繪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "廉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "飽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鳴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "霹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "炮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "捐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "炎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "奉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鈴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "耗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "融": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "筋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "儒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "飾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "禍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "侯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "唬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "幅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "廷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "咦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "柳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "薄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "捲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嵐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "靂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "擠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "覽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "凌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "茫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "燃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瑪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "弘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "矛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "敦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瑜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "錦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "楓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "琪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "側": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "晴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "齒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嶺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "仲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "韻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "旭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "綜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "兔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "姿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "傢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "譽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "孝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "促": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "駛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "粗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "舟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "殼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蝶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "兇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鍋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "銳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "虧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "枝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "闊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "毅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "刷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "夾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "陀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "悅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "契": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "轟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "屏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "駐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蜂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "扇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "疏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "欽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "坤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "堪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "洩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "逆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "抬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "哎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "綱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "墮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "狠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "贈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "凝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "滋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "靖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "辱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "禪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蛙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "秦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "災": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "讚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "夥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "碗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "丙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "卒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "荷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "披": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "趨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "迅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "笛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "肩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "矣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "遷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "汝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鹿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "缸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "爐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "魅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "巡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "措": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "秤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "沿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "濫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "漲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "腰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "妥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鵝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "軌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "陵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "扭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "漠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "祕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蝦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "捉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "謠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "氛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "膠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "霖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "雯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "髒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "倆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "旺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "杉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "燕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "寸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "茂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "循": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "屍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鑽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "晃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "悄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "翅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "芒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "斜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "呦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "溜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鶴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "喪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "摔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "愧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "灑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "津": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "盈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "脈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "苗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "堡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "刑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "叉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "虫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "纏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "臣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "櫻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "扮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "渾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "噁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "趁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "呈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "泊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "欠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "琳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "倦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "腐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蛇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "搜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "患": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "伏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "陶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "柯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "劣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "疲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "儲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "桿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "祂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "塑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蓉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "繫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "疾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "泣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "粒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "渴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "璃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "茲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鄧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "歪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "騰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "玻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "娟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "叡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "返": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "併": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "弊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "埋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "晉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "稀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鴨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "汗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "牡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "暢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "添": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "妖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "劑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "泛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "柴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "杰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "攜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "飆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "壇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "阮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "匆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "喚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "昆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "儂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "垂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "萍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "勾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "催": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "糖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "澎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "踩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "櫃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蟻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "販": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "抑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "虹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "潘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "坑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "曹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "暮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "腹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "煮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "襲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "仿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "臂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "吻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "浴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "框": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "敲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "佑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "体": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "彷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "謹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "岳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "敘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "賊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "罐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "寡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "燦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "侶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "攤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "芭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "羨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "占": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "綿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "謎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "掩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "喻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "秩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "煌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "賠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "籤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "珊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "馨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "札": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "脅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "旨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "紐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "喲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蠢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "詠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "匙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "羯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "攔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "膚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "驟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "嫁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "孕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "俄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "肝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "罩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "腸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "叛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "匪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "倉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "卸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "祭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "袍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "謊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "埔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "几": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "魏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "禦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "踴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蘋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "卜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "澄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "麟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "宵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "陌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "陋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "屈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "衷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "崗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "曆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "惟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "舌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "匯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "誘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "桂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "娜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "菁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "睹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "殿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "傅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "咒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "謙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "雀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "粽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "卓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鑰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "袖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鈕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "媚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "叮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "堯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "捧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "壹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "憤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "猴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "粹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "跨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "螞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "埃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "枉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "卿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "撕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "紋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瑋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "划": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "囂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "雕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "乳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "膀": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "仗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "赫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "筒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "辜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "桶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "彿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "衰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "獵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "譬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "勳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "衫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "懇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瓊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "凍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "戚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "穎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "軸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "殖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "撤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "吋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "潭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "姻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "躺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "樑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "昂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "潑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "腔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "龐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "澳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瞬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "寺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "銅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "閩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "肢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "糾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "叢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "卑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "宰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鍊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "湊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "梭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "董": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "宅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "刮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "胃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "芝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "驕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "奸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "殷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "墓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "償": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "冥": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "炒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "潤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蕩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "妄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "砸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "餓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "扎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "佇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "尿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "眷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "濕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "偽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "踐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "淫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鼎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "貧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "謬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "矩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蟑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "駁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "兆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "棍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "馳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "熙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "扶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "聘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "穴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "槽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "詭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "昧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "澡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "螂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "辣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "匹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蚊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "僧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "柱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "挫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "袁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "籠": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "抖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "訝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "勃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "顛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "淘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "撲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "丘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "吞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "亭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "瘟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "癢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "肆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "漆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "詗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "尹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "猩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "帖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "佐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "昱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "咳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "祈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "詹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "毋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "矮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "苑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "賄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "緻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "婉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "斤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "饒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "闖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "戈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "歧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "諷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "熬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "診": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "霜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "諧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "掙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鈞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "覓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瀟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "屑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "痞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鋪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "黏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蹈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "懸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "詮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "岡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蝴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "汁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "攏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "帆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "壺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瑟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "雁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "辰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "婷": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "穗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "慨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "哼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "淒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "佬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "膜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "肅": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "濾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "涂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "范": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "恕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "醬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "纖": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "輻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "懿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "稚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "郁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "募": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "豫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "艇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "枯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "掰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "寵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "并": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "漁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "淹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "岩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "墊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鞭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "縫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "駿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "歹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "斑": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "甄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "竿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "駝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "昔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "崎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "冤": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "棵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "僕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "疊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "箏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "剎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "墜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "遮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "螺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "煎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "薰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "癮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蠟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瞎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "禱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "皓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "坎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蒂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "焉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "魁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "唇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "犬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "弓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "錶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "籲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "娛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "甩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "颱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "屎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "沾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "傘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "嬌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "錫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "唔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "郝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "禿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "淪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "剝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "揭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "溶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "肇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "匿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "趟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "盆": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "湧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "坊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "碳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "赴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "絃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "磚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "栗": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "狹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "菊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "嘎": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瘦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "奴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "氧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "頹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "璋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "驢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "畏": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "珮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "債": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "摧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "鹽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "噹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "噓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "挽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "墾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "霞": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "伐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "畔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "韋": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "姬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "逍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "瑩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "脾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "嘟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "帕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "噪": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "穫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "縛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "暈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "裙": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "頸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "竊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "濁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "峽": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "倘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蘊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "餵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "囊": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "霉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "薇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "剃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "衍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "訣": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "臟": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "枕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "慌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "豔": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "湘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "熄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "琦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蓄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "削": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鵬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "券": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "渺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "臘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "伺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蕾": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "矢": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "挨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "漿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "娶": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "廚": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "睜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "虐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "薛": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "蓬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },	
    // "垮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "暨": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鑼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "遂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "喧": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "釘": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "堵": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "醇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嬰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "耕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "濱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "葬": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "履": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "艱": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "緯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "姦": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "摯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "鴉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蒸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "葡": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嚐": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "甫": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "璿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "霍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "尉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "妓": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "秉": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "爹": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撈": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "綁": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "翩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嘸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "呻": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "拂": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "貳": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "燭": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "懲": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "宴": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "爍": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "汰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "歇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "癌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "咕": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "崩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "膩": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "撰": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "樸": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "棺": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "魄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "舜": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蕃": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "寇": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "萄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "妝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "遼": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "襄": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "薯": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "曝": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "諮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "蘿": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "頒": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "菌": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },
    // "嚮": {
    //     "zhuyin": "",
    //     "pinyin": "",
    //     "tone": ,
    //     "english": "",
    //     "simplified": ""
    // },

    // 2663 done!!!
}

//100% complete sets

const zhuyinCharacters = {
    "ㄅ": {
        "pinyin": "b",
        "pronounced": "",
        "isEnding": false
    },
    "ㄆ": {
        "pinyin": "p",
        "pronounced": "",
        "isEnding": false
    },
    "ㄇ": {
        "pinyin": "m",
        "pronounced": "",
        "isEnding": false
    },
    "ㄈ": {
        "pinyin": "f",
        "pronounced": "",
        "isEnding": false
    },
    "ㄉ": {
        "pinyin": "d",
        "pronounced": "",
        "isEnding": false
    },
    "ㄊ": {
        "pinyin": "t",
        "pronounced": "",
        "isEnding": false
    },
    "ㄋ": {
        "pinyin": "n",
        "pronounced": "",
        "isEnding": false
    },
    "ㄌ": {
        "pinyin": "l",
        "pronounced": "",
        "isEnding": false
    },
    "ㄍ": {
        "pinyin": "g",
        "pronounced": "",
        "isEnding": false
    },
    "ㄎ": {
        "pinyin": "k",
        "pronounced": "",
        "isEnding": false
    },
    "ㄏ": {
        "pinyin": "h",
        "pronounced": "",
        "isEnding": false
    },
    "ㄐ": {
        "pinyin": "j",
        "pronounced": "",
        "isEnding": false
    },
    "ㄑ": {
        "pinyin": "q",
        "pronounced": "ch",
        "isEnding": false
    },
    "ㄒ": {
        "pinyin": "x",
        "pronounced": "sh",
        "isEnding": false
    },
    "ㄓ": {
        "pinyin": "zh",
        "pronounced": "J",
        "isEnding": false
    },
    "ㄔ": {
        "pinyin": "ch",
        "pronounced": "",
        "isEnding": false
    },
    "ㄕ": {
        "pinyin": "sh",
        "pronounced": "",
        "isEnding": false
    },
    "ㄖ": {
        "pinyin": "r",
        "pronounced": "french j",
        "isEnding": false
    },
    "ㄗ": {
        "pinyin": "z",
        "pronounced": "",
        "isEnding": false
    },
    "ㄘ": {
        "pinyin": "c",
        "pronounced": "ts",
        "isEnding": false
    },
    "ㄙ": {
        "pinyin": "s",
        "pronounced": "",
        "isEnding": false
    },
    "一": {
        "pinyin": "i, y",
        "pronounced": "eee",
        "isEnding": true
    },
    "ㄨ": {
        "pinyin": "u, w",
        "pronounced": "ooo",
        "isEnding": true
    },
    "ㄩ": {
        "pinyin": "ü, yu",
        "pronounced": "yeuu",
        "isEnding": true
    },
    "ㄚ": {
        "pinyin": "a",
        "pronounced": "ah",
        "isEnding": true
    },
    "ㄛ": {
        "pinyin": "o",
        "pronounced": "ooh",
        "isEnding": true
    },
    "ㄜ": {
        "pinyin": "e",
        "pronounced": "uh",
        "isEnding": true
    },
    "ㄝ": {
        "pinyin": "e",
        "pronounced": "eh",
        "isEnding": true
    },
    "ㄞ": {
        "pinyin": "ai",
        "pronounced": "",
        "isEnding": true
    },
    "ㄟ": {
        "pinyin": "ei",
        "pronounced": "eyy",
        "isEnding": true
    },
    "ㄠ": {
        "pinyin": "ao",
        "pronounced": "",
        "isEnding": true
    },
    "ㄡ": {
        "pinyin": "ou",
        "pronounced": "oh",
        "isEnding": true
    },
    "ㄢ": {
        "pinyin": "an",
        "pronounced": "",
        "isEnding": true
    },
    "ㄣ": {
        "pinyin": "en",
        "pronounced": "uen",
        "isEnding": true
    },
    "ㄤ": {
        "pinyin": "ang",
        "pronounced": "",
        "isEnding": true
    },
    "ㄥ": {
        "pinyin": "eng",
        "pronounced": "ung",
        "isEnding": true
    },
    "ㄦ": {
        "pinyin": "er",
        "pronounced": "",
        "isEnding": true
    }
};
const chineseRadicals = {
    "一": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "one",
        "variant": ""
    },
    "丨": {
        "zhuyin": "ㄍㄨㄣˇ",
        "pinyin": "gǔn ",
        "tone": 3,
        "english": "line, down",
        "variant": ""
    },
    "丶": {
        "zhuyin": "ㄉ一ㄢˇ",
        "pinyin": "diǎn",
        "tone": 3,
        "english": "dot",
        "variant": ""
    },
    "丿": {
        "zhuyin": "ㄆ一ㄝˇ",
        "pinyin": "piě",
        "tone": 3,
        "english": "slash, left",
        "variant": "乀, 乁"
    },
    "乙": {
        "zhuyin": "一",
        "pinyin": "yǐ",
        "tone": 3,
        "english": "second, twist",
        "variant": "乚, 乛"
    },
    "亅": {
        "zhuyin": "ㄍㄡ",
        "pinyin": "gōu",
        "tone": 1,
        "english": "hook",
        "variant": ""
    },
    "二": {
        "zhuyin": "ㄦˋ",
        "pinyin": "èr",
        "tone": 4,
        "english": "two",
        "variant": ""
    },
    "亠": {
        "zhuyin": "ㄊㄡˊ",
        "pinyin": "tóu",
        "tone": 2,
        "english": "lid",
        "variant": ""
    },
    "人": {
        "zhuyin": "ㄖㄣˊ",
        "pinyin": "rén",
        "tone": 2,
        "english": "person",
        "variant": "亻"
    },
    "儿": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "legs",
        "variant": ""
    },
    "入": {
        "zhuyin": "ㄖㄨˋ",
        "pinyin": "rù",
        "tone": 4,
        "english": "enter",
        "variant": ""
    },
    "八": {
        "zhuyin": "ㄅㄚ",
        "pinyin": "bā",
        "tone": 1,
        "english": "eight",
        "variant": "丷"
    },
    "冂": {
        "zhuyin": "ㄐㄩㄥˇ",
        "pinyin": "jiǒng",
        "tone": 3,
        "english": "down box, borders",
        "variant": ""
    },
    "冖": {
        "zhuyin": "ㄇ一ˋ",
        "pinyin": "mì",
        "tone": 4,
        "english": "cover, crown",
        "variant": ""
    },
    "冫": {
        "zhuyin": "ㄅ一ㄥ",
        "pinyin": "bīng",
        "tone": 1,
        "english": "ice",
        "variant": ""
    },
    "几": {
        "zhuyin": "ㄐ一",
        "pinyin": "jī, jǐ",
        "tone": 1,
        "english": "table",
        "variant": ""
    },
    "凵": {
        "zhuyin": "ㄑㄩˇ",
        "pinyin": "qǔ",
        "tone": 3,
        "english": "open box, bowl",
        "variant": ""
    },
    "刀": {
        "zhuyin": "ㄉㄠ",
        "pinyin": "dāo",
        "tone": 1,
        "english": "knife",
        "variant": "刂"
    },
    "力": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "power, strength",
        "variant": ""
    },
    "勹": {
        "zhuyin": "ㄅㄠ",
        "pinyin": "bāo",
        "tone": 1,
        "english": "wrap",
        "variant": ""
    },
    "匕": {
        "zhuyin": "ㄅ一ˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "ladle",
        "variant": ""
    },
    "匚": {
        "zhuyin": "ㄈㄤ",
        "pinyin": "fāng",
        "tone": 1,
        "english": "right open box",
        "variant": ""
    },
    "匸": {
        "zhuyin": "ㄒ一ˇ",
        "pinyin": "xǐ",
        "tone": 3,
        "english": "hiding enclosure",
        "variant": ""
    },
    "十": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "ten",
        "variant": ""
    },
    "卜": {
        "zhuyin": "ㄅㄨˇ",
        "pinyin": "bǔ",
        "tone": 3,
        "english": "divination, divine",
        "variant": ""
    },
    "卩": {
        "zhuyin": "ㄐ一ㄝˊ",
        "pinyin": "jié",
        "tone": 2,
        "english": "seal",
        "variant": ""
    },
    "厂": {
        "zhuyin": "ㄏㄢˋ",
        "pinyin": "hàn",
        "tone": 4,
        "english": "cliff, slope",
        "variant": ""
    },
    "厶": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "private, cocoon",
        "variant": ""
    },
    "又": {
        "zhuyin": "一ㄡˋ",
        "pinyin": "yòu",
        "tone": 4,
        "english": "again, right hand",
        "variant": ""
    },
    "口": {
        "zhuyin": "ㄎㄡˇ",
        "pinyin": "kǒu",
        "tone": 3,
        "english": "mouth, opening",
        "variant": ""
    },
    "囗": {
        "zhuyin": "ㄨㄟˊ",
        "pinyin": "wéi",
        "tone": 2,
        "english": "enclosure, surround",
        "variant": ""
    },
    "土": {
        "zhuyin": "ㄊㄨˇ",
        "pinyin": "tǔ",
        "tone": 3,
        "english": "earth",
        "variant": ""
    },
    "士": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "scholar, knight",
        "variant": ""
    },
    "夂": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "go, follow",
        "variant": ""
    },
    "夊": {
        "zhuyin": "ㄙㄨㄟ",
        "pinyin": "suī",
        "tone": 1,
        "english": "go slowly",
        "variant": ""
    },
    "夕": {
        "zhuyin": "ㄒ一",
        "pinyin": "xī",
        "tone": 1,
        "english": "night",
        "variant": ""
    },
    "大": {
        "zhuyin": "ㄉㄚˋ",
        "pinyin": "dà",
        "tone": 4,
        "english": "big",
        "variant": ""
    },
    "女": {
        "zhuyin": "ㄋㄩˇ",
        "pinyin": "nǚ",
        "tone": 3,
        "english": "woman",
        "variant": ""
    },
    "子": {
        "zhuyin": "ㄗˇ",
        "pinyin": "zǐ",
        "tone": 3,
        "english": "child",
        "variant": ""
    },
    "宀": {
        "zhuyin": "ㄍㄞˋ",
        "pinyin": "gài",
        "tone": 4,
        "english": "roof",
        "variant": ""
    },
    "寸": {
        "zhuyin": "ㄘㄨㄣˋ",
        "pinyin": "cùn",
        "tone": 4,
        "english": "inch, thumb",
        "variant": ""
    },
    "小": {
        "zhuyin": "ㄒ一ㄠˇ",
        "pinyin": "xiǎo",
        "tone": 3,
        "english": "small",
        "variant": ""
    },
    "尢": {
        "zhuyin": "一ㄡˊ",
        "pinyin": "yóu",
        "tone": 2,
        "english": "lame",
        "variant": "尣"
    },
    "尸": {
        "zhuyin": "ㄕ",
        "pinyin": "shī",
        "tone": 1,
        "english": "corpse",
        "variant": ""
    },
    "屮": {
        "zhuyin": "ㄔㄜˋ",
        "pinyin": "chè",
        "tone": 4,
        "english": "sprout",
        "variant": ""
    },
    "山": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "shān",
        "tone": 1,
        "english": "mountain",
        "variant": ""
    },
    "川": {
        "zhuyin": "ㄔㄨㄢ",
        "pinyin": "chuān",
        "tone": 1,
        "english": "river",
        "variant": "巛, 巜"
    },
    "工": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "work",
        "variant": ""
    },
    "己": {
        "zhuyin": "ㄐ一ˇ",
        "pinyin": "jǐ",
        "tone": 3,
        "english": "oneself",
        "variant": ""
    },
    "巾": {
        "zhuyin": "ㄐ一ㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "towel, cloth",
        "variant": ""
    },
    "干": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "gān",
        "tone": 1,
        "english": "dry, shield",
        "variant": ""
    },
    "幺": {
        "zhuyin": "一ㄠ",
        "pinyin": "yāo",
        "tone": 1,
        "english": "thread, coil",
        "variant": ""
    },
    "广": {
        "zhuyin": "ㄍㄨㄤˇ",
        "pinyin": "guǎng",
        "tone": 3,
        "english": "shelter, house on cliff, lean to",
        "variant": ""
    },
    "廴": {
        "zhuyin": "一ㄣ",
        "pinyin": "yǐn",
        "tone": 3,
        "english": "stride, march",
        "variant": ""
    },
    "廾": {
        "zhuyin": "ㄍㄨㄥˇ",
        "pinyin": "gǒng",
        "tone": 3,
        "english": "clasp, hands joined",
        "variant": ""
    },
    "弋": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "dart, shoot with a bow",
        "variant": ""
    },
    "弓": {
        "zhuyin": "ㄍㄨㄥ",
        "pinyin": "gōng",
        "tone": 1,
        "english": "bow",
        "variant": ""
    },
    "彐": {
        "zhuyin": "ㄐ一ˋ",
        "pinyin": "jì",
        "tone": 4,
        "english": "snout",
        "variant": "彑"
    },
    "彡": {
        "zhuyin": "ㄕㄢ",
        "pinyin": "shān",
        "tone": 1,
        "english": "hair, streaks",
        "variant": ""
    },
    "彳": {
        "zhuyin": "ㄔˋ",
        "pinyin": "chì",
        "tone": 4,
        "english": "step",
        "variant": ""
    },
    "心": {
        "zhuyin": "ㄒ一ㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "heart",
        "variant": "忄, ⺗"
    },
    "戈": {
        "zhuyin": "ㄍㄜ",
        "pinyin": "gē",
        "tone": 1,
        "english": "dagger, spear, lance",
        "variant": ""
    },
    "户": {
        "zhuyin": "ㄏㄨˋ",
        "pinyin": "hù",
        "tone": 4,
        "english": "door",
        "variant": ""
    },
    "手": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "hand",
        "variant": "扌"
    },
    "支": {
        "zhuyin": "ㄓ",
        "pinyin": "zhī",
        "tone": 1,
        "english": "branch",
        "variant": ""
    },
    "攴": {
        "zhuyin": "ㄆㄨ",
        "pinyin": "pū",
        "tone": 1,
        "english": "rap, knock",
        "variant": "攵"
    },
    "文": {
        "zhuyin": "ㄨㄣˊ",
        "pinyin": "wén",
        "tone": 2,
        "english": "script, pattern",
        "variant": ""
    },
    "斗": {
        "zhuyin": "ㄉㄡˇ",
        "pinyin": "dǒu",
        "tone": 3,
        "english": "dipper, peck",
        "variant": ""
    },
    "斤": {
        "zhuyin": "ㄐ一ㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "axe",
        "variant": ""
    },
    "方": {
        "zhuyin": "ㄈㄤ",
        "pinyin": "fāng",
        "tone": 1,
        "english": "square",
        "variant": ""
    },
    "无": {
        "zhuyin": "ㄨˊ",
        "pinyin": "wú",
        "tone": 2,
        "english": "not, lack",
        "variant": ""
    },
    "日": {
        "zhuyin": "ㄖˋ",
        "pinyin": "rì",
        "tone": 4,
        "english": "sun",
        "variant": ""
    },
    "曰": {
        "zhuyin": "ㄩㄝ",
        "pinyin": "yuē",
        "tone": 1,
        "english": "say",
        "variant": ""
    },
    "月": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "yuè",
        "tone": 4,
        "english": "moon",
        "variant": ""
    },
    "木": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "tree",
        "variant": ""
    },
    "欠": {
        "zhuyin": "ㄑ一ㄢˋ",
        "pinyin": "qiàn",
        "tone": 4,
        "english": "yawn, lack",
        "variant": ""
    },
    "止": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 1,
        "english": "stop",
        "variant": ""
    },
    "歹": {
        "zhuyin": "ㄉㄞˇ",
        "pinyin": "dǎi",
        "tone": 3,
        "english": "death, wicked, evil",
        "variant": ""
    },
    "殳": {
        "zhuyin": "ㄕㄨ",
        "pinyin": "shū",
        "tone": 1,
        "english": "weapon, club",
        "variant": ""
    },
    "毋": {
        "zhuyin": "ㄇㄨˇ",
        "pinyin": "mǔ",
        "tone": 3,
        "english": "don't, not",
        "variant": "母"
    },
    "比": {
        "zhuyin": "ㄅ一ˇ",
        "pinyin": "bǐ",
        "tone": 3,
        "english": "compare",
        "variant": ""
    },
    "毛": {
        "zhuyin": "ㄇㄠˋ",
        "pinyin": "máo",
        "tone": 4,
        "english": "fur",
        "variant": ""
    },
    "氏": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "clan",
        "variant": ""
    },
    "氣": {
        "zhuyin": "ㄑ一ˋ",
        "pinyin": "qì",
        "tone": 4,
        "english": "steam, breath",
        "variant": ""
    },
    "水": {
        "zhuyin": "ㄕㄨㄟˇ",
        "pinyin": "shuǐ",
        "tone": 3,
        "english": "water",
        "variant": "氵"
    },
    "火": {
        "zhuyin": "ㄏㄨㄛˇ",
        "pinyin": "huǒ",
        "tone": 3,
        "english": "fire",
        "variant": "灬"
    },
    "爪": {
        "zhuyin": "ㄓㄠˇ",
        "pinyin": "zhǎo",
        "tone": 3,
        "english": "claw",
        "variant": "爫"
    },
    "父": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "father",
        "variant": ""
    },
    "爻": {
        "zhuyin": "一ㄠˊ",
        "pinyin": "yáo",
        "tone": 2,
        "english": "lines on a trigram, diagrams for divination",
        "variant": ""
    },
    "爿": {
        "zhuyin": "ㄑ一ㄤˊ",
        "pinyin": "qiáng",
        "tone": 2,
        "english": "half of a tree trunk, bed",
        "variant": ""
    },
    "片": {
        "zhuyin": "ㄆ一ㄢˋ",
        "pinyin": "piàn",
        "tone": 4,
        "english": "slice",
        "variant": ""
    },
    "牙": {
        "zhuyin": "一ㄚˊ",
        "pinyin": "yá",
        "tone": 2,
        "english": "fang, tooth",
        "variant": ""
    },
    "牛": {
        "zhuyin": "ㄋ一ㄡˊ",
        "pinyin": "niú",
        "tone": 2,
        "english": "cow",
        "variant": "牜"
    },
    "犬": {
        "zhuyin": "ㄑㄩㄢˇ",
        "pinyin": "quǎn",
        "tone": 3,
        "english": "dog",
        "variant": "犭"
    },
    "玄": {
        "zhuyin": "ㄒㄩㄢˊ",
        "pinyin": "xuán",
        "tone": 2,
        "english": "profound, dark",
        "variant": ""
    },
    "玉": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "jade",
        "variant": "王"
    },
    "瓜": {
        "zhuyin": "ㄍㄨㄚ",
        "pinyin": "guā",
        "tone": 1,
        "english": "melon",
        "variant": ""
    },
    "瓦": {
        "zhuyin": "ㄨㄚˇ",
        "pinyin": "wǎ",
        "tone": 3,
        "english": "tile",
        "variant": ""
    },
    "甘": {
        "zhuyin": "ㄍㄢ",
        "pinyin": "gān",
        "tone": 1,
        "english": "sweet",
        "variant": ""
    },
    "生": {
        "zhuyin": "ㄕㄥ",
        "pinyin": "shēng",
        "tone": 1,
        "english": "life, birth",
        "variant": ""
    },
    "用": {
        "zhuyin": "一ㄤˋ",
        "pinyin": "yòng",
        "tone": 4,
        "english": "use",
        "variant": ""
    },
    "田": {
        "zhuyin": "ㄊ一ㄢˊ",
        "pinyin": "tián",
        "tone": 2,
        "english": "field, rice paddy",
        "variant": ""
    },
    "疋": {
        "zhuyin": "ㄆ一ˇ",
        "pinyin": "pǐ",
        "tone": 3,
        "english": "bolt of cloth",
        "variant": ""
    },
    "疒": {
        "zhuyin": "ㄅ一ㄥˋ",
        "pinyin": "bìng",
        "tone": 4,
        "english": "illness",
        "variant": ""
    },
    "癶": {
        "zhuyin": "ㄅㄛ",
        "pinyin": "bō",
        "tone": 1,
        "english": "foot steps, back",
        "variant": ""
    },
    "白": {
        "zhuyin": "ㄅㄞˊ",
        "pinyin": "bái",
        "tone": 2,
        "english": "white",
        "variant": ""
    },
    "皮": {
        "zhuyin": "ㄆ一ˊ",
        "pinyin": "pí",
        "tone": 2,
        "english": "skin",
        "variant": ""
    },
    "皿": {
        "zhuyin": "ㄇ一ㄣˇ",
        "pinyin": "mǐn",
        "tone": 3,
        "english": "dish",
        "variant": ""
    },
    "目": {
        "zhuyin": "ㄇㄨˋ",
        "pinyin": "mù",
        "tone": 4,
        "english": "eye",
        "variant": ""
    },
    "矛": {
        "zhuyin": "ㄇㄠˊ",
        "pinyin": "máo",
        "tone": 2,
        "english": "spear",
        "variant": ""
    },
    "矢": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "arrow",
        "variant": ""
    },
    "石": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "stone, rock",
        "variant": ""
    },
    "示": {
        "zhuyin": "ㄕˋ",
        "pinyin": "shì",
        "tone": 4,
        "english": "spirit, sign",
        "variant": "礻"
    },
    "禸": {
        "zhuyin": "ㄖㄡˊ",
        "pinyin": "róu",
        "tone": 2,
        "english": "track",
        "variant": ""
    },
    "禾": {
        "zhuyin": "ㄏㄜˊ",
        "pinyin": "hé",
        "tone": 2,
        "english": "grain",
        "variant": ""
    },
    "穴": {
        "zhuyin": "ㄒㄩㄝˋ",
        "pinyin": "xuè",
        "tone": 4,
        "english": "cave",
        "variant": ""
    },
    "立": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "stand",
        "variant": ""
    },
    "竹": {
        "zhuyin": "ㄓㄨˊ",
        "pinyin": "zhú",
        "tone": 2,
        "english": "bamboo",
        "variant": ""
    },
    "米": {
        "zhuyin": "ㄇ一ˇ",
        "pinyin": "mǐ",
        "tone": 3,
        "english": "rice",
        "variant": ""
    },
    "糸": {
        "zhuyin": "ㄙ",
        "pinyin": "sī",
        "tone": 1,
        "english": "silk",
        "variant": "纟"
    },
    "缶": {
        "zhuyin": "ㄈㄡˇ",
        "pinyin": "fǒu",
        "tone": 3,
        "english": "jar, crock",
        "variant": ""
    },
    "网": {
        "zhuyin": "ㄨㄤˇ",
        "pinyin": "wǎng",
        "tone": 3,
        "english": "net",
        "variant": "罒"
    },
    "羊": {
        "zhuyin": "一ㄤˊ",
        "pinyin": "yáng",
        "tone": 2,
        "english": "sheep",
        "variant": ""
    },
    "羽": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "feathers, wings",
        "variant": ""
    },
    "老": {
        "zhuyin": "ㄌㄠˇ",
        "pinyin": "lǎo",
        "tone": 3,
        "english": "old",
        "variant": ""
    },
    "而": {
        "zhuyin": "ㄦˊ",
        "pinyin": "ér",
        "tone": 2,
        "english": "and, beard",
        "variant": ""
    },
    "耒": {
        "zhuyin": "ㄌㄟˇ",
        "pinyin": "lěi",
        "tone": 3,
        "english": "plow",
        "variant": ""
    },
    "耳": {
        "zhuyin": "ㄦˇ",
        "pinyin": "ěr",
        "tone": 3,
        "english": "ear",
        "variant": ""
    },
    "聿": {
        "zhuyin": "ㄩˋ",
        "pinyin": "yù",
        "tone": 4,
        "english": "brush",
        "variant": ""
    },
    "肉": {
        "zhuyin": "ㄖㄡˋ",
        "pinyin": "ròu",
        "tone": 4,
        "english": "meat",
        "variant": ""
    },
    "臣": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "chén",
        "tone": 2,
        "english": "minister, bureaucrat",
        "variant": ""
    },
    "自": {
        "zhuyin": "ㄗˋ",
        "pinyin": "zì",
        "tone": 4,
        "english": "oneself, small nose",
        "variant": ""
    },
    "至": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "arrive, reach",
        "variant": ""
    },
    "臼": {
        "zhuyin": "ㄐ一ㄡˋ",
        "pinyin": "jiù",
        "tone": 4,
        "english": "mortar",
        "variant": ""
    },
    "舌": {
        "zhuyin": "ㄕㄜˊ",
        "pinyin": "shé",
        "tone": 2,
        "english": "tongue",
        "variant": ""
    },
    "舛": {
        "zhuyin": "ㄔㄨㄢˇ",
        "pinyin": "chuǎn",
        "tone": 3,
        "english": "contrary, oppose, discord",
        "variant": ""
    },
    "舟": {
        "zhuyin": "ㄓㄡ",
        "pinyin": "zhōu",
        "tone": 1,
        "english": "boat",
        "variant": ""
    },
    "艮": {
        "zhuyin": "ㄍㄣˋ",
        "pinyin": "gèn",
        "tone": 4,
        "english": "stubborn, tough, trigram mountain, stopping",
        "variant": ""
    },
    "色": {
        "zhuyin": "ㄙㄜˋ",
        "pinyin": "sè",
        "tone": 4,
        "english": "color",
        "variant": ""
    },
    "艸": {
        "zhuyin": "ㄘㄠˇ",
        "pinyin": "cǎo",
        "tone": 3,
        "english": "grass",
        "variant": "艹"
    },
    "虍": {
        "zhuyin": "ㄏㄨˇ",
        "pinyin": "hǔ",
        "tone": 3,
        "english": "tiger",
        "variant": ""
    },
    "虫": {
        "zhuyin": "ㄔㄨㄥˊ",
        "pinyin": "chóng",
        "tone": 2,
        "english": "insect",
        "variant": ""
    },
    "血": {
        "zhuyin": "ㄒㄩㄝˇ",
        "pinyin": "xuě",
        "tone": 3,
        "english": "blood",
        "variant": ""
    },
    "行": {
        "zhuyin": "ㄒ一ㄥˊ",
        "pinyin": "xíng",
        "tone": 2,
        "english": "walk, go",
        "variant": ""
    },
    "衣": {
        "zhuyin": "一",
        "pinyin": "yī",
        "tone": 1,
        "english": "clothes, gown",
        "variant": "衤"
    },
    "西": {
        "zhuyin": "ㄒ一",
        "pinyin": "xī",
        "tone": 1,
        "english": "west",
        "variant": "覀"
    },
    "見": {
        "zhuyin": "ㄐ一ㄢˋ",
        "pinyin": "jiàn",
        "tone": 4,
        "english": "see",
        "variant": "见"
    },
    "角": {
        "zhuyin": "ㄐ一ㄠˇ",
        "pinyin": "jiǎo",
        "tone": 3,
        "english": "horn",
        "variant": ""
    },
    "言": {
        "zhuyin": "一ㄢˊ",
        "pinyin": "yán",
        "tone": 2,
        "english": "speech, words",
        "variant": ""
    },
    "谷": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "valley",
        "variant": ""
    },
    "豆": {
        "zhuyin": "ㄉㄡˋ",
        "pinyin": "dòu",
        "tone": 4,
        "english": "bean, flask",
        "variant": ""
    },
    "豕": {
        "zhuyin": "ㄕˇ",
        "pinyin": "shǐ",
        "tone": 3,
        "english": "pig",
        "variant": ""
    },
    "豸": {
        "zhuyin": "ㄓˋ",
        "pinyin": "zhì",
        "tone": 4,
        "english": "badger, snake",
        "variant": ""
    },
    "貝": {
        "zhuyin": "ㄅㄟˋ",
        "pinyin": "bèi",
        "tone": 4,
        "english": "shell",
        "variant": ""
    },
    "赤": {
        "zhuyin": "ㄔˋ",
        "pinyin": "chì",
        "tone": 4,
        "english": "red",
        "variant": ""
    },
    "走": {
        "zhuyin": "ㄗㄡˇ",
        "pinyin": "zǒu",
        "tone": 3,
        "english": "walk, run",
        "variant": ""
    },
    "足": {
        "zhuyin": "ㄗㄨˊ",
        "pinyin": "zú",
        "tone": 2,
        "english": "foot",
        "variant": ""
    },
    "身	": {
        "zhuyin": "ㄕㄣ",
        "pinyin": "shēn",
        "tone": 1,
        "english": "torso, body",
        "variant": ""
    },
    "車": {
        "zhuyin": "ㄔㄜ",
        "pinyin": "chē",
        "tone": 1,
        "english": "cart, car",
        "variant": "车"
    },
    "辛": {
        "zhuyin": "ㄒ一ㄣ",
        "pinyin": "xīn",
        "tone": 1,
        "english": "bitter",
        "variant": ""
    },
    "辰": {
        "zhuyin": "ㄔㄣˊ",
        "pinyin": "chén",
        "tone": 2,
        "english": "morning",
        "variant": ""
    },
    "辶": {
        "zhuyin": "ㄔㄨㄛˋ",
        "pinyin": "chuò",
        "tone": 4,
        "english": "walk",
        "variant": ""
    },
    "邑": {
        "zhuyin": "一ˋ",
        "pinyin": "yì",
        "tone": 4,
        "english": "city",
        "variant": "阝"
    },
    "酉": {
        "zhuyin": "一ㄡˇ",
        "pinyin": "yǒu",
        "tone": 3,
        "english": "wine",
        "variant": ""
    },
    "釆": {
        "zhuyin": "ㄅ一ㄢˋ",
        "pinyin": "biàn",
        "tone": 4,
        "english": "sift, distinguish",
        "variant": ""
    },
    "里": {
        "zhuyin": "ㄌ一ˇ",
        "pinyin": "lǐ",
        "tone": 3,
        "english": "village",
        "variant": ""
    },
    "金": {
        "zhuyin": "ㄐ一ㄣ",
        "pinyin": "jīn",
        "tone": 1,
        "english": "metal, gold",
        "variant": "钅"
    },
    "長": {
        "zhuyin": "ㄔㄤˊ",
        "pinyin": "cháng",
        "tone": 2,
        "english": "long",
        "variant": "长"
    },
    "門": {
        "zhuyin": "ㄇㄣˊ",
        "pinyin": "mén",
        "tone": 2,
        "english": "gate",
        "variant": "门"
    },
    "阜": {
        "zhuyin": "ㄈㄨˋ",
        "pinyin": "fù",
        "tone": 4,
        "english": "mound",
        "variant": "阝"
    },
    "隶": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "slave, grab",
        "variant": ""
    },
    "隹": {
        "zhuyin": "ㄓㄨㄟ",
        "pinyin": "zhuī",
        "tone": 1,
        "english": "dove, short-tailed bird",
        "variant": ""
    },
    "雨": {
        "zhuyin": "ㄩˇ",
        "pinyin": "yǔ",
        "tone": 3,
        "english": "rain",
        "variant": ""
    },
    "青": {
        "zhuyin": "ㄑ一ㄥ",
        "pinyin": "qīng",
        "tone": 1,
        "english": "blue, green",
        "variant": ""
    },
    "非": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi",
        "tone": 1,
        "english": "wrong",
        "variant": ""
    },
    "面": {
        "zhuyin": "ㄇ一ㄢˋ",
        "pinyin": "miàn",
        "tone": 4,
        "english": "face",
        "variant": ""
    },
    "革": {
        "zhuyin": "ㄍㄜˊ",
        "pinyin": "gé",
        "tone": 2,
        "english": "leather, hide",
        "variant": ""
    },
    "韋": {
        "zhuyin": "ㄨㄟˇ",
        "pinyin": "wěi",
        "tone": 3,
        "english": "soft leather, tanned leather, walk off",
        "variant": "韦"
    },
    "韭	": {
        "zhuyin": "ㄐ一ㄡˇ",
        "pinyin": "jiǔ",
        "tone": 3,
        "english": "leek",
        "variant": ""
    },
    "音": {
        "zhuyin": "一ㄣ",
        "pinyin": "yīn",
        "tone": 1,
        "english": "sound, tone",
        "variant": ""
    },
    "頁": {
        "zhuyin": "一ㄝˋ",
        "pinyin": "yè",
        "tone": 4,
        "english": "page, leaf",
        "variant": "页"
    },
    "風": {
        "zhuyin": "ㄈㄥ",
        "pinyin": "fēng",
        "tone": 1,
        "english": "wind",
        "variant": "风"
    },
    "飛": {
        "zhuyin": "ㄈㄟ",
        "pinyin": "fēi",
        "tone": 1,
        "english": "fly",
        "variant": "飞"
    },
    "食": {
        "zhuyin": "ㄕˊ",
        "pinyin": "shí",
        "tone": 2,
        "english": "eat, food",
        "variant": "飠, 饣"
    },
    "首": {
        "zhuyin": "ㄕㄡˇ",
        "pinyin": "shǒu",
        "tone": 3,
        "english": "head",
        "variant": ""
    },
    "香": {
        "zhuyin": "ㄒ一ㄤ",
        "pinyin": "xiāng",
        "tone": 1,
        "english": "fragrant",
        "variant": ""
    },
    "馬": {
        "zhuyin": "ㄇㄚˇ",
        "pinyin": "mǎ",
        "tone": 3,
        "english": "horse",
        "variant": "马"
    },
    "骨": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "bone",
        "variant": ""
    },
    "高	": {
        "zhuyin": "ㄍㄠ",
        "pinyin": "gāo",
        "tone": 1,
        "english": "high, tall",
        "variant": ""
    },
    "髟	": {
        "zhuyin": "ㄅ一ㄠ",
        "pinyin": "biāo",
        "tone": 1,
        "english": "long hair",
        "variant": ""
    },
    "鬥": {
        "zhuyin": "ㄉㄡˋ",
        "pinyin": "dòu",
        "tone": 4,
        "english": "fight",
        "variant": "斗"
    },
    "鬯": {
        "zhuyin": "ㄔㄤˋ",
        "pinyin": "chàng",
        "tone": 4,
        "english": "sacrificial wine, mixed wine",
        "variant": ""
    },
    "鬲": {
        "zhuyin": "ㄌ一ˋ",
        "pinyin": "lì",
        "tone": 4,
        "english": "cauldron",
        "variant": ""
    },
    "鬼": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "guǐ",
        "tone": 1,
        "english": "ghost",
        "variant": ""
    },
    "魚": {
        "zhuyin": "ㄩˊ",
        "pinyin": "yú",
        "tone": 2,
        "english": "fish",
        "variant": "鱼"
    },
    "鳥": {
        "zhuyin": "ㄋ一ㄠˇ",
        "pinyin": "niǎo",
        "tone": 3,
        "english": "bird",
        "variant": "鸟"
    },
    "鹵": {
        "zhuyin": "ㄌㄨˇ",
        "pinyin": "lǔ",
        "tone": 3,
        "english": "salty",
        "variant": "卤"
    },
    "鹿": {
        "zhuyin": "ㄌㄨˋ",
        "pinyin": "lù",
        "tone": 4,
        "english": "deer",
        "variant": ""
    },
    "麥": {
        "zhuyin": "ㄇㄞˋ",
        "pinyin": "mài",
        "tone": 4,
        "english": "wheat",
        "variant": "麦"
    },
    "麻": {
        "zhuyin": "ㄇㄚˊ",
        "pinyin": "má",
        "tone": 2,
        "english": "hemp",
        "variant": ""
    },
    "黄": {
        "zhuyin": "ㄏㄨㄤˊ",
        "pinyin": "huáng",
        "tone": 2,
        "english": "yellow",
        "variant": ""
    },
    "黍": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "shǔ",
        "tone": 3,
        "english": "millet (an ancient seed cooked like a grain)",
        "variant": ""
    },
    "黑": {
        "zhuyin": "ㄏㄟ",
        "pinyin": "hēi",
        "tone": 1,
        "english": "black",
        "variant": ""
    },
    "黹": {
        "zhuyin": "ㄓˇ",
        "pinyin": "zhǐ",
        "tone": 3,
        "english": "embroidery",
        "variant": ""
    },
    "黽": {
        "zhuyin": "ㄇ一ㄣˇ",
        "pinyin": "mǐn",
        "tone": 3,
        "english": "frog, toad",
        "variant": "黾"
    },
    "鼎": {
        "zhuyin": "ㄉ一ㄥˇ",
        "pinyin": "dǐng",
        "tone": 3,
        "english": "tripod",
        "variant": ""
    },
    "鼓": {
        "zhuyin": "ㄍㄨˇ",
        "pinyin": "gǔ",
        "tone": 3,
        "english": "drum",
        "variant": ""
    },
    "鼠	": {
        "zhuyin": "ㄕㄨˇ",
        "pinyin": "shǔ",
        "tone": 3,
        "english": "rat, mouse",
        "variant": ""
    },
    "鼻": {
        "zhuyin": "ㄅ一ˊ",
        "pinyin": "bí",
        "tone": 2,
        "english": "big nose",
        "variant": ""
    },
    "齊": {
        "zhuyin": "ㄑ一ˊ",
        "pinyin": "qí",
        "tone": 2,
        "english": "even, line up",
        "variant": "齐"
    },
    "齒": {
        "zhuyin": "ㄔ",
        "pinyin": "chǐ",
        "tone": 1,
        "english": "tooth, teeth",
        "variant": "齿"
    },
    "龍": {
        "zhuyin": "ㄌㄨㄥˊ",
        "pinyin": "lóng",
        "tone": 2,
        "english": "dragon",
        "variant": "龙"
    },
    "龜": {
        "zhuyin": "ㄍㄨㄟ",
        "pinyin": "guī",
        "tone": 1,
        "english": "turtle, tortoise",
        "variant": "龟"
    },
    "龠": {
        "zhuyin": "ㄩㄝˋ",
        "pinyin": "yuè",
        "tone": 4,
        "english": "flute",
        "variant": "",
    }
};


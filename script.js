// --- 📚 資料庫 (保留之前嘅 24 個字卡，並加入動詞大魔王) ---
const vocabList = [
    // --- 📦 第一彈：核心形容詞 (對比記憶) ---
    { category: "新舊好壞", color: "#f39c12", icon: "✨", front: "新", back: "あたらしい (新しい)", tip: "新しい車" },
    { category: "新舊好壞", color: "#d35400", icon: "🏛️", front: "舊", back: "ふるい (古い)", tip: "古い本" },
    { category: "新舊好壞", color: "#2ecc71", icon: "👍", front: "好", back: "いい / よい", tip: "スポーツはいいです" },
    { category: "新舊好壞", color: "#e74c3c", icon: "👎", front: "壞 / 差", back: "わるい (悪い)", tip: "たばこは悪いです" },
    
    { category: "速度與時間", color: "#3498db", icon: "🚄", front: "快 (速度) / 早 (時間)", back: "はやい (速い / 早い)", tip: "新幹線は速いです" },
    { category: "速度與時間", color: "#95a5a6", icon: "🐢", front: "慢 / 遲", back: "おそい (遅い)", tip: "自転車は遅いです" },

    { category: "味覺", color: "#e67e22", icon: "🍰", front: "甜", back: "あまい (甘い)", tip: "砂糖は甘いです" },
    { category: "味覺", color: "#2c3e50", icon: "☕", front: "苦", back: "にがい (苦い)", tip: "薬は苦いです" },
    { category: "味覺", color: "#f1c40f", icon: "🍋", front: "酸", back: "すっぱい (酸っぱい)", tip: "レモンは酸っぱいです" },
    { category: "味覺", color: "#c0392b", icon: "🌶️", front: "辣", back: "からい (辛い)", tip: "タイ料理は辛いです" },

    { category: "空間與距離", color: "#1abc9c", icon: "📏", front: "長", back: "ながい (長い)", tip: "髪が長い (頭髮長)" },
    { category: "空間與距離", color: "#16a085", icon: "✂️", front: "短", back: "みじかい (短い)", tip: "髪が短い" },
    { category: "空間與距離", color: "#34495e", icon: "🔭", front: "遠", back: "とおい (遠い)", tip: "駅は遠いです" },
    { category: "空間與距離", color: "#7f8c8d", icon: "📍", front: "近", back: "ちかい (近い)", tip: "会社は近いです" },

    // --- 📦 第一彈：日常物件與地方 ---
    { category: "文具與書桌", color: "#9b59b6", icon: "✏️", front: "鉛筆", back: "えんぴつ (鉛筆)", tip: "✏️" },
    { category: "文具與書桌", color: "#9b59b6", icon: "🖊️", front: "原子筆", back: "ボールペン", tip: "Ball pen" },
    { category: "文具與書桌", color: "#9b59b6", icon: "📏", front: "間尺", back: "じょうぎ (定規)", tip: "📐" },
    { category: "文具與書桌", color: "#9b59b6", icon: "🧽", front: "擦膠", back: "けしゴム (消しゴム)", tip: "✏️" },
    { category: "文具與書桌", color: "#9b59b6", icon: "📖", front: "字典", back: "じしょ (辞書)", tip: "查字必備" },

    { category: "地點與建築", color: "#34495e", icon: "🏬", front: "百貨公司", back: "デパート", tip: "Department store" },
    { category: "地點與建築", color: "#34495e", icon: "🏪", front: "便利店", back: "コンビニ", tip: "Convenience store" },
    { category: "地點與建築", color: "#34495e", icon: "🛒", front: "超級市場", back: "スーパー", tip: "Supermarket" },
    { category: "地點與建築", color: "#34495e", icon: "🏦", front: "銀行", back: "ぎんこう (銀行)", tip: "🏧" },
    { category: "地點與建築", color: "#34495e", icon: "📚", front: "圖書館", back: "としょかん (図書館)", tip: "安靜嘅地方" },

    // --- ⚔️ 資料擴充包第二彈：動詞變化大魔王 ---
    // 五段動詞 (Group 1) - 特徵：發音會改變
    { category: "五段動詞 (ます形)", color: "#c0392b", icon: "🚬", front: "吸煙 (肯定)", back: "吸います (すいます)", tip: "辭書形：吸う (suu) -> すいます" },
    { category: "五段動詞 (ない形)", color: "#c0392b", icon: "🚭", front: "不吸煙 (否定)", back: "吸わない (すわない)", tip: "⚠️ 注意「わ」變化：吸う -> 吸わない" },
    { category: "五段動詞 (ます形)", color: "#c0392b", icon: "🎧", front: "聽 (肯定)", back: "聞きます (ききます)", tip: "辭書形：聞く (kiku) -> ききます" },
    { category: "五段動詞 (ない形)", color: "#c0392b", icon: "🙉", front: "不聽 (否定)", back: "聞かない (きかない)", tip: "辭書形：聞く (kiku) -> きかない" },

    // 一段動詞 (Group 2) - 特徵：直接去「る」
    { category: "一段動詞 (ます形)", color: "#900C3F", icon: "🍽️", front: "食 (肯定)", back: "食べます (たべます)", tip: "辭書形：食べる (直接去る加ます)" },
    { category: "一段動詞 (ない形)", color: "#900C3F", icon: "🙅‍♂️", front: "不食 (否定)", back: "食べない (たべない)", tip: "辭書形：食べる (直接去る加ない)" },
    { category: "一段動詞 (ます形)", color: "#900C3F", icon: "👀", front: "睇 (肯定)", back: "見ます (みます)", tip: "辭書形：見る (直接去る加ます)" },

    // 不規則動詞 (Group 3 / カ変 / サ変) - 特徵：死記硬背
    { category: "不規則動詞 (サ変)", color: "#581845", icon: "📝", front: "做 (肯定)", back: "します", tip: "辭書形：する -> します (スポーツをする)" },
    { category: "不規則動詞 (サ変)", color: "#581845", icon: "🛋️", front: "不做 (否定)", back: "しない", tip: "辭書形：する -> しない" },
    { category: "不規則動詞 (カ変)", color: "#581845", icon: "🚶‍♂️", front: "來 (肯定)", back: "来ます (きます)", tip: "⚠️ 發音大變：来る (くる) -> きます" },
    { category: "不規則動詞 (カ変)", color: "#581845", icon: "🛑", front: "不來 (否定)", back: "来ない (こない)", tip: "⚠️ 發音大變：来る (くる) -> こない" },

    // --- 📦 資料擴充包第三彈：量詞與單位地獄 ---
    { category: "量詞 (通用)", color: "#1abc9c", icon: "🍎", front: "1個 (通用/立體)", back: "一つ (ひとつ)", tip: "1~10需要死記" },
    { category: "量詞 (通用)", color: "#1abc9c", icon: "🍊", front: "2個 (通用/立體)", back: "二つ (ふたつ)", tip: "1~10需要死記" },
    { category: "量詞 (扁平)", color: "#2ecc71", icon: "🎟️", front: "1張 (紙/飛/卡)", back: "一枚 (いちまい)", tip: "薄身、扁平嘅死物 (例如 Chiikawa 貼紙/卡牌)" },
    { category: "量詞 (細長)", color: "#3498db", icon: "🌂", front: "1把/支 (傘/筆)", back: "一本 (いっぽん)", tip: "⚠️ 注意促音：いっぽん" },
    { category: "量詞 (細長)", color: "#3498db", icon: "✏️", front: "3把/支 (傘/筆)", back: "三本 (さんぼん)", tip: "⚠️ 注意濁音：さんぼん" },
    { category: "量詞 (機械/家具)", color: "#9b59b6", icon: "🚗", front: "1部 (車/電腦)", back: "一台 (いちだい)", tip: "機械、交通工具、大型家電" },
    { category: "量詞 (小動物)", color: "#e67e22", icon: "🐈", front: "1隻 (貓/狗/昆蟲)", back: "一匹 (いっぴき)", tip: "細隻嘅動物" },
    { category: "量詞 (人)", color: "#e74c3c", icon: "👤", front: "1個人", back: "一人 (ひとり)", tip: "⚠️ 特殊讀音 (唔係いちにん)" },
    { category: "量詞 (人)", color: "#e74c3c", icon: "👥", front: "2個人", back: "二人 (ふたり)", tip: "⚠️ 特殊讀音 (唔係ににん)" },
    { category: "量詞 (模型/公仔)", color: "#f39c12", icon: "🧸", front: "1隻 (公仔/Figure)", back: "一体 (いったい)", tip: "專門用嚟數人形公仔或模型" },

    // --- 📦 資料擴充包第四彈：家族稱呼大對比 ---
    { category: "家族 (父母)", color: "#e74c3c", icon: "👨‍👦", front: "爸爸 (自己)", back: "父 (ちち)", tip: "同別人講自己阿爸時用" },
    { category: "家族 (父母)", color: "#e74c3c", icon: "👔", front: "爸爸 (別人)", back: "お父さん (おとうさん)", tip: "尊稱別人父親" },
    { category: "家族 (父母)", color: "#e74c3c", icon: "👩‍👦", front: "媽媽 (自己)", back: "母 (はは)", tip: "同別人講自己阿媽時用" },
    { category: "家族 (父母)", color: "#e74c3c", icon: "👗", front: "媽媽 (別人)", back: "お母さん (おかあさん)", tip: "尊稱別人母親" },
    
    { category: "家族 (兄姊)", color: "#3498db", icon: "👦", front: "哥哥 (自己)", back: "兄 (あに)", tip: "自己嘅阿哥" },
    { category: "家族 (兄姊)", color: "#3498db", icon: "👱‍♂️", front: "哥哥 (別人)", back: "お兄さん (おにいさん)", tip: "尊稱別人哥哥" },
    { category: "家族 (兄姊)", color: "#3498db", icon: "👧", front: "姐姐 (自己)", back: "姉 (あね)", tip: "自己嘅家姐" },
    { category: "家族 (兄姊)", color: "#3498db", icon: "👱‍♀️", front: "姐姐 (別人)", back: "お姉さん (おねえさん)", tip: "尊稱別人姐姐" },

    { category: "家族 (夫妻)", color: "#9b59b6", icon: "🏠", front: "妻子 (自己)", back: "家内 (かない)", tip: "漢字聯想：屋內嘅人" },
    { category: "家族 (夫妻)", color: "#9b59b6", icon: "💍", front: "妻子 (別人)", back: "奥さん (おくさん)", tip: "尊稱別人太太" },

    // --- 📦 資料擴充包第五彈：方位與位置詞大集結 ---
    { category: "方位 (基本)", color: "#34495e", icon: "⬆️", front: "上", back: "上 (うえ)", tip: "机の上 (枱面)" },
    { category: "方位 (基本)", color: "#34495e", icon: "⬇️", front: "下", back: "下 (した)", tip: "机の下 (枱底)" },
    { category: "方位 (基本)", color: "#2c3e50", icon: "⬅️", front: "左", back: "左 (ひだり)", tip: "銀行の左" },
    { category: "方位 (基本)", color: "#2c3e50", icon: "➡️", front: "右", back: "右 (みぎ)", tip: "コンビニの右" },
    
    { category: "方位 (前後)", color: "#8e44ad", icon: "🚶‍♂️", front: "前", back: "前 (まえ)", tip: "私の前 (我前面)" },
    { category: "方位 (前後)", color: "#8e44ad", icon: "🚶‍♀️", front: "後", back: "後ろ (うしろ)", tip: "私の後ろ (我後面)" },
    
    { category: "位置 (內外)", color: "#d35400", icon: "📦", front: "裡面 / 中", back: "中 (なか)", tip: "部屋の中 (房入面)" },
    { category: "位置 (內外)", color: "#d35400", icon: "🚪", front: "外面", back: "外 (そと)", tip: "部屋の外 (房外面)" },
    
    { category: "位置 (相鄰)", color: "#16a085", icon: "🧍‍♂️🧍‍♀️", front: "旁邊 (通用)", back: "側 (そば)", tip: "そばにいます (喺身邊)" },
    { category: "位置 (相鄰)", color: "#16a085", icon: "🏘️", front: "隔離 (同類相鄰)", back: "隣 (となり)", tip: "銀行の隣 (銀行隔離)" },
    { category: "位置 (相鄰)", color: "#16a085", icon: "↔️", front: "兩者之間", back: "間 (あいだ)", tip: "AとBの間" },

    // --- 📦 資料擴充包第六彈：授受動詞與方向大魔王 ---
    { category: "授受動詞 (畀)", color: "#f39c12", icon: "🎁", front: "我畀 (別人)", back: "あげる", tip: "私 ➡️ 友達 (例如送 Chiikawa Pocket 周邊畀朋友)" },
    { category: "授受動詞 (畀)", color: "#e74c3c", icon: "🤲", front: "別人畀 (我)", back: "くれる", tip: "友達 ➡️ 私 (朋友送禮物畀我/我家人)" },
    { category: "授受動詞 (收)", color: "#3498db", icon: "🙌", front: "我收到 (別人)", back: "もらう", tip: "私 ⬅️ 友達 (我從朋友度收到禮物)" },
    
    { category: "授受方向 (借)", color: "#8e44ad", icon: "📤", front: "借出 (畀人)", back: "貸す (かす)", tip: "方向：出去 (我借把遮畀人)" },
    { category: "授受方向 (借)", color: "#8e44ad", icon: "📥", front: "借入 (問人借)", back: "借りる (かりる)", tip: "方向：入嚟 (我問人借把遮)" },
    
    { category: "授受方向 (教與學)", color: "#16a085", icon: "🏫", front: "教", back: "教える (おしえる)", tip: "方向：出去 (老師教學生)" },
    { category: "授受方向 (教與學)", color: "#16a085", icon: "📝", front: "學習 (跟人學)", back: "習う (ならう)", tip: "方向：入嚟 (學生跟老師學)" },

    // --- 📦 資料擴充包第七彈：核心助詞與て形/辭書形初探 ---
    { category: "核心助詞 (を/で)", color: "#f1c40f", icon: "🍔", front: "食漢堡包 (填助詞)", back: "ハンバーガー【を】食べます", tip: "を (wo)：標示動作直接對象" },
    { category: "核心助詞 (を/で)", color: "#f1c40f", icon: "🥢", front: "用筷子食 (填助詞)", back: "箸【で】食べます", tip: "で (de)：標示使用嘅工具或方法" },
    { category: "核心助詞 (を/で)", color: "#f1c40f", icon: "🏫", front: "喺學校食 (填助詞)", back: "学校【で】食べます", tip: "で (de)：標示發生動作嘅地點" },
    
    { category: "核心助詞 (に/へ)", color: "#e67e22", icon: "⏰", front: "7點食 (填助詞)", back: "７時【に】食べます", tip: "に (ni)：標示確實嘅數字時間點" },
    { category: "核心助詞 (に/へ)", color: "#e67e22", icon: "🚶‍♂️", front: "去學校 (填助詞)", back: "学校【へ / に】行きます", tip: "へ (e) 或 に (ni)：標示移動嘅目的地" },
    
    { category: "動詞進化 (て形)", color: "#e74c3c", icon: "🙏", front: "請食... (要求)", back: "食べて ください", tip: "一段動詞：食べる ➡️ 食べて (直接加)" },
    { category: "動詞進化 (辭書形)", color: "#8e44ad", icon: "📖", front: "去 (原廠設定)", back: "行く (いく)", tip: "五段動詞：行きます ➡️ 行く (iku)" },

    // --- 📦 資料擴充包第八彈：て形五段音便大魔王 ---
    { category: "て形 (いちり ➡️ って)", color: "#c0392b", icon: "🛍️", front: "買 (て形)", back: "買って (かって)", tip: "辭書形：買う (kau) ➡️ って" },
    { category: "て形 (いちり ➡️ って)", color: "#c0392b", icon: "⏳", front: "等 (て形)", back: "待って (まって)", tip: "辭書形：待つ (matsu) ➡️ って" },
    { category: "て形 (いちり ➡️ って)", color: "#c0392b", icon: "🏠", front: "返歸 (て形)", back: "帰って (かえって)", tip: "辭書形：帰る (kaeru) ➡️ って" },

    { category: "て形 (みびに ➡️ んで)", color: "#8e44ad", icon: "🍺", front: "飲 (て形)", back: "飲んで (のんで)", tip: "辭書形：飲む (nomu) ➡️ んで" },
    { category: "て形 (みびに ➡️ んで)", color: "#8e44ad", icon: "🎮", front: "玩 (て形)", back: "遊んで (あそんで)", tip: "辭書形：遊ぶ (asobu) ➡️ んで" },

    { category: "て形 (きぎ ➡️ いて/いで)", color: "#2980b9", icon: "✍️", front: "寫 (て形)", back: "書いて (かいて)", tip: "辭書形：書く (kaku) ➡️ いて" },
    { category: "て形 (きぎ ➡️ いて/いで)", color: "#2980b9", icon: "🏊‍♂️", front: "游水 (て形)", back: "泳いで (およいで)", tip: "辭書形：泳ぐ (oyogu) ➡️ いで (有兩點)" },

    { category: "て形 (⚠️ 例外伏位)", color: "#f39c12", icon: "🏃‍♂️", front: "去 (て形)", back: "行って (いって)", tip: "⚠️ 行く (iku) 係唯一例外！唔係いいて！" },

    // --- 📦 資料擴充包第九彈：辭書形轉化規律 ---
    { category: "辭書形 (五段 い➡️う)", color: "#1abc9c", icon: "🗣️", front: "講話 (辭書形)", back: "話す (はなす)", tip: "規律：話します (shi) ➡️ 話す (su)" },
    { category: "辭書形 (五段 い➡️う)", color: "#1abc9c", icon: "📖", front: "閱讀 (辭書形)", back: "読む (よむ)", tip: "規律：読みます (mi) ➡️ 読む (mu)" },
    { category: "辭書形 (五段 い➡️う)", color: "#1abc9c", icon: "🎵", front: "唱歌 (辭書形)", back: "歌う (うたう)", tip: "規律：歌います (i) ➡️ 歌う (u)" },

    { category: "辭書形 (一段 加る)", color: "#3498db", icon: "🛏️", front: "瞓覺 (辭書形)", back: "寝る (ねる)", tip: "規律：寝ます ➡️ 寝る (直接換)" },
    { category: "辭書形 (一段 加る)", color: "#3498db", icon: "🌅", front: "起身 (辭書形)", back: "起きる (おきる)", tip: "規律：起きます ➡️ 起きる (直接換)" },
    
    { category: "辭書形 (不規則/サ変)", color: "#9b59b6", icon: "🧹", front: "打掃 (辭書形)", back: "掃除する (そうじする)", tip: "規律：します ➡️ する" },
    { category: "辭書形 (不規則/カ変)", color: "#9b59b6", icon: "🚶‍♂️", front: "來 (辭書形)", back: "来る (くる)", tip: "⚠️ 發音大變：来ます (kimasu) ➡️ 来る (kuru)" },

    // --- 📦 資料擴充包第十彈：ない形大滿貫 (補完計畫) ---
    { category: "ない形 (五段 あ段+ない)", color: "#e67e22", icon: "📖", front: "不閱讀 (ない形)", back: "読まない (よまない)", tip: "規律：読む (mu) ➡️ ま (ma) + ない" },
    { category: "ない形 (五段 あ段+ない)", color: "#e67e22", icon: "⏳", front: "不等 (ない形)", back: "待たない (またない)", tip: "規律：待つ (tsu) ➡️ た (ta) + ない" },
    { category: "ない形 (五段 あ段+ない)", color: "#e67e22", icon: "🏠", front: "不返歸 (ない形)", back: "帰らない (かえらない)", tip: "規律：帰る (ru) ➡️ ら (ra) + ない" },
    
    { category: "ない形 (一段 去る+ない)", color: "#c0392b", icon: "🛏️", front: "不睡覺 (ない形)", back: "寝ない (ねない)", tip: "規律：寝る ➡️ 去 る + ない" },
    
    { category: "ない形 (例外伏位)", color: "#8e44ad", icon: "⚠️", front: "有 (死物嘅否定)", back: "ない", tip: "⚠️ あります 嘅普通體否定係「ない」，唔係 あらない！" },

    // --- 📦 資料擴充包第十一彈：食物單字與實用文法 Combo ---
    { category: "食物與飲品", color: "#e67e22", icon: "🍰", front: "蛋糕", back: "ケーキ", tip: "外來語：Cake" },
    { category: "食物與飲品", color: "#e67e22", icon: "🍚", front: "牛肉飯", back: "牛丼 (ぎゅうどん)", tip: "日本三大牛丼：すき家、吉野家、松屋" },
    { category: "食物與飲品", color: "#e67e22", icon: "🥟", front: "餃子", back: "餃子 (ギョーザ)", tip: "焼き餃子(煎餃)、水餃子(水餃)" },
    { category: "食物與飲品", color: "#3498db", icon: "🍵", front: "茶", back: "お茶 (おちゃ)", tip: "通常指綠茶/日本茶" },
    { category: "食物與飲品", color: "#3498db", icon: "💧", front: "水", back: "水 (みず)", tip: "去餐廳必嗌" },

    { category: "實用文法 (願望)", color: "#8e44ad", icon: "🤤", front: "想食... (V-たい)", back: "食べたいです", tip: "規律：ます形去ます + たいです" },
    { category: "實用文法 (想要)", color: "#8e44ad", icon: "🚗", front: "想要車 (Nがほしい)", back: "車が欲しいです", tip: "注意助詞用「が」！" },
    { category: "實用文法 (許可)", color: "#27ae60", icon: "🙆‍♂️", front: "可以寫嗎？(V-てもいい)", back: "書いてもいいですか", tip: "規律：て形 + もいいですか" },
    { category: "實用文法 (禁止)", color: "#c0392b", icon: "🙅‍♂️", front: "不可以輸 (V-てはいけない)", back: "負けてはいけない", tip: "規律：て形 + はいけない" },
    { category: "實用文法 (同時進行)", color: "#f39c12", icon: "🎧", front: "一邊聽音樂 (V-ながら)", back: "音楽を聞きながら", tip: "規律：ます形去ます + ながら" }
];

// ==========================================
// ⚠️ 確保上面保留咗你嘅 const vocabList = [...]
// ==========================================

let filteredList = [...vocabList];
let currentIndex = 0;
let scoreRight = 0;
let scoreWrong = 0;
let cardsStudied = 0; // 🌟 V7 新增：記錄當前溫咗幾多張
let mistakeBook = []; // V5：錯題本

// --- 介面切換邏輯 ---
const tabNotes = document.getElementById('tab-notes');
const tabCards = document.getElementById('tab-cards');
const notesSection = document.getElementById('notes-section');
const cardsSection = document.getElementById('cards-section');

tabNotes.addEventListener('click', () => {
    tabNotes.classList.add('active'); tabCards.classList.remove('active');
    notesSection.classList.remove('hidden'); cardsSection.classList.add('hidden');
});
tabCards.addEventListener('click', () => {
    tabCards.classList.add('active'); tabNotes.classList.remove('active');
    cardsSection.classList.remove('hidden'); notesSection.classList.add('hidden');
});

// --- 自動生成溫習筆記表格 ---
const notesBody = document.getElementById('notes-body');
vocabList.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><span style="background-color:${item.color}; color:white; padding:3px 8px; border-radius:5px; font-size:12px;">${item.category}</span></td>
        <td>${item.icon} ${item.front}</td>
        <td><strong>${item.back}</strong></td>
        <td style="font-size: 14px; color: #555;">${item.tip}</td>
    `;
    notesBody.appendChild(row);
});

// --- 🌟 V4 + V5：分類篩選器 / 錯題本 ---
const categoryFilter = document.getElementById('category-filter');
const mistakeOption = categoryFilter.querySelector('option[value="mistakes"]');
const categories = [...new Set(vocabList.map(item => item.category))];
categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.innerText = `📂 ${cat}`;
    categoryFilter.appendChild(option);
});

function cardKey(card) {
    return `${card.front}|${card.back}`;
}

function updateMistakeOptionLabel() {
    mistakeOption.innerText = `⚠️ 錯題本 (${mistakeBook.length}張)`;
}

function applyFilter(selected) {
    if (selected === 'all') {
        filteredList = [...vocabList];
    } else if (selected === 'mistakes') {
        if (mistakeBook.length === 0) {
            alert('🎉 錯題本而家係空嘅！先去正常溫習，撳 ❌ 先會收集錯題。');
            categoryFilter.value = 'all';
            filteredList = [...vocabList];
        } else {
            filteredList = [...mistakeBook];
        }
    } else {
        filteredList = vocabList.filter(item => item.category === selected);
    }
    resetQuiz();
}

categoryFilter.addEventListener('change', (e) => {
    applyFilter(e.target.value);
});

// --- 🌟 V4：隨機洗牌 (Fisher-Yates) ---
document.getElementById('shuffle-btn').addEventListener('click', () => {
    if (filteredList.length === 0) return;
    for (let i = filteredList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredList[i], filteredList[j]] = [filteredList[j], filteredList[i]];
    }
    resetQuiz();
    alert(`🔀 已打亂 ${filteredList.length} 張卡片！`);
});

// --- 🌟 V7 新增：運算進度與勝率 ---
function updateStats() {
    const total = filteredList.length;
    const progressPercent = total === 0 ? 0 : Math.min((cardsStudied / total) * 100, 100);
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').innerText = `進度: ${cardsStudied} / ${total}`;
    
    const totalAttempts = scoreRight + scoreWrong;
    const accuracy = totalAttempts === 0 ? 0 : Math.round((scoreRight / totalAttempts) * 100);
    document.getElementById('accuracy-text').innerText = `勝率: ${accuracy}%`;
}

function resetQuiz() {
    currentIndex = 0;
    cardsStudied = 0;
    scoreRight = 0;
    scoreWrong = 0;
    document.getElementById('score-right').innerText = scoreRight;
    document.getElementById('score-wrong').innerText = scoreWrong;
    updateStats();
    loadCard();
}

// --- 🎮 閃卡核心系統 ---
const flashcard = document.getElementById('flashcard');
const flipBtn = document.getElementById('flip-btn');
const judgementControls = document.getElementById('judgement-controls');

function loadCard() {
    if (filteredList.length === 0) {
        document.getElementById('icon-display').innerText = '🎉';
        document.getElementById('text-front').innerText = '錯題已全部清走！';
        document.getElementById('tag-front').innerText = '錯題本';
        document.getElementById('tag-front').style.backgroundColor = '#27ae60';
        flipBtn.style.display = 'none';
        judgementControls.style.display = 'none';
        return;
    }

    flashcard.classList.remove('is-flipped');
    flipBtn.style.display = 'inline-block';
    judgementControls.style.display = 'none';
    
    const currentVocab = filteredList[currentIndex];
    setTimeout(() => {
        document.getElementById('icon-display').innerText = currentVocab.icon;
        document.getElementById('text-front').innerText = currentVocab.front;
        document.getElementById('tag-front').innerText = currentVocab.category;
        document.getElementById('tag-front').style.backgroundColor = currentVocab.color;
        
        document.getElementById('text-back').innerText = currentVocab.back;
        document.getElementById('tag-back').innerText = currentVocab.category;
        document.getElementById('tag-back').style.backgroundColor = currentVocab.color;
        document.getElementById('tip-back').innerText = currentVocab.tip;
    }, 150);
}

function flipCard() { 
    if (filteredList.length === 0) return;
    flashcard.classList.add('is-flipped'); 
    flipBtn.style.display = 'none';
    judgementControls.style.display = 'block';
}

function handleJudgement(isRight) {
    if (filteredList.length === 0) return;
    const currentVocab = filteredList[currentIndex];

    if (isRight) {
        scoreRight++;
        document.getElementById('score-right').innerText = scoreRight;

        // 錯題模式答啱：由錯題本移除
        if (categoryFilter.value === 'mistakes') {
            mistakeBook = mistakeBook.filter(item => cardKey(item) !== cardKey(currentVocab));
            filteredList = filteredList.filter(item => cardKey(item) !== cardKey(currentVocab));
            updateMistakeOptionLabel();

            cardsStudied++;
            updateStats();

            if (filteredList.length === 0) {
                alert('🎉 今次錯題已全部溫完！');
                loadCard();
                return;
            }
            currentIndex = currentIndex % filteredList.length;
            loadCard();
            return;
        }
    } else {
        scoreWrong++;
        document.getElementById('score-wrong').innerText = scoreWrong;

        // V5：撳 ❌ 自動加入錯題本
        if (!mistakeBook.some(item => cardKey(item) === cardKey(currentVocab))) {
            mistakeBook.push(currentVocab);
            updateMistakeOptionLabel();
        }
    }

    // 🌟 V7：每次答完增加進度並更新統計
    cardsStudied++;
    updateStats();

    currentIndex = (currentIndex + 1) % filteredList.length;
    loadCard();
}

flashcard.addEventListener('click', () => {
    if(!flashcard.classList.contains('is-flipped')) flipCard();
});
flipBtn.addEventListener('click', flipCard);
document.getElementById('right-btn').addEventListener('click', (e) => { e.stopPropagation(); handleJudgement(true); });
document.getElementById('wrong-btn').addEventListener('click', (e) => { e.stopPropagation(); handleJudgement(false); });

// 初始化
updateMistakeOptionLabel();
updateStats();
loadCard();

// --- 🌟 V6 新增：深色模式切換邏輯 ---
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerText = '☀️ 淺色模式';
    } else {
        themeToggle.innerText = '🌙 深色模式';
    }
});

// --- 🌟 V8 新增：一鍵重置邏輯 ---
document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('⚠️ 確定要將進度、勝率同錯題本全部清零，重新開始特訓？')) {
        scoreRight = 0;
        scoreWrong = 0;
        cardsStudied = 0;
        mistakeBook = [];

        updateMistakeOptionLabel();
        categoryFilter.value = 'all';
        filteredList = [...vocabList];

        resetQuiz();
        alert('🔄 進度已全部重置！新一輪特訓開始。');
    }
});

const spotData = {
    zombielandsaga: [
        { id: "saga_manho-ru1-1", name: "源さくら＆民俗資料館緑地", lat: 33.4704377169269, lng: 129.95366170008197, iconUrl: "images/zombi-1-1.jpg", hours: "" },
        { id: "saga_manho-ru1-2", name: "源さくら＆バルーン", lat: 33.25632515072881, lng: 130.29987033451988, iconUrl: "images/zombi-1-2.jpg", hours: "" },
        { id: "saga_manho-ru1-3", name: "源さくら＆有田焼", lat: 33.194271756190346, lng: 129.87597222883534, iconUrl: "images/zombi-1-3.jpg", hours: "" },
        { id: "saga_manho-ru1-4", name: "源さくら＆大魚神社の海中鳥居", lat: 33.03145038472253, lng: 130.1777162134939, iconUrl: "images/zombi-1-4.jpg", hours: "" },
        { id: "saga_manho-ru1-5", name: "源さくら＆SAGAアリーナ", lat: 33.273587000000006, lng: 130.2941494711646, iconUrl: "images/zombi-1-5.jpg", hours: "" },

        { id: "saga_manho-ru2-1", name: "二階堂サキ＆ドライブイン鳥のコッコ君", lat: 33.2871676, lng: 129.90213119999999, iconUrl: "images/zombi-2-1.jpg", hours: "" },
        { id: "saga_manho-ru2-2", name: "二階堂サキ＆鍋島直正公の銅像", lat: 33.2456220728268, lng: 130.30283910000003, iconUrl: "images/zombi-2-2.jpg", hours: "" },
        { id: "saga_manho-ru2-3", name: "二階堂サキ＆孔子像", lat: 33.25867379902089, lng: 130.09864389882063, iconUrl: "images/zombi-2-3.jpg", hours: "" },
        { id: "saga_manho-ru2-4", name: "二階堂サキ＆基山草スキー", lat: 33.42217375766673, lng: 130.53066730485077, iconUrl: "images/zombi-2-4.jpg", hours: "" },

        { id: "saga_manho-ru3-1", name: "水野愛＆うれしの茶畑", lat: 33.09634811188045, lng: 129.98655909999997, iconUrl: "images/zombi-3-1.jpg", hours: "" },
        { id: "saga_manho-ru3-2", name: "水野愛＆駅前不動産スタジアム", lat: 33.373458183166406, lng: 130.52038415649332, iconUrl: "images/zombi-3-2.jpg", hours: "" },
        { id: "saga_manho-ru3-3", name: "水野愛＆玉ねぎ・れんこん", lat: 33.177056620141734, lng: 130.1954340273703, iconUrl: "images/zombi-3-3.jpg", hours: "" },
        { id: "saga_manho-ru3-4", name: "水野愛＆聖岳展望所ハート形の手水鉢", lat: 33.21277070034677, lng: 130.10688057116465, iconUrl: "images/zombi-3-4.jpg", hours: "" },

        { id: "saga_manho-ru4-1", name: "紺野純子＆伊万里湾大花火", lat: 33.271901510386996, lng: 129.87646110000003, iconUrl: "images/zombi-4-1.jpg", hours: "" },
        { id: "saga_manho-ru4-2", name: "紺野純子＆嬉野温泉公衆浴場　シーボルトの湯", lat: 33.09679216701082, lng: 129.98697247828053, iconUrl: "images/zombi-4-2.jpg", hours: "" },
        { id: "saga_manho-ru4-3", name: "紺野純子＆桜・小城羊羹", lat: 33.28866527362776, lng: 130.19593317116463, iconUrl: "images/zombi-4-3.jpg", hours: "" },
        { id: "saga_manho-ru4-4", name: "紺野純子＆椿", lat: 33.31143913212943, lng: 130.42409872883533, iconUrl: "images/zombi-4-4.jpg", hours: "" },

        { id: "saga_manho-ru5-1", name: "ゆうぎり＆Cygames佐賀ビル", lat: 33.2652786167757, lng: 130.30134254232928, iconUrl: "images/zombi-5-1.jpg", hours: "" },
        { id: "saga_manho-ru5-2", name: "ゆうぎり＆祐徳稲荷神社", lat: 33.073987285340785, lng: 130.10807722796554, iconUrl: "images/zombi-5-2.jpg", hours: "" },
        { id: "saga_manho-ru5-3", name: "ゆうぎり＆九年庵", lat: 33.3544526849177, lng: 130.36391752883537, iconUrl: "images/zombi-5-3.jpg", hours: "" },
        { id: "saga_manho-ru5-4", name: "ゆうぎり＆浜野浦の棚田の夕陽", lat: 33.471772798168836, lng: 129.84973142883538, iconUrl: "images/zombi-5-4.jpg", hours: "" },

        { id: "saga_manho-ru6-1", name: "星川リリィ＆JR新鳥栖駅・とっとちゃん", lat: 33.37039348000004, lng: 130.4905762, iconUrl: "images/zombi-6-1.jpg", hours: "" },
        { id: "saga_manho-ru6-2", name: "星川リリィ＆656広場", lat: 33.25396424279952, lng: 130.30371491442514, iconUrl: "images/zombi-6-2.jpg", hours: "" },
        { id: "saga_manho-ru6-3", name: "星川リリィ＆川古の大楠", lat: 33.25182251657345, lng: 129.993501028835, iconUrl: "images/zombi-6-3.jpg", hours: "" },
        { id: "saga_manho-ru6-4", name: "星川リリィ＆蓮池", lat: 33.32534576355058, lng: 130.47448807116461, iconUrl: "images/zombi-6-4.jpg", hours: "" },

        { id: "saga_manho-ru0-1", name: "山田たえ＆鹿島ガタリンピック・ムツゴロウ・ワラスボ", lat: 33.07571678045981, lng: 130.14554909999998, iconUrl: "images/zombi-0-1.jpg", hours: "" },
        { id: "saga_manho-ru0-2", name: "山田たえ＆唐津城・唐津くんち", lat: 33.45011950355381, lng: 129.97052077116462, iconUrl: "images/zombi-0-2.jpg", hours: "" },
        { id: "saga_manho-ru0-3", name: "山田たえ＆吉野ヶ里歴史公園", lat: 33.325188329301035, lng: 130.39899629985598, iconUrl: "images/zombi-0-3.jpg", hours: "" },
        { id: "saga_manho-ru0-4", name: "山田たえ＆みんなの公園", lat: 33.21575600357182, lng: 130.1625108711646, iconUrl: "images/zombi-0-4.jpg", hours: "" },

        { id: "saga_manho-ru7-1", name: "巽幸太郎・ロメロ＆呼子のイカ・玄界灘・七ツ釜", lat: 33.53823082436743, lng: 129.89510412883533, iconUrl: "images/zombi-7-1.jpg", hours: "" },
        { id: "saga_manho-ru7-2", name: "巽幸太郎・ロメロ＆竹崎カニ・有明海・竹崎城址", lat: 32.956918001380984, lng: 130.2234577467423, iconUrl: "images/zombi-7-2.jpg", hours: "" },
        { id: "saga_manho-ru7-3", name: "ロゴ", lat: 33.276932669611185, lng: 130.29302927116464, iconUrl: "images/zombi-7-3.jpg", hours: "" },

        { id: "sagasi_01", name: "佐賀県立佐賀城本丸歴史家", lat: 33.2457835835518, lng: 130.30287128582972, iconUrl: "images/sagasi-01.jpg", hours: "9:30~18:00", closedDays: "年中無休" },
        { id: "sagasi_02", name: "佐賀県庁", lat: 33.24954616914816, lng: 130.29879347116463, iconUrl: "images/sagasi-02.jpg", hours: "各施設に異なる", closedDays: "常時非公開" },
        { id: "sagasi_03", name: "旧久富家", lat: 33.254124271953906, lng: 130.30786559999999, iconUrl: "images/sagasi-03.jpg", hours: "9:00~17:00", closedDays: "月曜日" },
        { id: "sagasi_05", name: "レストラン＆カフェ浪漫座", lat: 33.25426915113477, lng: 130.30684860184752, iconUrl: "images/sagasi-04.jpg", hours: "9:30~16:30", closedDays: "月曜日" },
        { id: "sagasi_04", name: "佐嘉神社・松原神社", lat: 33.25207347806103, lng: 130.30254765978475, iconUrl: "images/sagasi-05.jpg", hours: "5:00~17:00", closedDays: "年中無休" },
        { id: "sagasi_06", name: "656広場", lat: 33.2540032, lng: 130.3038168, iconUrl: "images/sagasi-06.jpg", hours: "入場自由", closedDays: "年中無休" },

        { id: "sagasi_07", name: "バルーンさが駅", lat: 33.25782215895082, lng: 130.2468203, iconUrl: "images/sagasi-07.jpg", hours: "佐賀インターナショナルバルーンフェスタ開催期間のみ営業", closedDays: "年中無休" },
        { id: "sagasi_08", name: "神野公園", lat: 33.26578348303163, lng: 130.28174932883536, iconUrl: "images/sagasi-08.jpg", hours: "入場自由", closedDays: "年中無休" },
        { id: "sagasi_09", name: "筑後川昇開橋", lat: 33.21367470886624, lng: 130.36438104218527, iconUrl: "images/sagasi-09.jpg", hours: "通行自由", closedDays: "月曜日（祝日の場合は翌日休" },
        { id: "sagasi_010", name: "わいわい‼コンテナ２", lat: 33.2532482440886, lng: 130.3038035, iconUrl: "images/sagasi-010.jpg", hours: "10:00~18:00", closedDays: "月曜日（祝日の場合は翌日休" },
        { id: "sagasi_011", name: "佐賀市徐福長寿館", lat: 33.32988283583384, lng: 130.30821330000003, iconUrl: "images/sagasi-011.jpg", hours: "9:00~16:30", closedDays: "月曜日（祝日の場合は翌日休" },

        { id: "sagasi_012", name: "佐賀GEILS", lat: 33.267049323772866, lng: 130.29786684232926, iconUrl: "images/sagasi-012.jpg", hours: "イベントに異なる", closedDays: "イベントに異なる" },
        { id: "sagasi_013", name: "佐賀市文化会館", lat: 33.277235700000006, lng: 130.29514202883533, iconUrl: "images/sagasi-013.jpg", hours: "9:00~22:00", closedDays: "年中無休" },
        { id: "sagasi_014", name: "エフエム佐賀", lat: 33.23879327655488, lng: 130.30259357116464, iconUrl: "images/sagasi-014.jpg", hours: "外観のみ見学自由", closedDays: "年中無休" },
        { id: "sagasi_015", name: "蓮池公園", lat: 33.24458080751206, lng: 130.35836667613324, iconUrl: "images/sagasi-015.jpg", hours: "入場自由", closedDays: "不明" },
        { id: "sagasi_016", name: "巨石パーク", lat: 33.33770155345571, lng: 130.26305812883535, iconUrl: "images/sagasi-016.jpg", hours: "9:00~17:00", closedDays: "雨天時" },
        { id: "sagasi_017", name: "SAGAアリーナ", lat: 33.27496610944249, lng: 130.2923140711646, iconUrl: "images/sagasi-017.jpg", hours: "未定", closedDays: "未定" },


        { id: "karatusi_01", name: "唐津駅前広場", lat: 33.446240173995825, lng: 129.96820454232926, iconUrl: "images/karatusi-01.jpg", hours: "見学自由", closedDays: "年中無休" },
        { id: "karatusi_02", name: "唐津市ふるさと会館アルピノ", lat: 33.44603688322633, lng: 129.9693882463916, iconUrl: "images/karatusi-02.jpg", hours: "9:00~18:00", closedDays: "奇数月3木曜日" },
        { id: "karatusi_03", name: "からつバーガー松原本店", lat: 33.44432501426068, lng: 130.00010792883538, iconUrl: "images/karatusi-03.jpg", hours: "10:00~20:00", closedDays: "年中無休" },
        { id: "karatusi_04", name: "唐津城", lat: 33.453565074278856, lng: 129.9782509576707, iconUrl: "images/karatusi-04.jpg", hours: "9:00~16:40", closedDays: "年中無休" },
        { id: "karatusi_05", name: "西の浜海水浴場", lat: 33.455620304840025, lng: 129.96790572883538, iconUrl: "images/karatusi-05.jpg", hours: "散策自由", closedDays: "年中無休" },
        { id: "karatusi_06", name: "唐津市歴史民俗資料館", lat: 33.47088389926617, lng: 129.95383197116462, iconUrl: "images/karatusi-06.jpg", hours: "外観のみ見学自由", closedDays: "年中無休" },

        { id: "karatusi_07", name: "鏡山展望台", lat: 33.43059460758331, lng: 130.0180433, iconUrl: "images/karatusi-07.jpg", hours: "入場自由", closedDays: "不明" },
        { id: "karatusi_08", name: "杉ノ原放牧場", lat: 33.566353379522546, lng: 129.88174772883534, iconUrl: "images/karatusi-08.jpg", hours: "散策自由", closedDays: "不明" },

        { id: "karatusi_09", name: "千代田橋", lat: 33.4511664813809, lng: 129.97451850645024, iconUrl: "images/karatusi-09.jpg", hours: "通行自由", closedDays: "年中無休" },
        { id: "karatusi_010", name: "山崎団地児童公園", lat: 33.44018361121291, lng: 129.9739728, iconUrl: "images/karatusi-010.jpg", hours: "入園自由", closedDays: "年中無休" },
        { id: "karatusi_011", name: "松浦川河川敷", lat: 33.439803500000004, lng: 129.99569857116467, iconUrl: "images/karatusi-011.jpg", hours: "通行自由", closedDays: "年中無休" },
        { id: "karatusi_012", name: "大名小路児童公園", lat: 33.45015531065028, lng: 129.97054222883537, iconUrl: "images/karatusi-012.jpg", hours: "入園自由", closedDays: "年中無休" },
        { id: "karatusi_013", name: "波戸岬", lat: 33.555541056500694, lng: 129.8463743585265, iconUrl: "images/karatusi-013.jpg", hours: "散策自由", closedDays: "年中無休" },
        { id: "karatusi_014", name: "唐津神社", lat: 33.452217700000006, lng: 129.96951645582322, iconUrl: "images/karatusi-014.jpg", hours: "参拝時間", closedDays: "年中無休" },
        { id: "karatusi_015", name: "民俗資料館緑地", lat: 33.47034385031253, lng: 129.95368889999997, iconUrl: "images/karatusi-015.jpg", hours: "入場自由", closedDays: "年中無休" },
        { id: "karatusi_016", name: "浜崎海岸", lat: 33.44866262318258, lng: 130.0298388573827, iconUrl: "images/karatusi-016.jpg", hours: "散策自由", closedDays: "年中無休" },

        { id: "uresinosi_01", name: "湯宿広場", lat: 33.09674737616025, lng: 129.98367377116463, iconUrl: "images/uresinosi-01.jpg", hours: "7:00~23:00", closedDays: "年中無休" },
        { id: "uresinosi_02", name: "豊玉姫神社", lat: 33.09743007602062, lng: 129.9825789710207, iconUrl: "images/uresinosi-02.jpg", hours: "参拝自由", closedDays: "年中無休" },
        { id: "uresinosi_03", name: "風月堂", lat: 33.097958399358355, lng: 129.9835557103189, iconUrl: "images/uresinosi-03.jpg", hours: "8:00~19:30", closedDays: "不定休" },
        { id: "uresinosi_04", name: "おとなカフェ　カフェ　モカ", lat: 33.097140602866624, lng: 129.9847523252869, iconUrl: "images/uresinosi-04.jpg", hours: "散策自由11:40~15:00 18:00~20:30", closedDays: "不定休" },
        { id: "uresinosi_05", name: "シーボルトの湯", lat: 33.09656021253379, lng: 129.9855808765674, iconUrl: "images/uresinosi-05.jpg", hours: "6:00~21:00", closedDays: "第3水曜（祝日の場合は翌日休）" },

        { id: "uresinosi_01", name: "ホテル華翠苑", lat: 33.09385367675201, lng: 129.9819849711646, iconUrl: "images/uresinosi-06.jpg", hours: "15:00 IN  10:00 OUT", closedDays: "不明" },
        { id: "uresinosi_01", name: "嬉野温泉公園", lat: 33.0963571, lng: 129.98655909999997, iconUrl: "images/uresinosi-07.jpg", hours: "入園自由", closedDays: "年中無休" },
        { id: "uresinosi_01", name: "井出酒造", lat: 33.09716249923274, lng: 129.98645578757078, iconUrl: "images/uresinosi-08.jpg", hours: "8:30~18:00", closedDays: "日曜日" },
        { id: "uresinosi_01", name: "嬉野橋", lat: 33.09636278811898, lng: 129.98556473558233, iconUrl: "images/uresinosi-09.jpg", hours: "通行自由", closedDays: "年中無休" },

        { id: "imari_01", name: "小島食品工業株式会社", lat: 33.32775757410653, lng: 129.84748344476333, iconUrl: "images/imari-01.jpg", hours: "不明", closedDays: "不明" },
        { id: "imari_02", name: "おつまみギャラリー伊万里", lat: 33.32707330000001, lng: 129.84791562869142, iconUrl: "images/imari-02.jpg", hours: "9:00~17:00", closedDays: "土・日・祝日" },
        { id: "imari_03", name: "いまり夢みさき公園", lat: 33.346923124827796, lng: 129.85028512883534, iconUrl: "images/imari-03.jpg", hours: "8:30~17:00", closedDays: "年中無休" },
        { id: "imari_04", name: "ドライブイン鳥　伊万里店", lat: 33.28725728554403, lng: 129.90214192883536, iconUrl: "images/imari-04.jpg", hours: "11:00~22:30", closedDays: "第1・3・5水曜" },
        { id: "imari_05", name: "相生橋", lat: 33.275292216126424, lng: 129.87661089747695, iconUrl: "images/imari-05.jpg", hours: "通行自由", closedDays: "年中無休" },
        { id: "imari_06", name: "延命橋", lat: 33.27558234875882, lng: 129.87871640000003, iconUrl: "images/imari-06.jpg", hours: "通行自由", closedDays: "年中無休" },
        { id: "imari_07", name: "幸橋", lat: 33.27594169999998, lng: 129.8806368, iconUrl: "images/imari-07.jpg", hours: "通行自由", closedDays: "年中無休" },

        { id: "imari_08", name: "大川内山", lat: 33.23734118741448, lng: 129.89249101581402, iconUrl: "images/imari-08.jpg", hours: "各店舗により異なる", closedDays: "各店舗により異なる" },
        { id: "imari_09", name: "伊万里ちゃんぽん本店", lat: 33.27203692069878, lng: 129.8896114404818, iconUrl: "images/imari-09.jpg", hours: "11:00~21:00", closedDays: "火曜日" },
        { id: "imari_010", name: "伊万里湾大花火", lat: 33.32867678576081, lng: 129.8363365, iconUrl: "images/imari-010.jpg", hours: "不明", closedDays: "不明" },

        { id: "kasima_01", name: "祐徳稲荷神社", lat: 33.073804971277184, lng: 130.10794242883537, iconUrl: "images/kasima-01.jpg", hours: "参拝自由", closedDays: "年中無休" },
        { id: "kasima_02", name: "祐徳門前商店街", lat: 33.07568724140855, lng: 130.10858371349389, iconUrl: "images/kasima-02.jpg", hours: "店舗に異なる", closedDays: "年中無休" },
        { id: "kasima_03", name: "道の駅　鹿島", lat: 33.07488083874971, lng: 130.1454792079515, iconUrl: "images/kasima-03.jpg", hours: "9:00~18:00", closedDays: "1月1日、7月第2水曜日" },
        { id: "kasima_04", name: "富久千代酒造", lat: 33.093637588397634, lng: 130.11483938636212, iconUrl: "images/kasima-04.jpg", hours: "9:00~17:00", closedDays: "土・日・祝日" },

        { id: "takeo_0", name: "森とリスの遊園地　メルヘン村", lat: 33.12995523263679, lng:  129.9763951478717, iconUrl: "images/takeo-01.jpg", hours: "9:30~16:00", closedDays: "年中無休" },
        { id: "takeo_0", name: "武雄温泉楼門", lat: 33.1962730115637, lng: 130.01467212869144, iconUrl: "images/takeo-02.jpg", hours: "散策自由9:00~10:00", closedDays: "火曜日" },
        { id: "takeo_0", name: "宇宙科学館　ゆめぎんが", lat: 33.179160059288165, lng:   130.03539327116462, iconUrl: "images/takeo-03.jpg", hours: "9:15~17:15(土日祝ha,~18:00）", closedDays: "月曜日（祝日の場合は翌日）" },

    ],
    lovelive: [
        { id: "numazu_station", name: "沼津駅", lat: 35.0961, lng: 138.8614, iconUrl: "images/lovelive_station.png", hours: "" },
        { id: "chika_house", name: "千歌の家", lat: 35.0256, lng: 138.7792, iconUrl: "images/lovelive_house.png", hours: "" }
    ]
};

function getStorageKey(workKey) {
  return `visitedSpots_${workKey}`;
}

function loadStampGrid() {
  const grid = document.getElementById("stampGrid");
  const filter = document.getElementById("workFilter").value;
  const visitFilter = document.getElementById("visitFilter").value;
  grid.innerHTML = "";

  const worksToShow = filter ? [filter] : Object.keys(spotData);

  worksToShow.forEach(workKey => {
    const visited = JSON.parse(localStorage.getItem(getStorageKey(workKey)) || "{}");

    spotData[workKey].forEach(spot => {
      const isVisited = !!visited[spot.id];

      // ✅ 表示フィルターに応じてスキップ
      if (
        (visitFilter === "visited" && !isVisited) ||
        (visitFilter === "unvisited" && isVisited)
      ) {
        return;
      }

      const imageClass = isVisited ? "visited" : "unvisited";
      const card = document.createElement("div");
      card.className = "stamp-card";
      card.innerHTML = `
        <img src="${spot.iconUrl}" class="stamp-image ${imageClass}" alt="${spot.name}">
        <div>${spot.name}</div>
      `;
      card.onclick = () => showStampDetail(spot, workKey, isVisited);
      grid.appendChild(card);
    });
  });
}

document.getElementById("visitFilter").addEventListener("change", loadStampGrid);

function showStampDetail(spot, workKey, isVisited) {
  const panel = document.getElementById("stampDetail");
  const content = document.getElementById("stampContent");
  const imageClass = isVisited ? "visited" : "unvisited";
  const buttonLabel = isVisited ? "スタンプ解除" : "スタンプ押印";

  content.innerHTML = `
    <button class="close-btn" onclick="closeModal()">×</button>
    <img src="${spot.iconUrl}" class="stamp-detail-image ${imageClass}" id="detailImage"><br>
    <h3>${spot.name}</h3>
    <div style="display:flex; gap:10px; justify-content:center; margin-top:10px;">
      <button id="stampToggleBtn">${buttonLabel}</button>
      <button id="shootBtn">📷 撮影</button>
    </div>
  `;
  panel.style.display = "flex";

  // スタンプ押印/解除ボタン
  document.getElementById("stampToggleBtn").onclick = () =>
    toggleStamp(spot.id, spot.name, workKey, spot.iconUrl);

  // 撮影ボタン → kamera.html に遷移
  document.getElementById("shootBtn").onclick = () => {
    const params = new URLSearchParams({
      work: workKey,
      spotId: spot.id
    });
    location.href = `satuei.html?${params.toString()}`;
  };
}

function toggleStamp(id, name, workKey, imageUrl) {
  const key = getStorageKey(workKey);
  const visited = JSON.parse(localStorage.getItem(key) || "{}");
  const isVisited = !!visited[id];

  if (isVisited) {
    delete visited[id];
  } else {
    visited[id] = [{
      name,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      image: imageUrl
    }];
  }

  localStorage.setItem(key, JSON.stringify(visited));
  loadStampGrid();

  const img = document.getElementById("detailImage");
  if (img) {
    img.classList.remove(isVisited ? "visited" : "unvisited");
    img.classList.add(isVisited ? "unvisited" : "visited");
  }
}

function closeModal() {
  document.getElementById("stampDetail").style.display = "none";
}

document.getElementById("workFilter").addEventListener("change", loadStampGrid);
document.getElementById("stampDetail").addEventListener("click", (e) => {
  if (e.target.id === "stampDetail") {
    closeModal();
  }
});

window.onload = loadStampGrid;
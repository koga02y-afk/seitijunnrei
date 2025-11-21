const spotData = {
  zombielandsaga: [
    { id: "saga_castle", name: "佐賀城跡", iconUrl: "images/zombie_castle.png" },
    { id: "saga_656hiroba", name: "656広場", iconUrl: "images/zombie-656hiroba.jpg" },
    { id: "saga_kyuhisatomike", name: "旧久富家", iconUrl: "images/zombie-kyuhisatomike.jpg" },
    { id: "saga_rekisikan", name: "佐賀県立佐賀城本丸歴史館", iconUrl: "images/zombie-rekisi.jpg" },
    { id: "saga_resutoran&kaferomanza", name: "レストラン＆カフェ浪漫座", iconUrl: "images/zombie-resutoran&kaferomanza.jpg" },
    { id: "saga_sagakentyou", name: "佐賀県庁", iconUrl: "images/zombie-sagakentyou.jpg" },
    { id: "saga_sagajinjamatubarajinja", name: "佐嘉神社・松原神社", iconUrl: "images/zombie-sagajinjamatubarajinja.jpg" },
    { id: "karatsu_station", name: "唐津駅", iconUrl: "images/zombie_station.png" }
  ],
  lovelive: [
    { id: "numazu_station", name: "沼津駅", iconUrl: "images/lovelive_station.png" },
    { id: "chika_house", name: "千歌の家", iconUrl: "images/lovelive_house.png" }
  ]
};

// ====== DOM要素 ======
const sceneContainer   = document.getElementById("scene-container");
const detailPanel      = document.getElementById("detail-panel");
const closeBtn         = document.getElementById("close-btn");
const animeImage       = document.getElementById("anime-image");
const photosBox        = document.getElementById("photos");
const startCameraBtn   = document.getElementById("start-camera-btn");
const deletePhotoBtn   = document.getElementById("delete-photo-btn");
const sceneName        = document.getElementById("scene-name"); // ★追加

let currentScene = null;

// ====== localStorage管理 ======
function getPhotos(sceneId) {
  const all = JSON.parse(localStorage.getItem("photos") || "[]");
  return all.filter(p => p.sceneId === sceneId);
}
function setPhoto(sceneId, dataURL) {
  const all = JSON.parse(localStorage.getItem("photos") || "[]");
  all.push({ sceneId, image: dataURL });
  localStorage.setItem("photos", JSON.stringify(all));
}
function deleteLastPhoto(sceneId) {
  let all = JSON.parse(localStorage.getItem("photos") || "[]");
  for (let i = all.length - 1; i >= 0; i--) {
    if (all[i].sceneId === sceneId) { all.splice(i, 1); break; }
  }
  localStorage.setItem("photos", JSON.stringify(all));
}
function hasAnyPhoto(sceneId) {
  return getPhotos(sceneId).length > 0;
}

// 一覧表示
function renderList() {
  sceneContainer.innerHTML = "";

  // 作品ごとにループ
  Object.values(spotData).forEach(group => {
    group.forEach(scene => {
      const img = document.createElement("img");
      img.src = scene.iconUrl;
      img.className = "scene-thumb";
      if (!getPhotos(scene.id).length) img.classList.add("list-grayscale");
      img.addEventListener("click", () => openDetail(scene));
      sceneContainer.appendChild(img);
    });
  });
}

// 詳細パネルを開く
function openDetail(scene) {
  currentScene = scene;
  animeImage.src = scene.iconUrl;
  animeImage.classList.toggle("detail-grayscale", !getPhotos(scene.id).length);
  renderDetailPhotos();
  sceneName.textContent = scene.name;   // ★スポット名を表示
  detailPanel.classList.remove("hidden");
}

// 詳細パネル外側クリックで閉じる
detailPanel.addEventListener("click", (e) => {
  if (e.target === detailPanel) {
    closeDetail();
  }
});

function closeDetail() {
  detailPanel.classList.add("hidden");
}
closeBtn.addEventListener("click", closeDetail);

// 詳細パネルの写真表示
function renderDetailPhotos() {
  photosBox.innerHTML = "";
  const saved = getPhotos(currentScene.id).slice(-3);
  saved.forEach(p => {
    const img = document.createElement("img");
    img.src = p.image;
    photosBox.appendChild(img);
  });
}

// ====== 撮影開始 → satuei.htmlへ遷移 ======
startCameraBtn.addEventListener("click", () => {
  if (!currentScene) return;
  // sceneId をクエリに付けて satuei.html へ
  window.location.href = `satuei.html?sceneId=${currentScene.id}`;
});

// ====== 削除 ======
deletePhotoBtn.addEventListener("click", () => {
  if (!currentScene) return;
  deleteLastPhoto(currentScene.id);
  renderDetailPhotos();
  renderList();
});

// ====== 初期化 ======
renderList();
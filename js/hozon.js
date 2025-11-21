const STORAGE_KEY = "savedPhotos";

// 一覧表示
function loadPhotos() {
  const grid = document.getElementById("photoGrid");
  grid.innerHTML = "";
  const photos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  photos.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "stamp-card";
    card.innerHTML = `
      <img src="${photo.image}" alt="${photo.name}">
      <div style="margin:8px 0; font-weight:600;">${photo.name}</div>
      <div style="font-size:12px; color:#666;">${photo.date || ""} ${photo.time || ""}</div>
      <button class="delete-btn" onclick="deletePhoto(${index})">削除</button>
    `;
    card.onclick = (e) => {
      if (e.target.classList.contains("delete-btn")) return;
      showDetail(photo, index);
    };
    grid.appendChild(card);
  });
}

// 詳細パネル表示
function showDetail(photo, index) {
  const panel = document.getElementById("stampDetail");
  const content = document.getElementById("stampContent");
  content.innerHTML = `
    <button class="close-btn" onclick="closeModal()">×</button>
    <img src="${photo.image}" class="stamp-detail-image" alt="${photo.name}">
    <h3>${photo.name}</h3>
    <p style="font-size:12px; color:#666;">${photo.date || ""} ${photo.time || ""}</p>
    <button class="delete-btn" onclick="deletePhoto(${index}); closeModal();">削除</button>
  `;
  panel.style.display = "flex";
}

// 削除処理
function deletePhoto(index) {
  const photos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  photos.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
  loadPhotos();
}

// モーダル閉じる
function closeModal() {
  document.getElementById("stampDetail").style.display = "none";
}

window.onload = loadPhotos;
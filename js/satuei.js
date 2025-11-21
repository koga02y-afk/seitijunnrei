const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const overlay = document.getElementById("arOverlay");
const shootBtn = document.getElementById("shootBtn");
const rotateBtn = document.getElementById("rotateBtn");
const workSelect = document.getElementById("workSelect");

let isPortrait = true;

// カメラ起動
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(stream => { video.srcObject = stream; })
  .catch(err => console.warn("カメラにアクセスできません"));

// キャラ切替
workSelect.addEventListener("change", () => {
  overlay.src = workSelect.value;
});

// 縦横切替
rotateBtn.addEventListener("click", () => {
  if (isPortrait) {
    video.style.transform = "rotate(90deg)";
    overlay.style.transform = "rotate(90deg)";
  } else {
    video.style.transform = "rotate(0deg)";
    overlay.style.transform = "rotate(0deg)";
  }
  isPortrait = !isPortrait;
});

// 撮影
shootBtn.addEventListener("click", () => {
  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;
  const ctx = canvas.getContext("2d");

  // 背景（カメラがある場合は映像、なければ黒）
  if (video.readyState >= 2) {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // オーバーレイ描画
  const ow = overlay.width;
  const oh = overlay.height;
  const ox = (canvas.width - ow) / 2;
  const oy = (canvas.height - oh) / 2;
  ctx.drawImage(overlay, ox, oy, ow, oh);

  // 保存
  const dataURL = canvas.toDataURL("image/png");
  const all = JSON.parse(localStorage.getItem("photos") || "[]");
  all.push({ image: dataURL, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() });
  localStorage.setItem("photos", JSON.stringify(all));

  window.location.href = "hozon.html";
});

// ドラッグ移動（PC）
let dragging = false, offsetX = 0, offsetY = 0;
overlay.addEventListener("mousedown", (e) => {
  dragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});
document.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  overlay.style.left = `${e.pageX - offsetX}px`;
  overlay.style.top = `${e.pageY - offsetY}px`;
});
document.addEventListener("mouseup", () => { dragging = false; });

// ドラッグ移動（スマホ）
overlay.addEventListener("touchstart", (e) => {
  dragging = true;
  const rect = overlay.getBoundingClientRect();
  offsetX = e.touches[0].clientX - rect.left;
  offsetY = e.touches[0].clientY - rect.top;
}, { passive: false });
document.addEventListener("touchmove", (e) => {
  if (!dragging) return;
  const x = e.touches[0].clientX - offsetX;
  const y = e.touches[0].clientY - offsetY;
  overlay.style.left = `${x}px`;
  overlay.style.top = `${y}px`;
}, { passive: false });
document.addEventListener("touchend", () => { dragging = false; });
const map = L.map("map").setView([33.2635, 130.3009], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const spots = [
    {
        name: "佐賀城跡",
        lat: 33.2496,
        lng: 130.2988,
        image: "images/zombie_castle.png",
        description: "佐賀藩の歴史を感じる城跡。"
    },
    {
        name: "唐津駅",
        lat: 33.4462,
        lng: 129.9686,
        image: "images/zombie_station.png",
        description: "ゾンビランドサガの舞台となった駅。"
    },
    {
        name: "祐徳稲荷神社",
        lat: 33.0952,
        lng: 130.0956,
        image: "images/yutoku_inari.jpg",
        description: "日本三大稲荷のひとつ。"
    },
    {
        name: "古湯温泉",
        lat: 33.3884,
        lng: 130.1911,
        image: "images/furuyu_onsen.jpg",
        description: "静かな山間にある癒しの温泉地。"
    }
];

// カスタム画像アイコン
function createImageIcon(imageUrl) {
    return L.icon({
        iconUrl: imageUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
        className: "custom-icon"
    });
}

// 詳細パネル表示
function showSpotDetail(spot) {
    const modal = document.getElementById("spotModal");
    const content = document.getElementById("modalContent");

    content.innerHTML = `
    <span class="close-btn" onclick="closeModal()">×</span>
    <h2>${spot.name}</h2>
    <img src="${spot.image}" style="width:100%; border-radius:8px;">
    <p>${spot.description}</p>
    <button onclick="location.href='sinkisakusei.html'">旅行計画をする</button>
  `;

    modal.style.display = "flex";
}

// モーダルを閉じる関数
function closeModal() {
    document.getElementById("spotModal").style.display = "none";
}

// モーダル外側クリックで閉じる
document.getElementById("spotModal").addEventListener("click", function (e) {
    if (e.target.id === "spotModal") {
        closeModal();
    }
});

// 地図マーカーとスポット一覧を生成
spots.forEach(spot => {
    const icon = createImageIcon(spot.image);
    const marker = L.marker([spot.lat, spot.lng], { icon }).addTo(map);
    marker.on("click", () => showSpotDetail(spot));

    const card = document.createElement("div");
    card.className = "spot-card";
    card.innerHTML = `
    <img src="${spot.image}" alt="${spot.name}">
    <p>${spot.name}</p>
  `;
    card.onclick = () => showSpotDetail(spot);
    document.getElementById("spotGallery").appendChild(card);
});
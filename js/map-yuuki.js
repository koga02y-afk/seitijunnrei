const map = L.map("map").setView([34.2855, 134.0433], 11); // 香川県中心

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const spots = [
    {
        name: "丸亀城",
        lat: 34.2896,
        lng: 133.7986,
        image: "images/yuuki_marugame.jpg",
        description: "友奈たちが訪れた歴史ある城跡。"
    },
    {
        name: "中津万象園",
        lat: 34.2872,
        lng: 133.8123,
        image: "images/yuuki_banshoen.jpg",
        description: "美しい庭園と勇者部の思い出の場所。"
    },
    {
        name: "高松駅",
        lat: 34.3428,
        lng: 134.0466,
        image: "images/yuuki_takamatsu.jpg",
        description: "香川の玄関口。友奈たちの移動拠点。"
    }
];

function createImageIcon(imageUrl) {
    return L.icon({
        iconUrl: imageUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
        className: "custom-icon"
    });
}

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

function closeModal() {
    document.getElementById("spotModal").style.display = "none";
}

document.getElementById("spotModal").addEventListener("click", function (e) {
    if (e.target.id === "spotModal") {
        closeModal();
    }
});

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
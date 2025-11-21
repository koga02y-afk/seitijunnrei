function renderFilteredStamps() {
    const container = document.getElementById("savedContainer");
    container.innerHTML = "";

    const selectedWork = document.getElementById("workSelect").value;
    const selectedMonth = document.getElementById("monthSelect").value;

    const allKeys = Object.keys(localStorage).filter(key => key.startsWith("recordedSpots_"));
    let allSpots = {};

    allKeys.forEach(key => {
        if (!selectedWork || key === `recordedSpots_${selectedWork}`) {
            const data = JSON.parse(localStorage.getItem(key) || "{}");
            Object.assign(allSpots, data);
        }
    });

    const flattenedSpots = Object.entries(allSpots).flatMap(([spotId, visits]) =>
        visits.map((spot, index) => ({ ...spot, spotId, index }))
    );

    const filteredSpots = flattenedSpots.filter(spot => {
        if (!selectedMonth) return true;
        return spot.date?.startsWith(selectedMonth);
    });

    if (filteredSpots.length === 0) {
        container.innerHTML = "<p>該当するスタンプはありません。</p>";
        return;
    }

    const groupedByDate = {};
    filteredSpots.forEach(spot => {
        if (!groupedByDate[spot.date]) groupedByDate[spot.date] = [];
        groupedByDate[spot.date].push(spot);
    });

    Object.entries(groupedByDate).forEach(([date, spots]) => {
        const section = document.createElement("div");
        section.className = "date-section";

        const header = document.createElement("button");
        header.className = "date-toggle";
        header.textContent = `${date}（${spots.length}件）`;

        const content = document.createElement("div");
        content.className = "stamp-group";
        content.style.display = "none";

        header.onclick = () => {
            content.style.display = content.style.display === "none" ? "block" : "none";
        };

        spots.forEach(spot => {
            const workKey = getWorkKeyFromStorageKey(spot.spotId);
            const card = document.createElement("div");
            card.className = "saved-card";
            card.innerHTML = `
        <img src="${spot.image || 'default.jpg'}" alt="${spot.name}" class="saved-image">
        <div class="saved-info">
          <h2>${spot.name}</h2>
          <p>訪問時間: ${spot.date} ${spot.time}</p>
          <p>メモ: <textarea id="memo_${spot.spotId}_${spot.index}" oninput="editMemo('${workKey}', '${spot.spotId}', ${spot.index})">${spot.memo || ""}</textarea></p>
          <input type="file" id="image_${spot.spotId}_${spot.index}" accept="image/*">
          <button onclick="editImage('${workKey}', '${spot.spotId}', ${spot.index})">画像変更</button>
          <button onclick="deleteRecord('${workKey}', '${spot.spotId}', ${spot.index})">削除</button>
        </div>
      `;
            content.appendChild(card);
        });

        section.appendChild(header);
        section.appendChild(content);
        container.appendChild(section);
    });
}

function getWorkKeyFromStorageKey(spotId) {
    const keys = Object.keys(localStorage).filter(k => k.startsWith("recordedSpots_"));
    for (const key of keys) {
        const data = JSON.parse(localStorage.getItem(key) || "{}");
        if (data[spotId]) return key.replace("recordedSpots_", "");
    }
    return "";
}

function deleteRecord(workKey, spotId, index) {
    const key = `recordedSpots_${workKey}`;
    const data = JSON.parse(localStorage.getItem(key) || "{}");

    if (data[spotId]) {
        data[spotId].splice(index, 1);
        if (data[spotId].length === 0) {
            delete data[spotId];
        }
        localStorage.setItem(key, JSON.stringify(data));
        renderFilteredStamps();
    }
}

function editMemo(workKey, spotId, index) {
    const key = `recordedSpots_${workKey}`;
    const data = JSON.parse(localStorage.getItem(key) || "{}");
    const newMemo = document.getElementById(`memo_${spotId}_${index}`).value;

    if (data[spotId] && data[spotId][index]) {
        data[spotId][index].memo = newMemo;
        localStorage.setItem(key, JSON.stringify(data));
    }
}

function editImage(workKey, spotId, index) {
    const key = `recordedSpots_${workKey}`;
    const fileInput = document.getElementById(`image_${spotId}_${index}`);
    const file = fileInput?.files[0];
    if (!file) return alert("画像を選択してください");

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = JSON.parse(localStorage.getItem(key) || "{}");
        if (data[spotId] && data[spotId][index]) {
            data[spotId][index].image = e.target.result;
            localStorage.setItem(key, JSON.stringify(data));
            renderFilteredStamps();
        }
    };
    reader.readAsDataURL(file);
}

window.onload = renderFilteredStamps;
const modal = document.getElementById("modal");
const newPlanBtn = document.getElementById("newPlanBtn");
const closeModal = document.getElementById("closeModal");
const createPlan = document.getElementById("createPlan");
const animeSelect = document.getElementById("animeSelect");

newPlanBtn.onclick = () => {
  modal.style.display = "flex";
};

closeModal.onclick = () => {
  modal.style.display = "none";
  modal.dataset.editingId = "";
};

createPlan.onclick = () => {
  const title = document.getElementById("title").value;
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  const anime = animeSelect.value;
  const plans = JSON.parse(localStorage.getItem("travelPlans") || "[]");

  const editingId = modal.dataset.editingId;

  let plan;

  if (editingId) {
    const index = plans.findIndex(p => p.id == editingId);
    if (index !== -1) {
      plans[index] = { ...plans[index], title, start, end, anime };
      plan = plans[index];
      localStorage.setItem("travelPlans", JSON.stringify(plans));
    }
    modal.dataset.editingId = "";
  } else {
    plan = { title, start, end, anime, id: Date.now() };
    plans.push(plan);
    localStorage.setItem("travelPlans", JSON.stringify(plans));
  }

  // 保存して遷移
  localStorage.setItem("currentPlan", JSON.stringify(plan));
  localStorage.setItem("selectedAnime", anime);

  modal.style.display = "none";
  window.location.href = "schedule.html"; // ← ここで遷移
};

window.onload = () => {
  const planList = document.getElementById("planList");
  const plans = JSON.parse(localStorage.getItem("travelPlans") || "[]");

  if (plans.length === 0) {
    planList.innerHTML = "<p>まだ旅行計画がありません。</p>";
    return;
  }

  plans.forEach(plan => {
    const div = document.createElement("div");
    div.className = "plan-card";
    div.dataset.id = plan.id;

    // 削除ボタンを追加
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = (e) => {
      e.stopPropagation(); // 親のクリックイベントを防ぐ
      deletePlan(plan.id);
    };

    div.innerHTML = `
    <h3>${plan.title}</h3>
    <p>開始日: ${plan.start}</p>
    <p>終了日: ${plan.end}</p>
    <p>作品: ${formatAnime(plan.anime)}</p>
  `;
    div.appendChild(deleteBtn);

    div.onclick = () => {
      localStorage.setItem("currentPlan", JSON.stringify(plan));
      localStorage.setItem("selectedAnime", plan.anime || "");
      window.location.href = "schedule.html";
    };

    planList.appendChild(div);
  });
};

function deletePlan(id) {
  const plans = JSON.parse(localStorage.getItem("travelPlans") || "[]");
  const updated = plans.filter(p => p.id !== id);
  localStorage.setItem("travelPlans", JSON.stringify(updated));
  location.reload(); // 一覧更新
}

function openEditModal(planId) {
  const plans = JSON.parse(localStorage.getItem("travelPlans") || "[]");
  const plan = plans.find(p => p.id === planId);
  if (!plan) return;

  document.getElementById("title").value = plan.title;
  document.getElementById("startDate").value = plan.start;
  document.getElementById("endDate").value = plan.end;
  animeSelect.value = plan.anime || "";

  modal.dataset.editingId = planId;
  modal.style.display = "flex";
}

function formatAnime(code) {
  switch (code) {
    case "zombielandsaga": return "ゾンビランドサガ";
    case "lovelive": return "ラブライブ！サンシャイン!!";
    default: return "未選択";
  }
}
const form = document.getElementById("planForm");
const savedPlans = document.getElementById("savedPlans");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const plan = {
    destination: document.getElementById("destination").value,
    startDate: document.getElementById("startDate").value,
    endDate: document.getElementById("endDate").value,
    budget: document.getElementById("budget").value,
    items: document.getElementById("items").value,
    savedAt: new Date().toLocaleString()
  };

  const plans = JSON.parse(localStorage.getItem("travelPlans") || "[]");
  plans.push(plan);
  localStorage.setItem("travelPlans", JSON.stringify(plans));
  displayPlans();
  form.reset();
});

function displayPlans() {
  savedPlans.innerHTML = "";
  const plans = JSON.parse(localStorage.getItem("travelPlans") || "[]");

  if (plans.length === 0) {
    savedPlans.innerHTML = "<p>まだ保存された計画はありません。</p>";
    return;
  }

  plans.forEach((plan, index) => {
    const div = document.createElement("div");
    div.className = "plan-card";
    div.innerHTML = `
      <h3>${plan.destination}</h3>
      <p>🗓️ ${plan.startDate} ～ ${plan.endDate}</p>
      <p>💰 予算：${plan.budget}円</p>
      <p>🎒 持ち物：${plan.items}</p>
      <p>保存日時：${plan.savedAt}</p>
      <button onclick="deletePlan(${index})">🗑️ 削除</button>
    `;
    savedPlans.appendChild(div);
  });
}

function deletePlan(index) {
  const plans = JSON.parse(localStorage.getItem("travelPlans") || "[]");
  plans.splice(index, 1);
  localStorage.setItem("travelPlans", JSON.stringify(plans));
  displayPlans();
}

window.onload = displayPlans;
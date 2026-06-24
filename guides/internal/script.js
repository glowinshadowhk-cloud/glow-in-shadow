function getEnergyMessage(score) {
  if (score <= 2) {
    return {
      level: "相對穩定",
      message: "你的能量目前相對穩定。仍然可以留意那些偶爾讓你不自覺繃緊或勉強自己的時刻。",
    };
  }
  if (score <= 5) {
    return {
      level: "正在流失",
      message: "有些隱形模式正在消耗你。先選一個最有感覺的練習，替自己收回一點空間。",
    };
  }
  if (score <= 8) {
    return {
      level: "已經消耗很久",
      message: "你可能已經撐了一段時間。這不是你不夠強，而是你一直在承擔太多。今天請把少做一點也當成照顧。",
    };
  }
  return {
    level: "現在真的很累",
    message: "你需要的不是再努力一點，而是減少負荷和尋找支持。先選最輕的一個練習；如果疲憊持續影響生活，也值得尋求專業協助。",
  };
}

function updateEnergyResult() {
  const checks = [...document.querySelectorAll(".energy-check")];
  const count = checks.filter((item) => item.checked).length;
  const result = getEnergyMessage(count);
  document.querySelector("#energy-count").textContent = count;
  document.querySelector("#energy-level").textContent = result.level;
  document.querySelector("#energy-message").textContent = result.message;
}

if (typeof document !== "undefined") {
  document.querySelectorAll(".energy-check").forEach((item) => {
    item.addEventListener("change", updateEnergyResult);
  });
}

if (typeof module !== "undefined") {
  module.exports = { getEnergyMessage };
}

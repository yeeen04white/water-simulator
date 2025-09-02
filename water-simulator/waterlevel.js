let level = 70; // 初始水位

function useWater(change) {
  level -= change; 
  if (level > 100) level = 100;
  if (level < 0) level = 0;

  document.getElementById("water").style.width = level + "%";
  document.getElementById("level").innerText = "当前水位：" + level + "%";

  if (change > 0) {
    document.getElementById("message").innerText = "⚠️ 你浪费了 " + change*10 + "L 水！";
  } else {
    document.getElementById("message").innerText = "✅ 你节约了 " + (-change*10) + "L 水！";
  }
}

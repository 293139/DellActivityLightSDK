let colors = ["red", "amber", "green", "blue", "cyan", "magenta", "white"];
let i = 0;

setInterval(() => {
  chrome.activityLight.setColor(colors[i]); // Or whatever the SDK function is named
  i = (i + 1) % colors.length;
}, 500); // 500ms = half a second per color

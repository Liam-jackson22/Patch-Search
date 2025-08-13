let tabCounter = 0;
const tabBar = document.getElementById("tabBar");
const tabContent = document.getElementById("tabContent");

document.getElementById("newTab").addEventListener("click", () => {
  const tabId = `tab-${++tabCounter}`;
  const tab = document.createElement("div");
  tab.className = "tab";
  tab.textContent = `Game ${tabCounter}`;
  tab.dataset.id = tabId;

  tab.addEventListener("click", () => activateTab(tabId));

  tabBar.appendChild(tab);

  const iframe = document.createElement("iframe");
  iframe.src = "https://makecode.microbit.org/#editor"; // Replace with your game URL
  iframe.id = tabId;
  iframe.style.display = "none";
  tabContent.appendChild(iframe);

  activateTab(tabId);
});

function activateTab(id) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.id === id);
  });
  document.querySelectorAll("iframe").forEach(frame => {
    frame.style.display = frame.id === id ? "block" : "none";
  });
}

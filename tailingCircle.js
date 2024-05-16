document.addEventListener("mousemove", (e) => {
  const circleEl = document.getElementsByClassName("circle")[0];

  const x = e.clientX;
  const y = e.clientY;

  circleEl.style.opacity = "1";
  circleEl.style.transform = "translate(-50%, -50%)";
  circleEl.style.top = y + "px";
  circleEl.style.left = x + "px";
});

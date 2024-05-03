let count = 0;

document.onclick = (event) => {
  if (count > 3) {
    const circles = document.getElementsByClassName("circle");
    Array.from(circles).forEach((element) => {
      document.body.removeChild(element);
      count--;
    });
  }
  const el = document.createElement("div");
  const height = Math.floor(Math.random() * 150) + 50;
  el.classList.add("circle");
  el.style.aspectRatio = 1;
  el.style.height = height + "px";
  el.style.position = "fixed";
  el.style.top = event.clientY + "px";
  el.style.left = event.clientX + "px";
  el.style.borderRadius = "100%";
  el.style.border = "1px solid red";
  count++;
  document.body.appendChild(el);
};

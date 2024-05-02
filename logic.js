let count = 0;

// const body = document.getElementsByTagName("body")[0];

// body.addEventListener("click", (event) => {
//   console.log("click", JSON.stringify(event));
//   const el = document.createElement("div");
//   el.style.aspectRatio = 1;
//   const height = Math.random() * 10;
//   el.style.height = height;
//   el.style.position = "fixed";
//   el.style.top = event.clientY;
//   el.style.left = event.clientX;
//   el.style.backgroundColor = "#fff";
//   console.log(el);

window.onload = () => {
  const observer = new MutationObserver(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      console.log(entries);
    });
    const elements = document.querySelectorAll(".circle");
    Array.from(elements).forEach((element) => {
      intersectionObserver.observe(element);
    });
  });
  observer.observe(document.body, {
    childList: true,
  });
};

document.onmousemove = (event) => {
  console.log({ event });
  if (count === 5000) {
    const circles = document.getElementsByClassName("circle");
    console.log(circles);
    Array.from(circles).forEach((element) => {
      document.body.removeChild(element);
      count--;
    });
  }
  const el = document.createElement("div");
  const height = Math.floor(Math.random() * 150) + 50;
  console.log(height);
  el.classList.add("circle");
  el.style.aspectRatio = 1;
  el.style.height = height + "px";
  el.style.position = "fixed";
  el.style.top = event.clientY + "px";
  el.style.left = event.clientX + "px";
  //   el.style.backgroundColor = "#fff";
  el.style.borderRadius = "100%";
  el.style.border = "1px solid red";
  console.log(el);
  count++;
  document.body.appendChild(el);
};

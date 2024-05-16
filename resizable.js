window.onload = () => {
  const resizableComp = document.getElementById("resizable");
  const resizer = document.getElementById("resizer");

  let initialX;

  const resize = (e) => {
    if (initialX) {
      const changeX = resizableComp.getBoundingClientRect().right - e.clientX;
      resizableComp.style.width = resizableComp.offsetWidth - changeX + "px";
      console.log(resizableComp.offsetWidth, changeX);
    }
  };

  resizer.addEventListener("mousedown", (e) => {
    initialX = e.clientX;
    window.addEventListener("mousemove", resize);
  });

  window.addEventListener("mouseup", (e) => {
    initialX = null;
    window.removeEventListener("mousemove", resize);
  });
};

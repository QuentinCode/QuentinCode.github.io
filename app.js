const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

scroll.on("scroll", () => {
  if (document.querySelector(".color.is-inview")) {
    document.body.style.background = "#FAD5B1";
  } else {
    document.body.style.background = "#B4EFFF";
  }
});

//drag&drop

const draggableElement = document.getElementById("key");
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

draggableElement.addEventListener("mousedown", dragStart);
draggableElement.addEventListener("mouseup", dragEnd);
draggableElement.addEventListener("mouseout", dragEnd);
draggableElement.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  isDragging = true;
  draggableElement.style.cursor = "grabbing";
}

function dragEnd(e) {
  isDragging = false;
  draggableElement.style.cursor = "grab";
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, draggableElement);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

const key = document.querySelector("#key");
key.style.display = "none";

const size = 20;
document.documentElement.style.cursor = `url(${key.src}), auto`;
document.documentElement.style.cursor = `url(${key.src}) ${size / 2} ${
  size / 2
}, auto`;

//transform

const rond = document.querySelector(".rond");
const error = document.querySelector(".error404")

rond.addEventListener("click", () => {
  rond.style.width = "100vw";
  rond.style.height = "100vh";
  rond.style.borderRadius = "0%";
  rond.style.transform = "translateX(0)";
  rond.style.transformOrigin = "center";
  rond.style.background = "#FAD5B1"

  setTimeout(function() {
    const h2 = document.querySelector('.home')
    h2.style.display = "flex";
      setTimeout(function() {
        h2.style.opacity = "1";
      }, 800)
  }, 1000);

});

// const target = document.createElement("div");
// target.style.backgroundColor = "red";
// target.style.width = "10px";
// target.style.height = "10px";
// target.style.position = "fixed";
// target.style.left = `${window.innerWidth / 2 - 73}px`;
// target.style.top = `${window.innerHeight / 2 - 5}px`;
// document.body.appendChild(target);

// draggableElement.addEventListener("mouseup", function(e) {

//     if () {
//       rond.style.width = "100vw";
//       rond.style.height = "100vh";
//       rond.style.borderRadius = "0%";
//       rond.style.transform = "translateX(0)";
//       rond.style.transformOrigin = "center";
//     }
//   });

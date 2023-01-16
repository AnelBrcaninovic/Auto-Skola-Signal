var nav = document.querySelector("nav");
let is_opened = false;
//  Navbar Animations  //
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("bg-dark", "shadow");
  } else if (is_opened == false) {
    nav.classList.remove("bg-dark", "shadow");
  } else {
    nav.classList.add("bg-dark", "shadow");
  }
});
function background() {
  if (is_opened == false) {
    nav.classList.add("bg-dark", "shadow");
    is_opened = true;
  } else if (window.pageYOffset < 100) {
    setTimeout(function () {
      nav.classList.remove("bg-dark", "shadow");
      is_opened = false;
    }, 125);
  }
}
addEventListener("load", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("bg-dark", "shadow");
  }
});

//  Delay and Offset Function  //
function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top,
  };
}

const p = document.getElementsByClassName("fade_from_left_to_right");

//  Animation for fade_in_from_left_to_right //
addEventListener("load", async function () {
  for (let i = 0; i < p.length; i++) {
    console.log(getOffset(p[0]).top);
    if (getOffset(p[i]).top < 680) {
      await delay(50);
      p[i].classList.remove("transform");
      p[i].classList.add("to_animate");
    }
  }
});

addEventListener("scroll", async function () {
  for (let i = 0; i < p.length; i++) {
    if (getOffset(p[i]).top < 680) {
      p[i].classList.remove("transform");
      p[i].classList.add("to_animate");
      await delay(50);
    }
  }
});

// Fade In Animation for cards section //
const card = document.getElementsByClassName("to_fade_in");
addEventListener("scroll", async function () {
  if (getOffset(card[0]).top < 680) {
    await delay(1000);
    card[0].classList.remove("opacity");
    card[0].classList.add("fade_in");
    await delay(500);

    card[2].classList.remove("opacity");
    card[2].classList.add("fade_in");
    await delay(500);

    card[1].classList.remove("opacity");
    card[1].classList.add("fade_in");
  }
});

addEventListener("load", async function () {
  if (getOffset(card[0]).top < 680) {
    await delay(1500);

    card[0].classList.remove("opacity");
    card[0].classList.add("fade_in");
    await delay(500);

    card[2].classList.remove("opacity");
    card[2].classList.add("fade_in");
    await delay(500);

    card[1].classList.remove("opacity");
    card[1].classList.add("fade_in");
  }
});

// Counter Animation //

const headers = [];

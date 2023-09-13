locations = [
  "Local Server",
  "New York City",
  "Cambridge",
  "Atlanta",
  "New York City",
  "Newark",
  "San Francisco",
];

let scrollCount = 0;

window.addEventListener("scroll", function handleScroll(event) {
  if (window.scrollY > this.lastScrollTop || 0) {
    scrollCount++;
    console.log(scrollCount);
  } else if (window.scrollY < this.lastScrollTop) {
    scrollCount--;
    if (scrollCount < 0) {
      scrollCount = 0;
    }
  }
  //console.log(scrollCount);
  // above part inspired from: https://bobbyhadz.com/blog/detect-the-scroll-direction-using-javascript#:~:text=Set%20the%20scroll%20event%20on,the%20user%20is%20scrolling%20up.

  if (scrollCount >= 600) {
    stageSix();
  } else if (scrollCount == 500) {
    stageFive();
  } else if (scrollCount == 400) {
    stageFour();
  } else if (scrollCount == 300) {
    stageThree();
  } else if (scrollCount == 200) {
    stageTwo();
  } else if (scrollCount == 100) {
    stageOne();
  } else if (scrollCount == 1) {
    stageZero();
  }
  this.lastScrollTop = window.scrollY;
});

function changeTitle(newTitle) {
  var currentLocation = document.getElementById("location");
  currentLocation.textContent = newTitle;
}

function stageZero() {
  console.log("Stage 0: Local Server");
  changeTitle(locations[0]);
}

function stageOne() {
  console.log("Stage 1: New York");
  changeTitle(locations[1]);

  // adding NYPL Image
  const image = document.createElement("img");
  image.src = "images/step1_4/NYPL.png";
  const imageContainer = document.getElementById("NYPL_image");
  imageContainer.appendChild(image);
}

function stageTwo() {
  console.log("Stage 2: Cambridge");
  changeTitle(locations[2]);

  // adding rent  Image
  const image = document.createElement("img");
  image.src = "images/step2/Protest.png";
  const imageContainer = document.getElementById("rent_image");
  imageContainer.appendChild(image);
}

function stageThree() {
  console.log("Stage 3: Atlanta");
  changeTitle(locations[3]);

  // adding King Image
  const image = document.createElement("img");
  image.src = "images/step3/king.png";
  const imageContainer = document.getElementById("king_image");
  imageContainer.appendChild(image);
}

function stageFour() {
  console.log("Stage 4: NYC again");
  changeTitle(locations[4]);

  // adding King Image
  const image = document.createElement("img");
  image.src = "images/step1_4/lion.png";
  const imageContainer = document.getElementById("lion_image");
  imageContainer.appendChild(image);
}

function stageFive() {
  console.log("Stage 5: Newark");
  changeTitle(locations[5]);

  // adding Museum Image
  const image = document.createElement("img");
  image.src = "images/step5/museum.png";
  const imageContainer = document.getElementById("museum_image");
  imageContainer.appendChild(image);
}

function stageSix() {
  console.log("Stage 6: San Francisco");
  changeTitle(locations[6]);

  // adding Politician Image
  const image = document.createElement("img");
  image.src = "images/step6/politician.png";
  const imageContainer = document.getElementById("politician_image");
  imageContainer.appendChild(image);
  // adding Wifes Image
  const image2 = document.createElement("img");
  image2.src = "images/step6/wife.png";
  const imageContainer2 = document.getElementById("wifey_image");
  imageContainer2.appendChild(image2);
}

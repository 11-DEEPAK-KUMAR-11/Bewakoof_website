import { Footer } from "../components/footer/footer.js";
import { dispwbs } from "../components/homepage_scripts/women_bstsell.js"
import { dispmbs } from "../components/homepage_scripts/men_bstsell.js"
import { dispwtshirt } from "../components/homepage_scripts/women_tshirt.js"
import { displayData } from "../components/homepage_scripts/men_tshirt.js"
import { homedisp } from "../components/homepage_scripts/homepro.js"

let Foo = document.getElementById("footer");
Foo.innerHTML = Footer();

const tshirtData = [
  {
    imageUrl:
      "https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-106-1639137606-1.jpg",
    shirtNmae: "Jet Black Half Sleeve T-Shirt",
    disPrice: "₹ 299 3̶9̶9̶",
    price: 299,
    member: "₹319 For TriBe Members",
    brand: "Puma",
    size: "X",
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/white-half-sleeve-t-shirt-105-1637995614-1.jpg",
    shirtNmae: "Jet White Half Sleeve T-Shirt",
    disPrice: "₹ 250 3̶9̶9̶",
    price: 250,
    member: "₹319 For TriBe Members",
    brand: "Puma",
    size: "L",
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/jet-black-full-sleeve-t-shirt-1094-1637995554-1.jpg",
    shirtNmae: "Jet Black Half Sleeve T-Shirt",
    disPrice: "₹ 249 3̶9̶9̶",
    price: 249,
    member: "₹300 For TriBe Members",
    brand: "Adidas",
    size: "L",
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/navy-blue-full-sleeve-t-shirt-1092-1637269396-2.jpg",
    shirtNmae: "Navy Blue Sleeve T-Shirt",
    disPrice: "₹ 225 3̶9̶9̶",
    price: 225,
    member: "₹350 For TriBe Members",
    brand: "Adidas",
    size: "XL",
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/fire-fist-relaxed-fit-half-sleeve-t-shirt-387573-1636266570-1.gif",
    shirtNmae: "Men Black Fire Fist Relaxed Fit T-Shirt",
    disPrice: "₹ 299 8̶9̶9̶",
    price: 299,
    member: "₹549 For TriBe Members",
    brand: "Nike",
    size: "XL",
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/misty-hills-halftone-half-sleeve-t-shirt-black-men-s-printed-t-shirts-286043-1600401657.jpg",
    shirtNmae: "Misty Hills Halftone Sleeve Fit T-Shirt",
    disPrice: "₹ 200 3̶9̶9̶",
    price: 200,
    member: "250 For TriBe Members",
    brand: "Nike",
    size: "M",
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/white-full-sleeve-t-shirt-1093-1637995974-1.jpg",
    shirtNmae: "White Full Sleeve Fit T-Shirt",
    disPrice: "₹ 245 8̶9̶9̶",
    price: 245,
    member: "₹549 For TriBe Members",
    brand: "Reebok",
    size: "XS",
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/yeager-relaxed-fit-half-sleeve-t-shirt-387570-1636266587-1.gif",
    shirtNmae: "Yeager Relaxed Fit Half Sleeve Fit T-Shirt",
    disPrice: "₹ 299 8̶9̶9̶",
    price: 299,
    member: "₹559 For TriBe Members",
    brand: "Nike",
    size: "2XL",
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/torque-half-sleeve-t-shirt-459652-1640331745-1.jpg",
    shirtNmae: "Torque Half Sleeve T-Shirt",
    disPrice: "₹ 225 3̶9̶9̶",
    price: 225,
    member: "₹369 For TriBe Members",
    beand: "Reebok",
    size: "2XL",
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/create-good-stories-half-sleeve-t-shirt-black-283013-1640064978-4.jpg",
    shirtNmae: "Create a good Stories Half SleeveT-Shirt",
    disPrice: "₹ 250 4̶9̶9̶",
    price: 250,
    member: "₹549 For TriBe Members",
    brand: "Puma",
    size: "2XL",
  },
];
const wtshirtData = [
  {
    imgUrl:
      "https://images.bewakoof.com/t320/jet-black-round-neck-3-4th-sleeve-t-shirt-women-s-plain-round-neck-3-4-sleeve-t-shirts-105769-1531304631.jpg",
    shirtname: "Jet Black Round Neck 3/4th Sleeve T-Shirts",
    disPrice: "₹ 250 3̶9̶9̶",
    price: 250,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/bachelor-button-wave-ride-revers-panel-t-shirt-463924-1643559978-1.jpg",
    shirtname: "Upbeat reverse color Block Half T-Shirt",
    disPrice: "₹ 225 7̶9̶9̶",
    price: 225,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/peek-a-bros-dl-women-s-christmas-boyfriend-t-shirt-468848-1645207183-1.jpg",
    shirtname: "Not So Wine Cut N Sew Half Sleeve T-Shirt",
    disPrice: "₹ 250 7̶9̶9̶",
    price: 250,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/jet-black-half-sleeve-t-shirt-232388-1635410396-5.jpg",
    shirtname: "Jet Black  Half Sleeve T-Shirt",
    disPrice: "₹ 299 4̶4̶9̶",
    price: 299,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/women-s-printed-short-shirt-376604-1638210667-1.jpg",
    shirtname: "Women Printed Short Shirt",
    disPrice: "₹ 225 1̶3̶9̶9̶",
    price: 225,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/bachelor-button-aop-half-sleeves-t-shirt-463950-1643559798-1.jpg",
    shirtname: "Upbeat Blue Abstract Aop Half Slleeve T-Shirt",
    disPrice: "₹ 280 1̶3̶9̶9̶",
    price: 280,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/bachelor-bitton-snow-white-color-block-boyfriend-t-shirts-463923-1643559757-1.jpg",
    shirtname: "Upbeat Blue Color Block Boyfriend T-Shirt",
    disPrice: "₹ 299 7̶9̶9̶",
    price: 299,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/coca-cola-hyper-463263-1645165108-1.jpg",
    shirtname: "its Real Thing Coca Cola T-Shirt",
    disPrice: "₹ 260 7̶9̶9̶",
    price: 260,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/purple-portion-dark-sapphire-layer-cut-n-sew-sleeve-t-shirt-447911-1641389961-1.jpg",
    shirtname: "Not So Wine Layer Cut N Sew Sleeve T-Shirt",
    disPrice: "₹ 260 8̶9̶9̶",
    price: 260,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/stay-motivated-varsity-half-sleeve-t-shirt-458271-1642101555-1.jpg",
    shirtname: "Stay Motivated Varsity Half Sleeve T-Shirt",
    disPrice: "₹ 299 7̶9̶9̶",
    price: 299,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/whatever-aop-short-top-362299-1640343489-5.jpg",
    shirtname: "Women Printed Short Shirt",
    disPrice: "₹ 280 7̶9̶9̶",
    price: 280,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/bewakoof-customizable-round-neck-t-shirt-443869-1638882466-1.jpg",
    shirtname: "Cutomizable  Round Neck T-Shirt",
    disPrice: "₹ 225 8̶3̶0̶",
    price: 225,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/street-wear-boyfriend-fit-t-shirt-445466-1643282373-1.jpg",
    shirtname: "Women's Mickey Tie & Dye OversizwdT-Shirt",
    disPrice: "₹ 245 8̶9̶9̶",
    price: 245,
  },
];
const mbsData = [
  {
    imageUrl:
      "https://images.bewakoof.com/t540/freedom-feather-half-sleeve-t-shirt-black-340007-1639137613-1.jpg",
    shirtNmae: "Black Full Sleeve Shirt",
    disPrice: "₹ 599 8̶9̶9̶",
    price: 599,
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/pocket-jerry-half-sleeve-t-shirt-tjl-241993-1637854939-1.jpg",
    shirtNmae: "Gyaan Half Half Sleeve T-Shirt",
    disPrice: "₹ 750 8̶9̶9̶",
    price: 750,
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/conquer-strip-half-sleeve-t-shirt-navy-blue-300968-1639374597-1.jpg",
    shirtNmae: "Conquer Strip Half Sleeve T-Shirt",
    disPrice: "₹ 399 8̶9̶9̶",
    price: 399,
  },
  {
    imageUrl:
    "https://images.bewakoof.com/t540/upbeat-blue-verticle-pocket-stripe-t-shirt-463932-1643802327-1.jpg",
    name: "Men's Solid Casual Long Kurta",
    disPrice: "₹ 1020 8̶9̶9̶",
    price: 1020,
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/upbeat-blue-camo-half-sleeve-t-shirt-463938-1643802243-1.jpg",
    shirtNmae: "UpBeat Blue Camo Half Slleve T-Shirt",
    disPrice: "₹ 599 8̶9̶9̶",
    price: 599,
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/keep-listening-half-sleeve-t-shirt-465258-1642658859-1.jpg",
    shirtNmae: "Keep Listining Half Sleeve T-Shirt",
    disPrice: "₹ 399 7̶9̶9̶",
    price: 399,
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/clan-nightmare-men-s-t-shirts-387567-1634624545-1.jpg",
    shirtNmae: "Clan Night Mare Round Neck R-shirt",
    disPrice: "₹ 599 8̶9̶9̶",
    price: 599,
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/mickey-trio-call-half-sleeve-t-shirt-dl-276320-1637854957-1.jpg",
    shirtNmae: "Mickey Trio Call Half Sleeve T-Shirt",
    disPrice: "₹ 349 3̶9̶9̶",
    price: 349,
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/striped-captain-america-printed-badge-half-sleeve-t-shirt-avl-234123-1637995862-1.jpg",
    shirtNmae: "Trust Your Full Ability Full Sleeve  T-Shirt ",
    disPrice: "₹ 399 9̶9̶9̶",
    price: 399,
  },
  {
    imageUrl:
      "https://images.bewakoof.com/t320/avengers-all-stars-avl-468862-1644818333-1.jpg",
    shirtNmae: "Pocket Jerry Half Sleeve T-Shirt (TJL)",
    disPrice: "₹ 349 9̶9̶9̶",
    price: 349,
  },
];
const wbsData = [
  {
    imgUrl:
      "https://images.bewakoof.com/t320/street-wear-boyfriend-fit-t-shirt-445466-1643282373-1.jpg",
    shirtname: "Women's Mickey Tie & Dye OversizwdT-Shirt",
    disPrice: "₹ 599 8̶9̶9̶",
    member: "₹559 For Tribe Member",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/hang-loose-relax-boyfriend-t-shirt-women-s-printed-boyfriend-t-shirts-387816-1628673729.jpg",
    shirtname: "Hang Loose Relax Boyfriend T-Shirt",
    disPrice: "₹ 399 7̶9̶9̶",
    member: "₹349 For Tribe Member",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/school-of-witchcraft-boyfriend-t-shirt-475772-1645435067-1.jpg",
    shirtname: "School of Witchcraft Boyfriend T-Shirt",
    disPrice: "₹ 275 7̶9̶9̶",
    member: "₹259 For Tribe Member",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/furious-donald-round-neck-3-4-sleeve-t-shirts-black-dl-women-s-printed-round-neck-3-4-sleeve-t-shirts-321445-1610356212.jpg",
    shirtname: "Furious Donald",
    disPrice: "₹ 299 7̶9̶9̶",
    member: "₹279 For Tribe Member",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/white-boyfriend-t-shirt-119167-1635867969-5.jpg",
    shirtname: "White Boyfriend T-Shirt",
    disPrice: "₹ 349 7̶9̶9̶",
    member: "₹300 For Tribe Member",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/bella-tokyo-boyfriend-t-shirt-270503-1635869927-4.jpg",
    shirtname: "Bella Tokoyo Boyfriend T-Shirt",
    disPrice: "₹ 399 7̶9̶9̶",
    member: "₹349 For Tribe Member",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/shake-off-boyfriend-t-shirt-476636-1645523734-1.jpg",
    shirtname: "Shake off Boyfriend T-Shirt",
    disPrice: "₹ 275  9̶9̶9̶",
    member: "₹259 For Tribe Members",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/shake-off-half-sleeve-t-shirt-476632-1645523691-1.jpg",
    shirtname: "Shake off Half Sleeve T-Shirt",
    disPrice: "₹ 275  9̶9̶9̶",
    member: "₹259 For Tribe Members",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/peek-a-bros-dl-women-s-christmas-boyfriend-t-shirt-468848-1645207183-1.jpg",
    shirtname: "Peek-A- Bros (DL) T-Shirts -Shirt",
    disPrice: "₹ 399 7̶9̶9̶",
    member: "₹369 For Tribe Members",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/jet-black-round-neck-3-4th-sleeve-t-shirt-women-s-plain-round-neck-3-4-sleeve-t-shirts-105769-1531304631.jpg",
    shirtname: "Jet Black Round Neck 3/4th Sleeve T-Shirts",
    disPrice: "₹ 299 3̶9̶9̶",
    member: "₹269 For Tribe Members",
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/hang-loose-relax-boyfriend-t-shirt-women-s-printed-boyfriend-t-shirts-387816-1628673729.jpg",
    shirtname: "Hang Loose Relax Boyfriend T-Shirt",
    disPrice: "₹ 250 7̶9̶9̶",
    price: 250,
  },
  {
    imgUrl:
      "https://images.bewakoof.com/t320/school-of-witchcraft-boyfriend-t-shirt-475772-1645435067-1.jpg",
    shirtname: "School of Witchcraft Boyfriend T-Shirt",
    disPrice: "₹ 299 7̶9̶9̶",
    price: 299,
  },
];

localStorage.setItem("tshirt", JSON.stringify(tshirtData));
localStorage.setItem("wtshirt", JSON.stringify(wtshirtData));
localStorage.setItem("mbs", JSON.stringify(mbsData));
localStorage.setItem("wbs", JSON.stringify(wbsData));

let tshirtArr = JSON.parse(localStorage.getItem("tshirt")) || [];
let wtshirtArr = JSON.parse(localStorage.getItem("wtshirt")) || [];
let mbsArr = JSON.parse(localStorage.getItem("mbs")) || [];
let wbsArr = JSON.parse(localStorage.getItem("wbs")) || [];
let x1;
let x2;
let x3;
let x4;
let x5;
let x6;
let w = 0;
let x = 0;
let y = 0;
let z = 0;

document.getElementById("slide_btn_prev").addEventListener("click", slidingImg);
document.getElementById("slide_btn_next").addEventListener("click", slidingImg);
document.getElementById("slide1-button-prev").addEventListener("click", slidingImage);
document.getElementById("slide1-button-next").addEventListener("click", slidingImage);
document.getElementById("slide2_btn_prev").addEventListener("click", slidingImg1);
document.getElementById("slide2_btn_next").addEventListener("click", slidingImg1);
document.getElementById("slide3-btn-prev").addEventListener("click", slidingImage1);
document.getElementById("slide3-btn-next").addEventListener("click", slidingImage1);

// Display products on homepage
homedisp();

displayData(tshirtArr);
dispwtshirt(wtshirtArr);
dispmbs(mbsArr);
dispwbs(wbsArr);

// Mens slider-1 start here
mstart1();
function mstart1() {
  let img_arr = [
    "./homepage/mens/slider1/img1.jpg",
    "./homepage/mens/slider1/img2.gif",
    "./homepage/mens/slider1/img3.jpg",
    "./homepage/mens/slider1/img4.jpg",
  ];

  let ss1 = document.getElementById("ss1");

  let i = 0;

  x1 = setInterval(function () {
    if (i === img_arr.length - 2) {
      i = 0;
    }
    ss1.innerHTML = "";

    let img1 = document.createElement("img");
    img1.src = `${img_arr[i]}`;

    let img2 = document.createElement("img");
    img2.src = `${img_arr[i + 1]}`;

    let img3 = document.createElement("img");
    img3.src = `${img_arr[i + 2]}`;
    ss1.append(img1, img2, img3);
    i++;
  }, 5000);
}

// Mens slider-2 start here
mstart2();
function mstart2() {
  let img_arr = [
    "./homepage/mens/slider2/img1.gif",
    "./homepage/mens/slider2/img2.gif",
    "./homepage/mens/slider2/img3.webp",
    "./homepage/mens/slider2/img4.gif",
  ];

  let ss2 = document.getElementById("ss2");

  let i = 0;

  x2 = setInterval(function () {
    if (i === img_arr.length - 2) {
      i = 0;
    }
    ss2.innerHTML = "";

    let img1 = document.createElement("img");
    img1.src = `${img_arr[i]}`;

    let img2 = document.createElement("img");
    img2.src = `${img_arr[i + 1]}`;

    let img3 = document.createElement("img");
    img3.src = `${img_arr[i + 2]}`;
    ss2.append(img1, img2, img3);
    i++;
  }, 5000);
}

// Womens slider-1 start here

wstart1();
function wstart1() {
  let img_arr = [
    "./homepage/womens/slider1/img1.gif",
    "./homepage/womens/slider1/img2.gif",
    "./homepage/womens/slider1/img3.jpg",
    "./homepage/womens/slider1/img4.webp",
  ];

  let ss3 = document.getElementById("ss3");

  let i = 0;

  x3 = setInterval(function () {
    if (i === img_arr.length - 2) {
      i = 0;
    }
    ss3.innerHTML = "";

    let img1 = document.createElement("img");
    img1.src = `${img_arr[i]}`;

    let img2 = document.createElement("img");
    img2.src = `${img_arr[i + 1]}`;

    let img3 = document.createElement("img");
    img3.src = `${img_arr[i + 2]}`;
    ss3.append(img1, img2, img3);
    i++;
  }, 5000);
}

// Womens slider-2 start here
wstart2();
function wstart2() {
  let img_arr = [
    "./homepage/womens/slider2/img1.jpg",
    "./homepage/womens/slider2/img2.gif",
    "./homepage/womens/slider2/img3.webp",
    "./homepage/womens/slider2/img4.gif",
  ];

  let ss4 = document.getElementById("ss4");

  let i = 0;

  x4 = setInterval(function () {
    if (i === img_arr.length - 2) {
      i = 0;
    }
    ss4.innerHTML = "";

    let img1 = document.createElement("img");
    img1.src = `${img_arr[i]}`;

    let img2 = document.createElement("img");
    img2.src = `${img_arr[i + 1]}`;

    let img3 = document.createElement("img");
    img3.src = `${img_arr[i + 2]}`;
    ss4.append(img1, img2, img3);
    i++;
  }, 5000);
}

astart1();
function astart1() {
  let img_arr = [
    "./homepage/accessories/slider1/img1.gif",
    "./homepage/accessories/slider1/img2.gif",
    "./homepage/accessories/slider1/img3.webp",
    "./homepage/accessories/slider1/img4.gif",
  ];

  let ss5 = document.getElementById("ss5");

  let i = 0;

  x5 = setInterval(function () {
    if (i === img_arr.length - 2) {
      i = 0;
    }
    ss5.innerHTML = "";

    let img1 = document.createElement("img");
    img1.src = `${img_arr[i]}`;

    let img2 = document.createElement("img");
    img2.src = `${img_arr[i + 1]}`;

    let img3 = document.createElement("img");
    img3.src = `${img_arr[i + 2]}`;
    ss5.append(img1, img2, img3);
    i++;
  }, 5000);
}

// Accessories slider-2 start here
astart2();
function astart2() {
  let img_arr = [
    "./homepage/accessories/slider2/img1.jpg",
    "./homepage/accessories/slider2/img2.gif",
    "./homepage/accessories/slider2/img3.gif",
    "./homepage/accessories/slider2/img4.gif",
  ];

  let ss6 = document.getElementById("ss6");

  let i = 0;

  x6 = setInterval(function () {
    if (i === img_arr.length - 2) {
      i = 0;
    }
    ss6.innerHTML = "";

    let img1 = document.createElement("img");
    img1.src = `${img_arr[i]}`;

    let img2 = document.createElement("img");
    img2.src = `${img_arr[i + 1]}`;

    let img3 = document.createElement("img");
    img3.src = `${img_arr[i + 2]}`;
    ss6.append(img1, img2, img3);
    i++;
  }, 5000);
}

function slidingImg() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("Tshirt_pro1").style.display = "none";
    document.getElementById("Tshirt_pro2").style.display = "block";
    document.getElementById("Tshirt_pro2").style.animation =
      " fadeVisibility .15s";
  } else {
    document.getElementById("Tshirt_pro1").style.display = "block";
    document.getElementById("Tshirt_pro1").style.animation =
      " fadeVisibility .15s";
    document.getElementById("Tshirt_pro2").style.display = "none";
  }
}

function slidingImg1() {
  z++;
  if (z % 2 !== 0) {
    console.log("in");
    document.getElementById("mbs_pro1").style.display = "none";
    document.getElementById("mbs_pro2").style.display = "block";
    document.getElementById("mbs_pro2").style.animation =
      " fadeVisibility .15s";
  } else {
    document.getElementById("mbs_pro1").style.display = "block";
    document.getElementById("mbs_pro1").style.animation =
      " fadeVisibility .15s";
    document.getElementById("mbs_pro2").style.display = "none";
  }
}

function slidingImage() {
  y++;
  if (y % 2 !== 0) {
    document.getElementById("wtshirt-pro1").style.display = "none";
    document.getElementById("wtshirt-pro2").style.display = "block";
    document.getElementById("wtshirt-pro2").style.animation =
      " fadeVisibility .5s";
  } else {
    document.getElementById("wtshirt-pro1").style.display = "block";
    document.getElementById("wtshirt-pro1").style.animation =
      " fadeVisibility .5s";
    document.getElementById("wtshirt-pro2").style.display = "none";
  }
}

function slidingImage1() {
  w++;
  if (w % 2 !== 0) {
    console.log("in");
    document.getElementById("wbs_pro1").style.display = "none";
    document.getElementById("wbs_pro2").style.display = "block";
    document.getElementById("wbs_pro2").style.animation =
      " fadeVisibility .15s";
  } else {
    document.getElementById("wbs_pro1").style.display = "block";
    document.getElementById("wbs_pro1").style.animation =
      " fadeVisibility .15s";
    document.getElementById("wbs_pro2").style.display = "none";
  }
}

let mimgArrevent=document.querySelectorAll(".mens");
// console.log(imgArrevent);
mimgArrevent.forEach(function(ele){
  // console.log(ele);
  ele.addEventListener("click",function(){
    window.location.href="products_page/product_men_page.html"
  })
})

let wimgArrevent=document.querySelectorAll(".womens");
// console.log(imgArrevent);
wimgArrevent.forEach(function(ele){
  // console.log(ele);
  ele.addEventListener("click",function(){
    window.location.href="products_page/product_women_page.html"
  })
})

let aimgArrevent=document.querySelectorAll(".accessories");
// console.log(imgArrevent);
aimgArrevent.forEach(function(ele){
  // console.log(ele);
  ele.addEventListener("click",function(){
    window.location.href="products_page/product_accessories_page.html"
  })
})


let userdata=JSON.parse(localStorage.getItem('user'));
// console.log(userdata.username);
if(userdata!=null){
document.querySelector("#username").innerText=`Hi, ${userdata.username}`;
document.querySelector('#signin').style.display="none"
document.querySelector('#heart').style.display="none"
}
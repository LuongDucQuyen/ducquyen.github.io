import imgList from "./editing/dataArray.js";
import {menu} from "./MenuList.js";
var headerImg = document.querySelector(".slider-img");
var imgbg = headerImg.getElementsByTagName("img");
var mobileMenu = document.querySelector(".mobile_menu");
var menuList = document.querySelector(".menu_list");
window.onload = function () {
  let i = imgList.length;
  let j = 1;
  setInterval(() => {
    imgbg[0].style.transform = "scalex(0)";
  }, 6000);
  setTimeout(() => {
    setInterval(() => {
      if (j === i - 1) {
        imgbg[0].src = imgList[j];
        imgbg[0].style.transform = "scalex(1)";
        j = 0;
      }
      if (j < i) {
        imgbg[0].src = imgList[j];
        j++;
        imgbg[0].style.transform = "scalex(1)";
      }
    }, 6000);
  }, 1000);
};
menuList.innerHTML = menu().join().replace(/,/g, "");
mobileMenu.onclick = (e) => {
  mobileMenu.querySelector(".mobile_menu_span").style.width = "0px";
  mobileMenu.querySelector(".mobile_menu_top").style.top = "34%";
  mobileMenu.querySelector(".mobile_menu_bottom").style.top = "34%";
  mobileMenu.querySelector(".mobile_menu_top").style.transform =
    "rotate(45deg)";
  mobileMenu.querySelector(".mobile_menu_bottom").style.transform =
    "rotate(-45deg)";
  menuList.style.left = "0px";
};
menuList.onclick = () => {
  menuList.style.left = "-110%";
  mobileMenu.querySelector(".mobile_menu_span").style.width = "100%";
  mobileMenu.querySelector(".mobile_menu_top").style.top = "0px";
  mobileMenu.querySelector(".mobile_menu_bottom").style.top = "80%";
  mobileMenu.querySelector(".mobile_menu_top").style.transform = "rotate(0deg)";
  mobileMenu.querySelector(".mobile_menu_bottom").style.transform =
    "rotate(0deg)";
};



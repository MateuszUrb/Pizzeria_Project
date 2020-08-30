(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_0__);


function showNav() {
  var nav = document.querySelector(".navbar_list_items");
  var hamburger = document.querySelector(".hamburger");
  var listItem = document.querySelectorAll(".list_item");
  var navHeader = document.querySelector("header"); // toggle hamburger navbar

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");

    for (var i = 0; i < listItem.length; i++) {
      listItem[i].style.borderBottom = "2px solid #d2401e";
    } // hamburger animation


    hamburger.classList.toggle("toggle");
    navHeader.classList.toggle("navHeaderOpacity");
  });
}

;
showNav();

function hideNav() {
  var links = document.querySelectorAll(".list_item, li");
  var hamburger = document.querySelector(".hamburger");
  links.forEach(function (el) {
    return el.addEventListener("click", function () {
      el.parentElement.classList.toggle("nav-active");
      hamburger.classList.toggle("toggle");
    });
  });
}

hideNav(); // get date for events 

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dateObj = new Date();
var month = monthNames[dateObj.getMonth()];
var day = String(dateObj.getDate()).padStart(2, '0');
var year = dateObj.getFullYear();
var output = "Available: ".concat(month, " \n ").concat(day, ", ").concat(year);
document.querySelectorAll('.events__date').forEach(function (el) {
  return el.textContent = output;
}); // animation lib

AOS.init({
  duration: 1300,
  offset: 250
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
],[[0,1]]]);
//# sourceMappingURL=../sourceMap/js/main.39a0cee3a453f2f8c631.bundle.js.map
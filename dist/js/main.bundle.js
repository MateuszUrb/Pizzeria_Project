/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/crimsontext-regular-webfont.woff2 */ "./src/assets/fonts/crimsontext-regular-webfont.woff2");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/fonts/crimsontext-regular-webfont.woff */ "./src/assets/fonts/crimsontext-regular-webfont.woff");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../assets/fonts/crimsontext-semibold-webfont.woff2 */ "./src/assets/fonts/crimsontext-semibold-webfont.woff2");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../assets/fonts/crimsontext-semibold-webfont.woff */ "./src/assets/fonts/crimsontext-semibold-webfont.woff");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../assets/Img/Small_Img/decorationPizza.png */ "./src/assets/Img/Small_Img/decorationPizza.png");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../assets/Img/Small_Img/decoration2.png */ "./src/assets/Img/Small_Img/decoration2.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
exports.push([module.i, "header {\n  width: 100%;\n  position: fixed;\n  z-index: 9998;\n  background: #363946; }\n  header nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n\n.main__logo a {\n  text-transform: uppercase;\n  color: white;\n  text-decoration: none; }\n\n.navbar_list_items {\n  display: flex;\n  list-style: none;\n  font-size: 1.3em;\n  text-align: center;\n  overflow: hidden; }\n  .navbar_list_items .list_item {\n    padding: .8em 2em .7em 2em;\n    transition: background-position .2s ease-in-out, color .2s ease-in-out; }\n    .navbar_list_items .list_item:hover {\n      background-image: linear-gradient(to top, #d2401e, transparent); }\n    .navbar_list_items .list_item a {\n      text-decoration: none;\n      color: white; }\n\n.list_item--active {\n  background-image: linear-gradient(to top, #d2401e, transparent); }\n\n.dsp {\n  display: none;\n  cursor: pointer; }\n\n.hamburger {\n  justify-content: center;\n  flex-direction: column; }\n  .hamburger div {\n    width: 1.6rem;\n    height: 2px;\n    background-color: white;\n    margin: 4px;\n    transition: all .4s easy-in; }\n\n@media screen and (max-width: 1045px) {\n  .main__logo {\n    padding: 10px 0 10px 0;\n    margin-right: 10px; }\n  .hamburger {\n    display: block;\n    padding: .2rem;\n    border-radius: 5px; }\n  .navbar_list_items {\n    right: 0;\n    height: 90vh;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-evenly;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top: 4.1rem;\n    background-color: #363946;\n    width: 100%;\n    transform: translate(100%);\n    transition: transform .3s ease-in; }\n  .brand_logo-link {\n    padding: 1px 0px;\n    display: block; } }\n\n.navHeaderOpacity {\n  background-color: #363946;\n  transition: ease-in .5s; }\n\n.nav-active {\n  transform: translateX(0%); }\n\n.toggle .link1 {\n  transform: rotate(-45deg) translate(-5px, 4px);\n  transition: all .3s; }\n\n.toggle .link2 {\n  opacity: 0;\n  transition: all .3s; }\n\n.toggle .link3 {\n  transform: rotate(45deg) translate(-5px, -4px);\n  transition: all .3s; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: crimsonRegular, Helvetica, sans-serif; }\n\n@font-face {\n  font-family: 'crimsonRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'crimson_textsemibold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\nfooter {\n  width: 100%;\n  height: 15rem;\n  background-color: #363946;\n  margin-top: 5em;\n  display: flex;\n  font-family: crimsonRegular, Helvetica, sans-serif; }\n\n.fab {\n  color: black; }\n  .fab:hover {\n    color: #d2401e;\n    transition: ease .4s;\n    transform: scale(1.5); }\n\n@media screen and (max-width: 1045px) {\n  footer {\n    justify-content: center;\n    height: 25rem;\n    padding: 1.3rem 0; }\n  .footer__wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center; }\n  .contact__social {\n    width: 100%;\n    display: flex;\n    justify-content: center; }\n  .contact__list {\n    width: 100%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-evenly;\n    list-style: none; }\n    .contact__list--link {\n      text-decoration: none; }\n    .contact__list .fab {\n      color: black;\n      font-size: 1.4rem; }\n      .contact__list .fab:hover {\n        color: #d2401e; }\n  .copyright {\n    width: 100%;\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: center; }\n  .address {\n    text-align: center;\n    font-size: 1.2rem;\n    width: 60%; }\n    .address__header {\n      justify-content: center;\n      display: flex;\n      margin-bottom: 1rem; }\n  .contact {\n    font-size: 1.2rem; }\n    .contact__text a {\n      text-decoration: none;\n      color: #d2401e; }\n    .contact__header {\n      justify-content: center;\n      margin-bottom: 1rem;\n      display: flex; }\n  hr {\n    width: 100%;\n    border-color: #232323;\n    opacity: .3; } }\n\n@font-face {\n  font-family: 'crimsonRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'crimson_textsemibold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes arrowBounce {\n  from {\n    opacity: 0;\n    transform: translateY(-10em); }\n  to {\n    opacity: 1;\n    transform: translateY(5px); } }\n\nhtml {\n  scroll-behavior: smooth; }\n\nbody {\n  overflow-x: hidden;\n  background-color: #f6f6f6;\n  background-size: 30rem; }\n\n.container {\n  width: 70%;\n  margin: 0 auto; }\n\n.welcome-section {\n  position: relative;\n  display: flex; }\n\n.mainImgs__holder {\n  display: flex;\n  height: 90vh;\n  width: 100vw; }\n\n.welcome_backgroundImg {\n  object-fit: cover;\n  width: 100%; }\n\n.about_us {\n  font-family: crimsonRegular, Arial, Helvetica, sans-serif;\n  color: black;\n  text-align: center;\n  max-width: 30vw;\n  max-height: 53vh;\n  height: 16rem;\n  background-color: #ffffff;\n  padding: 2rem;\n  border-radius: 5px;\n  z-index: 100;\n  color: #5f5f5f;\n  position: absolute;\n  align-self: center;\n  left: 13%; }\n  .about_us .welcome__button {\n    margin: 2em 0 0 0; }\n  .about_us .welcome__button-menu {\n    padding: .7em;\n    border-radius: 50px;\n    border: none;\n    background-color: #d2401e;\n    color: #fff;\n    cursor: pointer;\n    max-width: 100%;\n    min-width: 70%;\n    letter-spacing: 2px;\n    font-size: 1.2em;\n    transition: all .5s; }\n    .about_us .welcome__button-menu:hover {\n      color: #000;\n      background-color: #fff;\n      border: 2px solid #d2401e;\n      box-shadow: 1px 1px #363946, 2px 2px #363946, 3px 3px #363946;\n      transform: translateX(-3px); }\n\n.welcome__content {\n  font-size: 1.3rem; }\n\n.welcome__title {\n  margin: 0 0 30px 0;\n  font-size: 2.5rem;\n  font-family: crimson_textsemibold, Arial, Helvetica, sans-serif;\n  color: #5f5f5f; }\n\n.section_about {\n  background-color: lightgray;\n  width: 100vw;\n  height: 20vh;\n  display: flex;\n  align-items: center; }\n\n.section_about_content {\n  text-align: center;\n  color: white;\n  text-transform: uppercase;\n  font-size: 2em; }\n\n.welcome__arrowDown {\n  display: none; }\n\n.image_welcome_side {\n  align-self: flex-end;\n  width: 35vw;\n  height: 70vh;\n  transform: translate(0, 20%);\n  border: 15px solid #f6f6f6;\n  border-bottom: none;\n  position: absolute;\n  right: 13%;\n  object-fit: cover; }\n\n.restaurant__wrapper {\n  margin-top: 12.4rem;\n  height: fit-content;\n  width: 100%;\n  background-color: #fff;\n  padding: 2em;\n  flex-wrap: wrap;\n  overflow: hidden; }\n\n.provide-wrapper {\n  margin-top: 7rem;\n  width: 100vw;\n  background-color: #fff; }\n  .provide-wrapper .background__shadow-top {\n    box-shadow: 0px 0px 17px 2px rgba(0, 0, 0, 0.5); }\n\n.provide__items {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));\n  grid-gap: 2rem;\n  width: 90%; }\n\n.provide__item {\n  margin: 1rem 0 1rem 0;\n  text-align: center;\n  background-color: #fff;\n  border-radius: 15px;\n  background: linear-gradient(145deg, #e6e6e6, #ffffff);\n  box-shadow: 17px 17px 34px #dbdbdb, -17px -17px 34px #ffffff; }\n\n.card__wrapper {\n  padding: 2em; }\n  .card__wrapper .card__title {\n    font-family: crimsonRegular, Arial, Helvetica, sans-serif;\n    border: 0;\n    outline: 0;\n    margin: 0;\n    border-radius: 3px;\n    display: inline-block;\n    font-size: 1.2rem;\n    line-height: 2rem;\n    margin: 1em 0 1em 0;\n    padding: 0 0.8em;\n    background-color: #ca0808;\n    color: #ffffff; }\n  .card__wrapper i {\n    color: #ca0808; }\n\n.card__context {\n  font-size: 1.2rem;\n  color: #1f1f1f; }\n\n.main__header {\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  font-size: 4rem;\n  color: #5f5f5f;\n  font-family: crimson_textsemibold, Geneva, Tahoma, sans-serif;\n  text-shadow: 12px -5px 7px #00000059; }\n\n.about__events {\n  padding: 0;\n  margin-top: 3rem; }\n\n.all__about--content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.about__content:last-child {\n  align-items: flex-start; }\n  .about__content:last-child .about__content--text {\n    margin-top: 30px; }\n\n.about__content {\n  display: flex;\n  justify-content: center;\n  margin-top: 6rem;\n  align-items: flex-end;\n  height: fit-content;\n  width: 80%; }\n  .about__content--text {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: fit-content;\n    height: fit-content;\n    background-color: rgba(209, 209, 209, 0.5);\n    text-align: center;\n    justify-content: space-around;\n    padding: 30px;\n    margin-bottom: 25px;\n    transform: translate(150px) !important;\n    backdrop-filter: blur(3px);\n    border-radius: 5px;\n    z-index: 1; }\n  .about__content--image {\n    z-index: 0;\n    filter: drop-shadow(0 0 0.75rem #363946); }\n\n.about__content:first-child::before {\n  content: \"\";\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  width: 30rem;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: 30rem;\n  display: block;\n  transform: translate(-35rem, 0rem);\n  position: absolute;\n  opacity: .6; }\n\n.about__content:last-child::before {\n  content: \"\";\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  width: 30rem;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: 30rem;\n  display: block;\n  transform: translate(-35rem, 20rem);\n  position: absolute;\n  opacity: .6; }\n\n.about__content:nth-child(2) {\n  flex-direction: row-reverse; }\n  .about__content:nth-child(2) .about__content--text {\n    margin-left: 10px;\n    transform: translate(-150px) !important;\n    margin-top: 25px;\n    height: fit-content; }\n\n.about {\n  font-size: 1.3rem;\n  line-height: 23px;\n  color: #1f1f1f; }\n\n.about__header {\n  margin: 0 0 20px 0;\n  position: relative;\n  font-family: crimson_textsemibold, Geneva, Tahoma, sans-serif;\n  font-size: 2.5rem;\n  color: #1f1f1f; }\n  .about__header::after {\n    content: '';\n    width: 30px;\n    height: 1.5px;\n    background-color: #ca0808;\n    display: block;\n    z-index: 100;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: -40px; }\n  .about__header::before {\n    content: '';\n    width: 30px;\n    height: 1.5px;\n    background-color: #ca0808;\n    display: block;\n    z-index: 100;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: -40px; }\n\nfooter {\n  justify-content: center;\n  height: 25rem;\n  padding: 1.3rem 0; }\n\n.footer__wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center; }\n\n.contact__social {\n  width: 100%;\n  display: flex;\n  justify-content: center; }\n\n.contact__list {\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-evenly;\n  list-style: none; }\n  .contact__list--link {\n    text-decoration: none; }\n  .contact__list .fab {\n    color: black;\n    font-size: 1.4rem; }\n    .contact__list .fab:hover {\n      color: #d2401e; }\n\n.copyright {\n  width: 100%;\n  font-size: 1.2rem;\n  display: flex;\n  justify-content: center; }\n\n.address {\n  text-align: center;\n  font-size: 1.2rem;\n  width: 60%; }\n  .address__header {\n    justify-content: center;\n    display: flex;\n    margin-bottom: 1rem;\n    font-size: 2rem;\n    font-family: crimson_textsemibold, Geneva, Tahoma, sans-serif; }\n\n.contact__header {\n  font-size: 2rem;\n  font-family: crimson_textsemibold, Geneva, Tahoma, sans-serif; }\n\n.contact {\n  font-size: 1.2rem;\n  text-align: center; }\n  .contact__text a {\n    text-decoration: none;\n    color: #d2401e; }\n  .contact__text__header {\n    justify-content: center;\n    margin-bottom: 1rem;\n    display: flex; }\n\nhr {\n  display: none; }\n\n.main__events {\n  width: 90vw;\n  padding: 1rem 4rem;\n  margin-top: 4rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 50px;\n  place-items: center; }\n\n.events {\n  padding: 1rem 1.8rem;\n  border-radius: 10px;\n  background-color: #fff;\n  border-radius: 15px;\n  background: linear-gradient(145deg, #e6e6e6, #ffffff);\n  box-shadow: 17px 17px 34px #dbdbdb, -17px -17px 34px #ffffff;\n  transition: all .4s; }\n  .events:hover {\n    transform: scale(1.1); }\n  .events__date {\n    width: fit-content;\n    height: fit-content;\n    background-color: #ca0808;\n    color: #fff;\n    padding: .1rem .3rem;\n    border-radius: 3px;\n    font-size: 1rem;\n    word-spacing: .3rem;\n    letter-spacing: .05rem; }\n  .events .event__context {\n    font-family: crimsonRegular, Arial, Helvetica, sans-serif;\n    margin: 10px 0;\n    padding: .5rem;\n    color: #5f5f5f;\n    font-size: 1.21rem;\n    line-height: 21px; }\n  .events .event__title {\n    margin: 15px 0;\n    font-size: 1.78rem;\n    line-height: 2rem;\n    color: #1f1f1f;\n    font-family: crimson_textsemibold, Arial, Helvetica, sans-serif; }\n\n@media screen and (max-width: 1045px) {\n  .restaurant__wrapper {\n    margin-top: 6.2em;\n    width: 100vw;\n    padding: 0; }\n  .main__events {\n    padding: 0; }\n  .events__date {\n    font-size: 1.1rem; }\n  .main__header {\n    font-size: 3rem; }\n  .events__description {\n    font-size: 20px; }\n  .event__title {\n    font-size: 2rem; } }\n\n@media screen and (max-width: 1045px) {\n  .about__content:first-child::before {\n    display: none; }\n  .about__content:last-child::before {\n    display: none; }\n  .restaurant__content {\n    margin-top: .8rem;\n    height: fit-content;\n    width: fit-content; }\n  .about__content--image {\n    display: none; }\n  .about__content--text {\n    margin: 0;\n    transform: translate(0); }\n  .about__content:nth-child(2) .about__content--text {\n    margin-left: 0;\n    border-radius: 0 10px 10px 0;\n    transform: translate(0); }\n  .about__header {\n    margin: 0 0 20px 0;\n    font-size: 30px;\n    letter-spacing: .7px;\n    position: relative; }\n  .about {\n    font-size: 19px; }\n  .all__about--content {\n    display: flex;\n    width: 100vw;\n    flex-direction: column;\n    justify-content: space-between; }\n  .restaurant__content .restaurant__title {\n    margin: 0 auto;\n    padding: 1em 0 2em 0; }\n  .about_us {\n    bottom: -4rem;\n    max-width: 85vw;\n    margin-bottom: 10em;\n    height: fit-content;\n    align-self: flex-end;\n    background: linear-gradient(315deg, #ffffff, #e6e6e6);\n    box-shadow: 0px 0px 17px 2px rgba(0, 0, 0, 0.5) 20px 20px 60px #ffffff;\n    border-radius: 50px; }\n  .image_welcome_side {\n    display: none; }\n  .welcome_backgroundImg {\n    height: 100vh; }\n  .welcome__arrowDown {\n    color: white;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-self: flex-end;\n    position: absolute;\n    bottom: -10%;\n    opacity: 0;\n    animation-name: arrowBounce;\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-fill-mode: forwards; }\n    .welcome__arrowDown i {\n      cursor: pointer; }\n  .about__content {\n    width: 100%;\n    width: auto; }\n    .about__content:nth-child(2) {\n      margin-left: 0; }\n  .about__content:nth-child(2) .about__content--text {\n    transform: translate(0px) !important; }\n  .about__content--text {\n    transform: translate(0px) !important; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/Img/Small_Img/decoration2.png":
/*!**************************************************!*\
  !*** ./src/assets/Img/Small_Img/decoration2.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1b2fc777cec8fd75d358fa440ceacb88.png";

/***/ }),

/***/ "./src/assets/Img/Small_Img/decorationPizza.png":
/*!******************************************************!*\
  !*** ./src/assets/Img/Small_Img/decorationPizza.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a1b0b8ea51440d72393bb315c90dccb4.png";

/***/ }),

/***/ "./src/assets/fonts/crimsontext-regular-webfont.woff":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/crimsontext-regular-webfont.woff ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/3fed7bfc8d660c60de39aabedb74292f.woff");

/***/ }),

/***/ "./src/assets/fonts/crimsontext-regular-webfont.woff2":
/*!************************************************************!*\
  !*** ./src/assets/fonts/crimsontext-regular-webfont.woff2 ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/91645049daa821ebd93858a6be272efc.woff2");

/***/ }),

/***/ "./src/assets/fonts/crimsontext-semibold-webfont.woff":
/*!************************************************************!*\
  !*** ./src/assets/fonts/crimsontext-semibold-webfont.woff ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/64360b18f94e756e41aa4444692b1886.woff");

/***/ }),

/***/ "./src/assets/fonts/crimsontext-semibold-webfont.woff2":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/crimsontext-semibold-webfont.woff2 ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ba49f870952752a63e425a8690f1582d.woff2");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_0__);


function showNav() {
  const nav = document.querySelector(".navbar_list_items");
  const hamburger = document.querySelector(".hamburger");
  const listItem = document.querySelectorAll(".list_item");
  const navHeader = document.querySelector("header");
  // toggle hamburger navbar
  
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    for (let i = 0; i < listItem.length; i++) {
      listItem[i].style.borderBottom = "2px solid #d2401e";
    }
    // hamburger animation
    hamburger.classList.toggle("toggle");
    navHeader.classList.toggle("navHeaderOpacity");
  });
};
showNav();

function hideNav() {
  const links = document.querySelectorAll(".list_item, li")
  const hamburger = document.querySelector(".hamburger");

  links.forEach(el => el.addEventListener("click", () => {
    el.parentElement.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
  }))
}

hideNav();

// get date for events

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let dateObj = new Date();
let month = monthNames[dateObj.getMonth()];
let day = String(dateObj.getDate()).padStart(2, '0');
let year = dateObj.getFullYear();
let output = `Available: ${month} \n ${day}, ${year}`;

document.querySelectorAll('.events__date').forEach(el => el.textContent = output);


// animation lib, global setting's
AOS.init({
  duration: 1300,
  offset: 250,

});

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvSW1nL1NtYWxsX0ltZy9kZWNvcmF0aW9uMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9JbWcvU21hbGxfSW1nL2RlY29yYXRpb25QaXp6YS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy9jcmltc29udGV4dC1yZWd1bGFyLXdlYmZvbnQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2NyaW1zb250ZXh0LXJlZ3VsYXItd2ViZm9udC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2NyaW1zb250ZXh0LXNlbWlib2xkLXdlYmZvbnQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2NyaW1zb250ZXh0LXNlbWlib2xkLXdlYmZvbnQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9tYWluLnNjc3M/YTIyMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Ysc0NBQXNDLG1CQUFPLENBQUMsOEdBQXNEO0FBQ3BHLG9DQUFvQyxtQkFBTyxDQUFDLCtHQUFtRDtBQUMvRixvQ0FBb0MsbUJBQU8sQ0FBQyw2R0FBa0Q7QUFDOUYsb0NBQW9DLG1CQUFPLENBQUMsaUhBQW9EO0FBQ2hHLG9DQUFvQyxtQkFBTyxDQUFDLCtHQUFtRDtBQUMvRixvQ0FBb0MsbUJBQU8sQ0FBQyxtR0FBNkM7QUFDekYsb0NBQW9DLG1CQUFPLENBQUMsMkZBQXlDO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsV0FBVyxnQkFBZ0Isb0JBQW9CLGtCQUFrQix3QkFBd0IsRUFBRSxnQkFBZ0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsRUFBRSxtQkFBbUIsOEJBQThCLGlCQUFpQiwwQkFBMEIsRUFBRSx3QkFBd0Isa0JBQWtCLHFCQUFxQixxQkFBcUIsdUJBQXVCLHFCQUFxQixFQUFFLG1DQUFtQyxpQ0FBaUMsNkVBQTZFLEVBQUUsMkNBQTJDLHdFQUF3RSxFQUFFLHVDQUF1Qyw4QkFBOEIscUJBQXFCLEVBQUUsd0JBQXdCLG9FQUFvRSxFQUFFLFVBQVUsa0JBQWtCLG9CQUFvQixFQUFFLGdCQUFnQiw0QkFBNEIsMkJBQTJCLEVBQUUsb0JBQW9CLG9CQUFvQixrQkFBa0IsOEJBQThCLGtCQUFrQixrQ0FBa0MsRUFBRSwyQ0FBMkMsaUJBQWlCLDZCQUE2Qix5QkFBeUIsRUFBRSxnQkFBZ0IscUJBQXFCLHFCQUFxQix5QkFBeUIsRUFBRSx3QkFBd0IsZUFBZSxtQkFBbUIsdUJBQXVCLG9CQUFvQixvQ0FBb0MsNkJBQTZCLDBCQUEwQix5QkFBeUIsa0JBQWtCLGdDQUFnQyxrQkFBa0IsaUNBQWlDLHdDQUF3QyxFQUFFLHNCQUFzQix1QkFBdUIscUJBQXFCLEVBQUUsRUFBRSx1QkFBdUIsOEJBQThCLDRCQUE0QixFQUFFLGlCQUFpQiw4QkFBOEIsRUFBRSxvQkFBb0IsbURBQW1ELHdCQUF3QixFQUFFLG9CQUFvQixlQUFlLHdCQUF3QixFQUFFLG9CQUFvQixtREFBbUQsd0JBQXdCLEVBQUUsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLHVEQUF1RCxFQUFFLGdCQUFnQixrQ0FBa0MsNklBQTZJLHdCQUF3Qix1QkFBdUIsRUFBRSxnQkFBZ0Isd0NBQXdDLDZJQUE2SSx3QkFBd0IsdUJBQXVCLEVBQUUsWUFBWSxnQkFBZ0Isa0JBQWtCLDhCQUE4QixvQkFBb0Isa0JBQWtCLHVEQUF1RCxFQUFFLFVBQVUsaUJBQWlCLEVBQUUsZ0JBQWdCLHFCQUFxQiwyQkFBMkIsNEJBQTRCLEVBQUUsMkNBQTJDLFlBQVksOEJBQThCLG9CQUFvQix3QkFBd0IsRUFBRSxzQkFBc0Isb0JBQW9CLDZCQUE2QixvQ0FBb0MsMEJBQTBCLEVBQUUsc0JBQXNCLGtCQUFrQixvQkFBb0IsOEJBQThCLEVBQUUsb0JBQW9CLGtCQUFrQixvQkFBb0IsNEJBQTRCLG9DQUFvQyx1QkFBdUIsRUFBRSw0QkFBNEIsOEJBQThCLEVBQUUsMkJBQTJCLHFCQUFxQiwwQkFBMEIsRUFBRSxtQ0FBbUMseUJBQXlCLEVBQUUsZ0JBQWdCLGtCQUFrQix3QkFBd0Isb0JBQW9CLDhCQUE4QixFQUFFLGNBQWMseUJBQXlCLHdCQUF3QixpQkFBaUIsRUFBRSx3QkFBd0IsZ0NBQWdDLHNCQUFzQiw0QkFBNEIsRUFBRSxjQUFjLHdCQUF3QixFQUFFLHdCQUF3Qiw4QkFBOEIsdUJBQXVCLEVBQUUsd0JBQXdCLGdDQUFnQyw0QkFBNEIsc0JBQXNCLEVBQUUsUUFBUSxrQkFBa0IsNEJBQTRCLGtCQUFrQixFQUFFLEVBQUUsZ0JBQWdCLGtDQUFrQyw2SUFBNkksd0JBQXdCLHVCQUF1QixFQUFFLGdCQUFnQix3Q0FBd0MsNklBQTZJLHdCQUF3Qix1QkFBdUIsRUFBRSw0QkFBNEIsVUFBVSxpQkFBaUIsbUNBQW1DLEVBQUUsUUFBUSxpQkFBaUIsaUNBQWlDLEVBQUUsRUFBRSxVQUFVLDRCQUE0QixFQUFFLFVBQVUsdUJBQXVCLDhCQUE4QiwyQkFBMkIsRUFBRSxnQkFBZ0IsZUFBZSxtQkFBbUIsRUFBRSxzQkFBc0IsdUJBQXVCLGtCQUFrQixFQUFFLHVCQUF1QixrQkFBa0IsaUJBQWlCLGlCQUFpQixFQUFFLDRCQUE0QixzQkFBc0IsZ0JBQWdCLEVBQUUsZUFBZSw4REFBOEQsaUJBQWlCLHVCQUF1QixvQkFBb0IscUJBQXFCLGtCQUFrQiw4QkFBOEIsa0JBQWtCLHVCQUF1QixpQkFBaUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsY0FBYyxFQUFFLGdDQUFnQyx3QkFBd0IsRUFBRSxxQ0FBcUMsb0JBQW9CLDBCQUEwQixtQkFBbUIsZ0NBQWdDLGtCQUFrQixzQkFBc0Isc0JBQXNCLHFCQUFxQiwwQkFBMEIsdUJBQXVCLDBCQUEwQixFQUFFLDZDQUE2QyxvQkFBb0IsK0JBQStCLGtDQUFrQyxzRUFBc0Usb0NBQW9DLEVBQUUsdUJBQXVCLHNCQUFzQixFQUFFLHFCQUFxQix1QkFBdUIsc0JBQXNCLG9FQUFvRSxtQkFBbUIsRUFBRSxvQkFBb0IsZ0NBQWdDLGlCQUFpQixpQkFBaUIsa0JBQWtCLHdCQUF3QixFQUFFLDRCQUE0Qix1QkFBdUIsaUJBQWlCLDhCQUE4QixtQkFBbUIsRUFBRSx5QkFBeUIsa0JBQWtCLEVBQUUseUJBQXlCLHlCQUF5QixnQkFBZ0IsaUJBQWlCLGlDQUFpQywrQkFBK0Isd0JBQXdCLHVCQUF1QixlQUFlLHNCQUFzQixFQUFFLDBCQUEwQix3QkFBd0Isd0JBQXdCLGdCQUFnQiwyQkFBMkIsaUJBQWlCLG9CQUFvQixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLGlCQUFpQiwyQkFBMkIsRUFBRSw4Q0FBOEMsc0RBQXNELEVBQUUscUJBQXFCLGtCQUFrQixnRUFBZ0UsbUJBQW1CLGVBQWUsRUFBRSxvQkFBb0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLDBEQUEwRCxpRUFBaUUsRUFBRSxvQkFBb0IsaUJBQWlCLEVBQUUsaUNBQWlDLGdFQUFnRSxnQkFBZ0IsaUJBQWlCLGdCQUFnQix5QkFBeUIsNEJBQTRCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHVCQUF1QixnQ0FBZ0MscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLG9CQUFvQixzQkFBc0IsbUJBQW1CLEVBQUUsbUJBQW1CLGtCQUFrQixrQkFBa0IsNEJBQTRCLG9CQUFvQixtQkFBbUIsa0VBQWtFLHlDQUF5QyxFQUFFLG9CQUFvQixlQUFlLHFCQUFxQixFQUFFLDBCQUEwQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxFQUFFLGdDQUFnQyw0QkFBNEIsRUFBRSxzREFBc0QsdUJBQXVCLEVBQUUscUJBQXFCLGtCQUFrQiw0QkFBNEIscUJBQXFCLDBCQUEwQix3QkFBd0IsZUFBZSxFQUFFLDJCQUEyQixvQkFBb0IsMEJBQTBCLDZCQUE2Qix5QkFBeUIsMEJBQTBCLGlEQUFpRCx5QkFBeUIsb0NBQW9DLG9CQUFvQiwwQkFBMEIsNkNBQTZDLGlDQUFpQyx5QkFBeUIsaUJBQWlCLEVBQUUsNEJBQTRCLGlCQUFpQiwrQ0FBK0MsRUFBRSx5Q0FBeUMsa0JBQWtCLGdFQUFnRSxpQkFBaUIsaUNBQWlDLDBCQUEwQixrQkFBa0IsbUJBQW1CLHVDQUF1Qyx1QkFBdUIsZ0JBQWdCLEVBQUUsd0NBQXdDLGtCQUFrQixnRUFBZ0UsaUJBQWlCLGlDQUFpQywwQkFBMEIsa0JBQWtCLG1CQUFtQix3Q0FBd0MsdUJBQXVCLGdCQUFnQixFQUFFLGtDQUFrQyxnQ0FBZ0MsRUFBRSx3REFBd0Qsd0JBQXdCLDhDQUE4Qyx1QkFBdUIsMEJBQTBCLEVBQUUsWUFBWSxzQkFBc0Isc0JBQXNCLG1CQUFtQixFQUFFLG9CQUFvQix1QkFBdUIsdUJBQXVCLGtFQUFrRSxzQkFBc0IsbUJBQW1CLEVBQUUsMkJBQTJCLGtCQUFrQixrQkFBa0Isb0JBQW9CLGdDQUFnQyxxQkFBcUIsbUJBQW1CLHlCQUF5QixlQUFlLGtDQUFrQyxtQkFBbUIsRUFBRSw0QkFBNEIsa0JBQWtCLGtCQUFrQixvQkFBb0IsZ0NBQWdDLHFCQUFxQixtQkFBbUIseUJBQXlCLGVBQWUsa0NBQWtDLGtCQUFrQixFQUFFLFlBQVksNEJBQTRCLGtCQUFrQixzQkFBc0IsRUFBRSxzQkFBc0Isa0JBQWtCLDJCQUEyQixrQ0FBa0Msd0JBQXdCLEVBQUUsc0JBQXNCLGdCQUFnQixrQkFBa0IsNEJBQTRCLEVBQUUsb0JBQW9CLGdCQUFnQixrQkFBa0IsMEJBQTBCLGtDQUFrQyxxQkFBcUIsRUFBRSwwQkFBMEIsNEJBQTRCLEVBQUUseUJBQXlCLG1CQUFtQix3QkFBd0IsRUFBRSxpQ0FBaUMsdUJBQXVCLEVBQUUsZ0JBQWdCLGdCQUFnQixzQkFBc0Isa0JBQWtCLDRCQUE0QixFQUFFLGNBQWMsdUJBQXVCLHNCQUFzQixlQUFlLEVBQUUsc0JBQXNCLDhCQUE4QixvQkFBb0IsMEJBQTBCLHNCQUFzQixvRUFBb0UsRUFBRSxzQkFBc0Isb0JBQW9CLGtFQUFrRSxFQUFFLGNBQWMsc0JBQXNCLHVCQUF1QixFQUFFLHNCQUFzQiw0QkFBNEIscUJBQXFCLEVBQUUsNEJBQTRCLDhCQUE4QiwwQkFBMEIsb0JBQW9CLEVBQUUsUUFBUSxrQkFBa0IsRUFBRSxtQkFBbUIsZ0JBQWdCLHVCQUF1QixxQkFBcUIsa0JBQWtCLGdFQUFnRSxtQkFBbUIsd0JBQXdCLEVBQUUsYUFBYSx5QkFBeUIsd0JBQXdCLDJCQUEyQix3QkFBd0IsMERBQTBELGlFQUFpRSx3QkFBd0IsRUFBRSxtQkFBbUIsNEJBQTRCLEVBQUUsbUJBQW1CLHlCQUF5QiwwQkFBMEIsZ0NBQWdDLGtCQUFrQiwyQkFBMkIseUJBQXlCLHNCQUFzQiwwQkFBMEIsNkJBQTZCLEVBQUUsNkJBQTZCLGdFQUFnRSxxQkFBcUIscUJBQXFCLHFCQUFxQix5QkFBeUIsd0JBQXdCLEVBQUUsMkJBQTJCLHFCQUFxQix5QkFBeUIsd0JBQXdCLHFCQUFxQixzRUFBc0UsRUFBRSwyQ0FBMkMsMEJBQTBCLHdCQUF3QixtQkFBbUIsaUJBQWlCLEVBQUUsbUJBQW1CLGlCQUFpQixFQUFFLG1CQUFtQix3QkFBd0IsRUFBRSxtQkFBbUIsc0JBQXNCLEVBQUUsMEJBQTBCLHNCQUFzQixFQUFFLG1CQUFtQixzQkFBc0IsRUFBRSxFQUFFLDJDQUEyQyx5Q0FBeUMsb0JBQW9CLEVBQUUsd0NBQXdDLG9CQUFvQixFQUFFLDBCQUEwQix3QkFBd0IsMEJBQTBCLHlCQUF5QixFQUFFLDRCQUE0QixvQkFBb0IsRUFBRSwyQkFBMkIsZ0JBQWdCLDhCQUE4QixFQUFFLHdEQUF3RCxxQkFBcUIsbUNBQW1DLDhCQUE4QixFQUFFLG9CQUFvQix5QkFBeUIsc0JBQXNCLDJCQUEyQix5QkFBeUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLDBCQUEwQixvQkFBb0IsbUJBQW1CLDZCQUE2QixxQ0FBcUMsRUFBRSw2Q0FBNkMscUJBQXFCLDJCQUEyQixFQUFFLGVBQWUsb0JBQW9CLHNCQUFzQiwwQkFBMEIsMEJBQTBCLDJCQUEyQiw0REFBNEQsNkVBQTZFLDBCQUEwQixFQUFFLHlCQUF5QixvQkFBb0IsRUFBRSw0QkFBNEIsb0JBQW9CLEVBQUUseUJBQXlCLG1CQUFtQixvQkFBb0Isa0JBQWtCLDhCQUE4QiwyQkFBMkIseUJBQXlCLG1CQUFtQixpQkFBaUIsa0NBQWtDLDZCQUE2QiwwQ0FBMEMsb0NBQW9DLEVBQUUsNkJBQTZCLHdCQUF3QixFQUFFLHFCQUFxQixrQkFBa0Isa0JBQWtCLEVBQUUsb0NBQW9DLHVCQUF1QixFQUFFLHdEQUF3RCwyQ0FBMkMsRUFBRSwyQkFBMkIsMkNBQTJDLEVBQUUsRUFBRTtBQUNwc2Y7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVRQSxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSxvRkFBdUIsZ0RBQWdELEU7Ozs7Ozs7Ozs7OztBQ0F0RjtBQUFlLG9GQUF1QixpREFBaUQsRTs7Ozs7Ozs7Ozs7O0FDQXZGO0FBQWUsb0ZBQXVCLGdEQUFnRCxFOzs7Ozs7Ozs7Ozs7QUNBdEY7QUFBZSxvRkFBdUIsaURBQWlELEU7Ozs7Ozs7Ozs7OztBQ0F2RjtBQUFBO0FBQUE7QUFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTSxNQUFNLElBQUksSUFBSSxLQUFLOztBQUVwRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7OztBQ25ERCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDZNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiLi9qcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvY3JpbXNvbnRleHQtcmVndWxhci13ZWJmb250LndvZmYyXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9mb250cy9jcmltc29udGV4dC1yZWd1bGFyLXdlYmZvbnQud29mZlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvY3JpbXNvbnRleHQtc2VtaWJvbGQtd2ViZm9udC53b2ZmMlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCIuLi9hc3NldHMvZm9udHMvY3JpbXNvbnRleHQtc2VtaWJvbGQtd2ViZm9udC53b2ZmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9JbWcvU21hbGxfSW1nL2RlY29yYXRpb25QaXp6YS5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSByZXF1aXJlKFwiLi4vYXNzZXRzL0ltZy9TbWFsbF9JbWcvZGVjb3JhdGlvbjIucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5OTg7XFxuICBiYWNrZ3JvdW5kOiAjMzYzOTQ2OyB9XFxuICBoZWFkZXIgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLm1haW5fX2xvZ28gYSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLm5hdmJhcl9saXN0X2l0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIC5uYXZiYXJfbGlzdF9pdGVtcyAubGlzdF9pdGVtIHtcXG4gICAgcGFkZGluZzogLjhlbSAyZW0gLjdlbSAyZW07XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgLm5hdmJhcl9saXN0X2l0ZW1zIC5saXN0X2l0ZW06aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNkMjQwMWUsIHRyYW5zcGFyZW50KTsgfVxcbiAgICAubmF2YmFyX2xpc3RfaXRlbXMgLmxpc3RfaXRlbSBhIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLmxpc3RfaXRlbS0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNkMjQwMWUsIHRyYW5zcGFyZW50KTsgfVxcblxcbi5kc3Age1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5oYW1idXJnZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuaGFtYnVyZ2VyIGRpdiB7XFxuICAgIHdpZHRoOiAxLjZyZW07XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzeS1pbjsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNDVweCkge1xcbiAgLm1haW5fX2xvZ28ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG4gIC5oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgLm5hdmJhcl9saXN0X2l0ZW1zIHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0LjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM5NDY7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluOyB9XFxuICAuYnJhbmRfbG9nby1saW5rIHtcXG4gICAgcGFkZGluZzogMXB4IDBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7IH0gfVxcblxcbi5uYXZIZWFkZXJPcGFjaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM5NDY7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIC41czsgfVxcblxcbi5uYXYtYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7IH1cXG5cXG4udG9nZ2xlIC5saW5rMSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtNXB4LCA0cHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcblxcbi50b2dnbGUgLmxpbmsyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuXFxuLnRvZ2dsZSAubGluazMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNXB4LCAtNHB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IGNyaW1zb25SZWd1bGFyLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnY3JpbXNvblJlZ3VsYXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnY3JpbXNvbl90ZXh0c2VtaWJvbGQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2Mzk0NjtcXG4gIG1hcmdpbi10b3A6IDVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogY3JpbXNvblJlZ3VsYXIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5mYWIge1xcbiAgY29sb3I6IGJsYWNrOyB9XFxuICAuZmFiOmhvdmVyIHtcXG4gICAgY29sb3I6ICNkMjQwMWU7XFxuICAgIHRyYW5zaXRpb246IGVhc2UgLjRzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQ1cHgpIHtcXG4gIGZvb3RlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cmVtO1xcbiAgICBwYWRkaW5nOiAxLjNyZW0gMDsgfVxcbiAgLmZvb3Rlcl9fd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuY29udGFjdF9fc29jaWFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAuY29udGFjdF9fbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAgIC5jb250YWN0X19saXN0LS1saW5rIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLmNvbnRhY3RfX2xpc3QgLmZhYiB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtOyB9XFxuICAgICAgLmNvbnRhY3RfX2xpc3QgLmZhYjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2QyNDAxZTsgfVxcbiAgLmNvcHlyaWdodCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5hZGRyZXNzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2lkdGg6IDYwJTsgfVxcbiAgICAuYWRkcmVzc19faGVhZGVyIHtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC5jb250YWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07IH1cXG4gICAgLmNvbnRhY3RfX3RleHQgYSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiAjZDI0MDFlOyB9XFxuICAgIC5jb250YWN0X19oZWFkZXIge1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgaHIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjMyMzIzO1xcbiAgICBvcGFjaXR5OiAuMzsgfSB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2NyaW1zb25SZWd1bGFyJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2NyaW1zb25fdGV4dHNlbWlib2xkJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGtleWZyYW1lcyBhcnJvd0JvdW5jZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMGVtKTsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTsgfSB9XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzByZW07IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi53ZWxjb21lLXNlY3Rpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5tYWluSW1nc19faG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogMTAwdnc7IH1cXG5cXG4ud2VsY29tZV9iYWNrZ3JvdW5kSW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uYWJvdXRfdXMge1xcbiAgZm9udC1mYW1pbHk6IGNyaW1zb25SZWd1bGFyLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgbWF4LWhlaWdodDogNTN2aDtcXG4gIGhlaWdodDogMTZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGNvbG9yOiAjNWY1ZjVmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbGVmdDogMTMlOyB9XFxuICAuYWJvdXRfdXMgLndlbGNvbWVfX2J1dHRvbiB7XFxuICAgIG1hcmdpbjogMmVtIDAgMCAwOyB9XFxuICAuYWJvdXRfdXMgLndlbGNvbWVfX2J1dHRvbi1tZW51IHtcXG4gICAgcGFkZGluZzogLjdlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI0MDFlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzOyB9XFxuICAgIC5hYm91dF91cyAud2VsY29tZV9fYnV0dG9uLW1lbnU6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjMDAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2QyNDAxZTtcXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4ICMzNjM5NDYsIDJweCAycHggIzM2Mzk0NiwgM3B4IDNweCAjMzYzOTQ2O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTsgfVxcblxcbi53ZWxjb21lX19jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtOyB9XFxuXFxuLndlbGNvbWVfX3RpdGxlIHtcXG4gIG1hcmdpbjogMCAwIDMwcHggMDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGNyaW1zb25fdGV4dHNlbWlib2xkLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICM1ZjVmNWY7IH1cXG5cXG4uc2VjdGlvbl9hYm91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5zZWN0aW9uX2Fib3V0X2NvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMmVtOyB9XFxuXFxuLndlbGNvbWVfX2Fycm93RG93biB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmltYWdlX3dlbGNvbWVfc2lkZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjAlKTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZjZmNmY2O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMyU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblxcbi5yZXN0YXVyYW50X193cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDEyLjRyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5wcm92aWRlLXdyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogN3JlbTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC5wcm92aWRlLXdyYXBwZXIgLmJhY2tncm91bmRfX3NoYWRvdy10b3Age1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcblxcbi5wcm92aWRlX19pdGVtcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNnJlbSwgMWZyKSk7XFxuICBncmlkLWdhcDogMnJlbTtcXG4gIHdpZHRoOiA5MCU7IH1cXG5cXG4ucHJvdmlkZV9faXRlbSB7XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNlNmU2ZTYsICNmZmZmZmYpO1xcbiAgYm94LXNoYWRvdzogMTdweCAxN3B4IDM0cHggI2RiZGJkYiwgLTE3cHggLTE3cHggMzRweCAjZmZmZmZmOyB9XFxuXFxuLmNhcmRfX3dyYXBwZXIge1xcbiAgcGFkZGluZzogMmVtOyB9XFxuICAuY2FyZF9fd3JhcHBlciAuY2FyZF9fdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogY3JpbXNvblJlZ3VsYXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW46IDFlbSAwIDFlbSAwO1xcbiAgICBwYWRkaW5nOiAwIDAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2EwODA4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgLmNhcmRfX3dyYXBwZXIgaSB7XFxuICAgIGNvbG9yOiAjY2EwODA4OyB9XFxuXFxuLmNhcmRfX2NvbnRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzFmMWYxZjsgfVxcblxcbi5tYWluX19oZWFkZXIge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiAjNWY1ZjVmO1xcbiAgZm9udC1mYW1pbHk6IGNyaW1zb25fdGV4dHNlbWlib2xkLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIHRleHQtc2hhZG93OiAxMnB4IC01cHggN3B4ICMwMDAwMDA1OTsgfVxcblxcbi5hYm91dF9fZXZlbnRzIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tdG9wOiAzcmVtOyB9XFxuXFxuLmFsbF9fYWJvdXQtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uYWJvdXRfX2NvbnRlbnQ6bGFzdC1jaGlsZCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcbiAgLmFib3V0X19jb250ZW50Omxhc3QtY2hpbGQgLmFib3V0X19jb250ZW50LS10ZXh0IHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDsgfVxcblxcbi5hYm91dF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA2cmVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiA4MCU7IH1cXG4gIC5hYm91dF9fY29udGVudC0tdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDksIDIwOSwgMjA5LCAwLjUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTBweCkgIWltcG9ydGFudDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMTsgfVxcbiAgLmFib3V0X19jb250ZW50LS1pbWFnZSB7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuNzVyZW0gIzM2Mzk0Nik7IH1cXG5cXG4uYWJvdXRfX2NvbnRlbnQ6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICB3aWR0aDogMzByZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1cmVtLCAwcmVtKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IC42OyB9XFxuXFxuLmFib3V0X19jb250ZW50Omxhc3QtY2hpbGQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICB3aWR0aDogMzByZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1cmVtLCAyMHJlbSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAuNjsgfVxcblxcbi5hYm91dF9fY29udGVudDpudGgtY2hpbGQoMikge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyB9XFxuICAuYWJvdXRfX2NvbnRlbnQ6bnRoLWNoaWxkKDIpIC5hYm91dF9fY29udGVudC0tdGV4dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwcHgpICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7IH1cXG5cXG4uYWJvdXQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBsaW5lLWhlaWdodDogMjNweDtcXG4gIGNvbG9yOiAjMWYxZjFmOyB9XFxuXFxuLmFib3V0X19oZWFkZXIge1xcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IGNyaW1zb25fdGV4dHNlbWlib2xkLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6ICMxZjFmMWY7IH1cXG4gIC5hYm91dF9faGVhZGVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxLjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhMDgwODtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICByaWdodDogLTQwcHg7IH1cXG4gIC5hYm91dF9faGVhZGVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMS41cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYTA4MDg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgbGVmdDogLTQwcHg7IH1cXG5cXG5mb290ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgcGFkZGluZzogMS4zcmVtIDA7IH1cXG5cXG4uZm9vdGVyX193cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmNvbnRhY3RfX3NvY2lhbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5jb250YWN0X19saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgLmNvbnRhY3RfX2xpc3QtLWxpbmsge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5jb250YWN0X19saXN0IC5mYWIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtOyB9XFxuICAgIC5jb250YWN0X19saXN0IC5mYWI6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjZDI0MDFlOyB9XFxuXFxuLmNvcHlyaWdodCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmFkZHJlc3Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogNjAlOyB9XFxuICAuYWRkcmVzc19faGVhZGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGNyaW1zb25fdGV4dHNlbWlib2xkLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5jb250YWN0X19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IGNyaW1zb25fdGV4dHNlbWlib2xkLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5jb250YWN0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuY29udGFjdF9fdGV4dCBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogI2QyNDAxZTsgfVxcbiAgLmNvbnRhY3RfX3RleHRfX2hlYWRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuaHIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5tYWluX19ldmVudHMge1xcbiAgd2lkdGg6IDkwdnc7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDUwcHg7XFxuICBwbGFjZS1pdGVtczogY2VudGVyOyB9XFxuXFxuLmV2ZW50cyB7XFxuICBwYWRkaW5nOiAxcmVtIDEuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNlNmU2ZTYsICNmZmZmZmYpO1xcbiAgYm94LXNoYWRvdzogMTdweCAxN3B4IDM0cHggI2RiZGJkYiwgLTE3cHggLTE3cHggMzRweCAjZmZmZmZmO1xcbiAgdHJhbnNpdGlvbjogYWxsIC40czsgfVxcbiAgLmV2ZW50czpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgLmV2ZW50c19fZGF0ZSB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhMDgwODtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IC4xcmVtIC4zcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd29yZC1zcGFjaW5nOiAuM3JlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNXJlbTsgfVxcbiAgLmV2ZW50cyAuZXZlbnRfX2NvbnRleHQge1xcbiAgICBmb250LWZhbWlseTogY3JpbXNvblJlZ3VsYXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgY29sb3I6ICM1ZjVmNWY7XFxuICAgIGZvbnQtc2l6ZTogMS4yMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7IH1cXG4gIC5ldmVudHMgLmV2ZW50X190aXRsZSB7XFxuICAgIG1hcmdpbjogMTVweCAwO1xcbiAgICBmb250LXNpemU6IDEuNzhyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBjb2xvcjogIzFmMWYxZjtcXG4gICAgZm9udC1mYW1pbHk6IGNyaW1zb25fdGV4dHNlbWlib2xkLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA0NXB4KSB7XFxuICAucmVzdGF1cmFudF9fd3JhcHBlciB7XFxuICAgIG1hcmdpbi10b3A6IDYuMmVtO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gIC5tYWluX19ldmVudHMge1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAuZXZlbnRzX19kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07IH1cXG4gIC5tYWluX19oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDNyZW07IH1cXG4gIC5ldmVudHNfX2Rlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyMHB4OyB9XFxuICAuZXZlbnRfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQ1cHgpIHtcXG4gIC5hYm91dF9fY29udGVudDpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmFib3V0X19jb250ZW50Omxhc3QtY2hpbGQ6OmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5yZXN0YXVyYW50X19jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogLjhyZW07XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDsgfVxcbiAgLmFib3V0X19jb250ZW50LS1pbWFnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5hYm91dF9fY29udGVudC0tdGV4dCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7IH1cXG4gIC5hYm91dF9fY29udGVudDpudGgtY2hpbGQoMikgLmFib3V0X19jb250ZW50LS10ZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApOyB9XFxuICAuYWJvdXRfX2hlYWRlciB7XFxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuYWJvdXQge1xcbiAgICBmb250LXNpemU6IDE5cHg7IH1cXG4gIC5hbGxfX2Fib3V0LS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5yZXN0YXVyYW50X19jb250ZW50IC5yZXN0YXVyYW50X190aXRsZSB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxZW0gMCAyZW0gMDsgfVxcbiAgLmFib3V0X3VzIHtcXG4gICAgYm90dG9tOiAtNHJlbTtcXG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMGVtO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZmZmZiwgI2U2ZTZlNik7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpIDIwcHggMjBweCA2MHB4ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG4gIC5pbWFnZV93ZWxjb21lX3NpZGUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAud2VsY29tZV9iYWNrZ3JvdW5kSW1nIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgfVxcbiAgLndlbGNvbWVfX2Fycm93RG93biB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0xMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcnJvd0JvdW5jZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyB9XFxuICAgIC53ZWxjb21lX19hcnJvd0Rvd24gaSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWJvdXRfX2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gICAgLmFib3V0X19jb250ZW50Om50aC1jaGlsZCgyKSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG4gIC5hYm91dF9fY29udGVudDpudGgtY2hpbGQoMikgLmFib3V0X19jb250ZW50LS10ZXh0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4KSAhaW1wb3J0YW50OyB9XFxuICAuYWJvdXRfX2NvbnRlbnQtLXRleHQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgpICFpbXBvcnRhbnQ7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYjJmYzc3N2NlYzhmZDc1ZDM1OGZhNDQwY2VhY2I4OC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhMWIwYjhlYTUxNDQwZDcyMzkzYmIzMTVjOTBkY2NiNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvM2ZlZDdiZmM4ZDY2MGM2MGRlMzlhYWJlZGI3NDI5MmYud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy85MTY0NTA0OWRhYTgyMWViZDkzODU4YTZiZTI3MmVmYy53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy82NDM2MGIxOGY5NGU3NTZlNDFhYTQ0NDQ2OTJiMTg4Ni53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2JhNDlmODcwOTUyNzUyYTYzZTQyNWE4NjkwZjE1ODJkLndvZmYyXCI7IiwiaW1wb3J0IFwiLi4vc3R5bGUvbWFpbi5zY3NzXCI7XG5cbmZ1bmN0aW9uIHNob3dOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX2xpc3RfaXRlbXNcIik7XG4gIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdF9pdGVtXCIpO1xuICBjb25zdCBuYXZIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAvLyB0b2dnbGUgaGFtYnVyZ2VyIG5hdmJhclxuICBcbiAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtYWN0aXZlXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RJdGVtW2ldLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkICNkMjQwMWVcIjtcbiAgICB9XG4gICAgLy8gaGFtYnVyZ2VyIGFuaW1hdGlvblxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlXCIpO1xuICAgIG5hdkhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwibmF2SGVhZGVyT3BhY2l0eVwiKTtcbiAgfSk7XG59O1xuc2hvd05hdigpO1xuXG5mdW5jdGlvbiBoaWRlTmF2KCkge1xuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdF9pdGVtLCBsaVwiKVxuICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcblxuICBsaW5rcy5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWFjdGl2ZVwiKTtcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcInRvZ2dsZVwiKTtcbiAgfSkpXG59XG5cbmhpZGVOYXYoKTtcblxuLy8gZ2V0IGRhdGUgZm9yIGV2ZW50c1xuXG5jb25zdCBtb250aE5hbWVzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcbiAgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG5sZXQgZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XG5sZXQgbW9udGggPSBtb250aE5hbWVzW2RhdGVPYmouZ2V0TW9udGgoKV07XG5sZXQgZGF5ID0gU3RyaW5nKGRhdGVPYmouZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xubGV0IHllYXIgPSBkYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG5sZXQgb3V0cHV0ID0gYEF2YWlsYWJsZTogJHttb250aH0gXFxuICR7ZGF5fSwgJHt5ZWFyfWA7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVudHNfX2RhdGUnKS5mb3JFYWNoKGVsID0+IGVsLnRleHRDb250ZW50ID0gb3V0cHV0KTtcblxuXG4vLyBhbmltYXRpb24gbGliLCBnbG9iYWwgc2V0dGluZydzXG5BT1MuaW5pdCh7XG4gIGR1cmF0aW9uOiAxMzAwLFxuICBvZmZzZXQ6IDI1MCxcblxufSk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=
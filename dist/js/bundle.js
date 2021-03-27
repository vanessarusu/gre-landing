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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  console.log("%cSite Credits: Designed by www.lwdg.ca, developed by www.vanessarusu.com", "color: #000; font-size: 14px;");
  history.pushState("", document.title, window.location.pathname);
  var links = document.querySelectorAll('#menu-primary-menu li.menu-item');

  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('current-menu-item');
  }

  setTimeout(function () {
    // if the age gate screen shows, render and insert the video
    // wait 1000 ms for plugin to init
    if (Boolean(document.querySelector(".age-gate-wrapper"))) {
      var html = '<div class="video-contain"><video id="ageGateVideo" muted="" playsinline="" poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="background: transparent; z-index:100; transition: all 1s ease; left: 0px; top: 0px; opacity: 0;"><source src=\"https://lwdgdev.ca/gre/wp-content/uploads/20210310_KENNY-HEAD_NOGlow_720p.mov\" type="video/mp4"></video></div>';
      var hook = document.querySelector(".age-gate-wrapper");
      hook.insertAdjacentHTML("beforebegin", html); // play the video and give opacity

      setTimeout(function () {
        var vid = document.querySelector("#ageGateVideo");
        vid.play();
        vid.style.opacity = 1;
        document.querySelector('.age-gate-wrapper').style.background = 'transparent';
      }, 400); // fade in buttons and ui

      setTimeout(function () {
        document.querySelector(".age-gate-wrapper .age-gate").style.opacity = 1;
      }, 5800);
    }
  }, 500);
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJCb29sZWFuIiwicXVlcnlTZWxlY3RvciIsImh0bWwiLCJob29rIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidmlkIiwicGxheSIsInN0eWxlIiwib3BhY2l0eSIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxDQUFDLFlBQVc7QUFDUkEsU0FBTyxDQUFDQyxHQUFSLENBQVksMkVBQVosRUFBeUYsK0JBQXpGO0FBQ0FDLFNBQU8sQ0FBQ0MsU0FBUixDQUFrQixFQUFsQixFQUFzQkMsUUFBUSxDQUFDQyxLQUEvQixFQUFzQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUF0RDtBQUNBLE1BQUlDLEtBQUssR0FBR0wsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixpQ0FBMUIsQ0FBWjs7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxNQUF2QixFQUErQkQsQ0FBQyxFQUFoQyxFQUFvQztBQUNoQ0YsU0FBSyxDQUFDRSxDQUFELENBQUwsQ0FBU0UsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsbUJBQTFCO0FBQ0g7O0FBR0RDLFlBQVUsQ0FBQyxZQUFXO0FBQ2xCO0FBQ0E7QUFDQSxRQUFHQyxPQUFPLENBQUNaLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixtQkFBdkIsQ0FBRCxDQUFWLEVBQXlEO0FBQ3JELFVBQUlDLElBQUksR0FBRywyWUFBWDtBQUNBLFVBQUlDLElBQUksR0FBR2YsUUFBUSxDQUFDYSxhQUFULENBQXVCLG1CQUF2QixDQUFYO0FBQ0FFLFVBQUksQ0FBQ0Msa0JBQUwsQ0FBd0IsYUFBeEIsRUFBdUNGLElBQXZDLEVBSHFELENBS3JEOztBQUNBSCxnQkFBVSxDQUFDLFlBQVc7QUFDbEIsWUFBSU0sR0FBRyxHQUFHakIsUUFBUSxDQUFDYSxhQUFULENBQXVCLGVBQXZCLENBQVY7QUFDQUksV0FBRyxDQUFDQyxJQUFKO0FBQ0FELFdBQUcsQ0FBQ0UsS0FBSixDQUFVQyxPQUFWLEdBQW9CLENBQXBCO0FBQ0FwQixnQkFBUSxDQUFDYSxhQUFULENBQXVCLG1CQUF2QixFQUE0Q00sS0FBNUMsQ0FBa0RFLFVBQWxELEdBQStELGFBQS9EO0FBQ0gsT0FMUyxFQUtSLEdBTFEsQ0FBVixDQU5xRCxDQWFyRDs7QUFDQVYsZ0JBQVUsQ0FBQyxZQUFXO0FBQ2xCWCxnQkFBUSxDQUFDYSxhQUFULENBQXVCLDZCQUF2QixFQUFzRE0sS0FBdEQsQ0FBNERDLE9BQTVELEdBQXNFLENBQXRFO0FBQ0gsT0FGUyxFQUVSLElBRlEsQ0FBVjtBQUlIO0FBQ0osR0F0QlMsRUFzQlIsR0F0QlEsQ0FBVjtBQXVCSCxDQWhDRCxJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIiVjU2l0ZSBDcmVkaXRzOiBEZXNpZ25lZCBieSB3d3cubHdkZy5jYSwgZGV2ZWxvcGVkIGJ5IHd3dy52YW5lc3NhcnVzdS5jb21cIiwgXCJjb2xvcjogIzAwMDsgZm9udC1zaXplOiAxNHB4O1wiKVxuICAgIGhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZW51LXByaW1hcnktbWVudSBsaS5tZW51LWl0ZW0nKTtcbiAgICBmb3IodmFyIGk9MDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbWVudS1pdGVtJyk7XG4gICAgfVxuICAgIFxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gaWYgdGhlIGFnZSBnYXRlIHNjcmVlbiBzaG93cywgcmVuZGVyIGFuZCBpbnNlcnQgdGhlIHZpZGVvXG4gICAgICAgIC8vIHdhaXQgMTAwMCBtcyBmb3IgcGx1Z2luIHRvIGluaXRcbiAgICAgICAgaWYoQm9vbGVhbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFnZS1nYXRlLXdyYXBwZXJcIikpKSB7XG4gICAgICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwidmlkZW8tY29udGFpblwiPjx2aWRlbyBpZD1cImFnZUdhdGVWaWRlb1wiIG11dGVkPVwiXCIgcGxheXNpbmxpbmU9XCJcIiBwb3N0ZXI9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTdcIiBzdHlsZT1cImJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB6LWluZGV4OjEwMDsgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7IGxlZnQ6IDBweDsgdG9wOiAwcHg7IG9wYWNpdHk6IDA7XCI+PHNvdXJjZSBzcmM9XFxcImh0dHBzOi8vbHdkZ2Rldi5jYS9ncmUvd3AtY29udGVudC91cGxvYWRzLzIwMjEwMzEwX0tFTk5ZLUhFQURfTk9HbG93XzcyMHAubW92XFxcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC92aWRlbz48L2Rpdj4nO1xuICAgICAgICAgICAgdmFyIGhvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFnZS1nYXRlLXdyYXBwZXJcIik7XG4gICAgICAgICAgICBob29rLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWJlZ2luXCIsIGh0bWwpO1xuXG4gICAgICAgICAgICAvLyBwbGF5IHRoZSB2aWRlbyBhbmQgZ2l2ZSBvcGFjaXR5XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FnZUdhdGVWaWRlb1wiKTtcbiAgICAgICAgICAgICAgICB2aWQucGxheSgpO1xuICAgICAgICAgICAgICAgIHZpZC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWdlLWdhdGUtd3JhcHBlcicpLnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfSw0MDApO1xuXG4gICAgICAgICAgICAvLyBmYWRlIGluIGJ1dHRvbnMgYW5kIHVpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWdlLWdhdGUtd3JhcHBlciAuYWdlLWdhdGVcIikuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LDU4MDApO1xuXG4gICAgICAgIH1cbiAgICB9LDUwMClcbn0pKCk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
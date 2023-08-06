/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var rocky = __webpack_require__(2);

	// An object to cache our date & time values,
	// to minimize computations in the draw handler.
	var timeData = {
	  hr: '',
	  min: ''
	};

	// Every minute
	// https://developer.pebble.com/docs/rockyjs/rocky/#on
	rocky.on('minutechange', function(event) {
	  // Current date/time
	  // https://developer.pebble.com/docs/rockyjs/Date/
	  var d = event.date;

	  // Get current time, based on 12h or 24h format (01:00 or 1:00 AM)
	  timeData.hr = d.toLocaleTimeString().substring(0,2);
	  timeData.min = d.toLocaleTimeString().substring(3,5);


	  // Force screen redraw
	  rocky.requestDraw();
	});

	// Redraw the screen
	rocky.on('draw', function(event) {
	  // Drawing canvas
	  var ctx = event.context;

	  // Clear the canvas
	  // https://developer.pebble.com/docs/rockyjs/CanvasRenderingContext2D/#Canvas
	  ctx.fillStyle = 'yellow';
	  ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

	  ctx.fillStyle = 'black';
	  ctx.rockyFillRadial(ctx.canvas.clientWidth/2, ctx.canvas.clientWidth/2, 0, ctx.canvas.clientWidth/2.125 ,0, 2* Math.PI);

	  ctx.fillStyle = 'white';
	  ctx.rockyFillRadial(ctx.canvas.clientWidth/2, ctx.canvas.clientWidth/2, 0, ctx.canvas.clientWidth/2.5 ,0, 2* Math.PI);

	  ctx.fillStyle = 'black';
	  ctx.beginPath();
	  ctx.moveTo(4 * ctx.canvas.clientWidth/10, 8 * ctx.canvas.clientHeight/10);
	  ctx.lineTo(4.5 * ctx.canvas.clientWidth/10, 5.5 * ctx.canvas.clientHeight/10);
	  ctx.lineTo(5 * ctx.canvas.clientWidth/10, 5.25 * ctx.canvas.clientHeight/10);
	  ctx.lineTo(5.5 * ctx.canvas.clientWidth/10, 5.5 * ctx.canvas.clientHeight/10);
	  ctx.lineTo(6 * ctx.canvas.clientWidth/10, 8 * ctx.canvas.clientHeight/10);
	  ctx.closePath();
	  ctx.fill();

	  ctx.fillStyle = 'black';
	  ctx.rockyFillRadial(1.25 * ctx.canvas.clientWidth/10, 8.55 * ctx.canvas.clientHeight/10, 0, ctx.canvas.clientWidth/16 ,0, 2* Math.PI);

	  ctx.rockyFillRadial(8.5*ctx.canvas.clientWidth/10, 8.75*ctx.canvas.clientHeight/10, 0, ctx.canvas.clientWidth/8 ,0, 2* Math.PI);
	  ctx.fillStyle = 'yellow';
	  ctx.rockyFillRadial(8.5*ctx.canvas.clientWidth/10, 8.75*ctx.canvas.clientHeight/10, 0, ctx.canvas.clientWidth/9 ,0, 2* Math.PI);
	  ctx.fillStyle = 'black';
	  ctx.rockyFillRadial(8.5*ctx.canvas.clientWidth/10, 8.75*ctx.canvas.clientHeight/10, 0, ctx.canvas.clientWidth/10 ,0, 2* Math.PI);
	  ctx.fillStyle = 'yellow';
	  ctx.rockyFillRadial(8.5*ctx.canvas.clientWidth/10, 8.75*ctx.canvas.clientHeight/10, 0, ctx.canvas.clientWidth/32 ,0, 2* Math.PI);

	  ctx.beginPath();
	  ctx.moveTo(8.5*ctx.canvas.clientWidth/10, 8.75*ctx.canvas.clientHeight/10 + 5);
	  ctx.lineTo(8 * ctx.canvas.clientWidth/10, 8 * ctx.canvas.clientHeight/10);
	  ctx.lineTo(9 * ctx.canvas.clientWidth/10, 8 * ctx.canvas.clientHeight/10);
	  ctx.closePath();
	  ctx.fill();

	  ctx.beginPath();
	  ctx.moveTo(8.5*ctx.canvas.clientWidth/10, 8.75*ctx.canvas.clientHeight/10);
	  ctx.lineTo(7.32 * ctx.canvas.clientWidth/10, 8.75 * ctx.canvas.clientHeight/10);
	  ctx.lineTo(8 * ctx.canvas.clientWidth/10, 9.8 * ctx.canvas.clientHeight/10);
	  ctx.closePath();
	  ctx.fill();

	  ctx.beginPath();
	  ctx.moveTo(8.5*ctx.canvas.clientWidth/10, 8.75*ctx.canvas.clientHeight/10);
	  ctx.lineTo(9.69 * ctx.canvas.clientWidth/10, 8.75 * ctx.canvas.clientHeight/10);
	  ctx.lineTo(9 * ctx.canvas.clientWidth/10, 9.8 * ctx.canvas.clientHeight/10);
	  ctx.closePath();
	  ctx.fill();




	  ctx.fillStyle = 'black';
	  ctx.rockyFillRadial(8.5*ctx.canvas.clientWidth/10, 8.75*ctx.canvas.clientHeight/10, 0, ctx.canvas.clientWidth/48 ,0, 2* Math.PI);


	  ctx.strokeStyle = 'lightgrey';
	  ctx.beginPath();
	  ctx.arc(ctx.canvas.clientWidth/2 , 5.5 * ctx.canvas.clientHeight/10, 50, 1.125 * Math.PI, 1.875 * Math.PI);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.arc(ctx.canvas.clientWidth/2 , 5.5 * ctx.canvas.clientHeight/10, 40, 1.125 * Math.PI, 1.875 * Math.PI);
	  ctx.stroke();

	  ctx.font = '14px bold Gothic';
	  ctx.fillText('0', 1.5 * ctx.canvas.clientWidth/10, 3.5 * ctx.canvas.clientWidth/10)
	  ctx.fillText('15', 2.75 * ctx.canvas.clientWidth/10 - 5, 2 * ctx.canvas.clientWidth/10)
	  ctx.fillText('30', 4.75 * ctx.canvas.clientWidth/10 - 3, 1.5 * ctx.canvas.clientWidth/10)
	  ctx.fillText('45', 6.75 * ctx.canvas.clientWidth/10, 2 * ctx.canvas.clientWidth/10)
	  ctx.fillText('60', 8 * ctx.canvas.clientWidth/10, 3.5 * ctx.canvas.clientWidth/10)


	  ctx.fillText('12', 0.8 * ctx.canvas.clientWidth/10, 7 * ctx.canvas.clientHeight/10);
	  ctx.fillText('3', 2 * ctx.canvas.clientWidth/10, 8 * ctx.canvas.clientHeight/10);
	  ctx.fillText('6', 1 * ctx.canvas.clientWidth/10, 9 * ctx.canvas.clientHeight/10);
	  ctx.fillText('9' , 0 * ctx.canvas.clientWidth/10, 8 * ctx.canvas.clientHeight/10);

	  plotLines(ctx, 0, 5, 'lightgrey');
	  plotLines(ctx, 5, 0, 'lightgrey');
	  plotLines(ctx, 10, 0, 'lightgrey');
	  plotLines(ctx, 15, 5, 'lightgrey');
	  plotLines(ctx, 20, 0, 'lightgrey');
	  plotLines(ctx, 25, 0, 'lightgrey');
	  plotLines(ctx, 30, 5, 'lightgrey');
	  plotLines(ctx, 35, 0, 'lightgrey');
	  plotLines(ctx, 40, 0, 'lightgrey');
	  plotLines(ctx, 45, 5, 'red');
	  plotLines(ctx, 50, 0, 'red');
	  plotLines(ctx, 55, 0, 'red');
	  plotLines(ctx, 60, 5, 'red');

	  ctx.font = '18px bold Gothic'
	  ctx.fillText('r/hr', 4 * ctx.canvas.clientWidth/10, 3.5 * ctx.canvas.clientHeight/10);

	  ctx.lineWidth = 1;
	  ctx.strokeStyle = "darkgrey";
	  ctx.beginPath();
	  ctx.moveTo(ctx.canvas.clientWidth/2 , 5.5 * ctx.canvas.clientHeight/10);
	  var minDeg = 203 + (134/60 * parseInt(timeData.min));
	  ctx.lineTo(
	    (Math.cos( minDeg / (180 / Math.PI) ) * 48) + ctx.canvas.clientWidth/2,
	    (Math.sin( minDeg / (180 / Math.PI) ) * 48) + 5.5 * ctx.canvas.clientHeight/10
	  );
	  ctx.stroke();

	  ctx.strokeStyle = 'darkcandyapplered';
	  ctx.beginPath();
	  ctx.moveTo(ctx.canvas.clientWidth/2 , 5.5 * ctx.canvas.clientHeight/10);
	  ctx.lineTo(
	    (Math.cos( minDeg / (180 / Math.PI) ) * -10) + ctx.canvas.clientWidth/2,
	    (Math.sin( minDeg / (180 / Math.PI) ) * -10) + 5.5 * ctx.canvas.clientHeight/10
	  );
	  ctx.stroke();

	  var minDeg = Math.abs((360/12 * (parseInt(timeData.hr)%12)) - 90);
	  ctx.strokeStyle = 'white';
	  ctx.beginPath();
	  ctx.moveTo(1.25 * ctx.canvas.clientWidth/10, 8.55 * ctx.canvas.clientHeight/10);
	  ctx.lineTo(
	    (Math.cos( minDeg / (180 / Math.PI) ) * 10) + 1.25 * ctx.canvas.clientWidth/10,
	    (Math.sin( minDeg / (180 / Math.PI) ) * 10) + 8.55 * ctx.canvas.clientHeight/10
	  );
	  ctx.stroke();

	});

	function plotLines(ctx, minute, boost, color){

	  ctx.lineWidth = 1;
	  ctx.strokeStyle = color;

	  var deg = 203 + (134/60 * minute);

	  ctx.beginPath();
	  ctx.moveTo(
	    (Math.cos( deg / (180 / Math.PI) ) * 40) + ctx.canvas.clientWidth/2,
	    (Math.sin( deg / (180 / Math.PI) ) * 40) + 5.5 * ctx.canvas.clientHeight/10
	  );
	  ctx.lineTo(
	    (Math.cos( deg / (180 / Math.PI) ) * (50 + boost)) + ctx.canvas.clientWidth/2,
	    (Math.sin( deg / (180 / Math.PI) ) * (50 + boost)) + 5.5 * ctx.canvas.clientHeight/10
	  );
	  ctx.stroke();

	}

	// Send a single message to the Phone
	// https://developer.pebble.com/docs/rockyjs/rocky/#postMessage
	rocky.postMessage("This arrives on the phone via bluetooth!");


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = _rocky;


/***/ })
/******/ ]);
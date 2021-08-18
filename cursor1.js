// import $ from "jquery";
// "use strict"; $(function () { function t(t, i) { if (!(t instanceof i)) { throw new TypeError("Cannot call a class as a function") } } var i = Object.assign || function (t) { for (var i = 1; i < arguments.length; i++) { var n = arguments[i]; for (var e in n) { Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]) } } return t }, n = (function () { function t(t, i) { for (var n = 0; n < i.length; n++) { var e = i[n]; (e.enumerable = e.enumerable || !1), (e.configurable = !0), "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e) } } return function (i, n, e) { return n && t(i.prototype, n), e && t(i, e), i } })(), e = (function () { function e(n) { var o = n.origin, r = n.speed, s = n.color, a = n.angle, h = n.context; t(this, e), (this.origin = o), (this.position = i({}, this.origin)), (this.color = s), (this.speed = r), (this.angle = a), (this.context = h), (this.renderCount = 0) } return (n(e, [{ key: "draw", value: function () { (this.context.fillStyle = this.color), this.context.beginPath(), this.context.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI), this.context.fill() } }, { key: "move", value: function () { (this.position.x = Math.sin(this.angle) * this.speed + this.position.x), (this.position.y = Math.cos(this.angle) * this.speed + this.position.y + 0.3 * this.renderCount), this.renderCount++ } }]), e) })(), o = (function () { function i(n) { var e = n.origin, o = n.context, r = n.circleCount, s = void 0 === r ? 10 : r, a = n.area; t(this, i), (this.origin = e), (this.context = o), (this.circleCount = s), (this.area = a), (this.stop = !1), (this.circles = []) } return (n(i, [{ key: "randomArray", value: function (t) { var i = t.length; return t[Math.floor(i * Math.random())] } }, { key: "randomColor", value: function () { var t = ["8", "9", "A", "B", "C", "D", "E", "F"]; return "#" + this.randomArray(t) + this.randomArray(t) + this.randomArray(t) + this.randomArray(t) + this.randomArray(t) + this.randomArray(t) } }, { key: "randomRange", value: function (t, i) { return (i - t) * Math.random() + t } }, { key: "init", value: function () { for (var t = 0; t < this.circleCount; t++) { var i = new e({ context: this.context, origin: this.origin, color: this.randomColor(), angle: this.randomRange(Math.PI - 1, Math.PI + 1), speed: this.randomRange(1, 6) }); this.circles.push(i) } } }, { key: "move", value: function () { var t = this; this.circles.forEach(function (i, n) { if (i.position.x > t.area.width || i.position.y > t.area.height) { return t.circles.splice(n, 1) } i.move() }), 0 == this.circles.length && (this.stop = !0) } }, { key: "draw", value: function () { this.circles.forEach(function (t) { return t.draw() }) } }]), i) })(); new ((function () { function i() { t(this, i), (this.computerCanvas = document.createElement("canvas")), (this.renderCanvas = document.createElement("canvas")), (this.computerContext = this.computerCanvas.getContext("2d")), (this.renderContext = this.renderCanvas.getContext("2d")), (this.globalWidth = window.innerWidth), (this.globalHeight = window.innerHeight), (this.booms = []), (this.running = !1) } return (n(i, [{ key: "handleMouseDown", value: function (t) { var i = new o({ origin: { x: t.clientX, y: t.clientY }, context: this.computerContext, area: { width: this.globalWidth, height: this.globalHeight } }); i.init(), this.booms.push(i), this.running || this.run() } }, { key: "handlePageHide", value: function () { (this.booms = []), (this.running = !1) } }, { key: "init", value: function () { var t = this.renderCanvas.style; (t.position = "fixed"), (t.top = t.left = 0), (t.zIndex = "5201314"), (t.pointerEvents = "none"), (t.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth), (t.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight), document.body.append(this.renderCanvas), window.addEventListener("mousedown", this.handleMouseDown.bind(this)), window.addEventListener("pagehide", this.handlePageHide.bind(this)) } }, { key: "run", value: function () { var t = this; if (((this.running = !0), 0 == this.booms.length)) { return (this.running = !1) } requestAnimationFrame(this.run.bind(this)), this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight), this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight), this.booms.forEach(function (i, n) { if (i.stop) { return t.booms.splice(n, 1) } i.move(), i.draw() }), this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight) } }]), i) })())().init() });

var fnTextPopup = function (arr, options) {
  if (!arr || !arr.length) {
    return;
  }
  var index = 0;
  document.documentElement.addEventListener('click', function (event) {
    var x = event.pageX, y = event.pageY;
    var eleText = document.createElement('span');
    eleText.className = 'text-popup';
    this.appendChild(eleText);
    if (arr[index]) {
      console.log(arr[index]);
      eleText.innerHTML = arr[index];
    } else {
      console.log(arr[index]);
      index = 0;
      eleText.innerHTML = arr[0];
    }
    eleText.addEventListener('animationend', function () {
      eleText.parentNode.removeChild(eleText);
    });
    eleText.style.left = (x - eleText.clientWidth / 2) + 'px';
    eleText.style.top = (y - eleText.clientHeight) + 'px';
    index++;
  });
};
fnTextPopup(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']);
// fnTextPopup(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
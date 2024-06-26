var _0xb483 = ["_decode", "http://www.sojson.com/javascriptobfuscator.html"];
(function(_0xd642x1) {
	_0xd642x1[_0xb483[0]] = _0xb483[1]
})(window);
var __Ox61672 = ["audio", "getElementById", "cover", "li", "getElementsByTagName", "ul", "a", "span", "song_name",
	"goSinger", "play_left", "play_right", "src", "data-name", "getAttribute", "innerHTML", "b", "className", "danqian",
	"onclick", "btn_play", "btn_pause", "play", "pause", "duration", "currentTime", "play_loading", "play_on",
	"totalTime", "floor", ":", "WebkitTransform", "style", "translateX(", "%)", "end", "buffered", "progress",
	"offsetLeft", "offsetParent", "clientX", "scrollLeft", "body", "scrollWidth", "onmousemove", "length", "", "data-lrc",
	"ended", "time", "[", "split", "]", "lyricDiv", "p", "createElement", "line_", "id", "setAttribute", "appendChild",
	"#lyricDiv", "-webkit-transform", "translate3d(0px ,0px,0px)", "css", "current", "translate3d(0px ,", "px,0px)",
	"GET", "text", "log", "ajax", "[00:01:01]该歌曲暂无歌词", "touches", "pageX", "pageY", "preventDefault",
	"translate3d(0, 0px, 0px)", ".zuobian", "translate3d(100%, 0px, 0px)", ".youbian", "kongzhi_2", "removeClass",
	".diyige a", "addClass", ".diyige a:eq(0)", "z-index", "1", "0", "translate3d(-100%, 0px, 0px)", ".diyige a:eq(1)",
	"touchstart", "addEventListener", "touchmove", "touchend", "ready"
];
var audio = document[__Ox61672[0x1]](__Ox61672[0x0]);
console.log(__Ox61672); //0x19为进度条 0x40歌词
/* console.log(0x1c); */
var anniu = document[__Ox61672[0x1]](__Ox61672[0x2]);
var allLI = document[__Ox61672[0x1]](__Ox61672[0x5])[__Ox61672[0x4]](__Ox61672[0x3]);
var allAA = document[__Ox61672[0x1]](__Ox61672[0x5])[__Ox61672[0x4]](__Ox61672[0x6]);
var wenzi = document[__Ox61672[0x1]](__Ox61672[0x8])[__Ox61672[0x4]](__Ox61672[0x7])[0x0];
var goSinger = document[__Ox61672[0x1]](__Ox61672[0x9])[__Ox61672[0x4]](__Ox61672[0x7])[0x0];
var shagnyiqu = document[__Ox61672[0x1]](__Ox61672[0xa]);
var xiayiqu = document[__Ox61672[0x1]](__Ox61672[0xb]);
var this_jis = 0;
audio[__Ox61672[0xc]] = allLI[0x0][__Ox61672[0xe]](__Ox61672[0xd]);
wenzi[__Ox61672[0xf]] = allLI[0x0][__Ox61672[0x4]](__Ox61672[0x10])[0x0][__Ox61672[0xf]];
goSinger[__Ox61672[0xf]] = allLI[0x0][__Ox61672[0x4]](__Ox61672[0x7])[0x0][__Ox61672[0xf]];
allAA[0x0][__Ox61672[0x11]] = __Ox61672[0x12];
anniu[__Ox61672[0x13]] = function() {
	if (anniu[__Ox61672[0x11]] == __Ox61672[0x14]) {
		anniu[__Ox61672[0x11]] = __Ox61672[0x15];
		audio[__Ox61672[0x16]]();
		var zanting = setInterval(timing, 1)
	} else {
		anniu[__Ox61672[0x11]] = __Ox61672[0x14];
		audio[__Ox61672[0x17]]()
	}
};

function timing() {
	/* _0x2ecbxd歌词控件 */
	var _0x2ecbxc = audio[__Ox61672[0x18]];
	var _0x2ecbxd = document[__Ox61672[0x1]](__Ox61672[0x19]);
	var _0x2ecbxe = document[__Ox61672[0x1]](__Ox61672[0x1a]);
	var barState = document[__Ox61672[0x1]](__Ox61672[0x1b]);
	var _0x2ecbx10 = audio[__Ox61672[0x19]];
	var _0x2ecbx11 = document[__Ox61672[0x1]](__Ox61672[0x1c]);
	m = parseInt(_0x2ecbxc / 60);
	s = Math[__Ox61672[0x1d]](_0x2ecbxc % 60);
	var value = m + __Ox61672[0x1e] + s;
	if (value == "NaN:NaN") {
		value = "0:00";
	}
	_0x2ecbx11[__Ox61672[0xf]] = value;
	dm = parseInt(_0x2ecbx10 / 60);
	ds = Math[__Ox61672[0x1d]](_0x2ecbx10 % 60);
	if (ds < 10) {
		ds = "0" + ds;
	}
	_0x2ecbxd[__Ox61672[0xf]] = dm + __Ox61672[0x1e] + ds;
	jd = (_0x2ecbx10 / _0x2ecbxc) * 100;
	barState[__Ox61672[0x20]][__Ox61672[0x1f]] = __Ox61672[0x21] + jd + __Ox61672[0x22];
	var _0x2ecbx12 = audio[__Ox61672[0x24]][__Ox61672[0x23]](0);
	hc = (_0x2ecbx12 / _0x2ecbxc) * 100;
	_0x2ecbxe[__Ox61672[0x20]][__Ox61672[0x1f]] = __Ox61672[0x21] + hc + __Ox61672[0x22];
}
var zanting = setInterval(timing, 1);
var allTiao = document[__Ox61672[0x1]](__Ox61672[0x25]);
var barState = document[__Ox61672[0x1]](__Ox61672[0x1b]);
allTiao[__Ox61672[0x13]] = function() {
	function _0x2ecbx14(_0x2ecbx15) {
		var _0x2ecbx16 = _0x2ecbx15;
		var _0x2ecbx17 = _0x2ecbx15[__Ox61672[0x26]];
		while (_0x2ecbx16 = _0x2ecbx16[__Ox61672[0x27]]) {
			_0x2ecbx17 += _0x2ecbx16[__Ox61672[0x26]]
		};
		return _0x2ecbx17
	}

	function _0x2ecbx18(_0x2ecbx19) {
		var _0x2ecbx1a, _0x2ecbx17, _0x2ecbx1b;
		_0x2ecbx1b = document[__Ox61672[0x1]](__Ox61672[0x25]);
		_0x2ecbx17 = _0x2ecbx14(_0x2ecbx1b);
		dianji = _0x2ecbx19[__Ox61672[0x28]] - _0x2ecbx17 + document[__Ox61672[0x2a]][__Ox61672[0x29]]
	}
	var _0x2ecbx1c = audio[__Ox61672[0x18]];
	sw = allTiao[__Ox61672[0x2b]];
	allTiao[__Ox61672[0x2c]] = _0x2ecbx18(event);
	djwz = (dianji / sw) * 100;
	barState[__Ox61672[0x20]][__Ox61672[0x1f]] = __Ox61672[0x21] + djwz + __Ox61672[0x22];
	djdsj = djwz * (_0x2ecbx1c / 100);
	audio[__Ox61672[0x19]] = djdsj
};
for (lc = 0; lc < allAA[__Ox61672[0x2d]]; lc++) {
	allAA[lc][__Ox61672[0x13]] = function() {
		for (lca = 0; lca < allAA[__Ox61672[0x2d]]; lca++) {
			allAA[lca][__Ox61672[0x11]] = __Ox61672[0x2e]
		};
		this[__Ox61672[0x11]] = __Ox61672[0x12];
		liebigewq = this[__Ox61672[0x4]](__Ox61672[0x3])[0x0][__Ox61672[0xe]](__Ox61672[0xd]);
		audio[__Ox61672[0xc]] = liebigewq;
		show_musice_lrc(this[__Ox61672[0x4]](__Ox61672[0x3])[0x0][__Ox61672[0xe]](__Ox61672[0x2f]));
		wenzi[__Ox61672[0xf]] = this[__Ox61672[0x4]](__Ox61672[0x10])[0x0][__Ox61672[0xf]];
		goSinger[__Ox61672[0xf]] = this[__Ox61672[0x4]](__Ox61672[0x7])[0x0][__Ox61672[0xf]];
		anniu[__Ox61672[0x11]] = __Ox61672[0x15];
		audio[__Ox61672[0x16]]()
	}
};

function xiayishou() {
	if (audio[__Ox61672[0x30]]) {
		clearInterval(dd);
		var _0x2ecbx1e = audio[__Ox61672[0xc]];
		if (this_jis != (allLI[__Ox61672[0x2d]]) - 1) {
			zidong = allLI[this_jis + 1][__Ox61672[0xe]](__Ox61672[0xd]);
			audio[__Ox61672[0xc]] = zidong;
			show_musice_lrc(allLI[this_jis + 1][__Ox61672[0xe]](__Ox61672[0x2f]));
			for (lca = 0; lca < allAA[__Ox61672[0x2d]]; lca++) {
				allAA[lca][__Ox61672[0x11]] = __Ox61672[0x2e]
			};
			allAA[this_jis + 1][__Ox61672[0x11]] = __Ox61672[0x12];
			wenzi[__Ox61672[0xf]] = allAA[this_jis + 1][__Ox61672[0x4]](__Ox61672[0x10])[0x0][__Ox61672[0xf]];
			goSinger[__Ox61672[0xf]] = allAA[this_jis + 1][__Ox61672[0x4]](__Ox61672[0x7])[0x0][__Ox61672[0xf]];
			audio[__Ox61672[0x16]]();
			dd = setInterval(xiayishou, 1);
			this_jis += 1
		} else {
			zidong = allLI[0x0][__Ox61672[0xe]](__Ox61672[0xd]);
			audio[__Ox61672[0xc]] = zidong;
			show_musice_lrc(allLI[0x0][__Ox61672[0xe]](__Ox61672[0x2f]));
			for (lcae = 0; lcae < allAA[__Ox61672[0x2d]]; lcae++) {
				allAA[lcae][__Ox61672[0x11]] = __Ox61672[0x2e]
			};
			allAA[0x0][__Ox61672[0x11]] = __Ox61672[0x12];
			wenzi[__Ox61672[0xf]] = allAA[0x0][__Ox61672[0x4]](__Ox61672[0x10])[0x0][__Ox61672[0xf]];
			goSinger[__Ox61672[0xf]] = allAA[0x0][__Ox61672[0x4]](__Ox61672[0x7])[0x0][__Ox61672[0xf]];
			audio[__Ox61672[0x16]]();
			dd = setInterval(xiayishou, 1);
			this_jis = 0
		}
	}
}
dd = setInterval(xiayishou, 1);
shagnyiqu[__Ox61672[0x13]] = function() {
	var _0x2ecbx1e = audio[__Ox61672[0xc]];
	if (this_jis != 0) {
		zidong = allLI[this_jis - 1][__Ox61672[0xe]](__Ox61672[0xd]);
		audio[__Ox61672[0xc]] = zidong;
		show_musice_lrc(allLI[this_jis - 1][__Ox61672[0xe]](__Ox61672[0x2f]));
		for (lca = 0; lca < allAA[__Ox61672[0x2d]]; lca++) {
			allAA[lca][__Ox61672[0x11]] = __Ox61672[0x2e]
		};
		allAA[this_jis - 1][__Ox61672[0x11]] = __Ox61672[0x12];
		wenzi[__Ox61672[0xf]] = allAA[this_jis - 1][__Ox61672[0x4]](__Ox61672[0x10])[0x0][__Ox61672[0xf]];
		goSinger[__Ox61672[0xf]] = allAA[this_jis - 1][__Ox61672[0x4]](__Ox61672[0x7])[0x0][__Ox61672[0xf]];
		anniu[__Ox61672[0x11]] = __Ox61672[0x15];
		audio[__Ox61672[0x16]]();
		this_jis -= 1
	} else {
		zidong = allLI[allLI[__Ox61672[0x2d]] - 1][__Ox61672[0xe]](__Ox61672[0xd]);
		audio[__Ox61672[0xc]] = zidong;
		show_musice_lrc(allLI[allLI[__Ox61672[0x2d]] - 1][__Ox61672[0xe]](__Ox61672[0x2f]));
		for (lcae = 0; lcae < allAA[__Ox61672[0x2d]]; lcae++) {
			allAA[lcae][__Ox61672[0x11]] = __Ox61672[0x2e]
		};
		allAA[allLI[__Ox61672[0x2d]] - 1][__Ox61672[0x11]] = __Ox61672[0x12];
		wenzi[__Ox61672[0xf]] = allAA[allLI[__Ox61672[0x2d]] - 1][__Ox61672[0x4]](__Ox61672[0x10])[0x0][__Ox61672[0xf]];
		goSinger[__Ox61672[0xf]] = allAA[allLI[__Ox61672[0x2d]] - 1][__Ox61672[0x4]](__Ox61672[0x7])[0x0][__Ox61672[0xf]];
		anniu[__Ox61672[0x11]] = __Ox61672[0x15];
		audio[__Ox61672[0x16]]();
		this_jis = allLI[__Ox61672[0x2d]] - 1
	}
};
xiayiqu[__Ox61672[0x13]] = function() {
	var _0x2ecbx1e = audio[__Ox61672[0xc]];
	if (this_jis != (allLI[__Ox61672[0x2d]]) - 1) {
		zidong = allLI[this_jis + 1][__Ox61672[0xe]](__Ox61672[0xd]);
		audio[__Ox61672[0xc]] = zidong;
		show_musice_lrc(allLI[this_jis + 1][__Ox61672[0xe]](__Ox61672[0x2f]));
		for (lca = 0; lca < allAA[__Ox61672[0x2d]]; lca++) {
			allAA[lca][__Ox61672[0x11]] = __Ox61672[0x2e]
		};
		allAA[this_jis + 1][__Ox61672[0x11]] = __Ox61672[0x12];
		wenzi[__Ox61672[0xf]] = allAA[this_jis + 1][__Ox61672[0x4]](__Ox61672[0x10])[0x0][__Ox61672[0xf]];
		goSinger[__Ox61672[0xf]] = allAA[this_jis + 1][__Ox61672[0x4]](__Ox61672[0x7])[0x0][__Ox61672[0xf]];
		anniu[__Ox61672[0x11]] = __Ox61672[0x15];
		audio[__Ox61672[0x16]]();
		this_jis += 1
	} else {
		zidong = allLI[0x0][__Ox61672[0xe]](__Ox61672[0xd]);
		audio[__Ox61672[0xc]] = zidong;
		show_musice_lrc(allLI[0x0][__Ox61672[0xe]](__Ox61672[0x2f]));
		for (lcae = 0; lcae < allAA[__Ox61672[0x2d]]; lcae++) {
			allAA[lcae][__Ox61672[0x11]] = __Ox61672[0x2e]
		};
		allAA[0x0][__Ox61672[0x11]] = __Ox61672[0x12];
		wenzi[__Ox61672[0xf]] = allAA[0x0][__Ox61672[0x4]](__Ox61672[0x10])[0x0][__Ox61672[0xf]];
		goSinger[__Ox61672[0xf]] = allAA[0x0][__Ox61672[0x4]](__Ox61672[0x7])[0x0][__Ox61672[0xf]];
		anniu[__Ox61672[0x11]] = __Ox61672[0x15];
		audio[__Ox61672[0x16]]();
		this_jis = 0
	}
};
if (!localStorage[__Ox61672[0x31]]) {
	localStorage[__Ox61672[0x31]] = 0
};
var shijianshuzu = new Array();
var gecishuzu = new Array();
var show_lrc_interval = null;
var shijianshuzu = [];
var gecishuzu = [];

function parse(_0x2ecbx23) {
	shijianshuzu = [];
	gecishuzu = [];
	str = _0x2ecbx23[__Ox61672[0x33]](__Ox61672[0x32]);
	for (var _0x2ecbx24 = 1; _0x2ecbx24 < str[__Ox61672[0x2d]]; _0x2ecbx24++) {
		var _0x2ecbx25 = str[_0x2ecbx24][__Ox61672[0x33]](__Ox61672[0x34])[0x0];
		var _0x2ecbx26 = str[_0x2ecbx24][__Ox61672[0x33]](__Ox61672[0x34])[0x1];
		var _0x2ecbx27 = _0x2ecbx25[__Ox61672[0x33]](__Ox61672[0x1e])[0x0];
		var _0x2ecbx28 = _0x2ecbx25[__Ox61672[0x33]](__Ox61672[0x1e])[0x1];
		var _0x2ecbx29 = parseInt(_0x2ecbx27) * 60 + parseInt(_0x2ecbx28);
		shijianshuzu[_0x2ecbx24 - 1] = _0x2ecbx29 - localStorage[__Ox61672[0x31]];
		gecishuzu[_0x2ecbx24 - 1] = _0x2ecbx26
	};
	var _0x2ecbx2a = document[__Ox61672[0x1]](__Ox61672[0x35]);
	_0x2ecbx2a[__Ox61672[0xf]] = __Ox61672[0x2e];
	for (var _0x2ecbx24 = 0; _0x2ecbx24 < shijianshuzu[__Ox61672[0x2d]]; _0x2ecbx24++) {
		gcp = document[__Ox61672[0x37]](__Ox61672[0x36]);
		idname = __Ox61672[0x38] + _0x2ecbx24;
		gcp[__Ox61672[0xf]] = gecishuzu[_0x2ecbx24];
		gcp[__Ox61672[0x3a]](__Ox61672[0x39], idname);
		_0x2ecbx2a[__Ox61672[0x3b]](gcp)
	};
	if (show_lrc_interval) {
		clearInterval(show_lrc_interval)
	};
	show_lrc_interval = setInterval(updategeci, 1000)
}

function updategeci() {
	var _0x2ecbx2a = document[__Ox61672[0x1]](__Ox61672[0x35]);
	var _0x2ecbx2c = _0x2ecbx2a[__Ox61672[0x4]](__Ox61672[0x36]);
	var _0x2ecbx24 = getcurrent();
	let _0x2ecbx2d = $(__Ox61672[0x3c]);
	if (_0x2ecbx2c[__Ox61672[0x2d]] < 2) {
		_0x2ecbx2d[__Ox61672[0x3f]](__Ox61672[0x3d], __Ox61672[0x3e]);
		return
	};
	shijia = -(_0x2ecbx24 - 1) * 24;
	for (qt = 0; qt < _0x2ecbx2c[__Ox61672[0x2d]]; qt++) {
		_0x2ecbx2c[qt][__Ox61672[0x11]] = __Ox61672[0x2e]
	};
	_0x2ecbx2c[_0x2ecbx24 - 1][__Ox61672[0x11]] = __Ox61672[0x40];
	_0x2ecbx2d[__Ox61672[0x3f]](__Ox61672[0x3d], __Ox61672[0x41] + shijia + __Ox61672[0x42]);
	var text = $("p.current").text();
	if (text.length > 30) {
		$("#lyric_txt p").height(24);
		$("p.current").height("auto");
		$("#lyric_txt").height($("p.current").height());
		console.log(text.length);
	} else {
		$("p.current,#lyric_txt").height(24);
		console.log(text.length);
	}
}

function getcurrent() {
	var _0x2ecbx2f = document[__Ox61672[0x1]](__Ox61672[0x0]);
	var _0x2ecbx24 = 0;
	for (_0x2ecbx24 = 0; _0x2ecbx24 < shijianshuzu[__Ox61672[0x2d]]; _0x2ecbx24++) {
		if (shijianshuzu[_0x2ecbx24] >= _0x2ecbx2f[__Ox61672[0x19]]) {
			return _0x2ecbx24
		}
	};
	return _0x2ecbx24 - 1
}

function show_musice_lrc(_0x2ecbx31) {
	if (_0x2ecbx31) {
		$[__Ox61672[0x46]]({
			url: _0x2ecbx31,
			type: __Ox61672[0x43],
			dataType: __Ox61672[0x44],
			success: function(_0x2ecbx32) {
				/* console[__Ox61672[0x45]](_0x2ecbx32); 歌词*/
				parse(_0x2ecbx32);
			},
			error: function(_0x2ecbx32) {
				console[__Ox61672[0x45]](_0x2ecbx32)
			}
		})
	} else {
		parse(__Ox61672[0x47])
	}
}(function ok() {
	show_musice_lrc(allLI[0x0][__Ox61672[0xe]](__Ox61672[0x2f]))
})();
var startX = 0,
	startY = 0;

function touchSatrtFunc(_0x2ecbx37) {
	try {
		var _0x2ecbx38 = _0x2ecbx37[__Ox61672[0x48]][0x0];
		var _0x2ecbx39 = Number(_0x2ecbx38[__Ox61672[0x49]]);
		var _0x2ecbx3a = Number(_0x2ecbx38[__Ox61672[0x4a]]);
		startX = _0x2ecbx39;
		startY = _0x2ecbx3a
	} catch (e) {}
}

function touchMoveFunc(_0x2ecbx37) {
	try {
		var _0x2ecbx38 = _0x2ecbx37[__Ox61672[0x48]][0x0];
		var _0x2ecbx39 = Number(_0x2ecbx38[__Ox61672[0x49]]);
		var _0x2ecbx3a = Number(_0x2ecbx38[__Ox61672[0x4a]]);
		if (_0x2ecbx3a - startY < 12 && _0x2ecbx3a - startY > -12) {
			_0x2ecbx37[__Ox61672[0x4b]]()
		};
		if (_0x2ecbx39 - startX > 35) {
			$(__Ox61672[0x4d])[__Ox61672[0x3f]](__Ox61672[0x3d], __Ox61672[0x4c]);
			$(__Ox61672[0x4f])[__Ox61672[0x3f]](__Ox61672[0x3d], __Ox61672[0x4e]);
			$(__Ox61672[0x52])[__Ox61672[0x51]](__Ox61672[0x50]);
			$(__Ox61672[0x54])[__Ox61672[0x53]](__Ox61672[0x50]);
			$(__Ox61672[0x4d])[__Ox61672[0x3f]](__Ox61672[0x55], __Ox61672[0x56]);
			$(__Ox61672[0x4f])[__Ox61672[0x3f]](__Ox61672[0x55], __Ox61672[0x57])
		} else {
			if (_0x2ecbx39 - startX < -35) {
				$(__Ox61672[0x4d])[__Ox61672[0x3f]](__Ox61672[0x3d], __Ox61672[0x58]);
				$(__Ox61672[0x4f])[__Ox61672[0x3f]](__Ox61672[0x3d], __Ox61672[0x4c]);
				$(__Ox61672[0x52])[__Ox61672[0x51]](__Ox61672[0x50]);
				$(__Ox61672[0x59])[__Ox61672[0x53]](__Ox61672[0x50]);
				$(__Ox61672[0x4d])[__Ox61672[0x3f]](__Ox61672[0x55], __Ox61672[0x57]);
				$(__Ox61672[0x4f])[__Ox61672[0x3f]](__Ox61672[0x55], __Ox61672[0x56])
			}
		}
	} catch (e) {}
}

function touchEndFunc(_0x2ecbx37) {
	try {} catch (e) {}
}
document[__Ox61672[0x5b]](__Ox61672[0x5a], touchSatrtFunc, false);
document[__Ox61672[0x5b]](__Ox61672[0x5c], touchMoveFunc, false);
document[__Ox61672[0x5b]](__Ox61672[0x5d], touchEndFunc, false);
$(document)[__Ox61672[0x5e]](function() {})

/**
* 简单的识别客户端类型,根据类型进入不同的页面
*/	
function checkserAgent() {
	var userAgentInfo = navigator.userAgent;
	var userAgentKeywords = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "MQQBrowser");//定义移动终端的操作系统类型
	var flag = false;
	//排除windows系统 苹果系统
	/*if (userAgentInfo.indexOf("Windows NT") == -1) {
		flag = true;
	}*/
	////排除上述数组中的设备
	for (var i=0,len=userAgentKeywords.length; i<len; i++){
		if (userAgentInfo.indexOf(userAgentKeywords[i]) != -1) {
			flag = true;
			//return flag;
			break;
		}
	}
	return flag;
}
//移动设备
if (checkserAgent()) {
	document.location.href = "./mobile.html";
	//alert('移动设备！');
}
/*else
{
	document.location.href = "./index.html";
	//alert('PC设备！');
}*/

/*
 *   对应<script>love(document.getElementById('love'));</script>脚本
 * */
var love = function (r) { 
  function t() { 
      return b[Math.floor(Math.random() * b.length)] 
  } 
  function e() { 
    return String.fromCharCode(94 * Math.random() + 33) 
  } 
  function n(r) { 
    for (var n = document.createDocumentFragment(), i = 0; r > i; i++) { 
      var l = document.createElement("span"); 
      l.textContent = e(), l.style.color = t(), n.appendChild(l) 
    } 
    return n 
  } 
  function i() { 
    var t = o[c.skillI]; 
    c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), 
      r.textContent = c.text, 
      r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), 
      setTimeout(i, d) 
  } 
  var l = "< ", 
      o = ["Unremitting self-improvement social commitment", "To Live Is Better Than to Die", "Started Ahead", "The relentless pursuit of perfection", "Let's make things better", "No business too small, no problem too big", "Just do it", "never give up"].map(function (r) { return r + "." }), 
      a = 2, 
      g = 1, 
      s = 5, 
      d = 75, 
      b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"], 
      c = { text: "", prefixP: -s, skillI: 0, skillP: 0, direction: "forward", delay: a, step: g }; 
  i() 
}; 

/**
* 弹出DIV空间覆盖页面的提醒浮层窗口，提醒内容为传入的str变量文本
*/
function Remind(str) {
    var windowsWidth,windowsHight,borderColor;
    windowsWidth=350;//提示窗口的宽度
    windowsHight=80;//提示窗口的高度  
    borderColor="#304558";//提示窗口的边框颜色
    var sWidth,sHeight;
    //获取当前窗口尺寸
    sWidth = document.body.offsetWidth;
    sHeight = document.body.offsetHeight;
	//背景面板div
    var remindPanel=document.createElement("div");
    remindPanel.setAttribute('id','remindPanelID');
    remindPanel.style.position="absolute";
    remindPanel.style.top="0";
    remindPanel.style.background="#E8E8E8";
    remindPanel.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
    remindPanel.style.opacity="0.6";
    remindPanel.style.left="0";
    remindPanel.style.width = sWidth + "px";
    remindPanel.style.height = sHeight + "px";
    remindPanel.style.zIndex = "1";
    document.body.appendChild(remindPanel);
    //提示文本面板div
    var remindTextPanel = document.createElement("div")
    remindTextPanel.setAttribute("id","remindTextPanelID");
    remindTextPanel.setAttribute("align","center");
    remindTextPanel.style.background="white";
    remindTextPanel.style.border="1px solid " + borderColor;
    remindTextPanel.style.position = "absolute";
    remindTextPanel.style.left = "50%";
    remindTextPanel.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
    //窗口距离左侧和顶端的距离
    remindTextPanel.style.marginLeft = "-200px";
    //窗口被卷去的高+（屏幕可用工作区高/2）-150
    remindTextPanel.style.top = document.body.scrollTop+(window.screen.availHeight/2)-150 +"px";
    remindTextPanel.style.width = windowsWidth + "px";
    remindTextPanel.style.height = windowsHight + "px";
    remindTextPanel.style.textAlign = "center";
    remindTextPanel.style.lineHeight ="25px";
    remindTextPanel.style.zIndex = "2";
    document.body.appendChild(remindTextPanel);
    //提示信息标题
    var remindTitle=document.createElement("h4");
    remindTitle.setAttribute("id","remindTitleText");
    remindTitle.setAttribute("align","left");
    remindTitle.style.margin="0";
    remindTitle.style.padding="4px";
    remindTitle.style.background = borderColor;
    remindTitle.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
    remindTitle.style.opacity="0.75";
    remindTitle.style.border="1px solid " + borderColor;
    remindTitle.style.height="18px";
    remindTitle.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
    remindTitle.style.color="white";
    remindTitle.innerHTML="MALFUNCTION REMINDING";
    document.getElementById("remindTextPanelID").appendChild(remindTitle);
    //提示信息
    var remindText = document.createElement("p");
    remindText.setAttribute("id","msgTxt");
    remindText.style.margin="16px 0";
    remindText.innerHTML = str; //将传入的提醒文本赋值到当前提醒中
    document.getElementById("remindTextPanelID").appendChild(remindText);
    //设置关闭时间
    window.setTimeout("closewin()",2000);
}
function closewin() {
    document.body.removeChild(document.getElementById("remindPanelID"));
    document.getElementById("remindTextPanelID").removeChild(document.getElementById("remindTitleText"));
    document.body.removeChild(document.getElementById("remindTextPanelID"));
	  window.location.href="/";
}


/*
 *   对应<script>love(document.getElementById('love'));</script>脚本
 * */
var love = function (r) { function t() { return b[Math.floor(Math.random() * b.length)] } function e() { return String.fromCharCode(94 * Math.random() + 33) } function n(r) { for (var n = document.createDocumentFragment(), i = 0; r > i; i++) { var l = document.createElement("span"); l.textContent = e(), l.style.color = t(), n.appendChild(l) } return n } function i() { var t = o[c.skillI]; c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d) } var l = "< ", o = ["Unremitting self-improvement social commitment", "To Live Is Better Than to Die", "Started Ahead", "The relentless pursuit of perfection", "Let's make things better", "No business too small, no problem too big", "Just do it", "never give up"].map(function (r) { return r + "." }), a = 2, g = 1, s = 5, d = 75, b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"], c = { text: "", prefixP: -s, skillI: 0, skillP: 0, direction: "forward", delay: a, step: g }; i() }; 

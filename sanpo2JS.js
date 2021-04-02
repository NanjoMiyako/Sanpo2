//初期値設定
var crossPtType=2
changeBorder(2);

var NextDirection=1

function changeBorder(id1){
	crossPtType=Number(id1)
	clearBorder()
	id2 = "a"+id1
	img = document.getElementById(id2)
	img.style.border="solid"
	img.style.borderWidth = "thick";
	
	
}
function ClearNextDirection(){
	img1 = document.getElementById("bRoot");
	img1.hidden = true
}
function DisideNextDirection(){
var baseURL = "https://raw.githubusercontent.com/NanjoMiyako/Sanpo2/main/crossPt"

var min = 1 ;
var max = crossPtType;

var r1= Math.floor( Math.random() * (max + 1 - min) ) + min ;

var str1 = baseURL +"/"+ "B" + crossPtType + "-" + r1 + ".jpg"

	img1 = document.getElementById("bRoot");
	img1.src = str1
	img1.hidden = false

}
function clearBorder(){
	img = document.getElementById("a2")
	img.style.border="none"
	img = document.getElementById("a3")
	img.style.border="none"
	img = document.getElementById("a4")
	img.style.border="none"
	img = document.getElementById("a5")
	img.style.border="none"
	img = document.getElementById("a6")
	img.style.border="none"
	img = document.getElementById("a7")
	img.style.border="none"
}
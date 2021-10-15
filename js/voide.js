	var curIndex = 0;
	var timeInterval = 1000;
	var arr = new Array();
	arr[0] = "img/wula/bg_img2.png";
	arr[1] = "img/wula/bg_img3.png";
	arr[2] = "img/wula/bg_img4.png";
	setInterval(changeImg, timeInterval);
	function changeImg() {
		var obj = document.getElementById("wuli");
		if (curIndex == arr.length - 1) {
		curIndex = 0;
		} else {
		curIndex += 1;
		}
		obj.style.backgroundImage= "URL("+arr[curIndex]+")"; 
	}
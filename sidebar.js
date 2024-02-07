let c = 0;
function toggleSidebar() {
	
	if (c == 0) {
		const toggle = document.getElementById("side-header");
		toggle.style.left = "0px";
		c++;
	}
	
	else if (c == 1) {
		const toggle = document.getElementById("side-header");
		toggle.style.left = "-500px";
		c--;
	}
}


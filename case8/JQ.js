function $(sec){
	this.dom = document.getElementById(sec);
};
$.prototype.click =function(fun){
	this.dom.onclick = fun;
}
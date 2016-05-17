(function(){
	function $(num){
		return $.prototype.setin();
	}
	// $.prototype= {
	// 	index:function(){
	// 		var arr = this.dom.parentNode.children;
	// 		for (var i =0;i<arr.length;i++){
	// 			if(arr[i]==this.dom){
	// 				return i;
	// 			}
			
	// 		}
	// 	}
		
	// }
	$.prototype.setin=function(){
		this.dom = document.getElementById("num");
		return this
	}
	$.prototype.index=function(){

		var arr = this.dom.parentNode.children;
		for (var i =0;i<arr.length;i++){
			if(arr[i]==this.dom){
				return i;
			}
		
		}
	}
	$.prototype.click=function(fun){
		this.dom.onclick=fun;
	}
	window.$=$;
})()

window.snake.combinedModes = function(){
	const scripts = document.getElementsByTagName("script");
	let url = "";
	/*find the script*/
	for(let script of scripts){
		if(script.src != "" && script.src.indexOf('apis.google.com')==-1){
			// xhr to get source code
			try{
				const req = new XMLHttpRequest();
				req.open("GET", script.src);
				req.onload = function() {
					/*check if this is the snake script*/
					if(this.responseText.indexOf('trophy') != -1){
						processSnakeCode(this.responseText);
					}
				};
				req.send();
			}
			catch{}
		}
	}
	return;

	function processSnakeCode(code){
		func = code.match(/[a-zA-Z0-9_]{1,6}=function\(a,b\){return a.[a-zA-Z0-9]{1,4}===b}/)[0];
		func_name = func.substring(0,func.indexOf("="));
		eval(
			func_name+"=function(a,b){return window.snake.modes.indexOf(b) != -1;}"
		);
	
	}
}
window.snake.modes = [1,2];
window.snake.combinedModes();
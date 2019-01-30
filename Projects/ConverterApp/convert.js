
//DOM Manipulation to Listen for Input, and then Outputs the converted currency value
document.getElementById('dlinput').addEventListener('input' , 
			function(e) {
				
				let dollar = e.target.value;
				let total = dollar*83.73.toFixed();
				document.getElementById('takaOutput').innerHTML = total;

		}
		);

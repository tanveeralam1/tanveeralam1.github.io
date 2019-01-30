
//DOM Manipulation to Listen for Input, and then Outputs the converted currency value
document.getElementById('dlinput').addEventListener('input' , 
			function(e) {
				
				let dollar = e.target.value;
				document.getElementById('takaOutput').innerHTML = dollar*83.73.toFixed(2);

		}
		);

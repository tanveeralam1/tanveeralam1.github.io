document.getElementById('dlinput').addEventListener('input' , 
			function(e) {
				
				let dollar = e.target.value;
				document.getElementById('takaOutput').innerHTML = dollar*83.73;

		}
		);

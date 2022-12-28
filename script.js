4 (function(){
    "use strict";
        let convertType = 'miles';
		const heading = document.querySelector('h1');
		const paragraph = document.querySelector('p');
		const answerDiv = document.getElementById('answer');
		const form = document.getElementById('convert');

		document.addEventListener('keydown', function(event){
			const key = event.code;
			

			if ( key === "KeyK") {
				convertType = 'kilometers';
				heading.innerHTML = "Kilometers to Miles Converter";
				paragraph.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
			}
			else if ( key === "KeyM") {
				convertType = 'miles';
				heading.innerHTML = "Miles to Kilometers Converter";
				paragraph.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
			}
			
		});
		form.addEventListener('submit', function(event){
			event.preventDefault();
			const distance = parseFloat(document.getElementById('distance').value);
			let conversion;
			if(distance){
				if(convertType == "kilometers"){
					conversion = (distance*0.621371192).toFixed(3);
					answer.innerHTML = `<h2>${distance} kilometers is converted to ${conversion} miles</h2>`;
				}
				else if (convertType == "miles"){
					conversion = (distance*1.689344).toFixed(3);
					answer.innerHTML = `<h2>${distance} miles is converted to ${conversion} kilometers</h2>`;
				}
			}
			else{
				answer.innerHTML = "<h2>Please enter a number!</h2>";
			}
		})
})();
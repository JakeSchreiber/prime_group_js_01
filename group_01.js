var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

//var megaArray = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
var megaArray = [];
megaArray.push(arrayAtticus);
megaArray.push(arrayJem);
megaArray.push(arrayBoo);
megaArray.push(arrayScout);

function conversionArray(personArray) {
	var newArray = [];
	newArray[0] = personArray[0];
	newArray[1] = calcSti(personArray[3], personArray[1], personArray[2]);
	newArray[2] = parseInt(personArray[2]) + parseInt(personArray[2]) * newArray[1];
	newArray[3] = Math.round(parseInt(personArray[2]) * newArray[1]);

	return newArray;
}

function calcSti(rating, employeeID, salary){
	var sti = 0;
	switch(rating) {
		case 1:
		case 2: sti = 0;
		break;

		case 3: sti = .04;
		break;

		case 4: sti = .06;
		break;

		case 5: sti = .1;
		break;

		default: sti = -1;
		break;
		}

	if(employeeID.length <= 4) {
		sti += .05;
	}

	if(parseInt(salary) > 65000) {
		sti -= .01;
	}

	if(sti > .13) {
		sti = .13;
	}

	return sti;
} 

var megaArray2 = [];

for(var i = 0; i < megaArray.length; i++) {
	megaArray2.push(conversionArray(megaArray[i])); 


}

for(i = 0; i < megaArray2.length; i++) 
	console.log(megaArray2[i].toString());

//console.log(conversionArray(arrayAtticus));
//console.log(conversionArray(arrayJem));
//console.log(conversionArray(arrayBoo));
//console.log(conversionArray(arrayScout));
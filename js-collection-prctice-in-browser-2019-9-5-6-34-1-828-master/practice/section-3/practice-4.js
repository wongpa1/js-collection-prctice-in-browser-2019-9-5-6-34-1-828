'use strict';

function createUpdatedCollection(collectionA, objectB) {
  	var collectionD = [];
	var copy = collectionA.slice(0);

	for (var i = 0; i < collectionA.length; i++){
		
		 if(collectionA[i].includes('-')){
			var myArray = collectionA[i].split("-");
			var a = new Object();
			a.key = myArray[0];
			a.count = parseInt(myArray[1]);
			collectionD.push(a);
		}
		else{
			var myCount = 0;	
			for (var w = 0; w < copy.length; w++) {
				if (collectionA[i] == copy[w]) {
					myCount++;
					delete copy[w];
				}
			}

			if (myCount > 0) {
				var b = new Object();
				b.key = collectionA[i];
				b.count = myCount;
				collectionD.push(b);
			}
		}
	}
	
  var result = [];
  var collectionC = objectB['value'];
	for(var i = 0; i < collectionD.length; i++){
		for(var j = 0; j < collectionC.length; j++){
			if(collectionD[i]['key']==collectionC[j]){
				collectionD[i]['count']-= Math.floor(collectionD[i]['count']/3);
			}
		}
		result.push(collectionD[i]);
	}
	return result;
}

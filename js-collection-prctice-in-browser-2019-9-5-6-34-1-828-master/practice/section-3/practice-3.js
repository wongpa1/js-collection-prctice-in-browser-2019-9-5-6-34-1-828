'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var collectionD = [];
	var copy = collectionA.slice(0);

	for (var i = 0; i < collectionA.length; i++){
		
		var myCount = 0;	
		for (var w = 0; w < copy.length; w++) {
			if (collectionA[i] == copy[w]) {
				myCount++;
				delete copy[w];
			}
		}

		if (myCount > 0) {
			var a = new Object();
			a.key = collectionA[i];
			a.count = myCount;
			collectionD.push(a);
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

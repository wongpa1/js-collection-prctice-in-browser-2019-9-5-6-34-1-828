'use strict';

function createUpdatedCollection(collectionA, objectB) {
  	var collectionD = [];
	var remainingcollectionA = collectionA.slice(0);

	for (var i = 0; i < collectionA.length; i++){
		
		 if(collectionA[i].includes('-')){
			var d5Array = collectionA[i].split("-");
			var keyCountObject  = new Object();
			keyCountObject.key = d5Array[0];
			keyCountObject.count = parseInt(d5Array[1]);
			collectionD.push(keyCountObject);
		}
		else{
			var deplicatedElementCount = 0;	
			for (var w = 0; w < remainingcollectionA.length; w++) {
				if (collectionA[i] == remainingcollectionA[w]) {
					deplicatedElementCount++;
					delete remainingcollectionA[w];
				}
			}

			if (deplicatedElementCount > 0) {
				var keyCountObject = new Object();
				keyCountObject.key = collectionA[i];
				keyCountObject.count = deplicatedElementCount;
				collectionD.push(keyCountObject);
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

'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  var collectionC = objectB['value'];
	for(var i = 0; i < collectionA.length; i++){
		for(var j = 0; j < collectionC.length; j++){
			if(collectionA[i]==collectionC[j]){
				result.push(collectionA[i]);
			}
		}
	}
  return result;
}

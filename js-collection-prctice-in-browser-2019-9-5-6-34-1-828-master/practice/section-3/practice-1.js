'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  var collectionC = objectB['value'];
	for(var i = 0; i < collectionA.length; i++){
		for(var j = 0; j < collectionC.length; j++){
			if(collectionA[i]['key']==collectionC[j]){
				collectionA[i]['count']--;
			}
		}
		result.push(collectionA[i]);
	}
  return result;
}

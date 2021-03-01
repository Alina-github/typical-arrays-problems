exports.min = function min(array) {

  if (Array.isArray(array) && array.length) { 
    return array.sort((a,b) => a - b)[0];
  } else { 
    return 0;
  }
}

exports.max = function max(array) {

  if (Array.isArray(array) && array.length) { 
    return array.sort((a,b) => a - b)[array.length - 1];
  } else { 
    return 0;
  }
}

exports.avg = function avg(array) {
  
   if (Array.isArray(array) && array.length) {  let totalSum = array.reduce(function(sum,current){return sum + current});
   return totalSum/array.length;
  } else { 
    return 0;
  }
}
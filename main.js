var Yielded = require('vz.yielded');

module.exports = function(method,thisArg){
  return function(){
    var ret = new Yielded();
    
    Array.prototype.push.call(arguments,function(error,value){
      if(error) ret.error = error;
      else ret.value = value;
    });
    
    method.apply(thisArg || this,arguments);
    return ret;
  };
};


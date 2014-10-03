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

module.exports.promise = function(method,thisArg){
  return function(){
    var ret = new Yielded();
    
    method.apply(thisArg || this,arguments).then(function(v){
      ret.value = v;
    },function(e){
      ret.error = e;
    },function(p){
      ret.fire('progress',p).resolve();
    });
    
    return ret;
  };
};


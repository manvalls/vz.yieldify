# vz yieldify

[![NPM](https://nodei.co/npm/vz.yieldify.png?downloads=true)](https://nodei.co/npm/vz.yieldify/)

No piece of software is ever completed, feel free to contribute and be humble

## Sample usage:

```javascript

var fs = require('fs'),
    yieldify = require('vz.yieldify'),
    stat = yieldify(fs.stat);

stat('foo.txt').on('done',function(){
  if(this.error) throw this.error;
  console.log(this.value);
});

```



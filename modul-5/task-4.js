'use strict';

class StringBuilder {
    constructor(_str){
      this._value = _str;
    }
    get value(){
      return this._value;
    }
    append(_str){
      this._value += _str;
    }
    prepend(_str){
      this._value = _str + this._value;
    }
    
    pad(_str){
      this.append(_str);
      this.prepend(_str);
    }
}
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='


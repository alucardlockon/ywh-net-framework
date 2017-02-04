var css = require('../less/less.less')
//var ts = require('../ts/ts.ts')
import Person from '../ts/ts';

class Vehicle {
  constructor(make, year) {
    this._make = make;
    this._year = year;
  }

  get make() {
    return this._make;
  }

  get year() {
    return this._year;
  }

  toString() {
    return `${this.make} ${this.year}`;
  }
}

var vehicle = new Vehicle('Toyota Corolla', 12009);

document.write(ts.name.toString())


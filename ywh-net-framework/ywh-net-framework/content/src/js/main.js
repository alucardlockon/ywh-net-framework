var css = require('../less/less.less')
    //var ts = require('../ts/ts.ts')
// var bs = require('bootstrap-loader')
var bs = require('../css/bootstrap.css')
import A from '../ts/ts';
//import Vue from 'vue'
//import Hello from '../vue/app.vue'
//import Hello from '../vue/components/Hello.vue'

/*
var vm=new Vue({
  el: '#app',
  data: function() {
    return {
      msg: 'Hello from vue-loader,' + new Date().toLocaleString()
    }
  },
  //components:{Hello}
})
*/


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

var vehicle = new Vehicle('Toyota Corolla', 12009)

// document.write(new A().c)

let title = document.createElement('div')
title.textContent  = 'Hello'
document.body.appendChild(title)
let button = document.createElement('button')
button.textContent  = 'Click'
document.body.appendChild(button)
//document.write('<h1>'+new Date().toLocaleString()+'</h1>')
setInterval(() => {
    title.textContent  = new Date().toLocaleString()
}, 1000)


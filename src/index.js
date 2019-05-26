/**
 * @author xiajing
 * @date 2019/5/23 17:11
 */
require('./css/index.css')
require('./less/index.less')
require('./sass/index.scss')
import './classA.js'
import './classB.js'
import './includeDemo.js'
import './decoratorDemo.js'
import '@/alias/alias'
import './env.js'
console.log('webpack........................')

import $ from 'jquery'
// import bootstrap from 'bootstrap'
console.log($)
// console.log(window.$) // undefined

let fn = () => {
  console.log('fn........')
}

fn()

// x = 1
// function test(){
//   this.x = 0
// }
// console.log(x); //返回1
// test()
// console.log(x); //返回0

// function f1(){
// 　　　　n=999
// 　　}
// 　　f1()
// console.log(n) // 999

// function test(a,b,c) {
// 	var n = 999
// 	return n
// }

// console.log(test(1,2,4))
// 

// function f1 () {
//   var n = 999
//   nAdd = function () {n += 1}
//   function f2 () {
//     console.log(n)
//   }
//   return f2
// }
// nAdd()
// var result = f1()
// result() // 999
// result() // 1000

// var name = 'The Window'
// var object = {
//   name: 'My Object',
//   getNameFunc: function () {
//     return function () {
//       return this.name
//     }
//   }
// }
// console.log(object.getNameFunc()())

// var name = 'The Window'
// var object = {
//   name: 'My Object',
//   getNameFunc: function f1() {
//     var that = this
//     return function f2() {
//       return that.name
//     }
//   }
// }
// console.log(object.getNameFunc()())

var name = 'The Window'
var object = {
  name: 'My Object',
  getNameFunc: function () {
    console.log(this.name)
    return function () {
      return this.name
    }
  }
}
console.log(object.getNameFunc()())

// var object = {
//   name: 'MyObject',
//   getNameFunc: function () {
//     return function () {
//       return this.name
//     }
//   }
// }
// name = global
// console.log(object.getNameFunc()())
// var obj = {
//   name: 'lastresult',
//   myf: object.getNameFunc()
// }
// console.log(obj.myf())

function f1 (callback) {
  setTimeout(callback, 200)
}

var color = 'blue'

;(function (color) {
  f1(function () {
    console.log('The color is :' + color)
  }
  )
})(color)
console.log(color)
color = 'green'
console.log(color)

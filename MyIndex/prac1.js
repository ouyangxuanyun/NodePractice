// var x = 1;
// function test(){
// 	this.x = 0;
// 	console.log(this.x);
// }
// test();
// console.log(x);

// function test() {
// 	console.log(this.x);
// }

// var o = {};
// o.x  = 1;
// o.test = 2;
// o.m = test;
// o.m();





// var x = 2;
//  function test() {
//  	this.x = 1;
//  }
// var o = new test();
//  console.log(x);
//  



// var x = 0;
// function test() {
// 	console.log(this.x);
// }

// var o = {};
// o.t = 1;
// o.m = test;
// o.m.apply(o);
// 

// var x = 2;
// function test(){
// 	this.x = 1;
// }
// test();
// console.log(x);



// var name = "Bob";  
// var nameObj ={
//   name : "Tom",  
//   showName : function(){  
//       console.log(this.name);  
//   },  
//   waitShowName : function(){  
//       setTimeout(this.showName, 1000);  
//   }  
// };  

// nameObj.waitShowName();
// 


// var someone = {
//     name: "Bob",
//     showName: function(){
//         console.log(this.name);
//     }
// };

// var other = {
//     name: "Tom",
//     showName: someone.showName
// }
// someone.showName();
// other.showName();　　//Tom






// var name = "Tom";

// var Bob = {
//     name: "Bob",
//     show: function(){
//         console.log(this.name);
//     }
// }

// Bob.show();
// var show = Bob.show;
// show();　　//Tom




var name = "window";

var Bob = {
    name: "Bob",
    showName: function(){
        console.log(this.name);
    }
};

var Tom = {
    name: "Tom",
    fun: undefined,
    showName: function(){
        this.fun = Bob.showName;
        this.fun();
        //console.log(this.name);
    }
};

Tom.showName();　　//window
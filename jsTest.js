/*
//原型模式
function Person(){}

Person.prototype={
	constructor:Person,
	name:"",
	job:"",
	hobby:function(){
		alert(this.name);
	}
};


//组合构造函数模式和原型函数模式
function Person(name,age,job){
	this.name = name;
	this.age  =age;
	this.job  = job;
	this.frends=["Jack","Joe"];
}

Person.prototype={
	constructor:Person;
	hobby:function(){
		alert(17);
	}
};
*/

//递归
function factorial(num){
	if(num <=1 ){
		return 1;
	}else{
		return num* arguments.callee(num-1);   //arguments.callee是一个指向正在执行的函数
	}

}
var anotherFactorial = factorial;
factorial=null;
alert(anotherFactorial(7));//5040

/*var w;

function startWorker()
{
if(typeof(Worker)!=="undefined")
{
  if(typeof(w)=="undefined")
    {
    w=new Worker("demo_workers.js");
    }
  w.onmessage = function (event) {
    document.getElementById("result").innerHTML=event.data;
  };
}
else
{
document.getElementById("result").innerHTML="Sorry, your browser
 does not support Web Workers...";
}
}

function stopWorker()
{
w.terminate();
} */

/*function add(num1,num2){
	sum = num1+num2;
	return sum;
}

var result = add(23,34);
*/

/*var values = [1,2,3,4,5];
values.reverse();
var result = Math.max(1,23,4);
*/

/*Array.prototype.max = function(){ 
return Math.max.apply({},this); 
} 
Array.prototype.min = function(){ 
return Math.min.apply({},this); 
} 
var values = [1,2,3,4,5];
var result=values.max();
alert(result);
*/

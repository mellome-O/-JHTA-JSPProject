// var nums = new Array(5,10,21,"hello");
// nums.splice(1,0,2);
// alert(nums);
// alert(typeof nums[3]);

// var declare = "var kor = 1; var eng = 2, math = 3;";
// eval(declare);
// var sum = eval("kor+eng+math");
// alert(sum);

// var data = {kor:30, eng:40, math:50};
// var json = JSON.stringify(data);
// alert(json);

// var name = "newlec";

// if(name === "newlec")
//     alert("같습니다");

// var data = {kor:30, eng:40, math:50};

// for(var i in data)
//     alert(i);

// for(var k in data)
//     alert(data[k]);

// var sum = function add(x,y){
//     var sum=x+y;
//     return sum;
// }
// console.log(sum(3,4,1,1));

// var sum = function(){
//     var sum = 0;
//     for(var i=0; i<arguments.length; i++)
//     sum = sum + arguments[i];
//     return sum;
// }
// var cal = function(x,y,aa){
//     return aa(x,y);
// }
// console.log(cal(3,4,sum));

// var jb = 'out';
//     document.write(jb);
// function jbb(){
//     jb = 'in';
//     document.write(jb);
    
// }
// //jbb(); //함수실행하냐안하냐에 따라 변수값 출력 바뀜
// document.write(jb);

//var 위치 상관없이 
//선언은 위로 올라가서 영향을 주는데
//할당은 실행순서에 따라 영향을 줌

// function 가족(){
//     var a = '0';
//     document.writeln(a); //0 (** 설명1)
  
//   function 아버지(){
//       document.writeln(a); //undefined  (** 설명2)
//       a = 50;
//       (function(){
//         a = 70;  
//         document.writeln(a); //undefined  (** 설명3)
//           var a;
//         })();
//         var a;  //(** 특이사항)
//     document.writeln(a); //55  (** 설명4)
//   }
  
// //   function 어머니(){
// //     document.writeln(a); //undefined  (** 설명5)
// //     a = '50';
// //     document.writeln(a); //50
// //     //var a;
// //   }
  
  
//   아버지();
// //   어머니();
//   document.writeln(a); //50
// }

// 가족();


// // 1 //
// let emptyarray = [];

// // 2//
// let newarray = new Array();
// //3//
// let str = ["car", "bikes"];
// //4//
// let num = [3,4,5,6];
// //5//
// let boolean = ["true","false"];
// //6//
// let misarray = ["cars" ,4, "", "true"];

//7//

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("Qualifications:")
// document.write("<ol>");
// for (let i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");

// 8//

// let studt = ["tayyaba", "tahira", "aisha"];
// let numbr = [200,300,450];
// let total = 500;
// let percentage = (numbr[0] / total) * 100;
// let percentages = (numbr[1] / total) * 100;
// let percentage1 = (numbr[2] / total) * 100;
// document.write(" Score of " + studt[0]  + " is "+ numbr[ 0] +" ."+ "  percentage :" + " (" + percentage + "%)<br>");
//   document.write(" Score of " + studt[1]  + " is "+ numbr[ 1] +" ."+ "  percentage :" + " (" + percentages + "%)<br>");
//   document.write(" Score of " + studt[2]  + " is "+ numbr[ 2] +" ."+ "  percentage :" + " (" + percentage1 + "%)<br>");

//   //9//

//   let colorname=["red","green","blue","yellow","brown",'white'];
// let optiona=prompt("please enter which colour do you want to add at start?");
// colorname.unshift(optiona);
// document.write(colorname);

//  //add favourite color at the end//
// let optionb=prompt("please enter which colour do you want to add at the end?");
// colorname.push(optionb);
// document.write(colorname);


// //add 2 more array at start
// colorname.unshift("skyblue","aquamarine");
// document.write(colorname);

// //delete the first array
// colorname.shift();
// document.write(colorname);

// //delete the last color

// colorname.pop();
// document.write(colorname);

// //add new color at index
// let user=prompt("at which index do you want to add color?");
// let newcolor=prompt("now tell me new color of your choice")

// colorname.splice(user,0,newcolor);
// document.write(colorname);


// //delete the array
// let user1=prompt("at which index do you want to delete?");
// let deletecolor=prompt("which color you want to delete");

// colorname.splice(0,3);
// document.write(colorname);

//10//

// let studentScores = [320, 230, 480, 120];
// document.write(" Scores Of  Students: ",studentScores,"<br>");
// let orderScores=studentScores.sort((a, b) => a - b);
// document.write(" Ordered Scores Of  Students: ",orderScores + "<br>");

// 11 //

// let citieslist=["karachi","lahore","islamabad","quetta","peshawar"];
// document.write("cities list");
// let d=citieslist.slice(2,4);
// document.write("selected citieslist",d);

// 12 //



// let arr=["This","is","a","cat"];
// let str=arr.join( "  ");
// document.write(str);

// 13 //
//FIFO METHOD
let array=["keyboard","mouse","printer","monitor"];
console.log("DEVICES:\n",array);
console.log("out:\n","keyboard");
console.log("out:\n","mouse");
console.log("out:\n","printer");
console.log("out:\n","monitor");

//14 //

// //LIFO METHOD
// let array2=["keyboard","mouse","printer","monitor"];
// console.log("DEVICES:\n",array);
// console.log("out:\n","monitor");
// console.log("out:\n","printer");
// console.log("out:\n","mouse");
// console.log("out:\n","keyboard");

//15 //




//output method
//console.log("sana");
//var can be redeclare but let can't be redeclare
//var can't be reassign but let can be reassign
//var has a global scope ,let has a block scope

// let firstName = "Sana";
// let midName = "Salar Sikandar";
// let lastname = "Saifi";
// console.log(firstName +  " "+midName+" "+lastname);


// const bool = Number(true);
// console.log(bool);

// const number = String("1234");
// console.log("number");

//pyramid
// let row = 4;
// for(let i=1; i<=row; i++)
// {
//     let line= "";
//     for(j=1; j<=2*row-1; j++)
//     {
//         if(i+j>row+1 && j-i<=row-1)
//         {
//             line+="*";
//         }
//         else{
//             line+=" ";
//         }
//     }
//     console.log(line);
//     console.log();
// }

let arr=[1,2,3,4,5,[1,2,3]];
for(i of arr)
{
    console.log(i);
}
console.log(arr.length);

let a =4;
console.log(a)
console.log(a++);
console.log(++a);
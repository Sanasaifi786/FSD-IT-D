//const arr = [1,2,3,4];
// const mapArr = arr.map((i)=>{
//     return i*4;
// })
// console.log(mapArr);

// const sum = arr.reduce((acc,i)=>acc+=i,0);
// console.log(sum);

// const fil = arr.filter((i)=>i%4==0);
// console.log(fil);

const data = [
    {
        prodID : 1,
        prodName: "A",
        price: 499,
        manufacturingDate : "22-09-2025",
        color: ['B','Y']
    },
    {
        prodID : 2,
        prodName: "B",
        price: 599,
        manufacturingDate : "24-09-2025",
        color: ['B','R']
    },
    {
        prodID : 3,
        prodName: "C",
        price: 699,
        manufacturingDate : "26-09-2025",
        color: ['B','G']
    },
    {
        prodID : 4,
        prodName: "D",
        price: 899,
        manufacturingDate : "28-09-2025",
        color: ['B','R']
    }
]
const mapData = data.map((i)=>i.prodName);
// const filData = data.filter((i)=>{
//     if(i.price<=600)
//     {
//         return i;
//     }
// });
// console.log(filData);

const color = data.filter((i)=>i.color.filter((col)=>
if(color[col]==='R')
{
    
}))
console.log(color);
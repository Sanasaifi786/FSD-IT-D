const student={
    name:"sana",
    rollno: 216,
    email: {
        mail1 : "xyz@gmail.com",
        mail2 : "abc@gmail.com"
    },
    phone_no: 1234567890,
    lang: {
        lang1 : "JS",
        lang2 : "TS",
        lang: "java"
    }
}
const student2 = Object.assign({}, student);
console.log(student2);
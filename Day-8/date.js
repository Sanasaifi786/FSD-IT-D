// const date = new Date();
// console.log(date);

// let newdate = new Date("2025-08-24");

// console.log(newdate.toDateString());

const genDate = ()=>{
     const dob = document.getElementById('dob').value;
     const currDate = new Date ();
     const birthDate = new Date(dob);
    
     const currYear = currDate.getFullYear();
     const currMonth = currDate.getMonth();

     const birthYear = birthDate.getFullYear();
     const birthMonth = birthDate.getMonth();

     let finalYear = currYear-birthYear;
     if(birthYear>currYear)
     {
        finalYear-=1;
     }
}
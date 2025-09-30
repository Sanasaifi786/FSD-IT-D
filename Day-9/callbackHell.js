const printMessage= (msg)=>{
    console.log(msg);
}
const bookTic = ()=>{
    printMessage("Welcome!");
    setTimeout(()=>{
        printMessage("Login Successfully");
        setTimeout(()=>{
            printMessage("seat has been selected successfully");
            setTimeout(()=>{
                printMessage("your seat has been confirmed.proceed");
                setTimeout(()=>{
                    printMessage("Payment has been done");
                    setTimeout(()=>{
                        printMessage("Ticket has been issued.");
                        printMessage("Thankyou for visiting our site");
                    },3000)
                },4000)
            },3000)
        },2000)
    },3000)
}
bookTic();
// First class ticket
const plusIcon = document.getElementById("plus-icon");
plusIcon.addEventListener("click", function(){
  eventHandler(true,"input-value");
});

const minusIcon = document.getElementById("minus-icon");
minusIcon.addEventListener("click", function(){
    eventHandler(false,"input-value");
    
});
// Common function for all Icon
function eventHandler(isInt,inputField){
    const inputValue = document.getElementById(inputField);
    const inputInteger = parseInt(inputValue.value);
    if(isInt == true){
        newInput = inputInteger + 1;
    }
    if( isInt == false && inputInteger > 0){
        newInput = inputInteger - 1;
    }
    inputValue.value = newInput;
    const FirstClassPrice = newInput * 150;
    document.getElementById("firstClassprice").innerText = "$ " + FirstClassPrice;
    totalCalculate();
}
// economy ticket 
const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener("click", function(){
    eventHandlerEvent(true,"inputValue");
  
});

const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function(){
    eventHandlerEvent(false,"inputValue");
    
});
function eventHandlerEvent(isInt,inputField){
    const inputValue = document.getElementById(inputField);
    const inputInteger = parseInt(inputValue.value);
    if(isInt == true){
        newInput = inputInteger + 1;
    }
    if( isInt == false && inputInteger > 0){
        newInput = inputInteger - 1;
    }
    inputValue.value = newInput;
    const economyPrice = newInput * 100;
    document.getElementById("economyClassPrice").innerText = "$ " + economyPrice;
    totalCalculate();
}


// total function 

function totalCalculate(){
    const firstClassTicket = document.getElementById("input-value").value;
    const firstClassTicketPrice = parseInt(firstClassTicket);
    console.log(firstClassTicketPrice);
    const economyClassTicket = document.getElementById("inputValue").value;
    const economyClassTicketPrice = parseInt(economyClassTicket);

    subtotal = firstClassTicketPrice*150 + economyClassTicketPrice*100;
    document.getElementById("subTotal").innerText = subtotal;

    const tax = subtotal /10;
    document.getElementById("tax").innerText= tax;

    const total = subtotal + tax ;
    document.getElementById("total").innerText = total;
}
// confirmation 

const bookinNow = document.getElementById("confirmation");
bookinNow.addEventListener("click",function(){
    alert("You have booked successfully");
    bookinNow.style.backgroundColor="gray";
    bookinNow.innerText="You have booked successfully";
})


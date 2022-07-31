
function ranNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



function messageQuote(event){
    let messages = ["Have a good day", "Dont forget to smile", "Share positive message with someone"]
    let i = ranNum(0,2);
    return messages[i]
    
}
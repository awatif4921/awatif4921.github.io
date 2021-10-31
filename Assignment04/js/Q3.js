function factorial(n){
    
    if(nombor == 1){
        return 1;
    
    }else{
        return nombor * factorial(n-1) ;
    }
}
let elfactorial = document.getElementById("nombor")
elfactorial.addEventListener("click", function(){
    
    console.log("The factorial of " + nombor + " is " + factorial);
})

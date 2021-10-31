function factorial(n){
    
    if(n == 1){
        return 1;
    
    }else{
        return n * factorial(n-1) ;
    }
}
let elfactorial = document.getElementById("nombor")
elfactorial.addEventListener("click", function(){
    factorial(n)
    console.log("The factorial of " + n + " is " + factorial);






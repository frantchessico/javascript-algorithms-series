let output = document.getElementById('output');

function factorialNumber(number) {
    let result = 1;
    for (let i = 2; i <= number; i ++) {
        result *= i;
    }
   if (number) {
    output.innerHTML = `<strong>The factorial of <span style="
    color: #8e2ddd;
    font-weight: bold;
    
    ">${number}</span> is <span style="
    color: #8e2ddd;
    font-weight: bold;
    
    ">${result}<span></span></strong>`
   }
}


factorialNumber(7)
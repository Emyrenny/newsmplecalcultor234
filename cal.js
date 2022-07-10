//display numbers
function displaynum(num)
{
    result.value+=num
}
//clear values
function clearbox(){
    result.value=""
}
//evaluate
function evaluateexpr(){
    // expr=result.value
    // output=eval(expr)
    // result.value=output
    result.value=eval(result.value)
}
function square(num){
    
}
//backspace
function removeitem(){
    curexp=result.value
    result.value=curexp.slice(0,-1)
}
function percent(){
    result.value=result.value/100

}
function squ(){
    result.value=result.value*result.value
}
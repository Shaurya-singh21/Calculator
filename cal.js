let button = document.querySelectorAll('button');
    let res = document.querySelector('#result')
    // console.log(button);

function add(){
let text1=parseInt(document.querySelector('.val1').value)
let text2=parseInt(document.querySelector('.val2').value)
if(!isNaN(text1) && !isNaN(text2) && Number.MIN_SAFE_INTEGER<=text1<=Number.MAX_SAFE_INTEGER &&Number.MIN_SAFE_INTEGER<=text2<=Number.MAX_SAFE_INTEGER){
let result = text1 + text2; 
res.innerHTML = `Result is ${result}`;
console.log('RESULT = ',result);
}
else{
    alert('Please enter a number')
}

}
function sub(){
    let text1=parseInt(document.querySelector('.val1').value)
    let text2=parseInt(document.querySelector('.val2').value)
    if(!isNaN(text1) && !isNaN(text2) && Number.MIN_SAFE_INTEGER<=text1<=Number.MAX_SAFE_INTEGER &&Number.MIN_SAFE_INTEGER<=text2<=Number.MAX_SAFE_INTEGER){
    let result = text1-text2; 
res.innerHTML = `Result is ${result}`;
console.log('RESULT = ',result);
}
else{
    alert('Please enter a number')
}
}
function mul(){
    let text1=parseInt(document.querySelector('.val1').value)
    
    let text2=parseInt(document.querySelector('.val2').value)
    if(!isNaN(text1) && !isNaN(text2) && Number.MIN_SAFE_INTEGER<=text1<=Number.MAX_SAFE_INTEGER &&Number.MIN_SAFE_INTEGER<=text2<=Number.MAX_SAFE_INTEGER){
    let result = text1 *text2; 
res.innerHTML = `Result is ${result}`;
console.log('RESULT = ',result);
}
else{
    alert('Please enter a number')
}
}
function div(){
    let text1=parseInt(document.querySelector('.val1').value)
    let text2=parseInt(document.querySelector('.val2').value)
if(!isNaN(text1) && !isNaN(text2) && Number.MIN_SAFE_INTEGER<=text1<=Number.MAX_SAFE_INTEGER &&Number.MIN_SAFE_INTEGER<=text2<=Number.MAX_SAFE_INTEGER){
    let result = text1 / text2; 
res.innerHTML = `Result is ${result}`;
console.log('RESULT = ',result);
}
else{
    alert('Please enter a number')
}
}
function cosine(){
    let text1=parseInt(document.querySelector('.val1').value)
    if(!isNaN(text1)  && Number.MIN_SAFE_INTEGER<=text1<=Number.MAX_SAFE_INTEGER ){
    let result = Math.cos(text1)  
res.innerHTML = `Result is ${result}`;
console.log('RESULT = ',result);
}
else{
    alert('Please enter a number')
}
}
function sine(){
    
   let text1=parseInt(document.querySelector('.val1').value)
    
    if(!isNaN(text1)  && Number.MIN_SAFE_INTEGER<=text1<=Number.MAX_SAFE_INTEGER ){
    let result = Math.sin(text1); 
res.innerHTML = `Result is ${result}`;
console.log('RESULT = ',result);
}
else{
    alert('Please enter a number')
}
}
function log(){
    let text1=parseInt(document.querySelector('.val1').value)

    if(!isNaN(text1)  && Number.MIN_SAFE_INTEGER<=text1<=Number.MAX_SAFE_INTEGER ){
    let result = Math.log(text1) ; 
res.innerHTML = `Result is ${result}`;
console.log('RESULT = ',result);
}
else{
    alert('Please enter a number')
}
}
function pow(){
    let text1=parseInt(document.querySelector('.val1').value)
    let text2=parseInt(document.querySelector('.val2').value)
    if(!isNaN(text1) && !isNaN(text2) && Number.MIN_SAFE_INTEGER<=text1<=Number.MAX_SAFE_INTEGER &&Number.MIN_SAFE_INTEGER<=text2<=Number.MAX_SAFE_INTEGER){
    let result = text1 ** text2; 
res.innerHTML = `Result is ${result}`;
console.log('RESULT = ',result);
}
else{
    alert('Please enter a number')
}
}
function clear(){

document.querySelector('.val1').value = "";

document.querySelector('.val2').value="";
document.querySelector('#result').innerHTML="";
}

for(const sym of button){
    sym.addEventListener('click',(e)=>{
        e.preventDefault();
        if(sym.id === 'plus'){  
            add();
        }else if(sym.id === 'min'){
            sub();
        }else if(sym.id === 'mul'){
            mul();
        }else if(sym.id === 'divide'){
            div();
        }else if(sym.id === 'log'){
            log();
        }else if(sym.id === 'exp'){
            pow();
        }else if(sym.id === 'sin'){
            sine();
        }else if(sym.id === 'clear') { 
            clear();
        }else{
            cos();
        }
    })
}
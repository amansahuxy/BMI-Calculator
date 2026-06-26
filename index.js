const Weight=document.getElementById("weight");
const Height=document.getElementById("height");
const button=document.getElementById("btn");
const Result=document.getElementById("result");

   button.addEventListener("click",()=>{
    let wght=Number(Weight.value);
    let hght=Number((Height.value)/100);
    let rslt=wght/(hght*hght);
    Result.innerText=rslt;

    if(rslt<18.5){
        
    }
   })
const Weight=document.getElementById("weight");
const Height=document.getElementById("height");
const button=document.getElementById("btn");
const Result=document.getElementById("result");
const categoryy=document.getElementById("category");

   button.addEventListener("click",()=>{
    let wght=Number(Weight.value);
    let hght=Number(Height.value)/100;
    let rslt=wght/(hght*hght);
    Result.innerText=rslt;

    if (wght <= 0 || hght <= 0) {
    Result.innerText = "Please enter valid values";
    categoryy.innerText = "";
    return;
}

    if(rslt<18.5){
        categoryy.innerText='Underweight';
    }
    else if(rslt>=18.5 && rslt<24.9 ){
        categoryy.innerText='Healthy Weight';
    }
    else if(rslt>=25 && rslt<29.9){
        categoryy.innerText='Overweight';
    }
    else if(rslt>=30){
        categoryy.innerText='Obesity';
    }








   })
const eye=document.getElementById("eye");
const modem=document.getElementById("modem");
const parol=document.getElementById("parol");
const btn=document.getElementById("btn");
const err=document.getElementById("err");


eye.addEventListener("click",()=>{
    if(parol.type=="password"){
        parol.type="text";
    }else{
        parol.type="password";
    }
});

parol.addEventListener("input",()=>{
    if(modem.value.trim().length>0 && parol.value.trim().length>0 ){
      btn.disabled==false;
      btn.style.backgroundColor="orangered";
    }else{
        btn.disabled==true;
        btn.style.backgroundColor="#F69E86";
    }
});

btn.addEventListener("click",()=>{
    console.log(parol.value,modem.value);
    
    if(parol.value=='87640' && modem.value=="1265717"){
        err.style.display="none";
        localStorage.setItem("parol","87640");
        localStorage.setItem("modem-id","1265717");
        window.location.href="./home.html";
    }else{
        err.style.display="block";
    }
})
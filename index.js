const mycheckbox = document.getElementById("mycheckbox");
const Visabtn = document.getElementById("Visabtn");
const Mastercardbtn = document.getElementById("Mastercardbtn");
const Paypalbtn = document.getElementById("Paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){
    if (mycheckbox.checked){
        subresult.textContent = `You are subscribed`;
    }
    else{
        subresult.textContent = `you are NOT subscribed `;
    }
    if (Visabtn.checked){
        paymentresult.textContent = `you are paying with visa`
    }
    else if (Mastercardbtn.checked){
        paymentresult.textContent = `you are paring with mastercard`
    }
    else if (Paypalbtn.checked){
        paymentresult.textContent = `you are paying with paypal`
    }
    else{
        paymentresult.textContent = `you must select the payment!!`
    }
}
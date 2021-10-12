
function calculateBill(){
    let montoIndividual;
    let isPercent = document.getElementById("isPercent").value;
    let monto = document.getElementById("monto").value;
    let propina = document.getElementById("propina").value;
    let personas = document.getElementById("personas").value;
    if(isPercent){
        montoIndividual = monto*(1+propina/100)/personas;
    }else{
        montoIndividual = (monto + propina)/personas;
    }
    document.getElementById("individual").innerHTML = "$" + montoIndividual.toFixed(2);
}
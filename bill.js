
function calculateBill(){
    let montoIndividual;
    let isPercent = document.getElementById("isPercent").value;
    let monto = document.getElementById("monto");
    let propina = document.getElementById("propina");
    let personas = document.getElementById("personas");
    if(isPercent){
        montoIndividual = monto*(1+propina/100)/personas;
    }else{
        montoIndividual = (monto + propina)/personas;
    }
    document.getElementById("individual").innerHTML = montoIndividual;
}
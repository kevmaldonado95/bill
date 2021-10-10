
function calculateBill(){
    let montoIndividual;
    let isPercent = parseInt(document.getElementById("isPercent").value);
    let monto = parseInt(document.getElementById("monto"));
    let propina = parseInt(document.getElementById("propina"));
    let personas = parseInt(document.getElementById("personas"));
    if(isPercent){
        montoIndividual = monto*(1+propina/100)/personas;
    }else{
        montoIndividual = (monto + propina)/personas;
    }
    document.getElementById("individual").innerHTML = montoIndividual;
}
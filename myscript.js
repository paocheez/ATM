var cuentas = [
  {nombre:"Jin",apellido:"Kim",password:"moon20",saldo:8700},
  {nombre:"Henry",apellido:"Cavill",password:"superman12",saldo:1900},
  {nombre:"Tea",apellido:"Richards",password:"hola00",saldo:14050}
];

var positionOutside = [];

function Access(){
  let userValue = document.getElementById("user").value;
  let passwordValue = document.getElementById("password").value;
  let btnop = document.getElementById("container-access");
  let btnoptwo = document.getElementById("menu-contain");
  let btntr = document.getElementById("error-mssg");

  for(let i=0;i<cuentas.length;i++){
      if((userValue == cuentas[i].nombre)&&(passwordValue == cuentas[i].password)){
          var position = cuentas[i];
      }else{
          false;
      }
  }
  if(position!=null){
      console.log("aprobado");
      btnop.style.display = "none";
      btnoptwo.style.display = "block";
      document.getElementById("name-client").innerHTML = position.nombre;
      let nombrecomp = position.nombre+" "+position.apellido;
      let amounts = position.saldo;
      document.getElementById("namecmpt-client").innerHTML = nombrecomp;
      document.getElementById("namecmpt-client-card").innerHTML = nombrecomp;
      document.getElementById("amount-client").innerHTML = amounts;
      document.getElementById("amount-client-s").innerHTML = amounts;
      document.getElementById("amount-client-remove").innerHTML = amounts;
      Home();
      positionOutside=position;
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      document.getElementById("current-date").innerHTML = date;
  }else{
    console.log("denegado");
    btntr.style.display = "block";
  }
  return positionOutside;
}

function Home(){
  const pin = document.getElementById("acc-pin");
  const bthome = document.getElementById("container-home");
  const btperfil = document.getElementById("container-perfil");
  const btnoperation = document.getElementById("container-operations");
  const btpay = document.getElementById("container-pay");
  const btremove = document.getElementById("container-remove");

    if (bthome.style.display === "none") {
      pin.style.display = "none";
      bthome.style.display = "block";
      btperfil.style.display = "none";
      btnoperation.style.display = "none";
      btpay.style.display = "none";
      btremove.style.display = "none";
    } 
}

function Perfil(){
  const bthome = document.getElementById("container-home");
  const btperfil = document.getElementById("container-perfil");
  const btnoperation = document.getElementById("container-operations");
  const btpay = document.getElementById("container-pay");
  const btremove = document.getElementById("container-remove");

    if (btperfil.style.display === "none") {
      bthome.style.display = "none";
      btperfil.style.display = "block";
      btnoperation.style.display = "none";
      btpay.style.display = "none";
      btremove.style.display = "none";
    } 
}

function Consulta(){
  const bthome = document.getElementById("container-home");
  const btperfil = document.getElementById("container-perfil");
  const btnoperation = document.getElementById("container-operations");
  const btpay = document.getElementById("container-pay");
  const btremove = document.getElementById("container-remove");

    if (btnoperation.style.display === "none") {
      bthome.style.display = "none";
      btperfil.style.display = "none";
      btnoperation.style.display = "block";
      btpay.style.display = "none";
      btremove.style.display = "none";
    } 
}

function Abona(){
  const bthome = document.getElementById("container-home");
  const btperfil = document.getElementById("container-perfil");
  const btnoperation = document.getElementById("container-operations");
  const btpay = document.getElementById("container-pay");
  const btremove = document.getElementById("container-remove");

    if (btpay.style.display === "none") {
      bthome.style.display = "none";
      btperfil.style.display = "none";
      btnoperation.style.display = "none";
      btpay.style.display = "block";
      btremove.style.display = "none";
    } 
}

function Retira(){
  const bthome = document.getElementById("container-home");
  const btperfil = document.getElementById("container-perfil");
  const btnoperation = document.getElementById("container-operations");
  const btpay = document.getElementById("container-pay");
  const btremove = document.getElementById("container-remove");

    if (btremove.style.display === "none") {
      bthome.style.display = "none";
      btperfil.style.display = "none";
      btnoperation.style.display = "none";
      btpay.style.display = "none";
      btremove.style.display = "block";
    }
}

function HideMessage(){
  document.getElementById("amount-info-r").innerHTML = "";
  document.getElementById("amount-info").innerHTML = "";
}

function AbonaAction(){
  let amountAbonaValue = document.getElementById("abona-amount").value;
  let amountTotalAbonaValue = positionOutside.saldo;
  amountAbonaValue = parseFloat(amountAbonaValue);
  let totalAb;
  
  if(amountAbonaValue<1){
    document. getElementById("abona-amount").value = "";
    document.getElementById("amount-info").innerHTML = "El monto no es valido";
  }else if(amountAbonaValue>=10000){
    document. getElementById("abona-amount"). value = "";
    document.getElementById("amount-info").innerHTML = "Lo sentimos, no puedes ingresar mas de <br> $10,000.00";
  }
  else{
    totalAb = amountTotalAbonaValue + amountAbonaValue;
    positionOutside.saldo = totalAb;
    document.getElementById("amount-client").innerHTML = totalAb.toFixed(2);
    document.getElementById("amount-client-s").innerHTML = totalAb.toFixed(2);
    document.getElementById("amount-client-remove").innerHTML = totalAb.toFixed(2);
    document. getElementById("abona-amount"). value = "";
    document.getElementById("amount-info").innerHTML = "Recarga exitosa";
  }
}


function RetiraAction(){
  let amountRetiraValue = document.getElementById("retira-amount").value;
  let amountTotalRetiraValue = positionOutside.saldo;
  amountRetiraValue = parseFloat(amountRetiraValue);
  let totalRe;
  
  if(amountRetiraValue>amountTotalRetiraValue||amountRetiraValue<=0){
    document. getElementById("retira-amount"). value = "";
    document.getElementById("amount-info-r").innerHTML = "Monto insuficiente para retirar";
  }
  else{
    totalRe = amountTotalRetiraValue - amountRetiraValue;
    positionOutside.saldo = totalRe;
    document.getElementById("amount-client").innerHTML = totalRe.toFixed(2);
    document.getElementById("amount-client-s").innerHTML = totalRe.toFixed(2);
    document.getElementById("amount-client-remove").innerHTML = totalRe.toFixed(2);
    document. getElementById("retira-amount"). value = "";
    document.getElementById("amount-info-r").innerHTML = "Retiro exitoso";
  }
}

function DisablePay(){
  if (document.getElementById("abona-amount").disabled){
    document.getElementById("abona-amount").disabled =  false;
    document.getElementById("accept-amount").style.visibility = "visible";
    document.getElementById("amount-info").style.visibility = "visible";
    
  }else{
    document.getElementById("abona-amount").disabled = true;
    document.getElementById("accept-amount").style.visibility = "hidden";
    document.getElementById("amount-info").style.visibility = "hidden";
  }
}


function DisableRemove(){
  if (document.getElementById("retira-amount").disabled){
    document.getElementById("retira-amount").disabled =  false;
    document.getElementById("accept-amount-r").style.visibility = "visible";
    document.getElementById("amount-info-r").style.visibility = "visible";
    
  }else{
    document.getElementById("retira-amount").disabled = true;
    document.getElementById("accept-amount-r").style.visibility = "hidden";
    document.getElementById("amount-info-r").style.visibility = "hidden";
  }
}

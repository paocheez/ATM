var cuentas = [
  {nombre:"Jin",apellido:"Kim",password:"password0",saldo:8700},
  {nombre:"Henry",apellido:"Cavill",password:"1234",saldo:1900},
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
          console.log(position);
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
      console.log("aquí dentro del if"+position.nombre);
      console.log("nombre completo"+nombrecomp);
      Home();
      positionOutside=position;
  }else{
    console.log("denegado");
    btntr.style.display = "block";
  }
  return positionOutside;
}

function Home(){
  const btnop = document.getElementById("container-home");
    if (btnop.style.display === "none") {
      btnop.style.display = "block";
    } else {
      btnop.style.display = "none";
    }
}

function Today(){
  const btnop = document.getElementById("container-stats");
    if (btnop.style.display === "none") {
        btnop.style.display = "block";
      } else {
        btnop.style.display = "none";
      }
}

function Perfil(){
  const btnop = document.getElementById("container-perfil");
    if (btnop.style.display === "none") {
        btnop.style.display = "block";
      } else {
        btnop.style.display = "none";
      }
}

function Consulta(){
    const btnop = document.getElementById("container-operations");
    if (btnop.style.display === "none") {
        btnop.style.display = "block";
      } else {
        btnop.style.display = "none";
      }
}

function Abona(){
    const btnop = document.getElementById("container-pay");
    if (btnop.style.display === "none") {
        btnop.style.display = "block";
      } else {
        btnop.style.display = "none";
      }
}


function Retira(){
  const btnop = document.getElementById("container-remove");
  if (btnop.style.display === "none") {
      btnop.style.display = "block";
    } else {
      btnop.style.display = "none";
    }
}

function AbonaAction(){
  let amountAbonaValue = document.getElementById("abona-amount").value;
  let amountTotalAbonaValue = positionOutside.saldo;
  amountAbonaValue = parseInt(amountAbonaValue);
  let totalAb;
  
  if(amountAbonaValue>=10000){
    document. getElementById("abona-amount"). value = "";
    document.getElementById("amount-info").innerHTML = "Lo sentimos, no puedes ingresar mas de <br> $10,000.00";
  }else{
    totalAb = amountTotalAbonaValue + amountAbonaValue;
    positionOutside.saldo = totalAb;
    document.getElementById("amount-client").innerHTML = totalAb;
    document.getElementById("amount-client-s").innerHTML = totalAb;
    document.getElementById("amount-client-remove").innerHTML = totalAb;
    document. getElementById("abona-amount"). value = "";
    document.getElementById("amount-info").innerHTML = "Recarga exitosa";
  }
}


function RetiraAction(){
  let amountRetiraValue = document.getElementById("retira-amount").value;
  let amountTotalRetiraValue = positionOutside.saldo;
  amountRetiraValue = parseInt(amountRetiraValue);
  let totalRe;
  
  if(amountRetiraValue>amountTotalRetiraValue||amountRetiraValue<0){
    document. getElementById("retira-amount"). value = "";
    document.getElementById("amount-info-r").innerHTML = "Monto insuficiente para retirar";
  }else{
    totalRe = amountTotalRetiraValue - amountRetiraValue;
    positionOutside.saldo = totalRe;
    document.getElementById("amount-client").innerHTML = totalRe;
    document.getElementById("amount-client-s").innerHTML = totalRe;
    document.getElementById("amount-client-remove").innerHTML = totalRe;
    document. getElementById("retira-amount"). value = "";
    document.getElementById("amount-info-r").innerHTML = "Retiro exitoso";
  }
}
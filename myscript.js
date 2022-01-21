var cuentas = [
  {nombre:"Jin",apellido:"Kim",password:"password0",saldo:8700},
  {nombre:"Henry",apellido:"Cavill",password:"1234",saldo:1900},
  {nombre:"Tea",apellido:"Richards",password:"hola00",saldo:14050}
];

let positionOutside = [];

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
      document.getElementById("amount-client").innerHTML = amounts;
      document.getElementById("amount-client-s").innerHTML = amounts;
      console.log("aquí dentro del if"+position.nombre);
      Home();
  }else{
    console.log("denegado");
    btntr.style.display = "block";
  }
  return positionOutside=position;
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

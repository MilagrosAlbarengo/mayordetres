let numero1: number = document.getElementById("numero1");
let numero2: number = document.getElementById("numero2");
let numero3: number = document.getElementById("numero3");

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let uno: number =Number(numero1.value);
  let dos: number =Number(numero2.value);
  let tres: number =Number(numero3.value);
  if (numero1 > numero2 && numero3) {
    console.log("el numero mayor es", + numero1)
  }else{
    if (numero2 > numero1 && numero3){
      console.log("el numnero mayor es", + numero2)
    }else{
        console.log("el numero mayor es", + numero3)
      }
    }
    }
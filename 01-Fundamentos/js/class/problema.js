const f = {
    n:"jdscvnjks",
    e:30,
    imprimi(){
        console.log(`nombre ${n}`); //genera error 
    }
}

/* referenciar al mismo obj */
const f2 = {
    n:"jdscvnjks",
    e:30,
    imprimi(){
        console.log(`nombre ${this.n}`); //genera error 
    }
}


f2.imprimi();

/* Para craer una nueva instancia con la palabra reservada new  */

//se crea un función , preferiblemente con la primera en Mayuscula
function Persona(nombre, edad){
     this.nombre = nombre; 
     this.edad =edad;
     this.imprimir = () =>{
         console.log(`Nombre ${this.nombre} edad: ${this.edad}`);
     }
}

//creamos una nueva instancia 
const maria = new Persona('Maria', 24);

console.log(maria);

maria.imprimir();

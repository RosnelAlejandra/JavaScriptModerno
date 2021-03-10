/* 
    Buena practica:
        colocar los Nombre de las clases como NombreCompuesto
*/

class Persona{

    /* Propiedades estaticos - No sale como propiedad de la clase */
    static _conteo = 0;

    static get conteo(){
        return `Instancias `+Persona._conteo
    }

    static mensaje(){
        console.log("Mensaje de metodo estatico");
    }

    /* ************************************************************** */

    /* Propiedades */
    nombre = '';
    codigo = '';
    frase  = '';
    comida  = '';


    /* metodo que se ejecuta al momento de instanciar la clase  */
    constructor(nombre,  codigo, frase ){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase ;

        Persona._conteo++;
    }

    /* Crear los metodos */
    quienSoy(){
        console.log(`Yo soy ${this.nombre} ` );
    }

    /* contolar como se establece una propiedad */
    set setComidaFavorita(comida){
        this.comida = comida;
    }

    get getComida(){
        return `A  ${this.nombre } le gusta ${ this.comida }`
    }

}

const prueba = new Persona('prueba','123456','soy tu padre'); //

prueba.setComidaFavorita = 'Pie de Limon';

console.log(prueba.getComida);

/* Utilizar las propiedades estatica */
console.log(Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
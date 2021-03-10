class Persona {

    /* Crea una nueva instacia con una entrada de datos diferentes  */
    static porObjeto({ nombre, apellido, pais }) {
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }
}

/* De forma Normal  */
const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'Honduras';

const persona1 = new Persona( nombre1, apellido1, pais1 );


/* se crea las propiedades como un objeto  */
const fher = {
    nombre:   'Fernando',
    apellido: 'Herrera',
    pais:     'Costa Rica'
}      

const persona2 = Persona.porObjeto( fher );


persona1.getInfo();
persona2.getInfo();




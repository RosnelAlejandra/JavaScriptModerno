const miModulo = (() =>{
        /**
         * 2C = Two of Clubs
         * 2D = Two of Diamonds
         * 2H = Two of Hearts
         * 2S = Two of Spades
         */
        'use strict'

        let deck = [];
        const tipos      = ['C','D','H','S'],  especiales = ['A','J','Q','K'];

        //let puntosJugador = 0,  puntosComputadora = 0;
        let puntosJugadores = []

        // Referencias del HTML
        const btnPedir   = document.querySelector('#btnPedir'),
              btnDetener = document.querySelector('#btnDetener'),
              btnNuevo   = document.querySelector('#btnNuevo');

        const divCartasJugadores = document.querySelectorAll('.divCarta'),
              puntosHTML = document.querySelectorAll('small');

        console.log(divCartasJugadores);
        //colocamos varible el numeros de jugadores 
        const inicializarJuego = (numJugadores = 2) =>{
            deck = crearDeck();

            puntosJugadores = [];
            for (let i = 0; i < numJugadores; i++) {
                puntosJugadores.push(i);
            }

            puntosHTML.forEach( elem => elem.innerText = 0 );
            divCartasJugadores.forEach( elem => elem.innerHTML = '' );
    
            btnPedir.disabled   = false;
            btnDetener.disabled = false;
        }

        const crearDeck = () => {

            deck = [];

            for( let i = 2; i <= 10; i++ ) {
                for( let tipo of tipos ) {
                    deck.push( i + tipo);
                }
            }

            for( let tipo of tipos ) {
            for (const esp of especiales) {
                    deck.push( esp + tipo);
            }
            }

            //Se ordena el arreglo de forma aleatorea 
            return  _.shuffle(deck);
        }


        const pedirCarta = () => {

            if(deck.length === 0){
                throw 'No hat cartas!!'
            }

            const i = Math.floor(Math.random() * (0 - deck.length)) + 0;

            /* tambien se puede trabajar con el: */ //const carta = deck.pop();

            let carta = deck.splice(i,1);

            return carta[0];

        }


        const valorCarta = ( carta ) => {

            const valor = carta.substring(0, carta.length - 1);

            //isNaN === true si NO es un numero 
            return ( isNaN( valor ) ) ? 
                                    ( valor === 'A' ) ? 11 : 10
                                    : valor * 1; //se multiplica por 1 para pasarlo a numero

        }

        const acumularPuntos = (carta, turno ) => {
            puntosJugadores[turno] =  puntosJugadores[turno] + valorCarta( carta );
            puntosHTML[turno].innerText =  puntosJugadores[turno];
            return  puntosJugadores[turno];
        }

        const crearCarta = ( carta, turno ) => {

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
            imgCarta.classList.add('carta');
            divCartasJugadores[turno].append( imgCarta );
    
        }

        const determinarGanador = () =>{
            
            const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

            setTimeout(() => {
                if( puntosComputadora === puntosMinimos ) {
                    alert('Nadie gana :(');
                } else if ( puntosMinimos > 21 ) {
                    alert('Computadora gana')
                } else if( puntosComputadora > 21 ) {
                    alert('Jugador Gana');
                } else {
                    alert('Computadora Gana')
                }
            }, 100 );
        }
 
        // turno de la computadora
        const turnoComputadora = ( puntosMinimos ) => {
            let puntosComputadora = 0;
            do {
                const carta = pedirCarta();
                puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1);
                puntosHTML[1].innerText = puntosComputadora;
                crearCarta(carta, puntosJugadores.length - 1 );

                if( puntosMinimos > 21 ) {
                    break;
                }

            } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

            determinarGanador();

        }

        btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0 );
        
        crearCarta( carta, 0 );

            if ( puntosJugador > 21 ) {
                console.warn('Lo siento mucho, perdiste');
                btnPedir.disabled   = true;
                btnDetener.disabled = true;
                turnoComputadora( puntosJugador );

            } else if ( puntosJugador === 21 ) {
                console.warn('21, genial!');
                btnPedir.disabled   = true;
                btnDetener.disabled = true;
                turnoComputadora( puntosJugador[0] );
            }

        });

        btnDetener.addEventListener('click', () =>{
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        } )

        btnNuevo.addEventListener('click', () =>{
            console.clear();
            
            inicializarJuego();

            deck = crearDeck();
            

        } );


        return {
            //todo lo que es publico 
            inicializarJuego
        }
})();
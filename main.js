//----EJERCICIOS Y REPETICIONES----//
//EJERCICIOS 01
    //Revertir números y comparar (capicúa)
    const revertirNum = (numero) => {
        if (numero) {
            num = numero.toString() ;
            num = num.split('').reverse().join('') ;
            No = parseInt(num) ;
           
            if (numero === No) {
                console.log(`Are the same "${numero}" & "${No}"`) ;
            } else {
                console.log(`Are not the same "${numero}" & "${No}"`) ;
            } ;
        }  ;
    } ;
    revertirNum(1984) ; 
    revertirNum(7447) ; 


    //Revertir número o cadena de texto
    const revertir = (numero, texto) => {
        if (numero) {
            numero = numero.toString() ;
            num = numero.split('').reverse().join('') ;
            console.log(num) ;
        }
        if (texto) {
            resultado = '' ;
            for (let i = texto.length -1; i >= 0; i--) {
                resultado += texto[i] ;
            }
            console.log(resultado) ;
        }
    }
    revertir(58345) ;
    revertir('Dream Theater') ;
    revertir('Pull me under') ;


    //Tomar un valor aleatorio de entre dos cantidades (100 - 200)
    console.log(Math.floor(Math.random() * 100) + 100) ;


    //calculadora (En el supuesto que los elementos existan)
    const boton = document.querySelectorAll('button') ;
    const pantalla = document.querySelector('.display') ;

    boton.forEach((item) => {
        item.id = () => {
            if (item.id == 'clear') {
                pantalla.innerText = '' ;
            } else if (item.id =='del') {
                let string = pantalla.innerText.toString() ;
                pantalla.innerText = string.substr(0, string.length -1) ;
            } else if (pantalla.innerText != '' && item.id == 'equal') {
                pantalla.innerText = eval(pantalla.innerText) ;
            } else if (pantalla.innerText = '' && item.id == 'equal') {
                pantalla.innerText = 'null' ;
                setTimeout(() => {
                    pantalla.innerText = '' ;
                }, 3000) ;
            } else {
                pantalla.innerText += item.id ;
            }
        }
    })

    const botonToggle = document.querySelector('toggle') ;
    const fondo = document.querySelector('.container') ;
    
    let esOscuro = true ;
    botonToggle.onclick = () => {
        botonToggle.classList.toggle('active') ;
        fondo.classList.toggle('dark') ;
        esOscuro = !esOscuro ;
    }


    //Conocer el número menor de dos ingresados, sin usar condicionales
    let num1 = 98 ;
    let num2 = 76 ;
    let contador = 0 ;
    
    do {
        num1-- ;
        num2-- ;
        contador++ ;

    } while (num1 && num2) ;
    console.log(`${contador} es el número menor`) ;


    //Rocola, reproductora de canciones por repetición cada "x" veces
    class rocola {
        rolas = ['Bad Habbit', 'Pull me Under', 'The Clarivoyant', 'Self Love', 'Save your Tears'] ;
        queue = [] ;

        tocar(x) {
            if (this.queue.length >= x) {
                let paso3 = this.queue.shift() ;
                this.rolas.push(paso3) ;
            } {
                let paso1 = Math.floor(Math.random() * this.rolas.length) ;
                let paso2 = this.rolas.splice(paso1, 1) [0] ;
                this.queue.push(paso2) ;
                return paso2 ;
            }
        }
    }

    let Rocola = new rocola() ;

    let i = 0 ;
    let iterar = setInterval(() => {
        if (i == 10) { 
            clearInterval(iterar) ;
        } else {
            console.log(Rocola.tocar(5)) ;
        } i++ ;
    }, 1000) ;


    //Selector de valor aleatorio en color hexadecimal
    signos = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9] ;
    hex = '#' ;

    for (let i = 0 ; i < 6 ; i++ ) {
        hex += signos[randomColor()] ;
    }
    
    function randomColor() {
        return Math.floor(Math.random() * signos.length) ;
    } ;
    
    console.log(hex) ;
    

    //Función fibbonacci 
        //Ejemplo 01 (Muestra el último número)
    function fibonacci(n) {
        if (n < 2) {
            return n ;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2) ;
        }
    }
    console.log(fibonacci(6)) ;

        //Ejemplo 02 (Muestra la secuencia completa)
    function fibonacci(numMax) {
        const fibList = [0, 1] ;

        for (let i = 2; i <= numMax; i++) {
            const next = fibList[i - 2] + fibList[i - 1] ;
            fibList.push(next) ;
        }
        return fibList ;
    }
      
    console.log(fibonacci(6)) ;


    //Función que imprime las veces que se pida, un texto
    const duplicar = (texto, veces) => {
        if (texto, veces) {
            for (let i = 0; i < veces; i++) {
                console.log(texto) ;
            }
        }
    }
    duplicar('Saitama', 3) ;


    //Grados celsius a fahrenheit y viceverse
    const conversor = (fahr, cels) => {
        if (fahr) {
            console.log(`"${fahr}" grados fahrnheit son "${((fahr * 1.8) + 32)}" grados celsius `) ;
        } else if (cels) {
            console.log(`"${cels}" grados celsius son "${((cels - 32) / 1.8)}" grados fahrenheit `) ;
        }
    }
    conversor(17)
    conversor('', 86) ;
    //Mejorar...
    console.log(`"${fahr}" grados fahrnheit son "${((fahr * 1.8) + 32)}" grados celsius `);
    console.log(`"${cels}" grados celsius son "${((cels - 32) / 1.8)}" grados fahrenheit `);


    //fahrenheit a celsius
    console.log((17 * 1.8) + 32) //62.6 F
    //celsius a fahrenheit
    console.log((86 - 32) / 1.8) //30 C

    
    //♦ Idea 
        //Aplicación / web donde guarde código para revisar y repasarlo mientras esté fuera...
    
  
    //Revierte textos, con condicional ternario
    const impresionTextos = (texto) => {
        !texto 
            ? console.log('Ingrese texto') //Si no se cumple
            : console.log(texto.split('').reverse().join('')) //Si se cumple
    } 
        impresionTextos('Shrek') 
        impresionTextos('') 

    //--REPASOS--// ↓↓
    const textosDoblados = (texto, veces) => {
        if (texto && veces) {
            for (let i = 0; i < veces; i++) {
                console.log(texto) ;
            }
        } 
    }
        textosDoblados('Shrek', 5) ;

       //REPASO... 
    function comparar(numero) {
        if (numero) {
            num = numero.toString() ;
            num = num.split('').reverse().join('') ;
            num = parseInt(num) ;
            numero ;
            //console.log(typeof num, typeof numero)
        } if (numero === num) {
            console.log(`El número ${numero} SÍ es capicúa`) ;
        } else {
            console.log(`El número ${numero} NO es capicúa`)
        }
    }
    comparar(1236) ;
    comparar(1221) ;    

        //Concatenación
    const datos = {
        edad: 12 ,
        nombre: 'Yiszec' ,
        apellido: 'Oldovric'
    }

    let frase = `Hola, mi nombre es ${datos.nombre} y tengo ${datos.edad} años` 
    console.log(frase) ;

    //Números pares / impares entre dos especificados
    const imprime = (num1, num2) => {
        if (num1 && num2) {
            for (let i = num1; i <= num2; i++) {
                if (i % 2 === 0) {
                    console.log(`${i} es par`) ;
                } else {
                    console.log(`${i} es impar`) ;
                }
            }
        }
    }
    imprime(45, 49) ;

    //Mostrar el número mayor de dos ingresados
    function numMayor(numero1, numero2) {
        if (!isNaN(parseFloat(numero1)) && !isNaN(parseFloat(numero2))) {
            if (parseFloat(numero1) - parseFloat(numero2) > 0) {
                console.log(`"${numero1}" es mayor`) ;
            } else if (parseFloat(numero1) - parseFloat(numero2) < 0) {
                console.log(`"${numero2}" es mayor`)
            }            
        } else {
            console.log('Ingrese dos números') ;
        }
    }
    numMayor('5', 'dos') ;
    numMayor('cinco', 'dos') ;

    numMayor(85, 23) ;
    numMayor(70, 21) ;
    numMayor(45, 34) ;


    //Mostrar el número menor de dos ingresados
    const numMenor = (numero1, numero2) => {
        if (!Number(numero1) || !Number(numero2)) {
            console.log('Ingrese dos números') ;
        } else if (numero1 - numero2 > 0) {
            console.log(`${numero2} es menor`) ;
        } else if (numero1 - numero2 < 0) {
            console.log(`${numero1} es menor`) ;
        }
    }
    numMenor('cinco', 'tres')
    numMenor('cinco', '5')
    numMenor(5, 68) ; 
    numMenor(9, 6) ; 
    numMenor('', '') ; 

    const numMayor = (numero1) => {
        if (numero1) {
            numero1 = numero1.toString() ;
            resultado = '' ;
            for (let i = numero1.length -1; i >= 0; i--) {
                resultado += numero1[i] ;
            } 
            console.log(resultado) ;
        }
    }
    numMayor('letra') ;
    numMayor(45565) ;

    //Suma de dos números "x" y división de su resultado entre 2
    const suma = (x, y) => {
        if (x && y) {
            console.log((x + y) /2) 
        }
    }
    suma(54, 6) ;
    console.log((54 + 6) / 2) ;

    const numCapicua = (numero) => {
        if (numero) {
            let num = numero.toString() ;
            num = num.split('').reverse().join('') ;
            num = Number(num) ; 
                //num = parseInt(num) ;
            if (num === numero) {
                console.log(`${num} es capicua`) ;
            } else {
                console.log(`${num} no es capicua`) ;
            }
        }
    }
    numCapicua(789987) ;
    numCapicua(789) ;

    //Invertir dos veces una misma palabra
    const invertirPalabra = (palabra) => {
        if (palabra) {
            resultado = '' ;
            for (let i = palabra.length -1; i >= 0; i--) {
                resultado += palabra[i] ; 
            }
            console.log(resultado)
        }
        resultado = resultado.split('').reverse().join('') ;
        console.log(resultado) ;
    }
    invertirPalabra('Palabra cualquiera')
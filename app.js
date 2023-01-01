document.addEventListener('DOMContentLoaded', function(){
    alert("klk con klk")
    
    //---------------------------------------------

    //Creacion de Elementos

    const App = document.getElementById('App');
    const arregloNumeros =[0,1,2,3,4,5,6,7,8,9];
    const arregloOperadores =['+', '-', '*', '/', '%', '^','='];
    let concatenador = '';
    let acumulado = 0;
    const resultado = document.createElement('input');
    let operador = '';
    let simbolo = '';
    
   

    for(let i = 0; i !== arregloNumeros.length; i++){
        const boton = document.createElement('button');
        const br = document.createElement('br');

        boton.type = 'button';
        boton.className = 'btn-styled';
        boton.id = arregloNumeros[i];
        boton.value = boton.id;
        boton.innerHTML = boton.value.toString();
        boton.addEventListener('click', function(){

            concatenador += arregloNumeros[i];
            acumulador = parseInt(concatenador);
            console.log(acumulador);
            resultado.value = acumulador.toString();
            
        }) 
        App.appendChild(boton);
        App.appendChild(br);  
    }

    App.appendChild(resultado);
    App.appendChild(document.createElement('br'));

    for(let i = 0; i !== arregloOperadores.length; i++){
        const boton = document.createElement('button');
        const br = document.createElement('br');

        boton.type = 'button';
        boton.className = 'btn-styled';
        boton.id = arregloOperadores[i];
        if (boton.id === '='){
            boton.value = '';
        }else{
            boton.value = boton.id;
        }
        boton.innerHTML = boton.id;
        boton.addEventListener('click', function(){


            let acumulador = 0;
            operador = boton.value;
            simbolo = boton.id;
            

            

            if(boton.id !== ''){
                if(concatenador !== ''){
                    switch(operador){
                        case '+':
                            acumulador += parseInt(concatenador);
                            acumulado += acumulador;
                            concatenador = '';
                            acumulador = acumulado
                            console.log(acumulado);
                            resultado.value = acumulado.toString();
                            break;
                        case '-':
                            acumulador += parseInt(concatenador);
                            acumulado -= acumulador;
                            concatenador = '';
                            acumulador = acumulado
                            console.log(acumulado);
                            resultado.value = acumulado.toString();
                            break;
                        case '*':
                            acumulador += parseInt(concatenador);
                            acumulado *= acumulador;
                            concatenador = '';
                            acumulador = acumulado
                            console.log(acumulado);
                            resultado.value = acumulado.toString();
                            break;
                        case '/':
                            
                            break;
                        case '%':
                            
                            break;
                        case '^':
                            
                            break;
                    }   
                }else{
                    
                }
                
            }
            
        }) 
        App.appendChild(boton);
        App.appendChild(br);  
    }


            

    /*
    const arregloVeltical = ['0','1','2','3','4','5','6','7','8','9','10']
    const arregloOrizontal = ['A','B','C','D','E','F','G','H','I','J','K']
    
    for(let i = 0; i !== arregloVeltical.length; i++){
        const inputs = document.createElement('input');
        inputs.type = 'input';
        inputs.id = arregloOrizontal[i].toString() + arregloVeltical[i].toString();
        inputs.value = '';
        console.log(inputs.id);
        App.appendChild(inputs);
    }
*/

    //logica mejorada

    const btnCero = document.createElement('button');
    btnCero.type = 'button';
    btnCero.innerHTML = '0';
    btnCero.value = 0
    btnCero.className = 'btn-styled';

    const btnUno = document.createElement('button');
    btnUno.type = 'button';
    btnUno.innerHTML = '1';
    btnUno.value = 1
    btnUno.className = 'btn-styled';

    const btnDos = document.createElement('button');
    btnDos.type = 'button';
    btnDos.innerHTML = '2';
    btnDos.value = 2
    btnDos.className = 'btn-styled';

    const btnTres = document.createElement('button');
    btnTres.type = 'button';
    btnTres.innerHTML = '3';
    btnTres.value = 3
    btnTres.className = 'btn-styled';

    const btnCuatro = document.createElement('button');
    btnCuatro.type = 'button';
    btnCuatro.innerHTML = '4';
    btnCuatro.value = 4
    btnCuatro.className = 'btn-styled';

    const btnCinco = document.createElement('button');
    btnCinco.type = 'button';
    btnCinco.innerHTML = '5';
    btnCinco.value = 5
    btnCinco.className = 'btn-styled';

    const btnSeis = document.createElement('button');
    btnSeis.type = 'button';
    btnSeis.innerHTML = '6';
    btnSeis.value = 6
    btnSeis.className = 'btn-styled';

    const btnSiete = document.createElement('button');
    btnSiete.type = 'button';
    btnSiete.innerHTML = '7';
    btnSiete.value = 7
    btnSiete.className = 'btn-styled';

    const btnOcho = document.createElement('button');
    btnOcho.type = 'button';
    btnOcho.innerHTML = '8';
    btnOcho.value = 8
    btnOcho.className = 'btn-styled';

    const btnNueve = document.createElement('button');
    btnNueve.type = 'button';
    btnNueve.innerHTML = '9';
    btnNueve.value = 9
    btnNueve.className = 'btn-styled';

    const btnSuma = document.createElement('button');
    btnSuma.type = 'button';
    btnSuma.innerHTML = '+';
    btnSuma.value = '+'
    btnSuma.className = 'btn-styled';

    const btnResta = document.createElement('button');
    btnResta.type = 'button';
    btnResta.innerHTML = '-';
    btnResta.value = '-'
    btnResta.className = 'btn-styled';

    const btnMultiplica = document.createElement('button');
    btnMultiplica.type = 'button';
    btnMultiplica.innerHTML = '*';
    btnMultiplica.value = '*'
    btnMultiplica.className = 'btn-styled';

    const btnDivide = document.createElement('button');
    btnDivide.type = 'button';
    btnDivide.innerHTML = '/';
    btnDivide.value = '/'
    btnDivide.className = 'btn-styled';

    const btnModulo = document.createElement('button');
    btnModulo.type = 'button';
    btnModulo.innerHTML = '%';
    btnModulo.value = '%'
    btnModulo.className = 'btn-styled';

    const btnElevaPotencia = document.createElement('button');
    btnElevaPotencia.type = 'button';
    btnElevaPotencia.innerHTML = '^';
    btnElevaPotencia.value = '^'
    btnElevaPotencia.className = 'btn-styled';

    const btnRaizCuadrada = document.createElement('button');
    btnRaizCuadrada.type = 'button';
    btnRaizCuadrada.innerHTML = 'R(2)';
    btnRaizCuadrada.value = 'R(2)'
    btnRaizCuadrada.className = 'btn-styled';

    const btnRaizVariada = document.createElement('button');
    btnRaizVariada.type = 'button';
    btnRaizVariada.innerHTML = 'R(x)';
    btnRaizVariada.value = 'R(x)'
    btnRaizVariada.className = 'btn-styled';

    const btnCalcula = document.createElement('button');
    btnCalcula.type = 'button';
    btnCalcula.innerHTML = '=';
    btnCalcula.value = '='
    btnCalcula.className = 'btn-styled';

    const btnLimpia = document.createElement('button');
    btnLimpia.type = 'button';
    btnLimpia.innerHTML = 'Limpiar';
    btnLimpia.value = ''
    btnLimpia.className = 'btn-styled';

    const txtResultado = document.createElement('input');
    txtResultado.id = 'txtResultado';
    txtResultado.type = 'textArea';
    txtResultado.value = 'Resultado';
    txtResultado.className = 'btn-styled';


    //---------------------------------------

    //Aplicacion de la Logica a cada Elemento


    let Numero0 = 0;
    let Numero1 = 0;
    let Numero2 = 0;
    let Numero3 = 0;
    let Numero4 = 0;
    let Numero5 = 0;
    let Numero6 = 0;
    let Numero7 = 0;
    let Numero8 = 0;
    let Numero9 = 0;
    let simbSuma = '';
    let simbResta = '';
    let simbMultiplica = '';
    let simbDivide = '';
    let simbModulo = '';
    let simbPotencia = '';
    let simbRaizCuadrada = '';
    let simbRaizVariada = '';
    let simbLimpia = '';
    let simbCalcula = '';
    //let operador = '';
    let Resultado = 0;

    btnCero.onclick = function(){
        console.log(btnCero.value)
        Numero0 = parseInt(btnCero.value);
        txtResultado.value = Numero0.toString();
    }
    btnUno.onclick = function(){
        console.log(btnUno.value)
        Numero1 = parseInt(btnUno.value);
        txtResultado.value = Numero1.toString();
    }
    btnDos.onclick = function(){
        console.log(btnDos.value)
        Numero2 = parseInt(btnDos.value);
        txtResultado.value = Numero2.toString();
    }
    btnTres.onclick = function(){
        console.log(btnTres.value)
        Numero3 = parseInt(btnTres.value);
        txtResultado.value = Numero3.toString();
    }
    btnCuatro.onclick = function(){
        console.log(btnCuatro.value)
        Numero4 = parseInt(btnCuatro.value);
        txtResultado.value = Numero4.toString();
    }
    btnCinco.onclick = function(){
        console.log(btnCinco.value)
        Numero5 = parseInt(btnCinco.value);
        txtResultado.value = Numero5.toString();
    }
    btnSeis.onclick = function(){
        console.log(btnSeis.value)
        Numero6 = parseInt(btnSeis.value);
        txtResultado.value = Numero6.toString();
    }
    btnSiete.onclick = function(){
        console.log(btnSiete.value)
        Numero7 = parseInt(btnSiete.value);
        txtResultado.value = Numero7.toString();
    }
    btnOcho.onclick = function(){
        console.log(btnOcho.value)
        Numero8 = parseInt(btnOcho.value);
        txtResultado.value = Numero8.toString();
    }
    btnNueve.onclick = function(){
        console.log(btnNueve.value)
        Numero9 = parseInt(btnNueve.value);
        txtResultado.value = Numero9.toString();
    }

    btnSuma.onclick = function(){
        console.log(btnSuma.value)
        simbSuma = btnSuma.value;
        operador = btnSuma.value;
        txtResultado.value = simbSuma;
    }
    btnResta.onclick = function(){
        console.log(btnResta.value)
        simbResta = btnResta.value;
        operador = btnResta.value;
        txtResultado.value = simbResta;
    }
    btnMultiplica.onclick = function(){
        console.log(btnMultiplica.value)
        simbMultiplica = btnMultiplica.value;
        operador = btnMultiplica.value;
        txtResultado.value = simbMultiplica;
    }
    btnDivide.onclick = function(){
        console.log(btnDivide.value)
        simbDivide = btnDivide.value;
        operador = btnDivide.value;
        txtResultado.value = simbDivide;
    }
    btnModulo.onclick = function(){
        console.log(btnModulo.value)
        simbModulo = btnModulo.value;
        operador = btnModulo.value;
        txtResultado.value = simbModulo;
    }
    btnElevaPotencia.onclick = function(){
        console.log(btnElevaPotencia.value)
        simbPotencia = btnElevaPotencia.value;
        operador = btnElevaPotencia.value;
        txtResultado.value = simbPotencia;
    }
    btnRaizCuadrada.onclick = function(){
        console.log(btnRaizCuadrada.value)
        simbRaizCuadrada = btnRaizCuadrada.value;
        operador = btnRaizCuadrada.value;
        txtResultado.value = simbRaizCuadrada;
    }
    btnRaizVariada.onclick = function(){
        console.log(btnRaizVariada.value)
        simbRaizVariada = btnRaizVariada.value;
        operador = btnRaizVariada.value;
        txtResultado.value = simbRaizVariada;
    }
    btnLimpia.onclick = function(){
        console.log(btnLimpia.value)
        simbLimpia = btnLimpia.value;
        txtResultado.value = 'Resultado';
        console.clear();
        let Numero0 = 0;
        Numero1 = 0;
        Numero2 = 0;
        Numero3 = 0;
        Numero4 = 0;
        Numero5 = 0;
        Numero6 = 0;
        Numero7 = 0;
        Numero8 = 0;
        Numero9 = 0;
        simbSuma = '';
        simbResta = '';
        simbMultiplica = '';
        simbDivide = '';
        simbModulo = '';
        simbPotencia = '';
        simbRaizCuadrada = '';
        simbRaizVariada = '';
        simbLimpia = '';
        simbCalcula = '';
        operador = '';
        Resultado = 0;
    }
    btnCalcula.onclick = function(){
        simbCalcula = btnCalcula.value;
        txtResultado.value = simbCalcula;



        //-----------------------------------------------

        // El proceso de calculo y guardado dinamico del resultado se realiza en este boton.

        switch(operador){
            case '+':
                Resultado = Numero0 + Numero1 + Numero2 + Numero3 + Numero4 + Numero5 + Numero6 + Numero7 + Numero8 + Numero9
                console.log(btnCalcula.value + " " + operador)
                console.log(Resultado)
                txtResultado.value = '= ' + Resultado.toString();
                break;
            case '-':
                Resultado = Numero0 - Numero1 - Numero2 - Numero3 - Numero4 - Numero5 - Numero6 - Numero7 - Numero8 - Numero9
                console.log(btnCalcula.value + " " + operador)
                console.log(Resultado)
                txtResultado.value = '= ' + Resultado.toString();
                break;
            case '*':
                Resultado = Numero0 * Numero1 * Numero2 * Numero3 * Numero4 * Numero5 * Numero6 * Numero7 * Numero8 * Numero9
                console.log(btnCalcula.value + " " + operador)
                break;
            case '/':
                Resultado = Numero0 / Numero1 / Numero2 / Numero3 / Numero4 / Numero5 / Numero6 / Numero7 / Numero8 / Numero9
                console.log(btnCalcula.value + " " + operador)
                break;
            case '%':
                Resultado = Numero0 % Numero1 % Numero2 % Numero3 % Numero4 % Numero5 % Numero6 % Numero7 % Numero8 % Numero9
                console.log(btnCalcula.value + " " + operador)
                break;
                                                    
                
                
        }
        
    }




    //-------------------------------------------

    //Agregar Elementos al Lienzo

    const br = document.createElement('br')
    const br2 = document.createElement('br')
    const root = document.getElementById('root');
    root.appendChild(btnCero)
    root.appendChild(btnUno)
    root.appendChild(btnDos)
    root.appendChild(btnTres)
    root.appendChild(btnCuatro)
    root.appendChild(btnCinco)
    root.appendChild(btnSeis)
    root.appendChild(btnSiete)
    root.appendChild(btnOcho)
    root.appendChild(btnNueve)
    root.appendChild(br)
    root.appendChild(btnSuma)
    root.appendChild(btnResta)
    root.appendChild(btnMultiplica)
    root.appendChild(btnDivide)
    root.appendChild(btnModulo)
    root.appendChild(btnElevaPotencia)
    root.appendChild(btnRaizCuadrada)
    root.appendChild(btnRaizVariada)
    root.appendChild(br2)
    root.appendChild(btnLimpia)
    root.appendChild(btnCalcula)
    root.appendChild(txtResultado)
    
    
    

    
}, false)

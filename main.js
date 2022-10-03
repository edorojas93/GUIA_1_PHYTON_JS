addEventListener("DOMContentLoaded", (e)=>{

    //Ciclo de WHILE//
    let contador = 1, suma = 0, resta = 0, multiplicacion = 0, divsion = 0;
    let cantidad = parseInt(prompt ("Ingrese la cantidad de procesos a realizar"));

    while(cont <= cantidad)
    {
    
    //Datos de entrada//
    let num_1 = parseInt(prompt("Ingrese el primer numero:"));
    let num_2 = parseInt(prompt("Ingrese el segundo numero: "));

    //Proceso //
    let suma = num_1 + num_2;
    let resta = num_1 - num_2;
    let multiplicacion = num_1 * num_2;
    let division = num_1 / num_2;
    cont ++;
    }
   
    ///Salida//
    document.write(`La suma de los dos numeros es:${suma}`)
    document.write(`La resta de los dos numeros es:${resta}`)
    document.write(`La multiplicacion de los dos numeros es:${multiplicacion}`)
    document.write(`La division de los dos numeros es:${division}`)
    })



            

    
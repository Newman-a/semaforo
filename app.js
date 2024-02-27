// Primer par de semaforos vertical

const semaforoVerde = document.querySelectorAll('#sOne');
const semaforoAmarillo = document.querySelectorAll('#sTwo');
const semaforoRojo = document.querySelectorAll('#sThree');

// Segundo par de semaforos horizontal

const semaforoVerde2 = document.querySelectorAll('#sFour');
const semaforoAmarillo2 = document.querySelectorAll('#sFive');
const semaforoRojo2 = document.querySelectorAll('#sSix');

//Proceso de cambio de semaforos

function proceso() {
    
    //Este el semaforo verde vertical

    semaforoVerde.forEach((semaforo) => {
        semaforo.classList.remove('green');
        semaforo.classList.add('green-active');
        setTimeout(() => {
            semaforo.classList.remove('green-active');
            semaforo.classList.add('green');
        }, 30000);
    }); 

    //Este es el semaforo naranja o amarillo vertical
    
    setTimeout(()=> {
        semaforoAmarillo.forEach((semaforo) => {
            semaforo.classList.remove('yellow');
            semaforo.classList.add('yellow-active');
                setTimeout(() => {
                semaforo.classList.remove('yellow-active');
                semaforo.classList.add('yellow');
            }, 5000);
        });
    }, 30000);

    setTimeout(()=> {
        semaforoRojo.forEach((semaforo) => {
            semaforo.classList.remove('red');
            semaforo.classList.add('red-active');
                setTimeout(() => {
                semaforo.classList.remove('red-active');
                semaforo.classList.add('red');
                }, 30000);
            });
        }, 35000);

        // Segundo par de semaforos

    semaforoRojo2.forEach((semaforo) => {
        semaforo.classList.remove('red');
        semaforo.classList.add('red-active');
        setTimeout(() => {
            semaforo.classList.remove('red-active');
            semaforo.classList.add('red');
        }, 35000);
    });

    setTimeout(()=> {
        semaforoVerde2.forEach((semaforo) => {
            semaforo.classList.remove('green');
            semaforo.classList.add('green-active');
            setTimeout(() => {
                semaforo.classList.remove('green-active');
                semaforo.classList.add('green');
            }, 25000);
        });
    }, 35000);

    setTimeout(()=>{
        semaforoAmarillo2.forEach((semaforo) => {
            semaforo.classList.remove('yellow');
            semaforo.classList.add('yellow-active');
            setTimeout(() => {
                semaforo.classList.remove('yellow-active');
                semaforo.classList.add('yellow');
            }, 5000);
        });
    }, 60000);           
};

const intervalo = setInterval(proceso, 65000);
proceso();

//Cronometro

let milisegundos = 0;
let segundos = 0;
let minutos = 0;

function actualizarCronometro() {
    milisegundos += 10;

    if (milisegundos == 1000) {
        milisegundos = 0;
        segundos++;

        if (segundos == 60) {
            segundos = 0;
            minutos++;
        }
    }

    const tiempoFormateado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(milisegundos).padStart(3, '0')}
    ----------------
    Made By: 
    Newman`;
    document.getElementById('cronometro').innerText = tiempoFormateado;
}

setInterval(actualizarCronometro, 10);

actualizarCronometro();
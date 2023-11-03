

//Funcion para validar el DNI
function validarDNI(dni) {
    //Si el DNI no es un numero, es menor o igual que 1 o mayor o igual a 99999999, se toma como dni incorrecto y la funcion devuelve un false
    return !isNaN(dni) && dni >= 1 && dni <= 99999999;
}

// Función para calcular el precio con descuento
function calcularDescuento(precio) {
    // Se declaran el % de descuento de cada código en diferentes constantes para que si hay que hacer algún ajuste no se toque nada más que estas variables
    const descuentoBBVA = 15;
    const descuentoHSBC = 10;
    const descuentoCoder = 20;


    let subtotal = precio;
    let descuentoAplicado = false;


    do {
    let codigo = prompt("Ingrese su código de descuento: ").toUpperCase();
    switch (codigo) {
        case 'BBVA':
            // Descuento del 15%
            subtotal = precio - (precio * descuentoBBVA) / 100;
            descuentoAplicado = true;
            break;
        case 'HSBC':
            // Descuento del 10%
            subtotal = precio - (precio * descuentoHSBC) / 100;
            descuentoAplicado = true;
            break;
        case 'CODER':
            // Descuento del 20%
            subtotal = precio - (precio * descuentoCoder) / 100;
            descuentoAplicado = true;
            break;
        default:
            alert("Por favor ingrese un código correcto.")
    }
    } while(!descuentoAplicado)

    return subtotal;
}


let dni;
let monto = 0;
let salir = false; 
const nombre = prompt("Ingrese su nombre: ").toUpperCase();
const apellido = prompt("Ingrese su apellido: ").toUpperCase();
do {
    //Validamos el DNI con la función creada anteriormente
    dni = parseInt(prompt("Ingrese su DNI: "));
    if (!validarDNI(dni)){
        alert("Por favor, ingrese un DNI válido.");
    } 
} while (!validarDNI(dni));


console.log("Bienvenido " + nombre + " " + apellido)

do{  
    console.log("Catálogo" + 
    "\n1. Zapatillas Adidas $17.000" + 
    "\n2. Zapatillas Nike $20.000" + 
    "\n3. Zapatillas Topper $10.000" + 
    "\n4. Zapatillas Puma $11.000" + 
    "\n5. Zapatillas AirBalance $14.000" + 
    "\n6. Zapatillas Nike Jordan $50.000" + 
    "\n7. Zapatillas Reebok $13.000" + 
    "\n0. Salir");
    let opcion = prompt("¿Qué desea comprar?(Presione 0 para salir): ");

    //Creamos el "catálogo" de productos con el que se simula una tienda en la cual se van agregando productos al carro de compras
    switch (opcion)
    {
        case '1':
            monto += 17000;
            alert("Se agregó el producto a su carro.")
            break;

        case '2':
            monto += 20000;
            alert("Se agregó el producto a su carro.")
            break;

        case '3':
            monto += 10000;
            alert("Se agregó el producto a su carro.")
            break;

        case '4':
            monto += 11000;
            alert("Se agregó el producto a su carro.")
            break;

        case '5':
            monto += 14000;
            alert("Se agregó el producto a su carro.")
            break;

        case '6':
            monto += 50000;
            alert("Se agregó el producto a su carro.")
            break;

        case '7':
            monto += 13000;
            alert("Se agregó el producto a su carro.")
            break;

        case '0':
            if(monto != 0)
                {
                salir = true;
                break;
                }
            else
                {
                    alert("Debe comprar al menos 1 elemento para poder continuar.");
                    break;
                }

        default:
            alert("Ingrese una opción correcta");

    }
    } while (!salir)

    //Reiniciamos la variable "salir" para poder utilizarla nuevamente
    salir = false;
    //Preguntamos si el usuario tiene código de descuento o no y en caso de la respuesta ser si aplicamos el descuento correspondiente
    let tieneDescuento = prompt("¿Tiene código de descuento?(Si/No)").toLowerCase();
    do{
    if (tieneDescuento === "si")
    {
        console.log("Ticket de compra" + 
        "\nNombre: " + nombre + 
        "\nApellido: " + apellido +
        "\nDNI: " + dni +
        "\nSubtotal: $" + monto +
        "\nTotal a pagar con descuento: $" + calcularDescuento(monto));
        salir = true;
    }   else if(tieneDescuento === "no")
            {
                console.log("Ticket de compra" + 
                "\nNombre: " + nombre + 
                "\nApellido: " + apellido +
                "\nDNI: " + dni +
                "\nTotal a pagar: $" + monto)
                salir = true;
            }
            else
            {
                alert("Por favor, ingrese una opcion correcta");
                tieneDescuento = prompt("¿Tiene código de descuento?(Si/No)").toLowerCase();
            }
    } while(!salir)
//! Aqui JQUERY
    //al iniciar la aplicacion los botones estan escondidos
    $(document).ready(function() {
        // Ocultar los botones al inicio
        $("button").hide();
        // Mostrar los botones con fadeIn
        $('#btnConversorDivisas, #btnConversorBitcoin, #btnFormulario, #btnRefeCambioDolar, #btnRefeCambioEuro').fadeIn(2000); 
        // Ocultar las secciones al inicio
        $("section").hide();
        // Toggle para mostrar/ocultar las secciones correspondientes al hacer clic en los botones
        $("#btnConversorDivisas").click(function() {
            $("#sectionConDiv").toggle();
            $("#sectionConBit, #sectionForm, #sectionReferenciaCambioD, #sectionReferenciaCambioE").hide();
        });
        $("#btnConversorBitcoin").click(function() {
            $("#sectionConBit").toggle();
            $("#sectionConDiv, #sectionForm, #sectionReferenciaCambioD, #sectionReferenciaCambioE").hide();
        });
        $("#btnFormulario").click(function() {
            $("#sectionForm").toggle();
            $("#sectionConBit, #sectionConDiv, #sectionReferenciaCambioD, #sectionReferenciaCambioE ").hide();
        });
        $("#btnRefeCambioDolar").click(function() {
            $("#sectionReferenciaCambioD").toggle();
            $("#sectionConBit, #sectionForm, #sectionConDiv, #sectionReferenciaCambioE").hide();
        });
        $("#btnRefeCambioEuro").click(function() {
            $("#sectionReferenciaCambioE").toggle();
            $("#sectionConBit, #sectionForm, #sectionConDiv, #sectionReferenciaCambioD").hide();
        });
    });
    

// Objeto constante de etiquetas y nombre de los paises
const etiquetaPaises = {
    "AED": "United Arab Emirates Dirham", "AFN": "Afghan Afghani", "ALL": "Albanian Lek", "AMD": "Armenian Dram", "ANG": "Netherlands Antillean Guilder", "AOA": "Angolan Kwanza", "ARS": "Argentine Peso", "AUD": "Australian Dollar", "AWG": "Aruban Florin", "AZN": "Azerbaijani Manat", "BAM": "Bosnia-Herzegovina Convertible Mark", "BBD": "Barbadian Dollar", "BDT": "Bangladeshi Taka", "BGN": "Bulgarian Lev", "BHD": "Bahraini Dinar", "BIF": "Burundian Franc", "BMD": "Bermudian Dollar", "BND": "Brunei Dollar", "BOB": "Bolivian Boliviano", "BRL": "Brazilian Real", "BSD": "Bahamian Dollar", "BTN": "Bhutanese Ngultrum", "BWP": "Botswana Pula", "BYN": "Belarusian Ruble", "BZD": "Belize Dollar", "CAD": "Canadian Dollar", "CDF": "Congolese Franc", "CHF": "Swiss Franc", "CLP": "Chilean Peso", "CNY": "Chinese Yuan", "COP": "Colombian Peso", "CRC": "Costa Rican Colón", "CUP": "Cuban Peso", "CVE": "Cape Verdean Escudo", "CZK": "Czech Republic Koruna", "DJF": "Djiboutian Franc", "DKK": "Danish Krone", "DOP": "Dominican Peso", "DZD": "Algerian Dinar", "EGP": "Egyptian Pound", "ERN": "Eritrean Nakfa", "ETB": "Ethiopian Birr", "EUR": "Euro", "FJD": "Fijian Dollar", "FKP": "Falkland Islands Pound", "FOK": "Faroese Króna", "GBP": "British Pound Sterling", "GEL": "Georgian Lari", "GGP": "Guernsey Pound", "GHS": "Ghanaian Cedi", "GIP": "Gibraltar Pound", "GMD": "Gambian Dalasi", "GNF": "Guinean Franc", "GTQ": "Guatemalan Quetzal", 
    "GYD": "Guyanaese Dollar", "HKD": "Hong Kong Dollar", "HNL": "Honduran Lempira", "HRK": "Croatian Kuna", "HTG": "Haitian Gourde", "HUF": "Hungarian Forint", "IDR": "Indonesian Rupiah", "ILS": "Israeli New Shekel", "IMP": "Manx pound", "INR": "Indian Rupee", "IQD": "Iraqi Dinar", "IRR": "Iranian Rial", "ISK": "Icelandic Króna", "JEP": "Jersey Pound", "JMD": "Jamaican Dollar", "JOD": "Jordanian Dinar", "JPY": "Japanese Yen", "KES": "Kenyan Shilling", "KGS": "Kyrgystani Som", "KHR": "Cambodian Riel", "KID": "Kiribati Dollar", "KMF": "Comorian Franc", "KRW": "South Korean Won", "KWD": "Kuwaiti Dinar", "KYD": "Cayman Islands Dollar", "KZT": "Kazakhstani Tenge", "LAK": "Laotian Kip", "LBP": "Lebanese Pound", "LKR": "Sri Lankan Rupee", "LRD": "Liberian Dollar", "LSL": "Lesotho Loti", "LYD": "Libyan Dinar", "MAD": "Moroccan Dirham", "MDL": "Moldovan Leu", "MGA": "Malagasy Ariary", "MKD": "Macedonian Denar", "MMK": "Myanmar Kyat", "MNT": "Mongolian Tugrik", "MOP": "Macanese Pataca", "MRU": "Mauritanian Ouguiya", "MUR": "Mauritian Rupee", "MVR": "Maldivian Rufiyaa", "MWK": "Malawian Kwacha", "MXN": "Mexican Peso", "MYR": "Malaysian Ringgit", "MZN": "Mozambican Metical", "NAD": "Namibian Dollar", "NGN": "Nigerian Naira", "NIO": "Nicaraguan Córdoba", "NOK": "Norwegian Krone", "NPR": "Nepalese Rupee", "NZD": "New Zealand Dollar", "OMR": "Omani Rial", "PAB": "Panamanian Balboa", "PEN": "Peruvian Nuevo Sol", "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso", "PKR": "Pakistani Rupee", "PLN": "Polish Zloty", "PYG": "Paraguayan Guarani", "QAR": "Qatari Rial", "RON": "Romanian Leu", "RSD": "Serbian Dinar", "RUB": "Russian Ruble", "RWF": "Rwandan Franc", "SAR": "Saudi Riyal", "SBD": "Solomon Islands Dollar", "SCR": "Seychellois Rupee", "SDG": "Sudanese Pound", "SEK": "Swedish Krona", "SGD": "Singapore Dollar", "SHP": "Saint Helena Pound", "SLE": "Sierra Leonean Leone", "SLL": "Slovak Koruna", "SOS": "Somali Shilling", "SRD": "Surinamese Dollar", "SSP": "South Sudanese Pound", "STN": "São Tomé and Príncipe Dobra", "SYP": "Syrian Pound", "SZL": "Swazi Lilangeni", "THB": "Thai Baht", "TJS": "Tajikistani Somoni", "TMT": "Turkmenistani Manat", "TND": "Tunisian Dinar", "TOP": "Tongan Pa'anga", "TRY": "Turkish Lira", "TTD": "Trinidad and Tobago Dollar", "TVD": "Tuvaluan Dollar", "TWD": "New Taiwan",
    "TZS": "Tanzanian Shilling", "UAH": "Ukrainian Hryvnia", "UGX": "Ugandan Shilling","USD": "United States Dollar", "UYU": "Uruguayan Peso", "UZS": "Uzbekistan Som", "VES": "Venezuelan Bolívar", "VND": "Vietnamese Dong", "VUV": "Vanuatu Vatu", "WST": "Samoan Tala", "XAF": "Central African CFA Franc", "XCD": "East Caribbean Dollar", "XDR": "Special Drawing Rights", "XOF": "West African CFA Franc", "XPF": "CFP Franc", "YER": "Yemeni Rial", "ZAR": "South African Rand", "ZMW": "Zambian Kwacha", "ZWL": "Zimbabwean Dollar"
};
 //! DOM busqueda de elementos por su id
    // contantes de los elementos
    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('input4');
    const nombreUsuario = document.getElementById('nombreUsuario');
    const monedaOrigen = document.getElementById('monedaOrigen');
    const monedaDestino = document.getElementById('monedaDestino');
    const montoOrigen = document.getElementById('montoOrigen');
    const montoDestino = document.getElementById('montoDestino');
    const fechaHora = document.getElementById('fechaHora');
    const email = document.getElementById('email');
    const select5 = document.getElementById('select5');       
    const select6 = document.getElementById('select6');
    const formulario = document.getElementById( 'formulario' ); 
    const elementoMensaje = document.getElementById('mensaje');
    const botonSubmit = document.getElementById('botonSubmit');    
    let mensajesValidacion = [];
    //funcion para cargar los paises de las monedas 
    function cargarEtiquetas(objeto, select) {        
        for(const clave in objeto){
            let opcion = document.createElement('option');            
            opcion.value = clave;
            opcion.textContent = `${clave}-${objeto[clave]}`;                      
            select.appendChild(opcion);        
        }
    }

    //se llama las funciones  asincronas para optener las etiquetas y cargarlas a los selects correspondientes
    function imprimirEtiquetas(){        
        cargarEtiquetas(etiquetaPaises, select1);
        cargarEtiquetas(etiquetaPaises, select2);
        cargarEtiquetas(etiquetaPaises, select5);
        cargarEtiquetas(etiquetaPaises, select6);
    }
    // se llama a la funciones y quedan los inputs cargados
    imprimirEtiquetas()
    //se obtiene la etiqueta que esta en el select
    function obtenerEtiqueta(select){                
        return select.value; 
    }
     // se coloca un evento avisador cuando cambia el valor del select toma el nuevo valor
    select1.addEventListener('change',()=>{
        obtenerEtiqueta(select1);             
        input1.value=0;
        input2.value=0;        
    });
    // se coloca un evento avisador cuando cambia el valor del select toma el nuevo valor
    select2.addEventListener('change', ()=>{
        obtenerEtiqueta(select2); 
        input2.value=0;       
        input1.value=0;       
    });
    

    // funcion que realiza el cambio
    function convertirMoneda(etiquetaSeleccionada,etiqueta,cantidadCambio,numeroInput){       
        fetch("https://open.er-api.com/v6/latest/"+etiquetaSeleccionada)
            .then(response=>response.json())
            .then(data=>{
                const cotizacion = data.rates[etiqueta];                
                if (typeof cotizacion !== "undefined"){                  
                    let resultado = (cotizacion * cantidadCambio).toFixed(2) ;
                    numeroInput.value= resultado;
                    asignarValores(etiquetaSeleccionada,etiqueta,cantidadCambio,resultado);
                }else{
                    alert(`La moneda ${etiquetaSeleccionada} no está disponible en este momento.`);
                }              
            })
            .catch(error => console.log(`Error: ${error}`));      
    }  
    function limpiarImput(){
        input1.value=0;
        input2.value=0;
        input3.value=0;
        input4.value=0;
    }
    limpiarImput();

    //! APARTIR DE AQUI CODIGO CRIPTO
    //Constantes de los elementos a utilizar   
        
    const select4 = document.getElementById('select4')
    const urlBitcoin = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    // cuando se cambie la etiqueta se limpian los inputs
    select4.addEventListener('change', ()=>{
        limpiarImput();
    }); 

     // funcion que convierte bitcoin a monedas

    function convertirCryp(url,etiqueta,cantidadCambio,numeroInput,btc) { 
        fetch(url)
            .then(response=>response.json())
            .then(data =>{
                let valorEnDolares = parseFloat(data.bpi.USD.rate_float);
                let valorEnEuros = parseFloat(data.bpi.EUR.rate_float);
                if(btc){
                    if(etiqueta === "USD") numeroInput.value = (parseFloat(cantidadCambio) * parseFloat(valorEnDolares)).toFixed(8);
                    if(etiqueta === "EUR") numeroInput.value = (parseFloat(cantidadCambio) * parseFloat(valorEnEuros)).toFixed(8);
                    asignarValores("BTC",etiqueta,cantidadCambio,numeroInput.value);
                }else if(btc === false){
                    if(etiqueta === "USD") numeroInput.value = (parseFloat(cantidadCambio)/parseFloat(valorEnDolares)).toFixed(8);
                    if(etiqueta === "EUR") numeroInput.value = (parseFloat(cantidadCambio)/parseFloat(valorEnEuros)).toFixed(8);
                    asignarValores(etiqueta,"BTC",cantidadCambio,numeroInput.value);
                }
                else{
                    alert("Seleccione un moneda valida");
                }

            })
            .catch(error => console.log(`Error: ${error}`));         
    }
    
    // se coloca un evento avisador cuando cambia el valor del input toma el nuevo valor
    input3.addEventListener('input', () =>{
        let etiquetaSelec = select4.value;
        let btc = true;
        let cantidad = input3.value;
        convertirCryp(urlBitcoin,etiquetaSelec,cantidad,input4,btc)
    });
    // se coloca un evento avisador cuando cambia el valor del input toma el nuevo valor
    input4.addEventListener( 'input', () =>{
        let etiquetaSelec = select4.value;
        let btc = false;
        let cantidad = input4.value;
        convertirCryp(urlBitcoin,etiquetaSelec,cantidad,input3,btc)
    });    
    
document.addEventListener("DOMContentLoaded",  () => {
    

    let etiquetaDolar = select5.value;
    let etiquetaEuro = select6.value;
    referenciaData(urlDolar, nombreMonedaVSDolar, etiquetaDolar, equivalenciaDolar);
    referenciaData(urlEuro, nombreMonedaVSEuro, etiquetaEuro, equivalenciaEuro);    
});

//! Seccion tipo de cambio dollar

let nombreMonedaVSDolar = document.getElementById('nombreMonedaVSDolar');
let nombreMonedaVSEuro = document.getElementById('nombreMonedaVSEuro');
let urlDolar = "https://open.er-api.com/v6/latest/USD";
let urlEuro = "https://open.er-api.com/v6/latest/EUR";
let equivalenciaDolar = document.getElementById('equivalenciaDolar');
let equivalenciaEuro = document.getElementById('equivalenciaEuro');
select5.addEventListener('change', () => {
    let etiquetaNueva = obtenerEtiqueta(select5);
    referenciaData(urlDolar, nombreMonedaVSDolar, etiquetaNueva, equivalenciaDolar);
});
select6.addEventListener('change', () => {
    let etiquetaNueva = obtenerEtiqueta(select6);
    referenciaData(urlEuro, nombreMonedaVSEuro, etiquetaNueva, equivalenciaEuro);
});

function referenciaData(url, nombreVs, etiqueta, equivalencia) {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            referencia(data, nombreVs, etiqueta, equivalencia);
        })
        .catch(error => console.log(`Error: ${error}`));
}

function referencia(data, nombreVs, etiqueta, equivalencia) {
    equivalencia.textContent = parseFloat(data.rates[etiqueta]).toFixed(2);
    nombreVs.textContent = etiqueta;
}

// Validar input
function validarInput(event) {
    const keyCode = event.keyCode || event.which;        
    if (!((keyCode >= 48 && keyCode <= 57) || keyCode === 190 || keyCode === 32 || keyCode === 8)) {
        event.preventDefault();
    }
}
input1.addEventListener( "keydown", validarInput);
input2.addEventListener( "keydown", validarInput);
input3.addEventListener( "keydown", validarInput);
input4.addEventListener( "keydown", validarInput);

function asignarValores(nombreCoinO, nombreCoinD, valorCoinO, valorCoinD){
    monedaOrigen.setAttribute( 'value' , nombreCoinO );
    monedaDestino.setAttribute( 'value' , nombreCoinD );
    montoOrigen.setAttribute( 'value' , valorCoinO );
    montoDestino.setAttribute( 'value' , valorCoinD );
    
    let horaActual = obtenerHoraActual();
    let fechaActual = obtenerFechaActual();
    fechaHora.setAttribute( 'value', `${fechaActual}, ${horaActual}` ) ;    
    
}

function obtenerFechaActual() {
    const fecha = new Date().toLocaleDateString("es");
    return fecha;
}
function obtenerHoraActual() {
    const horaActual = new Date();
    let hora = horaActual.getHours().toLocaleString('es');
    let horaF = hora < 10 ? (hora = `0${hora}`) : hora;
    let minutos = horaActual.getMinutes().toLocaleString('es');
    let minutosF = minutos < 10 ? (minutos = `:0${minutos}`):minutos;
    let segundos = horaActual.getSeconds().toLocaleString('es');
    let segundosF = segundos < 10 ? (`0${segundos}`):segundos;
    let horaFormateada = `${horaF}:${minutosF}:${segundosF}`;
    return horaFormateada;
}

// se coloca un evento avisador cuando cambia el valor del input toma el nuevo valor
input1.addEventListener( 'input' ,() =>{
    let cantidadCambio1= Number(input1.value );       
    if(cantidadCambio1 > 0){
        let etiqueta1 = obtenerEtiqueta(select1);
        let etiqueta2 = obtenerEtiqueta(select2);
        convertirMoneda(etiqueta1,etiqueta2, cantidadCambio1,input2);        
    }          
});

// se coloca un evento avisador cuando cambia el valor del input toma el nuevo valor
input2.addEventListener( 'input' ,() =>{
    let cantidadCambio2= input2.value ;
    if(cantidadCambio2 > 0){
        let etiqueta1 = obtenerEtiqueta(select1);
        let etiqueta2 = obtenerEtiqueta(select2);
        convertirMoneda(etiqueta2,etiqueta1, cantidadCambio2,input1);                    
    }       
});    
document.getElementById("btnFormulario").addEventListener('click',()=>{})
document.getElementById("btnFormulario").addEventListener('click',()=>{})

//! validacion de formulario
document.getElementById("sectionForm").addEventListener("click", validarFormulario);

function validarFormulario(){
    nombreUsuario.addEventListener("input", () => {
        nombreUsuario.setCustomValidity("");
        nombreUsuario.checkValidity();   
    });
    
    nombreUsuario.addEventListener("invalid", () => {
        nombreUsuario.setCustomValidity("Por favor, ingrese un nombre Valido.");
    });
    
    email.addEventListener("input", () => {
        email.setCustomValidity("");
        email.checkValidity();    
    });
    
    email.addEventListener("invalid", () => {
        email.setCustomValidity("Por favor, ingrese un email Valido.");
    });
}

//! BOM
// crear una ventana con la informacion del formulario
// Agrega el evento "submit" al formulario, no al botón
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario
    //para centrar la ventana
    let left = (window.screen.width / 2) - (480 / 2);
    let top = (window.screen.height / 2) - (640 / 2);
    let ventana = window.open('', 'Resumen', 'width=480,height=640'); // Ventana nueva en blanco
    ventana.document.write('<h2>Formulario Enviado con Exito!!!</h2>');
    ventana.document.write('<h4>Puede ver su informacion a continuacion</h4>');
    ventana.document.write('<p>Nombre de usuario: ' + nombreUsuario.value+ '</p>');
    ventana.document.write('<p>Has cambiado ' + montoOrigen.value+ ' '+monedaOrigen.value+'. </p>');
    ventana.document.write('<p>Has recibido ' + montoDestino.value+ ' '+ monedaDestino.value+ '</p>');
    ventana.document.write('<p>En fecha y hora: ' + fechaHora.value+ '</p>');
    ventana.document.write('<p>Envio del comprobante al email de destino: ' + email.value+ '</p>');
     // Enfoca la ventana si está disponible
    if (ventana) {
        ventana.focus();
    } else {
        alert('El navegador ha bloqueado la apertura de la ventana emergente. Por favor, habilite las ventanas emergentes para este sitio.');
    } 
    setTimeout(()=>ventana.close(),5000);
});

//! AJAX POST

function registrarTransaccion(nombre, email) {   
    // se crea un objeto XMLHTTPRequest
    const xhr = new XMLHttpRequest();
     // Se abre la solicitud post a la siguiente url
    xhr.open("POST", "http://localhost/mnejorarCotizaciones/src/php/index.php", true);
     // cabecera donde se indica envio del formulario
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // funcion que nos devuelve el estado de la petición
    xhr.onreadystatechange = function () {
        //chequea que se realice la peticion y envia un mensaje
        (xhr.readyState === 4 && xhr.status === 200) ?  console.log("enviado"):console.log("no se ha podido enviar la peticion");        
    };
    // Envio de la data
    xhr.send(`nombre=${nombre}&email=${email}`);
}


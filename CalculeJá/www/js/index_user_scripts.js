/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnUm */
    $(document).on("click", "#btnUm", function(evt)
    {
        appendDisplay(1);
         return false;
    });
    
        /* button  #btnDois */
    $(document).on("click", "#btnDois", function(evt)
    {
        appendDisplay(2);
         return false;
    });
    
        /* button  #btnTres */
    $(document).on("click", "#btnTres", function(evt)
    {
        appendDisplay(3);
         return false;
    });
    
        /* button  #btnSete */
    $(document).on("click", "#btnSete", function(evt)
    {
        appendDisplay(7);
         return false;
    });
    
        /* button  #btnOito */
    $(document).on("click", "#btnOito", function(evt)
    {
        appendDisplay(8);
         return false;
    });
    
        /* button  #btnNove */
    $(document).on("click", "#btnNove", function(evt)
    {
        appendDisplay(9); 
         return false;
    });
    
        /* button  #btnCinco */
    $(document).on("click", "#btnCinco", function(evt)
    {
        appendDisplay(5);
         return false;
    });
    
        /* button  #btnSeis */
    $(document).on("click", "#btnSeis", function(evt)
    {
        appendDisplay(6);
         return false;
    });
    
        /* button  #btnZero */
    $(document).on("click", "#btnZero", function(evt)
    {
        appendDisplay(0);
         return false;
    });
    
        /* button  #btnQuatro */
    $(document).on("click", "#btnQuatro", function(evt)
    {
        appendDisplay(4);
         return false;
    });
    
        /* button  #btnVirgula */
    $(document).on("click", "#btnVirgula", function(evt)
    {
        appendDisplay(".");
        
         return false;
    });
    
        /* button  #btnCe */
    $(document).on("click", "#btnCe", function(evt)
    {
         limparDisplay();
         return false;
    });
    
        /* button  #btnC */
    $(document).on("click", "#btnC", function(evt)
    {
        limparDisplay();
        limparHistorico();
         return false;
    });
    
        /* button  #btnSinal */
    $(document).on("click", "#btnSinal", function(evt)
    {
         var numero=getDisplayText();
         setDisplayText(Number(numero)*-1);
         return false;
    });
    
        /* button  #btnApagar */
    $(document).on("click", "#btnApagar", function(evt)
    {
         var numero=getDisplayText();
         if(numero.length>0){
            
             var numeroNovo = numero.substring(0, numero.length-1);
             
             if(numeroNovo==='-'){
                 setDisplayText("");
             }else{
                  setDisplayText(numeroNovo);
             }
            
             
             return false;
         }
    });
    
        /* button  #btnSoma */
    $(document).on("click", "#btnSoma", function(evt)
    {
         calc('+');
         return false;
    });
    
        /* button  #btnIgual */
    $(document).on("click", "#btnIgual", function(evt)
    {
         fazerCalculo();
         return false;
    });
    
        /* button  #btnMult */
    $(document).on("click", "#btnMult", function(evt)
    {
         calc('*');
         return false;
    });
    
        /* button  #btnDiv */
    $(document).on("click", "#btnDiv", function(evt)
    {
         calc('/');
         return false;
    });
    
        /* button  #btnSub */
    $(document).on("click", "#btnSub", function(evt)
    {
         calc('-');
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
/**
* Obtem o numero que a pessoa digitou
*/
function getDisplayText(){
    return $("#txtDisplay").val();
}
/**
* Setar um numero no display
*/
function setDisplayText(value){
    $("#txtDisplay").val(value);
}
/**
* Adiciona ukm novo algarismo ao display
*/
function appendDisplay(digito){
    var numeroAtual=getDisplayText();
    
    if(opMultiplo !== false){
        numeroHistorio=numeroAtual;
       
        numeroAtual="";
        ultimaOperacao=opMultiplo;
        opMultiplo=false;
    }
    setDisplayText(numeroAtual+""+digito);
}


var numeroHistorio=null;
var ultimaOperacao=null;
var opMultiplo=false;

function calc(opr){
    var numero=getDisplayText();
   
    if(ultimaOperacao === null){
        numeroHistorio=numero;
        setDisplayText("");
        ultimaOperacao=opr;
        opMultiplo=false;
    }else{
        numeroHistorio =Number(numeroHistorio);
        numero =Number(numero);
        var resultado=numeroHistorio + numero;
        setDisplayText(resultado);
        opMultiplo=ultimaOperacao;
        numeroHistorio=null;
        ultimaOperacao=null;
        
    }
    
    
}



function fazerCalculo(){
    var numeroDiplay=getDisplayText();
    var resultado;
    numeroHistorio = Number(numeroHistorio);
    numeroDiplay = Number(numeroDiplay);
    
    if(ultimaOperacao==='-'){
        resultado=numeroHistorio - numeroDiplay;
    }else if(ultimaOperacao==='+'){
         resultado=numeroHistorio + numeroDiplay;
    }else if(ultimaOperacao==='*'){
         resultado=numeroHistorio * numeroDiplay;
    }else if(ultimaOperacao==='/'){
         resultado=numeroHistorio / numeroDiplay;
    }
    setDisplayText(resultado);
    limparHistorico();
}

function limparHistorico(){
    numeroHistorio=null;
    ultimaOperacao=null;    
    opMultiplo=false;
}

/**
* Limpa o display colocando uma string vazia
*/
function limparDisplay(){
    setDisplayText("");
    opMultiplo=false;
}
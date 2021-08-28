  window.onload = function () {
 var divprop = document.getElementById("BlocoDetalhes");
 var bloconegro = document.getElementById("BlocoNegro"); 
 var pegarbotao = document.getElementById("LinkDetalhes");
 var varfechar = document.getElementById("fechar");

 var VarBotao3 = document.getElementById("Link3");
 var VarBlocoInfo = document.getElementById("DivInfo");
 var varfechar2 = document.getElementById("fechar2");

 //alert(pegarbotao);
  pegarbotao.onclick = function () {
  bloconegro.setAttribute("style", "display: block");
  divprop.setAttribute("style", "display: block"); 	
  //divprop.setAttribute("style", "opacity: 1");
    }
 varfechar.onclick = function () {
 divprop.setAttribute("style", "opacity: none");
 bloconegro.setAttribute("style", "display: none");
 } 

 VarBotao3.onclick = function () {
  bloconegro.setAttribute("style", "display: block");
  VarBlocoInfo.setAttribute("style", "display: block"); 	
  //divprop.setAttribute("style", "opacity: 1");
    }
 varfechar2.onclick = function () {
 VarBlocoInfo.setAttribute("style", "opacity: none");
 bloconegro.setAttribute("style", "display: none");
 } 

   
}
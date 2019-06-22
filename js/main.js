//move o indicador de onde está a sessão do menu. essa funcao é chamada quando o menu é clicado ou assim q o mouse ou teclado mexe em cada sessão
function mover(sessao){
var indicador = document.getElementById('menu-indicador');
if(sessao==1){
	indicador.style.top = 32.2+'%';}
	if(sessao==2){
	indicador.style.top = 43+'%';}
	if(sessao==3){
	indicador.style.top = 53.5+'%';}
	if(sessao==4){
	indicador.style.top = 64.3+'%';}


}
//tentativa de mudar a posicao das arvores a partir da posicao do mouse
function animarArvores(id){
	var arvores=document.getElementById(id);
	console.log(arvores);
var mouseX=getCursorX() ;
 	document.getElementById(id).style.left=-mouseX*document.getElementById(id).style.left;

 
}
function getCursorX(e) {
	return ((window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft))
 ; 
}
$(window).scroll(function (event) {
var percWindow=($(window).scrollTop())/($(window).height());
if(percWindow<=0.5){
	mover(1);
}else{
if(percWindow<=1.5){
	mover(2);
}else{
if(percWindow<=2.5){
	mover(3);
}else{
	mover(4);
}	
}
}
});


var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele = $(".img-montanha");
var currPosition = ele.position().left;
var trackLength = $(window).width()*0.985;
$(window).scroll(function (event) {
    current = $(window).scrollTop();
    var newPosition = trackLength * (current/total)
    ele.css({left: currPosition-newPosition+'px'});
}); 
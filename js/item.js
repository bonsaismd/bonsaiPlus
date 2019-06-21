$(document).ready(function(){
	$('.info-conteudo:nth-child(2)').show();
	$(".item-menu li:first").addClass("ativo");       
	$(".option").click(function(){
		$(".option").removeClass("ativo");
		$(this).addClass("ativo");
		var indice = $(this).index();
		console.log(indice);
		indice++;
		console.log(indice);
		$('.info-conteudo').hide();
		$('.info-conteudo:nth-child('+(indice+1)+')').show();

	});

	$(".option").hover(
		function(){$(this).addClass("ativa")},
		function(){$(this).removeClass("ativa")}
		);              
});
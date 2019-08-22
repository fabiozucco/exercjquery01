function limpa_formulário_cep() {
 // Limpa valores do formulário de cep.
 $("#rua").val("");
 $("#bairro").val("");
 $("#cidade").val("");
 $("#uf").val("");
 $("#ibge").val("");
}


$("#cep").keyup(function (event) {
	event.preventDefault();
  	var cep = $("#cep").val();
	var cep = $(this).val().replace(/\D/g, '');
	if (cep != "") { 
		var validacep = /^[0-9]{8}$/;
	if(validacep.test(cep)) { 
		 $("#endereco").val("...");
         $("#complemento").val("...");
         $("#bairro").val("...");
         $("#cidade").val("...");

  	$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
    
	if (!("erro" in dados)) {
    console.info(dados);
    console.info(dados.logradouro);
    $("#endereco").val(dados.logradouro);
    $("#complemento").val(dados.complemento);
    $("#bairro").val(dados.bairro);
    $("#cidade").val(dados.localidade);
     } //end if.
    else {
        //CEP pesquisado não foi encontrado.
         limpa_formulário_cep();
         alert("CEP não encontrado.");
           }
          });
         } //end if.
          else {
          //cep sem valor, limpa formulário.
          limpa_formulário_cep();
          }
     }
 });
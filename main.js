$(document).ready(function () {
  $("#cep").mask("00000-000");

  $("#btn-buscar-cep").click(async function () {
    const cep = $("#cep").val();
    const cepLimpo = cep.replace(/\D/g, "");
    const botao = $(this);

    $(botao).find("i").addClass("d-none");
    $(botao).find("span").removeClass("d-none");

    if (cepLimpo.length !== 8) {
      alert("CEP inválido. Digite um CEP no formato 00000-000.");
      resetBotao(botao);
      return;
    }

    const endpoint = `https://viacep.com.br/ws/${cepLimpo}/json/`;

    try {
      const resposta = await fetch(endpoint);
      const json = await resposta.json();

      if (json.erro) {
        throw new Error("CEP não encontrado.");
      }

      const endereco = `${json.logradouro}, ${json.bairro} - ${json.localidade} - ${json.uf}`;
      $("#endereco").val(endereco);
    } catch (erro) {
      alert("Ocorreu um erro ao buscar o endereço: " + erro.message);
    } finally {
      setTimeout(() => resetBotao(botao), 1000);
    }
  });

  $("#formulario-pedido").submit(function (evento) {
    evento.preventDefault();

    if ($("#nome").val().trim().length === 0) {
      alert("Digite o nome.");
      return;
    }

    if ($("#sobrenome").val().trim().length === 0) {
      alert("Digite o sobrenome.");
      return;
    }

    if ($("#email").val().trim().length === 0) {
      alert("Digite o e-mail.");
      return;
    }

    if ($("#endereco").val().trim().length === 0) {
      alert("Busque e preencha o endereço antes de enviar o pedido.");
      return;
    }

    alert("Pedido enviado com sucesso!");
  });

  function resetBotao(botao) {
    $(botao).find("i").removeClass("d-none");
    $(botao).find("span").addClass("d-none");
  }
});

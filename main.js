$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const enderecoNovaLista = $("#endereco-novo").val();
    const novaLista = $(`<li>${enderecoNovaLista}</li>`);

    $(novaLista).appendTo("#linha");
    $(novaLista).fadeIn("1000");
    $("#endereco-novo").val("");

    novaLista.click(function () {
      $(this).toggleClass("riscado");
    });
  });
});

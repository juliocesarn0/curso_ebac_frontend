const form = document.getElementById("form-validacao");

function validado(n1, n2) {
  return parseFloat(n1) < parseFloat(n2);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const campoA = document.getElementById("campoA").value;
  const campoB = document.getElementById("campoB").value;

  // Validação adicional para caixas vazias
  if (campoA === "" || isNaN(campoA)) {
    alert("O campo A deve ser preenchido com um número.");
    return;
  }

  if (campoB === "" || isNaN(campoB)) {
    alert("O campo B deve ser preenchido com um número.");
    return;
  }

  const validadoResultado = validado(campoA, campoB);
  const validadoSucesso = "Validado";
  const validadoError = "Erro na validação";

  if (validadoResultado) {
    const containerValidadoSucesso = document.querySelector(".valid-sucess");
    containerValidadoSucesso.innerHTML = validadoSucesso;
    containerValidadoSucesso.style.display = "block";

    console.log("O formulário foi validado com sucesso.");

    document.querySelector(".error").style.display = "none";
  } else {
    const containerValidadoError = document.querySelector(".error");
    containerValidadoError.innerHTML = validadoError;
    document.querySelector(".error").style.display = "block";
    // alert("O número B deve ser maior que o número A.");
    document.querySelector(".valid-sucess").style.display = "none";
  }
});

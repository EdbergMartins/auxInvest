selic = -100;
var x = fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos", { method: "GET" })
  .then((response) => response.json())
  .then(data => {
    // var objeto = JSON.parse(data)
    selic = data[0].valor
    return selic
  })

const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  var tagAcao = document.getElementById("tagAcao");
  var tagPrec = document.getElementById("tagPrec");
  var tagLpa = document.getElementById("tagLpa");
  var tagVpa = document.getElementById("tagVpa");
  var tagDy = document.getElementById("tagDy");

  var valuetagPrec = tagPrec.value;
  var valuetagLpa = tagLpa.value;
  var valuetagVpa = tagVpa.value;
  var valuetagAcao = tagAcao.value;
  // var valuetagDy = tagDy.value;

  console.log(valuetagLpa)
  console.log(valuetagVpa)
  var vi = Math.sqrt(22.5 * valuetagLpa * valuetagVpa);
  console.log(vi)

  const margem = vi - valuetagPrec;


  var div1 = document.getElementById("analise-valor-intricico")
  var div2 = document.getElementById("analise-valor-intricico2")
  var div3 = document.getElementById("analise-valor-intricico3")
  var div4 = document.getElementById("analise-valor-intricico4")
  parseFloat
  div1.innerHTML = "<h1>" + `O valor intricico da ação ${valuetagAcao} é de R$ ${vi.toFixed(2)}` + "<h1>";
  if (vi > valuetagPrec) {
    div2.innerHTML = "<h1>" + `A margem de segurança entre o preço da ação e o valor intricico da mesma é de R$ ${margem.toFixed(2)}` + "<h1>";
    div3.innerHTML = "<h1>" + `O ativo se encontra em uma região propicia para compra, sugerimos que se aprofunde nos estudos sobre a governança da empresa para confirmar se a mesma tem pespectiva de crecimento a longo prazo` + "<h1>";
    // if (selic < valuetagDy) {
    //   div3.innerHTML = "<h1>" + "Alem disso a ação esta pagando um Dividend Yeld maior do que a taxa selic. Este seria mais um ponto forte para a aquisição da mesma." + "</h1>";
    // } else {
    //   div3.innerHTML = "<h1>" + "A ação esta pagando um Dividend Yeld menor que a taxa selic. Seria prudente estudar a estrategia da empresa para saber se a mesma está reinvestindo o capital que não esta sendo destribuido" + "</h1>"
    // }

  } else if (vi < valuetagPrec) {
    div2.innerHTML = "<h1>" + `A ação está super precificada em R$ ${Math.abs(margem.toFixed(2))}` + "<h1>";
    div3.innerHTML = "<h1>" + `Como exite uma super precificação do ativo, seria mais logico analisar um outro ativo a fim de conseguir uma melhor oportunidade` + "<h1>";
    // if (selic < valuetagDy) {
    //   div3.innerHTML = "<h1>" + "No ponto de vista dos dividendos a ação está pagando a cima da taxa selic. Seria prudente estudar a governança desta empresa pra saber o porque desta super precificação e a partir desta analise tomar uma posição em relação a mesma." + "</h1>";
    // } else {
    //   div3.innerHTML = "<h1>" + "Além do mais a ação esta pagando um Dividend Yeld menor que a taxa selic, portanto um investimento mais sabio seria aportar no tesouro selic que é um investimento de renda fixa que rende mais que a ação em estudo." + "</h1>";
    //   div4.innerHTML = ""
    // }
  }

  console.log('====================================');
  console.log(selic);
  console.log('====================================');


});


function checkInputs(inputs) {
  var filled = true;

  inputs.forEach(function (input) {

    if (input.value === "" || input.value < 0) {
      filled = false;
    }
    if (input.value < 0) {
      filled = false;
      alert("Não são permitidos numeros negativos");
    }

  });

  return filled;

}
var inputs = document.querySelectorAll("input");
var button = document.getElementById("send");

inputs.forEach(function (input) {

  input.addEventListener("keyup", function () {
    if (checkInputs(inputs)) {
      button.disabled = false;
      button.style.cursor = "pointer"
      button.style.boxShadow = "1px 1px 20px white";
    } else {
      button.disabled = true;
      button.style.cursor = "auto"
      button.style.boxShadow = "none";
    }
  });
});


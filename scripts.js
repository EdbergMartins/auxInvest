const fetchCdi = async () => {
  const url = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos"
  try {
    const response = await fetch(url)
    const json = await response.json()
    json.map((item) =>
      valor = item.valor)
    return valor
  } catch (error) {
  }
}
(async () => { await fetchCdi() })()


var x = fetchCdi();



// async function getData(url) {
//   const response = await fetch(url);

//   return response.json();
// }

// const data = getData("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos");

// console.log({ data })

// var x = fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos", { method: "GET" })
//   .then((response) => response.json())
//   .then(data => {
//     return data
//   })


const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {

  e.preventDefault();
  var tagAcao = document.getElementById("tagAcao");
  var tagPrec = document.getElementById("tagPrec");
  var tagLpa = document.getElementById("tagLpa");
  var tagVpa = document.getElementById("tagVpa");

  var valuetagPrec = tagPrec.value;
  var valuetagLpa = tagLpa.value;
  var valuetagVpa = tagVpa.value;
  var valuetagAcao = tagAcao.value;

  console.log(valuetagLpa)
  console.log(valuetagVpa)
  var vi = Math.sqrt(22.5 * valuetagLpa * valuetagVpa);
  console.log(vi)

  const margem = vi - valuetagPrec;


  var div1 = document.getElementById("analise-valor-intricico")
  var div2 = document.getElementById("analise-valor-intricico2")
  var div3 = document.getElementById("analise-valor-intricico3")
  parseFloat
  div1.innerHTML = "<h1>" + `O valor intricico da ação ${valuetagAcao} é de R$ ${vi.toFixed(2)}` + "<h1>"
  if (vi > valuetagPrec) {
    div2.innerHTML = "<h1>" + `A margem de segurança entre o preço da ação e o valor intricico da mesma é de R$ ${margem.toFixed(2)}` + "<h1>"
    div3.innerHTML = "<h1>" + `O ativo se encontra em uma região propicia para compra, sugerimos que se aprofunde nos estudos sobre a governança da empresa para confirmar se a mesma tem pespectiva de crecimento a longo prazo` + "<h1>";
  } else if (vi < valuetagPrec) {
    div2.innerHTML = "<h1>" + `A ação está super precificada em R$ ${Math.abs(margem.toFixed(2))}` + "<h1>";
    div3.innerHTML = "<h1>" + `Como exite uma super precificação do ativo, seria mais logico analisar um outro ativo a fim de conseguir uma melhor oportunidade` + "<h1>";
  }



});


function checkInputs(inputs) {
  var filled = true;
  
  inputs.forEach(function(input) {
      
    if(input.value === "") {
        filled = false;
    }
  
  });
  
  return filled;
  
}
var inputs = document.querySelectorAll("input");
var button = document.getElementById("send");
inputs.forEach(function(input) {
    
  input.addEventListener("keyup", function() {
    if(checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});
const apiKey = "da1fb2dd580888b067c0995ebf9ffcfe";

function dadosnaTela(dados) {
    document.getElementById("cidade").innerHTML = "Tempo em" + ' ' + dados.name;
    document.querySelector(".temp").innerHTML = "Temperatura de" + ' ' + dados.main.temp.toFixed(0) + ' °';
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade do Ar de:" + " " + dados.main.humidity + "%";
    document.querySelector(".temp-max").innerHTML = "Max" + " " + dados.main.temp_max.toFixed(0)+ ' °';
    document.querySelector(".temp-min").innerHTML = "Min" + " :" + dados.main.temp_min.toFixed(0)+ ' °';
    document.querySelector(".feels_like").innerHTML = "Sensação de" + ' ' + dados.main.feels_like.toFixed(0) + ' °';
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

   
}


async function buscarCidade(cidade) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_BR&units=metric`);
    const dados = await response.json();
    console.log(dados);
    dadosnaTela(dados);
    buscarHoraAtual(dados.name);
}

function cliqueiNobotao() {
    const cidade = document.querySelector("#cidadeInput").value;
    buscarCidade(cidade);
}


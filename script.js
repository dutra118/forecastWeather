const key = "2959813f5e5acf3ccac133ccb5ba0073"
const pesquisar = document.getElementById('pesquisar')
const input = document.getElementById('cidade')
const tempe = document.getElementById('tempe')
const clima = document.getElementById('clima')
const umidade = document.getElementById('umidade')
const textoCidade = document.getElementById('textoCidade')
const imagemClima = document.getElementById('imagemClima')
const sensacao = document.getElementById('sensacao')
const atual = document.getElementById('atual')
const dias = document.getElementById('dias')
const content = document.getElementById('content')
const tempe2 = document.getElementById('tempe2')
const tempe3 = document.getElementById('tempe3')
const tempe4 = document.getElementById('tempe4')
const tempe5 = document.getElementById('tempe5')
const clima2 = document.getElementById('clima2')
const clima3 = document.getElementById('clima3')
const clima4 = document.getElementById('clima4')
const clima5 = document.getElementById('clima5')
const umidade2 = document.getElementById('umidade2')
const umidade3 = document.getElementById('umidade3')
const umidade4 = document.getElementById('umidade4')
const umidade5 = document.getElementById('umidade5')
const sensacao2 = document.getElementById('sensacao2')
const sensacao3 = document.getElementById('sensacao3')
const sensacao4 = document.getElementById('sensacao4')
const sensacao5 = document.getElementById('sensacao5')

pesquisar.addEventListener('click', function () {
    input.focus();
    const cidade = input.value
    pesquisarTemperatura(cidade)
})

input.addEventListener('keydown', function (ev) {
    if (ev.key == 'Enter') {
        input.focus();
        const cidade = input.value
        pesquisarTemperatura(cidade)
    }
})

async function pesquisarTemperatura(cidade) {
    if (atual.checked) {
        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(data => data.json())
        exibirDadosAtual(dados)

    } else if (dias.checked) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(converte => converte.json()).then(data => {
            const previsao = data.list.filter(item => item.dt_txt.includes("12:00:00")).map(item => item.main.temp)//filtrando pra pegar apenas a temperatura do dia as 12h  
            const previsaoClima = data.list.filter(item => item.dt_txt.includes("12:00:00")).map(item => item.weather[0].description)
            const previsaoUmidade = data.list.filter(item => item.dt_txt.includes("12:00:00")).map(item => item.main.humidity)
            const previsaoSensacao = data.list.filter(item => item.dt_txt.includes("12:00:00")).map(item => item.main.feels_like)
            textoCidade.innerText = data.city.name

            const dia1 = previsao[0]
            const dia2 = previsao[1]
            const dia3 = previsao[2]
            const dia4 = previsao[3]
            const dia5 = previsao[4]

            const climaDia1 = previsaoClima[0]
            const climaDia2 = previsaoClima[1]
            const climaDia3 = previsaoClima[2]
            const climaDia4 = previsaoClima[3]
            const climaDia5 = previsaoClima[4]

            const umidadeDia1 = previsaoUmidade[0]
            const umidadeDia2 = previsaoUmidade[1]
            const umidadeDia3 = previsaoUmidade[2]
            const umidadeDia4 = previsaoUmidade[3]
            const umidadeDia5 = previsaoUmidade[4]

            const sensacaoDia1 = previsaoSensacao[0]
            const sensacaoDia2 = previsaoSensacao[1]
            const sensacaoDia3 = previsaoSensacao[2]
            const sensacaoDia4 = previsaoSensacao[3]
            const sensacaoDia5 = previsaoSensacao[4]

            tempe.innerText = `Temperatura: ${Math.round(dia1)}°C`
            tempe2.innerText = `${Math.round(dia2)}°C`
            tempe3.innerText = `${Math.round(dia3)}°C`
            tempe4.innerText = `${Math.round(dia4)}°C`
            tempe5.innerText = `${Math.round(dia5)}°C`

            clima.innerText = `Clima: ${(climaDia1)}`
            clima2.innerText = `${(climaDia2)}`
            clima3.innerText = `${(climaDia3)}`
            clima4.innerText = `${(climaDia4)}`
            clima5.innerText = `${(climaDia5)}`

            umidade.innerText = `Umidade: ${Math.round(umidadeDia1)}%`
            umidade2.innerText = `${Math.round(umidadeDia2)}%`
            umidade3.innerText = `${Math.round(umidadeDia3)}%`
            umidade4.innerText = `${Math.round(umidadeDia4)}%`
            umidade5.innerText = `${Math.round(umidadeDia5)}%`

            sensacao.innerText = `Sensação térmica: ${Math.round(sensacaoDia1)}%`
            sensacao2.innerText = `${Math.round(sensacaoDia2)}%`
            sensacao3.innerText = `${Math.round(sensacaoDia3)}%`
            sensacao4.innerText = `${Math.round(sensacaoDia4)}%`
            sensacao5.innerText = `${Math.round(sensacaoDia5)}%`
        })

        tempe.classList.add("atualizando")
        tempe2.classList.add("atualizando")
        tempe3.classList.add("atualizando")
        tempe4.classList.add("atualizando")
        tempe5.classList.add("atualizando")

        clima.classList.add("atualizando")
        clima2.classList.add("atualizando")
        clima3.classList.add("atualizando")
        clima4.classList.add("atualizando")
        clima5.classList.add("atualizando")

        umidade.classList.add("atualizando")
        umidade2.classList.add("atualizando")
        umidade3.classList.add("atualizando")
        umidade4.classList.add("atualizando")
        umidade5.classList.add("atualizando")

        sensacao.classList.add("atualizando")
        sensacao2.classList.add("atualizando")
        sensacao3.classList.add("atualizando")
        sensacao4.classList.add("atualizando")
        sensacao5.classList.add("atualizando")

        imagemClima.style.display = 'none'

        content.style.width = '35%'
        content.style.height = '450px'

        /*const dadosMes = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(converte => converte.json())
        console.log(dadosMes)*/
    } else {
        alert('favor escolher uma opção de data')
    }
}

function exibirDadosAtual(dados) {
    textoCidade.innerText = dados.name
    tempe.innerText = `Temperatura: ${Math.floor(dados.main.temp)}°C`
    clima.innerText = `Clima: ${dados.weather[0].description}`
    umidade.innerText = `Umidade: ${dados.main.humidity}%`
    imagemClima.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    imagemClima.style.display = 'block'
    sensacao.innerText = `Sensação térmica: ${Math.round(dados.main.feels_like)}°`

    tempe.classList.remove("atualizando")
    tempe2.classList.remove("atualizando")
    tempe3.classList.remove("atualizando")
    tempe4.classList.remove("atualizando")
    tempe5.classList.remove("atualizando")

    clima.classList.remove("atualizando")
    clima2.classList.remove("atualizando")
    clima3.classList.remove("atualizando")
    clima4.classList.remove("atualizando")
    clima5.classList.remove("atualizando")

    umidade.classList.remove("atualizando")
    umidade2.classList.remove("atualizando")
    umidade3.classList.remove("atualizando")
    umidade4.classList.remove("atualizando")
    umidade5.classList.remove("atualizando")

    sensacao.classList.remove("atualizando")
    sensacao2.classList.remove("atualizando")
    sensacao3.classList.remove("atualizando")
    sensacao4.classList.remove("atualizando")
    sensacao5.classList.remove("atualizando")

    content.style.width = '28%'
    content.style.height = '400px'
}
// Função para obter um número aleatório entre 1 e 3
function getRandomMinutes() {
    return Math.floor(Math.random() * 3) + 1;
}

// Função para gerar um número aleatório entre 1 e 5
function getRandomMultiplier() {
    return Math.floor(Math.random() * 5) + 1;
}

// Função principal do botão "Identificar Sinal"
function identificarSinal() {
    const agora = new Date();
    const minutosAdicionais = getRandomMinutes();
    agora.setMinutes(agora.getMinutes() + minutosAdicionais);
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');

    // Valores para "Normal" e "Turbo"
    const normal = getRandomMultiplier();
    const turbo = 7 - normal;

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = `Entre em: ${horas}:${minutos}<br>${normal}x Normal<br>${turbo}x Turbo`;

    // Desativa o botão por 30 segundos após o primeiro clique
    document.getElementById("identificarBtn").disabled = true;
    setTimeout(() => {
        document.getElementById("identificarBtn").disabled = false;
    }, 30000); // 30000 milissegundos = 30 segundos
}

// Função para redirecionar para a plataforma
function abrirPlataforma() {
    window.location.href = "https://blaze.com/pt/";
}
// Função para redirecionar para a plataforma em uma nova guia
function abrirPlataforma() {
    window.open("https://blaze.com/pt/", "_blank");
}

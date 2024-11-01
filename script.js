// Função para obter um número aleatório entre 1 e 3
function getRandomMinutes() {
    return Math.floor(Math.random() * 3) + 1;
}

// Função para gerar um número aleatório entre 1 e 6
function getRandomMultiplier() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função principal do botão "Identificar Sinal"
function identificarSinal() {
    const agora = new Date();
    const minutosAdicionais = getRandomMinutes();
    agora.setMinutes(agora.getMinutes() + minutosAdicionais);
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');

    // Valores para "Normal" e "Turbo"
    let normal = getRandomMultiplier();
    let turbo = 7 - normal;

    // Garante que a soma seja 7 ou 8
    if (turbo < 1) {
        turbo = 1;
        normal = 8 - turbo; // Ajusta o valor de normal
    } else if (normal + turbo < 7) {
        turbo = 8 - normal; // Ajusta o valor de turbo
    }

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
    window.open("https://blaze.com/pt/", "_blank");
}

// Função para logar um usuário
function login() {
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            // Login bem-sucedido
            alert("Login realizado com sucesso!");
            fecharModal(); // Fechar o modal após o login
            // Aqui você pode redirecionar o usuário ou carregar a próxima tela
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Erro: ${errorMessage}`);
        });
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Função para abrir o modal
function abrirModal() {
    document.getElementById("loginModal").style.display = "block";
}

// Exibir o modal ao carregar a página
window.onload = abrirModal;

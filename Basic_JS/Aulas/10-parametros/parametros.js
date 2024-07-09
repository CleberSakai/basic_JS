// O parâmetro é a entrada da função

// Ele é como uma variável que fica disponível dentro da função.
// mas que é informada na hora de chamar a função.

function dobro(x) {
    console.log("O Dobro de " + x + " é: " + (x * 2))
}

dobro(10) // 20

// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será undefined.
// NaN = Not a Number

dobro() // undifined 

            // valor padrão para Parametros

// Mas podemos declarar um valor padrão para um parâmetro
// Assim, se ele não for informado, o valor padrão será usado no lugar de undefined.

function dizerOla(nome = "mundo") {
    console.log("Olá " + nome)
}

dizerOla("Cleberson") // Olá Cleberson

dizerOla() // Olá mundo, ja que não foi passado parametro, valor usado foi o padrão "mundo"


                    // é possivel ter varios parametros

// Uma função pode ter quanto parametros, quisermos, basta separá-los por virgula

function soma(a, b) {
    console.log("A soma dos numeros é: " + (a + b))
}

soma(1, 1)
soma(24, 5)

                    // A ordem dos parametros é importante

// Ao usar varios parametros, é recomendado deixar aqueles com valor padrão por ultimo

function novoUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, // equivalente a nome: nome
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

novoUsuario("Cleberson" , "Cleber@gmail.com", "1234")

            // Funções com muitos parametros

// Ao criarmos uma função com muitos parâmetros
// Uma boa pratica é substitui-los por um objetto

function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ....
}

function parametrosDoJeitoCerto (usuario) {
    // .....
}

// Alem de facilitar na chamada de função, a ordem dos parametros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "semha")

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
}

parametrosDoJeitoCerto(dadosDoUsuario)
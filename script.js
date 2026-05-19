// LISTA DE CHAMADOS SIMULADOS

const chamados = [
    {
        id: 1,
        titulo: "Problema na impressora",
        status: "Aberto"
    },

    {
        id: 2,
        titulo: "Internet lenta",
        status: "Em andamento"
    },

    {
        id: 3,
        titulo: "Troca de senha",
        status: "Concluído"
    }
];


// EXIBIR CHAMADOS

const listaChamados = document.getElementById("listaChamados");

function mostrarChamados(lista){

    listaChamados.innerHTML = "";

    lista.forEach(chamado => {

        listaChamados.innerHTML += `
            <tr>
                <td>${chamado.id}</td>
                <td>${chamado.titulo}</td>
                <td>${chamado.status}</td>
            </tr>
        `;
    });
}

mostrarChamados(chamados);


// FORMULÁRIO

const formChamado = document.getElementById("formChamado");

formChamado.addEventListener("submit", function(event){

    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const status = document.getElementById("status").value;

    if(titulo === "" || descricao === "" || status === ""){

        alert("Preencha todos os campos!");

    }else{

        const novoChamado = {
            id: chamados.length + 1,
            titulo: titulo,
            status: status
        };

        chamados.push(novoChamado);

        mostrarChamados(chamados);

        document.getElementById("mensagem").innerText =
        "Chamado cadastrado com sucesso!";

        formChamado.reset();
    }
});


// BUSCA DINÂMICA

const buscar = document.getElementById("buscar");

buscar.addEventListener("keyup", () => {

    const texto = buscar.value.toLowerCase();

    const filtrados = chamados.filter(chamado =>
        chamado.titulo.toLowerCase().includes(texto)
    );

    mostrarChamados(filtrados);
});

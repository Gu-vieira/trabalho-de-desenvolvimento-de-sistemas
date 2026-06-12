/* ELEMENTOS */

const ticketForm = document.getElementById("ticketForm");
const ticketList = document.getElementById("ticketList");
const messageBox = document.getElementById("messageBox");

/* DADOS */

let tickets = [];
let ticketId = 1;

/* FEEDBACK */

function showMessage(message, type) {

    messageBox.textContent = message;

    messageBox.className = `message ${type}`;
}

/* VALIDAÇÃO */

function validateFields(title, description, status) {

    if (
        title.trim() === "" ||
        description.trim() === "" ||
        status.trim() === ""
    ) {

        showMessage(
            "Preencha todos os campos obrigatórios.",
            "error"
        );

        return false;
    }

    return true;
}

/* RENDERIZAÇÃO */

function renderTickets() {

    ticketList.innerHTML = "";

    tickets.forEach(ticket => {

        ticketList.innerHTML += `
            <tr>
                <td>${ticket.id}</td>
                <td>${ticket.title}</td>
                <td>${ticket.status}</td>
            </tr>
        `;
    });
}

/* EVENTO */

ticketForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title =
        document.getElementById("ticketTitle").value;

    const description =
        document.getElementById("ticketDescription").value;

    const status =
        document.getElementById("ticketStatus").value;

    if (!validateFields(title, description, status)) {
        return;
    }

    const newTicket = {
        id: ticketId++,
        title,
        description,
        status
    };

    tickets.push(newTicket);

    renderTickets();

    ticketForm.reset();

    showMessage(
        "Chamado cadastrado com sucesso.",
        "success"
    );
});

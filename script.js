/* ELEMENTOS */

const ticketForm = document.getElementById("ticketForm");

const ticketList = document.getElementById("ticketList");

/* DADOS */

let tickets = [];

let ticketId = 1;

/* VALIDAÇÃO */

function validateFields(title, description, status) {

    return (

        title.trim() !== "" &&

        description.trim() !== "" &&

        status.trim() !== ""
    );
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

/* EVENTO DO FORMULÁRIO */

ticketForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("ticketTitle").value;

    const description = document.getElementById("ticketDescription").value;

    const status = document.getElementById("ticketStatus").value;

    if (!validateFields(title, description, status)) {

        alert("Preencha todos os campos.");

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
});


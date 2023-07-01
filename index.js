const form = document.getElementById("form");
const input = document.querySelector(".email-input");

const expressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

function validarFormulario(e) {

    switch (e.target.name) {
        case "email":
            if (expressions.email.test(e.target.value)) {
                document.querySelector(".email-input").classList.remove("red-border");
                document.getElementById("msg").classList.remove("msg-error-visible");
            } else if (e.target.value.length === 0) {
                document.querySelector(".email-input").classList.remove("red-border");
                document.getElementById("msg").classList.remove("msg-error-visible");
            } else {
                document.querySelector(".email-input").classList.add("red-border");
                document.getElementById("msg").classList.add("msg-error-visible");
            }

            break;
    }
}

// input.addEventListener("keyup", validarFormulario);
input.addEventListener("blur", validarFormulario);

form.addEventListener("submit", (e) => {
    e.preventDefault();
});
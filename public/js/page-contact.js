
// Verificando el mensaje error con todos los errores del check

const check_Error_Message = () => {
    const errors_Message = document.getElementById('error-message');
    if( !errors_Message.classList.contains('exist') ) {
        errors_Message.classList.add('exist');
    }
};

module.exports = {
    check_Error_Message
};






































// const contact_Form = document.getElementById('contact-form');
// const path_post = 'http://localhost:8080/contact';


// contact_Form.addEventListener( 'submit', (event) => {
//     event.preventDefault();

//     let form_name = document.getElementById('nombre').value;
//     let form_email = document.getElementById('email').value;
//     let form_telephone = document.getElementById('telephone').value;
//     let form_password = document.getElementById('password').value;
//     let form_asunto = document.getElementById('asunto').value;
//     let form_message = document.getElementById('mensaje').value;

//     let transaction = {
//         form_name,
//         form_email,
//         form_telephone,
//         form_password,
//         form_asunto,
//         form_message
//     };
    
// } );
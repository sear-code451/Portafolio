
let data_correct = 'Submitted successfully.';
let icon_message_incorrect = 'fa-solid fa-triangle-exclamation size';
let icon_message_correct = 'fa-sharp fa-light fa-circle-check size';
let result_message_incorrect = 'Incorrect' ;
let result_message_correct = 'Correct';

let datas_hbs = {
    title: 'Portafolio',
    nombre: 'Pablo Rueda',
    data_error: data_correct,
    message_error: 'not-exist',
    icon_message_error: icon_message_correct,
    result_message: result_message_incorrect
};

let listCorrect = {
    title: 'Portafolio',
    nombre: 'Pablo Rueda',
    data_error: data_correct,
    message_error: 'exist accepted',
    icon_message_error: icon_message_correct,
    result_message: result_message_correct
};

let bugList = {
    title: 'Portafolio',
    nombre: 'Pablo Rueda',
    data_error: data_correct,
    message_error: 'exist',
    icon_message_error: icon_message_incorrect,
    result_message: result_message_incorrect
};

const findingErrorMessages = ( listError ) => {
    return listError.find( current => {
        if( current.msg ) {
            return current.msg;
        }
    } ).msg;
};

module.exports = {
    data_correct,
    icon_message_correct,
    icon_message_incorrect,
    datas_hbs,
    listCorrect,
    bugList,
    findingErrorMessages
};
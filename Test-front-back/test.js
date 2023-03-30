
const forElement = document.getElementById('saveTransaction');

forElement.addEventListener( 'submit', (event) => {
    event.preventDefault();

    let transactionDescription = document.getElementById('transactionDescription').value;
    let transactionPrice = document.getElementById('transactionPrice').value;

    let transaction = {
        transactionDescription: transactionDescription,
        transactionPrice: transactionPrice
    };

    let transactionJson = JSON.stringify(transaction);
    console.log(transactionJson);

    // Mandar los datos al back-end y guardarlos ahí
    
    
} )



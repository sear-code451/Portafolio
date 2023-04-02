
const forElement = document.getElementById('saveTransaction');
const path_post = 'http://localhost:3000/transactions';


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

    fetch( path_post, {
        method: 'Post',
        body: transactionJson
    } ); 
    
} )

fetch( path_post ).then( x => x.json() ).then( console.log() );




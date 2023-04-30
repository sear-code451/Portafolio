
// Button Function
const copyContent = () => {
    let token = document.getElementById('button-token');
    let content_text = document.getElementById('texto');
    const tag_icon = document.createElement('i');

    // If there is not content_text returns an empty
    if( !content_text.textContent ) return

    navigator.clipboard.writeText( content_text.textContent );
    if( token.children.length === 0  ){
        token.appendChild(tag_icon);
        token.children[0].setAttribute("class", "fa-solid fa-check custom-icon");
    }

    // console.log(token.children[0]);
    // console.log( content_text.innerHTML );
};


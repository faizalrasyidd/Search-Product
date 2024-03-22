const search = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase()
    const storeitems = document.getElementById('product-list')
    const product = document.querySelectorAll(".product")
    const pname = storeitems.getElementsByTagName('h2')

    for (var i =0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display='';
            }else {
                product[i].style.display='none';
            }
        }
        console.log('running')
    }
}

const body = document.body
const container = document.getElementById('container')
const circle = document.getElementById('circle').addEventListener('click', () => {
    if(body.style.background == 'grey') {
        body.style.background = '#eee'
    } else {
        body.style.background = 'grey'
    }
})
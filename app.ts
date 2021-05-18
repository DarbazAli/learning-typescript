const message: string = 'Hello, World' 

const element  = document.createElement('h2')

element.textContent = message

document.body.appendChild(element)


// creating an interface
interface Product {
    id: number,
    name: string,
    price: number
}

function getProduct(id): Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const product = getProduct(1)

const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} costs $${price}`)
}

showProduct(product.name, product.price)
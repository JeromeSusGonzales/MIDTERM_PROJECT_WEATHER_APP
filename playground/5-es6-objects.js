const name = 'Jerome'
const userAge = 22

const user = {
    name,
    age: userAge,
    location:'Sorsogon'
}

console.log(user)

//object destructuring

const product = {
    label: 'Red Book',
    price: 5,
    stock: 500,
    salePrice: undefined,
    rating:4.5
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock})=>{
 console.log(type, label, stock)
}

transaction('order', product)
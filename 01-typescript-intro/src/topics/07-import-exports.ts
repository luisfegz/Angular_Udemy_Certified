// Funcionalidad encapsulada
import { Product, taxCalculation } from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 200,
    },
    {
        description: 'Samsung',
        price: 300,
    }
]


// Tax = 0.15
const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15,
})

console.log('Total: ', total);
console.log('Tax: ', tax); 

// Basicamente en Angular, necesitamos tener limpio el archivo
// que deseamos importar debido a que dicho archivo no debe 
// ejecutar ningun codigo. 
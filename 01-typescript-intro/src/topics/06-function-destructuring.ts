
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Iphone 12',
    price: 1000.0
}

const tablet: Product = {
    description: 'Tableta china xd',
    price: 1245.0
}

function taxCalculation() : number[] {
    
}

const shoppingCart = [ phone, tablet ];

export {};
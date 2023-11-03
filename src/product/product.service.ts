import { Injectable } from '@nestjs/common';
import { Product } from './product.schema';

@Injectable()
export class ProductService {
    private readonly products = [{
        id: '1',
        productName: 'Pasta',
        spec: '50 gram',
        description: 'For make spaghetti',
        productPrice: 100,
    },
    {
        id: '2',
        productName: 'Tomato suace',
        spec: '500 gram',
        description: 'Make from fresh tomato',
        productPrice: 150,
    }
];

    findAllProducts(): Product[] {
        return this.products;
    }
}
    
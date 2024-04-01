import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductService {
  create(createProductInput: CreateProductInput) {
    return {
      id: 1, 
      ...createProductInput,
    };
  }

  findAll() {
    return [
      { id: 1, name: "product1", price: 45 },
      { id: 2, name: "product2", price: 50 },
      { id: 3, name: "product3", price: 86 },
    ];
  }

  findOne(id: number) {
    return { id, name: "Product", price: 100 };
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return {
      id,
      ...updateProductInput,
    };
  }

  remove(id: number) {
    return { id, name: "Deleted Product", price: 0 };
  }
}

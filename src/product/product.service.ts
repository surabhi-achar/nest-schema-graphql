import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductService {
  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  findAll(){
    return [
      {name:"product1",price:45},
      { name: "product2", price: 50 },
      { name: "product3", price: 55 },
    ];
  }
    

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

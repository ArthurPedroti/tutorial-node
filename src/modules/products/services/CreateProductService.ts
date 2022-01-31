import { inject, injectable } from "tsyringe";
import Product from "../infra/typeorm/entities/Product";
import IProductsRepository from "../repositories/IProductsRepository";

type IRequest = {
  name: string;
  description: string;
}

@injectable()
export class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      description
    });

    return product;
  }
}
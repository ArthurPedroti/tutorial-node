import ICreateProductDTO from "../../dtos/ICreateProductDTO";
import Product from "../../infra/typeorm/entities/Product";
import IProductsRepository from "../IProductsRepository";

class InMemoryProductsRepository implements IProductsRepository {
  private products: Product[] = [];

  public async create({name, description}: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, {
      name, 
      description,
    });

    this.products.push(product);

    return product;
  }
}

export { InMemoryProductsRepository };
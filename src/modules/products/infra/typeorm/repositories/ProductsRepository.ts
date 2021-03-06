import { getRepository, Repository } from "typeorm";
import ICreateProductDTO from "../../../dtos/ICreateProductDTO";
import IProductsRepository from "../../../repositories/IProductsRepository";
import Product from "../entities/Product";

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({ name, description }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      description
    });

    await this.ormRepository.save(product);

    return product;
  }
}

export default ProductsRepository;
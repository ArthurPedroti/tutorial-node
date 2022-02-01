import { InMemoryProductsRepository } from "../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductService } from "./CreateProductService";

let inMemoryProductRepository: InMemoryProductsRepository;
let createProduct: CreateProductService;

describe('CreateProduct', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductsRepository();
    createProduct = new CreateProductService(inMemoryProductRepository);
  })

  it('should be able to create a new product', async () => {
    const product = await createProduct.execute({
      name: 'Test name',
      description: 'Test description',
    });

    expect(product).toHaveProperty('name', 'Test name');
    expect(product).toHaveProperty('description', 'Test description');
  })
})
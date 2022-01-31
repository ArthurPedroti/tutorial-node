import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductService } from "../../../services/CreateProductService";

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      description
    });

    return response.json(product);
  }
}
import { type SchemaTypeDefinition } from 'sanity';
import banner from '../schemas/banner';
import product from '../schemas/product';
import category from '../schemas/category';

export const schema: { types: SchemaTypeDefinition[] } = {
  //banner, products, category
  types: [banner, product, category],
};

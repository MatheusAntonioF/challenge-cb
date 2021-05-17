import { IIntallment } from './IIntallment';

export interface IProduct {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number;
  price: number;
  installments: IIntallment[];
}

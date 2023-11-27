import {Entity, model, property} from '@loopback/repository';

@model()
export class Produit extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  idUser: number;

  @property({
    type: 'string',
    required: true,
  })
  nomProduit: string;

  @property({
    type: 'number',
    required: true,
  })
  etaProduit: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  imageUrl?: string;

  @property({
    type: 'string',
  })
  prix?: string;


  constructor(data?: Partial<Produit>) {
    super(data);
  }
}

export interface ProduitRelations {
  // describe navigational properties here
}

export type ProduitWithRelations = Produit & ProduitRelations;

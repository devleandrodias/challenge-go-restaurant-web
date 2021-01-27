export interface ICard {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

export interface ICardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

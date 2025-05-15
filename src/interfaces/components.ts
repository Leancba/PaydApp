import { ComponentType } from 'react';

export interface HeaderProps {
  title: string;
  back?: boolean;
  isCurrency?: boolean;
}

export type CurrencyItem = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<any>;
};

export interface PaymentCardProps {
  amount: number;
  currency: string;
}





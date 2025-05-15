import { ComponentType } from 'react';
import { AppDispatch } from '../redux/store';

export interface HeaderProps {
  title?: string;
  back?: boolean;
  isCurrency?: boolean;
  banner?: boolean;
}

export type CurrencyItem = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<any>;
};

export interface PaymentCardProps {
  amount: string | null;
  currency: string;
}

export interface SendModalProps  {
  visible: boolean;
  onClose: () => void;
};

interface CreateOrderResponse {
  web_url?: string;
  identifier?: string;
}

export interface CreateOrderFn {
  (amount: string, currency: string, concept: string): Promise<CreateOrderResponse>;
}

export interface CreateOrdeServiceFn {
  (
    amount: string,
    currency: string,
    concept?: string,
    dispatch?: AppDispatch
  ): Promise<void>;
}








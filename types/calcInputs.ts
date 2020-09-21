import { ChangeEvent } from 'react';

export interface ICalcInputs {
  purchaseCost: number;
  targetMarginRate: number;
  myPrice: number;
}

export interface ICalcInputsOnChange {
  onPurchaseCostChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTargetMarginRateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onMyPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

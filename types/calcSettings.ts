import { ChangeEvent } from 'react';

export interface ICalcSettings {
  naverCardFeeRate: number;
  naverShoppingFeeRate: number;
  otherFeeRate: number;
  vatRate: number;
  incomeTaxRate: number;
  liabilityProvisionsRate: number;
  directDiscount: number;
  adfee: number;
  deliveryCost: number;
}

export interface ICalcSettingsOnChange {
  onNaverCardFeeRateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNaverShoppingFeeRateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOtherFeeRateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onVatRateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onIncomeTaxRateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLiabilityProvisionsRateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDirectDiscountChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAdFeeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDeliveryCostChabge: (e: ChangeEvent<HTMLInputElement>) => void;
}

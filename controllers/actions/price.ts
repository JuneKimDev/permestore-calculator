import { AxiosResponse } from 'axios';
import {} from '../../types';

const priceConst = {
  setNaverCardFeeRate: 'PRICE_SET_NAVER_CARD_FEE_RATE',
  setNaverShoppingFeeRate: 'PRICE_SET_NAVER_SHOPPING_FEE_RATE',
  setOtherFeeRate: 'PRICE_SET_OTHER_FEE_RATE',
  setVatRate: 'PRICE_SET_VAT_RATE',
  setIncomeTaxRate: 'PRICE_SET_INCOME_TAX_RATE',
  setLiabilityProvisionsRate: 'PRICE_SET_LIABILITY_PROVISIONS_RATE',
  setDirectDiscount: 'PRICE_SET_DIRECT_DISCOUNT',
  setAdFee: 'PRICE_SET_AD_FEE',
  setDeliveryCost: 'PRICE_SET_DELIVERY_COST',
  setPurchaseCost: 'PRICE_SET_PURCHASE_COST',
  setTargetMarginRate: 'PRICE_SET_TARGET_MARGIN_RATE',
  setMyPrice: 'PRICE_SET_MY_PRICE',
  setEditSettings: 'PRICE_SET_EDIT_SETTINGS',
  resetPrice: 'PRICE_RESET_PRICE',
  resetSettings: 'PRICE_RESET_SETTINGS',
};

const priceAction = {
  setNaverCardFeeRate: (payload: number) => ({
    type: priceConst.setNaverCardFeeRate,
    payload,
  }),
  setNaverShoppingFeeRate: (payload: number) => ({
    type: priceConst.setNaverShoppingFeeRate,
    payload,
  }),
  setOtherFeeRate: (payload: number) => ({
    type: priceConst.setOtherFeeRate,
    payload,
  }),
  setVatRate: (payload: number) => ({
    type: priceConst.setVatRate,
    payload,
  }),
  setIncomeTaxRate: (payload: number) => ({
    type: priceConst.setIncomeTaxRate,
    payload,
  }),
  setLiabilityProvisionsRate: (payload: number) => ({
    type: priceConst.setLiabilityProvisionsRate,
    payload,
  }),
  setDirectDiscount: (payload: number) => ({
    type: priceConst.setDirectDiscount,
    payload,
  }),
  setAdFee: (payload: number) => ({
    type: priceConst.setAdFee,
    payload,
  }),
  setDeliveryCost: (payload: number) => ({
    type: priceConst.setDeliveryCost,
    payload,
  }),
  setPurchaseCost: (payload: number) => ({
    type: priceConst.setPurchaseCost,
    payload,
  }),
  setTargetMarginRate: (payload: number) => ({
    type: priceConst.setTargetMarginRate,
    payload,
  }),
  setMyPrice: (payload: number) => ({
    type: priceConst.setMyPrice,
    payload,
  }),
  setEditSettings: (payload: boolean) => ({
    type: priceConst.setEditSettings,
    payload,
  }),
  resetPrice: () => ({
    type: priceConst.resetPrice,
  }),
  resetSettings: () => ({
    type: priceConst.resetSettings,
  }),
};

export default { const: priceConst, action: priceAction };

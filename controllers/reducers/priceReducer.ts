import { Reducer } from 'redux';
import price from '../actions/price';
import { IAction, ICalcSettings, ICalcInputs } from '../../types';

type TSprice = {
  settings: ICalcSettings;
  inputs: ICalcInputs;
  isEditSettings: boolean;
};

const initialSettings: ICalcSettings = {
  naverCardFeeRate: 3.74,
  naverShoppingFeeRate: 2,
  otherFeeRate: 0,
  vatRate: 0, // profit less than 2,400만원
  incomeTaxRate: 0.858, // 14.3% * 6% = 0.858% according to Korean Income Tax Law 2019
  liabilityProvisionsRate: 1,
  directDiscount: 0,
  adfee: 0,
  deliveryCost: 2500,
};

const initialInputs: ICalcInputs = { purchaseCost: 10000, targetMarginRate: 25, myPrice: 13340 };

const initialState: TSprice = {
  settings: { ...initialSettings },
  inputs: { ...initialInputs },
  isEditSettings: false,
};

const reducer: Reducer<TSprice, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case price.const.setNaverCardFeeRate:
      return {
        ...state,
        settings: {
          ...state.settings,
          naverCardFeeRate: action.payload,
        },
      };
    case price.const.setNaverShoppingFeeRate:
      return {
        ...state,
        settings: {
          ...state.settings,
          naverShoppingFeeRate: action.payload,
        },
      };
    case price.const.setOtherFeeRate:
      return {
        ...state,
        settings: {
          ...state.settings,
          otherFeeRate: action.payload,
        },
      };
    case price.const.setVatRate:
      return {
        ...state,
        settings: {
          ...state.settings,
          vatRate: action.payload,
        },
      };
    case price.const.setIncomeTaxRate:
      return {
        ...state,
        settings: {
          ...state.settings,
          incomeTaxRate: action.payload,
        },
      };
    case price.const.setLiabilityProvisionsRate:
      return {
        ...state,
        settings: {
          ...state.settings,
          liabilityProvisionsRate: action.payload,
        },
      };
    case price.const.setDirectDiscount:
      return {
        ...state,
        settings: {
          ...state.settings,
          directDiscount: action.payload,
        },
      };
    case price.const.setAdFee:
      return {
        ...state,
        settings: {
          ...state.settings,
          adfee: action.payload,
        },
      };
    case price.const.setDeliveryCost:
      return {
        ...state,
        settings: {
          ...state.settings,
          deliveryCost: action.payload,
        },
      };
    case price.const.setPurchaseCost:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          purchaseCost: action.payload,
        },
      };
    case price.const.setTargetMarginRate:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          targetMarginRate: action.payload,
        },
      };
    case price.const.setMyPrice:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          myPrice: action.payload,
        },
      };
    case price.const.setEditSettings:
      return {
        ...state,
        isEditSettings: action.payload,
      };
    case price.const.resetPrice:
      return {
        ...state,
        inputs: { ...initialInputs },
      };
    case price.const.resetSettings:
      return {
        ...state,
        settings: { ...initialSettings },
      };
    default:
      return state;
  }
};

export default reducer;

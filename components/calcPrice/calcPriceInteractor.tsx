import { useEffect, ChangeEvent, MouseEvent } from 'react';
import Presenter from './calcPricePresenter';
import { price, useTypedSelector, useDispatch } from '../../controllers';
import { roundDownWithPrecision } from '../util';
import { ICalculation } from '../../types';

const interactor = () => {
  const dispatch = useDispatch();

  const settings = useTypedSelector((state) => state.price.settings);
  const inputs = useTypedSelector((state) => state.price.inputs);
  const isEditSettings = useTypedSelector((state) => state.price.isEditSettings);
  const priceRecommend = roundDownWithPrecision(
    inputs.purchaseCost / (1 - inputs.targetMarginRate / 100),
    1,
  );

  // calculation of stucture inside of the price
  const grossProfit = inputs.myPrice - inputs.purchaseCost;
  const profitMarginRate = roundDownWithPrecision((grossProfit / inputs.myPrice) * 100, -2);
  const naverFee = roundDownWithPrecision(
    ((inputs.myPrice + settings.deliveryCost) * settings.naverCardFeeRate) / 100 +
      (inputs.myPrice * settings.naverShoppingFeeRate) / 100,
  );
  const otherFee = roundDownWithPrecision((inputs.myPrice * settings.otherFeeRate) / 100);
  const incomeTax = roundDownWithPrecision((inputs.myPrice * settings.incomeTaxRate) / 100);
  const vat = roundDownWithPrecision(inputs.myPrice * settings.vatRate);
  const cost = inputs.purchaseCost + settings.directDiscount + settings.adfee + naverFee + otherFee;
  const operatingIncome = inputs.myPrice - cost - incomeTax - vat;
  const liabilityProvision = roundDownWithPrecision(
    (inputs.myPrice * settings.liabilityProvisionsRate) / 100,
  );
  const earning = operatingIncome - liabilityProvision;
  const earningRate = roundDownWithPrecision((earning / inputs.myPrice) * 100, -2);
  const inside: ICalculation = {
    revenue: inputs.myPrice,
    grossProfit,
    profitMarginRate,
    operatingIncome,
    earning,
    earningRate,
    liabilityProvision,
    cost,
    costOfGoods: inputs.purchaseCost,
    directDiscount: settings.directDiscount,
    adFee: settings.adfee,
    naverFee,
    otherFee,
    incomeTax,
    incomeTaxRate: settings.incomeTaxRate,
    vat,
    vatRate: settings.vatRate,
    deliveryCost: settings.deliveryCost,
    marginEarningRateDiff: profitMarginRate - earningRate,
  };

  const onNaverCardFeeRateChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setNaverCardFeeRate(parseInt(e.target.value)));
  const onNaverShoppingFeeRateChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setNaverShoppingFeeRate(parseInt(e.target.value)));
  const onOtherFeeRateChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setOtherFeeRate(parseInt(e.target.value)));
  const onVatRateChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setVatRate(parseInt(e.target.value)));
  const onIncomeTaxRateChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setIncomeTaxRate(parseInt(e.target.value)));
  const onLiabilityProvisionsRateChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setLiabilityProvisionsRate(parseInt(e.target.value)));
  const onDirectDiscountChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setDirectDiscount(parseInt(e.target.value)));
  const onAdFeeChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setAdFee(parseInt(e.target.value)));
  const onDeliveryCostChabge = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setDeliveryCost(parseInt(e.target.value)));
  const onPurchaseCostChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setPurchaseCost(parseInt(e.target.value)));
  const onTargetMarginRateChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setTargetMarginRate(parseInt(e.target.value)));
  const onMyPriceChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(price.action.setMyPrice(parseInt(e.target.value)));

  const onAcceptPriceClick = (e: MouseEvent<HTMLButtonElement>) =>
    dispatch(price.action.setMyPrice(priceRecommend));
  const onResetPriceClick = (e: MouseEvent<HTMLButtonElement>) =>
    dispatch(price.action.resetPrice());
  const onEditClick = (e: MouseEvent<HTMLButtonElement>) =>
    dispatch(price.action.setEditSettings(true));
  const onDoneClick = (e: MouseEvent<HTMLButtonElement>) =>
    dispatch(price.action.setEditSettings(false));
  const onResetSettingsClick = (e: MouseEvent<HTMLButtonElement>) =>
    dispatch(price.action.resetSettings());

  return (
    <Presenter
      {...{
        settings,
        settingsOnChange: {
          ...{
            onNaverCardFeeRateChange,
            onNaverShoppingFeeRateChange,
            onOtherFeeRateChange,
            onVatRateChange,
            onIncomeTaxRateChange,
            onLiabilityProvisionsRateChange,
            onDirectDiscountChange,
            onAdFeeChange,
            onDeliveryCostChabge,
          },
        },
        inputs,
        inputsOnChange: { ...{ onPurchaseCostChange, onTargetMarginRateChange, onMyPriceChange } },
        isEditSettings,
        priceRecommend,
        inside,
        onAcceptPriceClick,
        onResetPriceClick,
        onEditClick,
        onDoneClick,
        onResetSettingsClick,
      }}
    />
  );
};

export default interactor;

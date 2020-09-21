import { takeLatest, takeEvery, select, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { price, request } from '../actions';
import { TSRoot } from '../reducers';
import { IAction } from '../../types';
import {} from '../apiURLs';

function* setNaverCardFeeRateWorker(action: IAction) {
  const {} = action.payload;
}
function* setNaverShoppingFeeRateWorker(action: IAction) {
  const {} = action.payload;
}
function* setOtherFeeRateWorker(action: IAction) {
  const {} = action.payload;
}
function* setVatRateWorker(action: IAction) {
  const {} = action.payload;
}
function* setIncomeTaxRateWorker(action: IAction) {
  const {} = action.payload;
}
function* setLiabilityProvisionsRateWorker(action: IAction) {
  const {} = action.payload;
}
function* setDirectDiscountWorker(action: IAction) {
  const {} = action.payload;
}
function* setAdFeeWorker(action: IAction) {
  const {} = action.payload;
}
function* setDeliveryCostWorker(action: IAction) {
  const {} = action.payload;
}
function* setPurchaseCostWorker(action: IAction) {
  const {} = action.payload;
}
function* setTargetMarginRateWorker(action: IAction) {
  const {} = action.payload;
}
function* setMyPriceWorker(action: IAction) {
  const {} = action.payload;
}
function* setEditSettingsWorker(action: IAction) {
  const {} = action.payload;
}
function* resetPriceWorker(action: IAction) {
  const {} = action.payload;
}
function* resetSettingsWorker(action: IAction) {
  const {} = action.payload;
}

export default function* watcher() {
  // yield takeEvery(price.const.setNaverCardFeeRate, setNaverCardFeeRateWorker);
  // yield takeEvery(price.const.setNaverShoppingFeeRate, setNaverShoppingFeeRateWorker);
  // yield takeEvery(price.const.setOtherFeeRate, setOtherFeeRateWorker);
  // yield takeEvery(price.const.setVatRate, setVatRateWorker);
  // yield takeEvery(price.const.setIncomeTaxRate, setIncomeTaxRateWorker);
  // yield takeEvery(price.const.setLiabilityProvisionsRate, setLiabilityProvisionsRateWorker);
  // yield takeEvery(price.const.setDirectDiscount, setDirectDiscountWorker);
  // yield takeEvery(price.const.setAdFee, setAdFeeWorker);
  // yield takeEvery(price.const.setDeliveryCost, setDeliveryCostWorker);
  // yield takeEvery(price.const.setPurchaseCost, setPurchaseCostWorker);
  // yield takeEvery(price.const.setTargetMarginRate, setTargetMarginRateWorker);
  // yield takeEvery(price.const.setMyPrice, setMyPriceWorker);
  // yield takeEvery(price.const.setEditSettings, setEditSettingsWorker);
  // yield takeEvery(price.const.resetPrice, resetPriceWorker);
  // yield takeEvery(price.const.resetSettings, resetSettingsWorker);
}

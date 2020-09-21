import { useEffect, ChangeEvent, MouseEvent } from 'react';
import './calcPrice.scss';
import Input from './calcPriceViewInput';
import Settings from './calcPriceViewSettings';
import Chart from './calcPriceViewChart';
import Inside from './calcPriceViewInside';
import { formatNumberKRW } from '../util';
import {
  ICalcSettings,
  ICalcSettingsOnChange,
  ICalcInputs,
  ICalcInputsOnChange,
  ICalculation,
} from '../../types';

const presenter = (props: {
  settings: ICalcSettings;
  settingsOnChange: ICalcSettingsOnChange;
  inputs: ICalcInputs;
  inputsOnChange: ICalcInputsOnChange;
  isEditSettings: boolean;
  priceRecommend: number;
  inside: ICalculation;
  onAcceptPriceClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onResetPriceClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onEditClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onDoneClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onResetSettingsClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const {
    settings,
    settingsOnChange,
    inputs,
    inputsOnChange,
    isEditSettings,
    priceRecommend,
    inside,
    onAcceptPriceClick,
    onResetPriceClick,
    onEditClick,
    onDoneClick,
    onResetSettingsClick,
  } = props;
  const { purchaseCost, targetMarginRate, myPrice } = inputs;
  const { onPurchaseCostChange, onTargetMarginRateChange, onMyPriceChange } = inputsOnChange;

  return (
    <section className="calcPrice">
      <div className="calcPrice__container">
        <div className="calcPrice__wrapper--input">
          <h1 className="calcPrice__title">Permestore Price Calculator</h1>
          <button
            className="btn calcPrice__btn--inputReset calcPrice__btn--blue"
            onClick={onResetPriceClick}
          >
            Reset
          </button>
          <Input
            id="input-purchaseCost"
            label="구입원가"
            value={purchaseCost}
            onChange={onPurchaseCostChange}
            unit="원"
          />
          <Input
            id="input-targetMarginRate"
            label="타겟 마진율"
            value={targetMarginRate}
            onChange={onTargetMarginRateChange}
            unit="%"
          />
          <Input
            id="input-myPrice"
            label="판매가"
            value={myPrice}
            onChange={onMyPriceChange}
            unit="원"
          />
          <div className="calcPrice__recommend">
            <p className="calcPrice__priceRecommend">{`추천 판매가: ${formatNumberKRW(
              priceRecommend,
            )}`}</p>
            <button
              className="btn calcPrice__btn--acceptPrice calcPrice__btn--blue"
              onClick={onAcceptPriceClick}
            >
              ACCEPT
            </button>
          </div>
        </div>
        <div className="calcPrice__wrapper--settings">
          <div className="calcPrice__settingsBtns">
            {isEditSettings ? (
              <button
                className="btn calcPrice__btn--settingsDone calcPrice__btn--red"
                onClick={onDoneClick}
              >
                Done
              </button>
            ) : (
              <button
                className="btn calcPrice__btn--settingsEdit calcPrice__btn--blue"
                onClick={onEditClick}
              >
                Edit
              </button>
            )}
            <button
              className="btn calcPrice__btn--settingsReset calcPrice__btn--blue"
              onClick={onResetSettingsClick}
            >
              Reset
            </button>
          </div>
          <Settings
            {...{
              settings,
              settingsOnChange,
              isEditSettings,
            }}
          />
        </div>
        <div className="calcPrice__wrapper--chart">
          <Chart
            costOfGoods={inside.costOfGoods}
            marginEarningDiff={inside.grossProfit - inside.earning}
            earning={inside.earning}
          />
        </div>
        <div className="calcPrice__wrapper--inside">
          <Inside {...inside} />
        </div>
      </div>
    </section>
  );
};

export default presenter;

import { ChangeEvent, MouseEvent } from 'react';
import SettingSingle from './calcPriceViewSettingsSingle';
import { ICalcSettings, ICalcSettingsOnChange } from '../../types';

const view = (props: {
  settings: ICalcSettings;
  settingsOnChange: ICalcSettingsOnChange;
  isEditSettings: boolean;
}) => {
  const { settings, settingsOnChange, isEditSettings } = props;
  const {
    naverCardFeeRate,
    naverShoppingFeeRate,
    otherFeeRate,
    vatRate,
    incomeTaxRate,
    liabilityProvisionsRate,
    directDiscount,
    adfee,
    deliveryCost,
  } = settings;
  const {
    onNaverCardFeeRateChange,
    onNaverShoppingFeeRateChange,
    onOtherFeeRateChange,
    onVatRateChange,
    onIncomeTaxRateChange,
    onLiabilityProvisionsRateChange,
    onDirectDiscountChange,
    onAdFeeChange,
    onDeliveryCostChabge,
  } = settingsOnChange;

  return (
    <div className="calcPrice__settings">
      <SettingSingle
        name="네이버 카드결제 수수료율"
        isEditting={isEditSettings}
        value={naverCardFeeRate}
        unit="%"
        onChange={onNaverCardFeeRateChange}
      />
      <SettingSingle
        name="네이버 쇼핑 연동 수수료율"
        isEditting={isEditSettings}
        value={naverShoppingFeeRate}
        unit="%"
        onChange={onNaverShoppingFeeRateChange}
      />
      <SettingSingle
        name="기타 수수료율"
        isEditting={isEditSettings}
        value={otherFeeRate}
        unit="%"
        onChange={onOtherFeeRateChange}
      />
      <SettingSingle
        name="부가세율"
        isEditting={isEditSettings}
        value={vatRate}
        unit="%"
        onChange={onVatRateChange}
      />
      <SettingSingle
        name="소득세율"
        isEditting={isEditSettings}
        value={incomeTaxRate}
        unit="%"
        onChange={onIncomeTaxRateChange}
      />
      <SettingSingle
        name="CS 충당률"
        isEditting={isEditSettings}
        value={liabilityProvisionsRate}
        unit="%"
        onChange={onLiabilityProvisionsRateChange}
      />
      <SettingSingle
        name="즉시할인"
        isEditting={isEditSettings}
        value={directDiscount}
        unit="원"
        onChange={onDirectDiscountChange}
      />
      <SettingSingle
        name="광고비"
        isEditting={isEditSettings}
        value={adfee}
        unit="원"
        onChange={onAdFeeChange}
      />
      <SettingSingle
        name="배송비"
        isEditting={isEditSettings}
        value={deliveryCost}
        unit="원"
        onChange={onDeliveryCostChabge}
      />
    </div>
  );
};

export default view;

import { ChangeEvent, MouseEvent } from 'react';
import InsideSingle from './calcPriceViewInsideSingle';
import { ICalculation } from '../../types';

const view = (props: ICalculation) => {
  const {
    revenue,
    grossProfit,
    profitMarginRate,
    operatingIncome,
    earning,
    earningRate,
    liabilityProvision,
    cost,
    costOfGoods,
    directDiscount,
    adFee,
    naverFee,
    otherFee,
    incomeTax,
    incomeTaxRate,
    vat,
    vatRate,
    deliveryCost,
    marginEarningRateDiff,
  } = props;

  return (
    <>
      <div className="calcPrice__inside--left">
        <InsideSingle name="매출액" value={revenue} unit="원" />
        <InsideSingle name="매출총이익" value={grossProfit} unit="원" />
        <InsideSingle name="영업이익" value={operatingIncome} unit="원" />
        <InsideSingle name="손해충당금" value={liabilityProvision} unit="원" />
        <InsideSingle name="순이익" value={earning} unit="원" />
      </div>
      <div className="calcPrice__inside--right">
        <InsideSingle name="비용" value={cost} unit="원" />
        <InsideSingle name="매입원가" value={costOfGoods} unit="원" />
        <InsideSingle name="즉시할인" value={directDiscount} unit="원" />
        <InsideSingle name="광고비" value={adFee} unit="원" />
        <InsideSingle name="네이버 수수료" value={naverFee} unit="원" />
        <InsideSingle name="기타 수수료" value={otherFee} unit="원" />
        <InsideSingle name="소득세" value={incomeTax} unit="원" />
        <InsideSingle name="부가세" value={vat} unit="원" />
        <InsideSingle name="배송비" value={deliveryCost} unit="원" />
      </div>
      <div className="calcPrice__inside--bottom">
        <InsideSingle name="마진율" value={profitMarginRate} unit="%" />
        <InsideSingle name="소득세율" value={incomeTaxRate} unit="%" />
        <InsideSingle name="부가세율" value={vatRate} unit="%" />
        <InsideSingle name="마진내 비이익율" value={marginEarningRateDiff} unit="%" />
        <InsideSingle name="순이익율" value={earningRate} unit="%" />
      </div>
    </>
  );
};

export default view;

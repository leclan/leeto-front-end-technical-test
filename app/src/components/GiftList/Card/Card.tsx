import { ProgressBar } from '@/components/common/ProgressBar';
import { getTimeLeft } from '@/utils/getTimeLeft';

import GiftCardIcon from '@/assets/card_giftcard.svg';
import { CardProps } from './types';

export const Card = ({
  allowedAmount,
  closingDate,
  consumedAmount,
  name,
}: CardProps) => {
  const timeLeft = getTimeLeft(closingDate);

  return (
    <div className="w-full space-y-4 rounded-xl border border-slate-300 p-6">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-100">
        <img
          className="h-4 w-4 object-contain"
          src={GiftCardIcon}
          alt="Gift card icon"
        />
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-xs text-slate-600">{`Se cloture dans ${timeLeft.value} ${timeLeft.unit}`}</p>
          <p className="font-medium">{name}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-600">
            {consumedAmount} € dépensés / {allowedAmount} €
          </p>
          <ProgressBar progress={(consumedAmount / allowedAmount) * 100} />
        </div>
      </div>
    </div>
  );
};

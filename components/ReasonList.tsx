'use client';

import { Reason } from '@/types';
import { ReasonItem } from './ReasonItem';

const ReasonList = ({ reasons }: { reasons: Reason[] }) => {
  if (!reasons || reasons.length === 0) {
    return (
      <div className="p-12 text-center flex flex-col items-center justify-center bg-white rounded-xl border-2 border-dashed border-gray-200">
        <p className="text-gray-400 font-medium">No detailed reasons found for this feedback.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {reasons.map((reason, index) => (
        <ReasonItem key={index} reason={reason} index={index} />
      ))}
    </div>
  );
};

export default ReasonList;

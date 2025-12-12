'use client';

export const SentimentBadge = ({ score }: { score: number }) => {
  let colorClass = 'bg-gray-100 text-gray-600';
  if (score >= 0.5) colorClass = 'bg-emerald-100 text-emerald-700 border-emerald-200';
  else if (score > -0.5) colorClass = 'bg-gray-100 text-gray-700 border-gray-200';
  else colorClass = 'bg-rose-100 text-rose-700 border-rose-200';

  return (
    <span className={`px-2 py-1 rounded text-xs font-bold border ${colorClass}`}>
      Sentiment: {score.toFixed(2)}
    </span>
  );
};

export  function getSentimentColor(score:number) {
  if (score < -0.6) return 'bg-red-500 text-white border-red-600';
  if (score < -0.2) return 'bg-red-300 text-red-900 border-red-400';
  if (score < 0.2)  return 'bg-gray-200 text-gray-700 border-gray-300';
  if (score < 0.6)  return 'bg-green-300 text-green-900 border-green-400';
  return 'bg-green-500 text-white border-green-600';
};

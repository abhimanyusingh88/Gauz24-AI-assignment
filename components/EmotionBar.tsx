'use client';

import { EmotionScores } from '@/types';
import { getEmotionColor } from './getEmotionColor';
// import { getEmotionColor } from '..app/getEmotionColor';


export const EmotionBar = ({ emotions }: { emotions: EmotionScores }) => {
  const emotionEntries = Object.entries(emotions)
    .filter(([key]) => key !== 'emotion_confidence')
    .sort(([, a], [, b]) => b - a);

  const topEmotions = emotionEntries.slice(0, 4);

  return (
    <div className="w-full mt-2">
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>Top Emotion: <span className="font-bold text-gray-700 capitalize">{topEmotions.at(0)?.[0] || 'N/A'}</span></span> 
        <span className="text-[10px] text-gray-400">Conf: {(emotions.emotion_confidence * 100).toFixed(0)}%</span>
      </div>

      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex shadow-inner">
        {topEmotions.map(([emotion, score], idx) => (
          <div
            key={emotion}
            style={{ width: `${score * 100}%` }}
            className={`h-full ${getEmotionColor(idx)}`}
            title={`${emotion}: ${(score * 100).toFixed(0)}%`}
          />
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-3">
        {topEmotions.map(([emotion, score], idx) => (
          <div key={emotion} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-sm ${getEmotionColor(idx)}`}></div>
            <span className="text-[10px] text-gray-600 capitalize">
              {emotion} <span className="text-gray-400">({(score * 100).toFixed(0)}%)</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

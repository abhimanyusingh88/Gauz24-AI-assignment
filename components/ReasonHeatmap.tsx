import React from 'react';
import { Reason } from '@/types';
// import { IntentIcon } from './IntentIcon';
import { getSentimentColor } from './getSentimentColor';
import { getSizeClass } from './getSizeClass';
import { IntentIcon } from './IntentIcon';

interface Props {
  reasons: Reason[];
}

const ReasonHeatmap: React.FC<Props> = ({ reasons }) => {
  const themes = Array.from(new Set(reasons.map(r => r.theme_label)));

  if (!reasons.length) return <div className="text-center p-4 text-gray-400">No data for heatmap</div>;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] grid grid-cols-[150px_1fr] gap-4">
        
        <div className="font-bold text-gray-400 text-xs uppercase tracking-wider self-end pb-2">Theme Group</div>
        <div className="font-bold text-gray-400 text-xs uppercase tracking-wider self-end pb-2 border-b border-gray-200">
          Reason Distribution
        </div>

        {themes.map((theme, tIdx) => {
          const themeReasons = reasons.filter(r => r.theme_label === theme);
          
          return (
            <React.Fragment key={theme || tIdx}>
              <div className="py-4 pr-4 border-r border-gray-200 flex items-center font-semibold text-gray-700 text-sm">
                {theme}
              </div>

              <div className="py-2 grid grid-cols-4 auto-rows-[80px] gap-2">
                {themeReasons.map((reason, idx) => {
                  const evidenceCount = reason.reason_evidence_snippets?.length || 0;
                  
                  return (
                    <div
                      key={`${reason.reason_label}-${idx}`}
                      className={`
                        ${getSizeClass(evidenceCount)} 
                        ${getSentimentColor(reason.reason_sentiment_score)}
                         shadow-sm border
                        flex flex-col justify-between
                        transition hover:scale-[1.02] cursor-default
                      `}
                      title={`Score: ${reason.reason_sentiment_score}, Evidence: ${evidenceCount}`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-bold leading-tight line-clamp-2">
                          {reason.reason_label?.replace(/_/g," ") || "Unknown Reason"}
                        </span>

                        <div className="bg-white/20 p-1 rounded backdrop-blur-sm">
                          <IntentIcon intent={reason.reason_intent} />
                        </div>
                      </div>
                      
                      <div className="mt-2 text-[10px] opacity-90 font-mono flex justify-between items-end">
                         <span>{evidenceCount} snippets</span>
                         <span className="uppercase tracking-tighter opacity-75">{reason.reason_intent}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      
      <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-500 justify-end border-t border-gray-100 pt-3">
        <span className="font-semibold text-gray-700 mr-2">Sentiment:</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-sm"></div> Negative (-1.0)
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-200 rounded-sm"></div> Neutral (0.0)
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 rounded-sm"></div> Positive (+1.0)
        </div>
        
        <span className="text-gray-300 mx-2">|</span>
        
        <span className="font-semibold text-gray-700 mr-2">Size:</span>
        <div>Small = 1 Snippet</div>
        <div>Large = 3+ Snippets</div>
      </div>
    </div>
  );
};

export default ReasonHeatmap;

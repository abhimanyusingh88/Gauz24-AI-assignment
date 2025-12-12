'use client';

import { useState } from 'react';
import { Reason } from '@/types';
import { ChevronDownIcon, ChevronUpIcon, BeakerIcon } from '@heroicons/react/24/solid';

import { SentimentBadge } from './SentimentBadge';
import { EmotionBar } from './EmotionBar';
import { EntityCard } from './EntityCard';

export const ReasonItem = ({ reason, index }: { reason: Reason; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group"
      >
        <div className="flex-1">
          <div className="flex items-center flex-wrap gap-3 mb-1.5">
            <h4 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
              {reason.reason_label?.replace(/_/g, " ") || `Reason #${index + 1}`}
            </h4>
            <span className="text-xs font-mono text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">
              {(reason.reason_label_confidence * 100).toFixed(0)}%
            </span>
            <SentimentBadge score={reason.reason_sentiment_score} />
          </div>
          <div className="text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
            <span>Intent: <strong className="text-gray-700">{reason.reason_intent}</strong></span>
            <span>Theme: <strong className="text-gray-700">{reason.theme_label}</strong></span>
          </div>
        </div>
        
        <div className="ml-4">
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5 text-blue-500" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-6 pt-2 border-t border-gray-100 bg-gray-50/50 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Extracted Text</h5>
              <div className="bg-white p-4 border-l-4 border-indigo-500 shadow-sm rounded-r-md">
                <p className="text-gray-700 italic leading-relaxed">
                 {`"`}{`${reason.extracted_reason_text}`}{`"`}
                </p>
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Emotions</h5>
              <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                <EmotionBar emotions={reason.reason_emotion_scores} />
              </div>
            </div>
          </div>

          {reason.reason_evidence_snippets && reason.reason_evidence_snippets.length > 0 && (
            <div>
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Evidence Snippets</h5>
              <div className="flex flex-wrap gap-2">
                {reason.reason_evidence_snippets.map((snip, i) => (
                  <span 
                    key={`${index}-snip-${i}`} 
                    className="text-xs font-mono text-gray-600 bg-gray-200/50 px-2 py-1 rounded border border-gray-200"
                  >
                    {snip}
                  </span>
                ))}
              </div>
            </div>
          )}

          {reason.reason_suggested_action && (
            <div className="flex items-start gap-3 bg-blue-50/80 p-4 rounded-lg border border-blue-100">
              <BeakerIcon className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <h5 className="text-xs font-bold text-blue-700 uppercase mb-0.5">Suggested Action</h5>
                <p className="text-sm text-blue-900 font-medium">{reason.reason_suggested_action}</p>
              </div>
            </div>
          )}

          {reason.entities && reason.entities.length > 0 && (
            <div>
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Entities Detected</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {reason.entities.map((entity, idx) => (
                  <EntityCard key={`${index}-entity-${idx}`} entity={entity} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { FeedbackData } from '@/types';
import ReasonList from './ReasonList';
import ReasonHeatmap from './ReasonHeatmap';

interface FeedbackViewerProps {
  data: FeedbackData;
}

const FeedbackViewer: React.FC<FeedbackViewerProps> = ({ data }) => {
  const { 
    
    clean_text, 
    one_liner_summary, 
    feedback_language, 
    clean_text_confidence, 
    reasons, 
    provenance 
  } = data;

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6  min-h-screen font-sans">
      
     
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Feedback Analysis</h2>
            <span className="text-sm text-gray-500 uppercase tracking-wide">
              {feedback_language} 
            </span>
          </div>
        {/* yha pe confidence waala section laga deta hu */}
          <div className={`px-3 py-1 rounded-full text-sm font-semibold border ${
            clean_text_confidence > 0.8 ? 'bg-green-100 text-green-700 border-green-200' :
            clean_text_confidence > 0.5 ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
            'bg-red-100 text-red-700 border-red-200'
          }`}>
            {(clean_text_confidence * 100).toFixed(0)}% Confidence
          </div>
        </div>

        {/* One-liner Summary waala part */}
        {one_liner_summary && (
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
            <h3 className="text-sm font-bold text-blue-900 uppercase mb-1">Summary</h3>
            <p className="text-blue-800 font-medium leading-relaxed">{one_liner_summary}</p>
          </div>
        )}

        {/* Clean Text waala part, thoda hila hai shi karna pdega (review) */}
        <div className="prose max-w-none">
          <h3 className="text-sm font-bold text-gray-700 uppercase mb-2">Clean Text</h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{clean_text}</p>
        </div>
      </div>

      {/*  Reason Heatmap waala part haiii yee */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-hidden">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Sentiment & Data Heatmap</h2>
        <ReasonHeatmap reasons={reasons} />
      </div>

      {/*  Reasons Section (Accordions) waala part (thoda dikkat hai isme last me shi karunga) */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-800 px-1">Detailed Reasons</h2>
        <ReasonList reasons={reasons} />
      </div>

      {/*  Provenance Section --- */}
      <div className="bg-gray-100 rounded-xl border border-gray-300 p-6 mt-8">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
          Pipeline Provenance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Human Review Needed */}
          <div className="flex items-center space-x-3">
            <div className={`w-5 h-5 rounded-full ${provenance.human_review_needed ? 'bg-red-600 animate-pulse' : 'bg-green-500 animate-pulse'}`} />
            <div>
              <p className="text-xs text-gray-500">Review Status</p>
              <p className="font-semibold text-gray-700">
                {provenance.human_review_needed ? 'Human Review Required' : 'Auto-Approved'}
              </p>
            </div>
          </div>

          {/* Trigger Reasons */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Triggers</p>
            {provenance.trigger_reasons && provenance.trigger_reasons.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {provenance.trigger_reasons.map((trigger, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">
                    {trigger}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">None</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackViewer;
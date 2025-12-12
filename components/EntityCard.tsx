'use client';

import { Entity } from '@/types';

export const EntityCard = ({ entity }: { entity: Entity }) => (
  <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg text-sm transition hover:bg-white hover:shadow-sm">
    <div className="flex justify-between items-start mb-1">
      <span className="font-semibold text-gray-800">{entity.extracted_entity_text}</span>
      <span className="text-[10px] font-mono bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-500">
        {(entity.entity_label_confidence * 100).toFixed(0)}%
      </span>
    </div>
    <div className="grid grid-cols-1 gap-0.5 text-xs text-gray-600">
      <div className="truncate" title={entity.canonical_entity_label}>
        <span className="text-gray-400 mr-1">Canonical:</span>
        {entity.canonical_entity_label.replace(/_/g," ")}
      </div>
      <div className="truncate">
        <span className="text-gray-400 mr-1">Category:</span>
        {entity.entity_category.replace(/_/g," ")}
      </div>
    </div>
  </div>
);

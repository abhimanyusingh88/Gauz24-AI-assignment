
// yha pe agar koi error aata matlab yha ke through tabhi add karna hai warna touch mat karna yess got it
export interface EmotionScores {
  anger: number;
  frustration: number;
  sadness: number;
  joy: number;
  sarcasm: number;
  emotion_confidence: number;
  // score:number;
  [key: string]: number; // yha thoda confuse hu aake review karunga gadbad huwa toh
}

export interface Entity {
  extracted_entity_text: string;
  canonical_entity_label: string;
  entity_label_confidence: number;
  entity_category: string;
  entity_category_confidence: number;
  extraction_method: string;
  
  aliases?: string[];
}

export interface Reason {
  extracted_reason_text: string;
  reason_label: string | null;
  reason_label_confidence: number;
  theme_label: string;
  theme_confidence: number;
  reason_sentiment_score: number;
  reason_sentiment_score_confidence: number;
  reason_emotion_scores: EmotionScores;
  reason_intent: string;
  reason_intent_confidence: number;
  reason_evidence_snippets: string[];
  reason_suggested_action: string | null;
  entities: Entity[];
}

export interface Provenance {
  human_review_needed: boolean;
  trigger_reasons: string[];
  model_version?: string; // Optional lagaya hu agar glitch aata hia to conditional rendering karunga
}

export interface FeedbackData {
  feedback_id: string;
  clean_text: string;
  clean_text_confidence: number;
  one_liner_summary: string | null; // thoda confuse hu, saved waale stackoverflow waale documentation me null ka review karna hoga
  one_liner_summary_confidence: number;
  feedback_language: string;
  feedback_language_confidence: number;
  reasons: Reason[];
  provenance: Provenance; // dekhta hu yha agar gadbad huwa toh check karunga
}
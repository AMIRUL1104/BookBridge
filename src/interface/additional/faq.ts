// src/types/faq.ts
export type FAQCategory =
  | "General"
  | "Buying"
  | "Selling"
  | "Requests"
  | "Account"
  | "Safety";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  icon?: React.ReactNode;
}

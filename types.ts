import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
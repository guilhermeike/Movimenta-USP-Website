
import React from 'react';

export interface Benefit {
  id: number;
  title: React.ReactNode;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  image?: string;
  icon: React.ReactNode;
}

export interface Criterion {
  id: number;
  text: string;
  isPositive: boolean;
}

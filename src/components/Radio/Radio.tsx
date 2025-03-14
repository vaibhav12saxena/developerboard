import React from 'react';

export interface RadioProps {
  /** Example prop - describe it properly */
  text?: string;
}

export const Radio: React.FC<RadioProps> = ({ text }) => {
  return <div>{text || "Radio component"}</div>;
};
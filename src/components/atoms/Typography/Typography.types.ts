export type TypographyVariant =
  | 'headingXL'
  | 'headingLg'
  | 'headingMd'
  | 'headingSm'
  | 'bodyLg'
  | 'bodyMd'
  | 'bodySm'
  | 'caption';

export interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  className?: string;
  as?: React.ElementType;
}

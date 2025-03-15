import clsx from 'clsx';
import { TypographyProps } from './Typography.types';

const variantClasses: Record<string, string> = {
  headingXL: 'text-4xl font-bold',
  headingLg: 'text-3xl font-semibold',
  headingMd: 'text-2xl font-semibold',
  headingSm: 'text-xl font-medium',
  bodyLg: 'text-base font-normal',
  bodyMd: 'text-sm font-normal',
  bodySm: 'text-xs font-normal',
  caption: 'text-xs text-gray-500 uppercase tracking-wider',
};

export const Typography = ({
  children,
  variant = 'bodyMd',
  className,
  as: Component = 'p',
}: TypographyProps) => {
  return (
    <Component className={clsx(variantClasses[variant], className)}>
      {children}
    </Component>
  );
};

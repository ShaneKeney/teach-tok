import { Text } from 'react-native';
import { tv, type VariantProps } from 'tailwind-variants';

/**
 * For reference of font weights:
 * Thin or Hairline: 100
 * Extra Light or Ultra Light: 200
 * Light: 300
 * Regular or Normal: 400
 * Medium: 500
 * Semi-Bold or Demi-Bold: 600
 * Bold: 700
 * Extra Bold or Ultra Bold: 800
 * Black or Heavy: 900
 */
export const variants = tv({
  base: 'text-[#FFFFFF] dark:text-[#FFFFFF] font-sf-pro-rounded-regular',
  variants: {
    font: {
      regular: 'font-sf-pro-rounded-regular',
      bold: 'font-sf-pro-rounded-bold',
      semiBold: 'font-sf-pro-rounded-semiBold',
      medium: 'font-sf-pro-rounded-medium',
      light: 'font-sf-pro-rounded-light',
      black: 'font-sf-pro-rounded-black',
      thin: 'font-sf-pro-rounded-thin'
    },
    size: {
      '10': 'text-10',
      '12': 'text-12',
      '13': 'text-13',
      '14': 'text-14',
      '15': 'text-15',
      '16': 'text-16',
      '17': 'text-17',
      '22': 'text-22'
    }
  }
});

type TypographyVariants = VariantProps<typeof variants>;

interface Props extends TypographyVariants {
  children: React.ReactNode;
  className?: string;
}

function Typography({ font, size, children, className }: Props) {
  return <Text className={`${variants({ font: font, size: size })} ${className}`}>{children}</Text>;
}

export default Typography;

import React from 'react';
import { SvgProps } from 'react-native-svg';
import { tv } from 'tailwind-variants';

type Props = {
  focused: boolean;
  width: number;
  height: number;
  Icon: React.FC<SvgProps>;
  className?: string;
};

export const variants = tv({
  base: 'fill-[#FFFFFF]',
  variants: {
    focused: { true: 'fill-[#FFFFFF]' }
  }
});

const TabBarIcon = ({ focused, Icon, className, width, height }: Props) => {
  return (
    <Icon
      className={`${variants({ focused: focused })} ${className}`}
      fillOpacity={focused ? 1 : 0.4}
      width={width}
      height={height}
    />
  );
};

export default TabBarIcon;

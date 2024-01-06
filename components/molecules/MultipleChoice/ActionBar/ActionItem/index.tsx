import Typography from '@/components/atoms/Typography';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

type Props = {
  Icon: React.FC<SvgProps>;
  value: number;
};

export default function ActionItem({ Icon, value }: Props) {
  return (
    <TouchableOpacity className="gap-[2px]">
      <Icon width={30} height={30} className="fill-white" />
      <Typography className="text-center" font="medium" size="12">
        {value}
      </Typography>
    </TouchableOpacity>
  );
}

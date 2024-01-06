import Typography from '@/components/atoms/Typography';
import { Option } from '@/query/getNextQuestion';
import { Image, TouchableOpacity, View } from 'react-native';
import { VariantProps, tv } from 'tailwind-variants';

const variants = tv({
  slots: {
    container:
      'min-h-[52px] flex-row items-center rounded-[8px] bg-[rgba(255,255,255,0.5)] p-[12px]',
    imageContainer: 'absolute right-0 h-full',
    image: 'h-[56px] w-[56px]'
  },
  variants: {
    result: {
      correct: {
        container: '!bg-[rgba(40,177,143,0.70)]',
        imageContainer: 'top-[-9px]',
        image: ''
      },
      incorrect: {
        container: '!bg-[rgba(220,95,95,0.7)]',
        imageContainer: 'top-[9px]',
        image: 'rotate-180'
      },
      unselected: {}
    }
  }
});

type SelectorVariants = VariantProps<typeof variants>;

interface SelectorProps extends SelectorVariants {
  option: Option;
  onOptionPress: (option: Option) => void;
}

export default function Selector({ option, onOptionPress, result }: SelectorProps) {
  const { container } = variants({ result });

  return (
    <TouchableOpacity className={container()} onPress={() => onOptionPress(option)}>
      <Typography
        className="mr-auto pr-[56px] shadow-[0_1px_2.5px_1px_rgba(0,0,0,0.45)]"
        font="medium"
        size="17"
      >
        {option.answer}
      </Typography>
      <Indicator result={result} />
    </TouchableOpacity>
  );
}

type IndicatorProps = {
  result: SelectorProps['result'];
};

function Indicator({ result }: IndicatorProps) {
  const { imageContainer, image } = variants({ result });
  if (result === 'unselected') return null;
  const source =
    result === 'correct'
      ? require(`../../../../../assets/gif/thumbs-up.gif`)
      : require(`../../../../../assets/gif/thumbs-down.gif`);
  return (
    <View className={imageContainer()}>
      <Image source={source} className={image()} resizeMode="contain" />
    </View>
  );
}

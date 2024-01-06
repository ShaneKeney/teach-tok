import Typography from '@/components/atoms/Typography';
import { View } from 'react-native';

export default function Title({ question }: { question: string }) {
  return (
    <View className="flex-1 py-10">
      <Typography
        className="self-start overflow-hidden rounded-[6px] bg-[rgba(0,0,0,0.6)] p-[6px]"
        font="medium"
        size="22"
      >
        {question}
      </Typography>
    </View>
  );
}

import Typography from '../Typography';
import { View } from 'react-native';

export default function ForYouTitle() {
  return (
    <View className="flex items-center justify-center gap-[5px]">
      <Typography font="semiBold" size={'16'} className="text-center">
        For You
      </Typography>
      <View className="h-[4px] w-[30px] bg-white"></View>
    </View>
  );
}

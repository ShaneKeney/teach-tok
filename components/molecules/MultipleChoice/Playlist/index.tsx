import SVG from '@/assets/svg';
import Typography from '@/components/atoms/Typography';
import { View } from 'react-native';

export default function Playlist({ text }: { text: string }) {
  return (
    <View className="flex-row bg-[#161616] px-4 py-[10px] ">
      <View className="mr-auto flex-row items-center gap-1">
        <SVG.Playlist className="fill-white" />
        <Typography font="semiBold" size="13">
          Playlist • Unit 5: {text}
        </Typography>
      </View>
      <SVG.ArrowRight className="fill-white" />
    </View>
  );
}

import SVG from '@/assets/svg';
import { blurhash } from '@/utils/image';
import { Image } from 'expo-image';
import { Pressable } from 'react-native';

type Props = {
  avatar?: string;
};

export default function AuthorAvatar({ avatar }: Props) {
  return (
    <Pressable
      className="flex items-center gap-[-14px]"
      onPress={() => console.log('Navigate to User Profile')}
    >
      <Image
        style={{ width: 45, aspectRatio: 1 }}
        source={avatar}
        placeholder={blurhash}
        contentFit="contain"
        transition={1000}
      />

      <Pressable
        className="aspect-square w-[22px] items-center justify-center gap-[10px] rounded-full bg-[#28B18F]"
        onPress={() => console.log('Avatar Plus Pressed')}
      >
        <SVG.Plus width={14} height={14} className="fill-white" />
      </Pressable>
    </Pressable>
  );
}

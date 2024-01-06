import SVG from '@/assets/svg';
import { View } from 'react-native';
import ActionItem from './ActionItem';
import AuthorAvatar from './AuthorAvatar';

type Props = {
  avatar?: string;
};

export default function ActionBar({ avatar }: Props) {
  return (
    <View className="flex-col items-center justify-end gap-[15px] pr-2">
      <AuthorAvatar avatar={avatar} />
      <ActionItem Icon={SVG.Like} value={87} />
      <ActionItem Icon={SVG.Comments} value={2} />
      <ActionItem Icon={SVG.Bookmark} value={203} />
      <ActionItem Icon={SVG.Share} value={17} />
    </View>
  );
}

import { Text, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { SCREEN_HEIGHT } from '@/utils/sizeMatters';
import SVG from '@/assets/svg';
import Typography from '@/components/atoms/Typography';
import Playlist from './Playlist';

export default function MultipleChoice() {
  const tabBarHeight = useBottomTabBarHeight();
  const headerHeight = useHeaderHeight();

  return (
    <View
      className="absolute w-full gap-4"
      style={{
        height: SCREEN_HEIGHT - tabBarHeight - headerHeight,
        top: headerHeight
      }}
    >
      {/* TODO: Create context for multiple choice questions
      TODO: Complete UI for MultipleChoice component */}
      <View className="flex-1 bg-red-500"></View>
      <Playlist />
    </View>
  );
}

// Adds some additional functionality to Intellisense and very helpful if you
// want to create composable components
MultipleChoice.Playlist = Playlist;

import { View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { SCREEN_HEIGHT } from '@/utils/sizeMatters';
import Playlist from './Playlist';
import ActionBar from './ActionBar';
import { MultipleChoiceQuestion } from '@/query/getNextQuestion';

type Props = {
  data: MultipleChoiceQuestion;
};

export default function MultipleChoice({ data }: Props) {
  const tabBarHeight = useBottomTabBarHeight();
  const headerHeight = useHeaderHeight();

  console.log('data', JSON.stringify(data, null, 2));

  return (
    <View
      className="absolute w-full gap-4"
      style={{
        height: SCREEN_HEIGHT - tabBarHeight - headerHeight,
        top: headerHeight
      }}
    >
      {/* TODO: Complete UI for MultipleChoice component */}
      <View className="flex-1 flex-row gap-3">
        <View className="flex-1 gap-6 bg-green-500"></View>
        {/* TODO: API doesn't seem to return the values for each action item */}
        <MultipleChoice.ActionBar avatar={data.user.avatar} />
      </View>
      <MultipleChoice.Playlist text={data.playlist} />
    </View>
  );
}

// Adds some additional functionality to Intellisense and very helpful if you
// want to create composable components
MultipleChoice.Playlist = Playlist;
MultipleChoice.ActionBar = ActionBar;

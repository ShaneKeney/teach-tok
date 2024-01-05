import { Text, SafeAreaView, View, FlatList, ViewabilityConfig, ViewToken } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useInfiniteQuery } from '@tanstack/react-query';
import getNextQuestion from '@/query/getNextQuestion';
import { Image } from 'expo-image';
import { useCallback, useEffect, useState } from 'react';
import { cssInterop } from 'nativewind';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils/sizeMatters';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Home() {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const [currentPage, setCurrentPage] = useState(0);

  // Tanstack Query has a convenient useQuery hook that works for infinite paginating.
  // This comes in handle in particular here since the GET multiple choice questions
  // endpoint doesn't support pages (getting more than one per request)
  const { data, error, fetchNextPage, status, isFetching, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['questions'],
      queryFn: getNextQuestion,
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        if (lastPage.length === 0) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
        if (firstPageParam <= 1) {
          return undefined;
        }
        return firstPageParam - 1;
      }
    });

  const currentQuestion = data?.pages[currentPage][0];

  // Responsible for making sure we have the next 5 pages of data as the index changes
  useEffect(() => {
    if (isFetching) return;
    if (currentPage + 5 <= (data?.pageParams?.length || 0)) return;
    fetchNextPage();
  }, [currentPage, data?.pageParams?.length]);

  const onViewableItemsChanged = useCallback(
    ({
      viewableItems,
      changed
    }: {
      viewableItems: Array<ViewToken>;
      changed: Array<ViewToken>;
    }) => {
      if (viewableItems.length === 0) return;
      const { index } = viewableItems[0];
      if (index === null) return;
      setCurrentPage(index);
    },
    []
  );

  console.log('data', data?.pages.length);
  return (
    <View className="flex-1">
      <FlatList
        data={data?.pages || []}
        renderItem={({ item }) => {
          return (
            <Image
              style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - tabBarHeight }}
              source={item[0].image}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            />
          );
        }}
        // Because the API is random and we are not deduping response from it.  We will combine the id and index to ensure uniqueness
        keyExtractor={(item, index) => item[0].id.toString() + index}
        snapToAlignment="start"
        snapToInterval={SCREEN_HEIGHT - tabBarHeight}
        getItemLayout={(data, index) => ({
          length: SCREEN_HEIGHT - tabBarHeight,
          offset: (SCREEN_HEIGHT - tabBarHeight) * index,
          index
        })}
        disableIntervalMomentum
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
        showsVerticalScrollIndicator={false}
      />

      {/* <SafeAreaView style={{ marginTop: headerHeight }}></SafeAreaView> */}
    </View>
  );
}

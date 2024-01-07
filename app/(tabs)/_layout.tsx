import SVG from '@/assets/svg';
import ForYouTitle from '@/components/atoms/ForYouTitle';
import TabBarIcon from '@/components/atoms/TabBarIcon';
import Typography from '@/components/atoms/Typography';
import { formatTime } from '@/utils/formatters';
import { Tabs } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default function AuthStackLayout() {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Seconds: ', seconds);
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: styles.defaultTabBar,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: {
          fontFamily: 'sf-pro-rounded-medium'
        },
        headerTransparent: true
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={SVG.Home} focused={focused} width={20} height={21} />
          ),
          headerTitle: () => <ForYouTitle />,
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Search Pressed!')}>
              <SVG.MagnifyGlass className="mr-4 fill-white" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <View className="ml-4 flex-row items-center justify-center gap-1">
              <SVG.Clock className="fill-white" opacity={0.6} />
              <Typography className="opacity-[0.6]" font="regular" size="14">
                {formatTime(seconds)}
              </Typography>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={SVG.Discover} focused={focused} width={20} height={21} />
          )
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={SVG.Clock} focused={focused} width={20} height={21} />
          )
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={SVG.Bookmark} focused={focused} width={20} height={21} />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={SVG.Profile} focused={focused} width={21} height={20} />
          )
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  defaultTabBar: {
    backgroundColor: '#000000',
    borderTopWidth: 0.33,
    borderTopColor: 'rgba(255, 255, 255, 0.45)'
  }
});

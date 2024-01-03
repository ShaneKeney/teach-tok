import SVG from '@/assets/svg';
import TabBarIcon from '@/components/atoms/TabBarIcon';
import Typography from '@/components/atoms/Typography';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function AuthStackLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: styles.defaultTabBar,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: {
          fontFamily: 'sf-pro-rounded-medium'
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={SVG.Home} focused={focused} width={20} height={21} />
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

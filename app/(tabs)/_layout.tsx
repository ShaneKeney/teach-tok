import { Tabs } from 'expo-router';

export default function AuthStackLayout() {
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen name="home" />
      <Tabs.Screen name="discover" />
      <Tabs.Screen name="activity" />
      <Tabs.Screen name="bookmarks" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

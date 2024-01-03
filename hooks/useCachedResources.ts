import { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

const useCachedResources = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded, error] = useFonts({
    'sf-pro-rounded-regular': require('../assets/fonts/SF-Pro-Rounded-Regular.otf'),
    'sf-pro-rounded-black': require('../assets/fonts/SF-Pro-Rounded-Black.otf'),
    'sf-pro-rounded-bold': require('../assets/fonts/SF-Pro-Rounded-Bold.otf'),
    'sf-pro-rounded-light': require('../assets/fonts/SF-Pro-Rounded-Light.otf'),
    'sf-pro-rounded-medium': require('../assets/fonts/SF-Pro-Rounded-Medium.otf'),
    'sf-pro-rounded-semiBold': require('../assets/fonts/SF-Pro-Rounded-Semibold.otf'),
    'sf-pro-rounded-thin': require('../assets/fonts/SF-Pro-Rounded-Thin.otf')
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    if (fontsLoaded) prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      // TODO: Remove the 'setTimeout' portion of this.  Used purely for testing.
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);
    }
  }, [appIsReady]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return { appIsReady, onLayoutRootView };
};

export default useCachedResources;

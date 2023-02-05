import BottomTabs from './Tabs';
import { NavigationContainer } from '@react-navigation/native';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigator;
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
      name: string;
      birthYear: string;
    };
  };
 

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Details'
>;

export type BottomTabNavigatorParamList = {
    Home: HomeStackNavigatorParamList;
    Feed: undefined;
    Settings: undefined;
  };
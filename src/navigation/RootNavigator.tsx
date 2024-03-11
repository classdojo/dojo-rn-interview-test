import React from "react";
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from "@react-navigation/native-stack";

type ScreenParams = {
  Classes: undefined;
};

const RootStack = createNativeStackNavigator<ScreenParams>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Classes" component={ClassListScreen} />
    </RootStack.Navigator>
  );
};

const ClassListScreen = (
  props: NativeStackScreenProps<ScreenParams, "Classes">
) => {
  return null;
};

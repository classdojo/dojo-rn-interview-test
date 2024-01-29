import React from "react";
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from "@react-navigation/native-stack";

type ScreenParams = {
  Classrooms: undefined;
};

const RootStack = createNativeStackNavigator<ScreenParams>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Classrooms" component={ClassroomsScreen} />
    </RootStack.Navigator>
  );
};

const ClassroomsScreen = (
  props: NativeStackScreenProps<ScreenParams, "Classrooms">
) => {
  return null;
};

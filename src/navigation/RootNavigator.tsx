import React from "react";
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from "@react-navigation/native-stack";

type ScreenParams = {
  StudentList: undefined;
};

const RootStack = createNativeStackNavigator<ScreenParams>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="StudentList" component={StudentListScreen} />
    </RootStack.Navigator>
  );
};

const StudentListScreen = (
  props: NativeStackScreenProps<ScreenParams, "StudentList">
) => {
  return null;
};

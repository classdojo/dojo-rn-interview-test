import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type ScreenParams = {
  StudentList: undefined;
};

const RootStack = createNativeStackNavigator<ScreenParams>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="StudentList"
        component={() => null}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
};

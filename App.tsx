import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { ReactQueryProvider } from "./src/config/ReactQueryProvider";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <ReactQueryProvider>
        <RootNavigator />
      </ReactQueryProvider>
    </NavigationContainer>
  );
}

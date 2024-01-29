import { ReactQueryProvider } from "./src/config/ReactQueryProvider";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <ReactQueryProvider>
      <RootNavigator />
    </ReactQueryProvider>
  );
}

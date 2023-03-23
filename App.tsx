import { Provider } from "react-redux";
import { SafeAreaView, NativeModules } from "react-native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "./store/store";
import TodoList from "./components/TodoList";

// Create a client
const queryClient = new QueryClient();

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store()}>
        <SafeAreaView>
          <TodoList />
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

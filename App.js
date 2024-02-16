import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "./src/redux/store";
import ToastManager, { Toast } from 'toastify-react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
      <ToastManager />
      <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
      </PersistGate>
    </Provider>
   
  );
};
export default App;

import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './routes/routes';
export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

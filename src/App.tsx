import { Theme } from './themes/theme';
import { RoutesCall } from './routes';
import { GlobalStyles } from './themes/styles';

export const App = () => {
  return (
    <Theme>
        <GlobalStyles />
        <RoutesCall />
    </Theme>
  );
}

export default App;

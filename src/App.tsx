import Header from './components/header';
import ContentContainer from './components/content-container';
import { store } from './utils/store';
import { Provider } from 'react-redux';

import './styles.css';


const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <ContentContainer />
      </div>
    </Provider>
  );
}

export default App;

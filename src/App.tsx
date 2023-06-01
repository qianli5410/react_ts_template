import type { FC } from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import { Landing } from './views/landing';

const App: FC = () => (
  <div className="App">
    <Landing />
  </div>
);

export default App;
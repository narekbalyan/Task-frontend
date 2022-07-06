import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllAccounts from './components/AllAccounts';
import Account from './components/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="accounts" element={<AllAccounts />}/>
        <Route path="accounts/:id" element={<Account />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage } from './page/HomePage.jsx';
import { ChatPage } from './page/ChatPage.jsx';

function App() {

  return (

    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/chatbot" element={<ChatPage />} />
    </Routes>
  )
}

export default App

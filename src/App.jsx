import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SendMessage from "./pages/Whatsapp";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        
        <Route path="/" element={<SendMessage/>} />

      </Routes>
    </Router>
  );
};

export default App;

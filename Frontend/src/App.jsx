import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

function App() {
    return <Router>

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

    </Router>;
}

export default App;

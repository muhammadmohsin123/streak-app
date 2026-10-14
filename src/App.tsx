import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>

        <Route path="/" element={<h1> {import.meta.env.VITE_APP_NAME} </h1>} />
        <Route path="/about" element={<h1>About Streak app</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  const unusedOnPurpose = 42;
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home Page</Link> | <Link to="/about">About</Link> | <Link to="/contact">Reach us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1> {import.meta.env.VITE_APP_NAME} </h1>} />
        <Route path="/about" element={<h1>About Streak app</h1>} />
        <Route path="/contact" element={<h1>Contact Streak app</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

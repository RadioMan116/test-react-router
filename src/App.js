
import './App.scss';
import News from "./pages/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
      <BrowserRouter>
          <main className='App'>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="news" element={<News />} />
                  </Route>
              </Routes>
          </main>
      </BrowserRouter>
  );
}

export default App;

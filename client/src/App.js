import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProtectedPage from "./components/ProtectedPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={
              <ProtectedPage>
                <Home />
              </ProtectedPage>
            }
          />
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

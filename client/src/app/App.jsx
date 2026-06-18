import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "../context/AuthContext";
import { ShopProvider } from "../context/ShopContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ShopProvider>
          <AppRoutes />
        </ShopProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

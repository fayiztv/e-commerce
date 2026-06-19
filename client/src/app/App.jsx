import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "../context/AuthContext";
import { ShopProvider } from "../context/ShopContext";
import { CartProvider } from "../context/CartContext";
import ToasterModal from "../components/common/Toaster";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ShopProvider>
          <CartProvider>
            <ToasterModal />
            <AppRoutes />
          </CartProvider>
        </ShopProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

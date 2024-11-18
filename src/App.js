import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import MenuManagement from "./Components/Admin/MenuManagement";
import OrderManagement from "./Components/Admin/OrderManagement";
import Menu from "./Components/Students/Menu";
import Cart from "./Components/Students/Cart";
import Orders from "./Components/Students/Orders";

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "8px 16px",
  fontFamily: "Montserrat",
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
  },
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [menuSession, setMenuSession] = useState([]);

  // Add item to the cart
  const handleAddToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Place order
  const handlePlaceOrder = (order) => {
    if (order.items.length > 0) {
      const newOrder = {
        id: orders.length + 1,
        items: order.items,
        student: order.student, // Include student name
        status: "Received",
      };
      setOrders([...orders, newOrder]);
      setCart([]);
      localStorage.removeItem("cart");
    }
  };

  // Update menu session
  const updateMenuSession = (menu) => {
    setMenuSession(menu);
  };

  return (
    <Router>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "black",
          padding: "12px 0",
          flexWrap: "wrap",
        }}
      >
        <Link to="/Admin/menu-management" style={navLinkStyle}>
          Menu
        </Link>
        <Link to="/Admin/order-management" style={navLinkStyle}>
          Order
        </Link>
        <Link to="/Students/menu" style={navLinkStyle}>
          Menus
        </Link>
        <Link to="/Students/cart" style={navLinkStyle}>
          Cart
        </Link>
        <Link to="/Students/orders" style={navLinkStyle}>
          Orders
        </Link>
      </nav>
      <Routes>
        <Route
          path="/Admin/menu-management"
          element={<MenuManagement updateMenuSession={updateMenuSession} />}
        />
        <Route
          path="/Admin/order-management"
          element={<OrderManagement orders={orders} />}
        />
        <Route
          path="/Students/menu"
          element={
            <Menu menu={menuSession} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/Students/cart"
          element={
            <Cart cart={cart} onPlaceOrder={handlePlaceOrder} />
          }
        />
        <Route
          path="/Students/orders"
          element={<Orders orders={orders} />}
        />
        <Route path="/" element={<Navigate to="/Students/menu" />} />
      </Routes>
    </Router>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Navigation from "./routes/Navigation";
import Auth from "./containers/Auth";
import Shop from "./routes/Shop";
import Checkout from "./containers/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

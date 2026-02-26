import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AppRoutes from "./router";

const App = () => {
  return (
    <BrowserRouter>
<div className="w-full min-h-screen">
  <Header />

  <main className="px-6 md:px-12">
    <AppRoutes />
  </main>

  <Footer />
</div>
    </BrowserRouter>
  );
};

export default App;
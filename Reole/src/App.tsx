import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./router";

const App = () => {
  return (
    <BrowserRouter>
      {/* Full-width background */}
      <div className="min-h-screen w-full overflow-x-hidden bg-gray-900 text-white">

        {/* Header (full width) */}
        <Header />

        {/* Main content with horizontal padding only */}
        <main className="px-4 md:px-12 pb-24 md:pb-40 lg:pb-64">
          <AppRoutes />
        </main>

        {/* Footer (full width) */}
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
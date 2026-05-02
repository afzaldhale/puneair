import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ACRepair from "./pages/ACRepair";
import DishwasherRepair from "./pages/DishwasherRepair";
import RefrigeratorRepair from "./pages/RefrigeratorRepair";
import WashingMachineRepair from "./pages/WashingMachineRepair";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  switch (path) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    case "/services":
      return <Services />;
    case "/services/ac-repair":
      return <ACRepair />;
    case "/services/refrigerator-repair":
      return <RefrigeratorRepair />;
    case "/services/washing-machine-repair":
      return <WashingMachineRepair />;
    case "/services/dishwasher-repair":
      return <DishwasherRepair />;
    default:
      return <Home />;
  }
}

export default App;

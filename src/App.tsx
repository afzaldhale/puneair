/**
 * App.tsx — central route map for the SPA.
 *
 * Each entry maps a URL path to a page component in `src/pages/`.
 * The thin files in `src/routes/` simply mount these via the platform router.
 */
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import AcRepair from "@/pages/AcRepair";
import RefrigeratorRepair from "@/pages/RefrigeratorRepair";
import WashingMachineRepair from "@/pages/WashingMachineRepair";

export const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/services": Services,
  "/services/ac-repair": AcRepair,
  "/services/refrigerator-repair": RefrigeratorRepair,
  "/services/washing-machine-repair": WashingMachineRepair,
} as const;

export default function App() {
  return <Home />;
}

import { BrowserRouter } from "react-router-dom";
import AppProviders from "./AppProviders.tsx";
import AppRoutes from "./AppRoutes.tsx";

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./layouts/App";
import Dashboard from "./views/Dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Dashboard />} index/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./layouts/App";
import Dashboard from "./views/Dashboard";
import CreateProject from "./views/projects/CreateProject";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Dashboard />} index />
          <Route path="/projects/create" element={<CreateProject />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

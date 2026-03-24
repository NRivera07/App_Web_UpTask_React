import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./layouts/App";
import Dashboard from "./views/Dashboard";
import CreateProject from "./views/projects/CreateProject";
import EditProject from "./views/projects/EditProject";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Dashboard />} index />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/projects/:projectId/edit" element={<EditProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

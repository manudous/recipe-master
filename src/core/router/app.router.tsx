import { Routes, Route, BrowserRouter } from "react-router-dom";
import { appRoutes } from "./router.constants";
import { HomeScene } from "@/scenes";
import { AppBar } from "@/layouts/app-bar.layout";

export const AppRouter: React.FC = () => (
  <BrowserRouter>
      <AppBar />
    <Routes>
      <Route path={appRoutes.root} element={<HomeScene />} />
      <Route path={appRoutes.recipes} />
      <Route path={appRoutes.inventory} />
      <Route path={appRoutes.favorites} />
      <Route path={appRoutes.profile} />
    </Routes>
  </BrowserRouter>
);

import React from "react";
import { Routes, Route } from "react-router";
import ROUTES from "Constants/routes";
import loadable from "@loadable/component";

// Load bundles asynchronously so that the initial render happens faster
const Login = loadable(() =>
  import(/* webpackChunkName: "WelcomeChunk" */ "Pages/login/login")
);
const About = loadable(() =>
  import(/* webpackChunkName: "AboutChunk" */ "Pages/about/about")
);
const Register = loadable(() =>
  import(/* webpackChunkName: "MotdChunk" */ "Pages/register/register")
);
const Localization = loadable(() =>
  import(
    /* webpackChunkName: "LocalizationChunk" */ "Pages/localization/localization"
  )
);
const UndoRedo = loadable(() =>
  import(/* webpackChunkName: "UndoRedoChunk" */ "Pages/undoredo/undoredo")
);
const ContextMenu = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/contextmenu/contextmenu")
);
const Inventory = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/inventory/inventory")
);

class AppRoutes extends React.Component {
  render() {    
    return (
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path={ROUTES.REGISTER} element={<Register />}></Route>
        <Route path={ROUTES.LOCALIZATION} element={<Localization />}></Route>
        <Route path={ROUTES.UNDOREDO} element={<UndoRedo />}></Route>
        <Route path={ROUTES.CONTEXTMENU} element={<ContextMenu />}></Route>
        <Route path={ROUTES.INVENTORY} element={<Inventory />}></Route>
      </Routes>
    );
  }
}

export default AppRoutes;

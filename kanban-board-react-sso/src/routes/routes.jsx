import { lazy } from "react";
// import Landing from "../pages/Landing";

//LAZY LOADING
//renders faster and compiles faster
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  TASK_LIST: "/projects/:id/tasklist",
  PROJECT: "/projects",
};

export const routes = {
  public: [
    {
      path: ROUTES.HOME,
      element: lazy(() => import("../pages/Landing")),
      restricted: true,
    },
    {
      path: ROUTES.REGISTER,
      element: lazy(() => import("../pages/auth/register")),
      restricted: true,
    },
    {
      path: ROUTES.LOGIN,
      element: lazy(() => import("../pages/auth/login")),
      restricted: true,
    },
  ],
  private: [
    {
      path: ROUTES.TASK_LIST,
      element: lazy(() => import("../pages/taskList")),
    },
    {
      path: ROUTES.PROJECT,
      element: lazy(() => import("../pages/projects/projectDashboard")),
    },
  ],
};

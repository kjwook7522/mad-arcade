import { createBrowserRouter, RouterProvider } from "react-router-dom";

import IndexPage from "@App/pages/Index";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <IndexPage />,
      errorElement: <div>this is error</div>,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

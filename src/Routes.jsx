import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Ponto, HoursConsultation, Badges } from "./pages";
import { AppLayout } from "./layouts";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<AppLayout />}>
          <Route path='/reconhecimento' element={<Badges />} />
          <Route path='/consulta' element={<HoursConsultation />} />
          <Route index element={<Ponto />} />
          <Route path='*' element={<Ponto />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routes;

import { RouterProvider } from "react-router-dom";
import AppProvider from "../Context/Context.tsx";
import routes from "./Routes/Routes.tsx";


function App() {

  return (
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>

  )
}

export default App

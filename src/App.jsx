import "./App.css";
import Body from "./components/Body";
import { Provider,  } from "react-redux";
import { appStore } from "../src/redux/appStore";
import { createBrowserRouter, RouterProvider,  } from "react-router";
import Browse from "./components/Browse";
import LoginPage from "./components/LoginPage";



function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
  ]);



  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;

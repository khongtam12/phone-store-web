import { createBrowserRouter } from "react-router-dom";
import LayoutDefault from "../layouts/LayoutDefault";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Error from "../pages/Error.jsx/Error";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "product",
                element: <Product />
            }
        ]
    },
    {
        path: "/404",
        element: <Error />
    },
    {
        path: "*",
        element: <Error />,
    }
])
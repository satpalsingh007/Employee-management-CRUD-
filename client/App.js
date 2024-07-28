import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CreateUser from "./CreateUser";
import User from "./User";
import UpdateUser from "./UpdateUser";

let App = () => {
    return <div>{/* <Structure /> */}</div>;
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <User />,
    },
    {
        path: "/create",
        element: <CreateUser />,
    },
    {
        path: "/update/:id",
        element: <UpdateUser />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<RouterProvider router={appRouter} />);

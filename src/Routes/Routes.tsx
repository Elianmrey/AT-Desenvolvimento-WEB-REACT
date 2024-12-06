import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../Views/Home/Home.tsx";
import Protected from "./Protected/Protected.tsx";
import { HandleVerificationProtected, IsAuthenticated } from "../Services/Authentication.tsx";
import Settings from "../Views/Settings/Settings.tsx";
import SignUp from "../Views/SignUp/SignUp.tsx";
import SignIn from "../Views/SignIn/SignIn.tsx";
import Dashboard from "../Views/Dashboard/Dashboard.tsx";
import Notfound from "../Views/NotFound/NotFound.tsx";
import DynamicFormView from "../Views/Formulary/Formulary.tsx";

const routes = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<Protected />}>
            <Route>
                <Route path="/" index element={<Home />} loader={() => HandleVerificationProtected()} />
                <Route path="/settings" element={<Settings />} loader={() => HandleVerificationProtected()} />
                <Route path="/dashboard/:id" element={<Dashboard />} loader={() => HandleVerificationProtected()} />
                <Route path="/new/:action" element={<DynamicFormView />} loader={() => HandleVerificationProtected()} />
                <Route path="/*" element={<Notfound />} loader={() => HandleVerificationProtected()} />
            </Route>

            <Route path="/signin" element={<SignIn />} loader={() => IsAuthenticated()} />
            <Route path="/signup" element={<SignUp />} loader={() => IsAuthenticated()} />


        </Route>
    )
);

export default routes;


import React from "react"
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";
import { Header } from "../components/header";
import { NotFound } from "../pages/404";
import { Main } from "../pages/main";

// const commonRoutes = [
//     {path:"/confirm",component:<ConfirmEmail></ConfirmEmail>},
// ];


export const LoggedInRouter = () =>{
    const user = {
        verified:true,
        email:"kurly",
        id:"kurly"
    }
    if(!user.verified)
    {
        return (
            <div className="h-screen flex justify-center items-center">
                <span className="font-medium text-xl tracking-wide">...Loading</span>
            </div>
        );
    }
    return(
        <>
            <Header></Header>
            <Routes>
                <Route path={"/"}
                    element={<Main></Main>}></Route>
                <Route path={"*"}  
                    element={<NotFound></NotFound>}>
                </Route>
            </Routes>
        </>
    );
}
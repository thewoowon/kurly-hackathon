import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const Main = () =>{
    return(
        <div className="h-screen flex flex-col items-center justify-center">
            <Helmet>
                <title>컬리체이서 | 메인</title>
            </Helmet>
            <h2 className="font-semibold text-2xl mb-3">Page Main</h2>
            <Link className="hover:underline text-lime-600" to="/">
            Go back home &rarr;
            </Link>
        </div>
    );
}
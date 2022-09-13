import React from "react";
import Card from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("login");

    const onLogin = () => {
        localStorage.setItem("login", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("login");
    };
    return (
        <Card>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </Card>
    );
};

export default withFunctions;

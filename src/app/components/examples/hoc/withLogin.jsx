import React from "react";

const withLogin = (component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return <>{isLogin ? component(...props) : "Auth"}</>;
};

export default withLogin;

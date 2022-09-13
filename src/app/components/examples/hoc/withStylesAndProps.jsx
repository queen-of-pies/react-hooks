import React from "react";
import CardWrapper from "../../common/Card";

const withStylesAndProps = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="Name" />
        </CardWrapper>
    );
};

export default withStylesAndProps;

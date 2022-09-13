import React from "react";
import Component from "./someComponent";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withStylesAndProps from "./withStylesAndProps";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithStylesAndProps = withStylesAndProps(Component);
    const NewComponent = withStylesAndProps(ComponentWithAuth);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <Divider />
                <ComponentWithStylesAndProps />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <Divider />
                <NewComponent />
            </CardWrapper>
        </>
    );
};

export default HOCExample;

import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ChildrenExercise = () => {
    const FormComponent = ({ children }) => {
        return React.Children.map(children, (child, index) => {
            const config = {
                ...child.props,
                index: index + 1
            };
            return React.cloneElement(child, config);
        });
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <FormComponent>
                <Component />
                <Component />
                <Component />
            </FormComponent>
        </CollapseWrapper>
    );
};

const Component = ({ index }) => {
    return <div>{index} Компонент списка</div>;
};

Component.propTypes = {
    index: PropTypes.number
};

export default ChildrenExercise;

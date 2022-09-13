import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleChangeWidth = () => {
        inputRef.current.style.width = "150px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input id="email" ref={inputRef} className="form-control" />
            <button className="btn btn-primary" onClick={handleFocus}>
                Focus input
            </button>
            <button className="btn btn-secondary" onClick={handleChangeWidth}>
                Change width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;

import React, { useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

const runFactorial = (n) => {
    console.log("render fact");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(10);
    const [otherState, setOtherState] = useState(false);

    const fact = useMemo(() => runFactorial(value), [value]);
    const color = otherState ? "primary" : "secondary";

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>Value {value}</p>
                <p>Fact {fact}</p>
                <button
                    className="btn btn-primary"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    -
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    +
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />
                <button
                    className={"btn btn-" + color}
                    onClick={() => setOtherState(!otherState)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;

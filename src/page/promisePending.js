import { useEffect, useState } from "react";

const Parent = () => {
    const [data, setData] = useState("this is a test for memory");
    const aPromise = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("");
            }, 10000); // 10min
        });
    };

    useEffect(() => {
        aPromise().then(() => {
            console.log("test");
            setData("this is a test for update for memory leak");
        });
    }, []);
    return <div>{data}</div>;
};

const CasePromisePending = () => {
    const [show, setShow] = useState(true);
    return (
        <div>
            A<div>测试promise pending内存泄漏</div>
            <button onClick={() => setShow(!show)}>click</button>
            {show && <Parent></Parent>}
        </div>
    );
};

export default CasePromisePending
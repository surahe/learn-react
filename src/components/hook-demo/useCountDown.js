import React, {useState} from 'react';
import useCountDown from '../../hooks/useCountDown';

const UseCountDown = () => {
    const [leftTime, setLeftTime] = useState();
    const [countdown, formattedRes] = useCountDown({
        leftTime,
        onEnd: () => {
            alert('End of the time');
        },
    });
    const { days, hours, minutes, seconds } = formattedRes;

    return  (
        <>
            <button
                onClick={() => {
                    setLeftTime(600000);
                }}
                disabled={countdown !== 0}
            >
                {countdown === 0 ? '开始' : `Reset After ${Math.round(countdown / 1000)}s`}
            </button>
            <p>{days} 天 {hours} 小时 {minutes} 分 {seconds} 秒</p>
            <button
                onClick={() => {
                    setLeftTime(undefined);
                }}
                style={{ marginLeft: 8 }}
            >
                stop
            </button>
        </>
    )
};

export default UseCountDown;
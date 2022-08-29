import React from "react";
import Mock from 'mockjs';
import { useRequest } from 'ahooks';

function getUsername() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(Mock.mock('@name'));
        }, 200);
    });
}

const UseRequestDemo =  () => {
    const action = useRequest(getUsername);

    const withLoadingDelayAction = useRequest(getUsername, {
        loadingDelay: 300,
    });

    const trigger = () => {
        action.run();
        withLoadingDelayAction.run();
    };

    return (
        <div>
            <button type="button" onClick={trigger}>
                run
            </button>

            <div style={{ margin: '24px 0', width: 300 }}>
                Username: {action.loading ? 'Loading...' : action.data}
            </div>
            <div>
                Username: {withLoadingDelayAction.loading ? 'Loading...' : withLoadingDelayAction.data}
            </div>
        </div>
    );
};

export default UseRequestDemo
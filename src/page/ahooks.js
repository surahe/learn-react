import React, { useMemo, useState } from "react";
import UseRequest from '../components/ahook/useRequest';
import PollingInterval from '../components/ahook/pollingInterval';

const HookList = [{
    name: 'useRequest',
    component: UseRequest
}, {
    name: 'pollingInterval',
    component: PollingInterval,
}]

const Ahooks =  () => {
    const [activeHook, setActiveHook] = useState('useRequest');
    const activeComponent = useMemo(() => {
        let item = HookList.find(item => item.name === activeHook);
        if (item) {
            return <item.component />
        } else {
            return null
        }
    }, [activeHook]);

    return (
        <div>
            <header>
                <ul>
                    {
                        HookList.map(item => (
                            <li
                                key={item.name}
                                className={`${item.name === activeHook ? 'active' : ''}`}
                                onClick={() => {setActiveHook(item.name)}}
                            >{item.name}</li>
                        ))
                    }
                </ul>
                <div>
                    {
                        activeComponent
                    }
                </div>
            </header>
        </div>
    )
};

export default Ahooks
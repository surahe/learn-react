import React, { useMemo, useState } from "react";
import UseLatest from '../components/hook-demo/useLatest';
import UseCountDown from '../components/hook-demo/useCountDown';

const HookList = [{
    name: 'useLatest',
    component: UseLatest
}, {
    name: 'useCountDown',
    component: UseCountDown
}]

const Hook =  () => {
    const [activeHook, setActiveHook] = useState('useLatest');
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
Hook.displayName = 'Hook'

export default Hook
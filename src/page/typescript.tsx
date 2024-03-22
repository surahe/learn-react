import * as React from 'react'

import Counter from '../components/typescript-comp/couter';

type ReactEventHandler<T = Element> = React.EventHandler<React.SyntheticEvent<T>>

type Props = {
    message: string
}

type changeFn = (e: React.FormEvent<HTMLInputElement>) => void

// 使用查找类型访问组件属性类型
// 通过查找类型减少 type 的非必要导出
// 如果需要提供复杂的 type，应当提取到作为公共 API 导出的文件中
type PropsNew = React.ComponentProps<typeof Counter> & {
    age: number
}

const Ct: React.FC<PropsNew> = props => {
    return <Counter {...props} />
}

const App: React.FC<Props> = ({ message, children }) => {
    return (
        <div>
            <A title={'ttt'}></A>
            <Ct name="tt"  age={2}  />
            {message}
            {children}
        </div>
    )
}

const A: React.FC <{title: string}> = ({title}) =>{
    type EmptyUser = {
        name: string,
        age: number
    }

    const [state, setState] = React.useState('')

    // 大部分情况下，TS 会自动为你推导 state 的类型:
    const [user, setUser] = React.useState({name: 'sura', age: 12});
    // 一些状态初始值为空时（null），需要显示地声明类型
    const [emptyUser, setEmptyUser] = React.useState<EmptyUser | null>(null);

    // 只读（read-only），并且可以传递给内置的 ref 属性，绑定 DOM 元素 ；
    const ref1 = React.useRef<number>(0);
    // 可变（类似于声明类的成员变量）
    const ref2 = React.useRef<HTMLInputElement | null>(null)

    const showUser = React.useCallback((obj: typeof user) => {
        return `My name is ${obj.name}, My age is ${obj.age}`
    }, []);

    const onChange: changeFn = e => {
        setState(e.currentTarget.value)
    }

    const onChange2: React.ChangeEventHandler<HTMLInputElement> = e => {
        setState(e.currentTarget.value)
    }

    React.useEffect(() => {
        setEmptyUser({name: 'ggg',age: 1})
        ref1.current += 1
        getResponse().then(response => {
            console.log(response.result)
        })
    }, [])

    return (
        <div className="App">
            <p>用户: {showUser(user)}</p>
            <p>{emptyUser?.name}，{emptyUser?.age}</p>
            <p>{ref1.current}</p>
            <input type="text" value={state} onChange={onChange} /><span>{state}</span>
        </div>
    )
}

export declare interface AppBetterProps {
    children: React.ReactNode // 一般情况下推荐使用，支持所有类型
    functionChildren: (name: string) => React.ReactNode // recommended function as a child render prop type
    style?: React.CSSProperties // 传递style对象
    onChange?: React.FormEventHandler<HTMLInputElement>// 表单事件, 泛型参数是event.target的类型
}

type IResponse<T> = {
    message: string
    result:T
    success: boolean
}
async function getResponse(): Promise<IResponse<number[]>> {
    return {
        message: '获取成功',
        result: [1,2,3],
        success: true,
    }
}

export default App

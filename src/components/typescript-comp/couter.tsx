import * as React from 'react'

export type Props = {
    name: string
}

type Props2<T> = {
    name: T
    name2?: T
}


const TestC: <T>(props: Props2<T>) => React.ReactElement = ({name, name2}) => {
    return (
        <div className="test-b">
            TestB--{name}
            {name2}
        </div>
    )
}

const Counter: React.FC<Props> = props => {
    return <TestC<string> name="123" />
}

export default Counter
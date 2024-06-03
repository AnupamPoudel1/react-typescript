import { ReactNode, useCallback, useEffect, useState, MouseEvent, KeyboardEvent, useMemo } from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
}

interface User {
    id: number,
    username: string
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2);
}

const myNum: number = 5;

const Counter = ({ setCount, children }: CounterProps) => {

    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<User | null>({ id: 1, username: 'Anupam' });

    useEffect(() => {
        console.log('Mounting Users');
        console.log('Users: ', users);

        return () => console.log('Unmounting Users');
    }, [users]);

    // const addOne = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCounter(prev => prev + 1), []);
    
    const addOne = useCallback((): void => setCounter(prev => prev + 1), []);

    const fibonacci = useMemo(() => fib(myNum), [myNum]);
    console.log(fibonacci);

    return (
        <>
            <div>
                <h1>
                    {children}
                </h1>
                <button onClick={() => setCount(prev => prev + 1)}>
                    Count + 1
                </button>
                <button onClick={() => setCount(prev => prev - 1)}>
                    Count - 1
                </button>
            </div>
            <div>
                <h1>{counter}</h1>
                <button onClick={addOne}>Increment by 1</button>
            </div>
        </>
    );
}

export default Counter; 
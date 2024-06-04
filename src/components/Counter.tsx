import { ReactNode, useCallback, useEffect, useState, useMemo, useRef } from "react";

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

    const inputRef = useRef<HTMLInputElement>(null);

    console.log(inputRef?.current);
    console.log(inputRef?.current?.value);

    return (
        <>
            <div className="py-2 px-4 m-2 flex justify-center items-center flex-col bg-white rounded-md">
                <h1 className="text-red-800">
                    {children}
                </h1>
                <div className="flex justify-center items-center">
                    <button onClick={() => setCount(prev => prev + 1)} className="py-2 px-4 m-2 bg-green-800 text-white">
                        Count + 1
                    </button>
                    <button onClick={() => setCount(prev => prev - 1)} className="py-2 px-4 m-2 bg-red-800 text-white">
                        Count - 1
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center bg-yellow-300 px-4 py-2 m-2 rounded-md">
                <h1 className="text-whtie py-2 px-4 bg-black">{counter}</h1>
                <button onClick={addOne} className="py-2 px-4 m-2 bg-green-800 text-white">Increment by 1</button>
            </div>
            <div className="px-4 py-2 m-2 text-black focus:border-none focus:outline-none">
                <input type="text" ref={inputRef} className="p-2"/>
            </div>
        </>
    );
}

export default Counter; 
import { ReactNode } from "react";

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul className="px-4 py-2 m-2 flex justify-center items-center flex-col bg-purple-800 rounded-md">
            {items.map((item, i) => (
                <li key={i}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}

export default List;
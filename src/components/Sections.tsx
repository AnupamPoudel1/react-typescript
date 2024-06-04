import { ReactNode } from "react";

type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({ children, title = "Section Heading" }: SectionProps) => {
    return (
        <section className="flex flex-col justify-center items-center bg-green-800 text-white py-2 px-4 m-2 rounded-md">
            <h1>
                {title}
            </h1>
            <p>
                {children}
            </p>
        </section>
    )
}

export default Section;

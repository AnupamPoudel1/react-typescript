import { ReactElement } from "react"

type headingProps = { title: string, description: string }

const Header = ({ title, description }: headingProps): ReactElement => {
    return <h1 className="py-2 px-4 m-2 flex justify-center items-center bg-red-800 text-white rounded-md">{title} - {description}</h1>
}

export default Header

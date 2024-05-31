import { ReactElement } from "react"

type headingProps = { title: string, description: string }

const Header = ({ title, description }: headingProps): ReactElement => {
    return <h1>{title} - {description}</h1>
}

export default Header

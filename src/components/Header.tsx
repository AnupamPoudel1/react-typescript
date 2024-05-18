import { ReactElement } from "react"

type headingProps = { title: string }

const Header = ({ title }: headingProps): ReactElement => {
    return <h1>{title}</h1>
}

export default Header

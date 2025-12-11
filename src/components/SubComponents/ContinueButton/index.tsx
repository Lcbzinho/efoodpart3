import { Button } from "./styles"

type Props = {
    children: React.ReactNode
    onClick: () => void
}

export const ContinueButton = ({onClick, children}: Props) => {

    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}
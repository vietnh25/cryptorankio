import HeadingStyled from "./Heading-styled";

interface IProps {
    children: string
}

const Heading = ({children}: IProps) => <HeadingStyled>
    {children}
</HeadingStyled>
;

export default Heading;
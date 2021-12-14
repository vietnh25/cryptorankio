import Container from '../../Container/Container';

import MainStyled from "./Main-styled";

interface IProps {
    children: JSX.Element
}

const Main = ({children}: IProps) => {
    return (
        <MainStyled>
            <Container>
                {children}
            </Container>
        </MainStyled>
    );
};

export default Main;
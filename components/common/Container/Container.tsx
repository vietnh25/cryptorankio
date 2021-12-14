import ContainerStyled from './Container-styled';

interface IProps {
    children: JSX.Element
}

const Container = ({children}: IProps) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    );
};

export default Container;
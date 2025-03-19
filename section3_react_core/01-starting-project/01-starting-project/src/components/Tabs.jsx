export default function Tabs({children, buttons, ButtonsContainer}) {
    // const ButtonsContainer = buttonContainer;
    return (
    <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
    </>
    );
}
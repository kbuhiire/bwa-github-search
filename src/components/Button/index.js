import {func, object, string} from "prop-types";

import {StyledBtn, StyledBtnText} from "./styled";

const Button = ({icon, text, onClick }) => {

    return (
        <StyledBtn onClick={onClick}>
            {icon} <StyledBtnText >{text}</StyledBtnText>
        </StyledBtn>
    )
}

Button.propTypes = {
    icon: object.isRequired,
    text: string.isRequired,
    onClick: func.isRequired
}

export default Button
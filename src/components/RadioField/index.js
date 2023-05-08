import React from "react";
import { StyledSection, StyledRadioLabel, StyledLabel } from './styled'
import {string, func, bool, oneOfType, oneOf} from 'prop-types'

const RadioField = ({
                       type,
                       name,
                        direction,
                        checked,
                       value,
                       label,
                       onSelect,
                       placeholder,
                       ...rest
                   }) => {
    return(
        <StyledSection direction={direction}>
            {
                type === 'radio' ?
                    <StyledRadioLabel>
                        <input
                            aria-label={label}
                            tabIndex="0"
                            type={'radio'}
                            name={name}
                            value={value}
                            onChange={onSelect}
                            checked={checked}
                            {...rest}
                        />{label}
                    </StyledRadioLabel>
                    :
                    <>
                        {label && <StyledLabel>{label}</StyledLabel>}
                        <input
                            type={type}
                            aria-label={label || ''}
                            tabIndex="0"
                            name={name}
                            placeholder={placeholder}
                            onChange={onSelect}
                            value={value}
                            {...rest}
                        />
                    </>
            }
        </StyledSection>
    )
}

RadioField.propTypes = {
    type: string.isRequired,
    name: string.isRequired,
    direction: oneOf(['row', 'column']),
    checked: bool,
    value: oneOfType([bool, string]).isRequired,
    onSelect: func.isRequired,
    placeholder: string,
    label: string,
}

RadioField.defaultProps = {
    checked: false,
    label: '',
    placeholder: '',
}

export default RadioField
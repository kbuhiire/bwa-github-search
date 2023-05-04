import React from "react";
import { StyledSection, StyledRadioLabel, StyledLabel } from './styled'
import {string, func, bool, oneOfType} from 'prop-types'

const radio = 'radio'

const RadioGroup = ({
                       type,
                       name,
                       value,
                       label,
                       onChange,
                       direction,
                       checked,
                       placeholder,
                       ...rest
                   }) => {
    return(
        <StyledSection direction={direction}>
            {
                type === radio ?
                    <StyledRadioLabel>
                        <input
                            aria-label={label}
                            tabIndex="0"
                            type={radio}
                            onChange={onChange}
                            name={name}
                            value={value}
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
                            onChange={onChange}
                            placeholder={placeholder}
                            value={value}
                            {...rest}
                        />
                    </>
            }
        </StyledSection>
    )
}

RadioGroup.propTypes = {
    type: string.isRequired,
    name: string.isRequired,
    value: oneOfType([
        string,
        bool,
    ]).isRequired,
    onChange: func.isRequired,
    direction: oneOf(['row', 'column']),
    label: string,
    checked: bool,
    placeholder: string,
}

RadioGroup.defaultProps = {
    label: '',
    placeholder: '',
    checked: false
}

export default RadioGroup
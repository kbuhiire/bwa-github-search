import styled from 'styled-components'

export const StyledInput= styled.input`
  height: 30px;
  border-radius: 15px;
  padding: 10px;
`;

export const StyledSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || 'row' };
  align-items: center;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  padding-left: 10px;
`

export const StyledRadioLabel = styled(StyledLabel)`
  white-space: nowrap;
`
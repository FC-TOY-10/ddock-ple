import styled, { css } from 'styled-components';


export const Button = ({
  text,
  secondary,
  disabled,
  onClick,
  value,
  submit,
}) => {
  return (
    <StyledButton
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      value={value}
      disabled={disabled}
      secondary={secondary}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 3rem;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ secondary }) =>
    secondary
      ? css`
          border: 1px solid #6ee7b7;
          color: #6ee7b7;
          &:hover {
            background-color: #6ee7b710;
          }
        `
      : css`
          background-color: #6ee7b7;
          color: #ffffff;
          &:hover {
            background-color: #6ee7b780;
          }
        `}

  &:disabled {
    background-color: #6ee7b750;
  }
`;
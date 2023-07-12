import styled from 'styled-components';

export const Modal = ({ children, closeModal }) => {

  //모달 외부 클릭시 닫힘
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <StyledModal onClick={handleOutsideClick}>
      <ModalContent>{children}</ModalContent>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border: 3px solid #A68BFC;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

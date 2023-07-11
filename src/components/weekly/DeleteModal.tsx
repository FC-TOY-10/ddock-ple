import { Modal } from '../common';
import styled from 'styled-components';

export const DeleteModal = ({ closeModal, onConfirm }) => {
  return (
    <Modal closeModal={closeModal}>
      <p>정말로 지우시겠습니까?</p>
      <ButtonContainer>
        <button onClick={onConfirm}>네</button>
        <button onClick={closeModal}>아니요</button>
      </ButtonContainer>
    </Modal>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  & > button {
    background-color: #A68BFC;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    transition: 0.3s background-color;

    &:hover {
      background-color: #8c71ef;
    }
  }
`;

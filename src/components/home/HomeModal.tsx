import { Modal } from "../common/Modal";
import styled from 'styled-components';

export const HomeModal = ({ setGoal, closeModal }) => {

  // 폼 제출 시 목표 금액 설정 및 모달 닫기
  const handleSubmit = (e) => {
    e.preventDefault();
    const goalAmount = Number(e.target.goal.value);
    setGoal(goalAmount);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="goal">이번 달 예산을 입력해주세요</label> <br />
        <Input type="number" name="goal" id="goal" required />
        <button type="submit">저장</button>
      </form>
    </Modal>
  );
};

const Input = styled.input`
  padding: 8px;
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

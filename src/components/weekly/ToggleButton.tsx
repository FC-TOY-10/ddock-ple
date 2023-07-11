import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, UpdateModal, DeleteModal } from "@/components/index";

let activeToggleButton = null;

export const ToggleButton = ({ expense, index, onDeleteExpense  }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openUpdateModal = () => {
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };

  // 버튼의 표시 여부를 전환하는 함수
  const toggleVisibility = () => {
    // 버튼은 화면에 1개만 출력
    if (activeToggleButton && activeToggleButton !== toggleVisibility) {
      activeToggleButton(false);
    }
    // 현재 버튼의 표시 상태를 전환
    setShowButtons((prevShowButtons) => {
      if (!prevShowButtons) {
        activeToggleButton = setShowButtons;
      }
      return !prevShowButtons;
    });
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    onDeleteExpense(index, expense._id);
    closeDeleteModal();
  };
  

  return (
    <>
      {!showButtons && (
        <AiOutlinePlus tabIndex={0} onClick={toggleVisibility} />
      )}
      {showButtons && (
        <div onClick={toggleVisibility}>
          <Button text="수정" onClick={openUpdateModal} />
          <Button text="삭제" secondary onClick={openDeleteModal}/>
        </div>
      )}
      {showUpdateModal && (
        <UpdateModal 
          closeModal={closeUpdateModal} 
          expense={expense} 
          />
      )}
       {showDeleteModal && (
        <DeleteModal
          closeModal={closeDeleteModal}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

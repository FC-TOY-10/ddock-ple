import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, UpdateModal, DeleteModal } from "@/components/index";
import { Calendar, ExpenseData } from "@/types";

type ToggleButtonProps = {
  expense: Calendar;
  index: number;
  onDeleteExpense: (index: number, id: string) => void;
  onUpdateExpense: (index: number, updatedExpense: ExpenseData) => void;
};

type ToggleButtonAction = (value: boolean) => void;

let activeToggleButton: ToggleButtonAction | null = null;

export const ToggleButton = ({ expense, index, onDeleteExpense, onUpdateExpense }:ToggleButtonProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const handleDelete = () => {
    onDeleteExpense(index, expense._id);
    setShowUpdateModal(false); 
  };

  const handleUpdate = (updatedExpense: ExpenseData) => { 
    onUpdateExpense(index, updatedExpense);
    setShowUpdateModal(false); 
  };
  
  return (
    <>
      {!showButtons && (
        <AiOutlinePlus tabIndex={0} onClick={toggleVisibility} />
      )}
      {showButtons && (
        <div onClick={toggleVisibility}>
          <Button text="수정" onClick={() => setShowUpdateModal(true)} />
          <Button text="삭제" secondary onClick={() => setShowDeleteModal(true)}/>
        </div>
      )}
      {showUpdateModal && (
        <UpdateModal 
        closeModal={() => setShowUpdateModal(false)}
        onUpdate={handleUpdate}
        expense={expense}
          />
      )}
       {showDeleteModal && (
        <DeleteModal
          closeModal={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

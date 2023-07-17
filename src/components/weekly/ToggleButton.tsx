import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, UpdateModal, DeleteModal } from "@/components/index";
import { Calendar, ExpenseData } from "@/types";

import { useStore } from "@/store";

type ToggleButtonProps = {
  expense: Calendar;
  index: number;
  weekIndex: number;
};

type ToggleButtonAction = (value: boolean) => void;

let activeToggleButton: ToggleButtonAction | null = null;

export const ToggleButton = ({ expense, index, weekIndex }:ToggleButtonProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const removeExpense = useStore((state) => state.removeExpense);
  const updateExpense = useStore((state) => state.updateExpense); 

  // 버튼의 표시 여부를 전환하는 함수
  const handleVision = () => {
    // 버튼은 화면에 1개만 출력
    if (activeToggleButton && activeToggleButton !== handleVision) {
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

  //삭제 함수
  const handleDelete = () => {
    removeExpense(weekIndex, index, expense._id);
    setShowDeleteModal(false); 
  };

  //수정 함수
  const handleUpdate = (updatedExpense: ExpenseData) => { 
    updateExpense(weekIndex, index, updatedExpense, expense._id);
    setShowUpdateModal(false); 
  };
  
  return (
    <>
      {/* 토글 버튼 */}
      {!showButtons && (
        <AiOutlinePlus tabIndex={0} onClick={handleVision} />
      )}
       {/* 수정 및 삭제 버튼*/}
      {showButtons && (
        <div onClick={handleVision}>
          <Button text="수정" onClick={() => setShowUpdateModal(true)} />
          <Button text="삭제" secondary onClick={() => setShowDeleteModal(true)}/>
        </div>
      )}
      {/* 수정 모달 창 */}
      {showUpdateModal && (
        <UpdateModal 
        closeModal={() => setShowUpdateModal(false)}
        onUpdate={handleUpdate}
        expense={expense}
          />
      )}
      {/* 삭제 확인 모달 창 */}
      {showDeleteModal && (
        <DeleteModal
          closeModal={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

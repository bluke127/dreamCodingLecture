import React, { useEffect } from "react";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { UseModalPopupContext } from "@/contexts/ModalPopupContext";
import styles from "@/styles/pages/TestIndex.module.scss";
import ModalPortal from "@/components/Modal/ModalPortal";
import Modal from "@/components/Modal/Modal";
import useModal from "@/hooks/useModal";
import { Link } from "react-router-dom";
export default function TestIndex() {
  const { popupState, popupAction } = UseModalPopupContext();
  const { id, showModal, closeModal } = useModal();
  const { id: other_id, showModal: other_showModal } = useModal();
  // return <div>TestIndex</div>;
  useEffect(() => {
    console.log(popupState);
  }, []);
  const setButton = () => {
    alert();
    popupAction((e) => {
      return {
        ...e,
        isOpen: true,
        content: "모달",
        btnList: [
          {
            word: "확인",
            func: () => {
              alert();
            },
          },
          {
            word: "취소",
            func: () => {
              popupAction((e) => {
                return { ...e, isOpen: false };
              });
            },
          },
        ],
      };
    });
  };
  const setModalButton = () => {
    showModal();
  };
  const setOherModalButton = () => {
    other_showModal();
  };
  return (
    <>
      <AuthContextProvider>
        <div id="wrap">TestIndex</div>
        <Link to="/test1">테스트1</Link>
        <div className={styles.test}>TestIndex</div>
        <button onClick={setButton}>버튼</button>
        <button onClick={setModalButton}>모달버튼</button>
        <button onClick={setOherModalButton}>모달버튼22</button>

        <ModalPortal>
          <Modal id={id}>아아아</Modal>
        </ModalPortal>
        <ModalPortal>
          <Modal id={other_id}>sfsfssdsdds</Modal>
        </ModalPortal>
      </AuthContextProvider>
    </>
  );
}

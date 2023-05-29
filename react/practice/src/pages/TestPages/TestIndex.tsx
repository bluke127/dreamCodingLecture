import React, { useEffect } from "react";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { UseModalPopupContext } from "@/contexts/ModalPopupContext";
import styles from "@/styles/pages/TestIndex.module.scss";
import { ModalPortal } from "@/components/ModalPopup/ModalPopupPortal";
export default function TestIndex() {
  const { state, action } = UseModalPopupContext();
  // return <div>TestIndex</div>;
  useEffect(() => {
    console.log(state);
  }, []);
  const setButton = () => {
    alert();
    action((e) => {
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
              action((e) => {
                return { ...e, isOpen: false };
              });
            },
          },
        ],
      };
    });
  };
  return (
    <>
      <AuthContextProvider>
        <div id="wrap">TestIndex</div>

        <div className={styles.test}>TestIndex</div>
        <button onClick={setButton}>버튼</button>
        <ModalPortal>ㄴ아아아아</ModalPortal>
        <ModalPortal>sfsfssdsdds</ModalPortal>
      </AuthContextProvider>
    </>
  );
}

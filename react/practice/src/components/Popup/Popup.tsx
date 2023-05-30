import { UseModalPopupContext } from "@/contexts/ModalPopupContext";
import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "@/styles/components/ModalPopup/Popup.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function Popup() {
  const { popupState, popupAction } = UseModalPopupContext();
  useEffect(() => {}, [popupState]);

  useEffect(() => {
    if (!popupState.isOpen)
      popupAction((e) => {
        return {
          type: "알림",
          content: "",
          btnList: [],
          isOpen: popupState.isOpen,
        };
      });
  }, [popupState.isOpen]);
  const onClose = useCallback(
    () =>
      popupAction((e) => {
        return { ...e, isOpen: false };
      }),
    []
  );

  return (
    <>
      {popupState.isOpen ? (
        <div className={styles.popup_wrap}>
          <div className={styles.popup_inner_wrap}>
            <div className={styles.type_wrap}>
              <div className={styles.type}>{popupState.type}</div>
              <p onClick={onClose}>
                <AiOutlineClose />
              </p>
            </div>
            <div className={styles.content_wrap}>{popupState.content}</div>
            <div className={styles.btn_list_wrap}>
              {popupState.btnList?.map((item, idx) => (
                <button onClick={item.func} key={idx}>
                  {item.word}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

import { UseModalPopupContext } from "@/contexts/ModalPopupContext";
import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "@/styles/components/ModalPopup/Popup.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function Popup() {
  const { state, action } = UseModalPopupContext();
  useEffect(() => {
    console.log(state, action, "?");
  }, [state]);

  useEffect(() => {
    if (!state.isOpen)
      action((e) => {
        return {
          type: "알림",
          content: "",
          btnList: [],
          isOpen: state.isOpen,
        };
      });
  }, [state.isOpen]);
  const onClose = useCallback(
    () =>
      action((e) => {
        return { ...e, isOpen: false };
      }),
    []
  );

  return (
    <>
      {state.isOpen ? (
        <div className={styles.popup_wrap}>
          <div className={styles.popup_inner_wrap}>
            <div className={styles.type_wrap}>
              <div className={styles.type}>{state.type}</div>
              <p onClick={onClose}>
                <AiOutlineClose />
              </p>
            </div>
            <div className={styles.content_wrap}>{state.content}</div>
            <div className={styles.btn_list_wrap}>
              {state.btnList?.map((item, idx) => (
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

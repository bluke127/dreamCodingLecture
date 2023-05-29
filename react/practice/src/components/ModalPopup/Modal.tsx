import { UseModalPopupContext } from "@/contexts/ModalPopupContext";
import React, { useEffect, useCallback, useMemo, useState, useId } from "react";
import ReactDOM from "react-dom";
import styles from "@/styles/components/ModalPopup/Modal.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal(props) {
  const { type, children } = props;
  const key = useId()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    // console.log(type, children, btnList, "?");
  }, [props]);
  const visible = useMemo(() => {
    console.log(type, children, btnList, "?");
  }, [props]);
  const onClose = useCallback(
    () =>
      action((e) => {
        return { ...e, isOpen: false };
      }),
    []
  );

  return (
    <>
      <div className={styles.modal_wrap} style={display:}>
        <div className={styles.modal_inner_wrap}>
          <div className={styles.type_wrap}>
            <div className={styles.type}>{type}</div>
            <p onClick={onClose}>
              <AiOutlineClose />
            </p>
          </div>
          <div className={styles.content_wrap}>{children}</div>
        </div>
      </div>
    </>
  );
}

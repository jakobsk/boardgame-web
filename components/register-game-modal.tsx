import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import RankingForm from "./register-form";
import Button from 'react-bootstrap/Button';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [modal]);

  return (
    <>
      <Button variant="dark" onClick={toggleModal} className={styles.btnModal}>
        Registrer spill
      </Button >

      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <h2>Registrer spill</h2>
            <RankingForm></RankingForm>
            <Button variant="dark" className={styles.closeModal} onClick={toggleModal}>
              Avbryt
            </Button >

            <Button variant="dark" className={styles.btnRegister} onClick={toggleModal}>
              Registrer
            </Button >
          </div>
        </div>
      )}
    </>
  );
}

import React from "react";
import Toast from "react-bootstrap/Toast";
import { useDispatch } from "react-redux";
import { resetToast } from "../../redux/reducers/toast.reducer";
import { ToastI } from "../../utils/interfaces/components.interface";
import styles from "./index.module.scss";

const ToastBox = ({ message, title }: ToastI) => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState<boolean>(false);
  const handleClose = React.useCallback(() => {
    setShow(false);
    dispatch(resetToast());
  }, [show]);
  React.useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(handleClose, 2000);
    }
  }, [message]);
  return (
    <Toast show={show} onClose={handleClose} className={styles.background}>
      <Toast.Header>
        <strong>{title}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastBox;

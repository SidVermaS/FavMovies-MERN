import React from "react";
import Card from "react-bootstrap/Card";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetUser } from "../../redux/reducers/user.reducer";
import { PathE } from "../../utils/constants";
import styles from "./index.module.scss";
const LogOut = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(resetUser());
    removeCookie("token");
  }, []);
  return (
    <div className={styles.background}>
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.text}>Status</Card.Title>
          <Card.Text className={styles.text}>Successfully logged out!</Card.Text>

          <div className={styles.authPageLink}>
            <Link to={PathE.Auth}>Back to Sign in</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LogOut;

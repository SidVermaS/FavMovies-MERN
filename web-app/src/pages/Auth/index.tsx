import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import styles from "./index.module.scss";

const Auth = () => {
  const [isLoginPage, setIsLoginPage] = React.useState<boolean>(true);

  const togglePage=React.useCallback(()=>{
    setIsLoginPage(prev=>!prev)
  },[])

  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.leftContent}></div>
        <div className={styles.rightContent}>
          {isLoginPage ? <Login togglePage={togglePage} /> : <Register togglePage={togglePage} />}
        </div>
      </div>
    </div>
  );
};

export default Auth;

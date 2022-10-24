import React from "react";
import {useDispatch} from 'react-redux'
import Button from "../../../../components/Button";
import TextField from "../../../../components/TextField";
import { userloginAPI } from "../../../../networks/authAPI";
import { AuthComponentsI } from "../../../../utils/interfaces";
import styles from "./index.module.scss";
import { setUser } from "../../../../redux/reducers/user.reducer";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { PathE } from "../../../../utils/constants";
import { setToast } from "../../../../redux/reducers/toast.reducer";
const Login = ({ togglePage }: AuthComponentsI) => {
  const [cookie, setCookie, ] = useCookies(['token']);
  const [userLoginData, setUserLoginData] = React.useState<any>({
    email: "",
    password: "",
  });
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleChange = (e: any) => {
    setUserLoginData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const signIn = React.useCallback(async () => {
    const { status, data } = await userloginAPI(userLoginData);
    if (status === 200) {

      dispatch(setUser(data.user));
      setCookie('token',data.token)
      navigate(PathE.Home)
    }
    dispatch(setToast({ title: "Sign in", message: data.message }));
  }, [userLoginData]);
  return (
    <div className={styles.background}>
      <div className={styles.title}>Sign in</div>
      <div className={styles.content}>
        <TextField
          backgroundClassName={styles.textFieldBackground}
          label="Email"
          name="email"
          placeholder="Enter email..."
          handleChange={handleChange}
          type="email"
          value={userLoginData.email}
        />
        <TextField
          backgroundClassName={styles.passwordTextFieldBackground}
          label="Password"
          name="password"
          placeholder="Enter password..."
          handleChange={handleChange}
          type="password"
          value={userLoginData.password}
        />
        <Button handleClick={signIn} text="Sign in" />
        <div onClick={togglePage} className={styles.newAccount}>
          New Account? Sign up
        </div>
      </div>
    </div>
  );
};

export default Login;

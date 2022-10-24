import React from "react";

import Button from "../../../../components/Button";
import TextField from "../../../../components/TextField";
import { userregisterAPI } from "../../../../networks/authAPI";
import { AuthComponentsI } from "../../../../utils/interfaces";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { setToast } from "../../../../redux/reducers/toast.reducer";
const Register = ({ togglePage }: AuthComponentsI) => {
  const [userRegisterData, setUserRegisterData] = React.useState<any>({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setUserRegisterData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const signUp = React.useCallback(async () => {
    const { name, email, password } = userRegisterData;
    const { status, data } = await userregisterAPI({ name, email, password });
    if (status === 201) {
      setUserRegisterData({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    }

    dispatch(setToast({ title: "Sign up", message: data.message }));
  }, [userRegisterData]);
  return (
    <div className={styles.background}>
      <div className={styles.title}>Sign up</div>
      <div className={styles.content}>
        <TextField
          backgroundClassName={styles.textFieldBackground}
          label="Name"
          name="name"
          placeholder="Enter name..."
          handleChange={handleChange}
          type="text"
          value={userRegisterData.name}
        />
        <TextField
          backgroundClassName={styles.textFieldBackground}
          label="Email"
          name="email"
          placeholder="Enter email..."
          handleChange={handleChange}
          type="email"
          value={userRegisterData.email}
        />
        <TextField
          backgroundClassName={styles.textFieldBackground}
          label="Password"
          name="password"
          placeholder="Enter password..."
          handleChange={handleChange}
          type="password"
          value={userRegisterData.password}
        />
        <TextField
          backgroundClassName={styles.confirmPasswordtextFieldBackground}
          label="Confirm Password"
          name="confirm_password"
          placeholder="Confirm password..."
          handleChange={handleChange}
          type="password"
          value={userRegisterData.password}
        />
        <Button handleClick={signUp} text="Sign up" />
        <div onClick={togglePage} className={styles.newAccount}>
          Already have an account? Sign in
        </div>
      </div>
    </div>
  );
};

export default Register;

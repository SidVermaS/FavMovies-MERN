import React from "react";
import { TextFieldI } from "../../utils/interfaces";
import styles from './index.module.scss'

const TextField = ({
  backgroundClassName,
  handleChange,
  label,
  name,
  placeholder,
  value,
  type
}: TextFieldI) => {
  return <div className={`${styles.background} ${backgroundClassName}`}>
    <div className={`${styles.label}`}>{label}</div>
    <input className={`${styles.input}`} name={name} type={type} placeholder={placeholder} onChange={handleChange} value={value} />

  </div>;
};

export default TextField;

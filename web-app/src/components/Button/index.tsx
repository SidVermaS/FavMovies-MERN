import React from 'react'
import { ButtonI } from '../../utils/interfaces'
import styles from './index.module.scss'

const Button = ({backgroundClassName,text,handleClick}:ButtonI) => {
  return (
    <button className={`${styles.background} ${backgroundClassName}`} onClick={handleClick}>{text}</button>
  )
}

export default Button
import React from 'react'
import s from './Btn.module.scss'

const Btn = ({children}) => {
  return (
    <>
    <button className={s.btn}>{children}</button>
   
    </>
  )
}

export default Btn
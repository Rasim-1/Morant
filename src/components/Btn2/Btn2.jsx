import React from 'react'
import s from './Btn2.module.scss'

const Btn2 = ({children}) => {
  return (
    <>
     <button className={s.btn2}>{children}</button>
    </>
  )
}

export default Btn2

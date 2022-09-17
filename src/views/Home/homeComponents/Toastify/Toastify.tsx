import React from 'react'

import classes from './Toastify.module.scss'

import { useActions } from 'hooks/useActions'

import { InitialState } from 'common/types'

import { useSelector } from 'react-redux'


let translateX = -110
const Toastify = () => {
   const { setToastify } = useActions()
   const state = useSelector((state: InitialState) => state)
   console.log('TESTE Toastify state: ', state.reducer.toastify)
   const toastifyOpen = useSelector((state: InitialState) => state.toastifyOpen)
   const toastify = useSelector((state: InitialState) => state.toastify)

   if (toastifyOpen === true) {
      translateX = 0
   } else {
      translateX = -110
   }

   setTimeout(() => {
      if (toastifyOpen) setToastify('_', false)
   }, 3000);
   console.log('TESTE Toastify:  ', toastify)
   const bgColor = toastify[0]
   const header = toastify[1]
   const msg = toastify[2]


   return (
      <div
         style={{
            transform: `translateX(${translateX}%)`,
            backgroundColor: bgColor,
         }}
         className={classes.Toastify_container}
      >
         <h3>{header}</h3>
         <p>{msg}</p>
      </div>
   )
}

export default Toastify
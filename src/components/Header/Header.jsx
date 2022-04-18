import React, {useState } from 'react'
import style from './Header.module.css'

import { getMonth, getWeekDay } from './dataAboutDate';

import search_icon from '../../media/images/header_icons/search.svg'
import arrow_icon from '../../media/images/header_icons/arrow_bottom.svg'
import avatar_icon from '../../media/images/header_icons/avatar.png'
import ProgressBars from './ProgressBars';

const Header = () => {


  const [organisationName, setOrganisationName] = useState('ИП Сидорова Александра Михайловна')
  const [dateModalWindow, setDateModalWindow] = useState(true)

  const date = new Date()

 
  return (
    <div className={style.container}>

      <div className={style.date}>
        {getWeekDay(date)}, {date.getDate()} {getMonth(date)}
        {/* <div className={style.dateModal}>
        3 дня
      </div> */}
      </div>
     
      <ProgressBars/>

     <img src={search_icon} className={style.search} alt="" />
      
     <div className={style.organisationName}>

        {organisationName}
        <img src={arrow_icon} alt="" />

     </div>

     <div className={style.avatar}>
       <img src={avatar_icon} alt="Аватар" />
       <img src={arrow_icon} alt="" />
     </div>               
    </div>
  )
}

export default Header
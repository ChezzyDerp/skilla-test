import React, { useEffect } from 'react'
import style from './TableElement.module.css'
import incoming_call from '../../media/images/table_icons/incomming_call.svg'
import outgoing_call from '../../media/images/table_icons/outgoing_call.svg'
import cant_reach_call from '../../media/images/table_icons/cant_reach_call.svg'


function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(timeInSeconds).toFixed(3),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60)

    return pad(minutes, 2) + ':' + pad(seconds, 2)
}

function getStatus(call){
    if(call.in_out == 1 && call.status == 'Дозвонился'){
        return  outgoing_call 
    }else if(call.status == 'Не дозвонился'){
        return cant_reach_call 
    }else {
        return incoming_call
    }
}

const TableElement = ({call}) => { 
    return (
    <>
        <div className={style.br}></div>

        <div className={style.data}>
            <div className={style.type}>
                <img src={getStatus(call)} alt="" />
                
            </div>
            <div className={style.time}>
                {sec2time(call.time)}
            </div>
            <div className={style.employee}>
                <img src={call.person_avatar || 'https://lk.skilla.ru/img/noavatar.jpg'} alt="" />
            </div>
            <div className={style.call}>
               +  {call.from_number}
            </div>
            <div className={style.source}>
                {call.contact_company}
            </div>
            <div className={style.grade}>Оценка</div>
            <div className={style.duration}>Длительность</div>
      </div>
    
    </>
  )
}

export default TableElement
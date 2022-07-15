import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './TableCalls.module.css'
import dateFormat from "dateformat";
import TableElement from './TableElement';

const TableCalls = () => {
  const token = 'testtoken'
  const [tableData, setTableData] = useState([])

  useEffect(() =>{
    let now = new Date()
    let dateNow = dateFormat(now, "YYYY-MM-DD")
    axios.post(`https://api.skilla.ru/mango/getList?date_start=2${dateNow}&date_end=${dateNow}`,{},{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((data) =>{
      
      setTableData(data.data)
      console.log(data)
    })
  },[0])

  return (
    <div className={style.container}>
     
      <div className={style.headlines}>
            <div className={style.type}>Тип</div>
            <div className={style.time}>Время</div>
            <div className={style.employee}>Сотрудник</div>
            <div className={style.call}>Звонок</div>
            <div className={style.source}>Источник</div>
            <div className={style.grade}>Оценка</div>
            <div className={style.duration}>Длительность</div>
      </div>
      
      {tableData.map((call) =>{
        return <TableElement key={call.id} call={call}/>
      })}

    </div>
    
  )
}

export default TableCalls
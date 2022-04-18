import React, { useState } from 'react'
import style from './Header.module.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const ProgressBars = () => {
    const [newCalls, setNewCalls] = useState(9)
    const [talksQuality, setTalksQuality] = useState(46)
    const [convertInOrder, setConvertInOrder] = useState(80)

    const newCallsColor = () =>{
        if(newCalls < 10){
          return '#EA1A4F'
        }else if( newCalls < 20){
          return '#FFD500'
        }else if(newCalls >= 20){
          return '#28A879'
        }
    }

    const getColor = (percent) =>{
        if(percent < 30){
          return '#EA1A4F'
        }else if( percent <= 55){
          return '#FFD500'
        }else if(percent > 55){
          return '#28A879'
        }
    }

    const progressTheme = {
    
        success: {
          symbol:' ',
          color: '#EA1A4F'
        },
        active: {
          symbol:' ',
          color: '#FFD500'
        },
        default: {
          symbol:' ',
          color: '#28A879',
          
    }
    
  }
  return (
    <div className={style.progressBars}>

        <div className={style.progressbar}>
         <div>
           Новые звонки 
          <span style={{color: newCallsColor()}}>{newCalls} из 30 шт</span>
         </div>
          <Progress
              status={
                      newCalls < 10 ? 'success'  : 
                      newCalls < 20 ? 'active'   :
                      newCalls >= 20 ? 'default' : null
                      }
              theme={progressTheme}
              percent={newCalls * (100 / 30)}
              
          />

        </div>

        <div className={style.progressbar}>
        <div>  Качество разговоров
          <span style={{color: getColor(talksQuality)}}>{talksQuality}%</span></div>
          <Progress
              status={
                      talksQuality <= 30 ? 'success'  : 
                      talksQuality <= 55 ? 'active'   :
                      talksQuality > 55 ? 'default' : null
                    }
              theme={progressTheme}
              percent={talksQuality}
          />
        </div>

        <div className={style.progressbar}>
          <div>
          Конверсия в заказ
          <span style={{color: getColor(convertInOrder) }}>{convertInOrder}%</span>
          </div>
          <Progress
              status={
                      convertInOrder <= 30 ? 'success'  : 
                      convertInOrder <= 55 ? 'active'   :
                      convertInOrder > 55 ? 'default' : null
                    }
              theme={progressTheme}
              percent={convertInOrder}
           />
        </div>

      </div>
  )
}

export default ProgressBars
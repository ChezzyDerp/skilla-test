import React from 'react'
import style from './NavBar.module.css'
import logo from '../../media/images/logo.svg'
import CustomLink from './CustomLink'

//Icons
import results_icon from '../../media/images/menu_icons/results.svg'
import orders_icon from '../../media/images/menu_icons/orders.svg'
import messages_icon from '../../media/images/menu_icons/messages.svg'
import calls_icon from '../../media/images/menu_icons/calls.svg'
import counterparties_icon from '../../media/images/menu_icons/counterparties.svg'
import documents_icon from '../../media/images/menu_icons/documents.svg'
import performers_icon from '../../media/images/menu_icons/performers.svg'
import reports_icon from '../../media/images/menu_icons/reports.svg'
import knowledgebase_icon from '../../media/images/menu_icons/knowledge_base.svg'
import settings_icon from '../../media/images/menu_icons/settings.svg'
import addButtom_icon from '../../media/images/menu_icons/button_add.svg'
import payButton_icon from '../../media/images/menu_icons/pay.svg'

const NavBar = () => {
  return (
    <div className={style.container}>

      <img src={logo} alt="Logo" className={style.logo} />

      <div className={style.menu}>
        <div className={style.menu_item}>
          <CustomLink to='some1'>
              <img src={results_icon} alt="Итоги" />
              <span>Итоги</span>
          </CustomLink>
        </div>
        <div className={style.menu_item}>
          <CustomLink to='some2'>
              <img src={orders_icon} alt="Заказы" />
              <span>Заказы</span>
          </CustomLink>
        </div>
        <div className={style.menu_item}>
          <CustomLink to='some3'>
              <img src={messages_icon} alt="Сообщения" />
              <span>Сообщения</span>
          </CustomLink>
        </div>
        <div className={style.menu_item}>
          <CustomLink to='calls'>
              <img src={calls_icon} alt="Звонки" />
              <span>Звонки</span>
          </CustomLink>
        </div>
        <div className={style.menu_item}>
          <CustomLink   to='some4'>
              <img src={counterparties_icon} alt="Контрагенты" />
              <span>Контрагенты</span>
          </CustomLink>
        </div>
        <div className={style.menu_item}>
          <CustomLink   to='some5'>
              <img src={documents_icon} alt="Документы" />
              <span>Документы</span>
          </CustomLink>
        </div>
        <div className={style.menu_item}>
          <CustomLink   to='some6'>
              <img src={performers_icon} alt="Исполнители" />
              <span>Исполнители</span>
          </CustomLink>
        </div>
        <div className={style.menu_item}>
          <CustomLink   to='some7'>
              <img src={reports_icon} alt="Отчеты" />
              <span>Отчеты</span>
          </CustomLink>
        </div>
        <div className={style.menu_item}>
          <CustomLink   to='some8'>
              <img src={knowledgebase_icon} alt="База знаний" />
              <span>База знаний</span>
          </CustomLink>
        </div>
        <div className={style.menu_item}>
          <CustomLink   to='some9'>
              <img src={settings_icon} alt="Настройки" />
              <span>Настройки</span>
          </CustomLink>
        </div>
        
      </div>

      <div className={style.buttons}>
        <button >
          <span>Добавить заказ</span>
          <img src={addButtom_icon} alt="Добавить" />
        </button>
        <button >
          <span>Оплата</span>
          <img src={payButton_icon} alt="Оплата" />
        </button>
      </div>

    </div>
  )
}

export default NavBar
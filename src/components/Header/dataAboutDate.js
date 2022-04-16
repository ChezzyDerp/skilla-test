export const getWeekDay = (date) => {
    let days = ['Воскресенье','Понедельник', 'Вторник',
                'Среда', 'Четверг', 'Пятница', 'Суббота'];
  
    return days[date.getDay()];
  }
export const getMonth = (date) =>{
    let month = [ "янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен","окт", "ноя", "дек"]
    return month[date.getMonth()]
  }
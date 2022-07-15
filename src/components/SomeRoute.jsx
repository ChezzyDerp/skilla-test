import React from 'react'
import { useParams } from 'react-router-dom';

const SomeRoute = () => {

    let params = useParams();
    return (
        <div>Вы находитесь во вкладке {params.name}. Для работы перейдите в Звонки</div>
    )
}

export default SomeRoute
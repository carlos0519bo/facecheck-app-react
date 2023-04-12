import React, { useEffect, useState } from 'react';
import './watch.css';

export const Watch = () => {

    const date = new Date();

    const [dataTime, setDataTime] = useState({
        horas: date.getHours(),
        minutos: date.getMinutes()
    });


    useEffect(() => {
        
        const timer = setInterval(() => {
            
            const date = new Date();
            setDataTime({
                horas: date.getHours(),
                minutos: date.getMinutes()
            });
            
        }, 1000);
        

        return () => clearInterval(timer);

    }, []);

    return (
        <>
                <div className="contador">
                    <p>
                        {dataTime.horas < 10 ? ` 0${dataTime.horas}` : dataTime.horas} h : {dataTime.minutos < 10 ? ` 0${dataTime.minutos}` : dataTime.minutos} {dataTime.segundos < 10 ? ` 0${dataTime.segundos}` : dataTime.segundos} 
                    </p>
                </div>
          
        </>
    )
}
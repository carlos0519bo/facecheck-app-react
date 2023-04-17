import { useEffect, useState } from 'react';
import './watch.css';
import { Typography } from '@mui/material';

export const Watch = () => {
  const date = new Date();

  const [dataTime, setDataTime] = useState({
    horas: date.getHours(),
    minutos: date.getMinutes(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDataTime({
        horas: date.getHours(),
        minutos: date.getMinutes(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Typography fontSize={26} color="white">
      {dataTime.horas < 10 ? ` 0${dataTime.horas}` : dataTime.horas} :{' '}
      {dataTime.minutos < 10 ? ` 0${dataTime.minutos}` : dataTime.minutos}{' '}
    </Typography>
  );
};

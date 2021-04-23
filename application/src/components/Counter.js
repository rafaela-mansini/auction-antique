import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Counter = ({ product }) => {

  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const timeToFinish = parseInt(product.expired_time, 10);
    const elapsedTime = moment().diff(moment(product.expired_time), "seconds");
    const updatedTimeToFinish = (timeToFinish * 60) - elapsedTime;

    if(updatedTimeToFinish >= 0) {
      setSeconds(updatedTimeToFinish)
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000)
    if(seconds < 0){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds])

  return(
    <span className="expireDate">Exipre at: {product.expired_time}<br/>(last {seconds} seconds)</span>
  );
}

export default Counter;
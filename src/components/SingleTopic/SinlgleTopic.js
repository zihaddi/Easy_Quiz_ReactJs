import React from 'react';
import { Link } from 'react-router-dom';
import './SingleTopic.css'
const SinlgleTopic = ({topic}) => {
  const {id,name,logo,total} = topic
  const png = 'https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png'
  return (
    <div className='topic-design'> 
    <img src={logo?logo : png } alt="" />
    <div>
       <h4>{name}</h4>
       <p>Name : {name}</p>
       <p>Total : {total}</p>
       
      <Link to={`/practise/${id}`}> <button className='btn-design'>Start Practise</button></Link>
    </div>
 </div>
  );
};

export default SinlgleTopic;
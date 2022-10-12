import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinlgleTopic from '../SingleTopic/SinlgleTopic';
import './Topics.css'
import ima from '../../image/attachment_95660693.png'
const color ={color:"orange"}
const Topics = () => {
  const topicsData  = useLoaderData()
  const topics = topicsData.data;
  
  return (
    <div>
       <img className='topic-logo' src={ima} alt="" />
       <p className='topic-p'>You can test your Programming skills with <span style={color}> Easy Quiz </span>Exercises.</p>
      <div  className='topics-container'>
      {
        topics.map(topic => <SinlgleTopic key={topic.id} topic={topic}></SinlgleTopic>)
       }
      </div>
    </div>
  );
};

export default Topics;
import React from 'react';
import Header from '../components/Header';


const AuthorPage = () => {
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='inner-container'>
                <h2 className='about'>About The Author: Allan Munene Kinyua</h2>
                <div className='images'>
                <img src="./img/allan.png" className="allan-image" alt=''/>
                <img src="./img/allank.jpg" className="allan-image" alt=''/>
                </div>
                <div className='content'>
                   <p>Allan Munene Kinyua Is a passionate web developer who is interested about realword facts. His major areas of interest are Pharmacology, History and Sociology. Allan studied at Mount Kenya University alongside Alchemy university, where he pursued a degree in blockchain technology having mastered Smart contracts and cryptography. He is also looking foward to be a bloger ansd a vloger. His dream is to dominate almost all areas in technology, soaring unknown heights in the field. Thats all for today, <p><b>Thank You</b></p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthorPage
import React, { Component, useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md"
import img1 from "../img/yangi.png"
import img2 from "../img/klipartz.jpg"
import "../css/Cards.css"
const data=require("../js/new") 
const foto= require("../js/foto")

export default class cards extends Component {
  state = {
    data: data,
    buy:[]
  }
  shop=(title, img, sum,skit1,xit, skit)=> {
    var push= true;
    var data1 = {
      'title': title,
      'img': img,
      'sum': sum,
      'skit': skit,
      'skit1':skit1,
      'xit':xit,
      'count':1
    }
 
  if (this.state.buy[0]===null){
    this.state.buy.push(data1)
    push=false;
  }else{
    for(var i=0; i<this.state.buy.length; i++){
      if (this.state.buy[i].title===data1.title){
          this.state.buy[i].count++;
          push=false;
      }
    }
  }
  if(push){ this.state.buy.push(data1)}
  localStorage.setItem("names", JSON.stringify(this.state.buy));
  var storedNames = JSON.parse(localStorage.getItem("names"));
  console.log(storedNames); }
componentDidMount(){
  if(JSON.parse(localStorage.getItem("names"))==null){
    this.setState({buy:[]})
  }else{
    this.setState({buy:JSON.parse(localStorage.getItem("names"))})
  }
}

  render() {
    return (
      <div>

      
      <section className='news'>
        <div className='news_top'>
          <h1 className='news_text'>Новинки </h1>
          <a href='/new' className='news_link'>Все категории</a>
           </div>
          <div className='card_wrapper'>
            {data.map((item,key)=>{
              if(key<4){
                
             
              return <div className=' '>
                <img src={img1} alt="" className='card_img'/>
                <div className='card_text'>
                    <p className='card_title'>{item.title}</p>
                    <p className='card_sum'>{item.sum}</p>
                    <p className='card_skit'>{item.skit}</p>
                    <div className='card_button'>
                       <select className='card_drop'>
                          <option>1 шт</option>
                          <option>2 шт</option>
                          <option>3 шт</option>
                       </select>
                       <div className='card_icons' onClick={()=> this.shop(item.title,item.img,item.sum,item.skit1,item.xit,item.skit)}>
                         <MdAddShoppingCart className="card_icon"/>
                       </div>
                    </div>
                </div>
              </div> }
            })}
            
          </div>
       
      </section>
      <section className='skit'>
        <div className='skit_top'>
          <h1 className='skit_text'>Скидки  <span className='skit_text_span'>%</span> </h1>
          <a href='/skit' className='skit_link'>Все товары в категории </a>
           </div>
          <div className='card_wrapper'>
            {data.map((item, key)=>{
              if(key<4){
              return <div className='card_list'>
                <img src={img1} alt="" className='card_img'/>
                <div className='card_text'>
                <span className='skit_text_span'>{item.skit1}%</span>
                    <p className='card_title'>{item.title}</p>
                    <p className='card_sum'>{item.sum}</p>
                    <p className='card_skit'>{item.skit}</p>
                    <div className='card_button'>
                       <select className='card_drop'>
                          <option>1 шт</option>
                          <option>2 шт</option>
                          <option>3 шт</option>
                       </select>
                       <div className='card_icons'onClick={()=> this.shop(item.title,item.img,item.sum,item.skit1,item.xit,item.skit)}>
                         <MdAddShoppingCart className="card_icon"/>
                       </div>
                    </div>
                </div>
              </div>}
            })}
            
          </div>
       
      </section>
      <section className='top'>
        <div className='top_top'>
          <h1 className='top_text'>Популярные категории </h1>
          <a href='#!' className='top_link'>Все товары в категории </a>
           </div>
          <div className='card_wrapper1'>
            {foto.map(item=>{
              return <div className='card_list1'>
                <img src={img2} alt="" className='card_img1'/>               
                    <p className='card_title1'>{item.title}</p>
              </div>
            })}
            
          </div>
       
      </section>
      <section className='xit'>
        <div className='xit_top'>
          <h1 className='xit_text'>Хиты продаж </h1>
          <a href='/xit' className='skit_link'>Все товары в категории </a>
           </div>
          <div className='card_wrapper'>
            {data.map((item,key)=>{
              if(key<4){
              return <div className='card_list'>
                <img src={img1} alt="" className='card_img'/>
                <div className='card_text'>
                <span className='skit_text_span'>{item.xit}</span>
                    <p className='card_title'>{item.title}</p>
                    <p className='card_sum'>{item.sum}</p>
                    <p className='card_skit'>{item.skit}</p>
                    <div className='card_button'>
                       <select className='card_drop'>
                          <option>1 шт</option>
                          <option>2 шт</option>
                          <option>3 шт</option>
                       </select>
                       <div className='card_icons'onClick={()=> this.shop(item.title,item.img,item.sum,item.skit1,item.xit,item.skit)}>
                         <MdAddShoppingCart className="card_icon"/>
                       </div>
                    </div>
                </div>
              </div>}
            })}
            
          </div>
       
      </section>
      </div>
    )
  }
}

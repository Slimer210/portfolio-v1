import React from "react";
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import axios from "axios";
import moment from 'moment';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function decodeHtmlEntities(encodedString) {
  const textarea = document.createElement('textarea');
  encodedString = encodedString.replace(/<[^>]*>/g, '')
  textarea.innerHTML = encodedString;
  return textarea.value;
}

export default function Blog() {
  moment.locale("zh-cn");
  const [jsonData, setJsonData] = useState(null);
  const [isBlogLoading, setIsBlogLoading] = useState(true);

  useEffect(() => {
    axios.get('https://blog.slimer.dev/wp-json/wp/v2/posts?_fields=id,excerpt,title,link,date&per_page=3')
      .then(response => {
        setJsonData(response.data);
        console.log(jsonData)
        setIsBlogLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsBlogLoading(false);
      });
  }, []);
  return (
    <>

      <div className="w-screen h-auto bg-gradient-to-br from-[#d0ffdc] via-[#feffe0] to-[#ecffdf] p-4 md:p-16 flex flex-col items-center gap-y-12">
      <Navigation className="self-center"/>
        <div className='flex flex-col items-center max-w-6xl mt-8'>
          <h1 className='text-5xl md:text-7xl'>最新文章</h1>
          {isBlogLoading ?
            <div className='bg-white bg-opacity-40 shadow-lg flex flex-col xl:flex-row rounded-xl xl:p-8 m-8 xl:m-8 w-full text-center items-center justify-center gap-x-4 p-8 text-4xl'><Icon icon="eos-icons:loading" /><span className='text-2xl'>加载中</span></div>
            : jsonData.map((item, index) =>
            (<div className='text-black-text w-screen xl:w-auto' key={index}>
              <div className='bg-white bg-opacity-40 hover:bg-opacity-80 shadow-lg hover:shadow-xl duration-300 flex flex-col xl:flex-row rounded-xl p-0 xl:p-8 m-8 xl:m-8 select-none'>
                <div className='flex flex-col gap-y-4 p-8 xl:p-0'>
                  <h2 className='text-center md:text-left text-4xl font-extrabold'>{decodeHtmlEntities(item.title.rendered)}</h2>
                  <h3 className='text-center md:text-left text-xl font-sans font-normal text-gray-500'>{moment(item.date).format('lll')}</h3>
                  <p className='text-lg text-justify md:text-left font-normal'>{decodeHtmlEntities(item.excerpt.rendered)}</p>
                  <Link to={item.link} className='flex flex-row items-center gap-x-2 hover:gap-x-4 duration-300 inner py-4 font-bold text-primary-text text-xl self-center md:self-start'>阅读更多<Icon icon='mingcute:right-fill'></Icon></Link>
                </div>
                {/* <img src={Photoo} className='bg-fixed rounded-xl w-auto xl:w-full xl:mx-6' /> */}
              </div>
            </div>)
            )}

          <a href='https://blog.slimer.dev' className='bg-green-800 hover:bg-green-900 select-none shadow-lg hover:shadow-xl duration-300 px-8 py-4 text-2xl self-center rounded-lg text-white font-bold'>阅读更多文章</a>
        </div>
      </div>


    </>
  );
}
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import axios from 'axios'
import moment from 'moment';

import HeadPhoto from '../assets/images/head.jpg'

import about_svg from '../assets/vector/about.svg'
import blog_svg from '../assets/vector/blog.svg'
import contact_svg from '../assets/vector/contact.svg'
import portfolio_svg from '../assets/vector/portfolio.svg'
import { Link } from 'react-router-dom';

function decodeHtmlEntities(encodedString) {
  const textarea = document.createElement('textarea');
  encodedString = encodedString.replace(/<[^>]*>/g, '')
  textarea.innerHTML = encodedString;
  return textarea.value;
}

export default function Landing() {
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
        <Navigation className="z-50"/>
        <div className="max-w-6xl flex flex-col-reverse md:flex-row gap-x-20 gap-y-10 mt-32 md:my-24 items-center justify-items-center">
          <img src={HeadPhoto} className='bg-fixed w-full md:w-1/2 min-w-[20rem] rounded-lg shadow-md' />
          <div className="self-center text-center md:text-left">
            <h1>你好</h1>
            <br />
            <h1 className='whitespace-nowrap'>我是<strong className="text-primary-text">韦杉</strong></h1>
            <br /><br />
            <p className='text-xl text-black-text font-normal tracking-wide px-10 py-5 md:p-0 '>当前，我是一位专注于学业的中学生，沐浴在对编程、音乐和摄影的无限热爱之中。</p>
          </div>
        </div>
        <div className="flex flex-col lg:grid grid-cols-5 grid-rows-2 gap-x-4 gap-y-8 w-full max-w-6xl">
          <Link to="/about" className='cursor-pointer  duration-300 col-span-3 w-full rounded-3xl shadow-xl bg-gradient-to-b hover:bg-gradient-to-br from-[#E5B4F6] to-[#F6B4D4] hover:shadow-2xl hover:-translate-y-2'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>你绝对想知道的</p>
              <h2 className='inner top-0 right-0 text-right'>关于我</h2>
            </div>
            <img className='h-2/3' src={about_svg} />
          </Link>
          <Link to="/portfolio" className='cursor-pointer  duration-300 col-span-2 w-full rounded-3xl shadow-xl bg-gradient-to-b hover:bg-gradient-to-br from-[#A3DCD4] to-[#B5D5E3] hover:shadow-2xl hover:-translate-y-2'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>万分震撼的</p>
              <h2 className='inner top-0 right-0 text-right'>个人作品</h2>
            </div>
            <img className='h-2/3' src={portfolio_svg} />
          </Link>
          <Link to="/blog" className='cursor-pointer  duration-300 col-span-2 w-full rounded-3xl shadow-xl bg-gradient-to-b hover:bg-gradient-to-br from-[#FFD8C8] to-[#FFC8C8] hover:shadow-2xl hover:-translate-y-2'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>精彩的生活点滴就在我的</p>
              <h2 className='inner top-0 right-0 text-right'>博客</h2>
            </div>
            <img className='h-2/3' src={blog_svg} />
          </Link>
          <Link to="/contact" className='cursor-pointer  duration-300 col-span-3 w-full rounded-3xl shadow-xl bg-gradient-to-b hover:bg-gradient-to-br from-[#C8E4FF] to-[#CFC8FF] hover:shadow-2xl hover:-translate-y-2'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>想找我吗？不妨尝试在这里</p>
              <h2 className='inner top-0 right-0 text-right'>联系我</h2>
            </div>
            <img className='h-2/3' src={contact_svg} />
          </Link>
        </div>
        <div className='flex flex-col items-center max-w-6xl mt-8'>
          <h1 className='text-5xl md:text-7xl'>最新<Link to="/blog" className='text-primary-text'>文章</Link></h1>
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
        <hr className='w-full border-black max-w-7xl' />
        <Footer />
      </div>
    </>
  );
}
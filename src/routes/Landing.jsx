import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import Navigation from '../components/Navigation';
import axios from 'axios'
import moment from 'moment';

import HeadPhoto from '../assets/head.jpg'

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
      {/* <div className='bg-red-400 md:bg-yellow-400 xl:bg-green-300'>red indicates mobile, yellow indicates tablet (md), green indicates desktop(xl) bg-red-400 md:bg-yellow-400 xl:bg-green-300</div> */}
      <div className="w-screen h-auto bg-gradient-to-br from-[#d0ffdc] via-[#feffe0] to-[#ecffdf] p-4 md:p-16 flex flex-col items-center gap-y-12">
        <Navigation className="z-50"/>
        <div className="max-w-6xl flex flex-col-reverse xl:flex-row gap-x-20 gap-y-10 mt-32 xl:my-24 items-center justify-items-center">
        <img src={HeadPhoto} className='bg-fixed w-full xl:w-1/2 rounded-lg shadow-md' />
          <div className="self-center text-center xl:text-left">
            <h1>你好</h1>
            <br />
            <h1 className='whitespace-nowrap'>我是<strong className="text-primary-text">韦杉</strong></h1>
            <br /><br />
            <p className='text-xl text-black-text font-normal tracking-wide px-10 py-5 xl:p-0 '>一个很颓废的学生，每天想着怎么搞好一个作品，却没有成功过;-;</p>
          </div>
        </div>
        <div className="flex flex-col xl:grid grid-cols-5 grid-rows-2 gap-x-4 gap-y-8 w-full max-w-6xl">
          <div className='cursor-pointer  duration-300 col-span-3 w-full rounded-3xl shadow-xl bg-gradient-to-b hover:bg-gradient-to-br from-[#E5B4F6] to-[#F6B4D4] hover:shadow-2xl hover:-translate-y-2'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>你绝对想知道的</p>
              <h2 className='inner top-0 right-0 text-right'>关于我</h2>
            </div>
            <img className='h-2/3' src={about_svg} />
          </div>
          <div className='cursor-pointer  duration-300 col-span-2 w-full rounded-3xl shadow-xl bg-gradient-to-b hover:bg-gradient-to-br from-[#A3DCD4] to-[#B5D5E3] hover:shadow-2xl hover:-translate-y-2'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>万分震撼的</p>
              <h2 className='inner top-0 right-0 text-right'>个人作品</h2>
            </div>
            <img className='h-2/3' src={portfolio_svg} />
          </div>
          <div className='cursor-pointer  duration-300 col-span-2 w-full rounded-3xl shadow-xl bg-gradient-to-b hover:bg-gradient-to-br from-[#FFD8C8] to-[#FFC8C8] hover:shadow-2xl hover:-translate-y-2'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>精彩的生活点滴就在我的</p>
              <h2 className='inner top-0 right-0 text-right'>博客</h2>
            </div>
            <img className='h-2/3' src={blog_svg} />
          </div>
          <div className='cursor-pointer  duration-300 col-span-3 w-full rounded-3xl shadow-xl bg-gradient-to-b hover:bg-gradient-to-br from-[#C8E4FF] to-[#CFC8FF] hover:shadow-2xl hover:-translate-y-2'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>想找我吗？不妨尝试在这里</p>
              <h2 className='inner top-0 right-0 text-right'>联系我</h2>
            </div>
            <img className='h-2/3' src={contact_svg} />
          </div>
        </div>
        <div className='flex flex-col items-center max-w-6xl mt-8'>
          <h1>最新文章</h1>
          {isBlogLoading ? 
            <div className='bg-white bg-opacity-40 shadow-lg flex flex-col xl:flex-row rounded-xl xl:p-8 m-8 xl:m-8 w-full text-center items-center justify-center gap-x-4 p-8 text-4xl'><Icon icon="eos-icons:loading" /><span className='text-2xl'>加载中</span></div>
           : jsonData.map((item, index) => 
            (<div className='text-black-text w-screen xl:w-auto' key={index}>
              <div className='bg-white bg-opacity-40 hover:bg-opacity-80 shadow-lg hover:shadow-xl duration-300 flex flex-col xl:flex-row rounded-xl p-0 xl:p-8 m-8 xl:m-8 select-none'>
                <div className='flex flex-col gap-y-4 p-8 xl:p-0'>
                  <h2 className='text-center xl:text-left text-4xl'>{decodeHtmlEntities(item.title.rendered)}</h2>
                  <h3 className='text-center xl:text-left text-xl font-sans font-medium'>{moment(item.date).format('lll')}</h3>
                  <p className='tracking-wide text-lg text-justify xl:text-left'>{decodeHtmlEntities(item.excerpt.rendered)}</p>
                  <Link to={item.link} className='flex flex-row items-center gap-x-2 hover:gap-x-4 duration-300 inner py-4 font-bold text-primary-text text-xl'>阅读更多<Icon icon='mingcute:right-fill'></Icon></Link>
                </div>
                {/* <img src={Photoo} className='bg-fixed rounded-xl w-auto xl:w-full xl:mx-6' /> */}
              </div>
            </div>)
          )}

          <a href='https://blog.slimer.dev' className='bg-green-800 hover:bg-green-900 select-none shadow-lg hover:shadow-xl duration-300 px-8 py-4 text-2xl self-center rounded-lg text-white font-bold'>阅读更多文章</a>
        </div>
        <hr className='w-full border-black max-w-7xl' />
        <div className='grid grid-cols-1 xl:grid-cols-3 max-w-7xl place-items-center text-center xl:text-left gap-y-12'>
          <div className='flex flex-col col-span-1 gap-y-8'>
            <h3 className='text-primary-text'>社交平台</h3>
            <div className='space-y-3'>
              <Link to="https://facebook.com/howweishan.0210" className='flex flex-row items-center text-black-text gap-x-2 text-lg'><Icon icon="ic:baseline-facebook" />侯韦杉</Link>
              <Link to="https://instagram.com/howweishan0210" className='flex flex-row items-center text-black-text gap-x-2 text-lg'><Icon icon="ri:instagram-fill" />howweishan0210</Link>
              <Link to="https://github.com/slimer210" className='flex flex-row items-center text-black-text gap-x-2 text-lg'><Icon icon="mdi:github" />Slimer210</Link>
            </div>
          </div>
          <div className='flex flex-col col-span-1 gap-y-8'>
            <h3 className='text-primary-text'>导航</h3>
            <div className='space-y-3'>
              <Link className='flex flex-row items-center text-black-text gap-x-2 text-lg'><Icon icon="pepicons-pop:cv" />CV</Link>
              <Link className='flex flex-row items-center text-black-text gap-x-2 text-lg'><Icon icon="mdi:linkedin" />LinkedIn</Link>
              <Link to="https://blog.slimer.dev" className='flex flex-row items-center text-black-text gap-x-2 text-lg'><Icon icon="formkit:wordpress" />博客</Link>
            </div>
          </div>
          <div className='flex flex-col col-span-1 gap-y-4 pb-8 text-center xl:text-left'>
            <p>版本v0.0 © 2022-2023 侯韦杉 版权所有</p>
            <p>此网站部分素材及代码含有开放原始码授权。</p>
            <div className='text-primary-text font-bold'>
              <div className='gap-x-4 flex items-center justify-center xl:justify-start mt-4'>
                <a>隐私政策</a>
                <a>服务条款</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
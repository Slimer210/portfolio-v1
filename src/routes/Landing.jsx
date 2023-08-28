import React from 'react'
import { Icon } from '@iconify/react';

import Photoo from '../assets/flower.jpg'

import about_svg from '../assets/vector/about.svg'
import blog_svg from '../assets/vector/blog.svg'
import contact_svg from '../assets/vector/contact.svg'
import portfolio_svg from '../assets/vector/portfolio.svg'


export default function Landing() {
  return (
    <>
      {/* <div className='bg-red-400 md:bg-yellow-400 xl:bg-green-300'>red indicates mobile, yellow indicates tablet (md), green indicates desktop(xl) bg-red-400 md:bg-yellow-400 xl:bg-green-300</div> */}
      <div className="w-screen h-auto bg-gradient-to-r from-[#E8FFD6] via-[#FAFCCA] to-[#D1FFB5] p-4 md:p-16 flex flex-col items-center gap-y-12">
        <div className="max-w-6xl flex flex-col xl:flex-row gap-x-10 mt-32 xl:my-24 items-center justify-items-center">
          <div className="self-center text-center xl:text-left">
            <h1>你好</h1>
            <br />
            <h1 className='whitespace-nowrap'>我是<strong className="text-primary-text">韦杉</strong></h1>
            <br /><br />
            <p className='text-xl text-black-text font-normal tracking-wide px-10 py-5 xl:p-0 '>有朋自远方来，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，后鞭数十，驱之别院。曰:不亦悦乎！</p>
          </div>
          <img src={Photoo} className='bg-fixed w-full xl:w-1/2 rounded-lg shadow-md' />
        </div>
        <div className="flex flex-col xl:grid grid-cols-5 grid-rows-2 gap-x-4 gap-y-8 w-full max-w-6xl">
          <div className='col-span-3 w-full rounded-3xl shadow-xl bg-gradient-to-b from-[#E5B4F6] to-[#F6B4D4]'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>你绝对想知道的</p>
              <h2 className='inner top-0 right-0 text-right'>关于我</h2>
            </div>
            <img className='h-2/3' src={about_svg} />
          </div>
          <div className='col-span-2 w-full rounded-3xl shadow-xl bg-gradient-to-b from-[#A3DCD4] to-[#B5D5E3]'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>万分震撼的</p>
              <h2 className='inner top-0 right-0 text-right'>个人作品</h2>
            </div>
            <img className='h-2/3' src={portfolio_svg} />
          </div>
          <div className='col-span-2 w-full rounded-3xl shadow-xl bg-gradient-to-b from-[#FFD8C8] to-[#FFC8C8]'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>精彩的生活点滴就在我的</p>
              <h2 className='inner top-0 right-0 text-right'>博客</h2>
            </div>
            <img className='h-2/3' src={blog_svg} />
          </div>
          <div className='col-span-3 w-full rounded-3xl shadow-xl bg-gradient-to-b from-[#C8E4FF] to-[#CFC8FF]'>
            <div className='p-12 h-1/3 justify-center flex flex-col'>
              <p className='inner top-0 right-0 text-right'>想找我吗？不妨尝试在这里</p>
              <h2 className='inner top-0 right-0 text-right'>联系我</h2>
            </div>
            <img className='h-2/3' src={contact_svg} />
          </div>
        </div>
        <div className='flex flex-col items-center max-w-6xl gap-y-8'>
          <h1>最新文章</h1>
          <div className='text-black-text w-screen xl:w-auto'>
            <div className='bg-white bg-opacity-60 shadow-lg flex flex-col xl:flex-row rounded-xl p-0 xl:p-8 m-8 xl:m-16'>
              <div className='flex flex-col gap-y-4 p-8 xl:p-0'>
                <h2 className='text-center xl:text-left'>文章标题</h2>
                <p className='tracking-wide text-xl text-justify xl:text-left'>有朋自远方来，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，后鞭数十，驱之别院。曰:不亦悦乎！</p>
                <a className='inner left-0 bottom-0 py-4 font-bold text-primary-text text-xl text-center xl:text-left'>阅读更多</a>
              </div>
              <img src={Photoo} className='bg-fixed rounded-xl w-auto xl:w-full xl:mx-6' />
            </div>

          </div>
          <a className='bg-green-800 px-8 py-4 text-2xl self-center rounded-lg text-white font-bold'>阅读更多文章</a>
        </div>
        <hr className='w-full border-black max-w-7xl' />
        <div className='grid grid-cols-1 xl:grid-cols-3 max-w-7xl place-items-center text-center xl:text-left gap-y-12'>
          <div className='flex flex-col col-span-1 gap-y-8'>
            <h3 className='text-primary-text'>社交平台</h3>
            <div className='space-y-3'>
              <a className='flex flex-row items-center text-black-text gap-x-2 text-xl'><Icon icon="ic:baseline-facebook" />侯韦杉</a>
              <a className='flex flex-row items-center text-black-text gap-x-2 text-xl'><Icon icon="ri:instagram-fill" />howweishan0210</a>
              <a className='flex flex-row items-center text-black-text gap-x-2 text-xl'><Icon icon="mdi:github" />Slimer210</a>
            </div>
          </div>
          <div className='flex flex-col col-span-1 gap-y-8'>
            <h3 className='text-primary-text'>导航</h3>
            <div className='space-y-3'>
              <a className='flex flex-row items-center text-black-text gap-x-2 text-xl'><Icon icon="pepicons-pop:cv" />CV</a>
              <a className='flex flex-row items-center text-black-text gap-x-2 text-xl'><Icon icon="mdi:linkedin" />LinkedIn</a>
              <a className='flex flex-row items-center text-black-text gap-x-2 text-xl'><Icon icon="formkit:wordpress" />博客</a>
            </div>
          </div>
          <div className='flex flex-col col-span-1 gap-y-6 pb-8 text-center xl:text-left'>
            <p>© 2022-2023 侯韦杉 版权所有</p>
            <p>此网站部分素材及代码含有开放原始码授权。</p>
            <div className='text-primary-text font-bold'>
              <div className='gap-x-4 flex items-center justify-center xl:justify-start'>
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
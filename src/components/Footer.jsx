import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
export default function Footer() {
    return (
        <div>

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
                            <Link>隐私政策</Link>
                            <Link>服务条款</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";

export default function About() {
  return (
    <>

      <div className="w-screen h-auto bg-gradient-to-br from-[#d0ffdc] via-[#feffe0] to-[#ecffdf] p-4 md:p-16 flex flex-col items-center gap-y-12">
        <Navigation />
        <article className="prose lg:prose-xl prose-headings:text-center  prose-h1:text-6xl prose-h1:text-primary-text prose-h1:font-bold prose-h2:text-primary-text prose-h2:font-bold prose-h2:text-3xl">
          <h1 className="mt-32">欢迎来到我的世界！</h1>
          <p>👋 嘿！ 我是韦杉，不过你可以叫我Slimer。 目前，我是马来西亚一所中学的一名专心学生，对编码、音乐和摄影充满热情。</p>
          <div>
            <ul className="bg-white bg-opacity-60 rounded-xl leading-1 p-8">
              <h2>ℹ认识我</h2>
              <li>姓名：侯韦杉</li>
              <li>网名：Slimer10 / Slimer0210</li>
              <li>地点：马来西亚柔佛州新山🇲🇾</li>
              <li>职业：全日制学生👨‍🎓</li>
              <li>爱好： 音乐 🎶、编码 ⌨、摄影 📸</li>
              <li>语言：中文、英文、马来文</li>
              <li>志向：前端开发者🖥</li>
            </ul>
            <div />
            <h2>🖥 编程：我的救星</h2>
            <p>对我来说，编程不仅仅是一项技能，更是一根生命线。在封闭隔离期间，我无意中接触了编程，当时正在漫无目的地探索《我的世界》（Minecraft）。这是一个重大的时刻，它引领我发现了一条新的生活之路，远离了传统教育的束缚。</p>
            <p>我开始了一段旅程，从使用Python进行基本编程起步，然后深入探索NodeJS的前端开发领域，最终拥抱了C++的竞技编程。沿途，我不仅积累了技术技能，还结识了新朋友、融入了一个充满支持的社群，并对我生活中所需的人有了更深入的了解。</p>
            <h2>🚀 2022年：蜕变之年</h2>
            <p>在2022年，竞技编程在重塑我的生活中扮演了重要角色。尽管我付出的努力比最初的预期要少，但它产生了深刻的影响。它增强了我的自信，滋养了我的勇气，点燃了我内心的动力。在这激动人心的旅程中，我变得更加自律和坚定，这一切都要感谢竞技编程。</p>
            <h2>🎯 2023年的目标</h2>
            <p>在2023年，我已经将目光锁定在另一轮竞技编程挑战上。尽管SPM考试即将来临，但我决心尽力而为。我的目标是超越以往的成就，创造新的记录。我深知身为学生和业余程序员所承担的责任，并承诺有效地平衡它们。</p>
            <h2>🌟 迎接未来</h2>
            <p>未来蕴含着无限的可能性。尽管竞技编程迄今在我的旅程中扮演了重要的角色，但我已经准备好探索新的视野，拥抱未来所带来的一切。毫无疑问，编程将继续是我生活的基本组成部分，引领我前行。</p>
            <p>加入我，踏上这激动人心的探索和成长之旅，共同探寻编程和抱负之路的方向。</p>
          </div>
        </article>
        <hr className='w-full border-black max-w-7xl' />
        <Footer />
      </div>
    </>
  );
}
import { useState, useEffect } from "react";
import svgPaths from "./svg-fwwsd0bmep";
import imgRectangle1 from "figma:asset/b3f5cbd9669dfee249a1d1db3cb53bfc5403c907.png";
import imgThumb from "figma:asset/e5786730bc25909893b6b034a92504a619961fee.png";
import imgThumb1 from "figma:asset/6ecc55b2f6b4df999a9dd80e77413da1a86b78f4.png";
import imgThumb2 from "figma:asset/5de0f79ea7f3515bb5f86b665802b041dad855d9.png";
import imgThumb3 from "figma:asset/4375f1e03a4a24ce9d92fe41673bab46b3439b2b.png";
import imgThumb4 from "figma:asset/95cfa5aee402690356419c08ee0ef75133e947aa.png";
import imgThumb5 from "figma:asset/6c764fcb148a583c6ad4922b92ed2fbf3fecf921.png";
import imgRectangle6 from "figma:asset/9b6864725b781269b23c2c35e901fc15478aba2e.png";

function BtnMore() {
  return (
    <div className="bg-[#ffc800] box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[30px] py-[14px] relative rounded-[6px] shrink-0 w-[187px]" data-name="btn-more">
      <div className="flex flex-col font-['Montserrat:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white uppercase">
        <p className="leading-[normal] whitespace-pre">tell me more</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-center left-[23.59%] right-[22.24%] top-[calc(50%+29px)] translate-y-[-50%]">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-center text-white tracking-[-1.6px] uppercase w-[min-content]">Lorem ipsum dolor sit amet</p>
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[72px] text-center text-white tracking-[-3.6px] uppercase w-[min-content]">Lorem ipsum dolor sit amet</p>
      <BtnMore />
    </div>
  );
}

function Component2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="h-[15px] relative shrink-0 cursor-pointer transition-all duration-300" 
      style={{ width: isActive ? '40px' : '15px' }}
      data-name="Component 2"
    >
      <div className={`absolute inset-0 rounded-[15px] transition-colors duration-300 ${isActive ? 'bg-[#ffcc00]' : 'bg-[#d9d9d9]'}`} />
    </button>
  );
}

function Frame16({ currentSlide, onSlideChange }: { currentSlide: number; onSlideChange: (index: number) => void }) {
  return (
    <div className="absolute content-stretch flex gap-[16px] inset-[91.45%_45.99%_6.58%_48.7%] items-center z-10">
      {[0, 1, 2].map((index) => (
        <Component2 key={index} isActive={currentSlide === index} onClick={() => onSlideChange(index)} />
      ))}
    </div>
  );
}

function Spot() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    imgRectangle1,
    "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwOTUwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjA5NDEyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="h-[760px] relative shrink-0 w-full" data-name="spot">
      <div className="absolute inset-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-black inset-0 opacity-40" />
          {slides.map((slide, index) => (
            <img 
              key={index}
              alt="" 
              className={`absolute max-w-none object-50%-50% object-cover size-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
              src={slide} 
            />
          ))}
        </div>
      </div>
      <Frame17 />
      <Frame16 currentSlide={currentSlide} onSlideChange={setCurrentSlide} />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[#333333] text-[40px] tracking-[-2px] w-full">ABOUT</p>
      <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[#555555] text-[16px] tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[36px] relative shrink-0 w-[40px]" data-name="Group">
      <div className="absolute inset-[-4.17%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 40">
          <g id="Group">
            <path d={svgPaths.p29eaeb80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p3a2efe40} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p3e337c00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsProfile02() {
  return (
    <div className="bg-[#ffcc00] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[4px] py-[6px] relative rounded-[65px] shrink-0 size-[130px]" data-name="hugeicons:profile-02">
      <Group />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#333333] text-[24px] tracking-[-1.2px] w-full">PROFILE</p>
      <p className="-webkit-box css-tdv2zk font-['Inter:Light',_sans-serif] font-light overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 grow min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center min-w-inherit px-[20px] py-0 relative w-full">
          <HugeiconsProfile02 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-center flex flex-wrap gap-[20px] items-center justify-center relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <Frame20 key={i} />
      ))}
    </div>
  );
}

function About() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[70px] items-center px-0 py-[100px] relative shrink-0 w-[1300px]" data-name="about">
      <Frame18 />
      <Frame23 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 w-[379px]">
      <p className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[#333333] text-[40px] text-center tracking-[-2px] w-full">PORTFOLIO</p>
      <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[#555555] text-[16px] tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Thumb() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative shrink-0 size-[420px]" data-name="thumb">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumb} />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#333333] text-[24px] tracking-[-1.2px] w-full">DESIGN 01</p>
      <p className="[white-space-collapse:collapse] font-['Inter:Light',_sans-serif] font-light overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumb />
      <Frame33 />
    </div>
  );
}

function Thumb1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative shrink-0 size-[420px]" data-name="thumb">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumb1} />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#333333] text-[24px] tracking-[-1.2px] w-full">DESIGN 01</p>
      <p className="[white-space-collapse:collapse] font-['Inter:Light',_sans-serif] font-light overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumb1 />
      <Frame35 />
    </div>
  );
}

function Thumb2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative shrink-0 size-[420px]" data-name="thumb">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumb2} />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#333333] text-[24px] tracking-[-1.2px] w-full">DESIGN 01</p>
      <p className="[white-space-collapse:collapse] font-['Inter:Light',_sans-serif] font-light overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumb2 />
      <Frame37 />
    </div>
  );
}

function Thumb3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative shrink-0 size-[420px]" data-name="thumb">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumb3} />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#333333] text-[24px] tracking-[-1.2px] w-full">DESIGN 01</p>
      <p className="[white-space-collapse:collapse] font-['Inter:Light',_sans-serif] font-light overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumb3 />
      <Frame38 />
    </div>
  );
}

function Thumb4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative shrink-0 size-[420px]" data-name="thumb">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumb4} />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#333333] text-[24px] tracking-[-1.2px] w-full">DESIGN 01</p>
      <p className="[white-space-collapse:collapse] font-['Inter:Light',_sans-serif] font-light overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumb4 />
      <Frame39 />
    </div>
  );
}

function Thumb5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative shrink-0 size-[420px]" data-name="thumb">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumb5} />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#333333] text-[24px] tracking-[-1.2px] w-full">DESIGN 01</p>
      <p className="[white-space-collapse:collapse] font-['Inter:Light',_sans-serif] font-light overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumb5 />
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-center flex flex-wrap gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Frame34 />
      <Frame36 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[70px] items-center px-0 py-[100px] relative shrink-0 w-[1300px]">
      <Frame32 />
      <Frame41 />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="bg-[#eeeeee] content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="portfolio">
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[normal] not-italic relative shrink-0 text-white w-[379px]">
      <p className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[40px] text-center tracking-[-2px] w-full">CONTACT US</p>
      <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[16px] tracking-[-0.8px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Component 8">
      <div className="absolute bg-white inset-0" />
      <input 
        type="text"
        placeholder="YOUR NAME ?"
        className="absolute inset-0 font-['Inter:Medium',_sans-serif] font-medium leading-[normal] px-[20px] not-italic text-[#a4a4a4] text-[16px] tracking-[-0.8px] uppercase bg-transparent outline-none"
      />
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Component 9">
      <div className="absolute bg-white inset-0" />
      <input 
        type="email"
        placeholder="YOUR EMAIL?"
        className="absolute inset-0 font-['Inter:Medium',_sans-serif] font-medium leading-[normal] px-[20px] not-italic text-[#a4a4a4] text-[16px] tracking-[-0.8px] uppercase bg-transparent outline-none"
      />
    </div>
  );
}

function Component10() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Component 10">
      <div className="absolute bg-white inset-0" />
      <input 
        type="tel"
        placeholder="YOUR PHONE.?"
        className="absolute inset-0 font-['Inter:Medium',_sans-serif] font-medium leading-[normal] px-[20px] not-italic text-[#a4a4a4] text-[16px] tracking-[-0.8px] uppercase bg-transparent outline-none"
      />
    </div>
  );
}

function Component11() {
  return (
    <div className="h-[243px] relative shrink-0 w-full" data-name="Component 11">
      <div className="absolute bg-white inset-0" />
      <textarea 
        placeholder="YOUR MESSAGE?"
        className="absolute inset-0 font-['Inter:Medium',_sans-serif] font-medium leading-[normal] p-[20px] not-italic text-[#a4a4a4] text-[16px] tracking-[-0.8px] uppercase bg-transparent outline-none resize-none"
      />
    </div>
  );
}

function BtnMore1() {
  return (
    <button className="bg-[#ffc800] h-[52px] relative rounded-[6px] shrink-0 w-full hover:bg-[#e6b500] transition-colors" data-name="btn-more">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[52px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <div className="flex flex-col font-['Montserrat:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center text-nowrap uppercase">
            <p className="leading-[normal] whitespace-pre">send</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[638px]">
      <Component8 />
      <Component9 />
      <Component10 />
      <Component11 />
      <BtnMore1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[499px] overflow-auto relative shrink-0 w-[642px]">
      <div className="absolute h-[1177px] left-[-318px] top-[-111px] w-[1300px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-center flex flex-wrap gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Frame31 />
      <Frame30 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[70px] items-center px-0 py-[100px] relative shrink-0 w-[1300px]">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-[#575757] content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="contact">
      <Frame45 />
    </div>
  );
}

function FootSns() {
  return (
    <button className="[grid-area:1_/_1] ml-0 mt-0 relative size-[45px] cursor-pointer hover:opacity-80 transition-opacity" data-name="foot-sns">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="foot-sns">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, black)" id="Ellipse 8" r="22.5" />
          <path d={svgPaths.p720ad00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function FootSns1() {
  return (
    <button className="[grid-area:1_/_1] ml-[51px] mt-0 relative size-[45px] cursor-pointer hover:opacity-80 transition-opacity" data-name="foot-sns">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="foot-sns">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, black)" id="Ellipse 8" r="22.5" />
          <path d={svgPaths.pf377b80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function FootSns2() {
  return (
    <button className="[grid-area:1_/_1] ml-[102px] mt-0 relative size-[45px] cursor-pointer hover:opacity-80 transition-opacity" data-name="foot-sns">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="foot-sns">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, black)" id="Ellipse 8" r="22.5" />
          <path d={svgPaths.pc5a8d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <FootSns />
      <FootSns1 />
      <FootSns2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[321px] items-center justify-between leading-[0] px-0 py-[60px] relative shrink-0 w-[1300px]" data-name="footer">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#212529] text-[14.4px] text-center text-nowrap uppercase">
        <p className="leading-[21.6px] whitespace-pre">Copyright © Your Website 2024</p>
      </div>
      <Group14 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#212529] text-[14.4px] text-center text-nowrap uppercase">
        <p className="leading-[21.6px] whitespace-pre">{`Privacy      Policy`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[1920px]" data-name="container">
      <Spot />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

function About1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="ABOUT">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.7px] whitespace-pre">ABOUT</p>
    </div>
  );
}

function Sub11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="SUB1-1">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.6px] whitespace-pre">SUB01</p>
    </div>
  );
}

function Frame5({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`bg-[#ffcc00] relative shrink-0 w-full transition-all duration-300 overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[20px] relative w-full">
          <Sub11 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <button 
      className="box-border content-stretch flex flex-col gap-[9px] items-center overflow-visible p-0 relative shrink-0 w-[77px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <About1 />
      <Frame5 isOpen={isOpen} />
    </button>
  );
}

function About2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="ABOUT">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.7px] whitespace-pre">PORTFOLIO</p>
    </div>
  );
}

function Sub12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="SUB1-1">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.6px] whitespace-pre">SUB01</p>
    </div>
  );
}

function Sub13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="SUB1-1">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.6px] whitespace-pre">SUB02</p>
    </div>
  );
}

function Frame6({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`bg-[#ffcc00] relative shrink-0 w-full transition-all duration-300 overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[20px] relative w-full">
          <Sub12 />
          {[...Array(2).keys()].map((_, i) => (
            <Sub13 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <button 
      className="box-border content-stretch flex flex-col gap-[9px] items-center overflow-visible p-0 relative shrink-0 w-[77px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <About2 />
      <Frame6 isOpen={isOpen} />
    </button>
  );
}

function About3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="ABOUT">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.7px] whitespace-pre">CONTACT</p>
    </div>
  );
}

function Sub15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="SUB1-1">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.6px] whitespace-pre">SUB01</p>
    </div>
  );
}

function Sub16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="SUB1-1">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.6px] whitespace-pre">SUB02</p>
    </div>
  );
}

function Frame7({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`bg-[#ffcc00] relative shrink-0 w-full transition-all duration-300 overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[20px] relative w-full">
          <Sub15 />
          {[...Array(2).keys()].map((_, i) => (
            <Sub16 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <button 
      className="box-border content-stretch flex flex-col gap-[9px] items-center overflow-visible p-0 relative shrink-0 w-[77px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <About3 />
      <Frame7 isOpen={isOpen} />
    </button>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch cursor-pointer flex gap-[30px] items-start px-0 py-[20px] relative shrink-0">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[310px] top-[68px] w-[1300px] z-20" data-name="header">
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white tracking-[-1.6px] uppercase whitespace-pre">Figma</p>
      <Frame14 />
    </div>
  );
}

export default function Desktop2() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 2">
      <Container />
      <Header />
    </div>
  );
}

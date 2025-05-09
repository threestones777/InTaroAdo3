import six1 from "@/assets/six1.png";
import six2 from "@/assets/six2.png";
import six3 from "@/assets/six3.png";
import six4 from "@/assets/six4.png";
import six5 from "@/assets/six5.png";
import six6 from "@/assets/six6.png";
import six7 from "@/assets/six7.png";
import six8 from "@/assets/six8.png";
import six9 from "@/assets/six9.png";
import six10 from "@/assets/six10.png";
import six11 from "@/assets/six11.png";
import six12 from "@/assets/six12.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

const mapList3 = (data = []) => {
  return (
    <div className="w-839 mx-auto flex justify-between text-center">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-160 h-107 bg-[#EEF5FF] text-center rounded-20 wow animate__animated animate__fadeInUp`}
          >
            <img src={item.img} className="w-60 h-60 mx-auto mt-10 mb-6" />
            <p className={`text-16 leading-22 font-medium text-[#1F2024]`}>
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapList4 = (data = []) => {
  return (
    <div className="w-240 mt-30 flex justify-between">
      {data.map((item, index) => {
        return (
          <div key={index} className={`w-40 h-40`}>
            <img src={item.img} className="w-40 h-40" />
          </div>
        );
      })}
    </div>
  );
};

export default function Six({ onRequest }) {
  const handleClick = (action) => {
    console.log(action);
    // 向父组件发送请求
    onRequest({ action });
  };
  const mapList = (data = []) => {
    return (
      <div className="">
        {data.map((item, index) => {
          return (
            <div key={index} className="">
              <div
                onClick={() => handleClick(item.action)}
                className="block font-normal text-14 leading-22 mb-12 text-[rgba(255,255,255,0.5)] hover:text-[#fff] hover:cursor-pointer"
              >
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="relative overflow-hidden">
      <div className="flex w-full">
        <div className="font-['Source_Han_Sans'] w-[calc(50%_-_1px)] flex-shrink-0 h-488 bg-[#fff] pt-75 pl-120 pr-73 relative">
          <div className="text-36 font-bold text-[#000]">{i18nKeys.six_1}</div>
          <div className="w-550 mt-22 text-16 leading-24 font-normal text-[#000]">
            <div dangerouslySetInnerHTML={{ __html: i18nKeys.six_2 }} />
          </div>
          <div className="absolute bottom-46">
            {mapList3([
              {
                img: six2,
                title: `${i18nKeys.six_3}`,
              },
              {
                img: six3,
                title: `${i18nKeys.six_4}`,
              },
              {
                img: six4,
                title: `${i18nKeys.six_5}`,
              },
              {
                img: six5,
                title: `${i18nKeys.six_6}`,
              },
              {
                img: six6,
                title: `${i18nKeys.six_7}`,
              },
            ])}
          </div>
        </div>
        <div
          className="w-1/2 flex-shrink-0 h-488 pt-17 pl-208 overflow-hidden"
          style={{
            background: "linear-gradient( 180deg, #E6F6FF 0%, #FFFFFF 100%)",
          }}
        >
          <div className="w-430 h-550 bg-white rounded-20">
            <img src={six1} className="w-384 h-515 mx-auto mt-17" />
          </div>
        </div>
      </div>
      <div className="h-315 bg-[#1676FE] pt-56 pl-120 pr-115 pb-22 flex justify-between text-[#fff]">
        <div className="w-807 h-231">
          <img src={six7} className="w-178 h-39" />
          <div className="font-['Poppins'] mt-30 text-14 leading-20 font-normal">
            <p className="">{i18nKeys.six_8}</p>
            <p className="">{i18nKeys.six_9}</p>
          </div>
          {mapList4([
            {
              img: six8,
            },
            {
              img: six9,
            },
            {
              img: six10,
            },
            {
              img: six11,
            },
            {
              img: six12,
            },
          ])}
          <div className="text-[rgba(255,255,255,0.5)] mt-30 text-14 leading-22 font-normal">
            <span>Power by AURORA TECHNOLOGY INC</span>
            <span className="ml-20">
              Copyright © 2020. All rights reserved.
            </span>
          </div>
        </div>
        <div className="w-367 h-237 flex justify-between">
          <div className="w-101 h-340">
            <div className="text-[#fff] font-bold text-14 leading-24 mb-21">
              {i18nKeys.six_10}
            </div>
            {mapList([
              {
                title: `${i18nKeys.six_11}`,
                action: 4,
              },
              {
                title: `@Telegram_`,
                action: 4,
              },
              {
                title: `Linkdln`,
                action: 4,
              },
              {
                title: `Twitter`,
                action: 4,
              },
              {
                title: `Instagram`,
                action: 4,
              },
              {
                title: `Facebook`,
                action: 4,
              },
            ])}
          </div>
          <div className="w-91 h-340">
            <div className="text-[#fff] font-bold text-14 leading-24 mb-21">
              {i18nKeys.six_12}
            </div>
            {mapList([
              {
                title: `${i18nKeys.six_13}`,
                action: 1,
              },
              {
                title: `${i18nKeys.six_14}`,
                action: 2,
              },
              {
                title: `${i18nKeys.six_15}`,
                action: 4,
              },
              {
                title: `${i18nKeys.six_16}`,
                action: 3,
              },
              {
                title: `${i18nKeys.six_17}`,
                action: 4,
              },
            ])}
          </div>
          <div className="w-118">
            <div className="text-[#fff] font-bold text-14 leading-24 mb-21">
              {i18nKeys.six_18}
            </div>
            {mapList([
              {
                title: `${i18nKeys.six_19}`,
                action: 5,
              },
              {
                title: `${i18nKeys.six_20}`,
                action: 4,
              },
              {
                title: `${i18nKeys.six_21}`,
                action: 4,
              },
            ])}
          </div>
        </div>
      </div>
    </div>
  );
}

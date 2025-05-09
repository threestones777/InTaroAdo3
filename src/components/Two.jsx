import two1 from "@/assets/two1.png";
import two2 from "@/assets/two2.png";
import two3 from "@/assets/two3.png";
import two4 from "@/assets/two4.png";
import two5 from "@/assets/two5.png";
import two6 from "@/assets/two6.png";
import two7 from "@/assets/two7.png";
import two8 from "@/assets/two8.png";
import two9 from "@/assets/two9.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

const mapList3 = (data = []) => {
  return (
    <div className="w-1200 pt-40 mx-auto flex justify-between text-center">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-224 h-316 bg-white text-center rounded-16 wow animate__animated animate__fadeInUp`}
          >
            <img src={item.img} className="w-91 h-91 mx-auto mt-26 mb-24" />
            <p
              className={`w-200 mx-auto mb-10 text-20 leading-24 font-medium text-[#000]`}
            >
              {item.title}
            </p>
            <p
              className={`${item.pd} text-14 leading-20 font-normal text-[#475259]`}
            >
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapList4 = (data = []) => {
  return (
    <div className="w-1200 pt-30 mx-auto flex justify-between">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-285 h-250 bg-[#EFF5FF] rounded-25 text-[#000] ${
              localStorage.lang === "en" ? "px-18" : "px-36"
            } wow animate__animated animate__fadeInUp hover:bg-[#3C8CFF] hover:cursor-pointer hover:text-[#fff] relative`}
          >
            <img
              src={item.img}
              className="w-106 h-106 absolute top-15 right-16"
            />
            <p className={`mx-auto mt-108 text-24 leading-24 font-bold`}>
              {item.title}
            </p>
            <p
              className={`mt-16 text-14 leading-20 font-normal ${
                localStorage.lang === "en" ? item.descP : ""
              }`}
            >
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function Two() {
  return (
    <div className="">
      <div>
        {mapList3([
          {
            img: two1,
            title: `${i18nKeys.two_1}`,
            desc: `${i18nKeys.two_2}`,
            pd: "px-43",
          },
          {
            img: two2,
            title: `${i18nKeys.two_3}`,
            desc: `${i18nKeys.two_4}`,
            pd: "px-43",
          },
          {
            img: two3,
            title: `${i18nKeys.two_5}`,
            desc: `${i18nKeys.two_6}`,
            pd: "px-43",
          },
          {
            img: two4,
            title: `${i18nKeys.two_7}`,
            desc: `${i18nKeys.two_8}`,
            pd: "px-40",
          },
          {
            img: two5,
            title: `${i18nKeys.two_9}`,
            desc: `${i18nKeys.two_10}`,
            pd: "px-43",
          },
        ])}
      </div>

      <div className="bg-white h-401 mt-48">
        <p className="text-center text-[#2C313B] text-24 font-bold pt-35">
          {i18nKeys.two_11}
        </p>
        <div>
          {mapList4([
            {
              img: two6,
              title: `${i18nKeys.two_12}`,
              desc: `${i18nKeys.two_13}`,
              descP: `pr-10`,
            },
            {
              img: two7,
              title: `${i18nKeys.two_14}`,
              desc: `${i18nKeys.two_15}`,
              descP: `pr-0`,
            },
            {
              img: two8,
              title: `${i18nKeys.two_16}`,
              desc: `${i18nKeys.two_17}`,
              descP: `pr-15`,
            },
            {
              img: two9,
              title: `${i18nKeys.two_18}`,
              desc: `${i18nKeys.two_19}`,
              descP: `pr-10`,
            },
          ])}
        </div>
      </div>
    </div>
  );
}

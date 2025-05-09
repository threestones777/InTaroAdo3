import bg from "@/assets/bg.png";
import bg1 from "@/assets/bg1.png";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";
import partner5 from "@/assets/partner5.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
const Images = [
  { img: partner1, css: "mt-31" },
  { img: partner2, css: "mt-25" },
  { img: partner3, css: "mt-28" },
  { img: partner4, css: "mt-25" },
  { img: partner5, css: "mt-21" },
];

export default function One({ onRequest }) {
  const handleClick = () => {
    // 向父组件发送请求
    onRequest({ action: 4 });
  };
  const handleClick1 = () => {
    // 向父组件发送请求
    onRequest({ action: 1 });
  };
  return (
    <div className="pt-95">
      <div className="w-full h-481 flex justify-between">
        <div className="w-[calc(100%_-_720px)]">
          <div
            className={`z-20 float-right ${
              localStorage.lang === "en"
                ? "w-710 relative left-110"
                : "w-548 mr-54"
            } `}
          >
            <p
              className={`text-[#000] text-64  ${
                localStorage.lang === "en" ? "leading-72" : "leading-96"
              } font-bold mt-106`}
            >
              {i18nKeys.one_1}
            </p>
            <p
              className={`text-[#333] text-16 leading-24 font-normal mt-20 ${
                localStorage.lang === "en" ? "w-727" : ""
              }`}
            >
              {i18nKeys.one_2}
            </p>
            <p className="mt-40">
              <span
                onClick={handleClick}
                className="z-30 inline-block w-160 h-48 rounded-50 text-center py-16 hover:cursor-pointer hover:opacity-80 relative"
                style={{
                  background:
                    "linear-gradient( 270deg, #49EDFF 0%, #3C8CFF 95%)",
                }}
              >
                <span className="z-10 w-117 h-60 bg-[rgba(56,120,255,0.5)] blur-[54px] absolute left-20"></span>
                <span className="text-[#FCFCFD] text-18 leading-16 font-normal relative">
                  {i18nKeys.one_3}
                </span>
              </span>
              <span
                onClick={handleClick1}
                className="inline-block w-160 h-48 rounded-50 text-center py-16 ml-20 text-[#0055FF] text-18 leading-16 font-normal border-1 border-[#0055FF] hover:cursor-pointer hover:opacity-80"
              >
                {i18nKeys.one_4}
              </span>
            </p>
          </div>
        </div>
        <div className="w-720 pt-106 relative">
          <img src={bg} className="w-720 h-277" />
          <img src={bg1} className="absolute w-389 h-400 top-40 left-203" />
        </div>
      </div>
      <div></div>
      <div className="w-1200 h-200 bg-white rounded-35 mx-auto relative shadow-[40px_50px_30px_40px_rgba(13,16,37,0.06)]">
        <div className="text-center text-[#2C313B] text-24 font-bold pt-38 pb-21">
          {i18nKeys.one_5}
        </div>
        <div className="flex justify-between relative bottom-10">
          {Images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`w-230 h-96 overflow-hidden`}
            >
              <img src={image.img} className={`mx-auto ${image.css}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

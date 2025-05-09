import four1 from "@/assets/four1.png";
import four2 from "@/assets/four2.png";
import four3 from "@/assets/four3.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

export default function Four({ onRequest }) {
  const handleClick1 = () => {
    // 向父组件发送请求
    onRequest({ action: 4 });
  };
  return (
    <div className="h-805 pb-66 relative overflow-hidden">
      <div
        className="w-720 h-900 absolute bottom-0 right-0"
        style={{
          backgroundImage: `url(${four1})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={four2} className="w-420 h-420 relative top-176 left-109" />
      </div>
      <div className="flex justify-between">
        <div
          className="h-570 w-[calc(50%_-_1px)]"
          style={{
            background: "linear-gradient( 180deg, #E6F6FF 0%, #FFFFFF 100%)",
          }}
        >
          <div
            className={`w-448 float-right mt-169 relative ${
              localStorage.lang === "en" ? "left-17" : "left-23"
            }`}
          >
            <p
              className={`${
                localStorage.lang === "en" ? "w-500" : "w-400"
              } text-[#000] text-36 leading-64 font-bold`}
            >
              {i18nKeys.four_1}
            </p>
            <p
              className={`text-[#666] text-16 leading-24 font-normal mt-20 ${
                localStorage.lang === "en" ? "w-460" : ""
              }`}
            >
              {i18nKeys.four_2}
            </p>
            <span
              onClick={handleClick1}
              className="inline-block w-184 h-55 rounded-50 text-center bg-[rgba(0,85,255,0)] py-18 mt-40 text-[#0055FF] text-16 leading-19 font-normal border-1 border-[#3C8CFF] hover:cursor-pointer hover:opacity-80"
            >
              {i18nKeys.four_3}
            </span>
          </div>
        </div>
        <div className="h-570 w-[50%]"></div>
      </div>
      <div className="w-1200 h-169 rounded-20 bg-white mx-auto relative px-32 py-29 flex justify-between shadow-[40px_30px_30px_40px_rgba(13,16,37,0.06)]">
        <div className="flex">
          <div>
            <p className="text-[#000] text-20 leading-24 font-bold mt-27">
              {i18nKeys.four_4}
            </p>
            <p className="text-[#3D4B72] text-14 leading-24 font-normal mt-10">
              {i18nKeys.four_5}
            </p>
          </div>
          <span
            onClick={handleClick1}
            className="inline-block w-160 h-56 rounded-90 text-center bg-[rgba(60,140,255,0)] py-20 mt-28 ml-20 text-[#3C8CFF] text-16 leading-16 font-normal border-1 border-[#3C8CFF] hover:cursor-pointer hover:opacity-80"
          >
            {i18nKeys.four_6}
          </span>
        </div>
        <div>
          <img src={four3} className="w-111 h-111" />
        </div>
      </div>
    </div>
  );
}

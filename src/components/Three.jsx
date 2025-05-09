import three1 from "@/assets/three1.png";
import three2 from "@/assets/three2.png";
import three3 from "@/assets/three3.png";
import three4 from "@/assets/three4.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

export default function Three({ onRequest }) {
  const handleClick1 = () => {
    // 向父组件发送请求
    onRequest({ action: 4 });
  };
  const mapList3 = (data = []) => {
    return (
      <div className="w-1200 mx-auto flex justify-between text-center">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-388 h-413 ${item.color} rounded-25 wow animate__animated animate__fadeInUp relative`}
            >
              <img
                src={item.img}
                className={`w-92 h-92 mx-auto ${
                  localStorage.lang === "en" ? "mt-32 mb-5" : "mt-52 mb-25"
                }`}
              />
              <p
                className={`${
                  localStorage.lang === "en"
                    ? "w-280 mx-auto " + item.textMt
                    : "mb-23"
                } text-24 leading-28 font-bold ${item.text}`}
              >
                {item.title}
              </p>
              <p
                className={`${
                  localStorage.lang === "en" ? "px-26" : "px-34"
                } text-14 leading-20 font-normal ${item.text1}`}
              >
                {item.desc}
              </p>
              <p
                onClick={handleClick1}
                className={`mx-auto w-160 h-48 rounded-90 py-11 ${
                  localStorage.lang === "en" ? item.btnMt : "absolute bottom-41"
                } left-121 ${
                  item.btnCss
                } hover:cursor-pointer hover:opacity-80`}
              >
                <span className="text-[#0055FF] text-16 leading-16 font-normal">
                  {item.btnText}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="">
      <div
        className="w-full h-303 text-center"
        style={{
          backgroundImage: `url(${three1})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className={`${
            localStorage.lang === "en"
              ? "w-580 mx-auto leading-48"
              : "leading-64"
          } text-[#000] text-40  font-bold pt-52`}
        >
          {i18nKeys.three_1}
        </p>
        <p
          className={`w-550 mx-auto text-[#333] text-16 leading-28 font-normal mt-10`}
        >
          {i18nKeys.three_2}
        </p>
        <p
          onClick={handleClick1}
          className={`mx-auto w-160 h-48 rounded-50 py-13 ${
            localStorage.lang === "en" ? "mt-10" : "mt-25"
          } hover:cursor-pointer hover:opacity-80`}
          style={{
            background: "linear-gradient( 270deg, #49EDFF 0%,#3C8CFF  96%)",
          }}
        >
          <span className="text-[#FCFCFD] text-18 leading-16 font-normal">
            {i18nKeys.three_3}
          </span>
        </p>
      </div>
      <div className="pt-22 pb-63">
        {mapList3([
          {
            img: three2,
            color: "bg-[#fff]",
            text: "text-[#3D3D3D]",
            textMt: "mb-20",
            text1: "text-[#333]",
            title: `${i18nKeys.three_4}`,
            desc: `${i18nKeys.three_5}`,
            btnText: `${i18nKeys.three_6}`,
            btnCss: "bg-[rgba(0,85,255,0)] border-1 border-[#0055FF]",
            btnMt: "mt-20",
          },
          {
            img: three3,
            color: "bg-[#3C8CFF]",
            text: "text-[#fff]",
            textMt: "mb-20",
            text1: "text-[#fff] opacity-80",
            title: `${i18nKeys.three_7}`,
            desc: `${i18nKeys.three_8}`,
            btnText: `${i18nKeys.three_9}`,
            btnCss: "bg-white",
            btnMt: "mt-20",
          },
          {
            img: three4,
            color: "bg-[#DDF1FC]",
            text: "text-[#3D3D3D]",
            textMt: "mb-10",
            text1: "text-[#333]",
            title: `${i18nKeys.three_10}`,
            desc: `${i18nKeys.three_11}`,
            btnText: `${i18nKeys.three_12}`,
            btnCss: " bg-[rgba(0,85,255,0)] border-1 border-[#0055FF]",
            btnMt: "mt-10",
          },
        ])}
      </div>
    </div>
  );
}

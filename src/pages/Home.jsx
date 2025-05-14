import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.png";
import down from "@/assets/down.png";
import up from "@/assets/up.png";
import lang1 from "@/assets/lang1.png";
import lang2 from "@/assets/lang2.png";
import language1 from "@/assets/language1.png";
import language2 from "@/assets/language2.png";
import mouse from "@/assets/mouse.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import One from "@/components/One";
import Two from "@/components/Two";
import Three from "@/components/Three";
import Four from "@/components/Four";
import Five from "@/components/Five";
import Six from "@/components/Six";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.lang || "cn"
  );

  // const [scrollY, setScrollY] = useState(0);
  const counterRef = useRef(null);
  const sectionsRef = useRef([]);
  const observerRef = useRef(null);
  const languageRef = useRef(null);

  const menuItems = [
    { cn: "首页", en: "Home" },
    { cn: "解決方案", en: "Solution" },
    { cn: "產品", en: "Product" },
    { cn: "文件", en: "Document" },
    { cn: "聯絡我們", en: "Contact us" },
    { cn: "關於我們", en: "About Us" },
  ];

  const dealScroll = (index) => {
    let scroll = 0;
    switch (index) {
      case 0:
        scroll = 0;
        break;
      case 1:
        scroll = 810;
        break;
      case 2:
        scroll = 1620;
        break;
      case 3:
        scroll = 2421;
        break;
      case 4:
        scroll = 3226;
        break;
      case 5:
        scroll = 4031;
        break;
      default:
        scroll = 0;
    }
    window.scrollTo(0, scroll);
  };

  // 处理菜单点击
  const handleMenuClick = (index) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
    console.log(index);
    dealScroll(index);
  };

  // 语言选项数据
  const languages = [
    { code: "cn", img: language1, name: "繁体中文" },
    { code: "en", img: language2, name: "English" },
  ];

  const toggleLanguage = () => {
    setLanguageOpen(true);
  };
  const toggleLanguage2 = () => {
    setLanguageOpen(false);
  };

  const handleLanguageSelect = (lang) => {
    setCurrentLanguage(lang.code);
    localStorage.lang = lang.code;
    window.location.reload();
    setLanguageOpen(false);
  };

  const handleChildRequest = (data) => {
    // 处理子组件的请求
    console.log(6666, data);
    sectionsRef.current[data.action]?.scrollIntoView({
      behavior: "smooth",
    });
    dealScroll(data.action);
  };

  const toJump = (data) => {
    // 处理子组件的请求
    console.log(88888, data);
    sectionsRef.current[data.action]?.scrollIntoView({
      behavior: "smooth",
    });
    dealScroll(data.action);
  };

  // 设置Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.findIndex(
            (section) => section === entry.target
          );
          setActiveIndex(index);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);

    // 开始观察所有section
    sectionsRef.current.forEach((section) => {
      if (section) observerRef.current.observe(section);
    });

    return () => observerRef.current.disconnect();
  }, []);

  const navCss = (index) => {
    if (index === 3) {
      return "bg-[linear-gradient(to_right,#E6F6FF_50%,white_50%)]";
    } else if (index === 5) {
      return "bg-[linear-gradient(to_right,white_50%,#E6F6FF_50%)]";
    } else {
      return "bg-[#E6F6FF]";
    }
  };

  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <nav
        className={`min-w-page fixed top-0 w-full ${navCss(activeIndex)} z-50`}
      >
        <div className="h-95 mx-auto flex items-center justify-between">
          {/* Logo */}
          <img
            onClick={() => {
              toJump({ action: 0 });
            }}
            src={logo}
            className="w-144 h-39 relative top-0 left-80 hover:cursor-pointer"
          />

          {/* 导航菜单 */}
          <div className="flex gap-32">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(index)}
                className={`transition-colors ${
                  activeIndex === index
                    ? "text-[#3C8CFF] font-bold"
                    : "text-[#4E5F78] font-normal hover:text-[#3C8CFF]"
                } text-16`}
              >
                {item[currentLanguage]}
              </button>
            ))}
          </div>

          <div className="relative right-86 top-10 flex space-x-32">
            {/* 语言切换下拉菜单 */}
            <div
              onMouseEnter={toggleLanguage}
              ref={languageRef}
              className={`w-106 h-22 flex justify-between ${
                languageOpen ? "text-[#3C8CFF]" : "text-[#838B9C]"
              } hover:cursor-pointer`}
            >
              <img
                src={languageOpen ? lang2 : lang1}
                className="w-16 h-16 relative top-3"
              />
              <span className="text-14 leading-22 font-normal">
                {i18nKeys.lang_1}
              </span>
              <img
                src={languageOpen ? up : down}
                className={`w-24 h-24 relative bottom-3 transition-transform`}
              />

              {languageOpen && (
                <div
                  onMouseLeave={toggleLanguage2}
                  className="w-135 text-center p-17 pb-0 absolute z-10 left-[0px] top-[34px] origin-top-right bg-white shadow-[0px_80px_60px_10px_rgba(60,140,255,0.2)] rounded-16"
                >
                  <div className="">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className={`block rounded-16 px-4 py-2 text-14 leading-16 hover:text-[#1676FE] ${
                          currentLanguage === lang.code
                            ? "text-[#000]"
                            : "text-[#999]"
                        } flex justify-center mb-20 hover:cursor-pointer`}
                        onClick={() => handleLanguageSelect(lang)}
                      >
                        <img src={lang.img} className="h-16 w-16 mr-16" />
                        <p>{lang.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* 登录 */}
            <div
              onClick={() => {
                window.location.href = "https://merchant.wewallex.com/#/login";
              }}
              style={{
                background: "linear-gradient( 90deg, #3C8CFF 0%, #49EDFF 95%)",
              }}
              className="text-14 text-[#fff] rounded-25 font-normal py-9 px-34 hover:opacity-80 hover:cursor-pointer relative bottom-10"
            >
              {i18nKeys.login_1}
            </div>
          </div>
        </div>
      </nav>

      {/* 内容区域 */}
      <div ref={counterRef} onMouseEnter={toggleLanguage2}>
        <div
          className="h-900"
          style={{
            background: "linear-gradient( 180deg, #E6F6FF 1%, #FFFFFF 100%)",
          }}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <One onRequest={handleChildRequest} />
        </div>
        <div
          className="h-815"
          style={{
            background: "linear-gradient( 180deg, #E6F6FF 1%, #FFFFFF 100%)",
          }}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <Two />
        </div>
        <div
          className=""
          style={{
            background: "linear-gradient( 180deg, #E6F6FF 1%, #FFFFFF 100%)",
          }}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <Three onRequest={handleChildRequest} />
        </div>
        <div className="" ref={(el) => (sectionsRef.current[3] = el)}>
          <Four onRequest={handleChildRequest} />
        </div>
        <div
          className=""
          style={{
            background: "linear-gradient( 180deg, #E6F6FF 0%, #FFFFFF 100%)",
          }}
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <Five />
        </div>
        <div className="" ref={(el) => (sectionsRef.current[5] = el)}>
          <Six onRequest={toJump} />
        </div>
        {/* 进度条 */}
        <div className="w-144 h-6 bg-[#D3E4F0] fixed bottom-190 right-15 rotate-90">
          <div
            className="w-full h-6 bg-[#0055FF] transition-all duration-300 relative"
            style={{
              width: `24px`,
              left: `${(activeIndex / menuItems.length) * 100}%`,
            }}
          />
        </div>
        <img src={mouse} className="w-24 h-24 fixed bottom-82 right-76" />
      </div>
    </div>
  );
}

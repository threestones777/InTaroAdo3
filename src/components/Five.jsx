import five1 from "@/assets/five1.png";
import five2 from "@/assets/five2.png";
import five3 from "@/assets/five3.png";
import five4 from "@/assets/five4.png";
import arrowRight from "@/assets/arrow-right.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

export default function Five() {
  function checkName() {
    let name = document.getElementById("name");
    if (name.value) {
      name.setCustomValidity("");
    } else if (name.validity.valueMissing) {
      name.setCustomValidity(`${i18nKeys.invalid_1}`);
      return false;
    }
    if (name.validity.typeMismatch) {
      name.setCustomValidity(`${i18nKeys.invalid_2}`);
      return false;
    }
  }
  function checkEmail() {
    let email = document.getElementById("email");
    if (email.value) {
      email.setCustomValidity("");
    } else if (email.validity.valueMissing) {
      email.setCustomValidity(`${i18nKeys.invalid_1}`);
      return false;
    }
    if (email.validity.typeMismatch) {
      email.setCustomValidity(`${i18nKeys.invalid_2}`);
      return false;
    }
  }
  function checkPhone() {
    let phone = document.getElementById("phone");
    if (phone.value) {
      phone.setCustomValidity("");
    } else if (phone.validity.valueMissing) {
      phone.setCustomValidity(`${i18nKeys.invalid_1}`);
      return false;
    }
    let test = /(^1[3-9]\d{9}$)|(^0\d{2,3}-?\d{7,8}$)/.test(phone.value);
    if (!test) {
      phone.setCustomValidity(`${i18nKeys.invalid_3}`);
      return false;
    }
  }
  function checkAll() {
    checkName();
    checkEmail();
    checkPhone();
  }
  return (
    <div className="h-805 relative pt-49 overflow-hidden">
      <div
        className="w-410 h-437 absolute bottom-0 bg-[-60px_0px]"
        style={{
          backgroundImage: `url(${five1})`,
          backgroundSize: "115% 116%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-848 mx-auto flex justify-between relative">
        <div className="w-400 h-250 absolute right-10 top-430 blur-[50px] bg-[rgba(60,140,255,0.5)]"></div>
        <div className="w-410 h-618 bg-[#fff] rounded-25 relative">
          <div
            className="h-100"
            style={{
              backgroundImage: `url(${five2})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <form className="w-full text-[#333] text-14 leading-16 font-medium px-38 pt-22">
            <p>{i18nKeys.five_1}</p>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={i18nKeys.five_2}
              className="bg-[#F0F0F0] w-334 h-40 mt-8 mb-25 px-16 py-13 rounded-6"
            />
            <p>{i18nKeys.five_3}</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={i18nKeys.five_4}
              className="bg-[#F0F0F0] w-334 h-40 mt-8 mb-25 px-16 py-13 rounded-6"
              required
            />
            <p>{i18nKeys.five_5}</p>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={i18nKeys.five_6}
              className="bg-[#F0F0F0] w-334 h-40 mt-8 mb-25 px-16 py-13 rounded-6"
              required
            />
            <p>{i18nKeys.five_7}</p>
            <input
              type="text"
              id="msg"
              name="msg"
              placeholder={i18nKeys.five_8}
              className="bg-[#F0F0F0] w-334 h-40 mt-8 mb-8 px-16 py-13 rounded-6"
            />
            <div
              className={`text-[#3D3D3D] ${
                localStorage.lang === "en" ? "h-30" : "h-45"
              } text-12 leading-15 font-normal`}
            >
              <div dangerouslySetInnerHTML={{ __html: i18nKeys.five_9 }} />
            </div>
            <button
              type="submit"
              onClick={checkAll}
              className="block w-334 h-52 p-18 rounded-90 text-18 leading-16 hover:opacity-80 hover:cursor-pointer mt-30 mx-auto text-center  wow animate__animated animate__fadeInUp"
              style={{
                background: "linear-gradient( 91deg, #3C8CFF 0%, #49EDFF 100%)",
              }}
            >
              <span className="text-[#FCFCFD]">{i18nKeys.five_10}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </button>
          </form>
        </div>
        <div className="w-410 h-618 rounded-20 overflow-hidden text-white relative">
          <div className="h-100 bg-[#3C8CFF] px-32 py-29">
            <p className="text-18 leading-15 font-bold">{i18nKeys.five_11}</p>
            <p className="text-14 leading-15 font-normal mt-12">
              {i18nKeys.five_12}
            </p>
          </div>
          <div
            className="h-518 bg-white"
            style={{
              backgroundImage: `url(${five3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={five4} className="w-48 h-48 relative top-213 left-183" />
          </div>
        </div>
      </div>
    </div>
  );
}

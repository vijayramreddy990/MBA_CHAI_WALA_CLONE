import React from "react";

const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {
  return (
    <section className="section" style={{ backgroundColor: backgroundColor }}>
      <div>
        <h3 style={{ color: headingColor }}>{h3}</h3>
        <p style={{ color: textColor }}>{text}</p>
        {hasBtn && (
          <button style={{ backgroundColor: btnBgColor, color: btnColor }}>
            {btnTxt}
          </button>
        )}
        <div>
          <img style={{ width: imgSize }} src={imgSrc} alt="ImgSrc" />
        </div>
      </div>
    </section>
  );
};

export default Section;

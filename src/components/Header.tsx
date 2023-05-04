import React from "react";

type IProps = {
  title: string;
  barColor: string;
  styles?: {};
  className?: string;
};

const Header = ({ title, barColor, styles, className }: IProps) => {
  return (
    <span style={{ position: "relative" }}>
      <span className={className} style={{ ...styles }}>
        {title}
      </span>
      <div
        style={{
          background: barColor,
          width: "75%",
          position: "absolute",
          bottom: "-.8rem",
          height: ".34rem",
          zIndex: 1,
          borderRadius: "2rem",
        }}
      ></div>
    </span>
  );
};

export default Header;

import React from "react";

type IProps = {
  title: string;
  barColor: string;
  styles?: {};
  className?: string;
  center?: boolean;
};

const Header = ({ title, barColor, styles, className, center }: IProps) => {
  return (
    <span style={{ position: "relative" }}>
      <span className={className} style={{ ...styles }}>
        {title}
      </span>
      <div
        style={{
          background: barColor,
          width: center ? "100%" : "75%",
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

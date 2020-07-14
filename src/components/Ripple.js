import React from "react";
// import Icons from "../../assets/icons/icons.svg";
import Icons fron "../images/ripple.svg";

const Icon = ({ name, color, size }) => (
    <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
        <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
);
import React from 'react';

const GradientIcon = ({ icon: IconComponent, size = 24, ...otherProps }) => {
  const gradientColors = [
    '#d16ba5',
    '#ba83ca',
    '#9a9ae1',
    '#69bff8',
    '#52cffe',
    '#5ffbf1',
  ];

  
  const gradientProps = {
    id: "customGradient",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
  };

  return (
    <>
      <svg width={0} height={0}>
        <linearGradient {...gradientProps}>
          {gradientColors.map((color, index) => (
            <stop key={index} offset={`${index * (16.67)}%`} stopColor={color} />
          ))}
        </linearGradient>
      </svg>
      <IconComponent
        sx={{ fill: `url(#customGradient)`, ...otherProps.sx }}
        size={size}
        {...otherProps}
      />
    </>
  );
};

export default GradientIcon;

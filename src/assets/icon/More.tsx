import React from 'react';

interface MoreProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const MoreIcon = ({ size = 20, ...props }: MoreProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1669_948)">
      <path
        d="M9.99992 6.66634C10.9166 6.66634 11.6666 5.91634 11.6666 4.99967C11.6666 4.08301 10.9166 3.33301 9.99992 3.33301C9.08325 3.33301 8.33325 4.08301 8.33325 4.99967C8.33325 5.91634 9.08325 6.66634 9.99992 6.66634ZM9.99992 8.33301C9.08325 8.33301 8.33325 9.08301 8.33325 9.99967C8.33325 10.9163 9.08325 11.6663 9.99992 11.6663C10.9166 11.6663 11.6666 10.9163 11.6666 9.99967C11.6666 9.08301 10.9166 8.33301 9.99992 8.33301ZM9.99992 13.333C9.08325 13.333 8.33325 14.083 8.33325 14.9997C8.33325 15.9163 9.08325 16.6663 9.99992 16.6663C10.9166 16.6663 11.6666 15.9163 11.6666 14.9997C11.6666 14.083 10.9166 13.333 9.99992 13.333Z"
        fill="#F1F2FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1669_948">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default MoreIcon;

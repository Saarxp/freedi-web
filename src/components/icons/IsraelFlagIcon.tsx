import React from "react";

interface Props {
    size?: string;
}

export default function IsraelFlagIcon({ size = "2rem" }: Readonly<Props>) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                y="5.40039"
                width="30"
                height="19.0909"
                rx="0.625"
                fill="white"
            />
            <path
                d="M30 22.1035H0V7.78516L30 7.78531V22.1035Z"
                fill="#226CBC"
            />
            <path d="M30 10.1719H0V19.7173H30V10.1719Z" fill="white" />
            <path
                d="M17.6877 14.9443L19.0314 12.9079H16.344L15.0001 10.8711L13.6561 12.9079H10.9688L12.3125 14.9443L10.9688 16.9808H13.6561L15.0001 19.0176L16.344 16.9808H19.0314L17.6877 14.9443ZM17.7131 13.5739L17.2482 14.2784L16.7834 13.5739H17.7131ZM16.8088 14.9443L15.9045 16.3148H14.0955L13.1913 14.9443L14.0956 13.5739H15.9046L16.8088 14.9443ZM15.0001 12.2032L15.4651 12.9079H14.5351L15.0001 12.2032ZM12.287 13.5739H13.2166L12.7518 14.2784L12.287 13.5739ZM12.287 16.3148L12.7519 15.6103L13.2167 16.3148H12.287ZM15.0001 17.6855L14.5351 16.9808H15.4651L15.0001 17.6855ZM17.2482 15.6103L17.7131 16.3148H16.7835L17.2482 15.6103Z"
                fill="#226CBC"
            />
        </svg>
    );
}

import { FC } from 'react';

const Icon: FC<IIcon> = (props) => {
    const iconPaths = [
        {
            name: 'cloudy-sunny',
            d: 'M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z'
        }
    ];
    return (
        <svg
            className={props.className}
            style={props.style}
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill={props.fill}
            viewBox='0 0 16 16'
        >
            {iconPaths.map((icon) => (
                <path
                    d={props.iconName.toLowerCase() === icon.name ? icon.d : ''}
                    key={icon.name}
                ></path>
            ))}
        </svg>
    );
};

export default Icon;

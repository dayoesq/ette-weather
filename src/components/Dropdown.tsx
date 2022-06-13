import { FC } from 'react';

import { cityDetails } from '../utils/constants';

import styles from '../styles/Dropdown.module.scss';
import general from '../styles/General.module.scss';

const Dropdown: FC = () => {
    return (
        <div className={styles.dropdown}>
            <select
                name='cities'
                id='cities'
                className={`${general['color-black']} ${general['text-sm']} ${general['border__radius--xs']} ${general['border']}`}
            >
                {cityDetails.map((city) => (
                    <option value={city.id} key={city.id}>
                        {city.name}
                    </option>
                ))}
            </select>
            <span>&#9660;</span>
        </div>
    );
};

export default Dropdown;

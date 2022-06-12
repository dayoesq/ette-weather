import { FC } from 'react';

import styles from '../styles/Dropdown.module.scss';
import general from '../styles/General.module.scss';

const Dropdown: FC = () => {
    const cities = [
        { id: undefined, name: 'Kaikki kaupungit' },
        { id: 655195, name: 'Jyväskylä' },
        { id: 660129, name: 'Espoo' },
        { id: 650225, name: 'Kuopio' },
        { id: 634963, name: 'Tampere' }
    ];
    return (
        <div className={styles.dropdown}>
            <select
                name='cities'
                id='cities'
                className={`${general['color-black']} ${general['text-sm']} ${general['border__radius--xs']} ${general['border']}`}
            >
                {cities.map((city) => (
                    <option value={city.id}>{city.name}</option>
                ))}
            </select>
            <span>&#9660;</span>
        </div>
    );
};

export default Dropdown;

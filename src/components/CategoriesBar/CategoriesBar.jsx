import React, { useState } from 'react';

import { CATEGORIES } from '../../utils/categories';

const CategoriesBar = ({ onSelect }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const setCategory = e => {
        const value = e.target.innerText;

        onSelect(value);
        setActiveCategory(value);
    };

    return (
        <>
            {CATEGORIES.map(cat => (
                <div key={cat.name}>
                    <h4>{cat.name}</h4>
                    <ul>
                        {cat.subCategories.map(subCat => (
                            <li
                                key={subCat}
                                onClick={setCategory}
                                className={`cursor-pointer hover:text-yellow ${
                                    activeCategory === subCat ? 'text-yellow font-medium' : ''
                                }`}
                            >
                                {subCat}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default CategoriesBar;

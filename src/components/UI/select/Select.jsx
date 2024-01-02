import React from 'react';

const Select = ({options, DefaultValue, onChange, value}) => {
    return (
            <select
                style={{ height: "30px", width: "200px"}}
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option disabled value={{DefaultValue}}>Сортировка</option>
                {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
    );
};

export default Select;
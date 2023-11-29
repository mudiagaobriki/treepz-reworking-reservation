import React, { useState } from 'react';

const RangeSlider = ({ min, max, step, onChange }) => {
    const [values, setValues] = useState({ lowerValue: min, upperValue: max });

    const handleLowerChange = (event) => {
        const value = Math.min(Number(event.target.value), values.upperValue - step);
        setValues({ ...values, lowerValue: value });
        onChange && onChange({ ...values, lowerValue: value });
    };

    const handleUpperChange = (event) => {
        const value = Math.max(Number(event.target.value), values.lowerValue + step);
        setValues({ ...values, upperValue: value });
        onChange && onChange({ ...values, upperValue: value });
    };

    return (
        <div style={{ width: '100%', margin: '0 auto', position: 'relative' }}>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={values.lowerValue}
                onChange={handleLowerChange}
                style={{
                    width: '100%',
                    position: 'absolute',
                    zIndex: 1,
                    margin: 'auto',
                    background: 'transparent',
                    outline: 'none'
                }}
            />
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={values.upperValue}
                onChange={handleUpperChange}
                style={{
                    width: '100%',
                    position: 'absolute',
                    zIndex: 2,
                    margin: 'auto',
                    background: 'transparent',
                    outline: 'none'
                }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
                {/*<span>{min}</span>*/}
                {/*<span>{max}</span>*/}
            </div>
            <div className="flex items-center justify-between self-stretch mt-5">
                <div className="flex items-center justify-center px-3 py-1 bg-white rounded tz-border-light-3">
                    <span className="text-xs tz-text-gray">NGN</span>
                    <input value={values.lowerValue} type="number" name="" size="5" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs outline-none w-12 h-4 px-1 border-0 focus:ring-0 tz-text-gray" />
                </div>
                <div className="w-4 h-[2px] tz-bg-light-1"></div>
                <div className="flex items-center justify-center px-3 py-1 bg-white rounded tz-border-light-3">
                    <span className="text-xs tz-text-gray">NGN</span>
                    <input value={values.upperValue} type="number" name="" size="5" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-xs outline-none w-12 h-4 px-1 border-0 focus:ring-0 tz-text-gray" />
                </div>
            </div>
            {/*<div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*    <span>{values.lowerValue}</span>*/}
            {/*    <span>{values.upperValue}</span>*/}
            {/*</div>*/}
        </div>
    );
};

export default RangeSlider;

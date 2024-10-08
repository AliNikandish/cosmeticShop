"use client"
import { Box, Slider } from '@mui/material'
import * as React from 'react';


function valuetext(value: number) {
  return `${value}°C`;
}
const minDistance = 100000;

const RangeSlider = () => {
  const [value1, setValue1] = React.useState<number[]>([50000, 1500000]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };


  return (
    <div>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={50000}
        max={1500000}
        style={{
          color:'#f43f5e'
        }}
        size='small'
        
      />
      <div className='text-center'>
        <p className='font-IRANSansMedium text-sm'>{value1[0].toLocaleString()} تومان تا {value1[1].toLocaleString()} تومان</p>
      </div>
    </div>
  );
}

export default RangeSlider
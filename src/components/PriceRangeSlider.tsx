"use client";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  min?: number;
  max?: number;
};

export default function PriceRangeSlider({
  value,
  onChange,
  min = 0,
  max = 5000000,
}: Props) {
  return (
    <div dir="rtl" className="space-y-4 w-full">
      <div className="text-center">
        {/* <span>{value[1].toLocaleString()} تومان</span>
        <span>{value[0].toLocaleString()} تومان</span> */}
                <p className='font-IRANSansMedium text-sm'>{value[1].toLocaleString()} تومان تا {value[0].toLocaleString()} تومان</p>

      </div>

      <Slider
        range
        min={min}
        max={max}
        value={value}
        onChange={(val) => onChange(val as [number, number])}
        trackStyle={[{ backgroundColor: "#f43f5e" }]}
        handleStyle={[
          { borderColor: "#f43f5e", backgroundColor: "#f43f5e" },
          { borderColor: "#f43f5e", backgroundColor: "#f43f5e" },
        ]}
        railStyle={{ backgroundColor: "#e5e7eb" }}
        allowCross={false}
      />
    </div>
  );
}
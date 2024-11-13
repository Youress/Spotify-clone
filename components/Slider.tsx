"use client";

import * as RadixSilder from "@radix-ui/react-slider";

interface SlideProps {
  value?: number;
  onChange?: (value: number) => void;
}
const Slider: React.FC<SlideProps> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return (
    <RadixSilder.Root
      onValueChange={handleChange}
      defaultValue={[1]}
      value={[value]}
      max={1}
      step={0.1}
      aria-label="volume"
      className="relative flex items-center select-none touch-none w-full h-10"
    >
      <RadixSilder.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
        <RadixSilder.Range className="absolute bg-white rounded-full h-full" />
      </RadixSilder.Track>
    </RadixSilder.Root>
  );
};

export default Slider;

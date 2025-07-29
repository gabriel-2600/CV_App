import type { Dispatch, SetStateAction } from "react";

interface SectionHeaderProps {
  label: string;
  number: number;
  image: string;
  displayNumber: number;
  setDisplayNumber: Dispatch<SetStateAction<number>>;
}

function SectionHeader({
  label,
  number,
  image,
  displayNumber,
  setDisplayNumber,
}: SectionHeaderProps) {
  function changeDisplay(num: number): void {
    if (displayNumber === num) {
      setDisplayNumber(4);
    } else {
      setDisplayNumber(num);
    }
  }

  return (
    <div className="flex justify-between ">
      <h2 className="font-bold text-[25px]">{label}</h2>
      <button
        className="px-3  rounded-md  bg-[#d9dae3]"
        onClick={() => changeDisplay(number)}
      >
        <img className="h-[25px] w-[25px]" src={image} alt="Show" />
      </button>
    </div>
  );
}

export default SectionHeader;

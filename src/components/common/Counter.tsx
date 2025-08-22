import { LuPlus, LuMinus } from "react-icons/lu";

const Counter = () => {
  return (
    <div className="w-30 relative flex h-8 justify-between overflow-hidden rounded-[2px] border-[1px] border-neutral-300">
      <button
        type="button"
        className="hover:bg-pri-purple-100 absolute left-0 z-[1] h-full cursor-pointer px-2"
        disabled
        aria-label="減少數量"
      >
        <LuMinus aria-hidden="true" />
      </button>
      <input
        type="number"
        className="absolute inset-0 pl-[15%] text-center focus:outline-0"
        readOnly
        value="1"
      />
      <button
        type="button"
        className="hover:bg-pri-purple-100 absolute right-0 z-[1] h-full cursor-pointer px-2"
        aria-label="增加數量"
      >
        <LuPlus aria-hidden="true" />
      </button>
    </div>
  );
};

export default Counter;

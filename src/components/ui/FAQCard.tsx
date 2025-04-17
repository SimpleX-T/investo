import { FaMinus, FaPlus } from "react-icons/fa6";
import { useRef, useEffect, useState } from "react";

export default function FAQCard({
  answer,
  question,
  id,
  isOpen,
  onclick,
}: {
  answer: string;
  question: string;
  id: number;
  isOpen: number;
  onclick: (id: number) => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen === id && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen, id]);

  return (
    <div className="border-b border-gray-200 transition-all duration-300 overflow-hidden">
      <div
        className="flex items-start justify-between p-2 md:p-4 cursor-pointer"
        onClick={() => onclick(id)}
      >
        <h2 className="font-semibold text-[14px] md:text-2xl mb-4">
          {question}
        </h2>
        <button className="p-2 cursor-pointer">
          {isOpen === id ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      {/* Animated answer container */}
      <div
        ref={contentRef}
        style={{
          maxHeight,
        }}
        className="transition-max-height duration-500 ease-in-out overflow-hidden"
      >
        <div className="p-4 text-sm md:text-base text-gray-600">{answer}</div>
      </div>
    </div>
  );
}

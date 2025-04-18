import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

interface FAQCardProps {
  id: number;
  isOpen: number;
  onclick: (id: number) => void;
  question: string;
  answer: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function FAQCard({
  answer,
  question,
  id,
  isOpen,
  onclick,
}: FAQCardProps) {
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
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={id}
      className="border-b border-gray-200 transition-all duration-300 overflow-hidden"
    >
      <div
        className="flex items-start justify-between p-2 md:p-4 cursor-pointer gap2"
        onClick={() => onclick(id)}
      >
        <h2 className="font-semibold text-md md:text-2xl mb-4">{question}</h2>
        <button className="p-2 cursor-pointer text-xl relative w-6 h-6 flex items-center justify-center">
          <span className=" bg-text-dark absolute h-1 rounded-full w-6" />
          <span
            className={`absolute bg-text-dark h-1 rounded-full w-6 transition-transform duration-500 ease-out ${
              isOpen === id ? "rotate-0" : "rotate-270"
            }`}
          />
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
    </motion.div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface CollapseProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Collapse = ({ title, children }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen, children]);

  return (
    <div className="overflow-hidden">
      <button
        className="w-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <FiChevronDown
          className={`transition-transform duration-300 w-8 h-8 ${
            isOpen ? 'rotate-180 text-text-primary' : 'rotate-0 text-gray2'
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          height,
          transition: 'height 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;

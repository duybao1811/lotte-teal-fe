'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Banner1 from '@/assets/images/banner/banner1.png';
import Banner2 from '@/assets/images/banner/banner2.png';
import Image from 'next/image';

const sectionVariants = {
  initial: {
    opacity: 0,
    scale: 1.2,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 2,
  },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const sectionsContent = [
  {
    id: 1,
    title: 'GREEN COMPANY',
    description: '사람과 환경을 존중하는 롯데 알미늄은 \n 지속가능경영을 실천합니다.',
    image: Banner1.src,
  },
  {
    id: 2,
    title: '글로벌 신소재 기업',
    description: '대한민국을 넘어 아시아를 선도하는 기업으로 \n 롯데알미늄이 도전합니다.',
    image: Banner2.src,
  },
  {
    id: 3,
    title: 'GREEN COMPANY',
    description: '사람과 환경을 존중하는 롯데 알미늄은 \n 지속가능경영을 실천합니다.',
    image: Banner1.src,
  },
  {
    id: 4,
    title: '글로벌 신소재 기업',
    description: '대한민국을 넘어 아시아를 선도하는 기업으로 \n 롯데알미늄이 도전합니다.',
    image: Banner2.src,
  },
];

const DURATION = 5000;
const SCROLL_WAIT_TIME = 800; //(ms) should match with transition duration

export default function PageSections() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTimeRef = useRef(0);

  const handleScroll = (event: WheelEvent) => {
    const isLastSection = activeSection === sectionsContent.length - 1;
    const scrollDirection = Math.sign(event.deltaY);

    // Logic for scrolling down
    if (scrollDirection === 1) {
      if (!isLastSection) {
        event.preventDefault();

        if (Date.now() - lastScrollTimeRef.current < SCROLL_WAIT_TIME) {
          return;
        }
        lastScrollTimeRef.current = Date.now();

        setActiveSection((prev) => prev + 1);
      }
    }
    // Logic for scrolling up
    else if (scrollDirection === -1) {
      const isAtTopOfPage = window.scrollY === 0;

      if (activeSection > 0 && isAtTopOfPage) {
        event.preventDefault();

        if (Date.now() - lastScrollTimeRef.current < SCROLL_WAIT_TIME) {
          return;
        }
        lastScrollTimeRef.current = Date.now();

        setActiveSection((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [activeSection]);

  const handleDotClick = (index: number) => {
    if (activeSection !== index) {
      setActiveSection(index);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sectionsContent.length);
    }, DURATION);

    return () => clearInterval(intervalId);
  }, [activeSection]);

  return (
    // ref={containerRef}
    <div ref={containerRef} className={'relative overflow-hidden md:h-[90vh] h-[70vh]'}>
      <AnimatePresence initial={false}>
        {sectionsContent.map(
          (section, index) =>
            index === activeSection && (
              <motion.div
                key={section.id}
                variants={sectionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: SCROLL_WAIT_TIME / 1000, ease: 'easeInOut' }}
                className={
                  'absolute w-full h-full inset-0 flex flex-col md:justify-center justify-start text-white md:px-40 px-6 md:gap-10 gap-6 md:py-0 py-40'
                }
              >
                <Image
                  src={section.image}
                  alt={`Banner`}
                  fill
                  className={'absolute inset-0 -z-1'}
                  objectFit={'cover'}
                />
                <motion.h1
                  variants={textVariants}
                  transition={{ delay: 0.5, duration: SCROLL_WAIT_TIME / 1000 }}
                  className={'lg:text-5xl md:text-4xl text-3xl font-extrabold'}
                >
                  {section.title}
                </motion.h1>
                <motion.p
                  variants={textVariants}
                  transition={{ delay: 0.7, duration: SCROLL_WAIT_TIME / 1000 }}
                  className={'whitespace-pre-line lg:text-2xl md:text-xl text-lg leading-9'}
                >
                  {section.description}
                </motion.p>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      <div className="absolute md:right-10 right-6 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 z-2">
        {sectionsContent.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`
                cursor-pointer h-3 w-3 rounded-full border-2 border-white transition-all duration-300
                ${index === activeSection ? 'bg-white' : 'bg-transparent'}
            `}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}

        <motion.div
          className={'absolute h-5 w-5 rounded-full border-2 border-white top-0 -translate-y-1'}
          initial={false}
          animate={{
            y: activeSection * 28,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      </div>
    </div>
  );
}

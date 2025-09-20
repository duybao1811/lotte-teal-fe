'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import React from 'react';
import clsx from 'clsx';

interface Props {
  title: string;
  content: string;
  active: boolean;
  onMouseEnter: () => void;
  onMouseLeave?: () => void;
}

const SusManagementColumn = ({ title, content, onMouseEnter, active, onMouseLeave }: Props) => {
  const columnVariants = {
    active: { flex: 4, transition: { duration: 0.5 } },
    inactive: { flex: 1, transition: { duration: 0.5 } },
  };

  const overlayVariants = {
    active: { opacity: 0, transition: { duration: 0.5 } },
    inactive: { opacity: 1, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    active: { y: -60, transition: { duration: 0.3, delay: 0.5 } },
    inactive: { y: 0, transition: { duration: 0.3, delay: 1.1 } },
  };

  const textVariants = {
    active: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.8 } },
    inactive: { opacity: 0, y: 36, transition: { duration: 0.3, delay: 0.8 } },
  };

  const buttonViewMoreVariants = {
    active: { opacity: 1, y: 60, transition: { duration: 0.3, delay: 1.1 } },
    inactive: { opacity: 0, y: 84, transition: { duration: 0.3, delay: 0.5 } },
  };

  return (
    <>
      <motion.div
        className="relative overflow-hidden z-2 h-[680px]"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        variants={columnVariants}
        initial={false}
        animate={active ? 'active' : 'inactive'}
      >
        <motion.div
          className="absolute inset-0 bg-black/50"
          variants={overlayVariants}
          animate={active ? 'active' : 'inactive'}
        />

        <div className="text-white  text-center absolute inset-0 flex flex-col items-center justify-center p-4">
          <motion.h3
            variants={titleVariants}
            className={clsx('font-bold', active ? 'text-3.5xl' : 'text-2.5xl')}
          >
            {title}
          </motion.h3>
          <AnimatePresence>
            {active ? (
              <motion.p
                key="content"
                className="whitespace-pre-line absolute text-xl font-bold"
                variants={textVariants}
                initial={'inactive'}
                animate={'active'}
                exit="inactive"
              >
                {content}
              </motion.p>
            ) : null}
          </AnimatePresence>
          <AnimatePresence>
            {active ? (
              <motion.div
                key="button"
                className={'absolute'}
                variants={buttonViewMoreVariants}
                initial={'inactive'}
                animate={'active'}
                exit="inactive"
              >
                <Link
                  href={'/'}
                  className={'border border-white rounded-full font-extrabold text-lg px-12 py-2'}
                >
                  VIEW MORE
                </Link>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default SusManagementColumn;

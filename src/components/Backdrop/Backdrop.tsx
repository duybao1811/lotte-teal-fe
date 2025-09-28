'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

interface BackdropProps {
  isOpen: boolean;
  onClick?: () => void;
  blurIntensity?: 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
  className?: string;
}

export default function Backdrop({
  isOpen,
  onClick,
  blurIntensity = 'md',
  className,
  children,
}: BackdropProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className={clsx(
        `fixed inset-0 z-5 backdrop-blur-${blurIntensity} bg-black/30 transition-opacity duration-300`,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>,
    document.body,
  );
}

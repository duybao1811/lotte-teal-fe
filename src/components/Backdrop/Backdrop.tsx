'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface BackdropProps {
  isOpen: boolean;
  onClick?: () => void;
  blurIntensity?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Backdrop({ isOpen, onClick, blurIntensity = 'md' }: BackdropProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-5 backdrop-blur-${blurIntensity} bg-black/30 transition-opacity duration-300`}
      onClick={onClick}
    />,
    document.body,
  );
}

'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';

const SiteMapView = dynamic(() => import('@/views/SiteMapView/SiteMapView'), { ssr: false });

const SiteMapButton = () => {
  const [openModalSiteMap, setOpenModalSiteMap] = useState(false);

  const toggleModalSiteMap = () => {
    setOpenModalSiteMap(!openModalSiteMap);
  };

  return (
    <>
      <div className={'cursor-pointer'} onClick={toggleModalSiteMap}>
        SITE MAP
      </div>
      <AnimatePresence>
        {openModalSiteMap ? (
          <SiteMapView open={openModalSiteMap} onClose={toggleModalSiteMap} />
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default SiteMapButton;

import React from 'react';
import Drawer from '@/components/Drawer/Drawer';

interface Props {
  open: boolean;
  onClose: () => void;
}

const DrawerSubmenu = ({ open, onClose }: Props) => {
  return (
    <Drawer isOpen={open} onClose={onClose}>
      <div />
    </Drawer>
  );
};

export default DrawerSubmenu;

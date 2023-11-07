import React from 'react';
import { ReactComponent as MenuIcon } from '../../../../../../assets/images/svg/Menu.svg';
import { ReactComponent as CloseIcon } from '../../../../../../assets/images/svg/Close.svg';
import { StyledMenuButton } from './styled';

interface IMenuButtonProps {
  onClick: (isMenuOpen: boolean) => void
  isMenuOpen: boolean
}

function MenuButton({ onClick, isMenuOpen }: IMenuButtonProps) {
  return (
    <StyledMenuButton
      onClick={() => onClick(!isMenuOpen)}
    >
      {isMenuOpen ? <CloseIcon /> : <MenuIcon /> }
    </StyledMenuButton>
  );
}

export default MenuButton;

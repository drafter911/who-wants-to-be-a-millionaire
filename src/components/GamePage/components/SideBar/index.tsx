import React, { useState } from 'react';
import { StyledContent, StyledWrapper } from './styled';
import MenuButton from './components/MenuButton';
import { useIsMobile } from '../../../../shared/hooks';
import Levels from './components/Levels';

function SideBar() {
  const isMobile: boolean = useIsMobile(860);
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(!isMobile);
  return (
    <>
      {isMobile && <MenuButton isMenuOpen={isSideBarOpen} onClick={setIsSideBarOpen} />}
      <StyledWrapper $collapsed={(!isSideBarOpen && isMobile)}>
        <StyledContent>
          <Levels />
        </StyledContent>
      </StyledWrapper>
    </>
  );
}

export default SideBar;

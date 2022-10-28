import { useState } from "react";
import { useModal } from "utils/ModalContext";
import NavWrapper from "./Header.style";
import Button from "components/button/Button";
import MobileMenu from "./MobileMenu/MobileMenu";
import logo from "assets/images/logo.png";
import connectIcon from "assets/images/icons/connect.png"


const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  const handleWalletBtn = (e) => {
    e.preventDefault();
    walletModalHandle()
  }

  return (
    <NavWrapper className="gamfi_header" id="navbar">
      <div className="container">
        <div className="gamfi_menu_sect">
          <div className="gamfi_menu_left_sect">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="gamfi nft logo" />
              </a>
            </div>
          </div>
          <div className="gamfi_menu_right_sect gamfi_v1_menu_right_sect">
            <div className="gamfi_menu_btns">
              <Button href="#" sm variant="white" className="connect_btn" onClick={e => handleWalletBtn(e)}>
                <img src={connectIcon} alt="icon" />
                Connect
              </Button>
            </div>
          </div>
        </div>
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;

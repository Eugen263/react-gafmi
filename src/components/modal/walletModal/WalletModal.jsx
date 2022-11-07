import { useModal } from "utils/ModalContext";
import { ethers } from "ethers";
import { FiX, FiChevronRight } from "react-icons/fi";
import WalletModalStyleWrapper from "./WalletModal.style";
import { isMetaMaskInstalled } from "lib/metamaskhandler";
import metamaskIcon from "assets/images/icons/meta-mask.png";



const WalletModal = () => {
  const { walletModalHandle, handleMetamaskModal } = useModal();

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []); 
  }
  
  const handleMetamask = async (e) => {
    e.preventDefault()
    if (!isMetaMaskInstalled()) {
      handleMetamaskModal();
    } else {
      const account = await connectWallet() ;
    }
  }

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <p>
                Please select a wallet to connect to this marketplace
              </p>
              <button onClick={() => walletModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <a href="#" onClick={(e) => handleMetamask(e)}>
                  <img src={metamaskIcon} alt="Meta-mask-Image" />
                  MetaMask
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <a href="# ">Terms of Service</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default WalletModal;

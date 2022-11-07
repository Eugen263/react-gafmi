import { useEffect, useState } from "react"
import { useModal } from "utils/ModalContext";
import Counter from "components/counter/Counter"
import Button from "components/button/Button"
import rocketThumb from "assets/images/homeV3/animition_avater.png"
import ufoShape from "assets/images/homeV3/uFO.png"
import connectIcon from "assets/images/icons/connect.png"
import BannerStyleWrapper from "./Banner.style"

const Banner = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const { walletModalHandle } = useModal();

  const checkWalletConnect = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account: ', account);
      setCurrentAccount(account);
    } else {
      console.log('No authorized account found');
    }
  };

  const handleWalletBtn = (e) => {
    e.preventDefault();
    walletModalHandle()
  }

  useEffect(() => {
    checkWalletConnect();
  }, []);

  return (
    <div id="home">
      <BannerStyleWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="gamfi_v2_hero_left">
                <h2>YOUR CROSS-CHAIN <br /> PROTECTED UNIQUE NICKNAME</h2>
                <p>From now your nickname will be with you.</p>
                {/* <div className="banner-btns">
                  <input id="email" placeholder="Enter you nickname" className="form-control" />
                  <Button href="/projects-classic-1" md variant="mint">
                    MINT
                  </Button>
                </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    <img src={rocketThumb} alt="Rocket thumb" />
                  </span>
                </div>

                {/* <ul className="coin_cap_list">
                  <li>
                    <h5>Minted nicknames</h5>
                    <h6 className="counter-number">
                      <Counter
                        end={490.88}
                        decimal="."
                        decimals={490.88 % 1 !== 0 ? "2" : "0"}
                        suffix="M"
                      /></h6>
                  </li> */}

                  {/* hidden at the request of the customer 05.11.2022 */}

                  {/* <li>
                    <h5>TVL</h5>
                    <h6 className="counter-number">$
                      <Counter
                        end={38.60}
                        decimal="."
                        decimals={490.88 % 1 !== 0 ? "2" : "0"}
                        suffix="M"
                      /></h6>
                  </li>                                                           
                  <li className="m-0">
                    <h5>Fund Raised</h5>
                    <h6 className="counter-number">$
                      <Counter
                        end={160.48}
                        decimal="."
                        decimals={490.88 % 1 !== 0 ? "2" : "0"}
                        suffix="M"
                      /> </h6>
                  </li> */}


                {/* </ul> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {currentAccount.length > 0 ? (
                <form onSubmit={(e) => {e.preventDefault()}}>
                  <div className="banner-btns">
                      <input id="email" placeholder="Enter you nickname" className="form-control" />
                      <Button href="#" md variant="mint">
                        MINT
                      </Button>
                  </div>
                </form>
              ) : (
                <div className="gamfi_menu_btns">
                  <Button href="#" sm variant="white" className="connect_btn" onClick={e => handleWalletBtn(e)}>
                    <img src={connectIcon} alt="icon" />
                    Connect
                  </Button>
                </div>
                )
              }
            </div>
            <div className="col-md-6">
              <ul className="coin_cap_list">
                <li>
                  <h5 className="counter-name">Minted nicknames</h5>
                  <h6 className="counter-number">
                    <Counter
                      end={490.88}
                      decimal="."
                      decimals={490.88 % 1 !== 0 ? "2" : "0"}
                      suffix="M"
                      /></h6>
                  </li>
              </ul>
            </div>
          </div>
        </div>

        <img src={ufoShape} alt="ufo shape" className="ufo_shape" />
      </BannerStyleWrapper>
    </div>
  );
};

export default Banner;

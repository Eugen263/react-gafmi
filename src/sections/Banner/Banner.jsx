import { useEffect, useState } from "react"
import Counter from "components/counter/Counter"
import Button from "components/button/Button"
import rocketThumb from "assets/images/homeV3/animition_avater.png"
import ufoShape from "assets/images/homeV3/uFO.png"
import BannerStyleWrapper from "./Banner.style"

const Banner = () => {
  const [currentAccount, setCurrentAccount] = useState("");

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
              </div>
            </div>
            <div className="col-md-6">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    <img src={rocketThumb} alt="Rocket thumb" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {currentAccount.length > 0 ? (
                <form onSubmit={(e) => {e.preventDefault()}}>
                  <div className="banner-btns anim">
                      <input id="email" placeholder="Enter you nickname" className="form-control" />
                      <Button href="#" md variant="mint">
                        MINT
                      </Button>
                  </div>
                </form>
              ) : (<></>)
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

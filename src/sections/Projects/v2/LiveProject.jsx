import { Slider, SliderItem } from "components/slider/Slider";
import ProgressBar from "components/progressBar";
import CountDown from "components/countDown";
import CardHover from "components/cardHover";
import LiveProjectStyleWrapper from "./LiveProject.style";
import data from "assets/data/liveProject/dataV1";

const LiveProject = () => {
  const settings = {
    showTitle: true,
    size: 30,
    labelSize: 20,
    direction: "right",
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "D",
    hourTitle: "H",
    minuteTitle: "M",
    secondTitle: "S",
    id: "countdownwrap",
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <LiveProjectStyleWrapper className="live_project_wrapper">
      <div className="container">
        <Slider {...sliderSettings}>
          {data?.map((item, i) => (
            <SliderItem key={i}>
              <div className="game-price-item">
                <div className="game-price-inner">
                  <div className="total-price">
                    <div className="price-inner d-flex mb-45 md-mb-20">
                      <div className="image-icon">
                        <a href="/projects-details-1">
                          <img src={item.projectIcon} alt="icon" />
                        </a>
                      </div>
                      <div className="price-details">
                        <h3 className="mb-15">
                          <a href="/projects-details-1">{item.title}</a>
                        </h3>
                        <div className="dsc">PRICE (DDO) = {item.price}</div>
                      </div>
                    </div>
                    <div className="all-raise">
                      Total Raise {item.totalRise}
                    </div>
                  </div>
                  <div className="allocation-max text-center">
                    <img src={item.coinIcon} alt="icon" />
                    <div className="allocation">
                      Allocation: {item.allocation}
                    </div>
                  </div>
                  <div className="targeted-raise">
                    <div className="seles-end-text">Sale End In</div>
                    <CountDown {...settings} count={item.saleEnd} />
                    <div className="targeted-raise-amount">
                      Targeted Raise {item.targetedRise}
                    </div>
                  </div>
                </div>
                <div className="progress-inner">
                  <ProgressBar progress={item.progress} />
                </div>

                {/* hover */}
                <CardHover />
              </div>
            </SliderItem>
          ))}
        </Slider>
      </div>
    </LiveProjectStyleWrapper>
  );
};

export default LiveProject;

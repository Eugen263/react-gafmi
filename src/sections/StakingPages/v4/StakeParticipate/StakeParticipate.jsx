import CountDown from "components/countDown";
import Button from "components/button";
import StakeParticipateStyleWrapper from "./StakeParticipate.style"

const StakeParticipate = () => {


    const settings = {
        showTitle: true,
        size: 30,
        labelSize: 16,
        direction: "right",
        backgroundColor: "transparent",
        color: "#fff",
        dayTitle: "D",
        hourTitle: "H",
        minuteTitle: "M",
        secondTitle: "S",
        id: "countdownwrap",
    };

    return (
        <StakeParticipateStyleWrapper>
            <div className="project-item">
                <div className="project-info m-0">
                    <h4 className="mb-56">Participat Stake</h4>
                    <span>Stake Ends In</span>
                    <div className="staking4_time_counter">
                        <div className="price-counter">
                            <div className="project_timer">
                                <CountDown {...settings} count={1236548} />
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="date-listing">
                    <li>
                        <button>7 Days</button>
                    </li>
                    <li className="active">
                        <button>14 Days</button>
                    </li>
                    <li>
                        <button>30 Days</button>
                    </li>
                    <li>
                        <button>60 Days</button>
                    </li>
                </ul>

                <div className="project-form-list">
                    <h4>Amount to Stakek</h4>
                    <div className="balance-form-area mb-47">
                        <input type="text" placeholder="00.00" />
                        <span className="max">MAX</span>
                        <Button sm varint="blue">Stake</Button>
                    </div>

                    <h6 className="balance">
                        Balance: <span>2889.00 BUSD</span>
                        <a href="#">Buy Now</a>
                    </h6>
                </div>
            </div>
        </StakeParticipateStyleWrapper>
    )
}

export default StakeParticipate;
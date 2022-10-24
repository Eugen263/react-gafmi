import CountDown from "components/countDown";
import Counter from "components/counter";
import ProgressBar from "components/progressBar/v2";
import ProjectCardStyleWrapper from "./ProjectCard.style";

const ProjectCard = ({
  title,
  thumb,
  projectIcon,
  coinIcon,
  projectDeadline,
  price,
  totalRised,
  totalValue,
  progress,
  sales,
  airdrop,
  projectFeatures,
  socialLinks,
}) => {
  const settings = {
    showTitle: true,
    size: 16,
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
    <ProjectCardStyleWrapper>
      <div className="project_content_left">
        <div className="project_thumb">
          <img src={thumb} alt="project thumb" className="img-fluid" />
        </div>
        <div className="project_timer">
          <CountDown {...settings} count={projectDeadline} />
        </div>
        <div className="project_thumb_small">
          <img src={projectIcon} alt="project icon" />
        </div>
      </div>
      <div className="project_content_right">
        <div className="project_headings">
          <a href="/projects-details-1">{title}</a>
          <p>price (PRC) = {price} BUSD</p>
          <span className="coin_icon">
            <img src={coinIcon} alt="chain" className="img-fluid" />
          </span>
        </div>
        <div className="project_meta">
          <div className="project_fund">
            <h3>
              Total Raised :{" "}
              <Counter
                end={totalRised}
                decimal="."
                decimals={totalRised % 1 !== 0 ? "2" : "0"}
                suffix=""
              />{" "}
              /{" "}
              <Counter
                end={totalValue}
                decimal="."
                decimals={totalValue % 1 !== 0 ? "2" : "0"}
                suffix=""
              />
            </h3>
            <span className="counter">
              <Counter
                end={progress}
                decimal="."
                decimals={progress % 1 !== 0 ? "2" : "0"}
                suffix="%"
              />
            </span>
          </div>
          <ProgressBar progress={`${progress}%`} />
          <div className="project_sell_stat">
            <span>Sale: {sales}</span>
            <span>Airdrop: {airdrop}</span>
          </div>
          <ul className="project_feature_list">
            {projectFeatures?.map((item, i) => (
              <li key={i}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="project_social_links">
            {socialLinks?.map((profile, i) => (
              <a key={i} href={profile.url}>
                {" "}
                <img src={profile.icon} alt="" />{" "}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ProjectCardStyleWrapper>
  );
};

export default ProjectCard;

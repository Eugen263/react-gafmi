import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import Layout from "components/layout/Layout"; 
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/Header";
import Banner from "sections/Banner/Banner";
// import RoadMap from "sections/RoadMap/RoadMap";
import Integration from "sections/Integration/Integration";
import IntegrationTwo from "sections/IntegrationTwo/IntegrationTwo";
import RoadMaps from "sections/RoadMaps/RoadMaps";
import Features from "sections/Features/Features";
// import Partner from "sections/Partner/Partner";
import Footer from "sections/Footer/Footer";
import '../assets/styles/GlobalStyles.css'


export default function Home() {
  const { walletModalvisibility, metamaskModal } = useModal();

  return (
    <Fragment>
      <Layout>
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <Banner />
        <Features />
        {/* <RoadMap /> */}
        <Integration />
        <IntegrationTwo />
        <RoadMaps />
        {/* <Partner /> */}
        <Footer />
      </Layout>
    </Fragment>
  );
}

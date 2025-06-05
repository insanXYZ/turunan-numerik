import Banner from "../components/organisms/banner";
// import TheoryBanner from "../components/organisms/theory_banner";
// import FormulaBanner from "../components/organisms/formula_banner";
import SwiperBanner from "../components/organisms/swiper_banner";
export default () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <SwiperBanner />
    </div>
  );
};

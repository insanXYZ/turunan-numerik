import Wrapper from "../layouts/wrapper";
import BannerTitle from "../moleculs/banner_title";
import Render from "../moleculs/mathjax";

export default () => {
  function BgFormula() {
    return (
      <div className="absolute -left-14  ">
        <div className="text-9xl transform rotate-[-30deg] opacity-20 ">
          <Render
            formula={
              "\\(f'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} = \\frac{f_1 - f_0}{h}\\)"
            }
          />
        </div>
      </div>
    );
  }

  return (
    <Wrapper className={"bg-white"}>
      {BgFormula()}
      <div className="w-full flex justify-center items-center h-[670px]">
        <BannerTitle />
      </div>
    </Wrapper>
  );
};

import Banner from "../components/organisms/banner"
import TheoryBanner from "../components/organisms/theory_banner"
import FormulaBanner from "../components/organisms/formula_banner"

export default () => {
    return (
        <div className="flex flex-col">
            <Banner/>
            <TheoryBanner/>
            <FormulaBanner/>
        </div>
    )
}
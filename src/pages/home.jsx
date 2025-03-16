import Banner from "../components/organisms/banner"
import TheoryBanner from "../components/organisms/theory_banner"

export default () => {
    return (
        <div className="flex flex-col">
            <Banner/>
            <TheoryBanner/>
        </div>
    )
}
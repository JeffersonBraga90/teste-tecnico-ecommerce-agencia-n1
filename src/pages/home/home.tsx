import dataBannerInfo from "../../api/dataBanner"
import dataCard from "../../api/dataCard"
import dataShelf from "../../api/dataShelf"
import { Banner } from "../../components/banner"
import { Cards } from "../../components/cards"
import { SeoBlock } from "../../components/seoBlock"
import { Shelf } from "../../components/shelf"
import { TipBar } from "../../components/tipbar"


export const Home = () => {
  return (
        <article className="flex flex-col gap-10 md:gap-20">
          <Banner banners={dataBannerInfo} />
          <TipBar />
          <Shelf shelf={dataShelf}/>
          <Cards cards={dataCard}/>
          <SeoBlock />
        </article>
  )
}
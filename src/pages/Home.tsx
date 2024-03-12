// Components
import { Carousel, BannerSlider } from "@components/index"

// Utils
import endpoints from "@utils/endpoints"

const Home = () => {

  return (
    <section>
      <BannerSlider endpoint={endpoints.popular + '?page=2'}/>
      <Carousel title='Trending Now' endpoint={endpoints.popular + '?page=3'} type="list"/>
      <Carousel title='Top 10 Today' endpoint={endpoints.popular} type="top"/>
      <Carousel title="Critically Acclaimed" endpoint={endpoints.top_rated} type="list"/>
      <Carousel title="You Also May Like" endpoint={endpoints.popular + '?page=4'} type="list"/>
    </section>
  )
}

export default Home
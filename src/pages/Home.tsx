// Components
import { Carousel, BannerSlider, Modal } from "@components/index"

// Utils
import endpoints from "@utils/endpoints"

// Context
import { useContext } from "react"
import { modalContext } from "@context/modalContext"

const Home = () => {
  const { isOpen } = useContext(modalContext)

  return (
    <main>
      {isOpen && <Modal/>}
      <BannerSlider endpoint={endpoints.popular + '?page=3'}/>
      <Carousel title='Trending Now' endpoint={endpoints.popular + '?page=2'} type="list"/>
      <Carousel title='Top 10 Today' endpoint={endpoints.popular} type="top"/>
      <Carousel title="Critically Acclaimed" endpoint={endpoints.top_rated} type="list"/>
    </main>
  )
}

export default Home
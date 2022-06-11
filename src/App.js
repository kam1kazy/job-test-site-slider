import { Carousel } from "./Carousel/Carousel";
import "./App.css";
import HomeSlide from "./Carousel/Slides/HomeSlide/HomeSlide";

export default function App() {
  return (
      <div className="App">
        <Carousel>
          <Carousel.Page>
              <HomeSlide/>
          </Carousel.Page>

          <Carousel.Page>
            <div className="item">Item 2</div>
          </Carousel.Page>

          <Carousel.Page>
            <div className="item">Item 3</div>
          </Carousel.Page>
        </Carousel>
      </div>
  );
}

import Carousel from 'react-bootstrap/Carousel';

const Anonce = () => {
  return (
      <div className="container">
          <div className="row justify-content-center">
              <div>
                  <Carousel>
                      <Carousel.Item>
                          <img
                              className="d-block w-100 h-25 rounded"
                              src={"http://localhost:3500/media/est3.jpg"}
                              alt="First slide"
                          />
                          <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>
                                  Nulla vitae elit libero, a pharetra augue
                                  mollis interdum.
                              </p>
                          </Carousel.Caption>
                      </Carousel.Item>

                      <Carousel.Item>
                          <img
                              className="d-block w-100 h-25 rounded"
                              src={"http://localhost:3500/media/est3.jpg"}
                              alt="Second slide"
                          />

                          <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                              </p>
                          </Carousel.Caption>
                      </Carousel.Item>

                      <Carousel.Item>
                          <img
                              className="d-block w-100 h-25 rounded"
                              src={"http://localhost:3500/media/est3.jpg"}
                              alt="Third slide"
                          />

                          <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur.
                              </p>
                          </Carousel.Caption>
                      </Carousel.Item>
                  </Carousel>
              </div>
          </div>
      </div>
  );
}

export default Anonce
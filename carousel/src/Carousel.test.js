import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(<Carousel photos={TEST_IMAGES} title="test title" />);
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  //move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  //expect second image to show, not the first
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();


  //move backwards(left) in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  //expect first image to show, not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});

it('left arrow missing on first image', function () {

  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).not.toBeInTheDocument();

  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).toBeInTheDocument();

});

it('right arrow missing on last image', function () {

  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
    //right arrow should show before arriving at last image
    expect(
      container.querySelector(".bi-arrow-right-circle")
    ).toBeInTheDocument();

    //move forward twice in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).not.toBeInTheDocument();

  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).toBeInTheDocument();
})


it('both arrows show on second image', function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
    //move forward in the carousel
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  fireEvent.click(rightArrow);

  expect(container.querySelector('.bi-arrow-right-circle')
  ).toBeInTheDocument();
  expect(container.querySelector('.bi-arrow-left-circle')
  ).toBeInTheDocument();

})


it("matches snapshot", function(){
  const { container } = render(
  <Carousel
    photos={TEST_IMAGES}
    title="test title"/>)
    expect(container).toMatchSnapshot();
})

import { render, fireEvent } from "@testing-library/react";
import Card from './Card.js';

it("renders without crashing", function(){
  render(<Card
    caption="this is caption"
    src='image1.jpg'
    currNum={1}
    totalNum={3} />)
});

it("matches snapshot", function(){
  const { container } = render(
  <Card
    caption="this is caption"
    src='image1.jpg'
    currNum={1}
    totalNum={3} />)
    expect(container).toMatchSnapshot();
})
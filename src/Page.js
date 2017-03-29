import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import Carousel from './header/Carousel';
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';


class Page extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <Container>
          <Row>
            <RaisedButton label="Ok" />
            <TimePicker hintText="12hr Format" />
          </Row>
        </Container>
      </div>
    )
  }
}
export default Page;

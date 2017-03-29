import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';


class MainTheme extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div>
        <TimePicker hintText="12hr Format" />
        <RaisedButton label="Default" />
      </div>
    )
  }
}

export default MainTheme;
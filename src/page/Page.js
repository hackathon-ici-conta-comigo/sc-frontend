import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

class Page extends React.Component {
	constructor(){
		super();
	}

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
export default Page;

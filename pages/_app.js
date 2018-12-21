//app.js in pages folder is meant as a wrapper that will house all the components including the main Page component.
//Component is the current page
import App, {Container} from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
  render(){
    const {Component} = this.props;
    return(
      <Container>
          <Page>
            <Component/>
          </Page>
      </Container>
    )
  }
}

export default MyApp;
import React from 'react';
import Homepage from '../components/homepage';
import Archive from '../components/archive';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav class="f6 fw6 ttu tracked">
          <Link to='/'><a class="link dim white dib mr3" href="" title="Home">URL-Shortener</a></Link>
          <a class="link dim white dib mr3" href="http://reachankurgupta.me/" title="About">Made By- Ankur Gupta</a>
          <a class="link dim white dib" href="https://github.com/ankurgupta255/URL-Shortener" title="Contact">GITHUB</a>
          <Link to='/archive'><a class="link dim white dib absolute right-1 pointer" title="Contact">ARCHIVE</a></Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/archive' component={Archive} />
      </Switch>
      <footer class="bg-near-black white-80 pv2 ph4 absolute bottom-0 w-100">
        <p class="f6"><span class="dib mr4 mr5-ns"><a class="link white-80 hover-light-purple" href="http://reachankurgupta.me/">©Ankur Gupta Inc.</a></span>
          <a class="link white-80 hover-light-purple" href="https://github.com/ankurgupta255">Github</a> /
          <a class="link white-80 hover-gold" href="https://www.linkedin.com/in/ankurgupta255/"> LinkedIn </a> /
          <a class="link white-80 hover-green" href="mailto:gupta.ankur255@gmail.com">Contact Me Here</a>
        </p>
      </footer>
      </div>
    );
  }
}

export default App;

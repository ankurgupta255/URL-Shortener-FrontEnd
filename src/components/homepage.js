import React from 'react';

class Homepage extends React.Component{
  constructor(){
    super()
    this.state={
      longlink: '',
      shortlink: '',
      customUrl: ''
    }
  }

  longlinkChange=(event)=>{
    this.setState({longlink: event.target.value})
  }

  customUrlChange=(event)=>{
    this.setState({customUrl: event.target.value})
  }

  onButtonSubmit=()=>{
    fetch('https://smallink.herokuapp.com/url',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        longlink: this.state.longlink,
        customUrl: this.state.customUrl
      })
    }).then(response=>response.json())
    .then(url=>{
      console.log(url)
      this.setState({shortlink: url.shortlink})
    })
    .catch(error=>{
      console.log(error)
    })
  }
  render(){
    return (
      <div className="App">
      <br /><br /><br /><br />
      <main class="pa4 black-80 measure center">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Generate Your URL</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="longlink">Original URL *</label>
              <input class="pa2 input-reset ba bg-transparent w-100" type="url" name="longlink"  id="longlink" onChange={this.longlinkChange} />
            </div>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="customUrl">Custom String</label>
              <input class="pa2 input-reset ba bg-transparent w-100" type="text" name="customUrl"  id="customUrl" placeholder="Add a String of Characters to be used after BaseURL" onChange={this.customUrlChange} />
            </div> 
            <div class="" style={{'padding-top': '20px'}}>
            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center tc" type="submit" value="Generate URL" onClick={this.onButtonSubmit} />
          </div>
          {this.state.shortlink ? <div class="mv3">
              <label class="db fw6 lh-copy f6" for="shortlink">Shortened URL</label>
              <p class="b pa2 input-reset ba bg-transparent w-100" id="shortlink">https://smallink.herokuapp.com/{this.state.shortlink}</p>
            </div> : <p class="b pa2 input-reset ba bg-transparent w-100" id="shortlink">URL Not Generated</p>}
          </fieldset>
      </main>
      </div>
    );
  }
}

export default Homepage;

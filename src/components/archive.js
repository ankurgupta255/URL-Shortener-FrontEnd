import React from 'react';

class Archive extends React.Component{
  constructor(){
    super()
    this.state={
      urls: []
    }
  }

  componentDidMount(){
    fetch('https://smallink.herokuapp.com',{
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    }).then(response=>response.json())
    .then(urls=>{
      console.log(urls)
      this.setState({urls: urls})
    })
  }
  render(){
    return (
      <div className="App pt3" style={{overflow: 'auto', height: '90vh'}}>
      <br /><br /><br /><br />
      {
        this.state.urls.map((url,i)=>{
          return(
            <article className="pl3">
              <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href={"https://smallink.herokuapp.com/"+this.state.urls[i].shortlink}>
                <div class="dtc v-top pl2">
                  <h1 class="f6 f5-ns fw6 lh-title black mv0">{this.state.urls[i].longlink}</h1>
                  <h2 class="f6 fw4 mt2 mb0 black-60">https://smallink.herokuapp.com/{this.state.urls[i].shortlink}</h2>
                </div>
              </a>
            </article>
            )
        })
      }
      </div>
    );
  }
}

export default Archive;

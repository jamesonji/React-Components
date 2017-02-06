import React, {Component} from 'react';
import './nav.css';

class Nav1 extends Component {
  constructor(props) {
   super(props);
   this.state = {
     focused: 0,
   }
  }
  
  clicked = (index) => {
    this.setState({focused: index});
  }
  
  render() {
    var self = this;
    return (
      <div>
        <ul>
          {this.props.items.map(function(m, index){
            var style = '';
            if(self.state.focused === index){
              style = 'focused';
            }
            // Notice the use of the bind() method. It makes the
            // index available to the clicked function:
            return <li  className={style} 
                        onClick={self.clicked.bind(self, index)}
                        key={index}>
                        {m}
                    </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default Nav1;
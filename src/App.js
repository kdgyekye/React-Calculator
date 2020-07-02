import React, {Component} from 'react';
import './App.css';
import Button from './Components/button';


class App extends Component{

  constructor(props){

    super(props);

    this.state = {
        current: '0',
        previous: [],
        afterOperation: false

    };
  }

    reset = () => {
        this.setState({current: '0', previous: [], afterOperation: false});
    };

    addToCurrent = (symbol) => {
        if (["/", "*", "-", "+"].indexOf(symbol) > -1) {
            let {previous} = this.state;
            previous.push(this.state.current + symbol);
            this.setState({previous, afterOperation: true});
            console.log(this.state.previous);
        }
        else {
            if ((this.state.current === "0" && symbol !== ".") || this.state.afterOperation  ) {
                this.setState({current: symbol, afterOperation: false});
            }
            else {
                this.setState({current: this.state.current + symbol});
            }

        }
    };
    calculate = () =>{
    let {current, previous, afterOperation} = this.state;
    if(previous.length > 0){
      current = eval(String((previous[previous.length-1])+current));
      afterOperation= true;
      this.setState({current, previous: [], afterOperation});
    }
    };
  render(){
    const buttons = [
        {symbol: 'C', cols: 3, action: this.reset},
        {symbol: '/', cols: 1, action: this.addToCurrent},
        {symbol: '7', cols: 1, action: this.addToCurrent},
        {symbol: '8', cols: 1, action: this.addToCurrent},
        {symbol: '9', cols: 1, action: this.addToCurrent},
        {symbol: '*', cols: 1, action: this.addToCurrent},
        {symbol: '4', cols: 1, action: this.addToCurrent},
        {symbol: '5', cols: 1, action: this.addToCurrent},
        {symbol: '6', cols: 1, action: this.addToCurrent},
        {symbol: '-', cols: 1, action: this.addToCurrent},
        {symbol: '3', cols: 1, action: this.addToCurrent},
        {symbol: '2', cols: 1, action: this.addToCurrent},
        {symbol: '1', cols: 1, action: this.addToCurrent},
        {symbol: '+', cols: 1, action: this.addToCurrent},
        {symbol: '0', cols: 2, action: this.addToCurrent},
        {symbol: '.', cols: 1, action: this.addToCurrent},
        {symbol: '=', cols: 1, action: this.calculate},

    ];
    return (
      <div className="App">
          {this.state.previous.length > 0?
              <div className='float-previous'>{this.state.previous[(this.state.previous.length)-1]}</div>
          :null}
        <input type='text' className='results' value={this.state.current} /> <br/>

          {buttons.map((btn, i) => {
            return(
                <Button symbol = {btn.symbol} columns={btn.cols} action={(symbol) => btn.action(symbol)} key={i}/>
            )
          })}
      </div>
    )
  }
}

export default App;

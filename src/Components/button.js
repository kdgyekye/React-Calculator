import  React, {Component} from 'react';
import './css/style.css';

class Button extends Component{


    render(){
        return(
            <div className={`column-${this.props.columns}`}>
                <button className='calc-button' onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }

}
export default Button
import React from "react";
import Radium from 'radium'
import './Car.css'
// const [state, setState] = useState(0);
// const random1=()=>{
//     setState({Math.round(Math.random*10)});
//                   }

class Car extends React.Component{
    render(){
 // const [state, setState] = useState(10);

    // const random1=()=>{
    //     setState(Math.round(Math.random()*10));
    // }
    const inputClasses=['input']
    if(this.props.name!==''){
        inputClasses.push('green');
    }
    else{
        inputClasses.push('red');
    }

    if(this.props.name.length>4){
        inputClasses.push('bold');
    }
    const style={  
        border:'1 2px solid #ccc',
        boxShadow:'0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover':{
            border:'1px solid red',
            boxShadow:'0 14px 45px 0 rgba(0,0,0,.25)'
        }
    }
    return (
        <div className="Car" style={style}>
        {/* <h1>Xray Random {state}</h1>

        <button onClick={random1}>Random</button> */}

        <h3>Car name:{this.props.name}</h3>
        {this.props.children}
        <p>Year: <strong>{this.props.year}</strong></p>
        <input 
        type="text"
        onChange={this.props.onChangeName} 
        value={this.props.name}
        className={inputClasses.join(' ')} />
        <button onClick={this.props.onChangeTitle}>Click Button</button>
        <button onClick={this.props.onDelete}>Delete</button>
        </div>
    )
    }
}



export default Radium(Car)

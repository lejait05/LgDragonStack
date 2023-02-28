import React, {Component} from "react";
import DragonAvitar from "./DragonAvitar";

class PublicDragonRow extends Component{
    render(){
        return(
            <div>
                <div>{this.props.dragon.nickname}</div>
                <DragonAvitar dragon={this.props.dragon}/>
                <div>Sale Value: {this.props.dragon.saleValue}</div>
            </div>
        )
    }
}
export default PublicDragonRow;

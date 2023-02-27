import React, {Component} from 'react';
import DragonAvitar  from './DragonAvitar';

class AccountDragonRow extends Component{
    render(){
        return(
            <div>
                <div>{this.props.dragon.nickname}</div>
                <br/>
                <DragonAvitar dragon={this.props.dragon}/>
            </div>
        )
    }
}
export default AccountDragonRow;

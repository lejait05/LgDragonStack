import React, {Component, useState} from 'react';
import DragonAvitar from './DragonAvitar';
import {Button} from 'react-bootstrap';
import {BACKEND} from '../config';
import dragon from "./Dragon";


function AccountDragonRow() {
    const [nickname, setNickname] = useState('dragon.nickname'),
        [isPublic, setIsPublic] = useState('dragon.isPublic'),
        [saleValue, setSaleValue] = useState('dragon.saleValue'),
        [sireValue, setSireValue] = useState('dragon.sireValue'),
        [edit, setEdit] = useState(false)


// class AccountDragonRow extends Component{
//     state = {
//         nickname: this.props.dragon.nickname,
//         isPublic: this.props.dragon.isPublic,
//         saleValue: this.props.dragon.saleValue,
//         sireValue: this.props.dragon.sireValue,
//         edit: false
//     };
    function updateNickname(event) {
        setNickname(event.target.value);
    }

// updateNickname = event =>{
//     this.setState({nickname: event.target.value});
// }
    function updateSaleValue(event) {
        setSaleValue(event.target.value);
    }

// updateSaleValue = event=>{
//     this.setState({saleValue: event.target.value});
// }
    function updateSireValue(event) {
        setSireValue(event.target.value);
    }

// updateSireValue = event=>{
//     this.setState({sireValue: event.target.value});
// }
    function updateIsPublic(event) {
        setIsPublic(event.target.value);
    }

// updateIsPublic = event=>{
//     this.setState({isPublic: event.target.value})
// }
    function toggleEdit() {
        setEdit(!edit);
    }

// toggleEdit =()=>{
//     this.setState({edit: !this.state.edit});
// }
    function save() {
// save =()=>{
        fetch(`${BACKEND.ADDRESS}/dragon/update`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                dragonId: this.props.dragon.dragonId,
                nickname: this.state.nickname,
                isPublic: this.state.isPublic,
                saleValue: this.state.saleValue,
                sireValue: this.state.sireValue
            })
        }).then(response => response.json())
            .then(json => {
                if (json.type === 'error') {
                    alert(json.message);
                } else {
                    toggleEdit();
                    // this.toggleEdit();
                }
            })
            .catch(error => alert(error.message));
    }

    function SaveButton() {
        // get SaveButton(){
        return <Button onClick={save}>Save</Button>;
        // return <Button onClick={this.save}>Save</Button>;
    }

    function EditButton() {
        // get EditButton(){
        return <Button onClick={toggleEdit}>Edit</Button>;
        // return <Button onClick={this.toggleEdit}>Edit</Button>;
    }

    {
        // render(){
        return (
            <div>
                <input type='text'
                       value={nickname}
                       onChange={updateNickname}
                       disabled={!edit}
                    // value={this.state.nickname}
                    // onChange={this.updateNickname}
                    // disabled={!this.state.edit}
                />
                <br/>
                <DragonAvitar dragon={dragon}/>
                {/*<DragonAvitar dragon={this.props.dragon}/>*/}
                <div>
                    <span>
                            Sale Value: {' '}
                        <input
                            type='number'
                            disabled={!edit}
                            value={saleValue}
                            onChange={updateSaleValue}
                            // disabled={!this.state.edit}
                            // value={this.state.saleValue}
                            // onChange={this.updateSaleValue}
                            className='account-dragon-row-input'
                        />
                        </span>{' '}
                    <span>
                        Sire Value:{' '}
                        <input
                            type='number'
                            disabled={!sireValue}
                            onChange={updateSireValue}
                            // disabled={!this.state.sireValue}
                            // onChange={this.updateSireValue}
                            className='account-dragon-row-input'
                        />
                    </span>{' '}
                    <span>
                            Public: {' '}
                        <input
                            type='checkbox'
                            disabled={!edit}
                            checked={!isPublic}
                            onChange={updateIsPublic}
                            // disabled={!this.state.edit}
                            // checked={this.state.isPublic}
                            // onChange={this.updateIsPublic}
                        />
                        </span>

                    {
                        edit ? SaveButton : EditButton
                        // this.state.edit ? this.SaveButton : this.EditButton
                    }
                </div>
            </div>
        )

    }
}
export default AccountDragonRow;

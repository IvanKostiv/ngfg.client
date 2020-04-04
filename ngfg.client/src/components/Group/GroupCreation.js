import React, {Component} from 'react';
import axios from 'axios';

import EmailList from './AdditionalComponent/EmailList';

import {FormGroup, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const API_URL = 'http://ngfg.com:8000/api';
const API_VERSION = 'v1';

class GroupCreation extends Component {
    state = {
        "name": undefined,
        "usersEmails": []

    };

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    setEmails = (usersEmails) => {
        this.setState({
            usersEmails
        })
    };

    sendData = () => {
        const group = {
            name: this.state.name,
            usersEmails: this.state.usersEmails
        };
        axios.post(`${API_URL}/${API_VERSION}/groups/`, {...group},
            {withCredentials: true})
            .then(res => {
                    console.log(res);
                    console.log(res.data);
                    alert('Group created');
                    this.props.getData();
                    this.props.handleClose();
                }
            )
            .catch(error => {
                    console.log(error);
                    alert('Field was not created');
                }
            );
    };

    render() {
        console.log('this.state');
        console.log(this.state);
        return (
            <div>
                <FormGroup className='group-create-name'>
                    <TextField label="Group name"
                               placeholder="Input name"
                               type="text"
                               onChange={this.handleNameChange}
                    />
                </FormGroup>
                <Typography className='mail-typo'
                            variant="inherit"
                            component="p">
                    Emails:
                </Typography>
                <EmailList setEmails={this.setEmails}
                           emails={this.state.usersEmails}
                />
                <div className="group-btn-position">
                    <Button onClick={this.sendData} className="group-creation-btn">
                        Send
                    </Button>
                </div>
            </div>

        );
    }
}

export default GroupCreation;
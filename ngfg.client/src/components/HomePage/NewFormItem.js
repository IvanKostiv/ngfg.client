import React, { Component } from 'react';

import './NewFormItem.scss';


// може винести FormNewItem i NewFieldItem -> в NewItem
class NewFormItem extends Component {

    handleClick = () => {
        this.props.history.push('/form')
    }

    render() {
        console.log(this.props)
        return (
            <div className="new-form-item">
                +
            </div>
        );
    }
}

export default NewFormItem;

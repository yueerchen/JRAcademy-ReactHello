import React, {Component} from 'react';

class WelcomeForm extends Component{
    constructor(props) {
        super(props);
    }

    onWelcomeFormSubmit = (e) => {

    }

    render() {
        return (
            <form onSubmit={this.onWelcomeFormSubmit}>
                <label>
                    Author:
                    <input type="text" name="author" />
                </label>
                <label>
                    Content:
                    <input type="text" name="content" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default WelcomeForm;
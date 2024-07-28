import React, {Component} from 'react';

class ClassComp extends Component {
    render() {
        return (
            <div className={"alert alert-info"}>
                <h1 >ClassComp</h1>
                <p> hello {this.props.FullName} , wellcome to {this.props.Company} </p>
            </div>
        );
    }
}

export default ClassComp;
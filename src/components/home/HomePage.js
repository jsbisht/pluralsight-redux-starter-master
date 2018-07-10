import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Admin View</h1>
                <p>Some content here</p>
                <Link to="about" className="btn btn-primary btn-lg">More</Link>
            </div>
        );
    }
}
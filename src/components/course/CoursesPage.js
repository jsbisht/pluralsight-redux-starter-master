import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from '../../../node_modules/redux';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Courses Page</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

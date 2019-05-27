import * as React from 'react';
import {connect} from "react-redux";

import List from "../../../baseComponents/List";
import LoadingWrapper from "../../../baseComponents/LoadingWrapper";
import Navigation from "../../../baseComponents/Navigation";

import {getMenu} from '../../../helpers/HelperNavigation';

import {getTasks} from "../../store/tasks/ActionsTasks";

class TasksContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        return (
            <LoadingWrapper Loading={this.props.isLoading}>
                <Navigation UserName={this.getCurrentUserName(this.props.users)} Items={getMenu()}/>
                <div className="container">
                    <h2>Все задачи</h2>
                    <List Items={
                        this.props.tasks.map((task) => {
                            let userName = null;
                            this.props.users.forEach((user) => {
                                if (user.id === task.userId) {
                                    userName = user.userName
                                }
                            });
                            return {
                                Title: task.title,
                                Author: userName,
                                Complete: task.complete
                            }
                        })
                    }/>
                </div>
            </LoadingWrapper>
        )
    }

    private getCurrentUserName(users) {
        let userName = null;

        users.forEach((user) => {
            if (user.current) {
                userName = user.userName
            }
        });

        return userName;
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks.tasks,
        users: state.users.users,
        isLoading: state.tasks.isLoading
    }
}

function mapDispatchToProps(dispatch) {

    return {
        getTasks: () => {
            dispatch(getTasks())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
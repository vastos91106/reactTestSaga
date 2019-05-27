import * as React from 'react';
import {connect} from "react-redux";

import List from "../../../baseComponents/List";
import LoadingWrapper from "../../../baseComponents/LoadingWrapper";
import Navigation from "../../../baseComponents/Navigation";

import {getMenu} from '../../../helpers/HelperNavigation';

import {getTasks} from "../../store/tasks/ActionsTasks";

import UserInfo from '../../components/UserInfo';
import UserEdit from '../../components/UserEdit';
import {usersReceived, changeVisibility} from "../../store/users/ActionsTasks";


class ProfileContainer extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTasks();
    }

    handleEdit = (user) => {
        if (!user) {
            return null;
        }

        this.props.updateUser(user);
    };

    render() {
        return (
            <LoadingWrapper Loading={this.props.isLoading}>
                <Navigation UserName={this.getUserName(this.props.user)} Items={getMenu()}/>
                <div className="container">
                    <h2>{`Задачи ${this.getUserName(this.props.user)}`}</h2>
                    <div className="row">
                        <div className="col-md-4">
                            {
                                this.props.edit
                                    ? <UserEdit save={this.handleEdit} {...this.props.user}/>
                                    : <UserInfo edit={() => {
                                        this.props.changeVisibility(true)
                                    }} {...this.props.user}/>
                            }
                        </div>
                        <div className="col-md-8">
                            <List Items={this.getUserTask(this.props.user, this.props.tasks)}/>
                        </div>
                    </div>
                </div>
            </LoadingWrapper>
        )
    }

    private getUserTask(user, tasks) {
        const userTasks = tasks.map((task) => {
            return {
                Title: task.title,
                Author: this.getUserName(user),
                Complete: task.complete
            }
        });

        return userTasks;
    }

    private getUserName(user) {
        if (!user) {
            return null;
        }

        return user.name;
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks.tasks,
        user: state.user.user,
        edit: state.user.edit,
        isLoading: state.tasks.isLoading
    }
}

function mapDispatchToProps(dispatch) {

    return {
        getTasks: () => {
            dispatch(getTasks())
        },
        updateUser: (user) => {
            dispatch({type: 'UPDATE_USER', payload: user})
        },
        changeVisibility: (edit) => {
            dispatch(changeVisibility(edit))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
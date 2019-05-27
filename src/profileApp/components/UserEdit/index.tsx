import * as React from 'react';

import Props from "./Props";
import State from "./State";

class UserEdit extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            email: props.email,
            name: props.name,
            phone: props.phone,
            webSite: props.webSite
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleWebSite = this.handleWebSite.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleEmail(e) {
        const value = e.currentTarget.value;

        this.setState({
            email: value
        })
    }

    handleName(e) {
        const value = e.currentTarget.value;

        this.setState({
            name: value
        })
    }

    handlePhone(e) {
        const value = e.currentTarget.value;

        this.setState({
            phone: value
        })
    }

    handleWebSite(e) {
        const value = e.currentTarget.value;

        this.setState({
            webSite: value
        })
    }

    handlePost(e) {
        e.preventDefault();

        const user = {
            id: this.props.id,
            email: this.state.email,
            phone: this.state.phone,
            name: this.state.name,
            webSite: this.state.webSite
        };

        this.props.save(user);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Имя</label>
                    <input value={this.state.name} type="text" className="form-control" id="name"
                           placeholder="user.name"
                           onChange={this.handleName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input value={this.state.phone} type="text" className="form-control" id="phone"
                           placeholder="user.phone"
                           onChange={this.handlePhone}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input value={this.state.email} type="email" className="form-control" id="email"
                           placeholder="user.email"
                           onChange={this.handleEmail}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Сайт</label>
                    <input value={this.state.webSite} type="text" className="form-control" id="website"
                           placeholder="user.website"
                           onChange={this.handleWebSite}
                    />
                </div>
                <button onClick={this.handlePost} type="submit" className="btn btn-primary">Сохранить</button>
            </form>
        )
    }
}

export default UserEdit;
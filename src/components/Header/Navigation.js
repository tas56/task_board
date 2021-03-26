import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    state = { currentPage: '/' }

    isActiveTab(tabName) {
        return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName })
    }

    render () {
        return (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/')} to="/"
                          onClick={event => this.onTabClick(event, '/')}>
                        Grid View
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/TaskList')} to="/TaskList"
                          onClick={event => this.onTabClick(event, '/TaskList')}>
                        List View
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/AddTask')} to="/AddTask"
                          onClick={event => this.onTabClick(event, '/AddTask')}>
                        Add Task
                    </Link>
                </li>
            </ul>
        )
    }
}
export default Navigation;
import React from 'react';
import { Link } from 'react-router-dom';
import OrderBookStore from '../../stores/order-book-store';
import AnnouncementStore from '../../stores/announcement-store';
import ListenerComponent from '../../../lib/listener-component.jsx';
import OrderBook from '../components/order-book.jsx';
import Stat from '../components/stat.jsx';
import Announcements from '../components/announcements.jsx';

export default class Index extends ListenerComponent {

    getStores() {
        return [
            OrderBookStore,
            AnnouncementStore
        ];
    }

    getState() {
        return {
            bids: OrderBookStore.getBids(),
            asks: OrderBookStore.getAsks(),
            announcements: AnnouncementStore.getAnnouncements()
        };
    }

    render() {
        return (
            <div id='index'>
                <div className='header'>
                    <div className='top pure-g'>
                        <div className='left pure-u-1-2'>
                            MSOE Ticket Exchange
                        </div>
                        <div className='right pure-u-1-2'>
                            <Link to='/register'>Register</Link>
                            <Link to='/login'>Log In</Link>
                        </div>
                    </div>
                    <div className='title'>Buy and sell MSOE graduation tickets</div>
                </div>
                <div className='stats pure-g'>
                    <Stat number={'84'} name='Students registered' />
                    <Stat number={'194'} name='Tickets exchanged' />
                    <Stat number={'$20.12'} name='Latest ticket price' />
                </div>
                <OrderBook bids={this.state.bids} asks={this.state.asks} />
                <Announcements announcements={this.state.announcements} />
                <div className='how'>
                    How it works!
                </div>
            </div>
        );
    }

}

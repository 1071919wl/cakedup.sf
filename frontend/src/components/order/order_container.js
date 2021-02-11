import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import { fetchOrders } from '../../actions/order_actions';
import Order from './order';

const mapStateToProps = state => {
    // console.log(state.entities.orders, 'container')
    return {
        orders: state.entities.orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
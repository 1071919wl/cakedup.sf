import { connect } from 'react-redux';
import { postOrder } from '../../actions/order_actions';
import Request from './request';


const mapStateToProps = state => {
    // console.log(state.entities.orders, 'container')
    return {
        orders: state.entities.orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postOrder: (newOrder) => dispatch(postOrder(newOrder))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Request);
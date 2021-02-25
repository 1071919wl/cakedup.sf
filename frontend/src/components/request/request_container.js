import { connect } from 'react-redux';
import { postOrder, removeOrderErrors } from '../../actions/order_actions';
import Request from './request';


const mapStateToProps = state => {
    // console.log(state.entities.orders, 'container')
    return {
        orders: state.entities.orders,
        errors: Object.values(state.errors.order)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postOrder: (newOrder) => dispatch(postOrder(newOrder)),
        removeOrderErrors: () => dispatch(removeOrderErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Request);
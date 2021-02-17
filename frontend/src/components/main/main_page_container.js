import { connect } from 'react-redux';
import MainPage from './main_page';

import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    // console.log(state.entities.orders, 'container')
    return {
        // orders: state.entities.orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: (req) => dispatch(openModal(req)),
        // closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
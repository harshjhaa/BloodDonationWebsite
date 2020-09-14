import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Alert.css'

const Alert = ({ alerts }) => {
    if (alerts !== null && alerts.length > 0) {
        return alerts.map(alert => {
            return (
                <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                    {alert.msg}
                </div>
            );
        })
    } else {
        return (
            <div></div>
        );
    }
};

Alert.propTypes = {
    alerts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        alerts: state.alertReducer
    }
}

export default connect(mapStateToProps)(Alert);
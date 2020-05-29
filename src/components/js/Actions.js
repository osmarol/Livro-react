import React from 'react';
import PropTypes from 'prop-types';
import './Actions';

const Actions = props => 
    <div className="Actions">
   
        <span
            tabIndex="0"
            className="ActionsInfo"
            title="More info"
            onClick={props.onAction.bind(null, 'Com eletricidade não se brinca, EPI OBRIGATÓRIO!')}>AVISO</span>
    </div>
    Actions.propTypes = {
        onAction: PropTypes.func,
    };
export default Actions

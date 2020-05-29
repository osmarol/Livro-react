import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

 const Button = props => 
    props.href  
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    ? <a {...props} className={classNames('Button', props.className)}/>
    : <button {...props} className={classNames('Button',props.className)}/>
     
  Button.propTypes = {
    href: PropTypes.string,
  };  
    
  export default Button
  
  
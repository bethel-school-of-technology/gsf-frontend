import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  firstname,
  lastname,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  
  return (
    <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
            type={type}
            firstname={firstname}
            lastname={lastname}
            name={name}
            className={classnames('form-control form-control-lg', {
              'is-invalid':error
            })}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
            </div>
  );
};

TextInputGroup.ropTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,

};

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ReactFontawesome extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const icon = 'fa fa-' + this.props.icon;
    const StyleIcon = {
      fontSize: this.props.size + 'rem',
      color: this.props.color,
    };
    return (
      <div>
        <i className={icon} style={StyleIcon} aria-hidden="true"></i>
      </div>
    );
  }
}

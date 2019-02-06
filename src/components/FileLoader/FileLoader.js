import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import Icon from 'components/Icon';
import Link from 'components/Link';
import * as styles from './styles';

export default class FileLoader extends React.Component {
  static propTypes = {
    /**
     * Handler for the onChange event on the input.
     */
    onChange: PropTypes.func,
    /**
     * Marks that this input is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Marks that the user cannot change this input.
     */
    disabled: PropTypes.bool,
    /**
     * Adds a class name to the input element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the input element.
     */
    id: PropTypes.string,
    /**
     * A component to render the drop area
     */
    DropArea: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the preview container
     */
    Preview: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    required: false,
    disabled: false,
    className: null,
    id: null,
    DropArea: styles.DropArea,
    Preview: styles.Preview,
  };

  static styles = styles;

  preventLinkClick = ev => {
    ev.preventDefault();
  };

  renderFiles = () => {
    const { value, DropArea, Preview, disabled } = this.props;
    if (value && value[0]) {
      return (
        <DropArea disabled={disabled}>
          <Icon name="fileFilled" />
          <Preview active={true}>{value[0].name}</Preview>
        </DropArea>
      );
    } else {
      return (
        <DropArea disabled={disabled}>
          <Icon name="file" />
          <Preview>
            DROP A FILE HERE, OR&nbsp;
            <Link disabled={disabled} onClick={this.preventLinkClick}>
              CLICK TO BROWSE
            </Link>
          </Preview>
        </DropArea>
      );
    }
  };

  render() {
    const {
      onChange,
      value,
      required,
      disabled,
      className,
      id,
      DropArea,
      Preview,
      ...rest
    } = this.props;

    return (
      <Dropzone
        multiple={false}
        onDrop={files => onChange(files)}
        style={{ width: '100%' }}
        activeStyle={{ color: '#00bcec' }}
        rejectStyle={{}}
        value={value}
        required={required}
        disabled={disabled}
        className={className}
        id={id}
        {...rest}
      >
        {this.renderFiles()}
      </Dropzone>
    );
  }
}

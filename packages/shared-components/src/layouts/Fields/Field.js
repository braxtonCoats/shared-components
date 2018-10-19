import React from 'react';
import PropTypes from 'prop-types';
import DefaultLabel from 'components/Label';
import DefaultHelpText from 'components/HelpText';
import Callout from 'components/Callout';
import Blob from 'skeletons/Blob';
import FieldContent from './styles/FieldContent';
import HelpIcon from './styles/HelpIcon';
import DefaultLabelContainer from './styles/LabelContainer';
import { get } from 'lodash';

/**
 * A single Field element. **Important:** Field cannot be used on its own. Please use Field
 * within the Fields component. See: [Fields](#!/Fields)
 */
class Field extends React.Component {
  static propTypes = {
    /**
     * **Automatically supplied within <Fields>**
     * Do not supply this prop if you are using Field within a Fields component.
     * The column index to place this field at within its row.
     */
    column: PropTypes.number,

    /**
     * The number of columns which this field should span within its row.
     */
    columnSpan: PropTypes.number,
    /**
     * (stretch|left|right): the alignment of contents within the Field
     */
    alignContent: PropTypes.oneOf(['stretch', 'left', 'right']),

    /**
     * A string or node to render in the label position. A string will be wrapped with the Label component prop.
     * If you provide a custom node, it will receive the htmlFor prop. Please assign this prop to a <label> element.
     */
    label: PropTypes.node,
    /**
     * Indicates if the field is required by the form.
     */
    required: PropTypes.bool,
    /**
     * Disables the form label.
     */
    disabled: PropTypes.bool,
    /**
     * Contents to render inside the main field area.
     */
    children: PropTypes.node,
    /**
     * A string or node to render in the help text position. A string will be wrapped with the HelpText component prop.
     */
    helpText: PropTypes.node,
    /**
     * A component prop to override the component used to render labels. Defaults to library Label.
     */
    Label: PropTypes.func,
    /**
     * A component prop to override the component used to render the label container. Defaults to library LabelContainer.
     */
    LabelContainer: PropTypes.func,
    /**
     * A component prop to override the component used to render help text. Defaults to library HelpText.
     */
    HelpText: PropTypes.func,
    /**
     * A component prop to override the component used to wrap field content. Defaults to library FieldContent.
     */
    Content: PropTypes.func,
    /**
     * Content to render inside the callout.
     */
    helpCallout: PropTypes.node,
    /**
     * Additional props for callout
     */
    helpCalloutProps: PropTypes.shape({
      /**
       * Miliseconds to wait before showing the callout.
       */
      delay: PropTypes.number,
      /**
       * Where to place the element. Use a value from react-popper
       */
      placement: PropTypes.string,
      /**
       * Boundary for the callout; either a selector or a DOM element
       */
      boundary: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      /**
       * Maximum width of the callout
       */
      maxWidth: PropTypes.number,
    }),
  };

  static defaultProps = {
    column: 0,
    columnSpan: 1,
    Label: DefaultLabel,
    LabelContainer: DefaultLabelContainer,
    HelpText: DefaultHelpText,
    Content: FieldContent,
    helpText: null,
    label: null,
    required: false,
    disabled: false,
    helpCallout: null,
    helpCalloutProps: {},
  };

  stylesFor = gridName => {
    const { column, columnSpan } = this.props;

    const endColumn = column + columnSpan - 1;
    return {
      gridArea: `${gridName}${column} / ${gridName}${column} / ${gridName}${endColumn} / ${gridName}${endColumn}`,
      // align-self determines how the parts vertically align if an adjacent part is taller.
      // labels should stick to the bottom if an adjacent label has two or more lines.
      // content and helpText should stick to the top if an adjacent element is taller than them.
      alignSelf: gridName === 'label' ? 'end' : 'start',
    };
  };

  renderLabel = () => {
    const {
      label,
      disabled,
      required,
      Label,
      LabelContainer,
      children,
      helpCallout,
      helpCalloutProps,
    } = this.props;

    if (!label) {
      return null;
    }

    const labelFor = get(children, 'props.id', null);

    const labelProps = {
      disabled,
      required,
      htmlFor: labelFor,
    };

    const HelpCallout = helpCallout && (
      <Callout content={helpCallout} {...helpCalloutProps}>
        <HelpIcon name="help" />
      </Callout>
    );

    const LabelComponent =
      typeof label === 'string' ? (
        <Label {...labelProps}>{label}</Label>
      ) : (
        React.cloneElement(label, labelProps)
      );

    return (
      <LabelContainer style={this.stylesFor('label')}>
        {LabelComponent}
        {HelpCallout}
      </LabelContainer>
    );
  };

  renderHelpText = () => {
    const { helpText, error, HelpText } = this.props;

    if (!helpText) {
      return null;
    }

    const helpTextProps = {
      style: this.stylesFor('helpText'),
      error,
    };

    if (typeof helpText === 'string') {
      return <HelpText {...helpTextProps}>{helpText}</HelpText>;
    }
    return React.cloneElement(helpText, helpTextProps);
  };

  render() {
    const { children, Content, alignContent } = this.props;

    return (
      <React.Fragment>
        {this.renderLabel()}
        <Content style={this.stylesFor('content')} align={alignContent}>
          {children}
        </Content>
        {this.renderHelpText()}
      </React.Fragment>
    );
  }
}

Field.Skeleton = ({ label, helpText, ...rest }) => (
  <Field
    label={label}
    helpText={helpText}
    {...rest}
    LabelContainer={({ children, ...rest }) =>
      label ? (
        <Blob {...rest} width={`${Math.random() * 20 + 80}%`} height="14px" />
      ) : null
    }
    HelpText={({ children, ...rest }) =>
      helpText ? (
        <Blob {...rest} width={`${Math.random() * 20 + 80}%`} height="14px" />
      ) : null
    }
  />
);

export default Field;

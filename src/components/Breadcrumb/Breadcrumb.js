import styled from 'styled-components';
import { userSpacing } from 'extensions';

const Breadcrumb = styled.div`
  display: inline-block;
  margin: ${userSpacing.text};
`;

Breadcrumb.defaultProps = {
  spacing: { bottom: 'md', top: 'md' },
  className: "scl-breadcrumb"
};

/**
 * @component
 */
export default Breadcrumb;

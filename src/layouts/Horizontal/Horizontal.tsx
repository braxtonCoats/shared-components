import React from 'react';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const normalize = (size?: string) => {
  if (!size) {
    return 'large';
  }

  switch (size) {
    case 'xs':
    case 'extraSmall':
      return themeGet('spacing.extraSmall');
    case 'sm':
    case 'small':
      return themeGet('spacing.small');
    case 'lg':
    case 'large':
      return themeGet('spacing.large');
    case 'xl':
    case 'extraLarge':
      return themeGet('spacing.extraLarge');
    case 'md':
    case 'medium':
      return themeGet('spacing.medium');
    default:
      return size;
  }
};

interface HorizontalProps {
  spacing?: string;
  alignItems?: string;
}

const Horizontal = styled.div<HorizontalProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  & > * {
    margin: 0;
  }
  & > * + * {
    margin-left: ${({ spacing }) => normalize(spacing)};
  }
`;

Horizontal.defaultProps = {
  spacing: 'lg',
};

//@component
export default Horizontal;

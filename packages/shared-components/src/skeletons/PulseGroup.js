import React from 'react';
import styled, { css } from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';

export default Component =>
  styled(Component)`
    animation-name: ${pulse};
    animation-duration: var(--skeleton-pulse-normal);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: ${({ disableAnimation }) =>
      disableAnimation ? 'paused' : 'running'};
    &:nth-of-type(5n + 1) {
      animation-delay: calc(0 * var(--skeleton-pulse-normal));
    }
    &:nth-of-type(5n + 2) {
      animation-delay: calc(1 / 5 * var(--skeleton-pulse-normal));
    }
    &:nth-of-type(5n + 3) {
      animation-delay: calc(2 / 5 * var(--skeleton-pulse-normal));
    }
    &:nth-of-type(5n + 4) {
      animation-delay: calc(3 / 5 * var(--skeleton-pulse-normal));
    }
    &:nth-of-type(5n + 0) {
      animation-delay: calc(4 / 5 * var(--skeleton-pulse-normal));
    }
  `;

// /**
//  * @component
//  */
// const Blob = styled.div`
//   height: ${({ height }) => height};
//   width: ${({ width }) => width};
//   background: ${props =>
//     themeGet(props.color || 'skeleton.colors.default')(props)};
//   border-radius: ${({ borderRadius = '1em' }) => borderRadius};
//   display: ${({ display = 'inline-block' }) => display};

//   ${({ animated }) =>
//     animated &&
//     css`
//       animation-name: ${pulse};
//       animation-duration: var(--skeleton-pulse-normal);
//       animation-timing-function: ease-in-out;
//       animation-iteration-count: infinite;
//       animation-direction: alternate;
//       animation-play-state: ${({ disableAnimation }) =>
//         disableAnimation ? 'paused' : 'running'};

//       &:nth-of-type(5n + 1) {
//         animation-delay: calc(0 * var(--skeleton-pulse-normal));
//       }
//       &:nth-of-type(5n + 2) {
//         animation-delay: calc(1 / 5 * var(--skeleton-pulse-normal));
//       }
//       &:nth-of-type(5n + 3) {
//         animation-delay: calc(2 / 5 * var(--skeleton-pulse-normal));
//       }
//       &:nth-of-type(5n + 4) {
//         animation-delay: calc(3 / 5 * var(--skeleton-pulse-normal));
//       }
//       &:nth-of-type(5n + 0) {
//         animation-delay: calc(4 / 5 * var(--skeleton-pulse-normal));
//       }
//     `};
// `;

// Blob.Animated = props => <Blob {...props} animated />;

// export default Blob;

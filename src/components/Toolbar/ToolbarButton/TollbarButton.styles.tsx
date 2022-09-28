import { styled } from '@laodeaksarr/design-system';

export const StyledToolbarButton = styled('div', {
  backgroundColor: 'var(--laodeaksar-colors-body)',
  border: `1px solid var(--laodeaksar-colors-body)`,
  color: 'var(--laodeaksar-colors-foreground)',

  variants: {
    noActive: {
      false: {
        backgroundColor: 'var(--laodeaksar-colors-body)',
        color: 'var(--laodeaksar-colors-foreground)',
      },
    },
  },
});

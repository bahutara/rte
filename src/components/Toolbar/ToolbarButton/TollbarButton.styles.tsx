import { styled } from '@laodeaksarr/design-system';

export const StyledToolbarButton = styled('button', {
  backgroundColor: 'var(--laodeaksar-colors-body)',
  border: `1px solid var(--laodeaksar-colors-body)`,
  color: 'var(--laodeaksar-colors-foreground)',

  variant: {
    noActive: {
      false: {
        '&.ql-active': {
          backgroundColor: 'var(--laodeaksar-colors-body)',
          color: 'var(--laodeaksar-colors-foreground)',
        },
      },
    },
  },
});

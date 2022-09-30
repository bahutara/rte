import { styled } from '@bahutara/design-system';

export const StyledToolbarButton = styled('button', {
  backgroundColor: 'var(--laodeaksar-colors-body)',
  border: `1px solid var(--laodeaksar-colors-body)`,
  color: 'var(--laodeaksar-colors-foreground)',

  variants: {
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

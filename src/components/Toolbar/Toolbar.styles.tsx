import { styled } from '@laodeaksarr/design-system';

export const StyledToolbar = styled('button', {
  variants: {
    toolbarGroup: {
      true: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: `$2`,
      },
    },

    toolbar: {
      true: {
        zIndex: 1,
        backgroundColor: 'var(--laodeaksar-color-foreground)',
        borderBottom: `1px solid var(--laodeaksar-colors-body)`,
        btr: '$2',
        padding: `$2 $3`,
      },
    },

    toolbarInner: {
      true: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '-$2',
      },
    },
    sticky: {
      true: {
        $$stickyOffset: 0,

        position: 'sticky',
        top: '$$stickyOffset',
      },
      false: {
        position: 'relative',
        top: '$$stickyOffset',
      },
    },
  },
  defaultVariants: {
    sticky: true,
  },
});

import { css } from '@bahutara/design-system';

export const styles = css({
  backgroundColor: 'var(--laodeaksar-colors-brand)',
  border: `1px solid var(--laodeaksar-form-input-border)`,
  color: 'var(--laodeaksar-colors-typeface-primary)',

  variants: {
    noActive: {
      false: {
        '&.ql-active': {
          backgroundColor: 'var(--laodeaksar-colors-brand)',
          color: 'var(--laodeaksar-colors-typeface-primary)',
        },
      },
    },
  },
})();

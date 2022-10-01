import { Box, Shadows, styled } from '@bahutara/design-system';

export const StyledRichTextEditor = styled(Box, {
  fontSize: '$1',
  border: `1px solid var(--laodeaksar-form-input-border)`,
  backgroundColor: 'var(--laodeaksar-colors-foreground)',
  borderRadius: '$1',
  position: 'relative',
  color: 'var(--laodeaksar-colors-typeface-primary)',

  '.ql-toolbar': {
    borderTopRightRadius: '$1',
    borderTopLeftRadius: '$1',
  },

  '.ql-container': {
    position: 'relative',
    boxSizing: 'border-box',
    height: '$full',
    margin: 0,
    lineHeight: '$normal',
  },

  '.ql-editor': {
    whiteSpace: 'pre-wrap',
    outline: 'none',
    padding: `$1 $2`,
  },

  /*'.ql-container.ql-disabled .ql-tooltip': {
    display: 'none',
  },

  '.ql-tooltip': {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'var(--laodeaksar-colors-foreground)',
    padding: `$1 $2`,
    border: `1px solid var(--laodeaksar-form-input-border)`,
    boxShadow: Shadows[1],
    borderRadius: '$1',
    display: 'flex',
    alignItems: 'center',
  },

  '.ql-action::before': {
    content: `"Edit"`,
    cursor: 'pointer',
    display: 'block',
    whiteSpace: 'nowrap',
    height: 32,
    lineHeight: '$relaxed',
    backgroundColor: 'var(--laodeaksar-colors-foreground)',
    borderRadius: '$1',
    fontWeight: 500,
    padding: `0 $4`,
    marginRight: '$2',
    fontSize: '$2',
  },

  '.ql-remove::before': {
    content: `"Remove"`,
    cursor: 'pointer',
    color: 'var(--laodeaksar-colors-typeface-primary)',
    fontSize: '$2',
    display: 'block',
    height: 32,
    lineHeight: '$normal',
  },

  '.ql-hidden': {
    display: 'none',
  },

  '.ql-preview': {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: 180,
    marginRight: '$2',
  },

  '.ql-editing .ql-preview': {
    display: 'none',
  },

  '.ql-editing .ql-remove': {
    display: 'none',
  },

  '.ql-editing .ql-action::before': {
    content: `"Save"`,
    marginRight: 0,
  },

  '.ql-tooltip.ql-editing input': {
    display: 'block',
  },

  '.ql-tooltip input': {
    display: 'none',
    WebkitTapHighlightColor: 'transparent',
    height: 34,
    appearance: 'none',
    resize: 'none',
    boxSizing: 'border-box',
    fontSize: '$2',
    width: '100%',
    color: 'var(--laodeaksar-colors-typeface-primary)',
    textAlign: 'left',
    paddingLeft: '$1',
    paddingRight: '$2',
    borderRadius: '$1',
    marginRight: '$2',
    border: `1px solid var(--laodeaksar-form-input-border)`,
    backgroundColor: 'var(--laodeaksar-colors-foreground)',

    '&::placeholder': {
      opacity: 1,
      userSelect: 'none',
      color: 'var(--laodeaksar-colors-typeface-primary)',
    },

    '&:focus': {
      outline: 'none',
      borderColor: `var(--laodeaksar-form-input-border)`,
    },
  },

  '.ql-clipboard': {
    left: '-100000px',
    height: '1px',
    overflowY: 'hidden',
    position: 'fixed',
    top: '50%',
  },

  '.ql-align-center': {
    textAlign: 'center',
  },

  '.ql-align-right': {
    textAlign: 'right',
  },

  '.ql-mention-list-container': {
    border: `1px solid var(--laodeaksar-form-input-border)`,
    backgroundColor: 'var(--laodeaksar-colors-foreground)',
    borderRadius: '$1',
    overflow: 'hidden',

    '.ql-mention-list': {
      color: 'var(--laodeaksar-colors-typeface-primary)',
      paddingLeft: 0,
      marginTop: 0,
      margin: 0,
      listStyleType: 'none',

      '.ql-mention-list-item': {
        padding: '$1',
        textDecoration: 'none',
        cursor: 'pointer',
      },

      '.selected': {
        backgroundColor: 'var(--laodeaksar-colors-typeface-foreground)',
        color: 'var(--laodeaksar-colors-typeface-secondary)',
        textDecoration: 'none',
      },
    },
  },

  '.mention': {
    display: 'inline-block',
    color: 'var(--laodeaksar-colors-brand)',
    backgroundColor: 'var(--laodeaksar-colors-foreground)',
    padding: '3px 5px',
    marginRight: 2,
    borderRadius: '$1',
    userSelect: 'all',
    pointerEvents: 'none',
  },

  'iframe.ql-video': {
    width: '$full',
    height: 400,

    '@media (max-width: 755px)': {
      height: 220,
    },
  },

  a: {
    color: 'var(--laodeaksar-colors-typeface-primary)',
    textDecoration: 'none',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$display',
    fontWeight: '$2',
    marginTop: 0,
  },

  'ol, ul': {
    marginTop: '$2',
    paddingLeft: `$1`,
    listStylePosition: 'outside',
  },

  h1: {
    fontSize: '$7',
    marginBottom: '$2',
  },

  h2: {
    fontSize: '$6',
    marginBottom: '$2',
  },

  h3: {
    fontSize: '$5',
    marginBottom: '$2',
  },

  h4: {
    fontSize: '$4',
    marginBottom: '$2',
  },

  h5: {
    fontSize: '$3',
    marginBottom: '$2',
  },

  h6: {
    fontSize: '$2',
    marginBottom: '$2',
  },

  p: {
    marginTop: 0,
    marginBottom: '$2',
  },

  pre: {
    lineHeight: '$normal',
    borderRadius: '$1',
    color: 'var(--laodeaksar-colors-typeface-primary)',
    backgroundColor: 'var(--laodeaksar-colors-foregroumd)',
    fontFamily: '$mono',
    fontSize: '$1',
    padding: '$1',
    margin: 0,
    overflowX: 'auto',
  },

  code: {
    lineHeight: '$normal',
    borderRadius: '$1',
    color: 'var(--laodeaksar-colors-typeface-primary)',
    backgroundColor: 'var(--laodeaksar-colors-foreground)',
    fontFamily: '$mono',
    fontSize: '$1',
    padding: `2px $1`,
  },

  blockquote: {
    marginTop: 0,
    marginLeft: 0,
    marginBottom: '$2',
    paddingLeft: '$2',
    color: 'var(--laodeaksar-colors-typeface-primary)',
    borderLeft: `4px solid var(--laodeaksar-form-input-border)`,
  },

  img: {
    display: 'block',
    position: 'relative',
    maxWidth: '100%',
    marginBottom: '$2',
  },

  '.ql-image-uploading img': {
    filter: 'blur(10px)',
  },

  '.ql-blank': {
    '&::before': {
      content: 'attr(data-placeholder)',
      position: 'absolute',
      left: '$space$1',
      right: '$space$1',
      color: 'var(--laodeaksar-colors-typeface-primary)',
    },
  },*/
});

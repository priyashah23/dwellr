import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  borderColor: 'transparent',
  background: 'buttonPrimaryBackgroundDefault',
  color: 'buttonPrimaryTextDefault',
  _hover: {
    background: 'buttonPrimaryBackgroundHover'
  },
  _active: {
    background: 'buttonPrimaryBackgroundActive'
  },
});

const contrast = defineStyle({
  borderColor: 'transparent',
  background: 'buttonPrimaryContrastBackgroundDefault',
  color: 'buttonPrimaryContrastTextDefault',
  _hover: {
    background: 'buttonPrimaryContrastBackgroundHover'
  },
  _active: {
    background: 'buttonPrimaryContrastBackgroundActive'
  },
});

const secondary = defineStyle({
  borderColor: 'buttonSecondaryBorderDefault',
  background: 'transparent',
  color: 'buttonSecondaryTextDefault',
  _hover: {
    background: 'buttonSecondaryBackgroundHover',
    color: 'buttonSecondaryTextHover',
  },
  _active: {
    background: 'buttonSecondaryBackgroundActive',
    color: 'buttonSecondaryTextActive'
  },
  _selected: {
    background: 'buttonSecondaryBackgroundSelected',
    color: 'buttonSecondaryTextSelected'
  }
});

export const button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'sm',
    border: '1px solid',
    _focus: {
      outline: '2px solid',
      outlineColor: 'focus'
    },
    _hover: {
      borderColor: 'transparent'
    }
  },
  variants: {
    primary,
    contrast,
    secondary
  },
  defaultProps: {
    variant: 'primary'
  }
});

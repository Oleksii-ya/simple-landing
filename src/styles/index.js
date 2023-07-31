import { createTheme } from '@mui/material/styles';

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

// TODO: define overrides object to create theme
const overrides = {
  primary: {
    main: Colors.primary
  },
  secondary: {
    main: Colors.secondary
  },
  success: {
    main: Colors.success
  },
  info: {
    main: Colors.info
  },
  warning: {
    main: Colors.warning
  },
  error: {
    main: Colors.danger
  },
  dark: {
    main: Colors.dark
  },
  light: {
    main: Colors.light
  },
  muted: {
    main: Colors.muted
  },
  border: {
    main: Colors.border
  },
  inverse: {
    main: Colors.inverse
  },
  shaft: {
    main: Colors.shaft
  },
  dove_gray: {
    main: Colors.dove_gray
  },
  body_bg: {
    main: Colors.body_bg
  },
  while: {
    main: Colors.white
  },
  black: {
    main: Colors.black
  }
};

// TODO: use overrides object to create theme
const theme = createTheme({
  palette: overrides
});

export { overrides };
export default theme;

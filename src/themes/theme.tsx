import { ThemeProvider } from "styled-components";

const primary = '#121212', 
        secundary = '#212b46',
        mainColor = '#ffffff82';

const theme = {
    color: {
        primary,
        secundary,
        mainColor,
    }
}

export type ThemeType = typeof theme;

interface Props {
    children?: React.ReactNode;
  }

export const Theme: React.FC<Props> = ( { children } ) => {
    return (
        <ThemeProvider theme={theme}> {children} </ThemeProvider>
    )
}
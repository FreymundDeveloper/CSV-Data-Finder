import { ThemeProvider } from "styled-components";

//const fontSizes: any = [20, 24, 40]

const primary = '#121212';
const secundary = '#212b46';

const theme = {
    color: {
        primary,
        secundary,
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
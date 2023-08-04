import { type } from "os";
import { ThemeProvider } from "styled-components";
import { color } from "styled-system";

const fontSizes: any = [20, 24, 40]
/*fontSizes.body = fontSizes[0]
fontSizes.bodyExtraLarge = fontSizes[1]
fontSizes.displayLarge = fontSizes[2]*/

const primary = '#121212';
const secundary = '#212b46';

const theme = {
    fontSizes,
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
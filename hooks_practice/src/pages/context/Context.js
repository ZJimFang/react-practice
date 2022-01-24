import React from 'react';
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext';

const Context = () => {
    return (
        <ThemeProvider>
            <FunctionContextComponent />
        </ThemeProvider>
    )
}
export default Context
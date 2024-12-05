import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        transition: background 0.5s;
        display: flex;
        font-variant: tabular-nums;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
        line-height: 1.5rem;
    }
    
    #root { 
        display: flex;
        flex: 1;
        overflow: hidden;
    }

    *::-webkit-scrollbar {
        width: 8px; 
        height: 8px; 
    }

    *::-webkit-scrollbar-track {
        background-color: #1A1A1E; 
    }

    *::-webkit-scrollbar-thumb {
        background-color: #444; 
        border-radius: 60px; 
        box-shadow: inset 0 0 10px #1A1A1E; 
    }

    *::-webkit-scrollbar-thumb:hover {
        background-color: #666; 
    }
`;


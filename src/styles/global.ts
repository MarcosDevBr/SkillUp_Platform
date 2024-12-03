import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: rgba(0,0,0,0.1) white;
    }

    body {
        height:100vh;
        width:100vw;
        overflow: hidden;
        transition: background 0.5s;
        display: flex;
        font-variant: tabular-nums;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        font-size: 1rem;
		line-height: 1.5rem;
        
        h2 {
            color: rgba(0,0,0,.85);
            font-weight: 500;
            margin-bottom: 0.5em;
            margin-top: 0;
        }
        
    }
    
    #root { 
        display: flex;
        flex: 1;
        overflow:hidden;
    }

    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        -webkit-box-shadow: none;
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.1);
        border-radius: 60px;
    }
`;

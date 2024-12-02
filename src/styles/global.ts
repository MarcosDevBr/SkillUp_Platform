import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;

        // firefox styles
        scrollbar-width: thin;
        scrollbar-color: rgba(0,0,0,0.1) white;
    }

    body {
        background: ${(props) => props.theme.SYSTEM_BACKGROUND};
        height:100vh;
        width:100vw;
        overflow: hidden;
        transition: background 0.5s;
        display: flex;
        color:${(props) => props.theme.ITENS_TEXT};

        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        font-size: 13px;
        font-variant: tabular-nums;
        line-height: 1.5715;

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

    // Mapa leaflet

    .leaflet-container {
      font: inherit;
    }

    /* ANTD colors  */

    .ant-btn-primary  {
        background: ${(props) => props.theme.PRIMARY_MAIN};
        border-color: ${(props) => props.theme.PRIMARY_MAIN};

        :not(:disabled):hover {
            background: ${(props) => props.theme.PRIMARY_LIGTH};
            border-color: ${(props) => props.theme.PRIMARY_LIGTH};
        }
        :focus {
            background: ${(props) => props.theme.PRIMARY_MAIN};
            border-color: ${(props) => props.theme.PRIMARY_MAIN};
        }

        :active {
            background: ${(props) => props.theme.PRIMARY_DARK};
            border-color: ${(props) => props.theme.PRIMARY_DARK};
        }
    }

    .ant-tooltip {
        z-index:2000;
    }

    .ant-popconfirm {
        z-index:2000;
    }

    .ant-message {
        z-index: 2000;
        margin-left: 100px;
    }
`;

import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    display: flex;
    overflow: hidden;

    .templateSiderMenuContent-sider {
        align-items: center;
        position: relative;
        display: flex;
        width: 240px;
        flex-direction: column;
        background-color: ${(props) => props.theme.ITENS_BACKGROUND};
        border-right: 1px solid #29292e;
        overflow: hidden;
        padding: .75rem;

        .close-sider {
            font-size: 15px !important;
            position: absolute;
            color: #8e4dff;
            left: 255px;
            top: 35px;
        }

        &.closed {
            width: 0;
            border: 0;
            padding: 0;
        }

        .help-container {
            display: flex;
            position: absolute;
            bottom: 0;
            width: 190px;
            height: 3rem; 
            padding: 0 0.75rem; 
            border-radius: 0.25rem;
            color: #D1D5DB; 
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;

            gap: 1rem; 
            border-radius: 4px;
            transition: all 0.2s; 
            color: #d1d5db; 
            background-color: transparent; 
            cursor: pointer;

            &:hover {
                background-color:${(props) => props.theme.COLORS.GRAY_800};
            }

            .help-container-icon-plus-text {
                display: flex;
                align-items: center;
                justify-content: center;

                .help-container-icon {
                    margin-right: 12px;
                }

              
            }

            .help-container-right {
                font-size: 16px;
            }
        }
    }

    .templateSiderMenuContent-content {
        display: flex;
        flex: 1;
        background-color: ${(props) => props.theme.ITENS_BACKGROUND};
        overflow: hidden;
        padding: 24px 174px;
        overflow-y: auto; 
    }

`;

const SOptionWrapper = styled.div<{ isSelect: boolean }>`
    display: flex;
    height: 3rem; 
    width: 190px;
    align-items: center;
    gap: 1rem;
    padding: 0 0.75rem; 
    border-radius: 0.25rem;
    margin-top: 12px;
    color: #D1D5DB; 
    background-color:${(props) => (props.isSelect ? props.theme.COLORS.GRAY_800 : props.theme.COLORS.BACKGROUND_COLOR)};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color:${(props) => props.theme.COLORS.GRAY_800};
    }

    &:active {
        opacity: 0.7;
    } 

    span {
        font-size: 16px;
        color:${(props) => props.theme.COLORS.WHITE};
    }

    .templateSiderMenuContent-icon {
        color:${(props) => (props.isSelect ? props.theme.COLORS.BRAND_LIGHT : props.theme.COLORS.GRAY_200)};
    }
`;

export {
    SOptionWrapper,
    Container
}

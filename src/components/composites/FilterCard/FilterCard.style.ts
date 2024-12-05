import styled from "styled-components";
export const Container = styled.div<{ isSelect: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: 80px;
    height: 28px;
    border: 1px solid #29292e;
    border-radius: 12px;
    padding: .75rem;
    background-color:${(props) => (props.isSelect ? props.theme.COLORS.GRAY_600 : props.theme.COLORS.BACKGROUND_COLOR)};
    margin-right: 20px;
    cursor: pointer;

    &:hover {
        border-color:${(props) => props.theme.COLORS.GRAY_200};
        background-color: ${(props) => props.theme.GRAY_600};
    }

    span {
        font-size: 16px;
        color:${(props) => props.theme.COLORS.GRAY_200};
        font-weight: 500;
    }
`

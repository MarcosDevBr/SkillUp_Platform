import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;  
    margin-bottom: 15px;
    gap: 0.5rem;
    border-radius: 6px;
    margin-bottom: 20px;

    label {
        display: flex;
        color: #c4c4cc;
        font-size: 0.875rem;
        line-height: 160%;
    }

    .textInput-input {
        background-color: #121214;
        border-color: #29292E;
        height: 48px;
        color: #FFFFFF; 
        border-radius: 6px;
		align-items: center;
    }

    .textInput-input::placeholder {
        color: #e1e1e6 !important; 
        font-weight: 400;
    }

    .eyeIcon {
        color: #e1e1e6; 
        cursor: pointer;
    }

	.anticon, .anticon-close-circle {
		color: #e1e1e6;
	}
`;

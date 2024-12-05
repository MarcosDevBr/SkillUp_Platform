import styled from "styled-components";
import { Input as AntdInput } from 'antd';

export const SysAntdInput = styled(AntdInput)`
  display: flex;
  height: 48px;
  align-items: center;
  min-width: 478px;
  padding: 4px;
  padding-left: 10px;
  gap: 0.5rem;
  padding: 0 1rem;
  background-color: #121214 !important;
  border: 1px solid #202024;
  transition: border-color 0.2s ease;
  color: #7c7c8a;
  font-size: 15px;

  .search-prefix-search-icon {
      color: #7c7c8a;
  }

  .search-suffix {
    display: flex;
    align-items: center;
    height: 24px;
    width: 24px;
    background-color: #121214;

    .search-suffix-img {
      width: 100%;
      height: 100%;
    }

    .search-suffix-close-icon {
      margin-left: 6px;
    }
  }

  ::placeholder {
    color: #7c7c8a !important;
  }

  &:hover {
    background-color: #121214 !important;
    border-color: #202024;
  }

  &:active {
    background-color: #121214 !important;
  }

  &:focus,
  &:focus-within {
    border: 2px solid #fff !important;
    outline: none;
    background-color: #121214 !important;
  }

  .placeholder-text {
    font-size: 24px;
    color: #fff;
  }
`;
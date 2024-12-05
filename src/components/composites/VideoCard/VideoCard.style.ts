import { Modal } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 316px;
  height: 384px;
  border: 1px solid #29292e;
  border-radius: 12px;
  padding: 0;
  margin-right: 20px;
  background-color: #1c1c1e;
  overflow: hidden;
  position: relative;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

`;

export const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .thumbnail {
    display: flex;
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    cursor: pointer;

    img, video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hover-icons-wrapper {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        color: white;
    }

    &:hover .hover-icons-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .description {
      font-size: 14px;
      color: #a0a0a0;
      margin-bottom: 8px;
    }

    .buttons {
      display: flex;
      gap: 8px;

      button {
        flex: 1;
        padding: 12px 16px;
        border: 1px solid #4a4a4a;
        border-radius: 8px;
        background: transparent;
        color: #fff;
        cursor: pointer;
        transition: background 0.3s;

        font-size: 1rem;
        font-weight: bold;

        &:hover {
          background: #333;
        }
      }

      .access-button {
        background-color: #8257E5;
        border: none;

        &:hover {
          background-color: #9A76EB;
        }
      }
    }
  }
`;

export const CustomModal = styled(Modal)`
  .ant-modal-content {
    background-color: #121214; 
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .ant-modal-header {
    background-color: #121214; 
  }

  .ant-modal-title {
    color: #E1E1E6;
  }

  .anticon svg {
    color: #E1E1E6;
  }

`;

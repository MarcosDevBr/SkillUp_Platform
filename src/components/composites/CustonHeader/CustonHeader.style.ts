import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #1A1A1E;
  padding-right: 1rem; 
  padding-left: 1rem;
  border-bottom: 1px solid #29292e;
  align-items: center;
  justify-content: space-between;

  .header-search {
    min-width: 478px;
    height: 48px;
    padding: 0 1rem; 
  }

  .header-logo {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .header-profile {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: auto;

    .header-profile-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      border-radius: 4px;
      background-color: #121214 !important;
      border: 1px solid #202024;
      width: 42px;
      height: 42px;
      position: relative;
      cursor: pointer;

    }

    .header-profile-icon-notifications {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -8px;
      right: -4px;
      background-color: #8234e9;
      border-radius: 4px;
      width: 28px;
      height: 20px;

      span {
        font-size: 12px;
        color: #fff;
        font-weight: bold;
      }
    }

    .header-profile-avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      cursor: pointer;
    }
  }
`;

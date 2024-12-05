import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;

  .catalog-header {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;

      .catalog-header-title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #e1e1e6;
        line-height: 160%;
      }

      .catalog-header-subtitle {
        font-size: 14px;
        color: #8d8d99;
        margin-bottom: 20px;
        line-height: 160%;
      }
  }

  .catalog-filter-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 32px;

    .catalog-filter-container-filter-cards {
      display: flex;
      align-items: center;
      width: 80%;
    }

    .catalog-filter-container-date-filter {
      display: flex;
      align-items: center;
      align-items: center;
      justify-content: center;
      width: auto;
      height: 32px;
      gap: 1rem; 
      border-radius: 4px;
      transition: all 0.2s; 
      padding: 0 0.75rem; 
      color: #D1D5DB; 
      cursor: pointer;
      span {
        font-size: 16px;
        font-weight: 600;
      }

      &:hover {
        background-color:${(props) => props.theme.COLORS.GRAY_800};
      }
    }

   
  }

  .catalog-videos-container {
      display: flex;
      flex-wrap: wrap; 
      width: 100%;
      max-height: 1000px;
      margin-top: 20px;
      align-items: flex-start;
      gap: 1rem; 

    }

  .video-card {
      width: calc(33.333% - 1rem);
  }
`;

export {
    Container
}

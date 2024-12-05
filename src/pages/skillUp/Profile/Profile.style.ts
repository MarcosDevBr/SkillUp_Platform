import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  .profile-details {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    margin-right: 20px;
    border: 1px solid #29292e;
    border-radius: 4px;
    background-color: #1A1A1E;
    position: relative;
    min-width: 400px;

    /* Título absoluto */
    .profile-details-title {
      position: absolute;
      top: 10px;
      left: 20px;
      font-size: 18px;
      color: #fff;
      font-weight: bold;
    }

    .profile-details-img-container {
      background-color: #121214;
      width: 100%;
      height: 30%;
      border-bottom: 1px solid #29292e;
      position: relative;
      z-index: 4;

      .profile-details-img {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: auto;
        object-fit: cover;
        border-radius: 50%;
        transition: width 0.3s, height 0.3s;
      }
    }

    .profile-details-texts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;  
      justify-content: center;
      z-index: 1;
      width: 100%;
      height: 70%;

      padding-left: 60px;

      span {
        font-size: 24px;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      p {
        color: #fff; 
        font-size: 16px; 
        margin: 5px 0;
      }
    }
  }

  .profile-content {
    position: relative;
    display: flex;
    width: 50vw;
    min-width: 400px;
    height: 100%;
    border: 1px solid #29292e;
    border-radius: 4px;
    background-color: #1A1A1E;
    flex-direction: column;
    background-color: ${(props) => props.theme.GRAY_700};

    .last-videos-container {
        display: flex;
        flex-direction: column;
        height: 70%; 
        width: 100%;
        padding: 20px;

        .last-videos {
            display: flex;
            width: 100%;
            height: 100%;
            flex-wrap: wrap; 
            gap: 10px;
            overflow-y: auto; 
        }

        span {
            color: #fff; 
            font-size: 2rem;    
            line-height: 1.5rem;
            margin-bottom: 20px;
        }


    }

    .delete-account {
        display: flex;
        height: 30%;
        width: 100%;
        padding: 20px;
        padding-bottom: 100px;
        align-items: flex-end;
        flex-wrap: wrap;
        color: #fff; 
        font-size: 1rem;    
        line-height: 1.5rem;

        h2 {
            color: #fff; 
            font-size: 2rem;    
            line-height: 1.5rem;
        }

        
        span {
            color: #fff; 
            font-size: 1rem;    
            line-height: 1.5rem;
        }

    }


    .delete-button {
        position: absolute;
        bottom: 20px;
        left: 20px;
        display: flex;
        width: 190px;
        height: 40px;
        background-color: #121214;
        color: #CF5D5D;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background: #333;
        }

    }
  }
`;

export { Container };

// import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";

export const WrapperStyle = styled(Box)`
  .body_content {
    .MuiContainer-root {
      @media (max-width: 899px) {
        max-width: 100%;
      }
    }
  }
  span {
    line-height: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
  //   ======================

  .wrapper_dashBoard {
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;

    @media (max-width: 1199px) {
      padding: 0 0 30px;
    }
    .leftPartSidebar {
      width: 376px;

      @media (max-width: 1499px) {
        width: 280px;
      }
      @media (max-width: 1199px) {
        width: 280px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
        height: 100%;
        transform: translateX(-100%);
        transition: 0.3s ease-in-out;
        background: rgba(221, 245, 255, 1);
      }
      &.active {
        transform: translate(0);
        transition: 0.3s ease-in-out;
      }
      .closeIconBtn {
        display: none;
        @media (max-width: 1199px) {
          display: block;
          position: absolute;
          right: 10px;
          top: 10px;
          button {
            background: transparent;
            width: 35px;
            height: 35px;
            min-width: auto;
            padding: 4px;
            border-radius: 50%;
          }
        }
      }
    }
    .rightPart_wrapper {
      width: calc(100% - 376px);
      padding-left: 50px;
      @media (max-width: 1499px) {
        padding-left: 20px;
        width: calc(100% - 280px);
      }

      @media (max-width: 1199px) {
        width: 100%;
        padding: 0;
      }
    }
  }
  .dashBoardMenuIcon {
    position: relative;
    display: none;
    @media (max-width: 1199px) {
      display: block;
      padding-top: 30px;
    }
    button {
      font-size: 20px;
      font-weight: 600;
      color: 'blue';
      padding: 0;
      i {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: ${blue};
        min-width: auto;
        border-radius: 50%;
        padding: 10px;
        margin-right: 15px;
      }
      &:hover {
        color: ${blue};
        i {
          background: "white";
        }
      }
    }
  }

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    left: 0;
    top: 0;
    z-index: 99;
    display: none;
    &.active {
      display: block;
    }
  }
`;

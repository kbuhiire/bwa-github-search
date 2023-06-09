import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    font-size: 14px;
  }


  .pagination {
    justify-content: center;
    display: flex;
    padding-left: 0;
    list-style: none;
  }

  .page-item .page-link {
    position: relative;
    display: block;
    margin: 0 5px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #007bff;
    text-decoration: none;
  }

  .page-item a.page-link:hover {
    background-color: #cccccc;
  }

  .page-item.active .page-link {
    font-weight: 700;
    color: #ffffff;
    background-color: #007bff;
  }

  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
  }
  `
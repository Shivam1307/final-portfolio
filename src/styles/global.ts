import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #DEC20B;
    --blue: #016fb9;
    --yellow: #DEC20B;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }



  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--yellow);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    &::first-letter{
      color: var(--yellow);
    }
  }
  .d-flex {
    display: flex;
  }
  
  .main {
    max-width: 350px;
    box-shadow: 0px 0px 20px #0000001a;
    padding: 10px;
    font-family: "Red Hat Display", sans-serif;
  }
  .timedata {
    margin-bottom: 20px;
    border-bottom: 2px solid rgb(184, 184, 184);
  }
  .time {
    margin-bottom: 10px;
    font: normal normal Bold 40px Open;
  }
  .todaydate {
    margin-bottom: 10px;
  }
  .calendar {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(184, 184, 184);
  }
  .notes-container {
    height: 500px;
    width: 500px;
    border: 1px solid;
    position: "relative";
    display: "grid";
    align-items: "center";
    justify-items: "center";
  }
  .dateinnotes {
    margin: 10px 10px 10px 0px;
  }
  .notes-wrapper {
    min-height: 100px;
    min-width: 100px;
    margin-top: 2px;
    padding: 5px;
    border-radius: 5px;
  
    background: transparent;
    border-radius: 2px;
    opacity: 1;
    color: white;

  }
  .notes {
    min-height: 100px;
    cursor: "grab";
    max-height: 100px;
    overflow: auto;
    border: 2px solid rgb(160, 160, 160);
    border-radius: 4px;
  }

  .react-calendar {
    background: transparent !important;
    border: none !important;
    
  }
  .react-calendar__month-view__days__day--weekend{
    color:white !important
  }
  .d-flex{
    dispay:flex
  }
  .projectdesc{
    margin:5px
  }

`;

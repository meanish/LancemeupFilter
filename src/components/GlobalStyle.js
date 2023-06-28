import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Work-Sans",sans-serif;
}
html{

  font-size: 80%;
    overflow-x:hidden;
}

body{
    overflow-x:hidden;
    scrollbar-width:thin;
     transition: all 300ms;
     background-image:${({ theme }) => theme.img.backgroundimage}
}
img{
    max-width: 100%;
    margin-top: 1.5rem;
    height: 15rem;
    transition: all 0.2s linear 0s;
}

.small-logo{
  width:4rem;
  height:auto;
}

.container{
    margin:auto;
    padding:0 06rem;
}

.icons{
  color: ${({ theme }) => theme.colors.icons};
}

//company logo
.logo_img{
   width:12rem;
   height:auto;
}

.loader{
  font-size:25px;
  color:red;
  min-height:80vh;
  position:absolute;
  left: 50%;
  top: 50%;
}

//..................Grid section...............//
.grid {
  display: grid;
  gap: 3.5rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1fr 1fr 1fr ;
}
.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

//.................Responsive.....................................//
@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }
.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }
//..................Grid section...............//



`;
export default GlobalStyles;

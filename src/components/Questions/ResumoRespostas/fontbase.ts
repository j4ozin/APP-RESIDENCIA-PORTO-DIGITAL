import fontBase64 from "./fontBase64";


const style = document.createElement('style');
style.innerHTML = `
  @font-face {
    font-family: 'Poppins';
    src: url(data:font/ttf;base64,${fontBase64}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'Poppins', sans-serif;
    color: #333;
  }
`;
document.head.appendChild(style);

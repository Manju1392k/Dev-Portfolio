/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';

function App() {

  // To reload the page
  const ReloadPage = () => {
    window.location.reload();
  }

  // To Access the MenuBar 
  const OpenMenu = () => {
    if (document.getElementById('Menubar')) {
      document.getElementById('Menubar').style.width = '100vw';
    }
  }

  // To Close the MenuBar
  const CloseMenu = () => {
    if (document.getElementById('Menubar')) {
      document.getElementById('Menubar').style.width = '0vw';
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* navbar */}
        <div className="navbar">
          <i class="bi bi-house-door" id='home'></i>

          <div>
            <a href='#'>
              <i class="bi bi-telephone-fill" id='contact'></i>
            </a>
          </div>

          <div>
            <a href='#' >
              <i class="bi bi-envelope-check" id='email'></i>
            </a>
          </div>

        </div>

        {/* mobilenavbar */}
        <div className="mobilenavbar">
          <div>
            <h2>Dev Portfolio</h2>
          </div>

          <div>
            <i class="bi bi-list" id='menuicon' onClick={OpenMenu}></i>
          </div>
        </div>

        {/* menubar */}
        <div className="menubar" id='Menubar'>

          <i class="bi bi-x-circle-fill" id='close' onClick={CloseMenu}></i>

          <i class="bi bi-house-door" id='home'></i>

          <div>
            <a href='#'>
              <i class="bi bi-telephone-fill" id='contact'></i>
            </a>
          </div>

          <div>
            <a href='#' >
              <i class="bi bi-envelope-check" id='email'></i>
            </a>
          </div>
        </div>

        <div className="main">

          {/* whitebox shadowbox */}
          <div className="whitebox">

            <div className='textdiv'>
              <h4>Hi fellow creator!</h4>
              <h2>I'm Dev, the founder, designer & engineer behind the toolbox.</h2>
              <h3>For many years, I was struggling to create engaging visuals for products, branding and interfaces. Their creation required pro design skills or many hours of practice.</h3>
              <h3>That's why I build MagicPattern. My mission is to help people create pro graphics with no effort and no prior design knowledge.</h3>
              <h1 className='blue'>- Dev </h1>
            </div>

            {/* Box for Image and Icons */}
            <div className='boximage'>

              <img src={'person.jpg'} alt='loading' className='ProfileImage' />
              <div>
                <a href='#' onClick={ReloadPage} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blue" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>

                <a href='#' onClick={ReloadPage} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blue" class="bi bi-facebook" viewBox="0 0 16 16" id='facebook'>
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>

                <a href='#' onClick={ReloadPage} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blue" class="bi bi-globe" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                  </svg>
                </a>

              </div>

            </div>

          </div>

        </div>

      </header>
    </div>
  );
}

export default App;

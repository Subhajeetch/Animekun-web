const headerHTML = document.querySelector('.js-header');

headerHTML.innerHTML = `

  <nav>
     <img class="logo-one" src="/images/logo.png" height="55px" width="auto" alt="animekun discord server logo" onclick="
      
      window.location.href = '/';
      
      ">

    <input type="checkbox" id="sidebar-active">

    <label for="sidebar-active" class="open-sidebar-button">
      
      <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      
    </label>
    
    <label id="overlay" for="sidebar-active"></label>
    
    <div class="links-container">
      
      <label for="sidebar-active" class="close-sidebar-button">
        
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        
      </label>

      <img class="logo-two" src="/images/logo.png" height="50px" width="auto" alt="anime-kun discord server logo">
      
      
      <a class="home-link" href="/">Home</a> 
      
      <a href="/pages/seasons">Seasons</a>
      
      <a href="/pages/about">About</a> 
      
      <a href="/pages/contact">Contact</a>
      
      
      <button onclick="window.location.href = 'https://discord.com/invite/fQWa2Ezm34';" class="wbtn">Join Server</button>
      
        <button onclick="window.location.href = 'https://discord.com/invite/fQWa2Ezm34';" class="mbtn">Join Server</button>
    </div>
    
    <div class="extra">
      
    </div>
  </nav>

`;
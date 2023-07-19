const popup = document.querySelector('.popup');
  
  const projectButtons = document.querySelectorAll('.gallary-item');
  
  for (let index = 0; index < projectButtons.length; index++) {
    projectButtons[index].addEventListener('click', () => {
        // const title = popup.querySelector('.popup-title');
        // const liveButton = popup.querySelector('.see-live');
        // const sourceButton = popup.querySelector('.see-source');
        // const popupContent = popup.querySelector('.popup-content');
  
        // title.textContent = projectArr[index].title;
        // if (window.innerWidth < 768) {
        //   popupContent.style.backgroundImage = `url('${projectArr[index].mobileImage}')`;
        // } else {
        //   popupContent.style.backgroundImage = `url('${projectArr[index].desktopImage}')`;
        // }
  
        // liveButton.setAttribute('href', projectArr[index].live);
        // sourceButton.setAttribute('href', projectArr[index].source);
  
        popup.classList.add('show')
        document.body.style.overflowY = 'hidden';
    }) 
  }
  
  const btnClosePopup = document.querySelector('.popup-close');
  btnClosePopup.addEventListener('click', () => {
      popup.classList.remove('show');
      document.body.style.overflowY = 'auto';
  })
  
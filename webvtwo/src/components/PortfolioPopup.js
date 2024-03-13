import React, { useEffect } from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const PortfolioPopup = ({ visible, onClose, projectData }) => {
  const { title, description, images, github, youtube } = projectData || {};

  const copyToClipboard = () => {
    if (github) {
      navigator.clipboard.writeText(github)
        .then(() => {
          alert('GitHub link copied to clipboard!');
        })
        .catch((error) => {
          console.error('Failed to copy GitHub link: ', error);
        });
    } else {
      alert('GitHub link not available!');
    }
  };

  const closeProject = () => {
    onClose();
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };


  
  useEffect(() =>{
    

    const popUp = document.querySelector('.project-Description');
    const overlay = document.querySelector('#overlayPopUp');

    // Update project details in the description box
    const titleElement = popUp.querySelector('.title');
    const descriptionElement = popUp.querySelector('.project-Description-body p');
    const imagesContainer = popUp.querySelector('.project-Description-Media');
    const gitLink = popUp.querySelector('.project-Description-body').querySelector('.copy-text').querySelector('.text');
    const videoIdk = popUp.querySelector('.project-Description-body').querySelector('.YTVideo');
    titleElement.textContent = title;
    descriptionElement.textContent = description;
    imagesContainer.innerHTML = ''; // Clear previous images
    gitLink.value = github;
    // Add images to the container

    if(images){
    images.forEach(imageSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imagesContainer.appendChild(imgElement);
    });
  }
    // Display the description box and overlay
    overlay.style.display = 'inline-block';
    popUp.style.display = 'inline-block';
},[visible])

  return (
    <div style={{display: visible ? 'block' :'none'}}>
    <div className="project-Description" >
      <div className="project-Description-Header">
        <div className="title">{title || 'Example Model'}</div>
        <button className="close-button" onClick={closeProject}>&times;</button>
      </div>
      <div className="project-Description-Media">
       
      </div>
      <div className="project-Description-body">
        
      <p></p>
        <div className="video-container">
          <YouTube className="YTVideo" videoId={youtube} opts={opts} />
        </div>


        <div className="toDoforClone">
          <div>
            <h1 className="instructions"><br />(1) Open Git Bash.<br />
              (2) Change the current working directory to the location where you want the cloned directory.<br />
              (3) Type git clone, and then paste the URL you copied earlier.</h1>
            <div className="copy-text">
              <input type="text" className="text" />
              <button className="copyButton" onClick={copyToClipboard}>copy</button>
            </div>
            <h1 className="instructions">If you don't have Git Bash <br />
              Install git first</h1>
          </div>
          <div className="buttonSeparator">
            <div></div>
            <div>
              <button className="close-button closeBtn" onClick={closeProject}><p>Close</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div id="overlayPopUp" onClick={closeProject}></div>
    </div>
  );
};

export default PortfolioPopup;

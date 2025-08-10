

<div className={contactStyles.socialLinks}>
  <a 
    href="https://instagram.com/your_instagram_handle" 
    className={contactStyles.socialIconLink} 
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={`${contactStyles.socialIconCircle} ${contactStyles.instagram}`}>
      <FontAwesomeIcon icon={faInstagram} className={contactStyles.socialIcon} />
    </div>
    <span>Instagram</span>
  </a>
  
  <a 
    href="https://discord.gg/your_discord_invite" 
    className={contactStyles.socialIconLink} 
    aria-label="Discord"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={`${contactStyles.socialIconCircle} ${contactStyles.discord}`}>
      <FontAwesomeIcon icon={faDiscord} className={contactStyles.socialIcon} />
    </div>
    <span>Discord</span>
  </a>
  
  <a 
    href="https://github.com/your_github_org" 
    className={contactStyles.socialIconLink} 
    aria-label="GitHub"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={`${contactStyles.socialIconCircle} ${contactStyles.github}`}>
      <FontAwesomeIcon icon={faGithub} className={contactStyles.socialIcon} />
    </div>
    <span>GitHub</span>
  </a>
  
  <a 
    href="https://tiktok.com/@your_tiktok_handle" 
    className={contactStyles.socialIconLink} 
    aria-label="TikTok"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={`${contactStyles.socialIconCircle} ${contactStyles.tiktok}`}>
      <FontAwesomeIcon icon={faTiktok} className={contactStyles.socialIcon} />
    </div>
    <span>TikTok</span>
  </a>
</div>

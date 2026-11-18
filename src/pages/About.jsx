function ProjectArtwork({ className }) {
  if (className === 'sonder') {
    return (
      <div className="artwork artwork-sonder" aria-hidden="true">
        <div className="sonder-sun" />
        <div className="sonder-window">
          <div className="window-top"><i /><i /><i /></div>
          <div className="window-copy">
            <span>STAY A LITTLE</span>
            <strong>Somewhere<br />that feels like<br /><em>you.</em></strong>
            <div className="window-button">Find your stay <ArrowIcon /></div>
          </div>
          <div className="window-photo" />
        </div>
        <span className="artwork-note">A softer kind of stay</span>
      </div>
    )
  }

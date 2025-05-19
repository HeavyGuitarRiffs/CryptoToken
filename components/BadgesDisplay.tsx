import React from 'react'

const BadgesDisplay = () => {
  const badges = ['Referral Master', 'Top Contributor'] // Example badges

  return (
    <div className="badges-display">
      <h3>Your Badges</h3>
      <ul>
        {badges.map((badge, index) => (
          <li key={index}>{badge}</li>
        ))}
      </ul>
    </div>
  )
}

export default BadgesDisplay

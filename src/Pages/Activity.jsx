import React from 'react'
import "../Styles/Activity.scss";
const Activity = () => {
    return (
        <div className='Activity'>
            <h1>
                Activities
            </h1>
            <div className="centered">
                <img loading="lazy" id='live-activity' src="Link-required" alt="Github Activity Info" />
                <img loading="lazy" id='contributeImage' src={"load-your-github-image"} alt="Github Contribution Graph" />
            </div>
        </div>
    )
}

export default Activity
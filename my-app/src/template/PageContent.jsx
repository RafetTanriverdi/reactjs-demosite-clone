import React from 'react'
import ProjectSection from './Page Content/ProjectSection'
import AboutSection from './Page Content/AboutSection'
import Location from './Page Content/Location'

function PageContent() {
    return (
        <>
            <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
                <ProjectSection/>
                <AboutSection/>
                <Location/>
            </div>
        </>
    )
}

export default PageContent
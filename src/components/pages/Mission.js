import React from 'react'
import RocketLogo from '../../static/images/rocket_logo.png'
import ChemistryGirls from '../../static/images/chemistry-girls.jpg'
import './Mission.css'

const Mission = () => {
  return (
    <div className='mission__container'>
      <div className='mission__image-container'>
        <div className='mission__image-our-mission'>
          <img src={ RocketLogo } alt="Rocket logo" />
        </div>
        <div className='mission__text'>
          <div className='mission__heading-container'>
            <span className='mission__heading'>Our Mission</span>
          </div>
          <p className='mission__body-text'>
            Welcome to Mr. Reed's STEAM Lab! We are excited to share what we've created with you and your students.
            Joe and Tish Reed are retired educators with over 60 years experience between them.
            They share a passion for anything and everything science. Joe loves to ignite the curiosity of students with hands-on,
            inquiry-based explorations and Tish loves to find ways to integrate science into all subject areas.
            Joe and Tish have compiled STEAM challenges and activities to support classroom teachers and Expanded Learning facilitators.
            Consideration has been made for ease of finding materials and the goal is that activities can be completed easily.
            Step-by-step instructions are given in the videos. Some videos also contain a literature or art component.
            Along with each video there is a “Teacher Resources” document. The resources include links to non-fiction text and additional videos,
            and where applicable, math, art, and music activities. There are numerous resources online,
            but our goal was to gather a few resources to help teachers support and extend the STEAM lesson videos,
            without them having to take the time to do hours of searching on their own.
          </p>
        </div>
      </div>
      <div className='mission__image-container'>
        <div className='mission__image-learning-loss'>
          <img src={ ChemistryGirls } alt="Rocket logo" />
        </div>
        <div className='mission__text'>
          <div className='mission__heading-container-learning-loss'>
            <span className='mission__heading'>Learning Loss</span>
          </div>
          <div className='mission__body-text'>
            <div>
              <p className='mission__section-heading'>What is Learning Loss?</p>
              <p>Almost everything that researchers know that affects learning indicates that children may have deficits due to Covid-19 educational changes.
              Time on task, online learning, absenteeism, and summer learning loss all create a need for intervention and the challenge of bringing students
              back up to grade level.</p>

              <p className='mission__section-heading'>Addressing Learning Loss</p>
              <p>A study at the University of Michigan looked at learning loss and how to remediate. One of the primary goals was to increase student engagement. 
              The methodology was project based instruction. This is an approach to education in which students explore academic subjects through meaningful
              explorations that pique their interests as they seek to solve real-world problems. After receiving project-based instruction,
              the University of Michigan researchers found that second grade students gained five to six months learning in social studies and two months in
              informational reading. Included in these groups were students from low-income backgrounds and from underrepresented racial and ethnic groups.</p>
              <p>Mr Reed's STEAM Lab video program poses real world challenges and asks students to come up with creative ways to solve these problems.
              Once the students are engaged, the teacher has access to links for over eighty-five informational texts. Students are eager to engage in these
              non-fiction texts because they have been so motivated by the high interest challenges.</p>

              <p>Mr Reed's STEAM Lab video program allows schools and teachers to decide how they best want to approach the issue of learning loss.
              Some researchers feel that students should be presented  grade level material and moved forward. Other philosophies suggest that students
              need to fill in gaps missed during distance learning by providing material from previous years. Mr Reed's STEAM Lab video program provides
              flexibility in that they may be used to address both philosophies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission

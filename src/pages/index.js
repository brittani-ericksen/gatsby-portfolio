import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import squadmate from '../assets/images/squadmate.png';
import seanometer from '../assets/images/seanometer.png';
import terminalkombat from '../assets/images/terminalkombat.png';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <a href="https://www.linkedin.com/in/brittaniericksen/"><i class="fab fa-linkedin fa-2x"></i></a>
        <a href="https://github.com/brittani-ericksen"><i class="fab fa-github-square fa-2x"></i></a>
        <p>
          <button><a href="https://docs.google.com/document/d/1u7e9FA8L8siNEWR4f-afCatDl_euZ5PWN4_cytUcYVo/edit?usp=sharing" target="_blank">View Resume</a></button>
        </p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                About Me
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Who is Brittani Ericksen?
          </h2>
          <p>
            After a long career in retail management, I have turned my focus toward my long-time passion for programming. I took the first opportunity I had to attend an immersive full-stack web development bootcamp at DigitalCrafts, and it's one of the best decisions I've ever made.
            <br />
            As I continue to learn more and expand my coding knowledge, I aim to combine those skills with my love for art. I am a full stack developer with a love for the frontend and all things design.
            <br />
            <br />
            When I get some time away from my computer, I try to sleep as much as possible. I have to keep up with a 5 year old little boy, after all! Sometimes I get the chance to draw and play Animal Crossing, too.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Code</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-paint-brush major style1">
              <span className="label">Paintbrush</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-gamepad major style2">
              <span className="label">Gamepad</span>
            </span>
          </li>
        </ul>
        <h2>Keep scrolling to see my featured projects</h2>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={squadmate} alt="squad mate" />
        </div>
        <div className="content">
          <h2>
            SquadMate
          </h2>
          <h2>
            Group Capstone Project
          </h2>
          <p>
            Our group set out to solve a problem that many coaches to young individuals may have - keeping contact and emergency information all together in one place. We created a coach's toolbox to allow just that. Members can update their information at any time and coaches can see and print this information as needed.
          </p>
          <p>
            Built with the MERN stack: MongoDB, Express, React, Node.js and styled with a combination of styled coponents and Material UI.
          </p>
          <p>
            My work focused on the frontend design, including wireframing and building to fit those specifications. I also designed the logo for the site.
          </p>
          <p>
            <button href="https://squadmateappco.netlify.app/">Visit Site</button>
            <button href="https://github.com/brittani-ericksen/SquadMate-Frontend">Github Repo</button>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={seanometer} alt="sean-o-meter" />
        </div>
        <div className="content">
          <h2>
            Sean-o-Meter
          </h2>
          <h2>
            Solo React Project
          </h2>
          <p>
            The idea for this project was sparked by a joke I made to my instructor about having a button to push that would just say things I'd rather do than listen to him. It was a lot of fun to make something that was strictly for entertainment, and he thought it was hilarious.
          </p>
          <p>
            Built with React, using Redux to control state. Styling was done with styled components.
          </p>
          <p>
            <button href="https://seanometer.netlify.app/">Visit Site</button>
            <button href="https://github.com/brittani-ericksen/sean-o-meter">Github Repo</button>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={terminalkombat} alt="terminal kombat" />
        </div>
        <div className="content">
          <h2>
            Terminal Kombat
          </h2>
          <h2>
            Group Python Project
          </h2>
          <p>
            The first group project I worked on in my coding bootcamp will always be one of my favorites. We decided on doing a text based fighting game, complete with sound effects. You select your player at the beginning and fight against opponents whose attacks are randomly chosen each turn.
          </p>
          <p>
            Built in Python, with Pygame used for sound. 
          </p>
          <p>
            Video playthrough coming soon!
          </p>
          <p>
            <button href="https://github.com/brittani-ericksen/termina-kombat">Github Repo</button>
          </p>
        </div>
      </section>
      
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Skills</h2>
        </header>
        <ul className="features">
          <li className="fab fa-react">
            <h3>React & Redux</h3>
          </li>
          <li className="fab fa-js-square">
            <h3>JavaScript</h3>
          </li>
          <li className="fab fa-node-js">
            <h3>Node.js & Express</h3>
          </li>
          <li className="fab fa-html5">
            <h3>HTML</h3>
          </li>
          <li className="fab fa-css3-alt">
            <h3>CSS</h3>
          </li>
          <li className="fab fa-python">
            <h3>Python</h3>
          </li>
          <li className="fab fa-github">
            <h3>Git & GitHub</h3>
          </li>
          <li className="fab fa-bootstrap">
            <h3>Bootstrap</h3>
          </li>
        </ul>
      </div>
    </section>

    <section id="four" className="wrapper style1 special">
					<h2>Contact Me!</h2>
					<form method="post" action="https://formspree.io/f/xzbkvapj">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
								<input type="text" name="name" id="name" defaultValue="" placeholder="Name" />
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="email" name="email" id="email" defaultValue="" placeholder="Email" />
							</div>
              <div className="col-12">
								<select name="demo-category" id="demo-category">
									<option value="">- Subject -</option>
									<option value="1">Let's connect!</option>
									<option value="1">Let's collaborate!</option>
								</select>
							</div>
							<div className="col-12">
								<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
							</div>
							<div className="col-12">
								<ul className="actions">
									<li><button type="submit" value="Send Message" className="primary">Send Message</button></li>
								</ul>
							</div>
						</div>
					</form>
				</section>
  </Layout>
);

export default IndexPage;

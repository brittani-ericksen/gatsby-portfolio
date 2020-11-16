import React from 'react';

import Layout from '../components/Layout';

import hashed from '../assets/images/hashed.png';
import goodeats from '../assets/images/goodeats.png';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Other Projects</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Hashed | Group Full Stack Project</h3>
          <p><span className="image right"><img src={hashed} alt="hashed" /></span>
            Your favorite shopping list app, but upgraded. Keep a list of ingredients you already have at home as well as a list of what you need to get. Both lists are connected and allow you to easily move items between the two. In addition, you can search recipes or use your own, and add all of those ingredients right to your shopping list.
          </p>
          <p>
            Hashed was built with Node.js, Express, PostreSQL, HTML, CSS and JavaScript. Styling was done with Bulma. 
          </p>
          <p>
            My contributions were in the initial database setup and assisting with design throughout.
          </p>
          <p>
            <button href="https://hashedpantry.com/">Visit Site</button><button href="https://github.com/brittani-ericksen/Hashed">Github Repo</button>
          </p>
          <hr />

          <h3>Good Eats | Group Frontend Project</h3>
          <p><span className="image right"><img src={goodeats} alt="good eats" /></span>
            It can be hard to decide where to eat when there are many choices surrounding you. Go with an old favorite? Try something new? Good Eats allows you to browse different cuisines in your area to help you narrow down that choice. You enter your city and select the correct state, then Good Eats will populate the highest rated restaurants for 5 pre-selected types of cuisine, and one random selection.
          </p>
          <p>
            Good Eats was built using JavaScript, HTML and CSS.
          </p>
          <p>
            My main role was to work with the API to get restaurants by city and cuisine, and small design elements. The background was designed by yours truly.
          </p>
          <p>
            <button href="https://good-eats-site.netlify.app/">Visit Site</button><button href="https://github.com/brittani-ericksen/good-eats-project">Github Repo</button>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

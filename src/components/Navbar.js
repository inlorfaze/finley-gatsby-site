import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          blog.fjchen.net
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/projects">
          Projects
        </Link>
      </div>
      <div className="navbar-end">
                <link rel="stylesheet" href="https://emailoctopus.com/bundles/emailoctopuslist/css/formEmbed.css?1522355556">

          <div class="email-octopus-form-wrapper">
              <h2 class="email-octopus-heading">Subscribe to thoughts mailing list</h2>
              <p class="email-octopus-success-message"></p>
              <p class="email-octopus-error-message"></p>

              <form method="post"
                action="https://emailoctopus.com/lists/bca3d244-3469-11e8-a3c9-06b79b628af2/members/embedded/1.1/add"
                class="email-octopus-form"
              >
                  
                  <div class="email-octopus-form-row">
                      <label for="field_0">Email address</label>
                      <input id="field_0" name="embedded_form_subscription[field_0]" type="email" placeholder="">
                  </div>
                                  

                  <div class="email-octopus-form-row-hp" aria-hidden="true">
                      <!-- Do not remove this field, otherwise you risk bot sign-ups -->
                      <input type="text" name="hpbca3d244-3469-11e8-a3c9-06b79b628af2"
                        tabindex="-1"
                        autocomplete="nope">
                  </div>

                  <div class="email-octopus-form-row-subscribe">
                      <input type="hidden"
                        name="successRedirectUrl"
                        value="">
                      <button type="submit">Subscribe</button>
                  </div>
              </form>

              
              <div class="email-octopus-rewards">
                  Powered by <a href="https://emailoctopus.com/?urli=bNhzr&amp;utm_medium=user_referral&amp;utm_source=builder" target="_blank">EmailOctopus</a>
              </div>
                              
          </div>


          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
          <script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.1/formEmbed.js?1522355556"></script>
                    
        <a
          className="navbar-item"
          href="https://github.com/inlorfaze"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar

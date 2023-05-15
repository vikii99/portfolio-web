import { useEffect, useState,useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animation')
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animation-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "default_service",
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_TOKEN
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error);
          alert("Failed to send the message, please try again");
        }
      );
  }

  

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="contact-info">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            {/* <div class="CommentItem-module_likeItem_3qF15">
              <div class="CommentItem-module_likeButton_3oaVZ">
                <span class="CommentItem-module_likeButtonIcon_2nrtX">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16.416" height="23.909" viewBox="0 0 16.416 23.909">
                    <path d="M15.919,6.287l-2.38,8a.993.993,0,0,1-.95.713H.992A1,1,0,0,1,0,14V6A1,1,0,0,1,.992,5H4.937L8.181,0H11a1,1,0,0,1,.973,1.2L11.219,5h3.75A1,1,0,0,1,15.919,6.287ZM1.983,7v6H4V7Zm9.236,0H8.8l.474-2.392L9.791,2H9.273L6.588,6.109,6,7H5.982v6h5.744l1.785-6Z" transform="translate(0 8)" fill-rule="evenodd" class="CommentItem-module_likeHand_yY0xx">
                      </path>
                      <line x1="5" y1="2" x2="8" y2="6" class="CommentItem-module_likeLine1_3HWeK"></line>
                      <line x1="10" y1="2" x2="10" y2="6" class="CommentItem-module_likeLine2_-bEVU"></line>
                      <line x1="15" y1="2" x2="12" y2="6" class="CommentItem-module_likeLine3_2UFh9"></line>
                      </svg>
                      </span>
                      </div>
                      </div> */}
            <p>
              I am interested in freelance opportunities - especially on
              ambitious or large projects. However, if you have any other
              requests or questions, don't hesitate to contact me using below
              form either.
            </p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

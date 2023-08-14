import React from 'react'
import styled from 'styled-components'
import { Btn } from '../styles/Button'

function Contect() {

  const Div = styled.div`
    min-height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    gap: 70px;
    justify-content: center;
    align-items: center;
    margin: 2px;

    iframe{
      width: 100%;
      height: 350px;
      cursor: pointer;
      border: 2px solid white;
      border-radius: 20px;
      box-shadow: 0 0 8px ${({theme}) => theme.colors.black};
    }

    .title{
      margin-top: 50px;
    }

    .username-div, .email-div, .textarea-div{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 600px;
    }

    label{
      margin-bottom: 4px;
      font-size: 20px;
      font-weight: 700;
      margin-right: auto;
    }

    input, textarea{
      width: 600px;
      padding: 5px 9px;
      font-size: 18px;
      font-weight: 400;
      border: 2px solid black;
      outline: none;
      border-radius: 6px;
      margin-bottom: 20px;
    }

    input::placeholder, textarea::placeholder{
      font-weight: 600;
    }

    .btn{
      margin-bottom: 100px;
      cursor: not-allowed;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}){
      iframe{
        height: 250px;
        margin-bottom: 80px;
      }

      .title{
        margin-bottom: 50px;
      }

      .username-div, .email-div, .textarea-div{
        width: 350px;
      }

      input, textarea{
        width: 350px;
      }
    }
  `
  return (
    <>
    <Div>
      <center><h1 className='title h1-animation'>Find us on Google Map</h1></center>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.726834123498!2d72.54438995064295!3d23.03379998487348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84eaf57ac615%3A0x5c7498bb96b34c97!2sLalbhai%20Dalpatbhai%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1664609205661!5m2!1sen!2sin"
      // width={600}
      // height={450}
      title='google-map-contect-page'
      style={{ border: 0 }}
      allowFullScreen=""
      // loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"/>

      <center><h1 className='title h1-animation'>Contect Us</h1></center>
      <div className="contect-details">
          <form action="abc.php" method="post">
            <div className="username-div">
              <label htmlFor="username-label">Username</label>
              <input type="text" autoComplete='off' name='Username' id='username-label' placeholder='abc224'/>
            </div>

            <div className="email-div">
              <label htmlFor="email-label">Email</label>
              <input type="email" autoComplete='off' name='Email' id='email-label' placeholder='abc@gmail.com'/>
            </div>

            <div className="textarea-div">
              <label htmlFor="textarea-label">Your Messege</label>
              <textarea name="Textarea" id="textarea-label" rows="5" autoComplete='off' placeholder='This is a messege for you...'></textarea>
            </div>

            {/* <div className="buttons">
                <Btn>Submit now</Btn>
                <Btn>reset now</Btn>
            </div> */}

            <Btn className='btn' disabled>submit</Btn>
          </form>
      </div>
    </Div>
    </>
  )
}

export default Contect
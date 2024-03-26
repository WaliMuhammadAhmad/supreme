import React from 'react'
import { Link } from 'react-router-dom';

const theme = {
  divClass: 'sm:flex-col sm:pb-5',
  successClass: 'input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500',
  errorClass: 'input input-ghost w-full max-w-xs rounded-none border-b-red-100 focus:outline-none focus:border-transparent focus:border-b-red-500',
  sucessMsg : 'text-xl text-white underline hover:no-underline',
  errorMsg : 'text-2xl text- text-red-500 underline',
  missingMsg : 'text-2xl text-[#CDEA68] text- underline',
  errorName: 'Length should be between 3 and 25',
  errorPrice: 'Minimum price should be 10.0$',
  errorNumber: 'Length should be between 11 and 20',
  errorEmail: 'Length should be between 13 and 30',
  missing: 'This field is required',
};

// function validateName(name) {
//   if (name.length >= 3 && name.length <= 25) {
//     return true;
//   }
// }

function ContactForm() {
  return (
    <div className='w-full flex flex-col gap-2 px-10 py-20'>
      <h1 className='font-condensed text-5xl'>Fill this form to start </h1>
      <div className='font-display p-10 text-xl tracking-tight'>
        <form>
          <div className={theme.divClass}>
            <label htmlFor="name">
              Hi! My name is
              <input type="text" id='name' placeholder="*John*" min="3" max="25" className={theme.successClass} required/>
            </label>
            <label htmlFor="company">
              and I work for
              <input type="text" id='compnay' placeholder="*Company Name* [OPTIONAL]" min="3" max="25" className={theme.successClass} />
            </label>
          </div>
          <div className={theme.divClass}>
            <label htmlFor="project">
              I’m looking to have a project
              <input type="text" id='project' placeholder="*Project Name*" min="5" max="25" className={theme.successClass} required/>
            </label>
            <label htmlFor="type">
              which is a sort of
              <select className={theme.successClass} name="sort" id="sort" required>
                <option value="null">*Presentation Type*</option>
                <optgroup label="Business">
                  <option value="saab">Conference Presentation</option>
                  <option value="volvo">Investor Pitch</option>
                  <option value="saab">Training Sessions</option>
                  <option value="saab">Team Introduction</option>
                  <option value="saab">Revenue & Report</option>
                </optgroup>
                <optgroup label="Educationsl">
                  <option value="saab">Conference Presentation</option>
                  <option value="volvo">Investor Pitch</option>
                  <option value="saab">Training Sessions</option>
                  <option value="saab">Team Introduction</option>
                  <option value="saab">Revenue & Report</option>
                </optgroup>
                <optgroup label="Inspirational">
                  <option value="saab">Conference Presentation</option>
                  <option value="volvo">Investor Pitch</option>
                  <option value="saab">Training Sessions</option>
                  <option value="saab">Team Introduction</option>
                  <option value="saab">Revenue & Report</option>
                </optgroup>
                <optgroup label="Litrature">
                  <option value="saab">Conference Presentation</option>
                  <option value="volvo">Investor Pitch</option>
                  <option value="saab">Training Sessions</option>
                  <option value="saab">Team Introduction</option>
                  <option value="saab">Revenue & Report</option>
                </optgroup>
              </select>
            </label>
          </div>
          <div className={theme.divClass}>
            <label htmlFor="color">
              The color pallete should be
              <input type="text" id='color' placeholder="*Zinc, Green, Yellow etc*" min="3" max="25" className={theme.successClass} required/>
            </label>
            <label htmlFor="animation">
              and I'd like to have the Animation as
              <input type="text" id='animation' placeholder="*Morph, Zoom, none etc*" min="4" max="25" className={theme.successClass} required/>
            </label>
          </div>
          <div className={theme.divClass}>
            <label htmlFor="date">
              With an idea of having that completed
              <input type="date" id='date' className={theme.successClass} required/>
            </label>
            <label htmlFor="budget">
              I am hoping to stay around a budget range of  $
              <input type="number" id='budget' placeholder="*10.0$*" min="10.0" max="10000.0" step="5.0" className="input input-ghost max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
            </label>
          </div>
          <div className={theme.divClass}>
            <label htmlFor="whatsapp">
              My active Whatsapp Number is
              <input type="phone" id='whatsapp' placeholder="*111-222-333-444*" className={theme.successClass} required/>
            </label>
            <label htmlFor="email">
              and you can reach me throught my email at
              <input type="email" id='email' placeholder="*John@gmail.com*" className={theme.successClass} required/>
            </label>
          </div>
          <div className={theme.divClass}>
            <label htmlFor="keyword">
              Optionally, I’m sharing more:
              <input type="text" id='keyword' placeholder="*Keywords or any guidelines*" className="input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
            </label>
            <label htmlFor="theme">
              I want to provie a theme or a file for the project:
              <input type="file" id='theme' className="file-input file-input-ghost w-full max-w-xs focus:outline-none " />
            </label>
          </div>
          <div className='w-full p-5 sm:flex-col'>
            <label className='text-white pr-5'>By clicking this button, I agreed will all of the terms and conditions</label>
            <input className='border-2 p-2 bg-zinc-800 rounded-full hover:invert' type="submit" onClick={'/slip'} value="Procees to Payment" />
            <Link to='/slip' className='text-white underline hover:no-underline'>Procees to Payment</Link>
          </div>
          {/* <span className={validateName()?theme.sucessMsg:theme.errorMsg}>Form has been submitted!</span> */}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
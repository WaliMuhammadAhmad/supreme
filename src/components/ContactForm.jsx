import React from 'react'

function ContactForm() {
  return (
    <div className='w-full h-screen flex flex-col px-10 py-20'>
      <h1 className='font-condensed text-5xl'>Fill this form to start </h1>
      <div className='font-display p-20 text-xl tracking-tight'>
        <form method='POST' action="">
          <label className='pr-2' htmlFor="name">
            Hi! My name is
            <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
          </label>
          <label className='pr-2' htmlFor="name">
            and I work for 
            <input type="text" placeholder="Company Name {optional}" className="input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
          </label>
          <label htmlFor="name">
            I’m looking to have a project
            <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
          </label>
          <label htmlFor="name">
            which is a sort of
            <select className='input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500' name="sort" id="sort">
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
          <label htmlFor="name">
            and I'd like to specify the theme as
            <input type="text" placeholder="*Style and Animation*" className="input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
          </label>
          <label htmlFor="name">
            With an idea of having that completed
            <input type="date" placeholder="Type here" className="input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
          </label>
          <label htmlFor="name">
            I am hoping to stay around a budget range of $
            <input type="number" placeholder="Type here" min="10.00" max="10000.00" step="5" className="input input-ghost max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
          </label>
          <label htmlFor="name">
            You can reach me throught my email at
            <input type="email" placeholder="Type here" className="input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
          </label>
          <label htmlFor="name">
            Optionally, I’m sharing more:
            <input type="text" placeholder="*Keywords*" className="input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500" />
          </label>
          <label htmlFor="name">
            I want to provie some additional stuff:
            <input type="file" className="file-input file-input-ghost w-full max-w-xs focus:outline-none " />
          </label>
          <input className='border-2 p-2 rounded-xl' type="submit" value={"Procees to checkout"} />
        </form>
      </div>
    </div>
  )
}

export default ContactForm
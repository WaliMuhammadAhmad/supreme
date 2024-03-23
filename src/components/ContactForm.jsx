import React from 'react'

function ContactForm() {
  return (
    <div className='w-full h-screen flex flex-col py-20 px-10'>
      <h1 className='font-condensed text-3xl'>
        Fill this form
      </h1>
      <form method='POST' action="">
        <label htmlFor="name">
          Hi! My name is
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="name">
        I'm looking for a partner to help me with
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="name">
        With an idea of having that completed
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="name">
        I am hoping to stay around a budget range of
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="name">
        You can reach me at
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="name">
        Optionally, i’m sharing more:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="name">
        I wan to provie some additional stuff:
          <input type="text" name="name" id="name" />
        </label>
      </form>
    </div>
  )
}

export default ContactForm
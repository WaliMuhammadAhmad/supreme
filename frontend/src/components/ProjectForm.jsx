import React, { useState } from 'react';

const theme = {
  divClass: 'sm:flex-col sm:pb-5',
  successClass: 'input input-ghost w-full max-w-xs rounded-none border-b-zinc-100 focus:outline-none focus:border-transparent focus:border-b-zinc-500',
  errorClass: 'input input-ghost w-full max-w-xs rounded-none text-red-500 border-b-red-100 focus:outline-none focus:border-transparent focus:border-b-red-500',
  successMsg: 'text-xl text-white underline hover:no-underline',
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    project: '',
    color: '',
    animation: '',
    whatsapp: '',
    keyword: '',
    theme: '',
    email: '', // Added email field to formData
  });

  const [errors, setErrors] = useState({
    name: '',
    company: '',
    project: '',
    color: '',
    animation: '',
    keyword: '',
    theme: '',
    email: '', // Added email field to errors
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { ...errors };

    // Validation for each field
    for (const field in formData) {
      const value = formData[field].trim();
      switch (field) {
        case 'name':
          if (value.length < 3 || value.length > 15 || !/^[a-zA-Z\s]*$/.test(value)) {
            newErrors[field] = 'Name should contain 3-15 characters and only letters.';
            formValid = false;
          } else {
            newErrors[field] = '';
          }
          break;
        case 'project':
          if (value.length < 5 || value.length > 25 || !/^[a-zA-Z\s]*$/.test(value)) {
            newErrors[field] = 'Project name should be between 5 and 25 characters and only letters.';
            formValid = false;
          } else {
            newErrors[field] = '';
          }
          break;
        case 'animation':
          if (value.length < 4 || value.length > 25 || !/^[a-zA-Z\s]*$/.test(value)) {
            newErrors[field] = 'Animation type should be between 4 and 25 characters and only letters.';
            formValid = false;
          } else {
            newErrors[field] = '';
          }
          break;
        case 'color':
          if (value.length < 3 || value.length > 25 || !/^[a-zA-Z\s]*$/.test(value)) {
            newErrors[field] = 'Color should be between 3 and 25 characters and only letters.';
            formValid = false;
          } else {
            newErrors[field] = '';
          }
          break;
        case 'keyword':
          if (value.length < 3 || value.length > 25 || !/^[a-zA-Z\s]*$/.test(value)) {
            newErrors[field] = 'Keyword should be between 3 and 25 characters and only letters.';
            formValid = false;
          } else {
            newErrors[field] = '';
          }
          break;
        case 'email':
          if (!value || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
            newErrors[field] = 'Invalid email address';
            formValid = false;
          } else {
            newErrors[field] = '';
          }
          break;
        default:
          break;
      }
    }

    setErrors(newErrors);
    if (formValid) {
      // Proceed with form submission
      console.log('Form submitted successfully:', formData);
    } else {
      // Form validation failed, display error messages
      console.log('Form validation failed:', newErrors);
    }
  };

  return (
    <div className='w-full flex flex-col gap-2 px-10 py-20'>
      <h1 className='font-condensed text-5xl'>Fill this form to get started:</h1>
      <form className='font-display p-10 text-xl tracking-tight' method='POST' onSubmit={handleSubmit}>

        <div className={theme.divClass}>
          <label htmlFor="name">Hi! My name is</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? theme.errorClass : theme.successClass}
            placeholder="*John*"
            required
          />
          <label htmlFor="company">and I work for</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={errors.company ? theme.errorClass : theme.successClass}
            placeholder="*Company Name* [OPTIONAL]"
          />
        </div>
        <div className={theme.divClass}>
          <label htmlFor="project">
            I’m looking to have a project
            <input
              type="text"
              id='project'
              name='project'
              value={formData.project}
              onChange={handleChange}
              className={errors.project ? theme.errorClass : theme.successClass}
              placeholder="*Project Name*" min="5" max="25" required />
          </label>
          <label htmlFor="type">
            which is a sort of
            <select className={theme.successClass} name="sort" id="sort" required>
              <option value="null">*Presentation Type*</option>
              <optgroup label="Business">
                <option value="type25">Conference Presentation</option>
                <option value="type25">Investor Pitch</option>
                <option value="type25">Training Sessions</option>
                <option value="type25">Team Introduction</option>
                <option value="type25">Revenue & Report</option>
              </optgroup>
              <optgroup label="Educationsl">
                <option value="type25">Conference Presentation</option>
                <option value="type25">Investor Pitch</option>
                <option value="type25">Training Sessions</option>
                <option value="type25">Team Introduction</option>
                <option value="type25">Revenue & Report</option>
              </optgroup>
              <optgroup label="Inspirational">
                <option value="type25">Conference Presentation</option>
                <option value="type25">Investor Pitch</option>
                <option value="type25">Training Sessions</option>
                <option value="type25">Team Introduction</option>
                <option value="type25">Revenue & Report</option>
              </optgroup>
              <optgroup label="Litrature">
                <option value="type25">Conference Presentation</option>
                <option value="type25">Investor Pitch</option>
                <option value="type25">Training Sessions</option>
                <option value="type25">Team Introduction</option>
                <option value="type25">Revenue & Report</option>
              </optgroup>
            </select>
          </label>
        </div>
        <div className={theme.divClass}>
          <label htmlFor="color">
            The color pallete should be
            <input
              type="text"
              id='color'
              name='color'
              value={formData.color}
              onChange={handleChange}
              className={errors.color ? theme.errorClass : theme.successClass}
              placeholder="*Zinc, Green, Yellow etc*" min="3" max="25" required />
          </label>
          <label htmlFor="animation">
            and I'd like to have the Animation as
            <input
              type="text"
              id='animation'
              name='animation'
              value={formData.animation}
              onChange={handleChange}
              className={errors.animation ? theme.errorClass : theme.successClass}
              placeholder="*Morph, Zoom, none etc*" min="4" max="25" required />
          </label>
        </div>
        <div className={theme.divClass}>
          <label htmlFor="date">
            With an idea of having that completed
            <input
              type="date"
              id='date'
              name='date'
              className={theme.successClass} required />
          </label>
          <label htmlFor="budget">
            I am hoping to stay around a budget range of  $
            <input
              type="number"
              id='budget'
              name='budget'
              placeholder="*10.0$*" min="10.0" max="10000.0" step="5.0"
              className={theme.successClass} required />
          </label>
        </div>
        <div className={theme.divClass}>
          <label htmlFor="whatsapp">
            My active Whatsapp Number is
            <input
              type="phone"
              id='whatsapp'
              name='whatsapp'
              value={formData.whatsapp}
              onChange={handleChange}
              className={errors.whatsapp ? theme.errorClass : theme.successClass}
              placeholder="*111-222-333-444*"
              required />
          </label>
          <label htmlFor="email">
            and you can reach me throught my email at
            <input
              type="email"
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? theme.errorClass : theme.successClass}
              placeholder="*John@gmail.com*" required />
          </label>
        </div>
        <div className={theme.divClass}>
          <label htmlFor="keyword">
            Optionally, I’m sharing more:
            <input
              type="text"
              id='keyword'
              name='keyword'
              placeholder="*Keywords or any guidelines*"
              value={formData.keyword}
              onChange={handleChange}
              className={errors.keyword ? theme.errorClass : theme.successClass} required />
          </label>
          <label htmlFor="theme">
            I want to provie a theme or a file for the project:
            <input
              type="file"
              id='theme'
              className="file-input file-input-ghost w-full max-w-xs focus:outline-none " />
          </label>
        </div>

        {/* Error messages */}
        {Object.entries(errors).map(([fieldName, errorMessage]) => (
          <div className='text-red-500' key={fieldName} style={{ display: errorMessage ? 'block' : 'none' }}>
            {errorMessage}
          </div>
        ))}
        {/* Submit button */}
        <div className='w-full p-5 sm:flex-col'>
          <label className='text-white pr-5'>By clicking this button, I agree with all terms and conditions</label>
          <input className='border-2 p-2 bg-zinc-900 text-white rounded-full' type="submit" value="Proceed to Payment" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

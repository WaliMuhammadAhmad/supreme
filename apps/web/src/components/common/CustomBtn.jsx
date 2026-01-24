import { FaArrowUpLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function CustomBtn({text, to}) {
  if (text !== null) {
    return (
      <Link to={to}>
        <button className='w-fit flex gap-2 items-center p-1.5 rounded-full border uppercase'>
          {text}
          <div className="w-6 h-6 flex items-center justify-center border rounded-full">
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </button>
      </Link>
    );
  } else {
    return null;
  }
}

export default CustomBtn;
// @icons
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

// @styling
import './searchfield.scss';

const SearchField = ({ type, id, name, placeholder }) => {
  return (
    <div className='searchfield'>
      <div className='searchfield__container'>
        <div className='searchfield__search'>
          <SearchRoundedIcon className='searchfield__icon' />
          <label htmlFor='search' />
          <input
            type={type}
            id={id}
            name={name}
            autoComplete='off'
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchField;

import { useState } from 'react';

const ProfileIcon = (props) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className='pa4 tc'>
      <img
        src='http://tachyons.io/img/logo.jpg'
        alt='avatar'
        className='br-100 ba h3 w3 dib'
      />
    </div>
  );
};

export default ProfileIcon;

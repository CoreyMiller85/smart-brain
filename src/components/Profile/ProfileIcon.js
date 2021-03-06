import { useState } from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from 'reactstrap';

const ProfileIcon = ({ onRouteChange, toggleModal }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggle = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className='pa4 tc'>
      <Dropdown isOpen={dropDownOpen} toggle={toggle}>
        <DropdownToggle
          tag='span'
          data-toggle='dropdown'
          aria-expanded={dropDownOpen}
        >
          <img
            src='http://tachyons.io/img/logo.jpg'
            alt='avatar'
            className='br-100 ba h3 w3 dib'
          />
        </DropdownToggle>
        <DropdownMenu
          className='b--transparent shadow-5 right'
          style={{
            marginTop: '20px',
            backgroundColor: 'rgba(255,255,255,0.5)',
          }}
        >
          <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>

          <DropdownItem onClick={() => onRouteChange('signout')}>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileIcon;

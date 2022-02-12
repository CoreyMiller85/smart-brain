import { useState } from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from 'reactstrap';

const ProfileIcon = (props) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggle = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className='pa4 tc'>
      <div className='d-flex justify-content-center p-5'>
        <Dropdown isOpen={dropDownOpen} toggle={toggle}>
          <DropdownToggle
            tag='span'
            onClick={toggle}
            data-toggle='dropdown'
            aria-expanded={dropDownOpen}
          >
            <div className='pa4 tc'>
              <img
                src='http://tachyons.io/img/logo.jpg'
                alt='avatar'
                className='br-100 ba h3 w3 dib'
              />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>View Profile</DropdownItem>

            <DropdownItem>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProfileIcon;

import React,{ useState } from 'react';

//stylesheet
import './Sidebar.scss';

//components
import Product from '../MainContent/Product/Product';
import DemoScript from '../MainContent/DemoScript/DemoScript';
import Customer from '../MainContent/Customers/Customer';
import SalesTeam from '../MainContent/SalesTeam/SalesTeam';
import Demo from '../MainContent/Demos/Demo';
import Settings from '../MainContent/Settings/Settings';

function Sidebar() {

  const [ toggle, setToggle ] = useState(1);

  const toggleSwitch = (index) => {
    setToggle(index);
  }

  return (
    <div className='sidebar-container'>
      <div className='block-tabs'>
        <p 
        className={ toggle === 1 ? 'active-tab' : 'not-active-tab'}
        onClick={() => toggleSwitch(1)}
        >Products</p>
        <p 
        className={ toggle === 2 ? 'active-tab' : 'not-active-tab'}
        onClick={() => toggleSwitch(2)}
        >Demo Script</p>
        <p 
        className={ toggle === 3 ? 'active-tab' : 'not-active-tab'}
        onClick={() => toggleSwitch(3)}
        >Customers</p>
        <p 
        className={ toggle === 4 ? 'active-tab' : 'not-active-tab'}
        onClick={() => toggleSwitch(4)}
        >sales Team</p>
        <p 
        className={ toggle === 5 ? 'active-tab' : 'not-active-tab'}
        onClick={() => toggleSwitch(5)}
        >Demos</p>
        <p 
        className={ toggle === 6 ? 'active-tab' : 'not-active-tab'}
        onClick={() => toggleSwitch(6)}
        >Settings</p>
      </div>
      <div className='content-tabs'>
        <div className={ toggle === 1 ? 'active-content' : 'not-active-content'}>
          <Product />
        </div>
        <div className={ toggle === 2 ? 'active-content' : 'not-active-content'}>
          <DemoScript />
        </div>
        <div className={ toggle === 3 ? 'active-content' : 'not-active-content'}>
          <Customer />
        </div>
        <div className={ toggle === 4 ? 'active-content' : 'not-active-content'}>
          <SalesTeam />
        </div>
        <div className={ toggle === 5 ? 'active-content' : 'not-active-content'}>
          <Demo />
        </div>
        <div className={ toggle === 6 ? 'active-content' : 'not-active-content'}>
          <Settings />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
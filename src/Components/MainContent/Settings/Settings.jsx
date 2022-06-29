import React,{ useEffect, useState } from 'react';

//stylesheet
import './Settings.scss';

//image files
import addUser from './Assests/add-user.png';
import Delete from './Assests/delete.png';

function Settings() {

  // get data from the local storage
  const getData = () => {
    const data = localStorage.getItem('value');
    if(data) {
      // pass the data, if data is present 
      return JSON.parse(data)
    } else {
      // empty the array
      return []
    }
  }

  // onchange set values and set the array
  const [ name, setName ] = useState("");
  const [ role, setRole ] = useState("Owner");
  const [ value, setValues ] = useState(getData());

  // state of model & alert for open and close states
  const [ openModel ,setOpenModel ] = useState(false);
  const [ success ,setSuccess ] = useState(false);
  const [ deleted ,setDeleted ] = useState(false);

  // input field values to add the data
  var date = new Date();
  const addData = () => {
    let typedData = {
      id:value.length + 1,
      userName: name,
      lastSignedIn: date.toLocaleTimeString(),
      role: role
    }

    setValues([...value, typedData]);
    // empty the input field email
    setName(''); 
    // empty the dropdown option value
    setRole('');
    // close the model onsubmit
    setOpenModel(false);
    // success alert get triggered
    setSuccess(true);
  }

  // set(add) the data into local storage
  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(value));
  },[value])

  // delete data from the local storage and table using id
  const deleteData = (id) => {
    const filtered = value.filter((value) => { return value.id !== id });
    setValues(filtered);
    setDeleted(true);
  }

  return (
    <>
    <div className='settings-container'>
      {/* button for add user model to open */}
      <div className='add-user-button'>
        <button className='button' onClick={() => setOpenModel(true)}>ADD USER</button>
      </div>
      {/* content table */}
      <div className='table-of-content'>
        <table>
            <thead>
              <tr>
                <th>#</th>
                <th>
                  <div className='flex'>
                    <div><p>User</p></div>
                    <div className='sort-arrows'>
                      <div className='top-arrow'></div>
                      <div className='bottom-arrow' style={{backgroundColor:'var(--brand-color)'}}></div>
                    </div>
                  </div>
                </th>
                <th>
                  <div className='flex'>
                    <div><p>Last Signed in</p></div>
                    <div className='sort-arrows'>
                      <div className='top-arrow'></div>
                      <div className='bottom-arrow'></div>
                    </div>
                  </div>
                </th>
                <th>
                  <div className='flex'>
                    <div><p>Role</p></div>
                    <div className='sort-arrows'>
                      <div className='top-arrow'></div>
                      <div className='bottom-arrow'></div>
                    </div>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {value.length > 0 &&
                value.map((element, index) => {
                  return(
                    <tr key={index + element.id}>
                      <td>{ element.id }</td>
                      <td>{ element.userName }</td>
                      <td>{ element.lastSignedIn }</td>
                      <td>{ element.role }</td>
                      <td><img src={Delete} alt='delete-icon' onClick={() => deleteData(element.id)}></img></td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
      </div>
    </div>

    {/* Model */}
    <div className={openModel ? 'active-model' : 'not-active-model'}>
      <div className='model-left'>
        <img src={addUser} alt='add-user-avatar' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptates repellendus enim error est qui, voluptatibus vel explicabo commodi sint! Id debitis deserunt obcaecati earum nisi assumenda</p>
      </div>
      <div className='model-right'>
        <h1>User Information</h1>
        <div className='input'>
          <label>Email id of User</label>
          <input type='text' onChange={(e) => setName(e.target.value)} value={name}></input>
        </div>
        <div className='input'>
          <label>Role</label>
          <select onChange={(e) => setRole(e.target.value)} value={role}>
            <option>Owner</option>
            <option>Admin</option>
            <option>Sales</option>
          </select>
        </div>
        <div className='buttons-wrapper'>
          <button className='button cancel' onClick={() => setOpenModel(false)}>cancel</button>
          <button className='button add' onClick={addData}>Add</button>
        </div>
      </div>
    </div>

    {/* success alert */}
    <div className={success ? 'active-success-alert-contianer' : 'not-active-success-alert-contianer'}>
      <h2>Added to table successfully!!!</h2>
      <p onClick={() => setSuccess(false)}>X</p>
    </div>

    {/* delete alert */}
    <div className={deleted ? 'active-delete-alert-contianer' : 'not-active-delete-alert-container'}>
      <h2 style={{whiteSpace:'nowrap'}}>Deleted from table successfully!!!</h2>
      <p onClick={() => setDeleted(false)}>X</p>
    </div>
    </>
  )
}

export default Settings

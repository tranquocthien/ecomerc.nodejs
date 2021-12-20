import React, { useState, useEffect } from 'react';

const Option = ({ list }) => {
  return list.map((elm) => <option key={Math.random()}>{elm.ten}</option>);
};

const DropdownBar = ({ data }) => {
  // const DropdownBar = ({ name, data }) => {
  const [nameArray, setNameArray] = useState();

  useEffect(async () => {
    const arr = await data();
    setNameArray(arr);
  }, []);

  return (
    // <div className={name}>
    //   <select>{nameArray ? <Option list={nameArray} /> : null}</select>
    // </div>
    // <Form className="dropdown">
    //   <Form.Group controlId="exampleForm.SelectCustom">
    //     <Form.Control as="select" custom>
    //       {nameArray ? <Option list={nameArray} /> : null}
    //     </Form.Control>
    //   </Form.Group>
    // </Form>
    <>dropdown</>
  );
};

export default DropdownBar;

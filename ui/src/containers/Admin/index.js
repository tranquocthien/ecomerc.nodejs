import React from 'react';
import './Admin.scss';
import { Route, Switch } from 'react-router-dom';
import UserAdmin from './User';
import AddCatagory from './Catagory/Add';
import UpdateCatagory from './Catagory/Update';
import DeleteCatagory from './Catagory/Delete';
import AddProduct from './Product/Add';
import UpdateProduct from './Product/Update';
import DeleteProduct from './Product/Delete';
import Order from './Order';

const Admin = () => {
  return (
    <div className="admin">
      <Switch>
        {/* User */}
        <Route path="/admin/user" exact>
          <UserAdmin />
        </Route>
        {/* Order */}
        <Route path="/admin/order" exact>
          <Order />
        </Route>
        {/* Category */}
        <Route path="/admin/category/add" exact>
          <AddCatagory />
        </Route>
        <Route path="/admin/category/update" exact>
          <UpdateCatagory />
        </Route>
        <Route path="/admin/category/delete" exact>
          <DeleteCatagory />
        </Route>
        {/* Product */}
        <Route path="/admin/product/add" exact>
          <AddProduct />
        </Route>
        <Route path="/admin/product/update" exact>
          <UpdateProduct />
        </Route>
        <Route path="/admin/product/delete" exact>
          <DeleteProduct />
        </Route>
      </Switch>
    </div>
  );
};

export default Admin;

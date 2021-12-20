import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import './style.scss';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
}));

const Register = () => {
  const classes = useStyles();

  return (
    <div className="register">
      <form>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input email"
              type="email"
              placeholder="Email input"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <p className="control has-icons-left">
            <input
              className="input password"
              type="password"
              placeholder="Password"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>

        <div className="field">
          <label className="label">Họ</label>
          <div className="control">
            <input className="input ho" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Tên</label>
          <div className="control">
            <input className="input ten" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Số điện thoại</label>
          <div className="control">
            <input
              className="input sodienthoai"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>

        <div className="field">
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className="field">
          <label className="label">Địa chỉ</label>
          <div className="control">
            <input
              className="input diachi"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IUsers, IUser } from '../interfaces/user.interace'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import AddUser from './addUser'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Users = (props: IUsers) => {
 const classes = useStyles();
 const [open, setOpen] = useState(false)
  const { users } = useSelector((state: IUsers) => state)
  

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
    <AddUser open = {open} handleClose = {handleClose} />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Job</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user: IUser) => (
            <TableRow key={user.name}>
              <TableCell component="th" scope="user">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.job}</TableCell>
              <TableCell align="right">
                  <span style={{cursor: "pointer"}} onClick={handleClickOpen} >
                    <Icon color="primary">add_circle</Icon>
                  </span>
            </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
  
}
export default Users










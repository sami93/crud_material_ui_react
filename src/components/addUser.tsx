import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'
import { IUser } from '../interfaces/user.interace'


const AddUser = (props: {open: boolean, handleClose: any}) => {
  const { open, handleClose } = props
  const intialState: IUser= { name: '', job: '' }
  const [values, setValues] = useState(intialState)
  const dispatch = useDispatch()


  const onChangeName = (event: any) => {
    setValues({ ...values, name: event.target.value })
  }

  const onChangeJob = (event: any) => {
    setValues({ ...values, job: event.target.value })
  }

  const saveUser = () => {
    dispatch(actions.addUserAction(values))
    setValues(intialState)
    handleClose()
  }

  return (
    <div>
      <Dialog open={open} maxWidth="md" onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajout d&apos;un utilisateur supplémentaire</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom"
            type="text"
            error={false}
            helperText={!values.name.trim() ? 'Ce Champ est obligatoire !' : ''}
            value={values.name}
            required
            fullWidth
            onChange={onChangeName}
          />
          <TextField margin="dense" id="job" label="Job" type="text" rows={3} value={values.job} multiline fullWidth onChange={onChangeJob} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={saveUser} color="primary" disabled={!values.name.trim()}>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default AddUser

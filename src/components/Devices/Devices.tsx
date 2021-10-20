import React, { useContext } from 'react'

import { useForm } from 'react-hook-form'

import { AuthContext } from '../../contexts/AuthContext'

import { customers } from '../../services/api'

import Add from '../../assets/Devices/add.png'

import styles from './devices.module.sass'
import axios from 'axios'

interface IDeviceForm {
  deviceId: string
}

export const Devices = () => {
  const { customer, updateCustomer } = useContext(AuthContext)
  const { register, handleSubmit } = useForm<IDeviceForm>()

  const addDevice = async (deviceForm: IDeviceForm) => {
    if (deviceForm.deviceId.trim().length === 0)
      return

    await customers.post('/api/devices', {
      deviceId: deviceForm.deviceId,
      customerId: customer.id
    })
      .then(response => updateCustomer(response.data))

  }

  return (
    <div className={styles.deviceContainer}>
      <h2>Cadastre aqui o seu dispositivo</h2>
      <form
        className={styles.noDevice}
        onSubmit={handleSubmit(addDevice)}
      >
        <input
          className={styles.deviceCode}
          {...register('deviceId')}
          type='text'
          placeholder='Código do dispositivo'
          name='deviceId'
        />
        <input
          className={styles.submit}
          type='image'
          src={Add}
          alt='Adicionar dispositivo'
          formEncType='submit'
        />
        {/* <img src={Add} alt='Adicionar dispositivo' /> */}
      </form>
    </div>
  )
}

import React, { useContext } from 'react'

import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthContext'
import { DashboardContext } from '../../contexts/DashboardContext'

import { customers } from '../../services/api'

import styles from './upload.module.sass'

export const UploadModal = () => {
  const { register, handleSubmit } = useForm()

  const { customer, updateAvatarUrl } = useContext(AuthContext)
  const { toggleUploadModal } = useContext(DashboardContext)

  const onSubmit = async (image: any) => {
    const formData = new FormData()
    const file: File = image.file[0]
    formData.append('file', file)

    const { data } = await customers.post('/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'id': customer.id
      }
    })
    
    updateAvatarUrl(data)
    toggleUploadModal()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.uploadContainer}
    >
      <input
        {...register('file')}
        type='file'
        name='file'
        id='image'
        accept='image/png, image/jpeg'
      />
      <label htmlFor='image'>
        Escolha uma foto
      </label>
      <button>
        <span role='img' aria-label='Usar esse'>👌</span>
      </button>
    </form>
  )
}

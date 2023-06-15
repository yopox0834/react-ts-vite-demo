import React from 'react'
import { Button } from 'antd'
import { SearchOutlined, FullscreenOutlined } from '@ant-design/icons'
import styles from './Test.module.scss'

const Test: React.FC = () => {
  return (
    <div>
      <h2 className={styles['my-title']}>Test page</h2>
      <Button
        className={styles['my-text']}
        type="primary"
        icon={<SearchOutlined />}>
        Search
      </Button>
      <FullscreenOutlined />
    </div>
  )
}
export default Test

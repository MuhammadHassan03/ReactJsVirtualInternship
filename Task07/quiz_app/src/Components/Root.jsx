import React from 'react'
import { Outlet } from 'react-router'

export const Root = () => {
  return (
    <div>
      <body>
        <Outlet></Outlet>
      </body>
    </div>
  )
}

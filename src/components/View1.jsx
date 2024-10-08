import React from 'react'

function View1(props) {
  return (
    <>
    <div>{props?.data?.id}</div>
    <div>{props?.data?.title}</div>
    </>
  )
}

export default View1
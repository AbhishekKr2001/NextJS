import React from 'react'
const Page = async (props) => {
  const user = await props.params
  console.log(user)
  return (
    <div>This is UserName :  {user.postid}</div>
  )
}

export default Page;
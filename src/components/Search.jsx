import React, { useEffect, useState } from 'react'

export default function Search() {



    const [post,setPost] = useState('')

    const onPost = () => {
  fetch('http://localhost:4000/add/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: post }),
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  setPost('');
};


    useEffect(() => {
    // Call the API once when component mounts
    fetch('http://localhost:4000/posts') // your API endpoint
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);
    
  return (
    <div className='top-0 bg-white z-50'>
      <div className='pt-4 px-4 flex gap-4 items-center'><img
  src="https://avatarfiles.alphacoders.com/375/thumb-1920-375473.jpeg"
  className="w-[60px] h-[60px] rounded-full object-cover"
  alt="avatar"
/>


      <input className='h-[40px] w-full rounded-3xl px-4' type="text" placeholder='Write your new post' value={post} onChange={(e) => setPost(e.target.value)}/>
      </div>
        <div className='px-4 flex justify-end'>
            <button className='h-[40px] border w-[100px] rounded-3xl bg-blue-500 text-white'
            onClick={onPost} >Post</button>
        </div>
        <hr className='mt-2'></hr>
    </div>
    
  )
}

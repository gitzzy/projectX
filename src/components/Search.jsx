import React, { useState } from 'react';

export default function Search() {
  const [post, setPost] = useState('');
  const [postsList, setPostsList] = useState([]); // store posts locally

  const onPost = () => {
    if (!post.trim()) return; // ignore empty posts
    const newPost = {
      _id: Date.now(), // unique id for rendering
      content: post,
    };
    setPostsList([newPost, ...postsList]); // add new post at top
    setPost(''); // clear input
  };

  return (
    <div className="top-0 bg-white z-50">
      <div className="pt-4 px-4 flex gap-4 items-center">
        <img
          src="https://avatarfiles.alphacoders.com/375/thumb-1920-375473.jpeg"
          className="w-[60px] h-[60px] rounded-full object-cover"
          alt="avatar"
        />
        <input
          className="h-[40px] w-full rounded-3xl px-4"
          type="text"
          placeholder="Write your new post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </div>
      <div className="px-4 flex justify-end">
        <button
          className="h-[40px] border w-[100px] rounded-3xl bg-blue-500 text-white"
          onClick={onPost}
        >
          Post
        </button>
      </div>
      <hr className="mt-2" />

      {/* Display posts */}
      <div className="px-4 mt-4 space-y-2">
        {postsList.map((p) => (
          <div key={p._id} className="p-2 border rounded-lg bg-gray-100">
            {p.content}
          </div>
        ))}
      </div>
    </div>
  );
}

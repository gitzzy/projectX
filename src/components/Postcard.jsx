import React, { useEffect, useState } from "react";

const BACKEND_URL = "https://your-backend.vercel.app"; // replace with your deployed backend

export default function Postcard() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/posts`);
      let data = await res.json();

      data = data
        .filter((p) => p.content && p.content.trim() !== "")
        .sort((a, b) => b._id.localeCompare(a._id));

      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deletePost = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/delete/post/${id}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts(); // ✅ only once on mount
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4">
      {posts.length === 0 ? (
        <SinglePost content="No posts yet" />
      ) : (
        posts.map((post) => (
          <SinglePost
            key={post._id}
            id={post._id}
            content={post.content}
            deletePost={deletePost}
          />
        ))
      )}
    </div>
  );
}

// Single post component
function SinglePost({ id, content, deletePost }) {
  const [like, setLike] = useState(0);
  const [ltoggle, setLtog] = useState(false);
  const [com, setCom] = useState(0);
  const [views, setView] = useState(0);

  function handleLike() {
    setLtog(!ltoggle);
    setLike(ltoggle ? like - 1 : like + 1);
  }

  return (
    <div className="p-4 rounded-lg flex flex-col">
      <div className="flex items-start gap-4">
        <img
          src="https://avatarfiles.alphacoders.com/375/thumb-1920-375473.jpeg"
          className="w-[60px] h-[60px] rounded-full object-cover"
          alt="avatar"
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="font-bold">Devansh Tyagi</div>
              <div className="text-gray-500 text-sm p-[2px] px-1">@tyagi</div>
            </div>
            {deletePost && (
              <div
                className="cursor-pointer text-red-500"
                onClick={() => deletePost(id)}
              >
                🗑️
              </div>
            )}
          </div>
          <div className="pt-2">{content}</div>
        </div>
      </div>

      <div className="p-4 w-[90%] ml-auto flex gap-4 mt-2 items-center justify-between">
        <div onClick={handleLike} className="flex gap-2 cursor-pointer">
          {ltoggle ? "❤️" : "💔"}
          <span>{like}</span>
        </div>
        <div className="flex gap-2 cursor-pointer">
          👁️<span>{views}</span>
        </div>
        <div className="flex gap-2 cursor-pointer">
          💬<span>{com}</span>
        </div>
      </div>
      <hr className="mt-2" />
    </div>
  );
}

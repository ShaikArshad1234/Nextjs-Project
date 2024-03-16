// components/PostSection.tsx
'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: currentPage,
            _limit: 20, // Number of posts per page
          },
        });
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(Math.ceil(Number(totalCount) / 20)); // Calculate total pages
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-2xl w-full">
        {posts.map(post => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden m-4 p-4">
            <h2 className="text-gray-900 font-medium text-lg">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        {Array.from(Array(totalPages).keys()).map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`mx-2 px-4 py-2 rounded-md ${
              currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostSection;

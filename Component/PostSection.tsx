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

const POSTS_PER_PAGE = 20;

const PostSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: currentPage,
            _limit: POSTS_PER_PAGE,
          },
        });
        setPosts(response.data);
        // Calculate total pages based on total number of posts
        const totalCount = response.headers['x-total-count'];
        setTotalPages(Math.ceil(Number(totalCount) / POSTS_PER_PAGE));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {posts.map(post => (
        <div key={post.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
          <div className="p-4">
            <p className="text-gray-900 font-medium text-lg">{post.title}</p>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </div>
          <div className="bg-gray-200 px-4 py-2">
            <button className="text-sm text-gray-700">Save</button>
          </div>
        </div>
      ))}
      <div className="flex mt-8">
        <button
          className={`mr-4 px-4 py-2 border border-gray-300 rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostSection;

import React from 'react';
import Dashboard from '../Component/Dashboard';
import PostSection from '../Component/PostSection';
import SearchBar from '../Component/SearchBar';
import PictureSection from '@/Component/PictureSection';

 const Home: React.FC = () => {
  return (
    
      <div>
        <Dashboard />
        <SearchBar />
        <PictureSection />
        <PostSection />
      </div>

  );
};
export default Home;


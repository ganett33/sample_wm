import React, { useEffect, useState } from 'react';
import { dbService } from '../../fbase';
import { onSnapshot, collection } from "firebase/firestore";
import Pagination from './Pagination';
import axios from 'axios';
import PostPlaces from './PostPlaces';


const PlacesContent = () => {
  const [shops, setShops] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect( () => {
    const fetchPosts = async () => {
      const res = await axios.get(
        onSnapshot(collection(dbService, "shops"), (snapshot) =>
        setShops(snapshot.docs.map((doc) => ({ ...doc.data() })))
        )
      )
      setShops(res.data);
    };
    fetchPosts();
  }, [] );

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = shops.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <PostPlaces shops={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={shops.length}
        paginate={paginate}
      />
    </>
  );
};

export default PlacesContent;
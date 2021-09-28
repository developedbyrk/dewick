import React, { useState, useEffect } from 'react'
import PaginationNumber from './PaginationNumber'
import { Posts } from './Posts'
import { Articles } from '../components/Articles'

const Pagination = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(4)

    useEffect(() => {
        const fetchPosts = () => {
            setLoading(true);
            setPosts(Articles);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    //Get current posts

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <Posts posts={currentPosts} loading={loading} />
            <PaginationNumber postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
        </>
    )
}

export default Pagination

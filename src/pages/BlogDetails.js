import React from "react";
import "./blogDetails.scss"
import {useParams} from "react-router-dom";
import useFetch from "../components/useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isLoading} = useFetch("http://localhost:3001/blogs/" + id);

    return (
        <>
            <div className="blogDetails">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {blog && (
                    <article>
                        <h2 className="text-info">{blog.title}</h2>
                        <p className='text-md-start'>{blog.body}</p>
                    </article>
                )}
            </div>
        </>
    )
}

export default BlogDetails;


// export default function BlogDetails(){
//  //  const {id} = useParams();
//
//     return (
//         <>
//             <div className="blogDetails">
//                 <h2></h2>
//             </div>
//         </>
//
//     )
// }
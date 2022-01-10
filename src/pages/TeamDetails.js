import React from "react";
import "./blogDetails.scss"
import {useParams} from "react-router-dom";
import useFetch from "../components/useFetch";
import "./teamDetails.scss"

const TeamDetails = () => {
    const {id} = useParams();
    const {data: member, error, isLoading} = useFetch("http://localhost:3001/members/" + id);

    return (
        <>
            <div className="teamDetails">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {member && (
                    <article>
                        <h2 className="text-primary">{member.title}</h2>
                        <p className='text-md-start'>{member.body}</p>
                    </article>
                )}
            </div>
        </>
    )
}

export default TeamDetails;


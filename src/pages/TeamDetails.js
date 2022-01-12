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
                    <div className="article">
                    <figure>
                        <h2 className="text-primary">{member.title}</h2>
                        <img src={member.img} alt="text"/>
                    </figure>
                        <p>{member.body}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default TeamDetails;


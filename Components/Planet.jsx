import React from "react";
import { Link } from "react-router-dom";

function Planet({ planet, index }) {
    return (
        <Link to={`/planets/${planet.id}`}>
         
        </Link>

    );
}

export default Planet;
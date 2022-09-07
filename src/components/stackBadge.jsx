import React from "react";
import '../styles/hero.badges.css';

function StackBadge({ text }) {
    return (
        <div className="stack-badge">
            <p className="badge-text">{text}</p>
        </div>
    )
}

export default StackBadge;

import React from "react";

export default function Root(props) {
    return (
        <section style={{ padding: "1rem", border: "1px solid #ccc" }}>
            {props.name || "@org/app-react"} is mounted!
        </section>
    );
}
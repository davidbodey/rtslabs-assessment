import React from "react";

const History = (props) => {
    const history = props.app.history;
    return (
        <div>
            {history.map((item, index)=> {
                return (
                    <section className="hero" key={index}>
                        <div className="hero-body">
                            <p> {item} </p>
                        </div>
                        <hr/>
                    </section>
                );
            })}
        </div>
    );
}

export default History;

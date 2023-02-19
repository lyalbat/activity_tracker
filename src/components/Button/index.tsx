import React from "react";
import "./style.scss"

export class Button extends React.Component {
    render(): React.ReactNode {
        return (
            <button className="button">
                Click Me!
            </button>
        )

    }
}
import React from "react";

export class Button extends React.Component {
    render(): React.ReactNode {
        return (
            <button style={{
                backgroundColor : "Blue"
                }}>
                Click Me!
            </button>
        )

    }
}
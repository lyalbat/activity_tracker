import React from "react"
import {Button} from "../Button/index"

export class Form extends React.Component {
    render(): React.ReactNode {
        return(
            <form>
                <div>
                    <label htmlFor="task">Add your task here</label>
                    <input 
                        type="text" 
                        name="task"
                        id="task"
                        placeholder="Insert your task here"
                        required

                    />
                </div>
                <div>
                    <label htmlFor="time">How long will your task take?</label>
                    <input 
                    type="time"
                    step="1"
                    name = "time"
                    id="time"
                    min= "00:00:00"
                    max="01:30:00"
                    required />
                </div>
                <Button />
            </form>
        )
    }
}
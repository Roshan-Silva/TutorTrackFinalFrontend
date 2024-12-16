import { createContext } from "react";
import tutors_of_tutor_track from "../Assets/Tutors";
export const TutorContext = createContext(null)

const TutorContextProvider = (props)=>{
    const contextValue = {
        tutors_of_tutor_track,
    }
    return (
        <TutorContextProvider value={contextValue}>
            {props.children}
        </TutorContextProvider>
    )
}
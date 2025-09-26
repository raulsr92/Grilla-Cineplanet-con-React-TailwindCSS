import Button from "./Button"

function Toolbar({ onPlayMovie, onUploadImage}) {

    return(
        <>
            <div>
                <Button onClick={onPlayMovie} children="Play Movie"/>

                <Button onClick={onUploadImage} children="Upload Image"/>
            </div>
        </>
    )
    
}

export default Toolbar
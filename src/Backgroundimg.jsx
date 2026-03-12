import BgImage from "./assets/bgimage.jpg"


const Backgroundimg = () => {
    return (
        <div>
            <img
                src={BgImage}   // <-- use your background image here
                alt="background"

                className="absolute fixed h-full w-full bg-cover bg-center transition duration-300 hover:blur-sm "
            />
        </div>



    )
}

export default Backgroundimg

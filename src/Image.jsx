import photo from './assets/Bharath.jpeg'

const Image = () => {
    return (
        <div className='flex flex-col justify-content items-center pt-[20px] pb-[10px]'>
            <img src={photo} className='rounded-[50%] h-[24vh] w-[12vw] '></img>
        </div>
    )
}

export default Image

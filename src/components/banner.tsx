import '../css/banner.css'
import logo from '../assets/logo.png'

function Banner(){
    const title = 'La maison jungle'
    
    return ( 
        <>
            <div className='flex items-center justify-between text-black text-right p-8 border-b-4 border-black'>
                <img src={logo} alt="logo for app" className='w-10 h-auto rounded-lg max-w-full ' />
                <h1  className='font-bold text-3xl'> {title}</h1>
            </div>
        </>
    )
}


export default Banner
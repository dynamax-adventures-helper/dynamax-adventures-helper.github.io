import Image from 'next/image'

const Button= () => {
    return (
        <div className='flex justify-center '>
            <a href='https://ko-fi.com/seanpino' target="_blank" type="button" className='flex flex-row bg-pokecard rounded-md p-1'>
                <Image 
                    src="kofi_symbol.png"
                    alt="ko-fi"
                    width={25}
                    height={25}
                    className='p-1'
                />      
                Support me on Ko-fi
            </a>
        </div>
    );
}

export default Button;
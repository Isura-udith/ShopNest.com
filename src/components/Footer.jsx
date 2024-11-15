import { useEffect, useState } from 'react';


export const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return (
        <div className='fixed bottom-0 w-full fondo'>
            <div className='flex items-center justify-center mt-2 text-sm cursor-pointer'>
                {isVisible && (
                    <div
                        onClick={() => scrollToTop()}
                    >
                        <p>Go to start</p>
                    </div>
                )}
            </div>
            <footer className='flex items-center justify-between px-8 py-3 text-sm font-light botton-0'>
                <p>ShopNest.com</p>
            </footer>
        </div>
    )
};
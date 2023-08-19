import React from 'react';
import notFoundImage from '../../assets/images/404.jpg';
import { Footer } from './includes/Footer';
import { Header } from './includes/Header';

const PageNotFound: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section className="container mx-auto px-4 sm:px-2 md:px-4 py-8 flex-grow flex flex-col justify-center items-center">
                <img 
                    src={notFoundImage}
                    alt="404 Image" 
                    className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg mb-8"
                />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Oops! Page Not Found.</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 text-center">The page you're looking for doesn't exist or has been moved.</p>
                <a href="/" className="text-blue-600 hover:underline">Return to Home</a>
            </section>
            <Footer />
        </div>
    );
}

export default PageNotFound;

import React, { useState, useRef, useEffect } from 'react';
import { InfiniteScrollProps } from '../interface/DataInterface';
import { Circles } from 'react-loader-spinner';

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ loadMore, hasMore, children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const lastElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const callback: IntersectionObserverCallback = entries => {
            if (entries[0].isIntersecting && hasMore && !isLoading) {
                setIsLoading(true);
                loadMore().then(() => {
                    setIsLoading(false);
                });
            }
        };

        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 1.0
        };

        observerRef.current = new IntersectionObserver(callback, observerOptions);

        if (lastElementRef.current) {
            observerRef.current.observe(lastElementRef.current);
        }

        return () => {
            if (observerRef.current && lastElementRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [hasMore, isLoading, loadMore]);

    return (
        <div className="mx-auto">
            {children}
            <div ref={lastElementRef} className="grid flex justify-center items-center mt-5">
                {isLoading && <Circles
                    height="80"
                    width="80"
                    color="#0ab39c"
                    ariaLabel="bars-loading"
                    visible={true}
                />}
            </div>
        </div>
    );
}

export default InfiniteScroll;

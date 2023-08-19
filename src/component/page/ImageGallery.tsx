import React, { useState, useCallback } from 'react';
import { fetch } from '../request/ApiRequest';
import { BreedData } from '../interface/DataInterface';
import { Footer } from './includes/Footer';
import { Header } from './includes/Header';
import InfiniteScroll from '../utils/InfiniteScroll';
import { BreedModal } from '../utils/BreedModal';

const ImageGallery: React.FC = () => {

	const [data, setData] = useState<BreedData[]>([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedBreed, setSelectedBreed] = useState<null | BreedData>(null);

	const getAnimal = useCallback(async (currentPage: number = page) => {
        const res = await fetch({ page: currentPage });
        if (res?.result?.data?.length) {
            setData((prevData) => [...prevData, ...res.result.data]);
            setPage((prevPage) => prevPage + 1);
        } else {
            setHasMore(false);
        }
    }, [page]);

	return (
		<div className="bg-gray-100 flex flex-col min-h-screen">
			<Header />
			<section className="container mx-auto p-4">
				<InfiniteScroll loadMore={() => getAnimal()} hasMore={hasMore}>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
						{data.map((v, i) => (
							<div key={i} className="relative overflow-hidden rounded-lg cursor-pointer" onClick={() => {
									setSelectedBreed(v);
									setIsModalOpen(true);
								}}
							>
				                <img src={v.url} alt={v.alt} className="w-full h-full object-cover" />
				                <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-60 w-full">
				                    <p className="text-white font-bold mb-1">{v.name}</p>
				                    <div className="text-white mb-1 max-h-10 overflow-hidden relative">
				                        <small className="block">
				                            {v.description}
				                        </small>
				                    </div>
				                    <a href={`/breed/${v.id}`} className="text-blue-500 hover:underline">Read more</a>
				                </div>
				            </div>
						))}
					</div>
				</InfiniteScroll>
				{
					isModalOpen && 
					<BreedModal 
						breed={selectedBreed} 
						onClose={() => setIsModalOpen(false)} 
					/>
				}
			</section>
			<Footer />
		</div>
	);
};

export default ImageGallery;
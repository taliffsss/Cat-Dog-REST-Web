import React from 'react';

export interface BreedData {
	id: string;
	name: string;
	alt?: string;
	description?: string;
	url?: string;
	height?: string;
	weight?: string;
	life_span?: string;
	breed_group?: string;
	bred_for?: string;
	origin?: string;
	child_friendly?: number;
	dog_friendly?: number;
	intelligence?: number;
	adaptability?: number;
	temperament?: string;
	isDog?: boolean;
}

export interface pagination {
	limit?: number;
	page?: number;
	id?: string;
}

export interface ResponseType {
  result: {
  	success: boolean;
  	message: string;
  	limit?: number;
  	page?: number;
    data: any;
  };
}

export interface InfiniteScrollProps {
  loadMore: () => Promise<void>;
  hasMore: boolean;
  children: React.ReactNode;
}

export interface BreedModalProps {
  breed: BreedData | null;
  onClose: () => void;
}
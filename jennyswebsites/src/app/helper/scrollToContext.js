'use client'
import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const contactRef = useRef(null);
    const topRef = useRef(null);
    const galleryRef = useRef(null);

    const scrolltoContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrolltoTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'instant' });
    };
    const scrolltoGallery = () => {
        galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <ScrollContext.Provider value={{ contactRef, scrolltoContact, topRef, scrolltoTop, galleryRef, scrolltoGallery }}>
            {children}
        </ScrollContext.Provider>
    );
}; 
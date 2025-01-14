import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

interface WrapperProps {
    children: React.ReactNode[];
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [hasLoaded, setHasLoaded] = useState(false);
    const sections = ['about-me', 'introduction', 'technologies', 'projects', 'academic', 'form'];
    const [lastScrollTime, setLastScrollTime] = useState(Date.now());

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            event.preventDefault();
            const currentTime = Date.now();
            if (currentTime - lastScrollTime < 1100) {
                return;
            }

            if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
                setCurrentSectionIndex((prev) => prev + 1);
            } else if (event.deltaY < 0 && currentSectionIndex > 0) {
                setCurrentSectionIndex((prev) => prev - 1);
            }

            setLastScrollTime(currentTime);
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSectionIndex, lastScrollTime]);

    useEffect(() => {
        if (!hasLoaded) {
            setHasLoaded(true);
            return;
        }

        scroller.scrollTo(sections[currentSectionIndex], {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    }, [currentSectionIndex, hasLoaded]);

    return (
        <div className="space-y-12"> {/* Ajoute un espace de 12 unités entre les sections */}
            {children}
        </div>
    );
};

export default Wrapper;

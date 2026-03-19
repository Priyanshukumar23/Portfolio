import React, { useState, useEffect, useRef } from 'react';

export default function Typewriter({ text, speed = 100, onComplete }) {
    const [index, setIndex] = useState(0);
    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        setIndex(0);

        const intervalId = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex >= text.length) {
                    clearInterval(intervalId);
                    if (onCompleteRef.current) onCompleteRef.current();
                    return prevIndex;
                }
                return prevIndex + 1;
            });
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return <span>{text.substring(0, index)}</span>;
}

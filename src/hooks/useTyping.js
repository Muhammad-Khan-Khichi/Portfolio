import { useState, useEffect, useRef } from 'react';

export function useTyping(strings = [], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (strings.length === 0) return;

    const currentString = strings[stringIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < currentString.length) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(currentString.slice(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(currentString.slice(0, displayText.length - 1));
          }, deletingSpeed);
        } else {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    };

    handleTyping();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, stringIndex, strings, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

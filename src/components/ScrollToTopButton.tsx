import { useCallback, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = useCallback(() => {
		setIsVisible(window.scrollY > 200);
	}, []);

	useEffect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (!isVisible) return null;

	return (
		<button
			onClick={scrollToTop}
			className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 shadow-lg"
			aria-label="Scroll to top"
		>
			<ArrowUp size={24} />
		</button>
	);
}



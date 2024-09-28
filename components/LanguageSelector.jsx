import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const languages = [
    ['en', 'English'],
    ['lg', 'Luganda'],
    ['sw', 'Swahili'],
];

const LanguageSelector = () => {
    const router = useRouter();
    const [selectedLang, setSelectedLang] = useState('en');

    // Effect to set the initial language from the router locale
    useEffect(() => {
        setSelectedLang(router.locale || 'en');
    }, [router.locale]);

    // Effect to load Google Translate script and initialize it
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    //     script.async = true;
    //     document.body.appendChild(script);

    //     // Define the callback function after the script is loaded
    //     window.googleTranslateElementInit = function() {
    //         new window.google.translate.TranslateElement({
    //             pageLanguage: 'en', // Default page language
    //             includedLanguages: 'lg,en,sw',
    //             // layout: google.translate.TranslateElement.InlineLayout.SIMPLE // Simple dropdown layout
    //         }, 'google_translate_element');
    //     };

    //     return () => {
    //         // Cleanup script if component is unmounted
    //         document.body.removeChild(script);
    //     };
    // }, []);

    // Handle language change
    const handleChange = (e) => {
        const lang = e.target.value;
        router.push(router.asPath, router.asPath, { locale: lang });
        setSelectedLang(lang);
    };

    return (
        <select className="focus:outline-none hover:cursor-pointer p-4 bg-transparent"
            value={selectedLang}
            onChange={handleChange}
        >
            {languages.map(([code, name]) => (
                <option key={code} value={code}  className="hover:cursor-pointer border-fuchsia-600 rounded">
                    {name}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
import React, { useEffect } from 'react'

const Header = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        // Define the callback function after the script is loaded
        window.googleTranslateElementInit = function() {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en', // Default page language
                includedLanguages: 'ach,lg,es,en,fr,sw',
                // layout: google.translate.TranslateElement.InlineLayout.SIMPLE // Simple dropdown layout
            }, 'google_translate_element');
        };

        return () => {
            // Cleanup script if component is unmounted
            document.body.removeChild(script);
        };
    }, []);


    return ( 
        <div className="header">
            <div id="google_translate_element"></div>
            <h2>Header</h2>
        </div>
     );
}
 
export default Header;

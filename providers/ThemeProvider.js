
import { ThemeContext, themes } from 'context/ThemeContext';
import { useState, useContext, useMemo, useEffect, useCallback } from 'react';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const savedThemeType = window.localStorage.getItem('theme');
        if (savedThemeType === themes.dark.type || savedThemeType === themes.light.type) {
            setTheme(themes[savedThemeType]);
            return;
        }

        const mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

        if (!mediaQuery) {
            setTheme(themes.light);
            return;
        }

        const applySystemTheme = () => {
            setTheme(mediaQuery.matches ? themes.dark : themes.light);
        };

        applySystemTheme();

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', applySystemTheme);
            return () => mediaQuery.removeEventListener('change', applySystemTheme);
        }

        if (typeof mediaQuery.addListener === 'function') {
            mediaQuery.addListener(applySystemTheme);
            return () => mediaQuery.removeListener(applySystemTheme);
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((currentTheme) => {
            const nextTheme = currentTheme.type === themes.dark.type
                ? themes.light
                : themes.dark;

            if (typeof window !== 'undefined') {
                window.localStorage.setItem('theme', nextTheme.type);
            }

            return nextTheme;
        });
    }, []);

    const themeAPI = useMemo(() => {
        return {
            theme,
            toggleTheme
        }
    }, [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={themeAPI}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;

import { useEffect } from 'react';


const useDynamicTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Shakib's Kitchen`;
    }, [title])
};


export default useDynamicTitle;
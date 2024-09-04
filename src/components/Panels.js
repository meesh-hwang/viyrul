import { useState } from "react";
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery

const Panels = ({ list, category, onClick }) => {
    
    const [itemTxt, setItemTxt] = useState(null);
    const clickHandler = (id) => {
        if (onClick) {
            onClick(id);
            setItemTxt((prev) => (prev === id ? null : id));
        }
    };

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const renderedItems = list.map((item) => (
        <div
            key={item.id} 
            className={isMobile ? `${category}-card mobile` : `${category}-card`}
        >
            <div className='card-wrapper' onClick={() => clickHandler(item.id)} style={{ cursor: !onClick ? 'not-allowed' : 'pointer' }}>
                {Array(9).fill().map((_, index) => (
                    <span key={index} className="t_over"></span>
                ))}
                {itemTxt === item.id ? (
                    <div className='card'>
                        <p>{item.desc}</p>
                    </div>
                ) : (
                    <div className='card'>
                        <img src={item.img} alt={item.title} />
                        <h4>{item.title}</h4>
                        <h5>{item.caption}</h5>
                    </div>
                )}
            </div>
        </div>
    ));

    return (
        <div className={`${category}s`}>
            {renderedItems}
        </div>
    );
}

export default Panels;

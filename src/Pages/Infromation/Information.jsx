import React from 'react';
import InfoCard from '../../Components/InfoCard/InfoCard';
import { infromationPageData } from '../../Components/InfoCard/InfocardData';


const Information = () => {
    return (
        <section id="informtaion-display-board">
            <h2 className="mb-3">How it Work</h2>

            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {infromationPageData?.map((card, index) => <InfoCard info={card} index={index}></InfoCard>)}
            </div>
        </section>
    );
};

export default Information;
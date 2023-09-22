import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const items = [
    {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: 'Slide 1',
        title: 'Covid Happiness Analysis, Python',
        caption: 'Utilized Python and Spark (PySpark) on a Linux system to compare sentiment analysis scores of hundreds of thousands of Yelp restaurant reviews and cross referenced that data with Covid deaths over time ',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: 'Slide 2',
        title: 'Memory Allocator, C',
        caption: 'Implemented a memory allocator by storing virtual memory spaces in a doubly linked list and implementing functions to remove, add, and merge memory spaces when necessary',
        key: 2,
    },
    {
        src: 'https://picsum.photos/id/678/1200/400',
        altText: 'Slide 3',
        title: 'Contraceptive Method Choice Analysis Modelling, R',
        caption: 'Tested several predictive models for predicting contraceptive method choice based on a variety of variables, the optimal model being Random Forest with a 27.7% misclassification rate',
        key: 3,
    },
];

function KeyProjects(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <div class="keyProjects">
            <h1 class="title">Key Projects</h1>
            <br/>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}

export default KeyProjects;

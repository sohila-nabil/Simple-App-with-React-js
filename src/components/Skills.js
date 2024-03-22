import React from 'react'
import CircleProgress from './CircleProgress'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

function Skills() {
  //   const data = [
  //     { id: 1, percentage: 98, colour: "rgb(174, 42, 85)", name: "HTML" },
  //     { id: 2, percentage: 90, colour: "rgb(174, 42, 85)", name: "CSS" },
  //     { id: 3, percentage: 85, colour: "rgb(174, 42, 85)", name: "JavaScript" },
      
  // ];
 
  return (
    <div className="skills">
      <div className="container">
        <div className="prog-all">
          <div className="info">
            <h3>Skills</h3>
            <p>you can see my skills here</p>
          </div>
          <div className="prog-items">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <CircleProgress
                percentage={98}
                colour="rgb(174, 42, 85)"
                text="HTML"
              />
              <CircleProgress
                percentage={97}
                colour="rgb(174, 42, 85)"
                text="CSS"
              />
              <CircleProgress
                percentage={89}
                colour="rgb(174, 42, 85)"
                text="JavaScript"
              />
              <CircleProgress
                percentage={86}
                colour="rgb(174, 42, 85)"
                text="Bootstrap"
              />
              <CircleProgress
                percentage={70}
                colour="rgb(174, 42, 85)"
                text="React"
              />
            </Carousel>
          </div>
          ;
        </div>
      </div>
    </div>
  );
}
export default Skills

//  <div className="prog-items">
//               {data.map((item) => {
//                 return (
//                   <div className="prog-item" key={item.id}>
//                     <CircleProgress
//                       percentage={item.percentage}
//                       colour={item.colour}
//                     />
//                     <span>{item.name}</span>
//                   </div>
//                 );
//               })}
//             </div>
//               <CircleProgress percentage={90} colour="rgb(174, 42, 85)" />

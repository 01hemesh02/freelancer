import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const CounterArea = () => {
    const [counterOn, SetCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => SetCounterOn(true)} onExit={() => SetCounterOn(true)}>
            <section className="counter-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 counter-item">
                            <div className="single-counter">
                                <div className="counter-contents">
                                    <h2>
                                        <span className="counter-number clrwite">
                                            {counterOn && <CountUp start={0} end={15} duration={3} className='clrwite' />}

                                        </span>
                                        <span className='clrwite'>+</span>
                                    </h2>
                                    <h3 className="counter-heading">Collaboration</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 counter-item">
                            <div className="single-counter">
                                <div className="counter-contents">
                                    <h2>
                                        <span className="counter-number clrwite">
                                            {counterOn && <CountUp start={0} end={100} duration={3} className='clrwite' />}
                                        </span>
                                        <span className='clrwite'>+</span>
                                    </h2>
                                    <h3 className="counter-heading">Complete Projects</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 counter-item">
                            <div className="single-counter">
                                <div className="counter-contents">
                                    <h2>
                                        <span className="counter-number clrwite">
                                            {counterOn && <CountUp start={0} end={50} duration={3} className='clrwite' />}
                                        </span>
                                        <span className='clrwite'>+</span>
                                    </h2>
                                    <h3 className="counter-heading">Our Team</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 counter-item">
                            <div className="single-counter">
                                <div className="counter-contents">
                                    <h2>
                                        <span className="counter-number clrwite">
                                            {counterOn && <CountUp start={0} end={100} duration={3} className='clrwite' />}
                                        </span>
                                        <span className='clrwite'>%</span>
                                    </h2>
                                    <h3 className="counter-heading">Customer Satisfaction</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>

    );
}

export default CounterArea;
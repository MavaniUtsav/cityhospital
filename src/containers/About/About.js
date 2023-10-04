import React from 'react';
import { SubHeading2 } from '../../components/UI/Heading/Heading.style';
import BackBtn from '../../components/UI/BackBtn/BackBtn';
import OurTeam from '../NestedRouting Comp/OurTeam';
import Button from '../../components/UI/Button/Button';
import { Link, Outlet } from 'react-router-dom';
import AllMedicines from '../Home/AllMedicines';

function About(props) {
    return (
        <section id="about" className="about">
            <div className="container">
                <BackBtn />
                <div className="row">
                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center px-lg-5 abouttop">
                        <SubHeading2>Fusce nec risus at enim congue bibendum quis at augue. </SubHeading2>
                        <p>Proin tincidunt blandit fermentum. Ut gravida arcu non mi dapibus ullamcorper. Curabitur mollis, turpis eu
                            pellentesque finibus, nisi ex mattis quam, mollis aliquet mi massa non nunc. Pellentesque id felis elit.
                            Pellentesque blandit sem a nisi dictum, in pretium ante tincidunt.</p>
                        <p>Maecenas lobortis, nunc eu porttitor posuere, neque lectus rutrum leo, sit amet rutrum orci eros aliquam
                            mauris. Aliquam erat volutpat. Aenean eget dui ac lectus rutrum aliquam pulvinar ut massa. Duis sagittis
                            rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem </p>
                    </div>
                </div>
                <div id='nested'>
                    <Link to='ourteam'>
                        <Button btnType='outline' >Our Team</Button>
                    </Link>
                    <Link to='ourtreatments'>
                        <Button btnType='outline' >All Treatments</Button>
                    </Link>
                </div>
                <Outlet />

            </div>
        </section>
    );
}

export default About;
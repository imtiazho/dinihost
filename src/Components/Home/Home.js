import React from 'react';
import UpperNav from '../UpperNav/UpperNav';
import SecondNav from '../SecondNav/SecondNav';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import TopBanner from '../TopBanner/TopBanner';
import Heding from '../TopBanner/Heding/Heding';
import Services from '../Services/Services';
import About from '../About/About';
import DedicatedServer from '../DedicatedServer/DedicatedServer';
import VpsHosting from '../VpsHosting/VpsHosting';
import SharedHosting from '../SharedHosting/SharedHosting';
import ResellerHosting from '../ResellerHosting/ResellerHosting';
import Blogs from '../Blogs/Blogs';
import Facilities from '../Facilities/Facilities';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <UpperNav />
            <SecondNav />
            <DropDownMenu />
            <TopBanner />
            <Heding />
            <Services />
            <About />
            <DedicatedServer />
            <VpsHosting />
            <SharedHosting />
            <ResellerHosting />
            <Blogs />
            <Facilities />
            <Footer />
        </div>
    );
};

export default Home;
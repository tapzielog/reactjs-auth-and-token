import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../css/Dashboard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from './Navbar';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
        const filename = item.split('/').pop();  // Get the filename from the full path
        images[filename] = r(item);  // Store the imported image in the images object
    });
    return images;
};

const images = importAll(require.context('../images', false, /\.(jpg)$/));

const Dashboard = () => {
    const imageKeys = Object.keys(images);
    const { handleLogout } = useAuth();

    useEffect(() => {
        console.log("Images:", images);  // Log images object to check its contents
        console.log("Image Keys:", imageKeys);  // Log imageKeys to check its contents
    }, [imageKeys, images]);


    const handleLogoutClick = () => {
        handleLogout();
    };

    return (
        
        <Container className='m-auto mt-2'>
            <NavigationBar handleLogout={handleLogout} /> {/* Render the Navbar component */}
            <Row className='mt-1 mb-1'>
                <Col>
                    <div className='row d-flex justify-content-center'>
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay dynamicHeight>
                            {imageKeys.map((imageKey, index) => (
                                <div key={index} >
                                    <img src={images[imageKey]} alt={`Gallery image ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;

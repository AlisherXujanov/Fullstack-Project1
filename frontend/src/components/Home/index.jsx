import Carousel from '../Carousel'


function Home() {
    return (
        <main>
            <Carousel 
                dynamicHeight={false}
                width="100%"
                autoPlay={true}
                imgHeight="600px"
            />
        </main>
    );
}

export default Home;
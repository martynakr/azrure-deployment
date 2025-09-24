import dog from '../assets/dog-8100754_1280.jpg';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <img src={dog} alt="dog" style={{ width: '400px' }} />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                non unde totam omnis voluptatum dolorum a repellendus molestiae
                voluptates mollitia, ullam aperiam. Ipsam ipsa tempora laborum
                soluta corrupti obcaecati libero!
            </p>
        </div>
    );
};

export default Home;

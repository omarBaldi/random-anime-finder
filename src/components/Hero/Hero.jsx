import "./Hero.css";

function Hero() {
  return (
    <div className="heroContainer">
      <p className="heroText">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
        veritatis dolorem asperiores vel aspernatur velit hic facere, itaque
        reiciendis corporis dolores pariatur laboriosam ipsa minus illo veniam
        officiis ut. Id asperiores unde in veritatis excepturi cumque quod, vel
        facere animi corporis eveniet neque, voluptatibus cupiditate deleniti
        assumenda laboriosam. Dignissimos maiores ut molestiae aliquid vitae
        totam aperiam. Illum veritatis totam similique.
      </p>
      <div className="heroImgContainer">
        <img
          src="https://i.pinimg.com/originals/d0/45/1f/d0451f17a027d7630e6feb590cd7901f.jpg"
          alt="animeImg"
        />
      </div>
    </div>
  );
}
export default Hero;

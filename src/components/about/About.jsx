import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsa?
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          maiores. Corrupti minus quisquam excepturi placeat possimus vitae ipsa
          fuga explicabo dolorem. Dolorum quisquam consequatur accusantium
          tempora quasi illo. Eos sunt enim quod ex earum ullam facilis
          explicabo asperiores totam corporis, veniam incidunt fuga atque
          labore. Eos ratione, labore velit provident incidunt asperiores
          laboriosam, similique nostrum nam ducimus expedita adipisci, nobis
          nulla reiciendis officiis enim distinctio iste temporibus assumenda
          blanditiis rem fuga soluta in excepturi. Ratione doloremque cum
          nesciunt deserunt doloribus?
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              facere!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
